import type { Metadata } from 'next';
import Header from './components/Header';
import Footer from './components/Footer';
import AboutUs from './components/AboutUs';
import Portfolio from './components/Portfolio';
import ContactUs from './components/ContactUs';

export const metadata: Metadata = {
  title: 'My Landing Page',
  description: 'A minimal landing page',
};

const Home = () => {
  return (
    <div>
      <Header />
      <main>
        <AboutUs />
        <Portfolio />
        <ContactUs />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
