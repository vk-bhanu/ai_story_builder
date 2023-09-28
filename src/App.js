import React from 'react'
import Article from './components/article/Article';
import Brand from './components/brand/Brand';
import Blog from './containers/blog/Blog';
import Navbar from './components/navbar/Navbar';
import Features from './containers/features/Features';
import Possibility from './containers/possibility/Possibility';
import CTA from './components/cta/CTA';
import Footer from './containers/footer/Footer';
import Header from './containers/header/Header';
import Whataistorybuilder from './containers/whataistorybuilder/Whataistorybuilder';
import './App.css'

const App = () => {
  return (
    <div className="App">
      <div className="gradient_bg">
        <Navbar />
        <Header />
      </div>
      {/* <Brand /> */}
      <Article />
      <Whataistorybuilder />
      <Features />
      <Possibility />
      <CTA />
      <Blog/>
      <Footer />
    </div>
  )
}

export default App