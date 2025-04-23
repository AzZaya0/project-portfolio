import './App.css'
import {Navbar} from './components/nav/Navbar'
import {Hero}from "./components/hero/Hero"
import{Herodown} from "./components/herodown/Herodown"
import{Aboutme} from "./components/aboutme/Aboutme"
import {Skills} from "./components/skills/Skills"
function App() {


  return (
    <>
    <Navbar/>
    <Hero/>
    <Herodown/>
    <Aboutme/>
    <Skills/>
  
    </>
  )
}

export default App
