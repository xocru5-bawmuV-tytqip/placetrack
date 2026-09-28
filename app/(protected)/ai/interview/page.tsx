'use client'

import { useState } from 'react'
import { Sparkles, CheckCircle2, ArrowRight, Loader2, Award, Clock } from 'lucide-react'
import Link from 'next/link'
import toast from 'react-hot-toast'

export default function MockInterviewPage() {
  const [step, setStep] = useState<'setup' | 'interview' | 'result'>('setup')
  const [company, setCompany] = useState('Google')
  const [role, setRole] = useState('Software Development Engineer (SDE-1)')
  const [difficulty, setDifficulty] = useState('Hard')
  const [answer, setAnswer] = useState('')
  const [evaluating, setEvaluating] = useState(false)
  const [evaluation, setEvaluation] = useState<any>(null)

  const sampleQuestion =
    "You are designing a cache invalidation layer for a high-traffic microservices system at Google. If two concurrent requests try to evict the same key while another writes a new payload, how do you prevent stale reads without locking the entire cache cluster?"

  const handleStart = () => {
    setStep('interview')
  }

  const handleFillSample = () => {
    setAnswer(
      "I would implement distributed lease tokens using Redis with monotonic Generation IDs. When a cache key is evicted or updated, we issue an atomic CAS (Compare-And-Swap) instruction checking the generation token. If a concurrent write has a lower generation ID, it is dropped to prevent stale overwrites, keeping the cache cluster lock-free."
    )
  }

  const handleSubmitAnswer = async () => {
    if (!answer.trim()) {
      toast.error('Please enter an answer or click "Auto-fill sample answer"')
      return
    }

    setEvaluating(true)
    try {
      const res = await fetch('/api/ai/interview', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          question: sampleQuestion,
          answer,
          company,
          role,
        }),
      })

      const data = await res.json()
      setEvaluation(data)
      setStep('result')
    } catch (err) {
      toast.error('Evaluation failed. Please try again.')
    } finally {
      setEvaluating(false)
    }
  }

  return (
    <div className="min-h-screen bg-[#060913] text-slate-100 p-4 sm:p-8">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Top Header */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-4">
          <div>
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-blue-500/20 text-blue-400 text-xs font-bold border border-blue-500/30 mb-1">
              PRO TIER FEATURE
            </div>
            <h1 className="text-2xl font-extrabold text-white">SevenAI Mock Interview Simulator</h1>
          </div>
          <Link href="/ai" className="text-xs text-slate-400 hover:text-white">
            Back to Advisor
          </Link>
        </div>

        {/* STEP 1: SETUP */}
        {step === 'setup' && (
          <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6">
            <div className="space-y-1">
              <h2 className="text-lg font-bold text-white">Configure Target Interview</h2>
              <p className="text-xs text-slate-400">
                SevenAI generates round-specific questions based on past Poornima University placement drives.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-300">Target Company</label>
                <select
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  className="w-full bg-slate-800 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white"
                >
                  <option>Google</option>
                  <option>Microsoft</option>
                  <option>Amazon</option>
                  <option>TCS Digital</option>
                  <option>Infosys Specialist Programmer</option>
                  <option>Deloitte</option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-300">Target Role</label>
                <select
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  className="w-full bg-slate-800 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white"
                >
                  <option>Software Development Engineer (SDE-1)</option>
                  <option>Frontend Engineer</option>
                  <option>Cloud / DevOps Engineer</option>
                  <option>Data Analyst</option>
                </select>
              </div>
            </div>

            <button
              onClick={handleStart}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold text-xs sm:text-sm shadow-lg shadow-blue-600/30 transition flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4" />
              Begin Technical Interview Simulation
            </button>
          </div>
        )}

        {/* STEP 2: INTERVIEW */}
        {step === 'interview' && (
          <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6">
            <div className="flex items-center justify-between text-xs text-slate-400">
              <span className="font-bold text-blue-400 uppercase">Question 1 of 3 • System Design</span>
              <span className="flex items-center gap-1 font-mono">
                <Clock className="w-3.5 h-3.5" /> 15:00 Remaining
              </span>
            </div>

            <div className="p-4 rounded-2xl bg-slate-800/60 border border-slate-700 text-xs sm:text-sm font-medium text-slate-100 leading-relaxed">
              "{sampleQuestion}"
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="text-xs font-semibold text-slate-300">Your Technical Explanation:</label>
                <button onClick={handleFillSample} className="text-[11px] text-blue-400 hover:underline">
                  Auto-fill sample answer
                </button>
              </div>
              <textarea
                rows={5}
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                placeholder="Explain your approach, concurrency strategy, and time/space complexity..."
                className="w-full bg-slate-800/90 border border-slate-700 rounded-xl p-3 text-xs text-white focus:outline-none focus:border-blue-500"
              />
            </div>

            <div className="flex items-center justify-between pt-2">
              <button onClick={() => setStep('setup')} className="text-xs text-slate-400 hover:text-white">
                Cancel
              </button>
              <button
                onClick={handleSubmitAnswer}
                disabled={evaluating}
                className="px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs shadow-md transition flex items-center gap-2 disabled:opacity-50"
              >
                {evaluating ? <Loader2 className="w-4 h-4 animate-spin" /> : 'Submit to SevenAI'}
              </button>
            </div>
          </div>
        )}

        {/* STEP 3: RESULT */}
        {step === 'result' && evaluation && (
          <div className="bg-slate-900/80 border border-emerald-500/40 rounded-3xl p-6 sm:p-8 space-y-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-white">SevenAI Assessment Report</h2>
                  <p className="text-xs text-slate-400">Target: {company} • {role}</p>
                </div>
              </div>
              <div className="text-right">
                <div className="text-2xl font-black text-emerald-400">{evaluation.score} / 10</div>
                <span className="text-[10px] text-slate-400">On-Campus Clearance: High</span>
              </div>
            </div>

            <div className="space-y-4 text-xs">
              <div className="p-4 rounded-xl bg-slate-800/60 border border-slate-700 space-y-1">
                <span className="font-bold text-emerald-400">Strengths:</span>
                <p className="text-slate-300 leading-relaxed">{evaluation.strengths}</p>
              </div>

              <div className="p-4 rounded-xl bg-slate-800/60 border border-slate-700 space-y-1">
                <span className="font-bold text-amber-400">Areas for Improvement:</span>
                <p className="text-slate-300 leading-relaxed">{evaluation.improvements}</p>
              </div>

              <div className="p-4 rounded-xl bg-slate-800/60 border border-slate-700 space-y-1">
                <span className="font-bold text-blue-400">SevenAI Summary Verdict:</span>
                <p className="text-slate-300 leading-relaxed">{evaluation.overallFeedback}</p>
              </div>
            </div>

            <div className="flex gap-3 pt-2">
              <button
                onClick={() => {
                  setAnswer('')
                  setStep('setup')
                }}
                className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs"
              >
                Practice Another Round
              </button>
              <Link href="/dashboard" className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold text-xs">
                Back to Dashboard
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
