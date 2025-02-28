import React from "react";
import Nav from "../layouts/Nav";
import "../css/style.css";

function Home() {
  return (
    <>
      <Nav />
      <div>
        <div>
          <h2 className="">Hello, I am a Software Developer</h2>
          <h1 className="">Isaac Victor Warui</h1>
        </div>
        <div>
          <h1>Image Here</h1>
        </div>
      </div>
      <div>
        <div>
          <h2>1</h2>
          <p>Experience</p>
        </div>
        <div>
          <h2>5</h2>
          <p>Projects</p>
        </div>
        <div>
          <h2>2</h2>
          <p>Certifications</p>
        </div>
        <div>
          <h2>2</h2>
          <p>Languages</p>
        </div>
      </div>
    </>
  );
}

export default Home;
