import React from 'react';
import Link from 'next/link';
import Layout from './components/Layout';

export default function Home() {
  return (
    <Layout>
      <h1> welcome </h1>
      <h2>こんにちは</h2>
      <p>
        The modernist project has failed, yet its shadow still looms over us. We may mock it with memes and subversive irony,
        though this is an admission of defeat more than anything. 
        The post-modern human would rather laugh than create a great work of art, or architect a great building.
        His memes are shallow and will be justly forgotten.
      </p>
      <p>
        If we cannot cling to modernism, nor mock it indefinitely, then a third path must be opened.
        This blog is dedicated to creating and documenting the aesthetic movement that will dominate the 21st century:
        a middle path between a "retvrn" to tradition, and a technological future.
      </p>
    </Layout>
  );
}
