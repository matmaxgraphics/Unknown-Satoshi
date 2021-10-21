//Owl Carousel JS control



//Navbar Toggling
function classToggle() {
    const navs = document.querySelectorAll('.navbar__Items')
    
    navs.forEach(nav => nav.classList.toggle('navbar__ToggleShow'));
  }
  
  document.querySelector('.navbar__Link-toggle')
    .addEventListener('click', classToggle);



    /*$(document).ready(function(){

	(function($) {

		$('#header__icon').click(function(e){
			e.preventDefault();
			$('body').toggleClass('with--sidebar');
		});
    
    $('#site-cache').click(function(e){
      $('body').removeClass('with--sidebar');
    });

	})(jQuery);

});
*/


