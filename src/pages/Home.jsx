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
      </div>
    </div>
  );
}
