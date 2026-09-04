import { ConversationListItem } from '@/entities/conversation';
import { getInitials } from '@/shared/lib/utils';

export function ConversationItem({
  conversation,
}: {
  conversation: ConversationListItem;
}) {
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
          {getInitials(conversation.peer.name)}
        </span>
        <div className="flex min-w-0 flex-1 flex-col gap-0.5">
          <span className="truncate text-sm font-medium">
            {conversation.peer.name}
          </span>
          <span className="text-muted-foreground truncate text-xs">
            {conversation.lastMessage?.body}
          </span>
        </div>
      </button>
    </li>
  );
}
