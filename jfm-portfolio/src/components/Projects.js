import React, { useState, useEffect } from "react";

export default function Projects() {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  const [flexDirect, setFlexDirect] = useState("row");

  const [vidSize, setVidSize] = useState(900);
  const [containerHeight, setContainerHeight] = useState(500);

  useEffect(() => {
    if (window.innerWidth < 800) {
      setFlexDirect("column");
      setVidSize(300);
      setContainerHeight(400);
    } else if (window.innerWidth > 800 && window.innerWidth < 1200) {
      setFlexDirect("row");
      setVidSize(600);
      setContainerHeight(300);
    } else {
      setFlexDirect("row");
      setVidSize(900);
      setContainerHeight(500);
    }
  }, [windowSize]);

  return (
    <section id="projects">
      <h3
        style={{
          color: "white",
          alignContent: "center",
          margin: "0 auto",
          display: "flex",
          justifyContent: "center",
          marginBottom: "2em",
        }}
      >
        Projects
      </h3>
      <div
        style={{
          width: "100vw",
          alignContent: "center",
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
        <div className="ten columns">
          <p
            className="lead"
            style={{
              fontSize: "50px",
              alignContent: "center",
              margin: "0 auto",
              display: "flex",
              justifyContent: "space-evenly",
              // marginLeft: "10vw",
              lineHeight: "1.1",
              marginBottom: "1em",
              maxWidth: "none",
              height: `${containerHeight}px`,
              // height: "30px",
              flexDirection: `${flexDirect === "row" ? "row" : "column"}`,
            }}
          >
            <embed
              className="embed"
              type="video/webm"
              src="https://streamable.com/e/8mqxsf"
              width={`${vidSize}px`}
              style={{ margin: "1vw" }}
              height="auto"
            ></embed>
            <embed
              className="embed"
              type="video/webm"
              src="https://streamable.com/e/5liauz"
              width={`${vidSize}px`}
              style={{ margin: "1vw" }}
            ></embed>
          </p>
        </div>
      </div>
      <div className="row">
        <aside className="eigth columns footer-widgets">
          <div className="widget"></div>
        </aside>
      </div>
    </section>
  );
}
