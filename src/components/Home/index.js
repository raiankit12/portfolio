import React, { useEffect, useState } from "react";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
import "./index.scss";
import Logo from "./Logo";
import AnimatedLetters from "../AnimatedLetters";
import Loader from "react-loaders";
const Home = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const nameArray = ["n", "k", "i", "t", ""];
  const jobArray = [
    "F",
    "r",
    "o",
    "n",
    "t",
    " ",
    "E",
    "n",
    "d",
    " ",
    "D",
    "e",
    "v",
    "e",
    "l",
    "o",
    "p",
    "e",
    "r",
    ".",
  ];

  useEffect(() => {
    setTimeout(() => {
      return setLetterClass("text-animate-hover");
    }, 4000);
  }, []);
  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m,</span>
            <img src={logo} alt="developer" />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={22}
            />
          </h1>
          <h2>FrontEnd Developer / Javascript / ReactJS</h2>
          <Link to="/contact" className="flat-button">
            CONNECT WITH ME
          </Link>
        </div>
        <Logo />
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default Home;
