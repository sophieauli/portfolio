import Head from 'next/head';

import Navbar from '../components/Navbar';

function Contact() {
  return (
    <>
      <Head>
        <title>Contact</title>
      </Head>

      <Navbar />

      <section className="hero">
        <div className="container">
          <div className="text-wrapper w-full">
            <h1 data-cy="pageTitle" className="title">
              Get in touch!
            </h1>
            <p className="description">
              Let's collab:
            </p>
            <ul className="contact-links">
              <li className="contact-item">Email: sophie.aulitzky@gmail.com</li>
              <li className="contact-item">Phone: +43 664 5498713</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
