import React, {useState, useEffect, createContext} from 'react';
import './assets/stylesheets/app.css';
import { fetchContent } from './util/content_api_util';
import NavBar from './components/navbar.jsx';
export const ContentContext = createContext();


const App = () => {

    const [data, setData] = useState([]);
    const [load, setLoad] = useState(false);

    useEffect(() => {

        setLoad(true)
        fetchContent().then(res => {
            setLoad(false);
            setData(res);
        })
        // .catch(err => {
        //     setData(['403 Not Found page'])
        // });

    }, [])

    return (
        <div className="App">
            {console.log(data)}
            {!load ?
                <div className='appContainer'>
                    <ContentContext.Provider value={[data, setData]}>
                        <NavBar />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt ad laboriosam ipsam aliquam repellendus error atque sunt nesciunt sapiente? Ipsa magni dicta suscipit culpa! Ducimus mollitia fuga dolorem libero incidunt! Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt ad laboriosam ipsam aliquam repellendus error atque sunt nesciunt sapiente? Ipsa magni dicta suscipit culpa! Ducimus mollitia fuga dolorem libero incidunt!</p>
                    </ContentContext.Provider>
                </div>
            :
                <div>Loading...</div>
            }
        </div>
    );
}

export default App;
