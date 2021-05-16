import React from 'react';
import Link from 'next/link';
import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout>
      <h1>Upcoming topics</h1>
      <h2>ブログ</h2>
      <h2>On the Depth of Meme Culture</h2>
      <p>
        Internet memes are an interesting form of art that has a tradition of ideological, allegorical,
        layered meaning, and structure conducive to great art. Their subjects and methods lack the dignity of significance and
        execution though, at least for now.
      </p>
      <h2>Modernism is Aesthetic Liberalism</h2>
      <p>
        Modernism is the projection of liberalism onto art. The radical movement began in the
        French Revolution, and slowly dominated the world alongside liberal politics. As belief in liberalism has faded,
        so has our appreciation of modern art. Today, we mock modernsim for being flat and empty. As we move beyond liberalism
        as an ideology, a post-mortem on modern art is in order.
      </p>
      <h2>Culture: Atoms vs Bits</h2>
      <p>
        Today, our important cultural production is entirely virtual. Any art
        that requires a visible presence to be experienced - a painting in a gallery, a sculpture in a garden, or a building
        downtown - is dead. There are no great architects, painters, or sculptors, left.
      </p>
      <h2>NFTs - Return to Tradition</h2>
      <p>
        Crpyto and NFTs are a frontier where artist\patron relationships can florish.
      </p>
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
