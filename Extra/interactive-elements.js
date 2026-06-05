function openMulti() {
  if (document.querySelector(".selectWrapper").style.pointerEvents == "all") {
    document.querySelector(".selectWrapper").style.opacity = 0;
    document.querySelector(".selectWrapper").style.pointerEvents = "none";
    resetAllMenus();
  } else {
    document.querySelector(".selectWrapper").style.opacity = 1;
    document.querySelector(".selectWrapper").style.pointerEvents = "all";
  }
}
function nextMenu(e) {
  menuIndex = eval(event.target.parentNode.id.slice(-1));
  document.querySelectorAll(".multiSelect")[menuIndex].style.transform =
    "translateX(-100%)";
  // document.querySelectorAll(".multiSelect")[menuIndex].style.clipPath = "polygon(0 0, 0 0, 0 100%, 0% 100%)";
  document.querySelectorAll(".multiSelect")[menuIndex].style.clipPath =
    "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)";
  document.querySelectorAll(".multiSelect")[menuIndex + 1].style.transform =
    "translateX(0)";
  document.querySelectorAll(".multiSelect")[menuIndex + 1].style.clipPath =
    "polygon(0 0, 100% 0, 100% 100%, 0% 100%)";
}
function prevMenu(e) {
  menuIndex = eval(event.target.parentNode.id.slice(-1));
  document.querySelectorAll(".multiSelect")[menuIndex].style.transform =
    "translateX(100%)";
  document.querySelectorAll(".multiSelect")[menuIndex].style.clipPath =
    "polygon(0 0, 0 0, 0 100%, 0% 100%)";
  document.querySelectorAll(".multiSelect")[menuIndex - 1].style.transform =
    "translateX(0)";
  document.querySelectorAll(".multiSelect")[menuIndex - 1].style.clipPath =
    "polygon(0 0, 100% 0, 100% 100%, 0% 100%)";
}
function resetAllMenus() {
  setTimeout(function () {
    var x = document.getElementsByClassName("multiSelect");
    var i;
    for (i = 1; i < x.length; i++) {
      x[i].style.transform = "translateX(100%)";
      x[i].style.clipPath = "polygon(0 0, 0 0, 0 100%, 0% 100%)";
    }
    document.querySelectorAll(".multiSelect")[0].style.transform =
      "translateX(0)";
    document.querySelectorAll(".multiSelect")[0].style.clipPath =
      "polygon(0 0, 100% 0, 100% 100%, 0% 100%)";
  }, 300);
}


//Java for the slideshow
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}
