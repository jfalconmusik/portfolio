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

  // animation code:

  const ctgRef = useRef();
  const onScreenCtg = useOnScreen(ctgRef, "-0px");

  const bdfRef = useRef();
  const onScreenBdf = useOnScreen(bdfRef, "-0px");

  const freelanceRef = useRef();
  const onScreenFreelance = useOnScreen(freelanceRef, "-0px");

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
              With <a href="https://capitaltg.com">
                Capital Technology Group
              </a>{" "}
              I developed web applications as a federal contractor. I worked
              with every aspect of our tech stack and coordinated with a large
              scrum team. My work with them is protected by an NDA, but it was
              with CTG that I went from a Developer to an Engineer.
              <br></br>
              <br></br>
              March 2022 - Present
            </p>
            <img
              className="float-img img"
              src="https://firebasestorage.googleapis.com/v0/b/jfalconmusik.appspot.com/o/project-images%2Fctg.png?alt=media&token=484db0f7-e485-4a79-80c0-1fa38c9823d4"
            />
          </div>
          <div ref={bdfRef} className="exp slideRightEnd col" id="bdf">
            <img
              className="float-img img"
              src="https://firebasestorage.googleapis.com/v0/b/jfalconmusik.appspot.com/o/project-images%2Fbundlefi.png?alt=media&token=6058f989-23f1-4df5-9cf7-e3912f48800e"
            />{" "}
            <p id="bdfText" className="txt block">
              {" "}
              <a href="https://bundlefi.com">Bundlefi</a> is a Fintech startup
              committed to providing the fastest and easiest way to find a local
              bank or credit union. Bundlefi was a fast-paced work environment,
              where I experienced first-hand the executive decision-making
              necessary for startups to flourish.
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
              <a href="https://jivasoriginals.com">Jiva's Originals</a>, as well
              as the private chef booking platform,{" "}
              <a href="https://jkchefcollection.com">JK Chef Collection</a>.
            </p>
            <img
              className="float-img img"
              src="https://firebasestorage.googleapis.com/v0/b/jfalconmusik.appspot.com/o/project-images%2Fjk-collection-landing.jpg?alt=media&token=4cb8ae6d-1404-4fce-8bb4-673b65d3ac60"
            />
          </div>
          {/* <Accordion allowZeroExpanded={true}>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton id="ctg">
                  Capital Technology Group
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <div>
                  <div style={{ height: "110vh" }}>
                    <Carousel
                      infiniteLoop={true}
                      showThumbs={false}
                      swipeable={true}
                      emulateTouch={true}
                      autoPlay={true}
                      interval={5000}
                      useKeyboardArrows={true}
                    >
                      <img src="https://firebasestorage.googleapis.com/v0/b/jfalconmusik.appspot.com/o/project-images%2Fctg.png?alt=media&token=484db0f7-e485-4a79-80c0-1fa38c9823d4" />
                    </Carousel>
                    <a
                      href="https://capitaltg.com"
                      className="lead hoverer"
                      style={{
                        position: "relative",
                        margin: "0 auto",
                        marginTop: "20px",
                        marginBottom: "100px",
                        display: "flex",
                        justifyContent: "center",
                        color: "white",
                        fontSize: "x-large",
                      }}
                    >
                      <p className="hoverer">Capital Technology Group</p>
                    </a>
                  </div>
                  <div style={{ position: "relative", margin: "0 auto" }}>
                    <p
                      style={{
                        maxWidth: "70vw",
                        margin: "0 auto",
                        marginTop: "20px",
                        marginBottom: "20px",
                      }}
                    >
                      With Capital Technology Group I developed web applications
                      as a federal contractor. I worked with every aspect of our
                      tech stack and coordinated with a large scrum team. My
                      work with them is protected by an NDA, but it was with CTG
                      that I went from a Developer to an Engineer.
                    </p>
                  </div>
                </div>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton id="bdf">Bundlefi</AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <div>
                  <div style={{ height: "110vh" }}>
                    <Carousel
                      infiniteLoop={true}
                      showThumbs={false}
                      swipeable={true}
                      emulateTouch={true}
                      autoPlay={true}
                      interval={5000}
                      useKeyboardArrows={true}
                    >
                      <img src="https://firebasestorage.googleapis.com/v0/b/jfalconmusik.appspot.com/o/project-images%2Fbundlefi.png?alt=media&token=6058f989-23f1-4df5-9cf7-e3912f48800e" />
                    </Carousel>
                    <a
                      href="https://bundlefi.com"
                      className="lead hoverer"
                      style={{
                        position: "relative",
                        margin: "0 auto",
                        marginTop: "20px",
                        marginBottom: "100px",
                        display: "flex",
                        justifyContent: "center",
                        color: "white",
                        fontSize: "x-large",
                      }}
                    >
                      <p className="hoverer">Bundlefi</p>
                    </a>
                  </div>
                  <div style={{ position: "relative", margin: "0 auto" }}>
                    <p
                      style={{
                        maxWidth: "70vw",
                        margin: "0 auto",
                        marginTop: "20px",
                        marginBottom: "20px",
                      }}
                    >
                      Bundlefi is a Fintech startup committed to providing the
                      best way to find a local bank or credit union. Bundlefi
                      was a fast-paced work environment, where I experienced
                      first-hand the executive technical decision-making that
                      makes startups flourish.
                    </p>
                  </div>
                </div>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton id="freelance">
                  Freelance Projects
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <div>
                  <div style={{ height: "110vh" }}>
                    <Carousel
                      infiniteLoop={true}
                      showThumbs={false}
                      swipeable={true}
                      emulateTouch={true}
                      autoPlay={true}
                      interval={5000}
                      useKeyboardArrows={true}
                    >
                      <>
                        <img src="https://firebasestorage.googleapis.com/v0/b/jfalconmusik.appspot.com/o/project-images%2Fjk-collection-landing.jpg?alt=media&token=4cb8ae6d-1404-4fce-8bb4-673b65d3ac60" />
                        <a
                          href="https://jkchefcollection.com"
                          className="lead hoverer"
                          style={{
                            position: "relative",
                            margin: "0 auto",
                            marginTop: "20px",
                            marginBottom: "100px",
                            display: "flex",
                            justifyContent: "center",
                            color: "white",
                            fontSize: "x-large",
                          }}
                        >
                          <p>JK Collection</p>
                        </a>
                      </>
                      <>
                        <img src="https://firebasestorage.googleapis.com/v0/b/jfalconmusik.appspot.com/o/project-images%2Fjiva-landing.jpg?alt=media&token=d6cba771-0dfb-4c41-b7e9-672365b93d58" />
                        <a
                          href="https://jivasoriginals.com"
                          className="lead hoverer"
                          style={{
                            position: "relative",
                            margin: "0 auto",
                            marginTop: "20px",
                            marginBottom: "100px",
                            display: "flex",
                            justifyContent: "center",
                            color: "white",
                            fontSize: "x-large",
                          }}
                        >
                          <p className="hoverer">Jiva's Originals</p>
                        </a>
                      </>
                    </Carousel>
                  </div>
                  <p
                    style={{
                      maxWidth: "70vw",
                      margin: "0 auto",
                      marginTop: "20px",
                      marginBottom: "20px",
                    }}
                  >
                    As a freelancer I've written web applications for both the
                    online clothing store{" "}
                    <a href="https://jivasoriginals.com">Jiva's Originals</a>,
                    as well as{" "}
                    <a href="https://jkchefcollection.com">
                      JK Chef Collection
                    </a>
                    , a private chef booking platform based in the NYC area.
                  </p>
                </div>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>Apps</AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <>
                  <Carousel
                    infiniteLoop={true}
                    showThumbs={false}
                    swipeable={true}
                    emulateTouch={true}
                    autoPlay={true}
                    interval={5000}
                    useKeyboardArrows={true}
                  >
                    <div>
                      <video controls name="media" width="100%" height="auto">
                        <source
                          type="video/mp4"
                          src="https://firebasestorage.googleapis.com/v0/b/jfalconmusik.appspot.com/o/binary-tree-visualizer.mp4?alt=media&token=0d919a63-9ef2-4936-be6f-3e406a8f6bfa"
                        ></source>
                      </video>
                      <a
                        href="https://play.google.com/store/apps/details?id=com.binarytreevisualizer"
                        className="lead hoverer"
                        style={{
                          position: "relative",
                          margin: "0 auto",
                          marginTop: "20px",
                          marginBottom: "100px",
                          display: "flex",
                          justifyContent: "center",
                          color: "white",
                          fontSize: "x-large",
                        }}
                      >
                        <p>Binary Tree Visualizer</p>
                      </a>
                      <p
                        style={{
                          maxWidth: "70vw",
                          margin: "0 auto",
                          marginTop: "20px",
                          marginBottom: "20px",
                        }}
                      >
                        A simple educational tool for the data structure of
                        Binary Trees. Actively updates all leaves and displays
                        results of traversals. Impress your friends with your
                        knowledge of Binary Trees!
                      </p>
                      <br></br>
                    </div>
                    <div>
                      <video controls name="media" width="100%" height="auto">
                        <source
                          type="video/mp4"
                          src="https://firebasestorage.googleapis.com/v0/b/jfalconmusik.appspot.com/o/demo_hackmypassword.mp4?alt=media&token=313b3405-99b8-46f1-8fe1-4b748832ab45"
                        ></source>
                      </video>
                      <a
                        href="https://play.google.com/store/apps/details?id=com.hackmypassword"
                        className="lead hoverer"
                        style={{
                          position: "relative",
                          margin: "0 auto",
                          marginTop: "20px",
                          marginBottom: "100px",
                          display: "flex",
                          justifyContent: "center",
                          color: "white",
                          fontSize: "x-large",
                        }}
                      >
                        <p>Hack My Password</p>
                      </a>
                      <p
                        style={{
                          maxWidth: "70vw",
                          margin: "0 auto",
                          marginTop: "20px",
                          marginBottom: "20px",
                        }}
                      >
                        Intended for cybersecurity professionals or personal use
                        only. This app attempts to decrypt the password hash(es)
                        entered by the user, either entered manually or as a
                        .txt file. The user can choose which hash functions to
                        run decryption for and has options for salts. All
                        batches of decryption attempts are stored to the
                        database and viewable later. Think Hashcat, but for
                        mobile!
                      </p>
                      <br></br>
                    </div>
                    <div>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          flexWrap: "wrap",
                          position: "relative",
                          margin: "0 auto",
                          justifyContent: "center",
                          maxHeight: "100vh",
                        }}
                      >
                        <img
                          className="hoverer"
                          style={{
                            height: "90vh",
                            width: "20vw",
                            marginLeft: "10px",
                            marginRight: "10px",
                          }}
                          src="https://firebasestorage.googleapis.com/v0/b/jfalconmusik.appspot.com/o/project-images%2Ftextsim%2FScreenshot_20211124-171339.jpg?alt=media&token=27f12db3-c3bc-4cf5-be8e-ecd82533d736"
                        />
                        <img
                          className="hoverer"
                          style={{
                            height: "90vh",
                            width: "20vw",
                            marginLeft: "10px",
                            marginRight: "10px",
                          }}
                          src="https://firebasestorage.googleapis.com/v0/b/jfalconmusik.appspot.com/o/project-images%2Ftextsim%2FScreenshot_20211124-171409.jpg?alt=media&token=be3c8874-44d2-4f22-9030-8deb837107b8"
                        />
                        <img
                          className="hoverer"
                          style={{
                            height: "90vh",
                            width: "20vw",
                            marginLeft: "10px",
                            marginRight: "10px",
                          }}
                          src="https://firebasestorage.googleapis.com/v0/b/jfalconmusik.appspot.com/o/project-images%2Ftextsim%2FScreenshot_20211124-171416.jpg?alt=media&token=462aceae-217e-4f62-b46e-e446582074f8"
                        />
                      </div>
                      <a
                        href="#"
                        className="lead hoverer"
                        style={{
                          position: "relative",
                          margin: "0 auto",
                          marginTop: "20px",
                          marginBottom: "100px",
                          display: "flex",
                          justifyContent: "center",
                          color: "white",
                          fontSize: "x-large",
                        }}
                      >
                        <p>TextSim</p>
                      </a>
                      <p
                        style={{
                          maxWidth: "70vw",
                          margin: "0 auto",
                          marginTop: "20px",
                          marginBottom: "20px",
                        }}
                      >
                        TextSim is an Android App written completely in Java. It
                        reads through your text conversations and uses Google's
                        Tensorflow AI tools to determine the relative toxicity
                        of each of your messages. Is your friend not holding
                        space for you? Are you the one gaslighting? Find out
                        now!
                        <br></br>
                        For Private Use Only
                      </p>
                      <br></br>
                    </div>
                  </Carousel>
                </>
              </AccordionItemPanel>
            </AccordionItem>
          </Accordion> */}
        </div>
      </div>

      {/* <div className="row">
        <aside className="eigth columns footer-widgets">
          <div className="widget"></div>
        </aside>
      </div> */}
    </section>
  );
}
