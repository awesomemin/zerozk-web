'use client';

import { useEffect } from 'react';

export default function Error({
  error,
}: {
  error: Error & { digest?: string };
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center text-center gap-2 mt-20">
      <div className="text-xl font-bold">에러가 발생했습니다.</div>
      <div className="text-sm">이용에 불편을 드려 죄송합니다.</div>
      <div className="text-sm text-[#777777]">
        빠른 시간 내에 복구하도록 하겠습니다.
      </div>
      <button
        onClick={() => {
          location.reload();
        }}
        className="bg-[#00FFA3] text-black w-fit px-2 py-1 rounded-lg font-semibold mt-5"
      >
        새로고침
      </button>
    </div>
  );
}
