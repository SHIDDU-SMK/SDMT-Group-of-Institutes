import React from 'react';
import Footer from './footer';
//import Navbar from './navbar';
//import SubNavBar from './sub_nav';
import About from './about';
import Slider from './carousel';
import Header from './header';
import Institutes from './pages/institues';



class Home extends React.Component {
  render() {
    return (
    	<>
        {/* <Navbar />
        <SubNavBar /> */}
        <Header />
        <Slider />
        <About />
        <Institutes />
        <Footer />
      </>
    );
  }
}

export default Home;