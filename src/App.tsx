import React, { useEffect, useRef } from "react";
import Hero from "./components/Hero";
import Navbar from "./components/navbar";
import FeatureSection from "./components/feature-section";
import "./App.css";

export default function Home() {

  return (
    <>
    <Navbar />
    <Hero />

    {/* Feature Section */}
    <FeatureSection />

      {/* Parallax Background Section */}
    <section className="parallax-section">
        <video autoPlay muted loop className="background-video" playsInline>
          <source src="/videos/hero.mp4" type="video/mp4" />
          Seu navegador não suporta vídeos em HTML5.
        </video>

        <div className="content">
          <h2>Como funciona</h2>
          <p>Saiba mais sobre como nossa tecnologia funciona.</p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <h1>Nossos serviços podem potencializar sua equipe de mídia.</h1>
        <h2>
          As melhores métricas com conteúdo criativo para a otimização que sua
          campanha precisa.
        </h2>
      </section>

      {/* Testimonial Section */}
      <section className="testimonial">{/* Content */}</section>
     

      {/* Footer */}
    </>
  );
}
