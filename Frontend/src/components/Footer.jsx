import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="bottom-0 left-0 w-full footer footer-center bg-violet-100 text-base-content p-4 mt-28">
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by JobSearch
            Company.
          </p>
        </aside>
        <h1>Made with 💜 by JobSearch</h1>
      </footer>
    </div>
  );
};

export default Footer;
