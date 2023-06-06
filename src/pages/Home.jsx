import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="dhiwise-navigation">
      <h1>Homepage</h1>
      <p className="headline">
        This project was generated By{" "}
        <a href="https://www.dhiwise.com">Dhiwise</a>. Quickly use below links
        to navigate through all pages.
      </p>
      <ul>
        <li>
          <Link to="/landing">Landing</Link>
        </li>
        <li>
          <Link to="/faqs">FAQs</Link>
        </li>
        <li>
          <Link to="/contactus">Contactus</Link>
        </li>
        <li>
          <Link to="/merchantshifi">Merchantshifi</Link>
        </li>
        <li>
          <Link to="/customers">Customers</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </div>
  );
};
export default Home;
