import "./Styles/feature-section.css";
import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import "splitting/dist/splitting.css";
import "splitting/dist/splitting-cells.css";
import Splitting from "splitting";

Splitting();

// Interface para as props do componente Card
interface CardProps {
  title: string;
  description: string;
  animationUrl: string;
  borderColor: string;
}

// Componente Card usando <lottie-player>
const Card: React.FC<CardProps> = ({
  title,
  description,
  animationUrl,
  borderColor,
}) => {
  return (
    <div
      className={`card fixed-size bg-white shadow-xl rounded-md p-8 relative overflow-hidden m-4 ${borderColor} border-solid border-t-4`}
    >
      <h2 className="m-0 font-bold text-2xl ">{title}</h2>
      <p className="text-gray-500 mt-4 mr-0 mb-10">{description}</p>
      <DotLottieReact
        src={animationUrl}
        style={{ width: "100px", height: "100px" }}
        loop
        autoplay
      ></DotLottieReact>
    </div>
  );
};

export default function FeatureSection() {
  const animations = {
    supervisor:
      "https://lottie.host/9ef8d736-8244-44e7-a25a-bd3d93ef58cd/X9ysVXDfwD.lottie",
    teamBuilder:
      "https://lottie.host/9ef8d736-8244-44e7-a25a-bd3d93ef58cd/X9ysVXDfwD.lottie",
    calculator:
      "https://lottie.host/9ef8d736-8244-44e7-a25a-bd3d93ef58cd/X9ysVXDfwD.lottie",
    karma:
      "https://lottie.host/9ef8d736-8244-44e7-a25a-bd3d93ef58cd/X9ysVXDfwD.lottie",
  };

  return (
    <section className="feature-section">
      <header>
        <div className="without" data-splitting>
          Nós somos sua melhor escolha
        </div>

        <div className="" data-splitting="words"></div>
        <div className="" data-splitting="chars"></div>
        <div className="" data-splitting="items"></div>
        <div className="" data-splitting="lines"></div>
      </header>
      <div className="flex justify-center my-0 mx-auto max-w-6xl flex-nowrap">
        <Card
          title="Up to Date"
          description="Up to date com as últimas tendências da América do Norte e Europa."
          animationUrl={animations.supervisor}
          borderColor="border-blue-300"
        />
        <Card
          title="Experiência"
          description="Experiência na criação de conteúdos."
          animationUrl={animations.teamBuilder}
          borderColor="border-red-600"
        />
        <Card
          title="Criação de Conteúdo"
          description="Criação de Conteúdo com data points on key high performance."
          animationUrl={animations.calculator}
          borderColor="border-blue-700"
        />
        <Card
          title="Criativo Nativo"
          description="Criativo nativo para a sua marca enquanto escala."
          animationUrl={animations.karma}
          borderColor="border-orange-500"
        />
      </div>
    </section>
  );
}
