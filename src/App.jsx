import './App.css'
import {Navbar} from './components/nav/Navbar'
import {Hero}from "./components/hero/Hero"
import{Herodown} from "./components/herodown/Herodown"
import{Aboutme} from "./components/aboutme/Aboutme"
function App() {


  return (
    <>
    <Navbar/>
    <Hero/>
    <Herodown/>
    <Aboutme/>
    </>
  )
}

export default App
