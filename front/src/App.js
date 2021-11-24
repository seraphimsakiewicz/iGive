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
import { UserRoute } from "./components/Routes+LogOut/UserRoute";
import { HospitalRoute } from "./components/Routes+LogOut/HospitalRoute";

import Footer from "./components/Footer/Footer";
import EditUser from "./components/pages/EditUser/EditUser";
import EditHospital from "./components/pages/EditHospital/EditHospital";
import Loader from "./components/Loader/Loader";
import ConfirmedForm from "./components/pages/ConfirmedForm/ConfirmedForm";

import MapPage from "./components/Google/MapPage";
=======
// import ApiTestComp from "./components/pages/ApiTestComp/ApiTestComp";


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
            <Route path="/hospital/signup" element={<HospitalRegister />} />
            <Route path="/user/signup" element={<UserRegister />} />
            <Route path="/login/:role" element={<Login />} />
            <Route path="/logout/:role" element={<Logout />} />

            <Route path="/map" element={<MapPage />} />

            {/* <Route path="/test" element={<ApiTestComp />} /> */}


            <Route
              path="/user/event/:id"
              element={
                <UserRoute>
                  <UserEvent />
                </UserRoute>
              }
            />

            <Route
              path="/user/edit"
              element={
                <UserRoute>
                  <EditUser />
                </UserRoute>
              }
            />

            <Route
              path="/private/user"
              element={
                <UserRoute>
                  <PrivateUser />
                </UserRoute>
              }
            />

            <Route
              path="/user/event"
              element={
                <UserRoute>
                  <UserEvent />
                </UserRoute>
              }
            />

            <Route
              path="/user"
              element={
                <UserRoute>
                  <DetailUser />
                </UserRoute>
              }
            />

            <Route
              path="/hospital/edit"
              element={
                <HospitalRoute>
                  <EditHospital />
                </HospitalRoute>
              }
            />
            <Route
              path="/hospital/event/:id"
              element={
                <HospitalRoute>
                  <ConfirmedForm />
                </HospitalRoute>
              }
            />

            <Route
              path="/hospital/event"
              element={
                <HospitalRoute>
                  <CreateEvent />
                </HospitalRoute>
              }
            />

            <Route
              path="/private/hospital"
              element={
                <HospitalRoute>
                  <PrivateHospital />
                </HospitalRoute>
              }
            />

            <Route
              path="/hospital"
              element={
                <HospitalRoute>
                  <Hospital />
                </HospitalRoute>
              }
            />
          </Routes>
          <Footer />
        </>
      )}

      {/* <Route path="/hospital/edit" element={<EditHospital />} /> */}
      {/* <Route path="/hospital/event/:id" element={<ConfirmedForm />} /> */}
      {/* <Route path="/hospital/event" element={<CreateEvent />} /> */}
      {/* <Route path="/private/hospital" element={<PrivateHospital />} /> */}
      {/* <Route path="/hospital" element={<Hospital />} /> */}

      {/* <Route path="/user/event/:id" element={<UserEvent />} /> */}
      {/* <Route path="/user/edit" element={<EditUser />} /> */}
      {/* <Route path="/private/user" element={<PrivateUser />} /> */}
      {/* <Route path="/user/event" element={<UserEvent />} /> */}
      {/* <Route path="/user" element={<DetailUser />} /> */}
    </>
  );
}
export default App;
