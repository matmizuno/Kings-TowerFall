let tl = gsap.timeline({
  delay: 0
})
  .to("#initial", 
    {
      width:"50%", 
      opacity:0.7
    })

ScrollTrigger.create({
  trigger:".imageWapper",
  start:"top top",
  end:"+=2000",
  animation:tl,
  scrub:true,
  pin:true
})

let logo = document.getElementById("logoGameSphere");
let openingText = document.querySelector(".openingText")
let sloganText = document.querySelector(".sloganText")

window.addEventListener("scroll", () => {
  if(window.scrollY > (window.innerHeight * 0.5)) { logo.style.opacity = "0"; logo.style.display = "block"; } else { logo.style.opacity = "1" }
  if(window.scrollY > (window.innerHeight * 0.8)) { logo.style.display = "none"; openingText.style.display = "inline"; } else { openingText.style.display = "none" }
  if(window.scrollY > (window.innerHeight * 1.1)) { openingText.style.opacity = "1"; } else { openingText.style.opacity = "0" }
  if(window.scrollY > (window.innerHeight * 1.4)) { openingText.style.opacity = "0"; sloganText.style.display = "inline"; } else { sloganText.style.display = "none" }
  if(window.scrollY > (window.innerHeight * 1.7)) { sloganText.style.opacity = "1"; } else { sloganText.style.opacity = "0" }
})