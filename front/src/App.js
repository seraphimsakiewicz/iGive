import "./general.css";
import Nav from "./components/Nav/Nav";
import { Routes, Route } from "react-router-dom";
import Main from "./components/Main/Main";
import Hospital from "./components/Hospital/Hospital";
import CreateEvent from "./components/CreateEvent/CreateEvent";


function App() {

  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/hospital" element={<Hospital />} />
        <Route path="/hospital/event" element={<CreateEvent />} />
      </Routes>
    </>
  )
}

export default App;
