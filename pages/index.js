import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import styles from './index.module.css';

class Index extends React.Component {
  render() {
    const title = `ByteTalk Podcast`;
    const description = 'Bits and bytes on the ever-changing tech industry and how you can be more effective in it';

    return (
      <div className="drac-bg-black">
        <Head>
          <meta charSet="utf-8" />
          <title>{title}</title>
          <meta content={title} property="og:title" />
          <meta content={description} name="description" />
          <meta content={description} property="og:description" />
          <meta content="https://bytetalkpodcast.com" property="og:url" />
          <meta content="Zeno Rocha" name="author" />
        </Head>

        <h1 className={styles.hi}>Hello World</h1>
      </div>
    )
  }
}

export default Index;
