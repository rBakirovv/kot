import { headers } from 'next/headers';
import { NextResponse } from 'next/server';
import { auth } from '@/shared/lib/auth';
import { getUsers } from '@/entities/user/api/get-users';

export async function GET() {
  const session = await auth.api.getSession({ headers: await headers() });
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const users = await getUsers(session.user.id);
  return NextResponse.json(users);
}
