import Head from 'next/head';
import Feed from '../components/Feed';
import Header from '../components/Header';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Instagram 2.0</title>
        <link rel="icon" href="/instagramIcon.svg" />
      </Head>
      <Header />
      <Feed />
      {/* Modal */}
    </div>
  );
}
