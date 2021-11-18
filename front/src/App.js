import "./general.css";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./components/Main";
import User from "./components/User/User";

function App() {
  // eslint-disable-next-line react-hooks/exhaustive-deps

  return (
    <div className="center">
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
        <Routes>
          <Route path="/users" element={<User />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
