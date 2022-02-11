import React from "react";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
const NotFound = () => {
  return (
    <div className="hero">
      <div className="text-center hero-content">
        <div className="max-w-lg">
          <h1 className="text-8xl font-bold-mb-8">Oops!</h1>
          <p className="text-5l mb-8 mt-4">Page not found</p>
          <Link className="btn btn-primary btn-lg" to={"/"}>
            {" "}
            <FaHome className="mr-2" />
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
