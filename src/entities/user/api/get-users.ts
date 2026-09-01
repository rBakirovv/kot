import 'server-only';
import prisma from '@/shared/lib/prisma';
import type { Role, User } from '../model/types';

const ROLES: readonly string[] = ['student', 'teacher', 'admin'];

function toRole(value: string): Role {
  return ROLES.includes(value) ? (value as Role) : 'student';
}

export async function getUsers(excludeId: string): Promise<User[]> {
  const users = await prisma.user.findMany({
    where: { id: { not: excludeId } },
    select: { id: true, name: true, image: true, role: true },
    orderBy: { name: 'asc' },
  });

  return users.map((user) => ({ ...user, role: toRole(user.role) }));
}
