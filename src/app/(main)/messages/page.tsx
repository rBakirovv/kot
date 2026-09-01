import { headers } from 'next/headers';
import { dehydrate, HydrationBoundary } from '@tanstack/react-query';
import { usersQuery } from '@/entities/user/api/fetch-users';
import { getUsers } from '@/entities/user/api/get-users';
import { auth } from '@/shared/lib/auth';
import { getQueryClient } from '@/shared/lib/query-client';
import { ConversationList } from '@/widgets/conversation-list/';
import { ConversationView } from '@/widgets/conversation-view';

export default async function MessagesPage() {
  const session = await auth.api.getSession({ headers: await headers() });
  if (!session) return null;

  const queryClient = getQueryClient();
  await queryClient
    .query({
      queryKey: usersQuery.queryKey,
      queryFn: () => getUsers(session.user.id),
    })
    .catch(() => {});

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <ConversationList />
      <ConversationView />
    </HydrationBoundary>
  );
}
