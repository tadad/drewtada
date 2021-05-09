import React from 'react';
import Link from 'next/link';
import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout>
      <h1>Upcoming topics</h1>
      <h2>ブログ</h2>
      <h2>Culture: Atoms v Bits</h2>
      <p>
        Our cultural production is entirely virtual. Every cultural artifact we produce (film, television, videogames, 
        music), is enjoyed through a screen. There are no great architects, painters, or sculptors, left.
        Those that refuse to flatten their work into a bytestream have no cultural capital.
        And so it seems everything beautiful is not real, and everything real is not beautiful.
      </p>
      <h2>Internet Archaeology</h2>
      <p>
        The West is experiencing cultural decline, though the seeds of somthing great are being planted in cyberspace.
        So far, most of it has stayed in cyberspace. When will it become real? How long do we have to wait?
        Or is it all a LARP?
      </p>
      <h2>NFTs and Patronage in the 21st century</h2>
      <p>
        Crpyto and NFTs are a frontier where artist/patron relationships can florish. While the critics are correct that
        the current environment wreaks of fraud, shallow work, and tulip mania, we are still in the early days of
        crypto-patronage. It is up to a small community of artists to raise the standard and redefine what capital-A Art is.
      </p>
      <br/>
      <h1>Lists</h1>
      <h2>リスト</h2>
      <ul class="block-list">
        <li><Link href="/writing/reading-list">Required Reading</Link></li>
        <li><Link href="/writing/great-works">Great Works of Art</Link></li>

      </ul>
    </Layout>
  );
}
