declare namespace JSX {
	interface IntrinsicElements {
	  "lottie-player": React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
	}
  }
  
  declare module '@lottiefiles/lottie-player' {
	interface LottiePlayerProps {
	  src: string;
	  background?: string;
	  speed?: number;
	  loop?: boolean;
	  autoplay?: boolean;
	  style?: React.CSSProperties;
	}
  
	const LottiePlayer: React.FC<LottiePlayerProps>;
	export default LottiePlayer;

  }
  
  declare module "*.lottie";