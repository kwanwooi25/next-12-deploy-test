import Link from 'next/link';
import React from 'react';

export default function Header() {
  return (
    <div style={{ height: '100px', width: '100vw' }}>
      <Link href="/">Home</Link>
      <Link href="/posts">Posts</Link>
    </div>
  );
}
