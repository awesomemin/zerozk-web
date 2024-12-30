import { Streaming } from './type';

export async function getRandomStreaming(): Promise<Streaming | null> {
  const numberOfStreamingsWithZeroUserResponse = await fetch(
    'http://192.168.0.6:4000/streaming/number'
  );
  if (!numberOfStreamingsWithZeroUserResponse.ok) {
    return null;
  }
  const numberOfStreamingsWithZeroUser =
    await numberOfStreamingsWithZeroUserResponse.json();
  if (numberOfStreamingsWithZeroUser === 0) {
    return null;
  }
  const randomStreamingResponse = await fetch(
    `http://192.168.0.6:4000/streaming/${Math.floor(
      Math.random() * numberOfStreamingsWithZeroUser
    )}`
  );
  if (!randomStreamingResponse.ok) {
    return null;
  }
  const randomStreaming = await randomStreamingResponse.json();
  return randomStreaming;
}
