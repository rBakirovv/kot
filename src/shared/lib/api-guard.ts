import { headers } from 'next/headers';
import { NextResponse } from 'next/server';
import { auth } from './auth';

type Session = NonNullable<Awaited<ReturnType<typeof auth.api.getSession>>>;

type GuardResult =
  | { session: Session; response?: never }
  | { session?: never; response: NextResponse };

export async function getApiSession(): Promise<GuardResult> {
  const session = await auth.api.getSession({ headers: await headers() });

  if (!session) {
    return {
      response: NextResponse.json({ error: 'Unauthorized' }, { status: 401 }),
    };
  }

  return { session };
}
