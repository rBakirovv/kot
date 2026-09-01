import 'server-only';
import prisma from '@/shared/lib/prisma';

export async function getUsers(excludeId: string) {
  return prisma.user.findMany({
    where: { id: { not: excludeId } },
    select: { id: true, name: true, image: true, role: true },
    orderBy: { name: 'asc' },
  });
}
