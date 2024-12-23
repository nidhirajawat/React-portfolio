import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/hero/Hero'
import About from './components/about/About'
// import Services from './components/Servicesn/Services'
import Services from './components/Servicesn/Services'
import MyWork from './components/myWork/MyWork'
import Contact from './components/contact/Contact'


const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Services/>
      <MyWork/>
      <Contact/>
    </div>
  )
}

export default App