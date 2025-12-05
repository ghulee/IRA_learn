import React from "react";
import { Routes, Route } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import CourseDetails from "./pages/CourseDetails";
import Notes from "./pages/Notes";
import Teachers from "./pages/Teachers";
import Header from "./components/Navbar";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Footer from "./components/Footer";


// Components
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/:id" element={<CourseDetails />} />
          <Route path="/notes" element={<Notes />} />
          <Route path="/teachers" element={<Teachers />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
            <Footer /> {/* Common footer for all pages */}

    </>
  );
};

export default App;
