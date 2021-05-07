import React from 'react';
import Layout from '../components/Layout';

export default function Writing() {
  return (
    <Layout>
      <h1>Blogs</h1>
      <h2>ブログ</h2>
      <p>Longer blog posts coming soon...</p>
      <br/>
      <h1>Lists</h1>
      <h2>リスト</h2>
      <ul>
        <li class="block-list"><a href="./early-web-index">Index of Web 1.0 Aesthetics</a></li>
        <li class="block-list"><a href="./vocabulary">Interesting Vocabulary</a></li>
        <li class="block-list"><a href="./favorite-quotations">Favorite Quotations</a></li>
        <li class="block-list"><a href="./quarantine-book-list">Quarantine Book List</a></li>
      </ul>
    </Layout>
  );
}