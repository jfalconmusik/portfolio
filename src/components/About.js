import React, { Component } from "react";
export default class About extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="about">
        <div className="row">
          <div className="three columns">
            <img
              className="profile-pic"
              src="https://i.ibb.co/rHgNYF4/developer.png"
              alt=""
            />
          </div>

          <div className="nine columns main-col">
            <h2>About Me</h2>
            <p>
              Passionate specialist in Full Stack Software Engineering. Through
              Capital Technology Group, I've written software under contract
              with the Department of Homeland Security for the past year. While
              the exact nature of my work is confidential per my nondisclosure
              agreement, I've been involved on every part of our tech stack;
              Java Springboot, React, PostgreSQL, Jenkins, AWS, Git.
              <br></br>
              <br></br>
              Before that, I wrote code for Bundlefi, an excellent Fintech
              startup based in the NYC area. There, I learned how to thrive in
              the fast-paced world of startups, and how to work with a team of
              both technical and non-technical peers.
              <br></br>
              <br></br>
              In my off-time, you can usually find me writing security software
              or working on a new Machine Learning model.
              <br></br>
              <br></br>
              Fueled by the drive and motivation of a self-taught programmer,
              with years of on-the-job experience as well as a rigorous CS
              education from the Regis University.
            </p>

            <div className="row">
              <div className="columns contact-details">
                <h2>Contact Details</h2>
                <p className="address">
                  <span>{resumeData.name}</span>
                  <br></br>
                  <span>Boulder, Colorado</span>
                  <br></br>
                  <a href="mailto: jfalconmusik@gmail.com">
                    jfalconmusik@gmail.com
                  </a>
                  <div>
                    <a href="https://www.facebook.com/jesse.falconmusik/">
                      Facebook
                    </a>
                  </div>
                  <div>
                    <a href="https://github.com/jfalconmusik">Github</a>
                  </div>
                  <div>
                    <a href="https://www.linkedin.com/in/jessefalconmusik/">
                      Linkedin
                    </a>
                  </div>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
