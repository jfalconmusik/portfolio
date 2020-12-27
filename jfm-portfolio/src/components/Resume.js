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
        <div className="row work">
          <div className="three columns header-col">
            <h1>
              <span>Work</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            {resumeData.work &&
              resumeData.work.map((item) => {
                return (
                  <div className="row item">
                    <div className="twelve columns">
                      <h3>{item.CompanyName}</h3>
                      <p className="info">
                        {item.specialization}
                        <span>&bull;</span>{" "}
                        <em className="date">
                          {item.MonthOfLeaving} {item.YearOfLeaving}
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
                  <li
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <em>Parse</em>
                    <img
                      width="150px"
                      height="auto"
                      src="https://avatars3.githubusercontent.com/u/26932219?v=4"
                    />
                  </li>
                  <li
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <em>Heroku</em>
                    <img
                      width="140px"
                      height="auto"
                      src="https://weibeld.net/assets/icons/heroku.png"
                    />
                  </li>
                  <li
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <em>Bootstrap</em>
                    <img
                      width="130px"
                      height="auto"
                      src="https://theicom.org/wp-content/uploads/2016/03/bootstrap-logo.jpg"
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
                    <em>Flask</em>
                    <img
                      width="80px"
                      height="auto"
                      src="https://flask-training-courses.uk/images/flask-logo.png"
                    />
                  </li>
                  <li
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <em>MongoDB</em>
                    <img
                      width="145px"
                      height="auto"
                      src="https://infinapps.com/wp-content/uploads/2018/10/mongodb-logo.png"
                    />
                  </li>
                  <li
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <em>App Engine</em>
                    <img
                      width="150px"
                      style={{
                        marginBottom: "3vh",
                        top: "2vh",
                        position: "relative",
                      }}
                      height="auto"
                      src="https://miro.medium.com/max/498/1*VHYGqjhONSJ20pRlIUbg7w.png"
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
                      width="140px"
                      height="auto"
                      src="https://git-scm.com/images/logos/downloads/Git-Icon-Black.png"
                    />
                  </li>
                  <li
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <em>Stripe</em>
                    <img
                      width="140px"
                      height="auto"
                      src="https://www.techcentral.ie/wp-content/uploads/2015/01/Stripe_logo.jpg"
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
                    <em>PostgreSQL</em>
                    <img
                      width="100px"
                      height="auto"
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1200px-Postgresql_elephant.svg.png"
                    />
                  </li>
                  <li
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <em>Google Play Console</em>
                    <img
                      width="100px"
                      height="auto"
                      style={{
                        marginBottom: "3.3vw",
                        top: "3vh",
                        position: "relative",
                      }}
                      src="https://services.google.com/fh/files/emails/top_console.png"
                    />
                  </li>
                  <li
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <em>Firebase</em>
                    <img
                      width="90px"
                      height="auto"
                      src="https://firebase.google.com/downloads/brand-guidelines/PNG/logo-vertical.png"
                    />
                  </li>
                  <li
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <em>Expo</em>
                    <img
                      width="140px"
                      height="auto"
                      style={{ marginBottom: "5vh" }}
                      src="https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/129218011/original/4a82d51c58af9a120ce8ee00ee9d26fa1ffd197b/create-react-native-app-with-expo-on-ios-and-android.jpg"
                    />
                  </li>
                  <li
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      width: "300px",
                    }}
                  >
                    <em>Foundation</em>
                    <img
                      width="140px"
                      height="auto"
                      src="https://www.coffeecup.com/images/software/icons/foundation-framer_2.5_win_en.png"
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
