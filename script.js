function sticky(){
  var navbar = document.getElementById("navbar");
  var logo = document.querySelector("#logo");


  if (navbar !== null && logo !== null) {
  
    if (document.body.scrollTop > 1 || document.documentElement.scrollTop > 1) {
      navbar.classList.add("sticky");
      logo.classList.add("sticky");
      logo.setAttribute("src","img/goldbank1.png");

    }else{
      navbar.classList.remove("sticky");
      logo.classList.remove("sticky");
      logo.setAttribute("src","img/goldbank.png");
      
    }
  }
}

window.addEventListener("scroll", sticky);