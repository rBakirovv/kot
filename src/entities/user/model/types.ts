import type { User as PrismaUser } from '@/generated/prisma/client';

export type Role = 'student' | 'teacher' | 'admin';

export type User = Pick<PrismaUser, 'id' | 'name' | 'image'> & {
  role: Role;
};
