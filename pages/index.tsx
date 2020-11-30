import { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';
import { Flex } from 'theme-ui';

import Dummy from '../components/dummy/Dummy';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Next.js Template</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Flex
        sx={{
          alignItems: 'center',
        }}
      >
        <Dummy value="Hello World"></Dummy>
      </Flex>
    </>
  );
};

export default Home;
