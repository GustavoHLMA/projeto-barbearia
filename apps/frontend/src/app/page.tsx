import { soma } from '@barba/core';

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <p>{soma(1, 2)}</p>
    </div>
  );
}
