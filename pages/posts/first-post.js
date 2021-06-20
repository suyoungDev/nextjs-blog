import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import Layout from '../../components/Layout';

const FirstPost = () => {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <div>
        <h1>First Post</h1>
        <Link href='/'>
          <a>back to home</a>
        </Link>
        <Image
          src='/images/profile.jpg'
          height={144}
          width={144}
          alt='your name'
        />
      </div>
    </Layout>
  );
};

export default FirstPost;
