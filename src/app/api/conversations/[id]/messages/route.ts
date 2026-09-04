import { getMessages } from '@/entities/message/';
import { getApiSession } from '@/shared/lib/api-guard';
import { logger } from '@/shared/lib/logger';
import { NextResponse } from 'next/server';

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { session, response } = await getApiSession();
  if (response) return response;

  const { id } = await params;
  const cursor = new URL(request.url).searchParams.get('cursor') ?? undefined;

  try {
    return NextResponse.json(await getMessages(id, session.user.id, cursor));
  } catch (error) {
    if (error instanceof Error && error.message === 'FORBIDDEN') {
      return NextResponse.json({ error: 'Нет доступа' }, { status: 403 });
    }

    logger.error(
      { err: error, conversationId: id, userId: session.user.id, cursor },
      'Не удалось загрузить сообщения',
    );

    return NextResponse.json(
      { error: 'Не удалось загрузить сообщения' },
      { status: 500 },
    );
  }
}
