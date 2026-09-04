import { useMutation, useQueryClient } from '@tanstack/react-query';
import { conversationsQuery } from './get-conversations';

export async function createConversation(
  peerId: string,
): Promise<{ id: string }> {
  const res = await fetch('/api/conversations', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ peerId }),
  });

  if (!res.ok) throw new Error('Не удалось создать чат');
  return res.json();
}

export function useCreateConversation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createConversation,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: conversationsQuery.queryKey });
    },
  });
}
