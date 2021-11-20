import "./general.css";
import Nav from "./components/Nav/Nav";


import { Routes, Route } from "react-router-dom";

import Main from "./components/Main/Main";
import Hospital from "./components/Hospital/Hospital";
import CreateEvent from "./components/CreateEvent/CreateEvent";
import DonorRegister from "./components/pages/DonorRegister/DonorRegister";
import HospitalRegister from "./components/pages/HospitalRegister/HospitalRegister";
import Login from "./components/pages/Login/Login";
import PrivateUser from "./components/PrivateUser/PrivateUser";
import Footer from "./components/Footer/Footer";
// import PrivateHospital from "./components/PrivateHospital/PrivateHospital";
import DetailUser from "./components/DetailUser/DetailUser";
import UserEvent from "./components/UserEvent/UserEvent";

function App() {

  return (
    <>
      <Nav />
        <Routes >
          <Route path="/" element={<Main />} />
          <Route path="/login/:role" element={<Login />} />
          <Route path="/user/signup" element={<DonorRegister />} />
          <Route path="/hospital/signup" element={<HospitalRegister />} />
          <Route path="/hospital" element={<Hospital />} />
          <Route path="/private/:role" element={<PrivateUser />} />
          <Route path="/hospital/event" element={<CreateEvent />} />
          <Route path="/user" element={<DetailUser />} />
          <Route path="/user/event" element={<UserEvent />} />
        </Routes>
      <Footer />
    </>
  )
}

export default App;
