import React from 'react';
import './css/invie.css';
import Portada from './components/Portada';
import Guitarras from './components/Guitarras';
import Footer from './components/Footer';

function App() {
  return (
    <seccion className="Invie">
      <Portada/>
      <Guitarras/>
      <Footer/>
      

    </seccion>
  );
}

export default App;
