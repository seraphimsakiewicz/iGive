import "./general.css";
// import { useEffect } from "react";

import { Routes, Route } from "react-router-dom";

// import { useDispatch } from "react-redux";
// import { checkUser } from "./redux/ac/userAC";
// import { checkHospital } from "./redux/ac/hospitalAC";

import Nav from "./components/Nav/Nav";
import User from "./components/User/User";
import Main from "./components/Main/Main";
import Hospital from "./components/Hospital/Hospital";
import CreateEvent from "./components/CreateEvent/CreateEvent";
import Login from "./components/pages/Login/Login";
import { UserRoute } from "./components/UserRoute";
import { HospitalRoute } from "./components/HospitalRoute";

import Logout from "./components/LogOut";
import UserRegister from "./components/pages/UserRegister/UserRegister";
import HospitalRegister from "./components/pages/HospitalRegister/HospitalRegister";
import PrivateUser from "./components/PrivateUser/PrivateUser";
import Footer from "./components/Footer/Footer";
import ConfirmedForm from "./components/ConfirmedForm/ConfirmedForm";

function App() {
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   // dispatch(checkUser());
  //   // dispatch(checkHospital());
  // }, []);

  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login/:role" element={<Login />} />
        <Route path="/user/signup" element={<UserRegister />} />
        <Route path="/hospital/signup" element={<HospitalRegister />} />
        <Route path="/hospital" element={<Hospital />} />
        <Route path="/hospital/event" element={<CreateEvent />} />\
        <Route path="/user" element={<User />} />
        <Route path="/logout/:role" element={<Logout />} />
        <Route path="/private/:role" element={<PrivateUser />} />
        
        <Route path="/confirmedForm" element={<ConfirmedForm />} />
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
      <Footer />
    </>
  );
}

export default App;
