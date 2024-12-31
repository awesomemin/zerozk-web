import { getRandomStreaming } from '@/fetch';
import Header from './header';
import StreamingInfo from './streaming';

export default async function Home() {
  const initialStreaming = await getRandomStreaming();

  return (
    <div className="lg:mx-60">
      <Header />
      <StreamingInfo initialStreaming={initialStreaming} />
    </div>
  );
}
