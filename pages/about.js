import React from 'react';
import Image from 'next/image';
import Layout from './components/Layout';

export default function Art() {
  return (
    <Layout>
      <h1>About</h1>
      <p>
        This blog is about the future of capital-A Art in the 21st century, blazing a path between a
        "retvrn" to tradition and a technological future.
        If you are an artist, writer, sculptor, or architect, and wish to join the community, 
        reach out to me at drew (dot) tada [at] gmail *dot* com
      </p>
      <img
        style={{maxHeight: "400px"}}
        src="/cast.webp"
      />
    </Layout>
  );
}