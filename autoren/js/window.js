document.addEventListener("DOMContentLoaded", function() {
	var hopElement = document.getElementById('scrollToTopButton');
	window.addEventListener('scroll', function () {
		if (window.pageYOffset > 500) {
			hopElement.style.animationName = 'scrlBFadeIn';
			hopElement.style.display = "block";
		} else {
			hopElement.style.animationName = 'scrlBFadeOut';
		}
	});
	hopElement.addEventListener('click', function() {
		window.scroll({
			top: 0
		});
	});
	/*scrollToTopButton.addEventListener('animationstart', function(event) {
		if (event.animationName === 'scrlBFadeIn') {
			//scrollToTopButton.style.display = "block";
		}
	});*/
	hopElement.addEventListener('animationend', function(event) {
		if (event.animationName === 'scrlBFadeOut') {
			hopElement.style.display = "none";
		}
	});
});