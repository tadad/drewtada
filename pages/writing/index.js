import React from 'react';
import Link from 'next/link';
import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout>
      <h1>Posts</h1>
      <h2>ブログ</h2>
      <p>Longer blog posts coming soon...</p>
      <br/>
      <h1>Lists</h1>
      <h2>リスト</h2>
      <ul class="block-list">
        <li><a href="./early-web-index">Index of Web 1.0 Aesthetics</a></li>
        <li><a href="./vocabulary">Interesting Vocabulary</a></li>
        <li><a href="./favorite-quotations">Favorite Quotations</a></li>
        <li><Link href="/writing/reading-list">Reading List</Link></li>
      </ul>
    </Layout>
  );
}
