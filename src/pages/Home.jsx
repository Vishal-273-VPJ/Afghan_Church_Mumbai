import React from 'react'
import Header from '../components/Header/Header'
import Banner from '../components/Banner/Banner'
import Banner2 from '../components/Banner2/Banner2'
import Banner3 from '../components/Banner3/Banner3'
import Contact from '../components/Contact/Contact'
import Footer from '../components/Footer/Footer'
import Banner4 from '../components/Banner4/Banner4'

const Home = () => {
  return (
    <div>
        <Header />
        <Banner />
        <Banner2 />
        <Banner3 />
        <Banner4 />
        <Contact />
        <Footer />
    </div>
  )
}

export default Home