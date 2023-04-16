import React from "react";
import styled from "./Navbar.module.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <nav className={styled.navbar}>
        <ul className={styled.navlink}>
          <li>
            <Link className={styled.link} to="/home">
              HOME
            </Link>
          </li>
          <li>
            <Link className={styled.link} to="/create">
              CREATE
            </Link>
          </li>
          <li>
            <Link className={styled.link} to="/edit">
              EDIT
            </Link>
          </li>
          <li>
            <Link className={styled.link} to="/delete">
              DELETE
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};
export default Navbar;
