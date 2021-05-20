import React from 'react';
import Link from 'next/link';
import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout>
      <h1>Journal</h1>
      <h2>ブログ</h2>
      <p>
        These are random thoughts and musings I write in short bursts. Not meant to be taken seriously.
      </p>
      <ul className="block-list">
        <li><Link href="/writing/journal#5-16-21">Death of the Author is a Theory for Midwits</Link></li>
        <li><Link href="/writing/journal#5-15-21">Modernism is Aesthetic Liberalism</Link></li>
        <li><Link href="/writing/journal#5-18-21">Life Affirmation</Link></li>
        <li><Link href="/writing/journal#5-14-21">Culture: Atoms vs Bits</Link></li>
      </ul>
      <br/>
      <h1>Lists</h1>
      <h2>リスト</h2>
      <ul className="block-list">
        <li><Link href="/writing/reading-list">Required Reading</Link></li>
        <li><Link href="/writing/great-works">Great Works of Art</Link></li>
      </ul>
    </Layout>
  );
}
