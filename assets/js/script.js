
//Navbar Toggling
function classToggle() {
    const navs = document.querySelectorAll('.navbar__Items')
    
    navs.forEach(nav => nav.classList.toggle('navbar__ToggleShow'));
  }
  
  document.querySelector('.navbar__Link-toggle')
    .addEventListener('click', classToggle);

navs.forEach(nav=>{
  nav.addEventListener("click", function () {
    if (nav.classList.contains("show")) {
      nav.classList.remove("show")
    }
  })
})

//share button function
function actionToggle(){
  var action = document.querySelector('.action');
  action.classList.toggle('active')
}



    


