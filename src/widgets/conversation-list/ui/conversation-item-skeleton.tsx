import { Skeleton } from '@/shared/components/ui/skeleton';

export function ConversationItemSkeleton() {
  return (
    <div className="-mx-2 flex items-center gap-3 px-2 py-2">
      <Skeleton className="size-9 rounded-full" />
      <Skeleton className="h-5 w-[120px]" />
    </div>
  );
}
