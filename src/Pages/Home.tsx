import React from 'react';
import Header from './Header'; // Asegúrate de que la ruta sea correcta
import Footer from './Footer'; // Asegúrate de que la ruta sea correcta

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Home;
