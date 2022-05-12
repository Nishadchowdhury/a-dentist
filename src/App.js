import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import About from "./Pages/About/About";
import Appointment from "./Pages/Appointment/Appointment";
import LoginByEmail from "./Pages/Authentication/LoginByEmail";
import Home from "./Pages/Home/Home";
import Navbar from './Pages/Shared/Navbar';

function App() {
  return (
    <div className="max-w-[100rem] mx-auto">
      <Navbar />

      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/login' element={<LoginByEmail />} />
        <Route path='/appointment' element={<Appointment />} />




        <Route path='/*' element={<LoginByEmail />} />

      </Routes>


    </div>
  )
}

export default App;
