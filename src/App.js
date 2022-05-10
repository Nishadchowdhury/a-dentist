import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import About from "./Pages/About/About";
import Home from "./Pages/Home/Home";
import Navbar from './Pages/Shared/Navbar';

function App() {
  return (
    <>
      <Navbar />

      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />


      </Routes>


    </>
  )
}

export default App;
