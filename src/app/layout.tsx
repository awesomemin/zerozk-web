import type { Metadata } from 'next';
import './globals.css';
import localFont from 'next/font/local';
import Script from 'next/script';

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
      <head>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-PML59TRJFY"
        ></Script>
        <Script id="gtm">
          {`
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-PML59TRJFY');`}
        </Script>
        <script>
          {`
    (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "pqqbkmus4z");
  `}
        </script>
      </head>
      <body>{children}</body>
    </html>
  );
}
