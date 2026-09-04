import type { getMessages } from '../api/server/get-messages';

export type MessageItem = Awaited<
  ReturnType<typeof getMessages>
>['items'][number];
