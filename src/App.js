import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import About from "./Pages/About/About";
import Appointment from "./Pages/Appointment/Appointment";
import LoginByEmail from "./Pages/Authentication/LoginByEmail";
import RequireAuth from "./Pages/Authentication/RequreAuth";
import SingUp from "./Pages/Authentication/SingUp";
import Home from "./Pages/Home/Home";
import Navbar from './Pages/Shared/Navbar';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";
import Dashboard from "./Pages/Dashboard/Dashboard";
import MyAppointment from "./Pages/Dashboard/MyAppointment";
import MyReview from "./Pages/Dashboard/MyReview";
import MyHistory from "./Pages/Dashboard/MyHistory";
import User from "./Pages/Dashboard/User";
import RequireAdmin from "./Pages/Authentication/RequireAdmin";
import AddDoctor from "./Pages/Dashboard/AddDoctor";
import ManageDoctors from "./Pages/Dashboard/ManageDoctors";
import Payment from "./Pages/Dashboard/Payment";

function App() {
  return (
    <div className="max-w-[100rem] mx-auto">
      <Navbar />

      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/login' element={<LoginByEmail />} />

        <Route path='/appointment' element={
          <RequireAuth>
            <Appointment />
          </RequireAuth>
        } />

        <Route path='/dashboard' element={<RequireAuth> <Dashboard /> </RequireAuth>} >

          <Route index element={<MyAppointment></MyAppointment>} ></Route>
          <Route path="review" element={<MyReview></MyReview>} ></Route>
          <Route path="history" element={<MyHistory />} ></Route>
          <Route path="payment/:id" element={<Payment />} ></Route>
          <Route path="users" element={<RequireAdmin>  <User /> </RequireAdmin>} ></Route>
          <Route path="addDoctor" element={<RequireAdmin>  <AddDoctor /> </RequireAdmin>} ></Route>
          <Route path="manageDr" element={<RequireAdmin>  <ManageDoctors /> </RequireAdmin>} ></Route>{/*  nested Routes */}

        </Route>

        <Route path='/signup' element={<SingUp />} />




        <Route path='/*' element={<LoginByEmail />} />

      </Routes>

      <ToastContainer />
    </div>
  )
}

export default App;
