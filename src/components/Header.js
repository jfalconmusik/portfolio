import React, { Component } from "react";
export default class Header extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <React.Fragment>
        <header id="home">
          <nav id="nav-wrap">
            <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
              Show navigation
            </a>
            <a className="mobile-btn" href="#" title="Hide navigation">
              Hide navigation
            </a>
            <ul id="nav" className="nav">
              <li className="current">
                <a className="smoothscroll" href="#home">
                  Home
                </a>
              </li>
              <li>
                <a className="smoothscroll" href="#projects">
                  Projects
                </a>
              </li>
              <li>
                <a className="smoothscroll" href="#about">
                  About
                </a>
              </li>
              <li>
                <a className="smoothscroll" href="#resume">
                  Resume
                </a>
              </li>
              <li>
                <a className="smoothscroll" href="#testimonials">
                  Testimonials
                </a>
              </li>
              <li>
                <a className="smoothscroll" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
          <div className="row banner">
            <div className="banner-text">
              <h1
                className="responsive-headline"
                style={{
                  width: "100%",
                  right: "20%",

                  alignContent: "center",
                  justifyContent: "space-evenly",
                  display: "flex",
                }}
              >
                {resumeData.name}.
              </h1>
              <p
                style={{
                  color: "#fff",
                  fontFamily: "sans-serif ",
                  fontSize: "large",
                }}
              >
                Full Stack App Dev - React Native - MERN Stack - Python & SQL .
                Check out my Android Apps
                <a
                  className="largifier"
                  href="https://play.google.com/store/apps/details?id=com.binarytreevisualizer"
                  style={{
                    fontSize: "larger",
                    color: "#e36600",
                    fontWeight: "bold",
                  }}
                >
                  {" Binary Tree Visualizer"}
                </a>
                ,
                <a
                  href="https://play.google.com/store/apps/details?id=com.hackmypassword"
                  style={{
                    fontSize: "larger",
                    color: "#e36600",
                    fontWeight: "bold",
                  }}
                  className="largifier"
                >
                  {" Hack My Password"}
                </a>
                , and my clothing website,
                <a
                  className="largifier"
                  href="https://jivasoriginals.com"
                  style={{
                    fontSize: "larger",
                    color: "#e36600",
                    fontWeight: "bold",
                  }}
                >
                  {" Jiva's Originals."}
                </a>
              </p>
              <hr />
              <ul className="social">
                {resumeData.socialLinks &&
                  resumeData.socialLinks.map((item) => {
                    return (
                      <li key={item.name}>
                        <a href={item.url} target="_blank">
                          <i className={item.className}> </i>
                        </a>
                      </li>
                    );
                  })}
              </ul>
            </div>
          </div>
          <p className="scrolldown">
            <a className="smoothscroll" href="#about">
              <i className="icon-down-circle"> </i>
            </a>
          </p>
        </header>
      </React.Fragment>
    );
  }
}
