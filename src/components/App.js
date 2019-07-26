import React, { Component } from 'react';

import './Scss/Main.min.css';
import Hero from './Hero';
import Speakers from './Speakers';
import Details from './Details';
import Map from './Map';
import Schedule from './Schedule';
import Banner1 from './Banner1';
import PurchaseOptions from './PurchaseOptions';
import Sponsors from './Sponsors';
import Faq from './Faq';
import Footer from './Footer';

import Banner1Image from '../img/banner1.png';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Hero />
        <Speakers />
        <Details />
        <Map />
        <Schedule />
        <Banner1
          bannerImage={Banner1Image}
          bannerImageAlt='Lorem ipsum dolor est'
          bannerTitle='Lorem Ipsum'
          bannerSubtitle='Vestibulum purus quam.'
          bannerDescription='Phasellus consectetuer vestibulum elit. Aenean tellus metus, bibendum sed, posuere ac, mattis non, nunc. Vestibulum fringilla pede sit amet augue. In turpis. Pellentesque posuere. Phasellus consectetuer vestibulum elit. Aenean tellus metus, bibendum sed, posuere ac, mattis non, nunc. Vestibulum fringilla pede sit amet augue. In turpis. Pellentesque posuere.'
        />
        <PurchaseOptions />
        <Sponsors />
        <Faq />
        <Footer />
      </div>
    );
  }
}

export default App;
