let tl = gsap.timeline({
  delay: 0
})
  .to("#initial", 
    {
      width:"50%", 
      opacity:0.5
    })

ScrollTrigger.create({
  trigger:".imageWapper",
  start:"top top",
  end:"+=2500",
  animation:tl,
  scrub:true,
  pin:true
})