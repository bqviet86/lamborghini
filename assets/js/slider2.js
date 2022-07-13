// SLIDER2 IMAGE
let slider2 = get('.slider2');
let btnLeft = get('.slider2-dots svg.btn-left');
let btnRight = get('.slider2-dots svg.btn-right');
let slider2ImgWrap = get('.slider2-img-wrap');
let slider2DescClass = 'slider2-desc';
let modelMainClass = 'model-main';

function setWidthFunc(length) {
	let slider2Imgs = getAll('.slider2-img');
	for (let i = 0; i < length; i++) {
		let slider2ImgWidth = ((window.innerHeight * Math.tan(20 * Math.PI / 180) + window.innerWidth * .4) / 2).toFixed(2);

		slider2Imgs[i].setAttribute('style', `width: ${slider2ImgWidth}px`);
	}
}

// Slider2-image-width auto
let setWidth = setInterval(function() {
	let slider2Imgs = getAll('.slider2-img');

	setWidthFunc(slider2Imgs.length - 1);
}, 1);

setInterval(function() {
	setWidthFunc(2);
}, 1);

// Click Button left
btnLeft.addEventListener('click', function() {
	let slider2Imgs = getAll('.slider2-img');

	if (slider2Imgs.length <= 3) {
		let slider2ImgFirst = get('.slider2-img:first-child');
		let slider2ImgFirstId = slider2ImgFirst.getAttribute('id');
		let slider2ImgActive = get('.slider2-img.active');

		// Run Slide image
		let slider2ImgInsert = document.createElement('div');

		slider2ImgInsert.setAttribute('id', `${slider2ImgFirstId}`);
		slider2ImgInsert.classList.add('slider2-img');
		slider2ImgInsert.innerHTML += slider2ImgFirst.innerHTML;

		slider2ImgWrap.appendChild(slider2ImgInsert);
		slider2ImgActive.classList.remove('active');

		setTimeout(function() {
			slider2ImgInsert.classList.add('active');
		}, 1);

		setTimeout(function() {
			slider2ImgWrap.removeChild(slider2ImgFirst);
		}, 501);

		// Run Information
		let alphabets = getAll('.slider2-desc .slider2-name div');
		let alphabetsActive = getAll(`#${slider2ImgFirstId} .slider2-name div`);

		activeElementArray(slider2ImgFirstId, slider2DescClass);
		runAlphabet(alphabets, alphabetsActive, .5);

		// Active Model
		activeElementArray(slider2ImgFirstId, modelMainClass);
	}
});

// Click Button right
btnRight.addEventListener('click', function() {
	let slider2Imgs = getAll('.slider2-img');

	if (slider2Imgs.length <= 3) {
		let slider2ImgLast = get('.slider2-img:last-child');
		let slider2ImgLastId = slider2ImgLast.getAttribute('id');
		let slider2ImgActive = slider2ImgLast.previousElementSibling;
		let slider2ImgActiveId = slider2ImgActive.getAttribute('id');

		// Run Slide image
		clearInterval(setWidth);

		let slider2ImgInsert = document.createElement('div');
        
		slider2ImgInsert.setAttribute('id', `${slider2ImgLastId}`);
		slider2ImgInsert.classList.add('slider2-img');
		slider2ImgInsert.innerHTML += slider2ImgLast.innerHTML;

		$('.slider2-img:nth-child(2)').removeAttr('style');
		$('.slider2-img-wrap').prepend(slider2ImgInsert);

		setTimeout(function() {
			slider2ImgActive.classList.add('active');
			slider2ImgLast.classList.remove('active');
		}, 1);

		setTimeout(function() {
			slider2ImgWrap.removeChild(slider2ImgLast);

			setWidth = setInterval(function() {
				let slider2Imgs = getAll('.slider2-img');

				setWidthFunc(slider2Imgs.length - 1);
			}, 1);
		}, 501);

		// Run Information
		let alphabets = getAll('.slider2-desc .slider2-name div');
		let alphabetsActive = getAll(`#${slider2ImgActiveId} .slider2-name div`);

		activeElementArray(slider2ImgActiveId, slider2DescClass);
		runAlphabet(alphabets, alphabetsActive, .5);

		// Active Model
		activeElementArray(slider2ImgActiveId, modelMainClass);
	}
});

// SLIDER2 MODEL
let modelWrap = get('.model-wrap');
let modelNames = getAll('.model-name');
let modelContents = getAll('.model-content');
let slider2ControlBtn = get('.slider2-control');
let modelBtnBack = get('.model > svg');

// Set Model width
setInterval(function() {
    let windowWidth = window.innerWidth;

	if(windowWidth <= 1300) {
		modelWrap.setAttribute('style', `width: ${(windowWidth - 17) * .85}px`);
	} else {
		modelWrap.setAttribute('style', `width: ${(windowWidth - 17) * .75}px`);
	}
}, 1);

// Open Model
slider2ControlBtn.addEventListener('click', function() {
	slider2.classList.add('open-model');
});

// Close Model
modelBtnBack.addEventListener('click', function() {
	slider2.classList.remove('open-model');
});

// Click Model-name
openSub(modelNames, modelContents, 'display: flex');
