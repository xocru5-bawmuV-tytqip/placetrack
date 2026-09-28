import { NextResponse } from 'next/server';
import { COMPANIES_DATA } from '@/lib/placement-data';

export async function GET() {
  return NextResponse.json({
    success: true,
    total: COMPANIES_DATA.length,
    companies: COMPANIES_DATA,
  });
}
