import 'server-only';
import prisma from '@/shared/lib/prisma';

const PAGE_SIZE = 30;

export async function getMessages(
  conversationId: string,
  userId: string,
  cursor?: string,
) {
  const isParticipant = await prisma.conversation.count({
    where: { id: conversationId, participants: { some: { id: userId } } },
  });
  if (!isParticipant) throw new Error('FORBIDDEN');

  const messages = await prisma.message.findMany({
    where: { conversationId },
    orderBy: { createdAt: 'desc' },
    take: PAGE_SIZE + 1,
    ...(cursor && { cursor: { id: cursor }, skip: 1 }),
    select: {
      id: true,
      body: true,
      createdAt: true,
      senderId: true,
      readAt: true,
    },
  });

  const hasMore = messages.length > PAGE_SIZE;
  const items = hasMore ? messages.slice(0, PAGE_SIZE) : messages;

  const nextCursor = hasMore ? items[items.length - 1].id : null;
  return { items: items.reverse(), nextCursor };
}
