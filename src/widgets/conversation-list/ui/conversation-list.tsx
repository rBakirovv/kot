'use client';

import { usersQuery } from '@/entities/user/api/fetch-users';
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from '@/shared/components/ui/card';
import { useQuery } from '@tanstack/react-query';
import { MessageCircle } from 'lucide-react';
import { ConversationItem } from './conversation-item';
import { ConversationItemSkeleton } from './conversation-item-skeleton';

export function ConversationList() {
  const { data: users, isPending, error } = useQuery(usersQuery);

  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>
          <div className="flex items-center gap-2">
            Чаты
            <MessageCircle size={16} />
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent className="min-h-0 flex-1 overflow-y-auto">
        {isPending && (
          <ConversationItemSkeleton />
        )}

        {error && <p className="text-destructive text-sm">{error.message}</p>}

        {users?.length === 0 && (
          <p className="text-muted-foreground text-sm">Пользователи не найдены</p>
        )}

        {users && users.length > 0 && (
          <ul className="-mx-2 flex flex-col gap-1">
            {users.map((user) => (
              <ConversationItem key={user.id} user={user} />
            ))}
          </ul>
        )}
      </CardContent>
    </Card>
  );
}
