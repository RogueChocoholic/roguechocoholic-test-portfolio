gsap.registerPlugin(ScrollTrigger);
document.addEventListener("DOMContentLoaded", (event) => {
  window.onload = function () {
    var text = document.querySelectorAll(".subtext");
    var navHeight = document.getElementById("topNav").offsetHeight;
    var goUpBtn = document.querySelectorAll(".goUpBtn");
    var homeSection = document.querySelectorAll(".homeSection");
    var homeSection2 = document.querySelectorAll("#homeSection2");
    var navMain = document.querySelectorAll("#navNiew");
    var ourProcesses = document.querySelectorAll(".ourProcesses");
    var homeSect2StaggerText = document.querySelectorAll(".homeSecStagger");
    var scaleOnHover = document.querySelectorAll(".scaleOnHover");
    console.log(navHeight);
    
    document.getElementById("preloader").classList.toggle("d-none");
    document.getElementById("body").classList.toggle("d-none");

    gsap.fromTo(
      text,
      {
        y: -30,
        opacity: 0,
        ease: "bounce",
      },
      {
        y: 0,
        opacity: 1,
        ease: "power1.out",
        duration: 2,
        delay: 1,
        stagger: 0.5,
      }
    );
    gsap.fromTo(
      ".heroGif",
      {
        y: -30,
        opacity: 0,
        ease: "bounce",
      },
      {
        y: 0,
        opacity: 0.1,
        ease: "power1.out",
        duration: 2,
        delay: 1,
      }
    );

    gsap.fromTo(
      goUpBtn,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        ease: "power1.out",
        duration: 2,
        delay: 1,
      }
    );

    gsap.to(homeSection, {
      y: +16,
      duration: 1,
      ease: "power1.out",
    });
    gsap.to(homeSection2, {
      paddingTop: navHeight + 20,
      duration: 1,
      ease: "power1.out",
    });
    //  ENABLE THIS IF THE NAVBAR COVERS THE SECTION 1 HEADING WHEN AUTOSCROLLD !!!!!!
    gsap.from(navMain, {
      scrollTrigger: {
        trigger: ".homeSection2",
        start: "95% 95%",
        end: "-=50 ",
        // markers: true,
        toggleActions: "restart none reverse reverse",
        scrub: 1,
      },
      y: 50,
      scale: 0,
      duration: 3,
      ease: "power2.out",
    });

    gsap.from(".toTopButton", {
      scrollTrigger: {
        trigger: ".homeSection2",
        start: "99% 90%",
        end: "-=50 ",
        // markers: true,
        toggleActions: "restart none reverse reverse",
        scrub: 1,
      },
      scale: 0,
      opacity: 0,
      duration: 3,
      ease: "circ",
    });

    gsap.to(homeSect2StaggerText, {
      scrollTrigger: {
        trigger: ".homeSection2",
        start: "20 55%",
        end: "bottom top",
        // markers: true,
        toggleActions: "play none none none",
      },
      stagger: 0.1,
      opacity: 1,
      duration: 1,
      filter: "blur(0px)",
      // x:"+500"
    });

    ourProcesses.forEach((element) => {
      element.addEventListener("mouseenter", () => {
        gsap.to(element, {
          duration: 0.5,
          opacity: 1,
          zIndex: "4",
          opacity: 1,
        });
        // Animate specific topic elements within this hovered parent
        var childElements = element.querySelectorAll(".topic");
        childElements.forEach((child) => {
          gsap.to(child, {
            duration: 0.5,
            color: "#b8860b",
            opacity: 1,
          });
        });
        // Animate specific content elements within this hovered parent
        var childElements = element.querySelectorAll(".processDesc");
        childElements.forEach((child) => {
          gsap.to(child, {
            duration: 0.5,
            scale: 1.1,
          });
        });
      });

      element.addEventListener("mouseleave", () => {
        gsap.to(element, {
          // scale: 1,
          duration: 1,
          // margin: "0px",
          zIndex: "3",
        });
        // Animate specific child elements within this hovered parent
        var childElements = element.querySelectorAll(".topic"); // Adjust the class name
        childElements.forEach((child) => {
          gsap.to(child, {
            duration: 0.5,
            color: "black",
          });
        });
        // Animate specific content elements within this hovered parent
        var childElements = element.querySelectorAll(".processDesc");
        childElements.forEach((child) => {
          gsap.to(child, {
            duration: 0.5,
            scale: 1,
          });
        });
      });
    });

    // about teacher in transitions
    var aboutTrigger = ScrollTrigger.create({
      trigger: "#aboutTeacherSection",
      start: "40% center",
      end: "center bottom",
      // markers: true,
      toggleActions: "play none none none",
    });

    gsap.from("#aboutTeacherTitle", {
      scrollTrigger: aboutTrigger,
      opacity: 0,
      duration: 1,
      y: 40,
      filter: "blur(10px)",
    });

    gsap.from("#portraitImg", {
      scrollTrigger: aboutTrigger,
      opacity: 0,
      duration: 1.5,
      y: -40,
      filter: "blur(10px)",
      ease: "power2.inOut",
    });
    // gsap.from("#aboutText", {
    //   scrollTrigger: aboutTrigger,
    //   opacity: 0,
    //   duration: 1.5,
    //   y: 40,
    //   filter: "blur(10px)",
    //   ease: "power2.inOut",
    // });

    var processTrigger = ScrollTrigger.create({
      trigger: ".ourProcessSection",
      start: "100 300",
      end: "top bottom",
      // markers: true,
      toggleActions: "play none none none",
    });

    gsap.from(".ourProcessSection", {
      scrollTrigger: processTrigger,
      opacity: 0,
      duration: 1,
    });
    var specialtyTrigger = ScrollTrigger.create({
      trigger: ".fadeInSpecialties",
      start: "100 300",
      end: "top bottom",
      // markers: true,
      toggleActions: "play none none none",
    });

    gsap.from(".fadeInSpecialties", {
      scrollTrigger: specialtyTrigger,
      opacity: 0,
      duration: 1,
    });
    var resultsTrigger = ScrollTrigger.create({
      trigger: ".fadeInResults",
      start: "100 300",
      end: "top bottom",
      // markers: true,
      toggleActions: "play none none none",
    });

    gsap.from(".fadeInResults", {
      scrollTrigger: resultsTrigger,
      opacity: 0,
      duration: 1.5,
    });

    var telegramTrigger = ScrollTrigger.create({
      trigger: ".fadeInTelegram",
      start: "100 300",
      end: "top bottom",
      // markers: true,
      toggleActions: "play none none none",
    });

    gsap.from(".fadeInTelegram", {
      scrollTrigger: telegramTrigger,
      opacity: 0,
      duration: 2,
    });
    var galleryTrigger = ScrollTrigger.create({
      trigger: ".fadeInGallery",
      start: "100 300",
      end: "top bottom",
      // markers: true,
      toggleActions: "play none none none",
    });

    gsap.from(".fadeInGallery", {
      scrollTrigger: galleryTrigger,
      opacity: 0,
      duration: 2,
    });

    // scale on hover
    scaleOnHover.forEach((element) => {
      element.addEventListener("mouseenter", () => {
        gsap.to(element, {
          duration: 0.5,
          scale:1.1,
          zIndex: "4",
          
        });
      });

      element.addEventListener("mouseleave", () => {
        gsap.to(element, {
          // scale: 1,
          duration: 1,
          scale:1,
          // margin: "0px",
          zIndex: "3",
        });
      });
    });
    // scale on hover
  };

  // var box = document.querySelector(".box");
  // box.addEventListener("click", () => {
  //   gsap.to(box, {
  //     x: 500,
  //     y: 200,
  //     duration: 0.5,
  //   });
  // });
});
