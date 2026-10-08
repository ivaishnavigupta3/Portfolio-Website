import gsap from "gsap";


export function initialFX() {
  document.getElementsByTagName("main")[0].classList.add("main-active");
  gsap.to("body", {
    backgroundColor: "#0b080c",
    duration: 0.5,
    delay: 1,
  });

  // Animate landing text without SplitText
  const landingElements = document.querySelectorAll(
    ".landing-info h3, .landing-intro h2, .landing-intro h1"
  );
  
  landingElements.forEach((elem, index) => {
    gsap.fromTo(
      elem,
      { opacity: 0, y: 80, filter: "blur(5px)" },
      {
        opacity: 1,
        duration: 1.2,
        filter: "blur(0px)",
        ease: "power3.inOut",
        y: 0,
        delay: 0.3 + (index * 0.1),
      }
    );
  });

  // Animate .landing-h2-info
  const h2Info = document.querySelectorAll(".landing-h2-info");
  h2Info.forEach((elem, index) => {
    gsap.fromTo(
      elem,
      { opacity: 0, y: 80, filter: "blur(5px)" },
      {
        opacity: 1,
        duration: 1.2,
        filter: "blur(0px)",
        ease: "power3.inOut",
        y: 0,
        delay: 0.3 + (index * 0.1),
      }
    );
  });

  // Animate .landing-info-h2
  gsap.fromTo(
    ".landing-info-h2",
    { opacity: 0, y: 30 },
    {
      opacity: 1,
      duration: 1.2,
      ease: "power1.inOut",
      y: 0,
      delay: 0.8,
    }
  );

  // Animate header and icons
  gsap.fromTo(
    [".header", ".icons-section", ".nav-fade"],
    { opacity: 0 },
    {
      opacity: 1,
      duration: 1.2,
      ease: "power1.inOut",
      delay: 0.1,
    }
  );

  // Simple loop animation without SplitText
  const h2Elements = document.querySelectorAll(
    ".landing-h2-info-1, .landing-h2-1, .landing-h2-2"
  );
  
  if (h2Elements.length >= 2) {
    // Simple fade loop
    const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });
    
    h2Elements.forEach((elem, index) => {
      if (index > 0) {
        tl.fromTo(
          elem,
          { opacity: 0, y: 80 },
          {
            opacity: 1,
            duration: 1.2,
            ease: "power3.inOut",
            y: 0,
            delay: 4 + (index * 1),
          },
          0
        );
      }
    });
  }
}

// Remove or comment out the LoopText function