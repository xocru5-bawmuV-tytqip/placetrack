import { NextResponse } from 'next/server';
import { INTERVIEW_QUESTIONS_DATA } from '@/lib/placement-data';

export async function GET() {
  return NextResponse.json({
    success: true,
    total: INTERVIEW_QUESTIONS_DATA.length,
    questions: INTERVIEW_QUESTIONS_DATA,
  });
}
