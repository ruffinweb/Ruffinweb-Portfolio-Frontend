import React, { forwardRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const GsapReveal = forwardRef(
  ({ children, start = "top 80%", end = "bottom 20%" }, ref) => {
    useEffect(() => {
      gsap.fromTo(
        ref.current,
        {
          opacity: 0,
          y: 100,
        },
        {
          opacity: 1,
          delay: 0.5,
          y: 0,
          duration: 1.5,
          scrollTrigger: {
            trigger: ref.current,
            start,
            end,
            toggleActions: "play none none reverse",
          },
        },
      );
    }, [ref, start, end]);

    return <div ref={ref}>{children}</div>;
  },
);

export default GsapReveal;
