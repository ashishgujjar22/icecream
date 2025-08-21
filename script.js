gsap.registerPlugin(ScrollTrigger);
let tl = gsap.timeline({
  scrollTrigger: {
    trigger: " #section1",
    start: "10% 95%",
    end: "50% 50%",
    scrub: true,
    markers: true,
  },
});
tl.to("#ice img", {
  top: "750%",
  left: "2%",
  ease:"power.out"
},0);

tl.to(
  ".chat #chat1",
  {
    top: "1000%",
    left: "0%",
    ease: "power.out",
    
  },
  0
);
tl.to(
  ".chat #chat2",
  {
    top: "1100%",
    left: "30%",
    ease: "power.out",
  },
  0
);
tl.to(
  ".chat #chat3",
  {
    top: "750%",
    left: "40%",
    ease: "power.out",
  },
  0
);
let tl1=gsap.timeline({scrollTrigger:{
    trigger:"#section2",
    start:"10% 90%",
    end:"50% 50%",
    scrub:true,
    markers:true
}})

tl1.to("#ice img",{
    top: "1320%",
    left: "34%",
    ease:"power.out",
    scale:0.9
})
tl1.from(".card img ",{
rotatedfd
})


