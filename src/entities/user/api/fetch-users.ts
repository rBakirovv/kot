import type { User } from '../model/types';

export async function fetchUsers(): Promise<User[]> {
  const res = await fetch('/api/users');
  if (!res.ok) throw new Error('Не удалось загрузить пользователей');
  return res.json();
}

export const usersQuery = {
  queryKey: ['users'] as const,
  queryFn: fetchUsers,
};
