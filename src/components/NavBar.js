import React from "react";
import { Navbar, NavbarLink, NavbarDropDown } from "../style/Navbar.style";
import { IconContext } from "react-icons";
import { RiArrowDropDownLine } from "react-icons/ri";
function NavBar() {
  return (
    <Navbar>
      <NavbarLink to="/home">Home</NavbarLink>
      <NavbarLink className="dropdown-link" to="/portfolio">
        Portfolio
        <IconContext.Provider
          value={{ size: "1.4em", style: { verticalAlign: "middle" } }}
        >
          <RiArrowDropDownLine />
        </IconContext.Provider>
        <NavbarDropDown className="dropdown-list">
          <ul>
            <li>
              <a href="#">Item 1</a>
            </li>
            <li className="sub-dropdown-link">
              <a href="#">
                <div className="icon">
                  <p>Item 2</p>
                  <p>&rarr;</p>
                </div>
                <NavbarDropDown className="sub-dropdown-list">
                  <ul>
                    <li>
                      <a href="#">Item 1</a>
                    </li>
                    <li>
                      <a href="#">Item 2</a>
                    </li>
                  </ul>
                </NavbarDropDown>
              </a>
            </li>
            <li>
              <a href="#">Item 3</a>
            </li>
            <li>
              <a href="#">Item 4</a>
            </li>
          </ul>
        </NavbarDropDown>
      </NavbarLink>
      <NavbarLink className="dropdown-link" to="/service">
        Service
        <IconContext.Provider
          value={{ size: "1.4em", style: { verticalAlign: "middle" } }}
        >
          <RiArrowDropDownLine />
        </IconContext.Provider>
        <NavbarDropDown className="dropdown-list">
          <ul>
            <li>
              <a href="#">Item 1</a>
            </li>
            <li>
              <a href="#">Item 2</a>
            </li>
            <li className="sub-dropdown-link">
              <a href="#">
                <div className="icon">
                  <p>Item 3</p>
                  <p>&rarr;</p>
                </div>
                <NavbarDropDown className="sub-dropdown-list">
                  <ul>
                    <li>
                      <a href="#">Item 1</a>
                    </li>
                    <li>
                      <a href="#">Item 2</a>
                    </li>
                  </ul>
                </NavbarDropDown>
              </a>
            </li>
          </ul>
        </NavbarDropDown>
      </NavbarLink>
      <NavbarLink to="/about">About</NavbarLink>
      <NavbarLink to="/contact">Contact</NavbarLink>
    </Navbar>
  );
}

export default NavBar;
