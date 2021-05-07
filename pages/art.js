import React from 'react';
import Image from 'next/image';
import Layout from './components/Layout';

export default function Art() {
  return (
    <Layout>
      <h1>Art</h1>
      <Image
        src="/cast.webp"
        height="400"
        width="300"
      />
      <p style={{ textAlign: "center", textIndent: "0" }}>A cast painting from high school</p>
      <br/>
      <Image
        src="/blue.webp"
        height="300"
        width="400"
      />
      <p style={{ textAlign: "center", textIndent: "0" }}>A still life from high school</p>
      <br />
      <p style={{ textAlign: "center", textIndent: "0" }}>More art coming this lifetime...</p>
    </Layout>
  );
}