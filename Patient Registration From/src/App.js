import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Components/Navbar";
import PatientRegistration from "./Components/PatientRegistration";


function App() {
  return (
    <div className="container mt-5">
      <marquee bgcolor="#007bff" style={{ color: 'white', padding: '10px', marginBottom: '10px' }}>
        Welcome to Patient App - Please register your details below
      </marquee>
      <Navbar title="Patient App" />
      <PatientRegistration />
    </div>
  );
}

export default App;
