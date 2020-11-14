// import "./threeAnimation.js"
import { gsap } from "gsap"

const menuBtn = document.querySelector(".menu-btn")

const tl = gsap.timeline({
  paused: true,
  defauts: {
    ease: "power2.inOut",
  },
  onComplete: () => {
    document.querySelector(".nav-links").classList.toggle("opened")
  },
})
tl.reversed(true)
tl.to(menuBtn.querySelector(".line-2"), {
  x: "-120%",
  duration: 0.15,
})
  .to(
    menuBtn.querySelector(".line-1"),
    {
      y: 14,
      transformOrigin: "center center",
      rotation: "-45deg",
      duration: 0.15,
    },
    "-=0.075"
  )
  .to(
    menuBtn.querySelector(".line-3"),
    {
      y: "-14px",
      transformOrigin: "center center",
      rotation: 45,
      duration: 0.15,
      onComplete: () => console.log("Menu"),
    },
    "-=0.15"
  )
  .to(
    document.querySelector(".nav-links"),
    {
      opacity: 1,
      zIndex: 10,
      duration: 0.3,
    },
    "-=0.3"
  )
  .to(document.querySelectorAll(".nav-item"), {
    x: "-50%",
    opacity: 1,
    duration: 0.3,
    stagger: 0.1,
  })

menuBtn.addEventListener("click", () => {
  toggleTl(tl)
})

function toggleTl(tween) {
  tween.reversed() ? tween.play() : tween.reverse()
}

if (document.body.classList.contains("homepage")) {
  window.addEventListener("DOMContentLoaded", () => {
    document.body.style.height = "100vh"
    const tl = gsap.timeline()
    tl.to(document.querySelector(".overlay-color"), {
      x: "-100%",
      duration: 0.5,
      delay: 1.4,
      zIndex: -500,
    })
      .fromTo(
        document.querySelector(".title-agency .span-untitled"),
        {
          x: 200,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
        }
      )
      .fromTo(
        document.querySelector(".title-agency .span-agency"),
        {
          x: -200,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
        },
        "-=.2"
      )
      .fromTo(
        document.querySelector(".presentation"),
        {
          x: 100,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
        }
      )
      .fromTo(
        document.getElementById("threejs"),
        {
          opacity: 0,
        },
        {
          opacity: 1,
        }
      )
  })
}

if (document.body.classList.contains("login-page")) {
  document.querySelectorAll("login-form input").forEach((input) => {
    input.addEventListener("")
  })
}
