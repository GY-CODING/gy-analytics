import { NextResponse } from 'next/server';

export async function GET(_req: any, _res: any): Promise<NextResponse> {
  const response = await fetch(`${process.env.API_URL}/characters/game/list`, {
    method: 'GET',
  });
  const data = await response.json();
  if (response.ok) {
    return NextResponse.json({ data });
  }

  return NextResponse.json({ error: data }, { status: response.status });
}
