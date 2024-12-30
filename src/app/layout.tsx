import type { Metadata } from 'next';
import './globals.css';
import localFont from 'next/font/local';

const pretendard = localFont({
  src: '../../public/PretendardVariable.woff2',
});

export const metadata: Metadata = {
  title: '제로직 | 시청자가 없는 치지직 스트리머들',
  description:
    '제로직은 오늘도 꿈을 위해 묵묵히 방송하는 무명 스트리머들을 응원합니다.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={pretendard.className}>
      <body>{children}</body>
    </html>
  );
}
