import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./general.css";
import Nav from "./components/Nav/Nav";
import Main from "./components/pages/Main/Main";
import Login from "./components/pages/Login/Login";
import DetailUser from "./components/pages/DetailUser/DetailUser";
import UserEvent from "./components/pages/UserEvent/UserEvent";
import UserRegister from "./components/pages/UserRegister/UserRegister";
import Hospital from "./components/pages/Hospital/Hospital";
import HospitalRegister from "./components/pages/HospitalRegister/HospitalRegister";
import CreateEvent from "./components/pages/CreateEvent/CreateEvent";
import PrivateUser from "./components/pages/PrivateUser/PrivateUser";
import PrivateHospital from "./components/pages/PrivateHospital/PrivateHospital";
import Logout from "./components/Routes+LogOut/LogOut";
import Footer from "./components/Footer/Footer";
import EditUser from "./components/pages/EditUser/EditUser";
import EditHospital from "./components/pages/EditHospital/EditHospital";
import Loader from "./components/Loader/Loader";
import ConfirmedForm from "./components/pages/ConfirmedForm/ConfirmedForm";

function App() {
  const [loader, setLoader] = useState(true);
  setTimeout(() => {
    setLoader(false);
  }, 2000);
  return (
    <>
      {loader ? (
        <Loader />
      ) : (
        <>
          <Nav />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/login/:role" element={<Login />} />
            <Route path="/user" element={<DetailUser />} />
            <Route path="/user/:id" element={<DetailUser />} />
            <Route path="/user/event" element={<UserEvent />} />
            <Route path="/user/signup" element={<UserRegister />} />
            <Route path="/hospital" element={<Hospital />} />
            <Route path="/hospital/signup" element={<HospitalRegister />} />
            <Route path="/hospital/event" element={<CreateEvent />} />
            <Route path="/private/user" element={<PrivateUser />} />
            <Route path="/private/hospital" element={<PrivateHospital />} />
            <Route path="/logout/:role" element={<Logout />} />
            <Route path="/user/edit" element={<EditUser />} />
            <Route path="/hospital/edit" element={<EditHospital />} />
            <Route path="/user/event/:id" element={<UserEvent />} />
            <Route path="/hospital/event/:id" element={<ConfirmedForm />} />
          </Routes>
          <Footer />
        </>
      )}

      {/* <Route
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
        /> */}
    </>
  );
}
export default App;
