import { getRandomStreaming } from '@/fetch';
import Header from './header';
import StreamingInfo from './streaming';

export default async function Home() {
  const initialStreaming = await getRandomStreaming();

  return (
    <>
      <Header />
      <StreamingInfo initialStreaming={initialStreaming} />
    </>
  );
}
