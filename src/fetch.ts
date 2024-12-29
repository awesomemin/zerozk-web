import { Streaming } from './type';

export async function getRandomStreaming(): Promise<Streaming> {
  const numberOfStreamingsWithZeroUserResponse = await fetch(
    'http://localhost:4000/streaming/number'
  );
  const numberOfStreamingsWithZeroUser =
    await numberOfStreamingsWithZeroUserResponse.json();

  const randomStreamingResponse = await fetch(
    `http://localhost:4000/streaming/${Math.floor(
      Math.random() * numberOfStreamingsWithZeroUser
    )}`
  );
  const randomStreaming = await randomStreamingResponse.json();
  return randomStreaming;
}
