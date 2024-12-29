import Image from 'next/image';

export default function Streaming() {
  const streamingTitle = '페이트 스테이 나이트 리마스터 (페이트 모르는 뇌)';
  const channelName = '소풍왔니';
  return (
    <section className="mx-5">
      <Image
        src="https://livecloud-thumb.akamaized.net/chzzk/livecloud/KR/stream/26446578/live/9797902/record/35316513/thumbnail/image_480.jpg?date=1735456170000"
        width={853}
        height={480}
        alt="thumbnail of live streaming"
        className="w-full rounded-lg"
      />
      <h2 className="font-bold mt-1">{streamingTitle}</h2>
      <div className="flex gap-1 items-center mt-1">
        <Image
          src="https://nng-phinf.pstatic.net/MjAyNDEyMjJfMTgz/MDAxNzM0ODAwNjc0ODEx.K7HVG9c1uwzhhNUfDyHEKUVBsZ5Hn_xgsHzgxlyl5fUg.ki-y9g3mniRhaRsfJIUB6Df9U37Hlzz2pXER1Ue5WWAg.JPEG/SNOW_20241122_111516_397.jpg?type=f120_120_na"
          alt="profile picture of the channel"
          width={120}
          height={120}
          className="w-6 h-6 rounded-full"
        />
        <p className="text-[#777777] font-bold">{channelName}</p>
      </div>
      <div className="text-sm font-light text-center mt-2 py-1 bg-[#333333]">
        1시간 35분 째 방송 중
      </div>
    </section>
  );
}
