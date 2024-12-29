import { Streaming } from '@/type';
import HistoryItem from './historyItem';

export default function History({ history }: { history: Streaming[] }) {
  return (
    <div className="flex flex-col mx-5 mt-4">
      {history.length !== 0 && (
        <h2 className="text-center font-bold tracking-widest">
          히스토리
          <span className="tracking-normal font-medium text-[#777777]">
            ({history.length})
          </span>
        </h2>
      )}
      {history.map((streaming) => (
        <HistoryItem key={streaming.channelId} streaming={streaming} />
      ))}
    </div>
  );
}
