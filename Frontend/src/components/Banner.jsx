//import React from 'react'
import JS from "../../public/Js.jpg";

const Banner = () => {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto px-7 flex my-7">
        <div className="w-1/2 mt-28">
          <div className="space-y-3">
            <h1 className="text-4xl font-bold">
              Find Your <span className="text-violet-500">Dream Job</span>{" "}
              Today!
            </h1>
            <p>
              Looking for a job shouldn't feel like a job. With our platform,
              you can discover opportunities that match your skills, interests,
              and career goals. Start your journey with us and take the next
              step towards your dream job!
            </p>
            <h1 className="text-4xl font-bold">
              Why <span className="text-violet-500">Choose Us?</span>
            </h1>
            <h2 className="text-violet-500 text-2xl font-bold">
              Tailored Job Matches:
            </h2>
            <ul className="list-disc list-inside">
              <li>
                Our smart algorithms ensure you see the most relevant job
                listings based on your skills, experience, and preferences.
              </li>
            </ul>
            <h2 className="text-violet-500 text-2xl font-bold">
              User-Friendly Interface:
            </h2>
            <ul className="list-disc list-inside">
              <li>
                Navigate through job postings, applications, and career
                resources effortlessly with our intuitive platform.
              </li>
            </ul>
            <h2 className="text-violet-500 text-2xl font-bold">
            Real-Time Job Updates:
            </h2>
            <ul className="list-disc list-inside">
              <li>Stay ahead of the competition with instant
                updates about new job opportunities that match your
                criteria.
              </li>
            </ul>
          </div>
        </div>
        <div className="w-1/2 mt-28">
            <img src={JS} alt="Job Searh"/>
        </div>
      </div>
    </>
  );
};

export default Banner;
