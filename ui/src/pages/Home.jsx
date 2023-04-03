import React, { useState } from 'react'
import Navbar from '../components/Navbar';

const Home = () => {
  const [scrolled, setScrolled] = useState(false)

  window.onscroll = () => {
    setScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll === null);
  };
  return (
    <div>
      <Navbar scrolled={scrolled} />
    </div>
  );
}

export default Home