// SLICK SLIDER
$(document).ready(function() {
	$('.slider1').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 10000,
		pauseOnHover: false,
		pauseOnFocus: false,
		dots: true,
		infinite: true,
		speed: 1000,
		fade: true,
		cssEase: 'ease',
		arrows: false,
	});
});

let slider1 = get('.slider1');

function runAlphabet(alphabetArray, time) {
	if (alphabetArray) {
		for (let i = 0; i < alphabetArray.length; i++) {
			alphabetArray[i].setAttribute('style', `animation-delay: ${time + i * .1}s`);
		}
	}
}

// Handle animation Slider1-title
setInterval(function() {
	let alphabets = getAll(
		'.slick-current.slick-active .slider1-title > div > div'
	);

	runAlphabet(alphabets, 1);
}, 1);

// Slider1-height auto
setInterval(function() {
	let windowWidth = window.innerWidth;
	let emissions = get('.emissions');

	if(windowWidth <= 760) {
		slider1.setAttribute('style', `height: ${window.innerHeight -  emissions.offsetHeight}px`);
	} else {
		slider1.setAttribute('style', 'height: 100vh');	
	}
}, 1000);
