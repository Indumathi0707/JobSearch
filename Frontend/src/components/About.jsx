import React from "react";
import Hiringhustle from "../../public/Hiringhustle.jpg";
import PlacementDrive from "../../public/PlacementDrive.jpg";
import GeeksforGeeks from "../../public/GeeksforGeeks.jpg";
import Indeed from "../../public/Indeed.jpg";
import herKey from "../../public/herKey.jpg";
import Jobhai from "../../public/Jobhai.jpg";
import Merademy from "../../public/Merademy.jpg";
import Fresherworld from "../../public/Fresherworld.jpg";
import foundit from "../../public/foundit.png"
import Gofresher from "../../public/Gofresher.png"
import jobRinger from "../../public/jobRinger.jpeg";
import glassdoor from "../../public/glassdoor.png"
import shine from "../../public/shine.jpeg"
import PlacementIndia from "../../public/PlacementIndia.jpeg"
import naukri from "../../public/naukri.png"
import timesJobs from "../../public/timesJobs.jpeg"

const About = () => {
  return (
    <>
      <div className="px-7">
        <h1 className="text-4xl text-center mt-28 font-bold">
          About <span className="text-violet-500">Us.</span>
        </h1>
        <h1 className="text-left font-bold text-4xl mt-3">
          Discover Your <span className="text-violet-500">Dream Job</span> with
          Us.
        </h1>
        <p className="mt-3">
          At, <span className="text-violet-500 font-bold">JobSearch🛄</span> we believe that finding the right job should
          be a seamless and stress-free experience. That's why we've created a
          platform that aggregates job listings from reputable websites,
          bringing them to you in one convenient place. Our mission is to
          empower job seekers by providing them with the most current and
          relevant job updates. Explore our site to discover opportunities that
          align with your career goals, and let us help you achieve your
          professional aspirations.
        </p>
      </div>
      <div className="my-6 ml-28 -mr-18.5">
        <div className="carousel w-full grid grid-cols-4">
          <div id="item1" className="carousel-item full">
            <img src={Hiringhustle} className="w-1/2 h-1/2 border-4 border-red-500 rounded-md" />
          </div>
          <div id="item2" className="carousel-item w-full">
            <img src={PlacementDrive} className=" w-1/2 h-1/2 border-4 border-yellow-500 rounded-md" />
          </div>
          <div id="item3" className="carousel-item full">
            <img src={GeeksforGeeks} className="w-1/2 h-1/2 border-4 border-green-500 rounded-md" />
          </div>
          <div id="item4" className="carousel-item w-full">
            <img src={Indeed} className="w-1/2 h-1/2 border-4 border-blue-600 rounded-md"/>
          </div>
          <div id="item5" className="carousel-item w-full">
            <img src={herKey} className="w-1/2 h-1/2 border-4 border-rose-500 rounded-md" />
          </div>
          <div id="item6" className="carousel-item w-full">
            <img src={Jobhai} className="w-1/2 h-1/2 border-4 border-teal-400 rounded-md" />
          </div>
          <div id="item7" className="carousel-item w-full">
            <img src={naukri} className="w-1/2 h-1/2 border-4 border-blue-500 rounded-md" />
          </div>
          <div id="item8" className="carousel-item w-full">
            <img src={Fresherworld} className="w-1/2 h-1/2 border-4 border-orange-600 rounded-md" />
          </div>

          <div id="item9" className="carousel-item full">
            <img src={foundit} className="w-1/2 h-1/2 border-4 border-violet-600 rounded-md" />
          </div>
          <div id="item10" className="carousel-item w-full">
            <img src={Gofresher} className=" w-1/2 h-1/2 border-4 border-blue-300 rounded-md" />
          </div>
          <div id="item11" className="carousel-item full">
            <img src={jobRinger} className="w-1/2 h-1/2 border-4 border-sky-400 rounded-md" />
          </div>
          <div id="item12" className="carousel-item w-full">
            <img src={glassdoor} className="w-1/2 h-1/2 border-4 border-lime-500 rounded-md" />
          </div>
          <div id="item13" className="carousel-item w-full">
            <img src={shine} className="w-1/2 h-1/2 border-4 border-yellow-300 rounded-md"/>
          </div>
          <div id="item14" className="carousel-item w-full">
            <img src={PlacementIndia} className="w-1/2 h-1/2 border-4 border-red-300 rounded-md" />
          </div>
          <div id="item15" className="carousel-item w-full">
            <img src={Merademy} className="w-1/2 h-1/2 border-4 border-sky-600 rounded-md" />
          </div>
          <div id="item16" className="carousel-item w-full">
            <img src={timesJobs} className="w-1/2 h-1/2 border-4 border-slate-800 rounded-md" />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
