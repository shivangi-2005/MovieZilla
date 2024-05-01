import React from "react";
import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaLinkedin,
} from "react-icons/fa";

import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./style.scss";

const Footer = () => {
    return (
        <footer className="footer">
            <ContentWrapper>
                <ul className="menuItems">
                    <li className="menuItem">Terms Of Use</li>
                    <li className="menuItem">Privacy-Policy</li>
                    <li className="menuItem">About</li>
                    <li className="menuItem">Blog</li>
                    <li className="menuItem">FAQ</li>
                </ul>
                <div className="infoText">
                    MovieZilla is a platform in which users can find all information about Movies
                    and TV Shows such as their Release Date, Casting Actors, Reviews, Ratings
                    and many more things. Here users can also Search for Movies as well as TV Shows
                    and can gain Information about it. All the Data is coming from IMDB API, which
                    means that all the data is up-to-date and true.
                    <br />
                    <br />
                    <span style={{color:"white", fontWeight: "bold"}}>© 2022 MovieZilla. All rights reserved.</span>
                    <br />
                    <br />
                    <span style={{color:"white", fontWeight: "bold"}}>Developed by: <a style={{color:"white", textDecoration: "none", fontWeight: "bold"}} href="https://github.com/ashraydeep96" target="_blank" rel="noreferrer">Ashray Deep Bajpai</a></span>
                    <br />
                    <span style={{color:"white", fontWeight: "bold"}}>Contact: <a style={{color:"white", textDecoration: "none", fontWeight: "bold"}} href="mailto:ashraydeepbajpai77@gmail.com">ashraydeepbajpai77@gmail.com</a></span>
                    <br />
                </div>
                <div className="socialIcons">
                    <span className="icon">
                        <FaFacebookF />
                    </span>
                    <span className="icon">
                        <FaInstagram />
                    </span>
                    <span className="icon">
                        <FaTwitter />
                    </span>
                    <span className="icon">
                        <FaLinkedin />
                    </span>
                </div>
            </ContentWrapper>
        </footer>
    );
};

export default Footer;