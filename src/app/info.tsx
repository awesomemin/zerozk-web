'use client';

import { Dispatch, SetStateAction } from 'react';
import { IoMdClose } from 'react-icons/io';

export default function Info({
  setIsInfoVisible,
}: {
  setIsInfoVisible: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <div className="absoulte top-20 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-white text-black w-fit absolute text-center p-1 rounded-xl text-sm">
      <div>
        썸네일을 클릭하면
        <br />
        방송을 시청할 수 있습니다
      </div>
      <IoMdClose
        onClick={() => {
          setIsInfoVisible(false);
          console.log('cli');
        }}
      />

      <svg
        width="200"
        height="200"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute -z-10"
      >
        <polygon points="78,135 68,120 88,120" fill="white" />
      </svg>
    </div>
  );
}
