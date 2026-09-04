import 'server-only';
import prisma from '@/shared/lib/prisma';

export async function findOrCreateConversation(userId: string, peerId: string) {
  if (userId === peerId) throw new Error('SELF_CONVERSATION');

  const peer = await prisma.user.findUnique({
    where: { id: peerId },
    select: { id: true },
  });
  if (!peer) throw new Error('PEER_NOT_FOUND');

  const existing = await prisma.conversation.findFirst({
    where: {
      AND: [
        { participants: { some: { id: userId } } },
        { participants: { some: { id: peerId } } },
      ],
    },
    select: { id: true },
  });

  if (existing) return existing;

  return prisma.conversation.create({
    data: { participants: { connect: [{ id: userId }, { id: peerId }] } },
    select: { id: true },
  });
}
