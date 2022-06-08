import React from 'react';
import Header from './components/Layout/Header';
import {Home} from './components/Pages/Home';
import Footer from './components/Layout/Footer';



const App =()=> {
  return (<section className='section'>

    <Header/>
    <Home/>
    <Footer/>

  </section>
  );
}

export default App;
