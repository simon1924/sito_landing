// import './App.css'
// import { motion, useScroll, useSpring } from "motion/react"


import { HashRouter as Router, Routes, Route } from "react-router-dom"
import Layout from './Layout'
import Pagina1 from "./Components/Pagine/Pagina1"
import Pagina2 from "./Components/Pagine/Pagina2"
import PaginaPrincipale from './Components/Pagine/PaginaPrincipale'


function App() {


  return (
    <>

        <Router>
          <Routes>


            <Route element={<Layout></Layout>}>
              <Route path="/" element={<PaginaPrincipale />} />
              <Route path="/Pagina1" element={<Pagina1 />} />
              <Route path="/Pagina2" element={<Pagina2 />} />
            </Route>



          </Routes>
        </Router>



    </>
  )
}


export default App
