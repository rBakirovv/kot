import type { getConversations } from '../api/server/get-conversations';

export type ConversationListItem = Awaited<
  ReturnType<typeof getConversations>
>[number];
