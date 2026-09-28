import PusherServer from 'pusher'
import PusherClient from 'pusher-js'

export const pusherServer = new PusherServer({
  appId: process.env.PUSHER_APP_ID || 'mock_app_id',
  key: process.env.PUSHER_KEY || 'mock_key',
  secret: process.env.PUSHER_SECRET || 'mock_secret',
  cluster: process.env.PUSHER_CLUSTER || 'ap2',
  useTLS: true,
})

export const getPusherClient = () => {
  return new PusherClient(process.env.NEXT_PUBLIC_PUSHER_KEY || 'mock_key', {
    cluster: process.env.NEXT_PUBLIC_PUSHER_CLUSTER || 'ap2',
  })
}

export async function triggerChatEvent(channel: string, event: string, data: any) {
  if (!process.env.PUSHER_APP_ID || process.env.PUSHER_APP_ID === 'mock_app_id') {
    return
  }
  try {
    await pusherServer.trigger(channel, event, data)
  } catch (err) {
    console.error('Pusher trigger error:', err)
  }
}
