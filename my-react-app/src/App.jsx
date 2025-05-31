import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Login from "./pages/Auth/Login/Login";
import Register from "./pages/Auth/Register/Register";
import Profile from "./pages/Auth/Profile/Profile";
import Verifyotp from "./pages/Auth/Verifyotp/Verifyotp";
import Section from "./pages/Section/Section";
import Lc from "./pages/Center/Lc";
import Resources from "./pages/Resources/Resources";

const Home = () => (
  <div className="">
    <Section />
    <Lc/>
  </div>
);

const AppContent = () => {
  const location = useLocation();
  const hideNavbar =
    location.pathname === "/login" ||
    location.pathname === "/register" ||
    location.pathname === "/verifyotp";

  return (
    <div className="min-h-screen bg-gray-50">
      {!hideNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/verifyotp" element={<Verifyotp />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/section" element={<Section />} />
        <Route path="/centers" element={<Lc />} />
        <Route path="/resources" element={<Resources />} />
      </Routes>
    </div>
  );
};

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
