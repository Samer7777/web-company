//for auto background
let image = document.getElementById("background");
let imges = ["./img/img1.jpg", "./img/img2.jpg", "./img/img3.jpg"];
setInterval(function () {
  let random = Math.floor(Math.random() * 3);
  image.src = imges[random];
}, 3000);

//for the skill par and go up button
let progressSpans = document.querySelectorAll(".the-progress span");
let section = document.querySelector(".our-skills");
var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

//Get the button
var mybutton = document.getElementById("myBtn");
window.onscroll = function () {
  // Skills Animate Width
  if (window.scrollY >= section.offsetTop - 250) {
    progressSpans.forEach((span) => {
      span.style.width = span.dataset.width;
    });
  }

  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }

  if (
    document.body.scrollTop > 1000 ||
    document.documentElement.scrollTop > 1000
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
};
