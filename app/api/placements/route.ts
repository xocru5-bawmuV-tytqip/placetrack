import { NextResponse } from 'next/server';
import { PLACEMENTS_DATA } from '@/lib/placement-data';

export async function GET() {
  return NextResponse.json({
    success: true,
    total: PLACEMENTS_DATA.length,
    placements: PLACEMENTS_DATA,
  });
}
