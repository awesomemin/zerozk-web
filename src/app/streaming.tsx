import Image from 'next/image';
import Button from './button';
import { Streaming } from '@/type';

export default async function StreamingInfo() {
  const numberOfStreamingsWithZeroUser = await fetch(
    'http://localhost:4000/streaming/number'
  ).then((res) => res.json());
  const currentStreaming: Streaming = await fetch(
    `http://localhost:4000/streaming/${Math.floor(
      Math.random() * numberOfStreamingsWithZeroUser
    )}`
  ).then((res) => res.json());

  const streamingTitle = currentStreaming.liveTitle;
  const channelName = currentStreaming.channelName;
  const thumbnailImgUrl = currentStreaming.liveThumbnailImageUrl.replace(
    '{type}',
    '480'
  );
  const channelImgUrl = currentStreaming.channelImageUrl;
  const liveStartTime = new Date(currentStreaming.openDate);
  const currentTime = new Date();
  const diffMs = currentTime.getTime() - liveStartTime.getTime();
  return (
    <section className="mx-5">
      <Image
        src={thumbnailImgUrl}
        width={853}
        height={480}
        alt="thumbnail of live streaming"
        className="w-full rounded-lg"
      />
      <h2 className="font-bold mt-1">{streamingTitle}</h2>
      <div className="flex gap-1 items-center mt-1">
        <Image
          src={
            channelImgUrl ||
            'https://ssl.pstatic.net/cmstatic/nng/img/img_anonymous_square_gray_opacity2x.png?type=f120_120_na'
          }
          alt="profile picture of the channel"
          width={120}
          height={120}
          className="w-6 h-6 rounded-full"
        />
        <p className="text-[#777777] font-bold">{channelName}</p>
      </div>
      <div className="text-sm font-light text-center mt-2 py-1 bg-[#333333]">
        {formatMilliseconds(diffMs)}째 방송 중
      </div>
      <Button />
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
