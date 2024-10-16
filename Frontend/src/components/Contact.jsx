import React from "react"
const Contact = () => {
    return (
        <>
        <div className="px-7">
        <h1 className="text-4xl text-center mt-28 font-bold">
          Contact <span className="text-violet-500">Us.</span>
        </h1>
        <h1 className="text-left font-bold text-4xl mt-2">
          If you have any <span className="text-violet-500">queries</span>, feel free to <span className="text-violet-500">contact</span> Us. Submit your <span className="text-violet-500">queries</span> here.
        </h1>
      </div>

      {/* part2 */}

      <div
        className="-mt-20 h-[100vh] flex justify-center items-center bg-cover left-0 right-0 px-7"
        style={{ background: "url('../../public/BG-img.jpg')" }}
      >
        <div className="bg-violet-100 border-violet-600 border-2 rounded-md px-8 py-6 shadow-lg backdrop:filter backdrop-blur-sm bg-opacity-30 relative">
          <h1 className="font-bold text-violet-500 text-center text-4xl top-0 underline mb-4">
            Contact From
          </h1>
          <form action="">
            <div className="relative my-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="placeholder:text-black block w-72 py-2 px-0 bg-transparent border-b-2 border-0 border-violet-400 focus:outline-none focus:border-violet-700 peer"
              />
              {/* <label htmlFor="" className="absolute duration-300 transform -translate-y-7 text-md">Enter your email</label> */}
            </div>

            <div className="relative my-2">
              <input
                type="password"
                placeholder="Enter your contact number"
                className="placeholder:text-black block w-72 py-2 px-0 bg-transparent border-b-2 border-0 border-violet-400 focus:outline-none focus:border-violet-700 peer"
              />
              {/* <label htmlFor="" className="absolute duration-300 transform -translate-y-7 text-md">Enter your contact number</label> */}
            </div>

            <div className="relative my-2">
              <input
                type="text"
                placeholder="Enter your subject"
                className="placeholder:text-black block w-72 py-2 px-0 bg-transparent border-b-2 border-0 border-violet-400 focus:outline-none focus:border-violet-700 peer"
              />
              {/* <label htmlFor="" className="absolute duration-300 transform -translate-y-7 text-md">Enter your subject</label> */}
            </div>
            <div>

            {/* <input placeholder="Subject" /> */}
                <textarea placeholder="Enter your Queries Here." rows={4} className="w-full placeholder:text-black mt-5 border-b-2 border-0 border-violet-400 focus:outline-none focus:border-violet-700 bg-transparent"></textarea>
            </div>
            <div className="text-center mt-5 bg-violet-400 p-2 font-bold rounded-lg cursor-pointer duration-200 hover:bg-violet-500">
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
      <div className="px-7">
        <h1 className="text-4xl text-left mt-3 font-bold">
          Contact <span className="text-violet-500">Details.</span>
        </h1>
      </div>
      <div className="mt-3 px-7">
        <p>Contact us through E-mail: <span className="text-violet-500 font-semibold">jobsearch@yahoo.com</span></p>
        <p>Contact us through mobile number: <span className="text-violet-500 font-semibold">+91 1234567890</span></p>
        </div>
        </>
    )
}
export default Contact;