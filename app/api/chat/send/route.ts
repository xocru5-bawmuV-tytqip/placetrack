import { NextResponse } from 'next/server'
import { moderateChatMessage } from '@/lib/seven-ai'
import { triggerChatEvent } from '@/lib/pusher'

export async function POST(req: Request) {
  try {
    const { message, roomId, receiverId } = await req.json()
    if (!message) {
      return NextResponse.json({ message: 'Message content is required' }, { status: 400 })
    }

    // Safety moderation check
    const modResult = await moderateChatMessage(message)

    if (!modResult.allowed) {
      return NextResponse.json({
        blocked: true,
        reason: modResult.reason,
      })
    }

    // Trigger real-time WebSocket event via Pusher
    const channel = roomId ? `presence-room-${roomId}` : `private-chat`
    await triggerChatEvent(channel, 'new-message', {
      content: message,
      timestamp: new Date().toISOString(),
    })

    return NextResponse.json({
      blocked: false,
      success: true,
      message,
    })
  } catch (err: any) {
    console.error('API chat send error:', err)
    return NextResponse.json({ message: 'Error processing message' }, { status: 500 })
  }
}
