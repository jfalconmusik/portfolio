import React, { useState, useEffect } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
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

export default function Projects() {
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
    <section id="projects">
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
        Projects
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
          // className="ten columns"
        >
          <Accordion>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>
                  Jiva's Originals - Clothing Store
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <div>
                  <div>
                    <AliceCarousel
                      infinite
                      keyboardNavigation={true}
                      autoPlayInterval={5000}
                      autoPlay={true}
                      autoPlayStrategy="default"
                      disableButtonsControls
                      buttonsDisabled={false}
                      slideToIndex={currentIndex}
                      id="aliceCarousel"
                      mouseTracking
                    >
                      <img src="https://firebasestorage.googleapis.com/v0/b/jfalconmusik.appspot.com/o/project-images%2Fjiva-landing.jpg?alt=media&token=d6cba771-0dfb-4c41-b7e9-672365b93d58" />
                      <img src="https://firebasestorage.googleapis.com/v0/b/jfalconmusik.appspot.com/o/project-images%2Fjiva-landing-2.jpg?alt=media&token=af81e8d7-f9ff-4a7d-bbc5-230b5f8f0af1" />
                      <img src="https://firebasestorage.googleapis.com/v0/b/jfalconmusik.appspot.com/o/project-images%2Fjiva-landing-2.jpg?alt=media&token=af81e8d7-f9ff-4a7d-bbc5-230b5f8f0af1" />
                      <img src="https://firebasestorage.googleapis.com/v0/b/jfalconmusik.appspot.com/o/project-images%2Fjiva-shop.png?alt=media&token=8aad2ab3-35c2-40f4-b1a3-78b45ec6b551" />
                      <img src="https://firebasestorage.googleapis.com/v0/b/jfalconmusik.appspot.com/o/project-images%2Fjiva-product.jpg?alt=media&token=123ed0dd-8c69-4cc7-b597-fac97c345d3d" />
                    </AliceCarousel>
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
                      <p>Jiva's Originals</p>
                    </a>
                  </div>
                  <p>
                    Online storefront for an antique and exotic clothing store.
                    Jiva's Originals is known for their presence at Renaissance
                    Festivals, and now for their online presence as well!
                  </p>
                </div>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>
                  JK Collection - Private Chef Booking
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <div>
                  <div>
                    <AliceCarousel
                      infinite
                      keyboardNavigation={true}
                      autoPlayInterval={5000}
                      autoPlay={true}
                      autoPlayStrategy="default"
                      disableButtonsControls
                      buttonsDisabled={false}
                      slideToIndex={currentIndex}
                      id="aliceCarousel2"
                      mouseTracking
                    >
                      <img src="https://firebasestorage.googleapis.com/v0/b/jfalconmusik.appspot.com/o/project-images%2Fjk-collection-landing.jpg?alt=media&token=4cb8ae6d-1404-4fce-8bb4-673b65d3ac60" />
                      <img src="https://firebasestorage.googleapis.com/v0/b/jfalconmusik.appspot.com/o/project-images%2Fjk-collection-payment.jpg?alt=media&token=ec645240-6dcd-4856-b69f-22a4b1bdd000" />
                      <img src="https://firebasestorage.googleapis.com/v0/b/jfalconmusik.appspot.com/o/project-images%2Fjk-collection-signup.jpg?alt=media&token=c2a7cf6d-fa85-4da7-a7f7-3172110d78f8" />
                      <img src="https://firebasestorage.googleapis.com/v0/b/jfalconmusik.appspot.com/o/project-images%2Fjk-collection-appointments.jpg?alt=media&token=20e6505d-91ea-44ee-bfcf-82420bd44cc8" />
                    </AliceCarousel>
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
                  </div>
                  <p>
                    JK Collection is an NYC-based company with a vast network of
                    private chefs and other domestic services. JK Collection is
                    perfect for special events and parties when short-term
                    booking is a must.
                    <br></br>
                    Sign up is smooth for both clients and chefs - users can
                    easily manage their bookings - make the perfect plans for
                    your event with the press of a button!
                  </p>
                </div>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>
                  Binary Tree Visualizer - Android Data Visualizer
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
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
                  <p>
                    A simple educational tool for the data structure of Binary
                    Trees. Actively updates all leaves and displays results of
                    traversals. Impress your friends with your knowledge of
                    Binary Trees!
                  </p>
                </div>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>
                  Hack My Password - Bulk Password Decryption
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
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
                  <p>
                    Intended for cybersecurity professionals or personal use
                    only. This app attempts to decrypt the password hash(es)
                    entered by the user, either entered manually or as a .txt
                    file. The user can choose which hash functions to run
                    decryption for and has options for salts. All batches of
                    decryption attempts are stored to the database and viewable
                    later. Think Hashcat, but for mobile!
                  </p>
                </div>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>
                  TextSim - Android AI SMS Message Toxicity Identifier!
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      flexWrap: "wrap",
                    }}
                  >
                    <img src="https://firebasestorage.googleapis.com/v0/b/jfalconmusik.appspot.com/o/project-images%2Ftextsim%2FScreenshot_20211124-171339.jpg?alt=media&token=27f12db3-c3bc-4cf5-be8e-ecd82533d736" />
                    <img src="https://firebasestorage.googleapis.com/v0/b/jfalconmusik.appspot.com/o/project-images%2Ftextsim%2FScreenshot_20211124-171409.jpg?alt=media&token=be3c8874-44d2-4f22-9030-8deb837107b8" />
                    <img src="https://firebasestorage.googleapis.com/v0/b/jfalconmusik.appspot.com/o/project-images%2Ftextsim%2FScreenshot_20211124-171416.jpg?alt=media&token=462aceae-217e-4f62-b46e-e446582074f8" />
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
                  <p>
                    TextSim is an Android App written completely in Java. It
                    reads through your text conversations and uses Google's
                    Tensorflow AI tools to determine the relative toxicity of
                    each of your messages. Is your friend not holding space for
                    you? Are you the one gaslighting? Find out now!
                    <br></br>
                    For Private Use Only
                  </p>
                </div>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>
                  Injectr - Simple Interactive Web Crawler
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      flexWrap: "wrap",
                    }}
                  >
                    <img src="https://firebasestorage.googleapis.com/v0/b/jfalconmusik.appspot.com/o/project-images%2Finjectr.png?alt=media&token=fe7e5fd1-881e-4f07-a5a5-d791a6eda497" />
                    <img src="https://firebasestorage.googleapis.com/v0/b/jfalconmusik.appspot.com/o/project-images%2Finjectr2.png?alt=media&token=f72d5a88-e489-4136-b848-519d152baa0f" />
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
                    <p>Injectr</p>
                  </a>
                  <p>
                    For Private Use Only - A web crawler capable of making GET
                    requests and saving any HTML that comes back. The user can
                    see any previous requests made under their history.
                    <br></br>This app is a useful tool for anyone scraping web
                    pages, as it used Puppeteer under the hood. Perfect for
                    testing purposes. Not available on Google Play, as it can
                    potentially be used to store plaintext password hashes,
                    which could then be used with Hack My Password.
                  </p>
                </div>
              </AccordionItemPanel>
            </AccordionItem>
          </Accordion>
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
