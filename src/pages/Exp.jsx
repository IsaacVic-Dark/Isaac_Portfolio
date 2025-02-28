import React from "react";
import Nav from "../layouts/Nav";

function Exp() {
  return (
    <div className="container">
      <Nav />
      <h1 style={{ display: "flex", justifyContent: "center" }}>
        My Education
      </h1>
      <div>
        <div style={{ display: "flex", gap: "1rem" }}>
          <div className="">
            <h2
              style={{
                border: "3px solid black",
                display: "inline-block",
                padding: "1rem",
              }}
            >
              2020 - 2024
            </h2>
            <h2 className="">Teach2give</h2>
            <p>
              I pursued a degree in{" "}
              <span style={{ color: "#666", fontWeight: "bold" }}>
                Computer Science
              </span>{" "}
              at Laikipia University, where I developed a strong foundation in
              software development, algorithms, data structures, and system
              architecture. Throughout my studies, I gained hands-on experience
              in programming languages such as Java, Python, and C++, while also
              exploring areas like artificial intelligence, databases, and
              cybersecurity. 
            </p>
          </div>
          <div className="">
            <h2
              style={{
                border: "3px solid black",
                display: "inline-block",
                padding: "1rem",
              }}
            >
              2020 - 2024
            </h2>
            <h2 className="">Laikipia University</h2>
            <p>
              I pursued a degree in{" "}
              <span style={{ color: "#666", fontWeight: "bold" }}>
                Computer Science
              </span>{" "}
              at Laikipia University, where I developed a strong foundation in
              software development, algorithms, data structures, and system
              architecture. Throughout my studies, I gained hands-on experience
              in programming languages such as Java, Python, and C++, while also
              exploring areas like artificial intelligence, databases, and
              cybersecurity. 
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Exp;
