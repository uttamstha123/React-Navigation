import styled from "styled-components";
import { Link } from "react-router-dom";
export const Navbar = styled.nav`
  width: 100%;
  background: #1e1e1e;
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-family: "Helvetica", sans-serif;
`;

export const NavbarLink = styled(Link)`
  color: #fefefe;
  text-decoration: none;
  margin: 1em;

  &:focus {
    color: #aaa;
  }
`;


export const NavbarDropDown = styled.div`
  position: relative;

  ul {
    list-style: none;
    position: absolute;
    top: 1rem;
    background: white;
    width: 10rem;
    box-shadow: 0 2px 8px 0px rgba(0, 0, 0, 0.1);
    
    li {
      margin-bottom: 0.4rem;
      
      a {
        display: inline-block;
        padding: 0.5rem 0.8rem;
        text-decoration: none;
        color: #333;
      }
    }
  }
`;
