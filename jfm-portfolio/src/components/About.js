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
              Full stack web and mobile apps with React and React Native. For
              backend, anything goes: Node, Flask, Cloud Functions. I specialize
              in building tools from the ground up. Ecommerce by day,
              cybersecurity by night. Recent graduate from General Assembly
              software bootcamp.
            </p>

            <div className="row">
              <div className="columns contact-details">
                <h2>Contact Details</h2>
                <p className="address">
                  <span>{resumeData.name}</span>
                  <br></br>
                  <span>Denver, Colorado</span>
                  <br></br>
                  <span>jfalconmusik@gmail.com</span>
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
