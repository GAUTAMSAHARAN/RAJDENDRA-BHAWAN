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