import Navbar from "./components/Navbar.jsx"
import './App.css'
import "./index.css"
import Product from "./pages/latestCollection.jsx"
import { Route, Routes } from "react-router-dom"
import About from "./pages/about.jsx"
import Contact from "./pages/contact.jsx"
import Home from "./pages/home.jsx"
import Title from "./components/title.jsx"
import AllCollections from "./pages/allcollections.jsx"
import Footer from "./components/Footer.jsx"
function App() {
  return (
    <>
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/collections" element={<AllCollections />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
      <Footer />
    </div>
    </>

  )
}

export default App
