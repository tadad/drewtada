import React from 'react';
import Layout from './components/Layout';

export default function Home() {
  return (
    <Layout>
      <h1> welcome </h1>
      <h2>こんにちは</h2>
      <p>
        This journal is about the future of art & culture.
        We live in the shadow of modernism, but  we have not challenged it 
        with an alternate aesthetic or spirit.
        Rather, we have retreated from our cultural ambitions, ridiculing modernism
        with memes and subversive irony.
      </p>
      <img
        src="/Boy-On-Mount-Fuji.jpeg"
      />
      <p>
        Without purpose for our society, we
        have slipped into nihilism and decadence, and it is no wonder that our
        art reflects this. Without the development of a coherent artistic and cultural <i>geist</i>,
        we are unlikely to save ourselves from the slow decline into meaningless debauchery.
        This journal is my attempt to understand the origin of great cultures.
      </p>
      <h2><i>
        -Drew Tada
      </i></h2>
    </Layout>
  );
}
