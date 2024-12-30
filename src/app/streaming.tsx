'use client';

import Image from 'next/image';
import { Streaming } from '@/type';
import { useEffect, useState } from 'react';
import { getRandomStreaming } from '@/fetch';
import History from './history';

export default function StreamingInfo({
  initialStreaming,
}: {
  initialStreaming: Streaming | null;
}) {
  const [isThumbnailLoaded, setIsThumbnailLoaded] = useState(false);
  const [isChannelImageLoaded, setIsChannelImageLoaded] = useState(false);
  const [history, setHistory] = useState<Streaming[]>([]);
  const [currentStreaming, setCurrentStreaming] = useState(initialStreaming);
  const [nextStreaming, setNextStreaming] = useState(initialStreaming);

  useEffect(() => {
    async function getNextStreaming() {
      let randomStreaming = await getRandomStreaming();
      if (!randomStreaming || !currentStreaming) {
        return;
      }
      let found;
      while (true) {
        if (!randomStreaming) {
          return;
        }
        found = history.find(
          (streaming) => streaming.channelId === randomStreaming?.channelId
        );
        if (
          !found &&
          randomStreaming.channelId !== currentStreaming.channelId
        ) {
          break;
        }
        randomStreaming = await getRandomStreaming();
      }
      setNextStreaming(randomStreaming);
    }
    getNextStreaming();
  }, []);

  async function handleButtonClick() {
    setIsThumbnailLoaded(false);
    setIsChannelImageLoaded(false);
    if (!currentStreaming) return;
    setHistory((prevHistory) => [currentStreaming, ...prevHistory]);
    if (history.length >= 30) {
      setHistory((prevHistory) => prevHistory.slice(0, -1));
    }
    setCurrentStreaming(nextStreaming);
    let randomStreaming = await getRandomStreaming();
    let found;
    while (true) {
      found = history.find(
        (streaming) => streaming.channelId === randomStreaming?.channelId
      );
      if (!found && randomStreaming?.channelId !== currentStreaming.channelId) {
        break;
      }
      randomStreaming = await getRandomStreaming();
    }
    setNextStreaming(randomStreaming);
    if (!randomStreaming?.channelImageUrl) {
      setIsChannelImageLoaded(true);
    }
  }

  if (!currentStreaming || !nextStreaming) {
    return (
      <div className="flex flex-col items-center text-center gap-2 mt-20">
        <div className="text-xl font-bold">잠시만 기다려주세요.</div>
        <div className="text-sm">
          시청자가 0명인 스트리머 정보를 수집하고 있습니다.
        </div>
        <div className="text-sm text-[#777777]">
          보통 이 작업은 3분 이내로 완료됩니다.
        </div>
        <button
          onClick={() => {
            location.reload();
          }}
          className="bg-[#00FFA3] text-black w-fit px-2 py-1 rounded-lg font-semibold"
        >
          새로고침
        </button>
      </div>
    );
  }

  return (
    <>
      <section className="mx-5">
        <a
          href={`https://chzzk.naver.com/live/${currentStreaming.channelId}`}
          target="_blank"
        >
          <Image
            src={currentStreaming.liveThumbnailImageUrl.replace(
              '{type}',
              '1080'
            )}
            width={1920}
            height={1080}
            alt="thumbnail of live streaming"
            className="w-full rounded-lg"
            quality={100}
            priority
          />
        </a>
        <Image
          src={nextStreaming.liveThumbnailImageUrl.replace('{type}', '1080')}
          width={1920}
          height={1080}
          alt="preloaded thumbnail"
          className="hidden"
          quality={100}
          priority
          onLoad={() => setIsThumbnailLoaded(true)}
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
            priority
          />
          <Image
            src={
              nextStreaming.channelImageUrl ||
              'https://ssl.pstatic.net/cmstatic/nng/img/img_anonymous_square_gray_opacity2x.png?type=f120_120_na'
            }
            alt="preloaded channelImage"
            width={120}
            height={120}
            className="hidden"
            priority
            onLoad={() => setIsChannelImageLoaded(true)}
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
        {!isChannelImageLoaded || !isThumbnailLoaded ? (
          <div className="w-full h-10 mt-2 bg-[#00FFA3] flex items-center justify-center">
            <div className="w-6 h-6 rounded-full border-4 border-t-transparent border-black animate-spin"></div>
          </div>
        ) : (
          <button
            className="mt-2 w-full bg-[#00FFA3] text-black font-bold text-lg h-10"
            onClick={handleButtonClick}
            disabled={!isChannelImageLoaded || !isThumbnailLoaded}
          >
            다른 스트리머 보기
          </button>
        )}
      </section>
      <section>
        <History history={history} setHistory={setHistory} />
      </section>
    </>
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
