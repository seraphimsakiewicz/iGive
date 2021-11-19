import './general.css';
import Nav from './components/Nav/Nav';

import { Routes, Route } from "react-router-dom";

import User from "./components/User/User";
import Main from "./components/Main/Main";
import Hospital from "./components/Hospital/Hospital";
import CreateEvent from "./components/CreateEvent/CreateEvent";
import Login from "./components/pages/Login/Login";
import HospitalRegister from "./components/pages/HospitalRegister/HospitalRegister";
import UserRegister from "./components/pages/UserRegister/UserRegister";
import { UserRoute } from "./components/UserRoute";
import { HospitalRoute } from "./components/HospitalRoute";
import { useDispatch } from "react-redux";
import { checkUser } from "./redux/ac/userAC";
import { useEffect } from "react";
import { checkHospital } from "./redux/ac/hospitalAC";
import Logout from "./components/LogOut";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(checkUser());
    dispatch(checkHospital());
  }, []);

  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/userReg" element={<UserRegister />} />
        <Route path="/hospitalReg" element={<HospitalRegister />} />
        <Route path="/hospital" element={<Hospital />} />
        <Route path="/hospital/event" element={<CreateEvent />} />\
        <Route path="/user" element={<User />} />

        <Route path="/logout/:role" element={<Logout />} />
        
        <Route
          path="/user/:role"
          element={
            <UserRoute>
              <User />
            </UserRoute>
          }
        />
        <Route
          path="/hospital/:role"
          element={
            <HospitalRoute>
              <Hospital />
            </HospitalRoute>
          }
        />
      </Routes>
    </>
  );
}

export default App;
