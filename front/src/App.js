import "./general.css";
import Nav from "./components/Nav/Nav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import User from "./components/User/User";
import Main from "./components/pages/Main/Main";
import Login from "./components/pages/Login/Login";
import DonorRegister from "./components/pages/DonorRegister/DonorRegister";
import HospitalRegister from "./components/pages/HospitalRegister/HospitalRegister";

function App() {
  // eslint-disable-next-line react-hooks/exhaustive-deps

  return (
    <div className="center">
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/donorReg" element={<DonorRegister />} />
          <Route path="/hospitalReg" element={<HospitalRegister />} />
        </Routes>
        <Routes>
          <Route path="/users" element={<User />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
