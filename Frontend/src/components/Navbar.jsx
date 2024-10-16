import React from 'react'
import jobopportunities from "../../public/jobopportunities.png";

const Navbar = () => {
    const navItems = (
        <>
            <li className='hover:bg-violet-300 rounded-lg'>
                <a href='/'>Home</a>
            </li>
            <li className='hover:bg-violet-300 rounded-lg'>
                <a href='/LatestJobs'>Latest Jobs</a>
            </li>
            <li className='hover:bg-violet-300 rounded-lg'>
                <a href='/AboutPage'>About</a>
            </li>
            <li className='hover:bg-violet-300 rounded-lg'>
                <a href='/ContactPage'>Contact</a>
            </li>
        </>
    )
  return (
    <>
        <div className="max-w-screen-2xl container mx-auto fixed top-0 left-0 right-0 z-50 shadow-md">
        <div className="navbar bg-violet-100 px-7">
        <div className='navbar-start font-bold text-4xl cursor-pointer'>
            <a href='/'><h1 className="text-violet-500 flex">JobSearch<img src={jobopportunities} className="w-9 h-9 mt-1 ml-1" /></h1></a>
        </div>
        <div className='navbar-center'>
            <ul className="menu menu-horizontal font-semibold text-2xl">{navItems}</ul>
        </div>
        <div className="navbar-end">
        <a href='/Login' className=" bg-violet-200 text-black rounded-lg hover:bg-violet-300 cursor-pointer duration-200 px-4 py-2 font-semibold text-2xl border-violet-400 border-2">Login</a>
        </div>
        </div>
        </div>
    </>
  )
}

export default Navbar
