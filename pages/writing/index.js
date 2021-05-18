import React from 'react';
import Link from 'next/link';
import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout>
      <h1>Daily Journal</h1>
      <h2>ブログ</h2>
      <ul style={{display: "flex"}}>
        <li><Link href="/writing/daily-journal">Most Recent: May 18, 2021</Link></li>
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
