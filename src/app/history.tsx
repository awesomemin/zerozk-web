import { Streaming } from '@/type';
import HistoryItem from './historyItem';
import { MdDeleteForever } from 'react-icons/md';
import { Dispatch, SetStateAction } from 'react';

export default function History({
  history,
  setHistory,
}: {
  history: Streaming[];
  setHistory: Dispatch<SetStateAction<Streaming[]>>;
}) {
  return (
    <div className="flex flex-col mt-4 md:min-w-96 md:max-h-[80vh] md:overflow-y-scroll">
      <h2 className="flex items-center justify-center text-center font-bold tracking-widest">
        히스토리
        <span className="tracking-normal font-medium text-[#777777] text-sm">
          ({history.length})
        </span>
        <MdDeleteForever
          className="text-[#777777] ml-1 w-5 h-5"
          onClick={() => setHistory([])}
        />
      </h2>
      {history.map((streaming) => (
        <HistoryItem key={streaming.channelId} streaming={streaming} />
      ))}
    </div>
  );
}
