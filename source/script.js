window.onscroll = () => {
    var navbar = document.getElementById("navigace");
    if (window.scrollY > 10) {
      console.log(navbar);
      navbar.classList.add("navbar-scrolled");
      //   navbar.style.backgroundColor(rbga(0,0,0,0.6))
      console.log(navbar.classList);
    } else {
      navbar.classList.remove("navbar-scrolled");
    }
  };