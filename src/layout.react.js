import React from "react";
import { Link } from "react-router";

const Layout = ( props ) => {
    return (
        <div>
            <h1>Basic Layout</h1>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>
            { props.children }
        </div>
    );
};

export default Layout;
