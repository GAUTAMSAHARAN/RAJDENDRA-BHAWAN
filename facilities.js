let card1 = document.getElementById("card-1")
card1.addEventListener("click", () => {
    let imgCard1 = document.getElementById("img-1");
    let p1 = document.getElementById("p-1");
    imgCard1.classList.toggle("extra-class-img");
    p1.classList.toggle("extra-class-p");
})
let card2 = document.getElementById("card-2")
card2.addEventListener("click", () => {
    let imgCard2 = document.getElementById("img-2");
    let p2 = document.getElementById("p-2");
    imgCard2.classList.toggle("extra-class-img");
    p2.classList.toggle("extra-class-p");
})
let card3 = document.getElementById("card-3")
card3.addEventListener("click", () => {
    let imgCard3 = document.getElementById("img-3");
    let p3 = document.getElementById("p-3");
    imgCard3.classList.toggle("extra-class-img");
    p3.classList.toggle("extra-class-p");
})
let card4 = document.getElementById("card-4")
card4.addEventListener("click", () => {
    let imgCard4 = document.getElementById("img-4");
    let p4 = document.getElementById("p-4");
    imgCard4.classList.toggle("extra-class-img");
    p4.classList.toggle("extra-class-p");
})
let card5 = document.getElementById("card-5")
card5.addEventListener("click", () => {
    let imgCard5 = document.getElementById("img-5");
    let p5 = document.getElementById("p-5");
    imgCard5.classList.toggle("extra-class-img");
    p5.classList.toggle("extra-class-p");
})
let card6 = document.getElementById("card-6")
card6.addEventListener("click", () => {
    let imgCard6 = document.getElementById("img-6");
    let p6 = document.getElementById("p-6");
    imgCard6.classList.toggle("extra-class-img");
    p6.classList.toggle("extra-class-p");
})
let card7 = document.getElementById("card-7")
card7.addEventListener("click", () => {
    let imgCard7 = document.getElementById("img-7");
    let p7 = document.getElementById("p-7");
    imgCard7.classList.toggle("extra-class-img");
    p7.classList.toggle("extra-class-p");
})
let card8 = document.getElementById("card-8")
card8.addEventListener("click", () => {
    let imgCard8 = document.getElementById("img-8");
    let p8 = document.getElementById("p-8");
    imgCard8.classList.toggle("extra-class-img");
    p8.classList.toggle("extra-class-p");
})
let card9 = document.getElementById("card-9")
card9.addEventListener("click", () => {
    let imgCard9 = document.getElementById("img-9");
    let p9 = document.getElementById("p-9");
    imgCard9.classList.toggle("extra-class-img");
    p9.classList.toggle("extra-class-p");
})
let card10 = document.getElementById("card-10")
card10.addEventListener("click", () => {
    let imgCard10 = document.getElementById("img-10");
    let p10 = document.getElementById("p-10");
    imgCard10.classList.toggle("extra-class-img");
    p10.classList.toggle("extra-class-p");
})
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
