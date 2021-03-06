import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../../styles/Layout.module.css';

export default function Layout(props) {

  let { background } = props;
  if (!background) {
    background = "background_main.png"
  }

  return (
    <>
    <Head>
      <title> Twilight of the Idols | ウェブサイト </title>
      <meta charset="utf-8"/>
      <meta name="description" content="Smashing false idols. Post-decadence."/>
      <meta name="author" content="Drew Tada"/>
      <meta name="keywords" content="Drew Tada,Personal Website,Blog,Philosophy,Essays"/>
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"/>
      <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🌺</text></svg>" />
    </Head>
    <div className={ styles.background } style={{backgroundImage: `url(/${background})`}}>
      <nav className={ styles.nav }>
        <h1>Twilight of the Idols</h1>
        <h2 style={{ letterSpacing: "10px" }}>ウェブサイト</h2>
        <ul style={{ display: "flex", padding: 0, justifyContent: "space-around" }}>
          <li><Link href="/"><a>Home</a></Link></li>
          <li><Link href="/writing/journal"><a>Writing</a></Link></li>
          <li><Link href="/about"><a>About</a></Link></li>
        </ul>
      </nav>
      <main className={ styles.content }>
        {props.children}
      </main>
      <footer className={ styles.footer }>
        <p><i>Ars longa, vita brevis.</i></p>
      </footer>
    </div>
  </>
  );
}