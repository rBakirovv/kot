import { ConversationListItem } from '../../model/types';

export async function fetchConversations(): Promise<ConversationListItem[]> {
  const res = await fetch('/api/conversations');
  if (!res.ok) throw new Error('Не удалось загрузить чаты');
  return res.json();
}

export const conversationsQuery = {
  queryKey: ['conversations'] as const,
  queryFn: fetchConversations,
};
