import React from 'react';
// components
import Banner from './components/Banner';
import Header from './components/Header';
import Nav from './components/Nav';
import About from './components/About';
import Services from './components/Services';
import Work from './components/Work';
import Contact from './components/Contact';
import Themes from './components/Themes';
import { Helmet } from 'react-helmet';
import icon from '../src/assets/logo2.svg';


const App = () => {

  const idiomaNavegador = window.navigator.language;
  console.log(idiomaNavegador);
  
  return (
    <div  className='bg-no-repeat bg-cover overflow-hidden bg'>
      <Banner />
      <Themes />
      <Nav />
      <About />
      <Services />
      <Work />
      <Contact />
      <Helmet>
        <link rel="icon" href={icon}></link>
      </Helmet>
    </div>
  );
};

export default App;
