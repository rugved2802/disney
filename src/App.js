import React, { useRef , useEffect, useState } from 'react';
import './App.css';
import movies from './data.js';
import LOGO from "./images/logo.png";
import A from "./images/slider 1.PNG";
import B from "./images/disney.PNG";
import C from "./images/pixar.PNG";
import D from "./images/marvel.PNG";
import E from "./images/star-wars.PNG";
import F from "./images/geographic.PNG";
import G from "./images/poster 1.png";
import H from "./images/poster 2.png";
import I from "./images/poster 3.png";
import J from "./images/poster 4.png";
import K from "./images/poster 5.png";
import L from "./images/poster 6.png";
import M from "./images/poster 7.png";
import N from "./images/poster 8.png";
import O from "./images/poster 9.png";
import P from "./images/poster 10.png";
import Q from "./images/poster 11.png";
import R from "./images/poster 12.png";
import S from "./images/add.png";
import T from "./images/pre.png";
import U from "./images/nxt.png";
import V from "./images/play.png";

import AA from "./videos/disney.mp4";
import BB from "./videos/pixar.mp4";
import CC from "./videos/marvel.mp4";
import DD from "./videos/geographic.mp4";
import EE from "./videos/star-war.mp4";


function App() {
  const [slideIndex, setSlideIndex] = useState(0);
  const carouselRef = useRef(null);
  let intervalId;

  useEffect(() => {
    const carousel = carouselRef.current;

    if (!carousel) {
      console.error("Carousel element not found");
      return;
    }

  let sliders = [];

  const createSlide = () => {
    let slideIndex = 0;

      if(slideIndex >= movies.length) {
       slideIndex = 1;
  }

    // creating DOM element
    let slide = document.createElement('div');
    let imgElement = document.createElement('img');
    let content = document.createElement('div');
    let h1 = document.createElement('h1');
    let p = document.createElement('p');

    // attaching all element
    imgElement.appendChild(document.createTextNode(''));
    h1.appendChild(document.createTextNode(movies[slideIndex].name));
    p.appendChild(document.createTextNode(movies[slideIndex].des));
    content.appendChild(h1);
    content.appendChild(p);
    slide.appendChild(content);
    slide.appendChild(imgElement);
    carousel.appendChild(slide);

    // setting up image
    imgElement.src = movies[slideIndex].image;
    slideIndex++;

    // setting elements classname
    slide.className = 'slider';
    content.className = 'slide-content';
    h1.className = 'movie-title';
    p.className = 'movie-des';

    sliders.push(slide);

    // adding sliding effect
    if(sliders.length) {
        sliders[0].style.marginLeft = `calc(-${100 * (sliders.length - 2)}% - ${30 * (sliders.length - 2)}px)`;
    }
}

    for(let i = 0; i < 3; i++) {
        createSlide();
    }

    setInterval(() => {
        createSlide();
    }, 3000);

    return () => clearInterval(intervalId);
     }, [slideIndex]);


// video cards

const videoCards = document.querySelectorAll('.video-card');

videoCards.forEach(item => {
    item.addEventListener('mouseover', () => {
        let video = item.children[1];
        console.log(video);
        video.play();
    })
    item.addEventListener('mouseleave', () => {
        let video = item.children[1];
        console.log(video);
        video.pause();
    })
})

// cards sliders

let cardContainers = document.querySelectorAll('.card-container');
let preBtns = document.querySelectorAll('.pre-btn');
let nxtBtns = document.querySelectorAll('.nxt-btn');

cardContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtns[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth - 200;
    })

    preBtns[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth + 200;
    })
})






  return (
    <div className="App">
    <body>
    <nav className="navbar">
        <img src={LOGO} className="brand-logo" alt="" />
        <ul className="nav-links">
            <li className="nav-items"><a href="#">TV</a></li>
            <li className="nav-items"><a href="#">movies</a></li>
            <li className="nav-items"><a href="#">sports</a></li>
            <li className="nav-items"><a href="#">Premium</a></li>
        </ul>

        <div className="right-container">
            <input type="text" className="search-box" placeholder="search" />
            <button className="sub-btn">subscribe</button>
            <a href="#" className="login-link">Login</a>
        </div>
    </nav>

    <div className="carousel-container">
        <div ref={carouselRef} className="carousel">
            <div className="slider">
                <div className="slide-content">
                    <h1 className="movie-title">loki</h1>
                    <p className="movie-des">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus soluta, quasi in dignissimos saepe, alias nobis magnam vitae sunt voluptas eum necessitatibus delectus dicta qui rem debitis laboriosam.</p>
                </div>
                <img src={A} alt="" />
            </div>
        </div>
    </div>

    <div className="video-card-container">
        <div className="video-card">
            <img src={B} className="video-card-image" alt="" />
            <video src={AA} mute loop className="card-video"></video>
        </div>

        <div className="video-card">
            <img src={C} className="video-card-image" alt="" />
            <video src={BB} mute loop className="card-video"></video>
        </div>

        <div className="video-card">
            <img src={D} className="video-card-image" alt="" />
            <video src={CC} mute loop className="card-video"></video>
        </div>

        <div className="video-card">
            <img src={E} className="video-card-image" alt="" />
            <video src={EE} mute loop className="card-video"></video>
        </div>

        <div className="video-card">
            <img src={F} className="video-card-image" alt="" />
            <video src={DD} mute loop className="card-video"></video>
        </div>
    </div>

    <h1 className="title">recommended for you</h1>
    <div className="movies-list">
        <button className="pre-btn"><img src={T} alt="" /></button>
        <button className="nxt-btn"><img src={U} alt="" /></button>
        <div className="card-container">

            <div className="card">
                <img src={G} alt="" className="card-img" />
                <div className="card-body">
                    <h2 className="name">movie name</h2>
                    <h6 className="des">Lorem ipsum dolor sit amet consectetur.</h6>
                    <button className="watchlist-btn">add to watchlist</button>
                </div>
            </div>

            <div className="card">
                <img src={H} alt="" className="card-img" />
                <div className="card-body">
                    <h2 className="name">movie name</h2>
                    <h6 className="des">Lorem ipsum dolor sit amet consectetur.</h6>
                    <button className="watchlist-btn">add to watchlist</button>
                </div>
            </div>

            <div className="card">
                <img src={I} alt="" className="card-img" />
                <div className="card-body">
                    <h2 className="name">movie name</h2>
                    <h6 className="des">Lorem ipsum dolor sit amet consectetur.</h6>
                    <button className="watchlist-btn">add to watchlist</button>
                </div>
            </div>

            <div className="card">
                <img src={J} alt="" className="card-img" />
                <div className="card-body">
                    <h2 className="name">movie name</h2>
                    <h6 className="des">Lorem ipsum dolor sit amet consectetur.</h6>
                    <button className="watchlist-btn">add to watchlist</button>
                </div>
            </div>

            <div className="card">
                <img src={K} alt="" className="card-img" />
                <div className="card-body">
                    <h2 className="name">movie name</h2>
                    <h6 className="des">Lorem ipsum dolor sit amet consectetur.</h6>
                    <button className="watchlist-btn">add to watchlist</button>
                </div>
            </div>

            <div className="card">
                <img src={L} alt="" className="card-img" />
                <div className="card-body">
                    <h2 className="name">movie name</h2>
                    <h6 className="des">Lorem ipsum dolor sit amet consectetur.</h6>
                    <button className="watchlist-btn">add to watchlist</button>
                </div>
            </div>

            <div className="card">
                <img src={M} alt="" className="card-img" />
                <div className="card-body">
                    <h2 className="name">movie name</h2>
                    <h6 className="des">Lorem ipsum dolor sit amet consectetur.</h6>
                    <button className="watchlist-btn">add to watchlist</button>
                </div>
            </div>

        </div>
    </div>

 {/* popular shows */}

    <h1 className="title">Popular Shows</h1>
    <div className="movies-list">
        <button className="pre-btn"><img src={T} alt="" /></button>
        <button className="nxt-btn"><img src={U} alt="" /></button>
        <div className="card-container">

            <div className="card">
                <img src={Q} alt="" className="card-img" />
                <div className="card-body">
                    <h2 className="name">movie name</h2>
                    <h6 className="des">Lorem ipsum dolor sit amet consectetur.</h6>
                    <button className="watchlist-btn">add to watchlist</button>
                </div>
            </div>

            <div className="card">
                <img src={O} alt="" className="card-img" />
                <div className="card-body">
                    <h2 className="name">movie name</h2>
                    <h6 className="des">Lorem ipsum dolor sit amet consectetur.</h6>
                    <button className="watchlist-btn">add to watchlist</button>
                </div>
            </div>

            <div className="card">
                <img src={N} alt="" className="card-img" />
                <div className="card-body">
                    <h2 className="name">movie name</h2>
                    <h6 className="des">Lorem ipsum dolor sit amet consectetur.</h6>
                    <button className="watchlist-btn">add to watchlist</button>
                </div>
            </div>

            <div className="card">
                <img src={M} alt="" className="card-img" />
                <div className="card-body">
                    <h2 className="name">movie name</h2>
                    <h6 className="des">Lorem ipsum dolor sit amet consectetur.</h6>
                    <button className="watchlist-btn">add to watchlist</button>
                </div>
            </div>

            <div className="card">
                <img src={L} alt="" className="card-img" />
                <div className="card-body">
                    <h2 className="name">movie name</h2>
                    <h6 className="des">Lorem ipsum dolor sit amet consectetur.</h6>
                    <button className="watchlist-btn">add to watchlist</button>
                </div>
            </div>

            <div className="card">
                <img src={L} alt="" className="card-img" />
                <div className="card-body">
                    <h2 className="name">movie name</h2>
                    <h6 className="des">Lorem ipsum dolor sit amet consectetur.</h6>
                    <button className="watchlist-btn">add to watchlist</button>
                </div>
            </div>

            <div className="card">
                <img src={K} alt="" className="card-img" />
                <div className="card-body">
                    <h2 className="name">movie name</h2>
                    <h6 className="des">Lorem ipsum dolor sit amet consectetur.</h6>
                    <button className="watchlist-btn">add to watchlist</button>
                </div>
            </div>

        </div>
    </div>

    {/* <!-- New Releases --> */}
    <h1 className="title">New Releases</h1>
    <div className="movies-list">
        <button className="pre-btn"><img src={T} alt="" /></button>
        <button className="nxt-btn"><img src={U} alt="" /></button>
        <div className="card-container">

            <div className="card">
                <img src={R} alt="" className="card-img" />
                <div className="card-body">
                    <h2 className="name">movie name</h2>
                    <h6 className="des">Lorem ipsum dolor sit amet consectetur.</h6>
                    <button className="watchlist-btn">add to watchlist</button>
                </div>
            </div>

            <div className="card">
                <img src={L} alt="" className="card-img" />
                <div className="card-body">
                    <h2 className="name">movie name</h2>
                    <h6 className="des">Lorem ipsum dolor sit amet consectetur.</h6>
                    <button className="watchlist-btn">add to watchlist</button>
                </div>
            </div>

            <div className="card">
                <img src={H} alt="" className="card-img" />
                <div className="card-body">
                    <h2 className="name">movie name</h2>
                    <h6 className="des">Lorem ipsum dolor sit amet consectetur.</h6>
                    <button className="watchlist-btn">add to watchlist</button>
                </div>
            </div>

            <div className="card">
                <img src={P} alt="" className="card-img" />
                <div className="card-body">
                    <h2 className="name">movie name</h2>
                    <h6 className="des">Lorem ipsum dolor sit amet consectetur.</h6>
                    <button className="watchlist-btn">add to watchlist</button>
                </div>
            </div>

            <div className="card">
                <img src={J} alt="" className="card-img" />
                <div className="card-body">
                    <h2 className="name">movie name</h2>
                    <h6 className="des">Lorem ipsum dolor sit amet consectetur.</h6>
                    <button className="watchlist-btn">add to watchlist</button>
                </div>
            </div>

            <div className="card">
                <img src={N} alt="" className="card-img" />
                <div className="card-body">
                    <h2 className="name">movie name</h2>
                    <h6 className="des">Lorem ipsum dolor sit amet consectetur.</h6>
                    <button className="watchlist-btn">add to watchlist</button>
                </div>
            </div>

            <div className="card">
                <img src={J} alt="" className="card-img" />
                <div className="card-body">
                    <h2 className="name">movie name</h2>
                    <h6 className="des">Lorem ipsum dolor sit amet consectetur.</h6>
                    <button className="watchlist-btn">add to watchlist</button>
                </div>
            </div>

        </div>
    </div>
    </body>
    </div>
  );
}

export default App;
