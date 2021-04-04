import React, {useState, useEffect, useContext} from 'react';
import {ReactComponent as ReactLogo} from '../assets/images/abc_logo.svg';
import {ContentContext} from "../app.jsx";


const NavBar = () => {
    const [data, setData] = useContext(ContentContext);


    return (
        <div className="navbarContainer">
            <ReactLogo/>
            {data.map((content) => (
                <li key={content.title}>
                    {content.title}
                </li>
            ))
            }
        </div>
    );
}

export default NavBar;
