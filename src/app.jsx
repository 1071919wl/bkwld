import React, {useState, useEffect, createContext} from 'react';
import './assets/stylesheets/app.css';
import { fetchContent } from './util/content_api_util';
import NavBar from './components/navbar.jsx';
// import Marquee from './components/marquee.jsx';
import {WaveLoading} from 'react-loadingg';

export const ContentContext = createContext();


const App = () => {

    const [data, setData] = useState([]);
    const [load, setLoad] = useState(false);
    const [error, setError] = useState();

    //fetches content on mount displaying loading screen when in progress
    useEffect(() => {
        setLoad(true)
        fetchContent().then(res => {
            setLoad(false);
            setData(res);
        }).catch(err => {
            setLoad(false);
            setError('403 Not Found page')
        });
    }, [])

    return (
        <div className="App">
            <h1 className='error'>{error}</h1>
            {!load ?
                <div className='appContainer'>
                    <ContentContext.Provider value={[data, setData]}>
                        <NavBar />
                        {/* <Marquee /> */}
                    </ContentContext.Provider>
                </div>
            :
                <div>
                    <WaveLoading size='large' />
                </div>
            }
        </div>
    );
}

export default App;
