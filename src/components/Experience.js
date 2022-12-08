import React, { useState, useEffect, useRef } from "react";
import AliceCarousel from "react-alice-carousel";

import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import { useMediaQuery } from "react-responsive";
import styles from "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

export default function Experience() {
  const [flexDirect, setFlexDirect] = useState("column");

  const [vidSize, setVidSize] = useState(1600);
  const [containerHeight, setContainerHeight] = useState(500);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  const isPortrait = useMediaQuery({ query: "(orientation: portrait)" });
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-device-width: 1224px)",
  });
  const isBigScreen = useMediaQuery({ query: "(min-device-width: 1824px)" });

  // animation code for full screen:

  const ctgRef = useRef();
  const onScreenCtg = useOnScreen(ctgRef, "-0px");

  const bdfRef = useRef();
  const onScreenBdf = useOnScreen(bdfRef, "-0px");

  const freelanceRef = useRef();
  const onScreenFreelance = useOnScreen(freelanceRef, "-0px");

  // animation code for portrait:

  const ctgRef2 = useRef();
  const onScreenCtg2 = useOnScreen(ctgRef2, "-0px");

  const bdfRef2 = useRef();
  const onScreenBdf2 = useOnScreen(bdfRef2, "-0px");

  const freelanceRef2 = useRef();
  const onScreenFreelance2 = useOnScreen(freelanceRef2, "-0px");

  useEffect(() => {
    // if (isPortrait) {
    //   setIsSmallScreen(true);
    // }
    // // if (isDesktopOrLaptop) {
    // //   setIsLargeScreen(true);
    // // }
    if (isBigScreen || isDesktopOrLaptop) {
      setIsLargeScreen(true);
    }
    console.log(`isPortrait: ${isPortrait}`);
    // console.log(`isDesktopOrLaptop: ${isDesktopOrLaptop}`);
    console.log(`isBigScreen: ${isBigScreen}`);
  }, [isBigScreen, isDesktopOrLaptop, isPortrait]);

  function handleCurrentIndex(direction) {
    if (direction === "next") {
      if (currentIndex < 2) {
        setCurrentIndex(Number(currentIndex + 1));
      } else {
        setCurrentIndex(0);
      }
    } else {
      if (currentIndex > 0) {
        setCurrentIndex(Number(currentIndex - 1));
      } else {
        setCurrentIndex(2);
      }
    }
  }

  function useOnScreen(ref, rootMargin = "0px") {
    // State and setter for storing whether element is visible
    const [isIntersecting, setIntersecting] = useState(false);
    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          // Update our state when observer callback fires
          setIntersecting(entry.isIntersecting);
        },
        {
          rootMargin,
        }
      );
      if (ref.current) {
        observer.observe(ref.current);
      }
      return () => {
        observer.unobserve(ref.current);
      };
    }, []); // Empty array ensures that effect is only run on mount and unmount

    return isIntersecting;
  }

  // animation effects for fullscreen:

  useEffect(() => {
    const ctg = document.getElementById("ctg");
    const ctgText = document.getElementById("ctgText");
    if (ctg) {
      if (onScreenCtg) {
        ctg.classList.add("slideLeft");
        setTimeout(() => {
          ctgText.classList.add("fadeIn");
        }, 4000);
        setTimeout(() => {
          ctgText.classList.add("opaque");
        }, 5500);
      } else {
        // setTimeout(() => {
        //   ctg.classList.remove("slideLeft");
        // }, 1000);
      }
    }
  }, [onScreenCtg]);

  useEffect(() => {
    const bdf = document.getElementById("bdf");
    const bdfText = document.getElementById("bdfText");
    if (bdf) {
      if (onScreenBdf) {
        bdf.classList.add("slideRight");
        setTimeout(() => {
          bdfText.classList.add("fadeIn");
        }, 4000);
        setTimeout(() => {
          bdfText.classList.add("opaque");
        }, 5500);
      } else {
        // setTimeout(() => {
        //   console.log("bdf classlist: ", bdf.className);
        //   bdf.classList.remove("slideRight");
        // }, 1000);
      }
    }
  }, [onScreenBdf]);

  useEffect(() => {
    const freelance = document.getElementById("freelance");
    const freelanceText = document.getElementById("freelanceText");
    if (freelance) {
      if (onScreenFreelance) {
        freelance.classList.add("slideLeft");
        setTimeout(() => {
          freelanceText.classList.add("fadeIn");
        }, 4000);

        setTimeout(() => {
          freelanceText.classList.add("opaque");
        }, 5500);
      } else {
        // setTimeout(() => {
        //   freelance.classList.remove("slideLeft");
        // }, 1000);
      }
    }
  }, [onScreenFreelance]);

  // animation effects for portrait:

  useEffect(() => {
    const ctg2 = document.getElementById("ctg2");
    const ctgText2 = document.getElementById("ctgText2");
    if (ctg2) {
      if (onScreenCtg2) {
        setTimeout(() => {
          ctgText2.classList.add("fadeIn");
        }, 1000);
        setTimeout(() => {
          ctgText2.classList.add("opaque");
        }, 2500);
      } else {
        // setTimeout(() => {
        //   ctg.classList.remove("slideLeft");
        // }, 1000);
      }
    }
  }, [onScreenCtg2]);

  useEffect(() => {
    const bdf2 = document.getElementById("bdf2");
    const bdfText2 = document.getElementById("bdfText2");
    if (bdf2) {
      if (onScreenBdf2) {
        setTimeout(() => {
          bdfText2.classList.add("fadeIn");
        }, 1000);
        setTimeout(() => {
          bdfText2.classList.add("opaque");
        }, 2500);
      } else {
        // setTimeout(() => {
        //   console.log("bdf classlist: ", bdf.className);
        //   bdf.classList.remove("slideRight");
        // }, 1000);
      }
    }
  }, [onScreenBdf2]);

  useEffect(() => {
    const freelance2 = document.getElementById("freelance2");
    const freelanceText2 = document.getElementById("freelanceText2");
    if (freelance2) {
      if (onScreenFreelance2) {
        setTimeout(() => {
          freelanceText2.classList.add("fadeIn");
        }, 1000);

        setTimeout(() => {
          freelanceText2.classList.add("opaque");
        }, 2500);
      } else {
        // setTimeout(() => {
        //   freelance.classList.remove("slideLeft");
        // }, 1000);
      }
    }
  }, [onScreenFreelance2]);

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
  }, []);

  function handleOnDragStart(e) {
    e.preventDefault();
  }

  return (
    <section id="experience">
      <h3
        style={{
          color: "white",
          alignContent: "center",
          margin: "0 auto",
          marginBottom: "40px",
          marginTop: "20px",
          fontSize: "xx-large",
          display: "flex",
          justifyContent: "center",
        }}
      >
        Experience
      </h3>
      <div
        style={{
          width: "100vw",
          alignContent: "center",
          margin: "0 auto",

          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          position: "relative",
        }}
      >
        {!isPortrait ? (
          // animated version for large screens
          <>
            {" "}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                position: "relative",
              }}
            >
              <div ref={ctgRef} className="exp slideLeftEnd col" id="ctg">
                <p id="ctgText" className="txt block">
                  {" "}
                  With{" "}
                  <a href="https://capitaltg.com">Capital Technology Group</a> I
                  developed web applications as a federal contractor. I worked
                  with every aspect of our tech stack and coordinated with a
                  large scrum team. My work with them is protected by an NDA,
                  but it was with CTG that I went from a Developer to an
                  Engineer.
                  <br></br>
                  <br></br>
                  March 2022 - Present
                </p>
                <img
                  className="float-img img"
                  // src="https://firebasestorage.googleapis.com/v0/b/jfalconmusik.appspot.com/o/project-images%2Fctg.png?alt=media&token=484db0f7-e485-4a79-80c0-1fa38c9823d4"
                  src="https://media-exp1.licdn.com/dms/image/C4E0BAQFN-NcsuLZFYw/company-logo_200_200/0/1615241073106?e=1678320000&v=beta&t=NrX8W_3r5qd8Ht11FdrYAyZnSLhheBb3VcLkaFt_y0Q"
                />
              </div>
              <div ref={bdfRef} className="exp slideRightEnd col" id="bdf">
                <img
                  className="float-img img"
                  style={{ imageRendering: "crisp-edges" }}
                  src="https://media-exp1.licdn.com/dms/image/C4E0BAQE66cY4ly9v7g/company-logo_200_200/0/1519877817500?e=1678320000&v=beta&t=MO6CnM03oxybSNBwlUBhWAPLeTS6uiM21TXXd0kOPNI"
                />{" "}
                <p id="bdfText" className="txt block">
                  {" "}
                  <a href="https://bundlefi.com">Bundlefi</a> is a Fintech
                  startup committed to providing the fastest and easiest way to
                  find a local bank or credit union. Bundlefi was a fast-paced
                  work environment, where I experienced first-hand the executive
                  decision-making necessary for startups to flourish.
                  <br></br>
                  <br></br>
                  December 2021 - February 2022
                </p>
              </div>
              <div
                ref={freelanceRef}
                className="exp slideLeftEnd col"
                id="freelance"
              >
                <p id="freelanceText" className="txt block">
                  {" "}
                  As a freelancer I wrote web applications for both the online
                  clothing store{" "}
                  <a href="https://jivasoriginals.com">Jiva's Originals</a>, as
                  well as the private chef booking platform,{" "}
                  <a href="https://jkchefcollection.com">JK Chef Collection</a>.
                </p>
                <img
                  className="float-img img"
                  // src="https://firebasestorage.googleapis.com/v0/b/jfalconmusik.appspot.com/o/project-images%2Fjk-collection-landing.jpg?alt=media&token=4cb8ae6d-1404-4fce-8bb4-673b65d3ac60"
                  src="https://www.jkcollection.com/wp-content/uploads/2017/12/jk-chef-collection-small-logo-1.png"
                />
              </div>
            </div>
          </>
        ) : (
          // non animated version for portrait screens

          <>
            {" "}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                position: "relative",
                margin: "0 auto",
              }}
            >
              <div className="row" id="ctg2" ref={ctgRef2}>
                <img
                  style={{ margin: "0 auto" }}
                  className="small-img img"
                  // src="https://firebasestorage.googleapis.com/v0/b/jfalconmusik.appspot.com/o/project-images%2Fctg.png?alt=media&token=484db0f7-e485-4a79-80c0-1fa38c9823d4"
                  src="https://media-exp1.licdn.com/dms/image/C4E0BAQFN-NcsuLZFYw/company-logo_200_200/0/1615241073106?e=1678320000&v=beta&t=NrX8W_3r5qd8Ht11FdrYAyZnSLhheBb3VcLkaFt_y0Q"
                />
              </div>
              <p id="ctgText2" className="txt2 block2">
                {" "}
                With{" "}
                <a href="https://capitaltg.com">Capital Technology Group</a> I
                developed web applications as a federal contractor. I worked
                with every aspect of our tech stack and coordinated with a large
                scrum team. My work with them is protected by an NDA, but it was
                with CTG that I went from a Developer to an Engineer.
                <br></br>
                <br></br>
                March 2022 - Present
              </p>
              <div className="row" id="bdf2" ref={bdfRef2}>
                <img
                  style={{ margin: "0 auto", imageRendering: "crisp-edges" }}
                  className="small-img img"
                  src="https://media-exp1.licdn.com/dms/image/C4E0BAQE66cY4ly9v7g/company-logo_200_200/0/1519877817500?e=1678320000&v=beta&t=MO6CnM03oxybSNBwlUBhWAPLeTS6uiM21TXXd0kOPNI"
                />{" "}
                <p id="bdfText2" className="txt2 block2">
                  {" "}
                  <a href="https://bundlefi.com">Bundlefi</a> is a Fintech
                  startup committed to providing the fastest and easiest way to
                  find a local bank or credit union. Bundlefi was a fast-paced
                  work environment, where I experienced first-hand the executive
                  decision-making necessary for startups to flourish.
                  <br></br>
                  <br></br>
                  December 2021 - February 2022
                </p>
              </div>
              <div className="row" id="freelance2" ref={freelanceRef2}>
                <img
                  style={{ margin: "0 auto" }}
                  className="small-img img"
                  // src="https://firebasestorage.googleapis.com/v0/b/jfalconmusik.appspot.com/o/project-images%2Fjk-collection-landing.jpg?alt=media&token=4cb8ae6d-1404-4fce-8bb4-673b65d3ac60"
                  src="https://www.jkcollection.com/wp-content/uploads/2017/12/jk-chef-collection-small-logo-1.png"
                />
                <p id="freelanceText2" className="txt2 block2">
                  {" "}
                  As a freelancer I wrote web applications for both the online
                  clothing store{" "}
                  <a href="https://jivasoriginals.com">Jiva's Originals</a>, as
                  well as the private chef booking platform,{" "}
                  <a href="https://jkchefcollection.com">JK Chef Collection</a>.
                </p>
              </div>
            </div>
          </>
        )}
      </div>

      {/* <div className="row">
        <aside className="eigth columns footer-widgets">
          <div className="widget"></div>
        </aside>
      </div> */}
    </section>
  );
}
