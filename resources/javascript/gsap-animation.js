const tl = gsap.timeline({
  defaults:{
    ease: "power1.out"
  }
});

tl.to(".text", {
  y: "0%",
  duration: 1,
  stagger: 0.25
})
.to(".slider",{
  y: "-100%",
  duration: 1.5,
  delay: 0.5
})
.to(".intro", {
  y: "-100%",
  duration: 1,
}, "-=1.2")
.fromTo('nav', {
  opacity: 0,
},
{
  opacity: 1,
  duration: 1,
  duration: 1,
})
.fromTo('.gsap-animations', {
  opacity: 0,
},
{
  opacity: 1,
  duration: 1,
  duration: 1,
}, "-=.5")