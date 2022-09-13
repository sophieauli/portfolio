import Head from 'next/head';
import Navbar from '../components/Navbar';

function About() {
  return (
    <>
      <Head>
        <title>About</title>
      </Head>

      <Navbar />

      <section className="hero">
        <div className="container">
          <div className="text-wrapper w-full">
            <h1 data-cy="pageTitle" className="title">
              About
            </h1>
            <p className="description">
              My name is Sophie and I have recently decided to learn how to
              code. I am all about big and bright design interfaces. Have a look
              around!
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
