import React, { Component } from "react";
export default class ContactUs extends Component {
  render() {
    return (
      <section id="contact">
        <div className="row section-head">
          <div className="ten columns">
            <p
              className="lead"
              style={{
                fontSize: "50px",
                alignContent: "center",
                margin: "0 auto",
                display: "flex",
                justifyContent: "center",
                marginLeft: "10vw",
                lineHeight: "1.1",
                // height: "30px",
              }}
            >
              <a
                href="https://drive.google.com/uc?export=download&id=1TccSj5nnYc75jkwUVjrNwjausRNRzKp2"
                download
              >
                Download Resume
              </a>
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
}
