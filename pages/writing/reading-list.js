import React from 'react';
import Link from 'next/link';
import Layout from '../components/Layout';

export default function ReadingList() {
  return (
    <Layout>
      <h1>Books I've Enjoyed</h1>
      <h3>Last updated 6/27/20</h3>
      <ul class="block-list">
        <li>The Sceince of Conjecture by James Franklin</li>
        <li>The Misbehavior of Markets by Beniot Mandelbrot</li>
        <li>Models Behaving Badly by Emanuel Derman</li>
        <li>Nero and the Burning of Rome by Tacitus</li>
        <li>The Landmark Herodotus</li>
        <li>Mythology by Edith Hamilton</li>
        <li>Apology for Raymond Sebond by Michel de Montaign</li>
        <li>Parallel Lives by Plutarch</li>
        <li>Michel de Montaign (Complete Works)</li>
        <li>The Present Age by Kierkegaard</li>
        <li>The Divine Comedy</li>
      </ul>
      <h3 class="back-button">
        <Link href="/writing">Back</Link>
      </h3>
    </Layout>
  )
}