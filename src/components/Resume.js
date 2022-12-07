import React, { Component } from "react";
export default class Resume extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="resume">
        <div className="row education">
          <div className="three columns header-col">
            <h1>
              <span>Education</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            {resumeData.education &&
              resumeData.education.map((item) => {
                return (
                  <div className="row item">
                    <div className="twelve columns">
                      <h3>{item.UniversityName}</h3>
                      <p className="info">
                        {item.specialization}
                        <span>&bull;</span>{" "}
                        <em className="date">
                          {item.MonthOfPassing} {item.YearOfPassing}
                        </em>
                      </p>
                      <p>{item.Achievements}</p>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>

        <div
          className="row skill"
          style={{
            margin: "0 auto",
            position: "relative",
            // right: "5vw",
            width: "100vw",
          }}
        >
          <div className="three columns header-col">
            <h1>
              <span>Skills</span>
            </h1>
          </div>

          <div
            className="nine columns main-col"
            style={{
              width: "80vw",
              // paddingLeft: "10vw",
              // paddingRight: "10vw",
              // height: "100vh",
              justifyContent: "space-between",
              margin: "0 auto",
              display: "flex",
              // left: "50%",
              // right: "50%",
              alignContent: "center",
              position: "relative",
            }}
          >
            <p>{resumeData.skillsDescription}</p>

            <div className="">
              <div
                className="skills row"
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <div className="column">
                  <li
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <em>React / Native</em>
                    <img
                      width="150px"
                      height="auto"
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"
                    />
                  </li>
                  <li
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <em>Node</em>
                    <img
                      width="150px"
                      height="auto"
                      src="https://nodejs.org/static/images/logo-hexagon-card.png"
                    />
                  </li>
                </div>
                <div className="column">
                  <li
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <em>AWS</em>
                    <img
                      width="150px"
                      height="auto"
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/512px-Amazon_Web_Services_Logo.svg.png"
                    />
                  </li>

                  <li
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <em>Git</em>
                    <img
                      alt=""
                      width="140px"
                      height="auto"
                      src="https://git-scm.com/images/logos/downloads/Git-Icon-Black.png"
                    />
                  </li>
                </div>
                <div className="column" style={{ float: "left" }}>
                  <li
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <em>Java</em>
                    <img
                      width="80px"
                      height="auto"
                      src="https://upload.wikimedia.org/wikipedia/en/thumb/3/30/Java_programming_language_logo.svg/800px-Java_programming_language_logo.svg.png"
                    />
                  </li>
                  <li
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <em>PostgreSQL</em>
                    <img
                      alt=""
                      width="100px"
                      height="auto"
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1200px-Postgresql_elephant.svg.png"
                    />
                  </li>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
