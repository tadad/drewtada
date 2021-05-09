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
        Our cultural production is entirely virtual. Every cultural artifact we produce: films, television, videogames, and music, are all enjoyed through a screen. We have no great architects, painters, or sculptors, i.e. people that
        shape the real world. Those that refuse to flatten their work into a bytestream have no cultural capital.
        And so it seems everything beautiful is not real, and everything real is not beautiful.
      </p>
      <h2>Internet Archaeology</h2>
      <p>
        The West is experiencing cultural decline, though the seeds of somthing great are being planted in cyberspace.
        So far, most of it has stayed in cyberspace. One day it will become real, but when? How long do we have to wait?
        Or is it just a LARP?
      </p>
      <h2>NFTs and Patronage in the 21st century</h2>
      <p>
        NFTs are enabling new artist/patron relationships. In time, new masterpieces and world wonders will be built by
        the patronage of the crypto-rich.
      </p>
      <br/>
      <h1>Lists</h1>
      <h2>リスト</h2>
      <ul class="block-list">
        <li><Link href="/writing/reading-list">Required Reading</Link></li>
      </ul>
    </Layout>
  );
}
