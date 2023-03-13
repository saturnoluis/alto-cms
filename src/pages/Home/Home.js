import React from 'react';
import HeroImage from '../../components/HeroImage';
import './Home.css';

function Home() {
    return (
        <>
            <HeroImage />
            <div className="Home">
                <div className="Home__1">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat.
                </div>
                <div className="Home__2">
                    <img src="https://picsum.photos/id/237/300/300" alt="Random pic 1" />
                    Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                    cupidatat non proident, sunt in culpa qui officia deserunt
                    mollit anim id est laborum.
                </div>
                <div className="Home__3">
                    <img src="https://picsum.photos/id/217/300/300" alt="Random pic 2" />
                    <img src="https://picsum.photos/id/227/300/300" alt="Random pic 3" />
                    <img src="https://picsum.photos/id/247/300/300" alt="Random pic 4" />
                </div>
                <div className="Home__4">
                    <iframe
                        width="480"
                        height="300"
                        src="https://www.youtube.com/embed/CEYcDSBq_UU"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="autoplay; encrypted-media; picture-in-picture; web-share"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>
        </>
    );
}

export default Home;
