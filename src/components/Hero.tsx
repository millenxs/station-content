import React, { useEffect, useRef } from "react";
import "./Styles/Hero.css";
import AnimatedText from "./AnimatedText";

const Hero: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (videoRef.current) {
        const offset = window.scrollY * 0.3;
        videoRef.current.style.transform = `translateY(${offset}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="hero-section">
      <div className="content-container text-white">
          <div className="container mx-auto px-4 leading-normal">
            <div className="App">
              <AnimatedText />
            </div>
          </div>
      </div>

      <div className="video-container">
        <video
          ref={videoRef}
          src="/public/videos/digital_mortgage (1080p).mp4"
          autoPlay
          muted
          loop
          className="video-content"
        ></video>
      </div>
    </section>
  );
};

export default Hero;
