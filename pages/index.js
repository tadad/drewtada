import React from 'react';
import Layout from './components/Layout';

export default function Home() {
  return (
    <Layout>
      <h1> welcome </h1>
      <h2>こんにちは</h2>
      <p>
        This is a blog about the future of art & culture.
        We live in the shadow of the failed modernist project.
        However,  we have not challenged modernism with an alternate liturgy.
        Rather, we have retreated into the virtual world, ridiculing modernism
        with memes and subversive irony. With no purpose for our society, we
        have slipped into nihilism and decadence.
      </p>
      <p>
        The direction of history forces us to consider the looming collapse of contemporary art & culture.
        Without the development of a coherent artistic and cultural <i>geist</i>,
        we are unlikely to save ourselves from the slow decline into meaningless debauchery.
        This journal is my attempt to understand post-decadence, and form a new cultural synthesis
        for the 21st century: a middle path between tradition and technology.
      </p>
    </Layout>
  );
}
