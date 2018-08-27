import React from "react";
import Particles from "react-particles-js";

const HomePage = ({ history }) => {
  return (
    <div>
      <div className="masthead">
        <Particles
          params={{
            particles: {
              number: { value: 80, density: { enable: true, value_area: 800 } },
              color: { value: "#ffffff" },
              shape: {
                type: "triangle",
                stroke: { width: 2, color: "#a24ac3" },
                polygon: { nb_sides: 5 },
            
              },
              opacity: {
                value: 0.5,
                random: false,
                anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false }
              },
              size: {
                value: 4,
                random: true,
                anim: { enable: false, speed: 40, size_min: 3, sync: false }
              },
              line_linked: {
                enable: true,
                distance: 150,
                color: "#ffffff",
                opacity: 0.4,
                width: 1
              },
              move: {
                enable: true,
                speed: 6,
                direction: "none",
                random: false,
                straight: false,
                out_mode: "out",
                bounce: false,
                attract: { enable: false, rotateX: 600, rotateY: 1200 }
              }
            },
            interactivity: {
              detect_on: "canvas",
              events: {
                onhover: { enable: true, mode: "repulse" },
                onclick: { enable: true, mode: "push" },
                resize: true
              },
              modes: {
                grab: { distance: 400, line_linked: { opacity: 1 } },
                bubble: {
                  distance: 400,
                  size: 40,
                  duration: 2,
                  opacity: 8,
                  speed: 3
                },
                repulse: { distance: 100, duration: 0.4 },
                push: { particles_nb: 4 },
                remove: { particles_nb: 2 }
              }
            },
            retina_detect: true
          }}
        />
        <div className='logohome'>
        <div className="ui text container">
          <h1 className="ui inverted header">
            <img
              className="ui image massive"
              src="/assets/logo.png"
              alt="logo"
            />
            <div className="content">E-vents</div>
          </h1>
          <h2 className="ui inverted header">Its time to move...</h2>
          <div onClick={() => history.push('/events')} className="ui huge white inverted button">
            Get Started
            <i className="right arrow icon" />
          </div>
        </div>
      
      </div>
      </div>
      <div style={{ textAlign: "center" }}>
        <span>R2-DEVELOPMENT</span>
      </div>
    </div>
  );
};

export default HomePage;
