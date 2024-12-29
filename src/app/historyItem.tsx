import { Streaming } from '@/type';
import Image from 'next/image';

export default function HistoryItem({ streaming }: { streaming: Streaming }) {
  return (
    <>
      <a
        href={`https://chzzk.naver.com/live/${streaming.channelId}`}
        target="_blank"
        className="py-2 border-b border-[#333333]"
      >
        <div className="flex-grow break-words mb-1">{streaming.liveTitle}</div>
        <div className="flex flex-shrink-0 items-center gap-1">
          <Image
            src={
              streaming.channelImageUrl ||
              'https://ssl.pstatic.net/cmstatic/nng/img/img_anonymous_square_gray_opacity2x.png?type=f120_120_na'
            }
            width={120}
            height={120}
            alt="cha"
            className="w-6 h-6 rounded-full"
          />
          <div className="text-[#777777] font-bold">
            {streaming.channelName}
          </div>
        </div>
      </a>
    </>
  );
}
