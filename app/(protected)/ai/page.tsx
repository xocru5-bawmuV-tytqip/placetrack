'use client'

import { useState } from 'react'
import { Bot, Send, AlertTriangle, Sparkles, RefreshCw, Loader2 } from 'lucide-react'
import Link from 'next/link'

interface Message {
  id: string
  role: 'user' | 'assistant'
  content: string
  isBlocked?: boolean
  flagReason?: string
}

export default function SevenAIPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      role: 'assistant',
      content:
        'Namaste! I am **SevenAI**, powered by **Gemini AI Pro**. Ask me *anything* — from Poornima University campus placements, company interview rounds, coding & system design, to general science, technology, mathematics, writing, and general knowledge queries!',
    },
  ])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSend = async (textToSend?: string) => {
    const query = textToSend || input
    if (!query.trim() || loading) return

    const userMsg: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: query,
    }

    setMessages((prev) => [...prev, userMsg])
    if (!textToSend) setInput('')
    setLoading(true)

    try {
      const res = await fetch('/api/ai/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: query }),
      })

      const data = await res.json()

      const assistantMsg: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: data.reply || 'No response received from SevenAI.',
        isBlocked: data.blocked,
        flagReason: data.flagReason,
      }

      setMessages((prev) => [...prev, assistantMsg])
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          role: 'assistant',
          content: 'Unable to reach SevenAI server right now. Please try again.',
        },
      ])
    } finally {
      setLoading(false)
    }
  }

  const promptSuggestions = [
    'Which companies visited Poornima for B.Tech CSE in 2024 and what was the highest CTC?',
    'Explain how React Server Components work under the hood with code examples.',
    'What are the top technical skills needed to get hired at Google or Microsoft in 2025?',
  ]

  return (
    <div className="min-h-screen bg-[#060913] text-slate-100 flex flex-col">
      {/* Header */}
      <div className="border-b border-slate-800 bg-slate-900/80 backdrop-blur-md px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center font-black text-lg text-white shadow-lg shadow-blue-500/30">
            7
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-base font-extrabold text-white">SevenAI Assistant</h1>
              <span className="px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-300 text-[10px] font-bold border border-blue-500/30">
                Gemini AI Pro
              </span>
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
            </div>
            <p className="text-xs text-slate-400">Powered by Gemini AI Pro • Campus Intelligence & General Assistant</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/ai/interview"
            className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-300 border border-slate-700"
          >
            <Sparkles className="w-3.5 h-3.5 text-blue-400" />
            Mock Interview Simulator
          </Link>
          <button
            onClick={() =>
              setMessages([
                {
                  id: 'welcome',
                  role: 'assistant',
                  content:
                    'Conversation reset. Ask any question to SevenAI (powered by Gemini AI Pro).',
                },
              ])
            }
            className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white"
            title="Reset Chat"
          >
            <RefreshCw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 max-w-4xl w-full mx-auto p-4 sm:p-6 space-y-4 overflow-y-auto custom-scrollbar">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex items-start gap-3 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            {msg.role === 'assistant' && (
              <div
                className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-xs text-white flex-shrink-0 ${
                  msg.isBlocked ? 'bg-red-600' : 'bg-blue-600'
                }`}
              >
                7
              </div>
            )}

            <div
              className={`p-4 rounded-2xl max-w-xl text-xs sm:text-sm leading-relaxed ${
                msg.role === 'user'
                  ? 'bg-blue-600 text-white shadow-md'
                  : msg.isBlocked
                  ? 'bg-red-950/30 border border-red-500/40 text-red-200'
                  : 'bg-slate-900/80 border border-slate-800 text-slate-200 shadow-sm'
              }`}
            >
              {msg.isBlocked && (
                <div className="flex items-center gap-1.5 text-red-400 font-bold text-xs mb-1.5">
                  <AlertTriangle className="w-4 h-4" />
                  <span>POLICY VIOLATION BLOCKED</span>
                </div>
              )}
              <div className="whitespace-pre-wrap">{msg.content}</div>
            </div>
          </div>
        ))}

        {loading && (
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center font-bold text-xs text-white">
              7
            </div>
            <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 text-xs text-slate-400 flex items-center gap-2">
              <Loader2 className="w-4 h-4 animate-spin text-blue-400" />
              <span>SevenAI (Gemini AI Pro) is generating response...</span>
            </div>
          </div>
        )}

        {/* Suggestion Chips */}
        {messages.length <= 2 && (
          <div className="pt-4 space-y-2">
            <p className="text-xs text-slate-500">Quick question prompts:</p>
            <div className="flex flex-wrap gap-2">
              {promptSuggestions.map((prompt, i) => (
                <button
                  key={i}
                  onClick={() => handleSend(prompt)}
                  className="text-left px-3 py-1.5 rounded-full text-xs transition border bg-slate-800/80 border-slate-700 text-slate-300 hover:bg-slate-700"
                >
                  {prompt}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Input Bar */}
      <div className="border-t border-slate-800 bg-slate-900/90 p-4">
        <div className="max-w-4xl mx-auto space-y-2">
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
              placeholder="Ask SevenAI anything (Powered by Gemini AI Pro)..."
              className="flex-1 bg-slate-800/80 border border-slate-700 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
            />
            <button
              type="submit"
              disabled={loading || !input.trim()}
              className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs sm:text-sm transition shadow-lg shadow-blue-600/30 disabled:opacity-50 flex items-center gap-1.5"
            >
              <span>Send</span>
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>
          <p className="text-[10px] text-slate-500 text-center">
            SevenAI • Powered by Gemini AI Pro • Ask any question
          </p>
        </div>
      </div>
    </div>
  )
}
