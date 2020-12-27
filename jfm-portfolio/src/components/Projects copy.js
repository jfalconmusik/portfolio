import React, { useState, useEffect } from "react";

export default function Projects() {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  const [flexDirect, setFlexDirect] = useState("row");

  const [vidSize, setVidSize] = useState(900);

  useEffect(() => {
    if (window.innerWidth < 800) {
      setFlexDirect("column");
      setVidSize(200);
    } else if (window.innerWidth > 800 && window.innerWidth < 1200) {
      setFlexDirect("row");
      setVidSize(400);
    } else {
      setFlexDirect("row");
      setVidSize(600);
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
          justifyContent: "center",
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
              maxWidth: "100vw",
              // height: "30px",
              flexDirection: `${flexDirect === "row" ? "row" : "column"}`,
            }}
          >
            {/* <iframe
                title="Hack My Password"
                src="https://streamable.com/e/8mqxsf"
                height="auto"
                width="900"
                allowfullscreen={true}
              ></iframe> */}
            <embed
              className="embed"
              type="video/webm"
              src="https://streamable.com/e/8mqxsf"
              width={`${vidSize}`}
              height="auto"
              // height="300"
            ></embed>
            <embed
              className="embed"
              type="video/webm"
              src="https://streamable.com/e/5liauz"
              width={`${vidSize}`}
              // width="400"
              // height="300"
            ></embed>
            {/* <iframe
                title="Hack My Password"
                src="https://streamable.com/e/5liauz"
                height="auto"
                width="300%"
                allowfullscreen={true}
              ></iframe> */}
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
