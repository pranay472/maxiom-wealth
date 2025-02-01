import React from 'react';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';
import { useCallback } from 'react';

const DiamondParticlesBg = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        particles: {
          number: {
            value: 50,
            density: {
              enable: true,
              value_area: 800
            }
          },
          color: {
            value: "#ffffff"
          },
          opacity: {
            value: 0.1,
            random: true
          },
          size: {
            value: 3,
            random: true
          },
          move: {
            enable: true,
            speed: 1,
            direction: "none",
            random: true,
            straight: false,
            out_mode: "out",
            bounce: false,
          },
          links: {
            enable: true,
            distance: 150,
            color: "#ffffff",
            opacity: 0.1,
            width: 1
          },
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: {
              enable: true,
              mode: "connect"
            },
            onclick: {
              enable: true,
              mode: "push"
            },
            resize: true
          },
        },
        retina_detect: true
      }}
      className="absolute inset-0"
    />
  );
};

export default DiamondParticlesBg;
