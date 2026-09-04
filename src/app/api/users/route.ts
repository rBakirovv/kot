import { NextResponse } from 'next/server';
import { getApiSession } from '@/shared/lib/api-guard';
import { getUsers } from '@/entities/user/server';

export async function GET() {
  const { session, response } = await getApiSession();
  if (response) return response;

  const users = await getUsers(session.user.id);
  return NextResponse.json(users);
}
