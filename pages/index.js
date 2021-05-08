import React from 'react';
import Link from 'next/link';
import Layout from './components/Layout';

export default function Home() {
  return (
    <Layout>
      <h1> welcome </h1>
      <h2>こんにちは</h2>
      <p><i>
        Whoever fights monsters should see to it that in the process he does not become a 
        monster. For if you gaze long enough into the abyss, the abyss gazes back into you.
      </i></p>
      <h3>-Nietzsche</h3>
      <h1>Popular Posts</h1>
      <h2>ブログ</h2>
      <ul>
        <li><Link href="">We already live in virtual reality</Link></li>
      </ul>
    </Layout>
  );
}
