import React from 'react';
import Link from 'next/link';
import Layout from '../components/Layout';

export default function GreatWorks() {
  return (
    <Layout>
      <h1>Great Works of Art</h1>
      <h3>
        This is a continuously updated list of great works of art. 1 per artist. Excluded artists may or
        may not be intentional.
      </h3>
      <h1>Paintings</h1>
      <ul className="block-list">
        <li>Sistine Chapel - Michelangelo</li>
        <li>Potato Eaters - Van Gogh</li>
        <li>The Garden of Earthly Delights - Bosch</li>
        <li>Death of Marat - David</li>
        <li>Night Watch - Rembrandt</li>
        <li>The Course of Empire - Thomas Cole</li>
        <li>The Fighting Temeraire - Turner</li>
        <li>Las Meninas - Velazquez</li>
        <li>The Resurrection - El Greco</li>
        <li>School of Athens - Raphael</li>
        <li>The Calling of Saint Matthew - Caravaggio</li>
        <li>Lilypads - Monet</li>
        <li>Liberty Leading the People - Delacroix</li>
        <li>Vampire - Munch</li>
        <li>Wanderer Above the Sea of Fog - David Casper Friedrich</li>
        <li>The Kiss - Kilmpt</li>
        <li>The Last Supper - Da Vinci</li>
        <li>The Great Wave - Hokusai</li>
      </ul> 
      <h1>Sculpture</h1>
      <ul className="block-list">
        <li>The Ecstacy of St. Teresa - Bernini</li>
        <li>David - Michelangelo</li>
        <li>David - Donatello</li>
        <li>Pieta - Michelangelo</li>
        <li>The Gates of Hell - Rodin</li>
        <li>Laocoön and His Sons - Unknown</li>
        <li>Venus de Milo - Unknown</li>
      </ul>
      <h1>Architecture</h1>
      <p><i>Working on it...</i></p>
      <h3 className="back-button">
        <Link href="/writing">Back</Link>
      </h3>
    </Layout>
  )
}