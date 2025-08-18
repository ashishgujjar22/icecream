gsap.registerPlugin(ScrollTrigger);
let tl = gsap.timeline({
  scrolltrigger: {
    trigger: "#root #section1",
    start: "10% 95%",
    end: "50% 50%",
    scrub: true,
    markers: true,
  },
});
tl.to("#ice img", {
  top: "750%",
  left: "2%",
});
