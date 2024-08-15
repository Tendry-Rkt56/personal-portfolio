import { Layout } from "./components/Layout/Layout";
import { About } from "./components/about/About";
import { Competence } from "./components/competence/Competence";
import { Home } from "./components/home/Home";
import { NavBar } from "./components/navbar/NavBar";
import { Project } from "./components/project/project";
import { Service } from "./components/service/Service";
import { ThemeProvider } from "./context/ThemeContext";

function App () {

    return (
        <ThemeProvider>
            <Layout>
                <NavBar/>
                <Home/>
                <About/>
                <Service/>
                <Competence/>
                <Project/>
            </Layout>
        </ThemeProvider>
    )

}

export default App

// import React, { useState, useEffect, useRef } from 'react';
// import fond from './assets/images/dark-magical-forest-desktop-wallpaper.jpg'

// const Carousel = ({ slides }) => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [visibleSlides, setVisibleSlides] = useState(1);
//   const carouselRef = useRef();

//   const getVisibleSlides = () => {
//     const containerWidth = carouselRef.current.clientWidth;
//     const slideWidth = carouselRef.current.querySelector('.slide').clientWidth;
//     return Math.round(containerWidth / slideWidth);
//   };

//   const updateVisibleSlides = () => {
//     setVisibleSlides(getVisibleSlides());
//   };

//   useEffect(() => {
//     updateVisibleSlides();
//     window.addEventListener('resize', updateVisibleSlides);
//     return () => window.removeEventListener('resize', updateVisibleSlides);
//   }, []);

//   const showSlide = (index) => {
//     const width = carouselRef.current.querySelector('.slide').clientWidth;
//     carouselRef.current.style.transform = `translateX(${-index * width}px)`;
//   };

//   const nextSlide = () => {
//     const maxIndex = slides.length - visibleSlides;
//     const newIndex = Math.min(currentIndex + visibleSlides, maxIndex);
//     setCurrentIndex(newIndex);
//     showSlide(newIndex);
//   };

//   const prevSlide = () => {
//     const newIndex = Math.max(currentIndex - visibleSlides, 0);
//     setCurrentIndex(newIndex);
//     showSlide(newIndex);
//   };

//   useEffect(() => {
//     showSlide(currentIndex);
//   }, [currentIndex, visibleSlides]);

//   return (
//     <div className="carousel-container">
//       <div className="carousel" ref={carouselRef}>
//         {slides.map((slide, index) => (
//           <div key={index} className="slide">
//             {slide}
//           </div>
//         ))}
//       </div>
//       <button className="prev-btn" onClick={prevSlide} style={{ display: currentIndex === 0 ? 'none' : 'block' }}>
//         &#10094;
//       </button>
//       <button className="next-btn" onClick={nextSlide} style={{ display: currentIndex >= slides.length - visibleSlides ? 'none' : 'block' }}>
//         &#10095;
//       </button>
//     </div>
//   );
// };

// // src/App.js
// const slides = [
//   <div className="image"><img src={fond} alt="Gestion de pharmacie" /></div>,
//   <div className="image"><img src={fond} alt="Gestion d'élection" /></div>,
//   <div className="image"><img src={fond} alt="Site e-commerce" /></div>,
//   <div className="image"><img src={fond} alt="UpWork" /></div>,
//   <div className="image"><img src={fond} alt="QUIZZ en JavaScript" /></div>,
// ];

// function App() {
//   return (
//     <div className="App">
//       <Carousel slides={slides} />
//     </div>
//   );
// }

// export default App;


