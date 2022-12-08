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
.fromTo('nav, .gsap-animations', {
  opacity: 0,
},
{
  opacity: 1,
  duration: 1,
})
// .fromTo('#home', {
//   opacity: 0,
// },
// {
//   opacity: 1,
//   duration: 1,
// }, "-=.5")

const cards = gsap.utils.toArray('.projects .card');
const skillsBlock = gsap.utils.toArray('.skills .skillsBlock');

cards.forEach((card, i) => {
  const anim = gsap.fromTo(card, {
    autoAlpha: 0, 
  }, 
  {
    duration: 1, 
    autoAlpha: 1,
  }
  );

  ScrollTrigger.create({
    trigger: card,
    animation: anim,
    toggleActions: 'play none none none',
    // once: true,
    // markers: true,
    scrub: true,
    // start: "top center",
    end: "bottom bottom",
    once: true,
  });
});

skillsBlock.forEach((skills_Block, i) => {
  const anim_skills_Block = gsap.fromTo(skills_Block, {
    autoAlpha: 0, 
  }, 
  {
    duration: 1, 
    autoAlpha: 1,
  }
  );

  ScrollTrigger.create({
    trigger: skills_Block,
    animation: anim_skills_Block,
    toggleActions: 'play none none none',
    // once: true,
    // markers: true,
    scrub: true,
    // start: "top center",
    end: "bottom bottom",
    once: true,
  });
});

const lower = gsap.timeline({
  defaults:{
    ease: "power1.out",
    duration: 1,
  }
});

lower.fromTo('.aboutme .container', {
  autoAlpha: 0,
},
{
  autoAlpha: 1,
  
  scrollTrigger: {
    trigger: ".aboutme .container",
    toggleActions: 'play none none none',
    end: "bottom bottom",
    // markers: true,
    scrub: true,
    once: true,
  },
})
.fromTo('.skills .font-main', {
  autoAlpha: 0,
},
{
  autoAlpha: 1,
  scrollTrigger: {
    trigger: ".skills .font-main",
    toggleActions: 'play none none none',
    end: "bottom bottom",
    // markers: true,
    scrub: true,
    once: true,
  },
})
.fromTo('.projects .font-main', {
  autoAlpha: 0,
},
{
  autoAlpha: 1,
  scrollTrigger: {
    trigger: ".projects .font-main",
    toggleActions: 'play none none none',
    end: "bottom bottom",
    // markers: true,
    scrub: true,
    once: true,
  },
})
.fromTo('.contact-me .container', {
  autoAlpha: 0,
},
{
  autoAlpha: 1,
  scrollTrigger: {
    trigger: ".contact-me .container",
    // markers: true,
    toggleActions: 'play none none none',
    end: "bottom bottom",
    scrub: true,
    once: true,
  },
})
.fromTo('.social-media .container', {
  autoAlpha: 0,
},
{
  autoAlpha: 1,
  scrollTrigger: {
    trigger: ".social-media .container",
    toggleActions: 'play none none none',
    end: "bottom bottom",
    scrub: true,
    // markers: true,
    once: true,
  },
})