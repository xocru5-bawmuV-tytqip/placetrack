'use client'

import { useState } from 'react'
import { Send, Shield, AlertTriangle, MessageSquare, Check, User } from 'lucide-react'
import toast from 'react-hot-toast'

interface ChatMessage {
  id: string
  senderName: string
  content: string
  isOwn: boolean
  isBlocked?: boolean
  flagReason?: string
  time: string
}

export default function JuniorSeniorChatPage() {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      senderName: 'Arjun Sharma (Google)',
      content:
        'Hey Aman! Best of luck for the Google drive. Make sure you practice Trie, Segment Trees, and explain your distributed log project clearly.',
      isOwn: false,
      time: '10:30 AM',
    },
    {
      id: '2',
      senderName: 'You',
      content:
        'Thanks Arjun bhaiya! Did the interviewers ask about Raft consensus partition edge cases or the local storage layer?',
      isOwn: true,
      time: '10:34 AM',
    },
    {
      id: '3',
      senderName: 'Arjun Sharma (Google)',
      content:
        'Both! They specifically tested what happens when split-brain happens and how leader election recovers without data loss.',
      isOwn: false,
      time: '10:36 AM',
    },
  ])

  const [input, setInput] = useState('')
  const [warningsCount, setWarningsCount] = useState(0)

  const handleSend = async (customText?: string) => {
    const text = customText || input
    if (!text.trim()) return

    const newMsg: ChatMessage = {
      id: Date.now().toString(),
      senderName: 'You',
      content: text,
      isOwn: true,
      time: 'Just now',
    }

    try {
      const res = await fetch('/api/chat/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: text }),
      })

      const data = await res.json()

      if (data.blocked) {
        newMsg.isBlocked = true
        newMsg.flagReason = data.reason
        setWarningsCount((prev) => Math.min(prev + 1, 3))
        toast.error('Message blocked by SevenAI safety policy!')
      }

      setMessages((prev) => [...prev, newMsg])
      if (!customText) setInput('')

      if (!data.blocked) {
        // Simulated senior reply after 1.5s
        setTimeout(() => {
          setMessages((prev) => [
            ...prev,
            {
              id: (Date.now() + 1).toString(),
              senderName: 'Arjun Sharma (Google)',
              content:
                'Got your point. Focus on optimizing the time complexity to O(N) or O(log N). Feel free to send over your project architecture diagram!',
              isOwn: false,
              time: 'Just now',
            },
          ])
        }, 1200)
      }
    } catch (err) {
      toast.error('Failed to send message')
    }
  }

  return (
    <div className="min-h-screen bg-[#060913] text-slate-100 flex flex-col">
      {/* Top Banner */}
      <div className="bg-blue-950/40 border-b border-blue-500/20 px-6 py-2.5 flex items-center justify-between text-xs">
        <div className="flex items-center gap-2 text-blue-300">
          <Shield className="w-4 h-4 text-blue-400" />
          <span>
            <strong>Content Moderation Active:</strong> Junior-Senior chat is strictly for on-campus placements, projects, and study mentorship.
          </span>
        </div>
        {warningsCount > 0 && (
          <div className="flex items-center gap-1 text-red-400 font-bold bg-red-950/30 px-2 py-0.5 rounded border border-red-500/30">
            <AlertTriangle className="w-3.5 h-3.5" />
            <span>Warnings: {warningsCount}/3</span>
          </div>
        )}
      </div>

      <div className="flex-1 max-w-5xl w-full mx-auto p-4 sm:p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left: Contacts List */}
        <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-4 space-y-3">
          <h2 className="font-bold text-xs text-slate-400 uppercase tracking-wider">Placed Senior Mentors</h2>
          <div className="space-y-2">
            <div className="p-3 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center gap-3 cursor-pointer">
              <div className="w-8 h-8 rounded-full bg-blue-600 font-bold text-xs flex items-center justify-center text-white">
                AS
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-xs text-white">Arjun Sharma</span>
                  <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                </div>
                <p className="text-[11px] text-slate-400 truncate">Google (SDE-1) • 42 LPA</p>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-slate-800/40 hover:bg-slate-800 border border-slate-800 flex items-center gap-3 cursor-pointer">
              <div className="w-8 h-8 rounded-full bg-purple-600 font-bold text-xs flex items-center justify-center text-white">
                PV
              </div>
              <div className="flex-1 min-w-0">
                <span className="font-bold text-xs text-white">Priya Verma</span>
                <p className="text-[11px] text-slate-400 truncate">Microsoft • 38 LPA</p>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-slate-800/40 hover:bg-slate-800 border border-slate-800 flex items-center gap-3 cursor-pointer">
              <div className="w-8 h-8 rounded-full bg-amber-600 font-bold text-xs flex items-center justify-center text-white">
                RJ
              </div>
              <div className="flex-1 min-w-0">
                <span className="font-bold text-xs text-white">Rohit Jain</span>
                <p className="text-[11px] text-slate-400 truncate">Amazon • 32 LPA</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Active Chat Area */}
        <div className="md:col-span-2 bg-slate-900/80 border border-slate-800 rounded-2xl flex flex-col h-[650px] overflow-hidden">
          {/* Senior Profile Bar */}
          <div className="p-4 border-b border-slate-800 bg-slate-900 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center text-xs">
                AS
              </div>
              <div>
                <h3 className="font-bold text-xs text-white">Arjun Sharma</h3>
                <p className="text-[11px] text-slate-400">Poornima University Alumni • Placed at Google (42 LPA)</p>
              </div>
            </div>
            <span className="px-2.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 text-[10px] font-bold border border-emerald-500/30">
              Verified Senior
            </span>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 space-y-3 overflow-y-auto custom-scrollbar">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex flex-col ${msg.isOwn ? 'items-end' : 'items-start'}`}
              >
                <span className="text-[10px] text-slate-500 mb-1 px-1">{msg.senderName}</span>
                <div
                  className={`p-3 rounded-2xl max-w-md text-xs leading-relaxed ${
                    msg.isBlocked
                      ? 'bg-red-950/40 border border-red-500/40 text-red-200'
                      : msg.isOwn
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'bg-slate-800 text-slate-200 border border-slate-700'
                  }`}
                >
                  {msg.isBlocked && (
                    <div className="flex items-center gap-1 font-bold text-[11px] text-red-400 mb-1">
                      <AlertTriangle className="w-3.5 h-3.5" />
                      <span>{msg.flagReason || 'Message Blocked'}</span>
                    </div>
                  )}
                  <div>{msg.content}</div>
                  <span className="block text-[9px] text-slate-400 mt-1 text-right">{msg.time}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Test Triggers */}
          <div className="px-4 py-1.5 bg-slate-900 border-t border-slate-800 flex items-center gap-2 text-[11px]">
            <span className="text-slate-500">Quick Test:</span>
            <button
              onClick={() => handleSend('What DSA topics should I focus on for Google on-campus round 1?')}
              className="text-blue-400 hover:underline"
            >
              [Valid Question]
            </button>
            <button
              onClick={() => handleSend('Hey Arjun can we meet for a coffee date this Sunday?')}
              className="text-red-400 hover:underline"
            >
              [Test Inappropriate Question]
            </button>
          </div>

          {/* Input Bar */}
          <div className="p-3 bg-slate-900 border-t border-slate-800">
            <form
              onSubmit={(e) => {
                e.preventDefault()
                handleSend()
              }}
              className="flex gap-2"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask Arjun about company interview rounds, study tips, or project defense..."
                className="flex-1 bg-slate-800 border border-slate-700 rounded-xl px-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
              />
              <button
                type="submit"
                disabled={!input.trim()}
                className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs transition shadow-lg shadow-blue-600/30 disabled:opacity-50 flex items-center gap-1"
              >
                <Send className="w-3.5 h-3.5" />
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
