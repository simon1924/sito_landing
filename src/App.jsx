import { useState } from 'react'
import './App.css'
import { motion, useScroll, useSpring } from "motion/react"
import MiaNavbar from "./Components/MiaNavbar"
import ContentDiv from './Components/ContentDiv'


function App() {


  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })




  return (
    <>
      <div className='container'>
        <MiaNavbar></MiaNavbar>
        <motion.div
          id="scroll-indicator"
          style={{
            scaleX,
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            height: 10,
            originX: 0,
            backgroundColor: "#ff0088"
          }} >
        </motion.div>
        <ContentDiv></ContentDiv>
          
        
      </div>
    </>
  )
}


export default App
