import React from "react";
import {  useNavigate } from "react-router-dom";
import bgImg from '../assets/image.png';

function Home() {
    const navigate=useNavigate()

  return (
    <>
      <div className="row" style={{ height: "90vh", backgroundImage: `url(${bgImg})`, backgroundSize: "cover" }}>
        <div className="col-3"></div>
        <div className="col-6 d-flex justify-content-center align-items-center">
          <div className="text-center p-4 border rounded shadow-sm w-100">
            <h1 className="mb-2">Welcome to HireHub</h1>
            <h5 className="mb-3">Your Career, Our Mission</h5>
            <p className="mb-4">Explore hundreds of job opportunities, connect with employers, and start your journey with confidence.</p>
            <button onClick={()=>navigate("/dashboard")} className="btn btn-primary">Manage Job</button>
          </div>
        </div>
        <div className="col-3"></div>
      </div>
    </>
  );
}

export default Home;
