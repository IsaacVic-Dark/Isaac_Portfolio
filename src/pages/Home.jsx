import React from "react";
import Nav from "../layouts/Nav";
import "../css/style.css";

function Home() {
  return (
    <>
      <Nav />
      <div className="container">
        <div className="box">
          <div style={{}}>
            <p className="" style={{ fontSize: "50px" }}>Hello, I am a Software Developer</p>
            <h1 className="" style={{ fontSize: "100px" }}>Isaac <span style={{ color: "#666" }}>Warui</span></h1>
          </div>
          <div className="" style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "300px", height: "300px" }}>
            <h1>Image Here</h1>
          </div>
        </div>
        <div className="box home_footer">
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <h2>1</h2>
            <p>Experience</p>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <h2>5</h2>
            <p>Projects</p>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <h2>2</h2>
            <p>Certifications</p>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <h2>1</h2>
            <p>Languages</p>
          </div>
                    
        </div>
      </div>
    </>
  );
}

export default Home;
