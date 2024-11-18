import React, { useEffect, useRef, useState } from "react";
import "./Styles/AnimatedText.css";

const AnimatedText: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const text = "PERFORMANCE";
    const container = containerRef.current;

    // Cria spans para cada letra com animação personalizada
    if (container) {
      container.innerHTML = "";
      text.split("").forEach((char) => {
        const span = document.createElement("span");
        span.className = "letter";
        span.innerHTML = char === " " ? "&nbsp;" : char;
        container.appendChild(span);
      });

      const letters = container.querySelectorAll<HTMLElement>(".letter");
      const totalLetters = letters.length;
      const delayIncrement = 100;

      const easeInOutQuart = (t: number) =>
        t < 0.5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t;

      const animateLetters = (forward = true) => {
        letters.forEach((letter, index) => {
          const normalizedIndex =
            Math.max(index, totalLetters - 1 - index) / (totalLetters - 1);
          const easedDelay = easeInOutQuart(normalizedIndex);
          const delay = easedDelay * (totalLetters - 1) * delayIncrement;

          setTimeout(() => {
            letter.style.setProperty("--wght", forward ? "700" : "300");
            letter.style.setProperty("--wdth", forward ? "400" : "150");
            letter.style.setProperty("--opacity", forward ? "1" : "0.55");
            letter.style.setProperty(
              "--letter-spacing",
              forward ? "0.05em" : "0em"
            );
          }, delay);
        });

        setTimeout(() => animateLetters(!forward), 4000);
      };

      animateLetters();
    }
  }, []);

  return (
    <div className="container-animated">
      <h1 className="intro-title text-white text-2xl md:text-4xl font-bold mb-4 text-start">
        Criação de conteúdo de alta
      </h1>
      <div className="animated-text" ref={containerRef}></div>
      <div className="text-typing border border-white rounded-lg text-start">
        <p className="p-4 brutalist-input smooth-type typewrite">
          VIRAL TRENDS E CONTEÚDO QUE CONVERTE PARA ESCALAR SUA MARCA
        </p>
      </div>
    </div>
  );
};

export default AnimatedText;
