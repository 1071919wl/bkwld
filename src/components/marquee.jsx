import React,{useState, useEffect} from 'react';
import '../assets/stylesheets/marquee.css';
import Industries from '../assets/images/backgrounds/slide_one.jpg';
import Services from '../assets/images/backgrounds/slide_two.jpg'
import About from '../assets/images/backgrounds/slide_three.jpg'


const Marquee = ({page}) => {

    const[bgImg, setBgImg] = useState(Industries);

    //updates background image depending on prop
    useEffect(() => {
        if(page?.title === 'Industries'){
            setBgImg(Industries)
        }else if ( page?.title === "Services"){
            setBgImg(Services)
        }else if ( page?.title === "About Us"){
            setBgImg(About)
        }
    },[page])
    
    return (
        <div className='marqueeContainer' style={{backgroundImage: `url(${bgImg})`}} >
            <div className='headsContainer'>
                <div className='headlineContainer'>
                    <h1 className='headline'>{page?.blocks[0].headline}</h1>
                </div>
                <div className='subHeadContainer'>
                    <p className='subHead'>{page?.blocks[0].subhead}</p>
                </div>
            </div>
            <div className='ctaContainer'>
                <div>
                    <p>Nemo enim ipsam voluptatem quia voluptas.</p>
                </div>
                <div>
                    <p>LET'S TALK. --> </p>
                </div>
            </div>
        </div>
    )
}

export default Marquee;