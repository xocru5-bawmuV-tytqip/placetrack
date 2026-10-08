import { NextRequest, NextResponse } from 'next/server'
import { evaluateResumeATS } from '@/lib/seven-ai'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { resumeText, targetCompany, targetRole, jobDescription } = body

    if (!resumeText || typeof resumeText !== 'string' || resumeText.trim().length < 20) {
      return NextResponse.json(
        { error: 'Please provide valid resume text (at least 20 characters) to analyze.' },
        { status: 400 }
      )
    }

    const result = await evaluateResumeATS(
      resumeText.trim(),
      targetCompany || 'Amazon India',
      targetRole || 'Software Development Engineer (SDE-1)',
      jobDescription
    )

    return NextResponse.json(result)
  } catch (err: any) {
    console.error('ATS evaluation error:', err)
    return NextResponse.json(
      { error: err.message || 'Failed to evaluate ATS score. Please try again.' },
      { status: 500 }
    )
  }
}
