import React from "react";
import "./HeroSection.css";
import Typewriter from "react-ts-typewriter";
class Person {
  private name: string;
  private titles: string[];
  private fav: string;
  private img: string;

  //methods
  constructor(name: string, titles: string[], fav: string, img: string) {
    this.name = name;
    this.titles = titles;
    this.fav = fav;
    this.img = img;
  }

  getImg() {
    return this.img;
  }
  getFav() {
    return this.fav;
  }
  getTitles() {
    return this.titles;
  }
  getName() {
    return this.name;
  }
}

function HeroSection() {
  const person = new Person(
    "Mohab Yasser Rageh",
    [
      "Software Engineer",
      "Full stack developer",
      "Back end developer",
      "Front end developer",
    ],
    `You will suffer to be successful, or you will suffer from being a failure.  'Choose your suffering.'`,
    "/imgs/me.jpg"
  );

  

  return (
    <section className="HeroSection">
      <div>
        <h1>{person.getName()}</h1>
        <h2>
          I'm a{" "}
          <Typewriter
            delay={1000}
            loop={true}
            speed={30}
            text={person.getTitles()}
          ></Typewriter>
        </h2>
        <p>{person.getFav()}</p>
      </div>
    </section>
  );
}

export default HeroSection;
