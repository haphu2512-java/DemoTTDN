document.addEventListener("DOMContentLoaded", (event) => {
	//---------
	document.getElementById("ws247-aio-ct-button-show-all-icon").addEventListener("click", function(e){ 
		var eicons = document.getElementById("ft-contact-icons");

		if (eicons.classList.contains('active')) {
		    document.getElementById("ft-contact-icons").classList.remove('active');
			document.getElementById("ws247-aio-ct-button-show-all-icon").classList.remove('hide-me');
		}else{
			document.getElementById("ft-contact-icons").classList.add('active');
			document.getElementById("ws247-aio-ct-button-show-all-icon").classList.add('hide-me');
		}
		return;
	});


	//---------
	document.getElementById("js-hide-all-icon-e").addEventListener("click", function(){ 
		document.getElementById("ws247-aio-ct-button-show-all-icon").click();
		return;
	});

	//---------
	ws247_aio_animation_effect_icons_init();

});

function ws247_aio_animation_effect_icons_init(){
	const container = document.querySelector(".ws247-aio-animation-effect-icons");
    if (!container) return; 

    const icons = container.querySelectorAll(".icon");
    if (icons.length === 0) return;

    let current = 0;
    const delay = 1500;

    function showNextIcon() {
      icons.forEach((icon) => icon.classList.remove("active", "exit"));

      const prev = (current - 1 + icons.length) % icons.length;
      icons[prev].classList.add("exit");
      icons[current].classList.add("active");

      current = (current + 1) % icons.length;
    }

    showNextIcon();
    setInterval(showNextIcon, delay);
}