
//Navbar Toggling
function classToggle() {
    const navs = document.querySelectorAll('.navbar__Items')
    
    navs.forEach(nav => nav.classList.toggle('navbar__ToggleShow'));
  }
  
  document.querySelector('.navbar__Link-toggle')
    .addEventListener('click', classToggle);

navs.forEach(nav=>{
  nav.addEventListener("click", function () {
    if (nav-link.classList.contains("show")) {
      nav-link.classList.remove("show")
    }
  })
})


$("input[name='expiry-data']").mask("00 / 00");


    


