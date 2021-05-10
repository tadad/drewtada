import React from 'react';
import Link from 'next/link';
import Layout from '../components/Layout';

export default function ReadingList() {
  return (
    <Layout>
      <h1>Required Reading</h1>
      <ul class="block-list">
        <li>Great Founder Theory - Samo Burja</li>
        <li>Palladium Magagzine</li>
        <li>The Birth of Tragedy - Nietzsche</li>
        <li>Histories - Herodotus</li>
        <li>Archeofuturism - Guillaume Faye</li>
      </ul>
      <h3 class="back-button">
        <Link href="/writing">Back</Link>
      </h3>
    </Layout>
  )
}