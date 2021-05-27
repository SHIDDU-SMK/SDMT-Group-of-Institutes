import React from 'react';
import Footer from './footer';
//import Navbar from './navbar';
//import SubNavBar from './sub_nav';
import About from './about';
import Slider from './carousel';
import Header from './header';
import Institutes from './pages/institues';
import ScrollCountUp from './count-up';




class Home extends React.Component {
  render() {
    return (
    	<>
        <Header />
        <Slider />
        <About />
        <Institutes />
        <ScrollCountUp />
        <Footer />
      </>
    );
  }
}

export default Home;