import React from "react";
import "./About.css";
import aboutImg from "./img/about_sam.jpeg";
function About() {
  //  Up To Top Btn
    window.addEventListener("scroll", function(){
      const upToTop = document.querySelector("a.bottom__to__top");
       upToTop.classList.toggle("active", window.scrollY > 0)
    });
  return (
    <div className="about component__space" id="About">
      <div className="container">
        <div className="row">
          <div className="col__2">
            <img src={aboutImg} alt="" className="about__img" />
          </div>
          <div className="col__2">
            <h1 className="about__heading">About Me</h1>
            <div className="about__meta">
              <p className="about__text p__color">
                Hey Everyone, I am Saumya Gupta and i hail from Varanasi, Uttar Pradesh.
                Currently I am persuing Bachelors of Technology in 
                Computer Science and Engineering from BML Munjal University, Gurgaon, Haryana.
              </p>
              <p className="about__text p__color">
                I have been a web development intern at Coding Blocks in my 2nd year and have worked on technologies like 
                React, Expressjs, Nodejs and have successfully completed the project there while learning handson on these technologies.
                I have have been a founder and CEO for a startup DoEarn, which intends to serve as a platform for students to earn their pocket money while studying.
              </p>
              <p className="about__text p__color">
                My technical and personal skills include Java, Python, JavaScript, HTML, ReactJS, NodeJS, Concepts of OOPs in java, MySQL,Data Structures,
Experience in cloud deployment e.g. vercel, aws active participant in competitive coding contests on platforms like codeforces,
codechef, Persistent problem-solver, Inquisitive nature to drive improvements, innovative thinking, initiative-driven, communication
skills, good at content writing.
              </p>
              <div className="about__button d__flex align__items__center">
                <a href="#">
                  <button className="about btn pointer">Download Cv</button>
                </a>
                <a href="#">
                  <button className="about btn pointer">Hire Me</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* UP TO TOP BTN */}
      <div className="up__to__top__btn">
        <a href="#" className="bottom__to__top">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-chevron-up white"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
          />
        </svg>
        </a>
      </div>
    </div>
  );
}

export default About;
