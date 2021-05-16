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
        Internet memes are an interesting form of art that has that definite tradition of ideological, allegorical,
        layered meaning structure of great art. Their subjects and methods lack the dignity of significance and
        execution though, at least for now.
      </p>
      <h2>Modernism is Aesthetic Liberalism</h2>
      <p>
        Every movement in modern art has been a reflection of that period's flavor of liberalism. From its origin in
        the French Revolution and the stately paintings of Jacque Louis David, all the way to the peak of the liberal
        order with the universal and free paintings of Rothko and Pollock, the spirit of liberalism was projected onto
        modern art. As belief in liberalism fades, what cultural forms do we have to look forward to?
      </p>
      <h2>Culture: Atoms vs Bits</h2>
      <p>
        Today, our important cultural production is entirely virtual. Where we still produce great original works - mainly
        film, television, videogames, and music - we produce them to be experienced on a screen. Any art
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
