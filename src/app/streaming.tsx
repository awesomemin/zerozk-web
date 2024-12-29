'use client';

import Image from 'next/image';
import { Streaming } from '@/type';
import { useEffect, useState } from 'react';
import { getRandomStreaming } from '@/fetch';

export default function StreamingInfo({
  initialStreaming,
}: {
  initialStreaming: Streaming;
}) {
  const [currentStreaming, setCurrentStreaming] = useState(initialStreaming);
  const [nextStreaming, setNextStreaming] =
    useState<Streaming>(initialStreaming);

  useEffect(() => {
    async function getNextStreaming() {
      const randomStreaming = await getRandomStreaming();
      setNextStreaming(randomStreaming);
    }
    getNextStreaming();
  }, []);

  async function handleButtonClick() {
    setCurrentStreaming(nextStreaming);
    const randomStreaming = await getRandomStreaming();
    setNextStreaming(randomStreaming);
  }

  return (
    <section className="mx-5">
      <Image
        src={currentStreaming.liveThumbnailImageUrl.replace('{type}', '480')}
        width={853}
        height={480}
        alt="thumbnail of live streaming"
        className="w-full rounded-lg"
        quality={100}
      />
      <h2 className="font-bold mt-1">{currentStreaming.liveTitle}</h2>
      <div className="flex gap-1 items-center mt-1">
        <Image
          src={
            currentStreaming.channelImageUrl ||
            'https://ssl.pstatic.net/cmstatic/nng/img/img_anonymous_square_gray_opacity2x.png?type=f120_120_na'
          }
          alt="profile picture of the channel"
          width={120}
          height={120}
          className="w-6 h-6 rounded-full"
        />
        <p className="text-[#777777] font-bold">
          {currentStreaming.channelName}
        </p>
        <div className="ml-auto bg-[#e01f1f] px-1 py-[2px] rounded font-bold text-xs">
          LIVE
        </div>
        <div className="bg-[#333333] px-1 py-[2px] rounded text-xs font-bold">
          0명
        </div>
      </div>
      <div className="text-sm font-light text-center mt-2 py-1 bg-[#333333]">
        {formatMilliseconds(
          new Date().getTime() - new Date(currentStreaming.openDate).getTime()
        )}
        째 방송 중
      </div>
      <button
        className="mt-2 w-full bg-[#00FFA3] text-black font-bold text-lg h-10"
        onClick={handleButtonClick}
      >
        다른 스트리머 보기
      </button>
    </section>
  );
}

function formatMilliseconds(ms: number) {
  const hours = Math.floor(ms / (1000 * 60 * 60)); // 밀리초를 시간으로 변환
  const minutes = Math.floor((ms % (1000 * 60 * 60)) / (1000 * 60)); // 나머지를 분으로 변환

  if (hours === 0) {
    return `${minutes}분`;
  } else {
    return `${hours}시간 ${minutes}분`;
  }
}
