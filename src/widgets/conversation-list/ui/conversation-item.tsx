import type { User } from '@/entities/user/model/types';
import { getInitials } from '@/shared/lib/utils';

export function ConversationItem({ user }: { user: User }) {
  return (
    <li>
      <button
        type="button"
        className="group/item hover:bg-muted focus-visible:ring-ring/50 flex w-full items-center gap-3 rounded-2xl px-2 py-2 text-left transition-colors duration-200 outline-none focus-visible:ring-[3px]"
      >
        <span
          aria-hidden
          className="bg-muted text-muted-foreground group-hover/item:bg-background flex size-9 shrink-0 items-center justify-center rounded-full text-xs font-medium transition-colors duration-200"
        >
          {getInitials(user.name)}
        </span>
        <span className="truncate text-sm font-medium">{user.name}</span>
      </button>
    </li>
  );
}
