import { Link } from "gatsby";
import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faEllipsisV } from "@fortawesome/free-solid-svg-icons";

const Header: React.FC<{
    handleSidebar: any;
    onNavbarHeaderHover: any;
    isNavbarHeaderExpanded: boolean;
}> = ({ handleSidebar, onNavbarHeaderHover, isNavbarHeaderExpanded }) => {
    return (
        <Navbar bg="white" expand="md" fixed="top">
            <div
                className={`navbar-header dark-navbar-header ${
                    isNavbarHeaderExpanded ? "expanded" : null
                }`}
                onMouseOver={() => onNavbarHeaderHover()}
                onMouseOut={() => onNavbarHeaderHover()}
            >
                <Navbar.Brand as={Link} to="/">
                    <b className="logo-icon">
                        <img
                            src={require("../images/gatsby-icon.png")}
                            alt="brand icon"
                        />
                    </b>
                    <span className="logo-text">Gatsby Template</span>
                </Navbar.Brand>
            </div>
            <Nav className="mr-auto toggler">
                <Nav.Link as="a" onClick={() => handleSidebar()}>
                    <FontAwesomeIcon icon={faBars} />
                </Nav.Link>
            </Nav>
            <Navbar.Toggle
                as="a"
                aria-controls="navbar-toggle"
                className="border-0"
            >
                <FontAwesomeIcon icon={faEllipsisV} />
            </Navbar.Toggle>
            <Navbar.Collapse id="navbar-toggle">
                <Nav className="ml-auto ">
                    <Nav.Link as={Link} to="/">
                        Home
                    </Nav.Link>
                    <NavDropdown
                        title="Dropdown"
                        id="basic-nav-dropdown"
                        alignRight
                    >
                        <NavDropdown.Item href="#action/3.1">
                            Action
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">
                            Another action
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">
                            Something
                        </NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">
                            Separated link
                        </NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Header;
