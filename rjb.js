var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
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

function exchange(){
  let body = document.getElementById("nav-button");
  body.style.display="inline";
  let full = document.getElementById("original");
  full.style.display = "none";
  let footer = document.getElementById("footer");
  footer.style.display = "none";
  let x = document.getElementsByTagName("BODY")[0]; 
  x.style.backgroundColor = "rgb(25, 21, 69)";
  x.style.color = "white";
}
function revert(){
  let body = document.getElementById("nav-button");
  body.style.display="none";
  let full = document.getElementById("original");
  full.style.display = "block";
  let footer = document.getElementById("footer");
  footer.style.display = "block";
  let x = document.getElementsByTagName("BODY")[0]; 
  x.style.backgroundColor = "white";
  x.style.color = "";
}