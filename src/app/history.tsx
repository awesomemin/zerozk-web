import { Streaming } from '@/type';
import HistoryItem from './historyItem';

export default function History({ history }: { history: Streaming[] }) {
  return (
    <div className="flex flex-col mx-5 mt-4">
      {history.map((streaming) => (
        <HistoryItem key={streaming.channelId} streaming={streaming} />
      ))}
    </div>
  );
}
