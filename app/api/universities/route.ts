import { NextResponse } from 'next/server';
import { UNIVERSITIES_DATA } from '@/lib/placement-data';

export async function GET() {
  return NextResponse.json({
    success: true,
    total: UNIVERSITIES_DATA.length,
    universities: UNIVERSITIES_DATA,
  });
}
