import React, {useState, useEffect, useContext} from 'react';
import {ReactComponent as ReactLogo} from '../assets/images/abc_logo.svg';
import {ContentContext} from "../app.jsx";
import Marquee from './marquee.jsx';
import '../assets/stylesheets/navbar.css';


const NavBar = (props) => {
    const [data, setData] = useContext(ContentContext);
    const [page, setPage] = useState();

    //intializes page hook for child render
    useEffect(() => {
        setPage(data[0])
    },[data])


    return (
        <div className="navbarContainer">
            {data !== [] ?
                <div className='logoMenuContainer'>
                    <div className='logoSecContainer'>
                        <div className='logoContainer'>
                            <ReactLogo/>
                        </div>
                        <div>
                            <button className='contactBtn'>Contact Us</button>
                        </div>
                    </div>
                    <div className='menuContainer'>
                        {data.map((content) => (
                            <div key={content.title} className='menuIndividual'>
                                <button className='menuBtn' onClick={()=>setPage(content)}>{content.title}</button> 
                            </div>
                        ))}
                    </div>
                    <Marquee page={page}/>
                </div>
            :
                <div></div>
            }
        </div>
    );
}

export default NavBar;
