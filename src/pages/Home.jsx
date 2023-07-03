import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      Home
      <div>
        <Link to="/about">
          <p>about</p>
        </Link>
        <Link to="/contact/loki">
        <p>contact</p>
        </Link>
        <h1>leftbar</h1>
        <div className="loki">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum amet sed non at eveniet ipsam consequatur veniam magni! Doloribus quae culpa mollitia repudiandae enim nobis dignissimos illo sit eaque explicabo?
          
        </div>
      </div>
    </div>
  );
}
