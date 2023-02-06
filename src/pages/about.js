import React from "react";

import Logo from "../components/Logo";
import Nav from "../components/Nav";
import Typewriter from "../components/Typewriter";

import * as styles from "../styles/about.module.scss";

const About = () => {
  return (
    <section className={styles.container}>
      <Logo />
      <Nav />
      <Typewriter />
      <div className={styles.line} />

      <div className={styles.content}>
        <h1>
          Megacities is a series of composite country portraits, stitched
          together with satellite images of the largest cities from each
          country.
        </h1>
        <p>
          Exhibition at <a href="http://circylar.com/">CIRCYLAR Gallery</a>,
          Berlin, 2020
        </p>
        <div className={styles.images}>
          <div className={styles.image}>
            <img
              src="https://thefilterman.de/exhibits/circylar2020/berlin_exhibit.jpg"
              alt="Exhibit at circylar gallery berlin 2020"
            />
          </div>
          <div className={styles.image}>
            <img
              src="https://thefilterman.de/exhibits/circylar2020/berlin_exhibit2.jpg"
              alt="Exhibit at circylar gallery berlin 2020"
            />
          </div>
          <div className={styles.image}>
            <img
              src="https://thefilterman.de/exhibits/circylar2020/berlin_exhibit3.jpg"
              alt="Exhibit at circylar gallery berlin 2020"
            />
          </div>
          <div className={styles.image}>
            <img
              src="https://thefilterman.de/exhibits/circylar2020/berlin_exhibit4.jpg"
              alt="Exhibit at circylar gallery berlin 2020"
            />
          </div>
        </div>
        <h2>
          <b>Megacities</b> presents a portrait of country though its
          topography.
          <br />
        </h2>
        <h2>
          From the vantage point of a satellite, we see the similarities of our
          cites and how we are all connected through streets, sidewalks, rivers,
          highways, and train tracks.
        </h2>
        <h2>
          But it is always the subtleties that make us unique, and by seeing our
          world connected from such a view, you can also see the differences
          within the similar.
        </h2>

        <h3>
          "The first exhibition of the Megacities was at the skateboarding
          focused, <b>Circylar gallery</b>, in Berlin. For this exhibition I
          added the Skate City image to the series, which combines satellite
          images of famous skate spots and skateparks from the US.
        </h3>
        <h3>
          Growing up as a skateboarder, the city was my playground and adding
          this element to the series, I feel gives a better insight into what
          it's all about, a celebration of the urban."
        </h3>

        <h4>
          - <a href="https://bernardbolter.com">Bernard Bolter</a>
        </h4>

        <p>For any Inquiries or Questions:</p>
        <h5>bernardbolter@gmail.com</h5>
      </div>
    </section>
  );
};

export default About;
