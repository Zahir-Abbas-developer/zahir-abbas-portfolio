"use client";
import React, { useContext } from "react";
import Headroom from "react-headroom";
import "./Header.scss";
import Link from "next/link";

function Header() {
  return (
    <Headroom>
      <header className={"header"}>
        <Link href="/" className="logo">
          <span className="grey-color"> &lt;</span>
          <span className="logo-name">Zahir Abbas</span>
          <span className="grey-color">/&gt;</span>
        </Link>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label
          className="menu-icon"
          htmlFor="menu-btn"
          style={{ color: "white" }}
        >
          <span className={"navicon"}></span>
        </label>
        <ul className={"menu"}>
          <li>
            <Link href="#skills">Skills</Link>
          </li>

          <li>
            <Link href="#experience">Work Experiences</Link>
          </li>

          <li>
            <Link href="#contact">Contact Me</Link>
          </li>
        </ul>
      </header>
    </Headroom>
  );
}
export default Header;
