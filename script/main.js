var tl = gsap.timeline();
var tween = gsap.fromTo("#initial", { height: "100%", width: "100%", opacity: 1 }, { height: "60%", width: "60%", opacity: 0.5, delay: 1 });
tl.add(tween);
ScrollTrigger.create({
    trigger: ".imageWapper",
    start: "top top",
    end: "+=2500",
    animation: tl,
    scrub: true,
    pin: true
})
var logo = document.getElementById("logoGameSphere");
var openingText = document.querySelector(".openingText");
var sloganText = document.querySelector(".sloganText");
window.addEventListener("scroll", () => {
    if (window.scrollY > (window.innerHeight * 0.5)) { logo.style.opacity = "0"; logo.style.display = "block"; } else { logo.style.opacity = "1" }
    if (window.scrollY > (window.innerHeight * 0.8)) { logo.style.display = "none"; openingText.style.display = "inline"; } else { openingText.style.display = "none" }
    if (window.scrollY > (window.innerHeight * 1.1)) { openingText.style.opacity = "1"; } else { openingText.style.opacity = "0" }
    if (window.scrollY > (window.innerHeight * 1.8)) { openingText.style.opacity = "0"; sloganText.style.display = "inline" } else { sloganText.style.display = "none"; }
    if (window.scrollY > (window.innerHeight * 2.2)) { sloganText.style.opacity = "1"; } else { sloganText.style.opacity = "0" }
})

AOS.init();