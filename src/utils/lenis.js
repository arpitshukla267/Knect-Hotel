// utils/lenis.js
import Lenis from "@studio-freight/lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const initLenis = () => {
  const lenis = new Lenis({
    duration: 1.2,
    smoothWheel: true,
    smoothTouch: false,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  });

  // ✅ Integrate Lenis scroll with GSAP’s ticker
  gsap.ticker.add((time) => {
    lenis.raf(time * 1000); // GSAP uses seconds; Lenis expects ms
  });

  // ✅ Let ScrollTrigger use Lenis’ scroll position
  lenis.on("scroll", ScrollTrigger.update);

  // ✅ Make sure ScrollTrigger refreshes after everything’s ready
  ScrollTrigger.refresh();

  return lenis;
};
