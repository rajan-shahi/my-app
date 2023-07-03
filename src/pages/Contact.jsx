import React from "react";
import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <div>
      This is contact page
      <Link to={"/"}>
        <p>home</p>
      </Link>

      

<h1>leftbar</h1>
      <Link to={"/about"}>
        <p>about</p>
      </Link>
    </div>
  );
}
