AOS.init({
  delay: 600,
  duration: 700,
  easing: "ease",
  once: true,
});

let mediaLinks = document.querySelector(".media-links");
let body = document.querySelector("body");
function toggleMediaLinks(toggleMeidaLinks) {
  if (toggleMeidaLinks === "show") {
    mediaLinks.style = "transform: translateY(0%);";
    body.style = "overflow:hidden";
  } else {
    mediaLinks.style = "transform: translateY(-100%);";
    body.style = "overflow:scroll";
  }
}
