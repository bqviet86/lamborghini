// SLICK SLIDER
$(document).ready(function() {
	$('.slider3').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true,
		speed: 300,
		fade: true,
		cssEase: 'ease',
		arrows: false,
		draggable: false,
	});
});

// Handle animation Slider3-title
setInterval(function() {
	let alphabets = getAll('.slider3-title > div > div');
	let alphabetsActive = getAll('.slick-current.slick-active .slider3-title > div > div');

	runAlphabet(alphabets, alphabetsActive, 0);
}, 1);