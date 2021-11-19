import "./general.css";
import Nav from "./components/Nav/Nav";


import { Routes, Route } from "react-router-dom";

import User from "./components/User/User";
import Main from "./components/Main/Main";
import Hospital from "./components/Hospital/Hospital";
import CreateEvent from "./components/CreateEvent/CreateEvent";
import Login from "./components/pages/Login/Login";
import DonorRegister from "./components/pages/DonorRegister/DonorRegister";
import HospitalRegister from "./components/pages/HospitalRegister/HospitalRegister";

function App() {

  return (
    <>
      <Nav/>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/donorReg" element={<DonorRegister />} />
          <Route path="/hospitalReg" element={<HospitalRegister />} />
          <Route path="/hospital" element={<Hospital />} />
        <Route path="/hospital/event" element={<CreateEvent />} />
           <Route path="/users" element={<User />} />
        </Routes>
    </>
  )
}

export default App;
