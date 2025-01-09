import { BrowserRouter as Router } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import WorkoutSessions from './components/WorkoutSessions'
import Gallery from './components/Gallery'
import Princing from './components/Princing'
import BMICalculator from './components/BMICalculator'
import Contact from './components/Contact'
import Footer from './components/Footer'

import { ToastContainer } from 'react-toastify'
import './App.css'

const App =()=> {
  
  return (

   <Router>
    
    <Navbar/>
    <Hero/>
    <WorkoutSessions/>
    <Gallery/>
    <Princing/>
    <Contact/>
    <BMICalculator/>
    <Footer/>
   <ToastContainer theme='dark ' position='top-center'/>
   </Router>
  )
}

export default App
