import { ConversationList } from '@/widgets/conversation-list/';
import { ConversationView } from '@/widgets/conversation-view';

export default function Home() {
  return (
    <>
      <ConversationList />
      <ConversationView />
    </>
  );
}
