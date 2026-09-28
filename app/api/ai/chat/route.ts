import { NextResponse } from 'next/server'
import { chatWithSevenAI } from '@/lib/seven-ai'

export async function POST(req: Request) {
  try {
    const { message, context } = await req.json()
    if (!message) {
      return NextResponse.json({ message: 'Message is required' }, { status: 400 })
    }

    const result = await chatWithSevenAI([], message, context)
    return NextResponse.json(result)
  } catch (error: any) {
    console.error('API AI chat error:', error)
    return NextResponse.json(
      { reply: 'SevenAI is temporarily unavailable. Please retry in a moment.', blocked: false },
      { status: 500 }
    )
  }
}
