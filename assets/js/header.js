let get = document.querySelector.bind(document);
let getAll = document.querySelectorAll.bind(document);

// CHAT-BOX && SEARCH-WRAP
let chatIcon = get('.icon-chat');
let chatBox = get('.chat-box');
let headerNavbar = get('.header-navbar');
let headerIcons = get('.header-icons');
let headerOverlay = get('.header > .overlay');
let chatBoxClose = get('.chat-box-head ion-icon');
let searchIcon = get('.icon-search');
let searchWrap = get('.search-wrap');
let searchClose = get('.search-close');
let searchOverlay = get('.search-wrap > .overlay');

function openChatAndSearch(
	box,
	boxOverlay,
	headerNavbar,
	headerIcons,
	headerOverlay
) {
	box && box.classList.add('active');

	boxOverlay && boxOverlay.classList.remove('open');

	headerNavbar && headerNavbar.setAttribute('style', 'opacity: .3');

	headerIcons && headerIcons.setAttribute('style', 'opacity: .3');
	
	headerOverlay && headerOverlay.classList.add('open');
}

function closeChatAndSearch(
	box,
	boxOverlay,
	headerNavbar,
	headerIcons,
	headerOverlay
) {
	box && box.classList.remove('active');

	boxOverlay && boxOverlay.classList.remove('open');

	headerNavbar && headerNavbar.setAttribute('style', 'opacity: unset');

	headerIcons && headerIcons.setAttribute('style', 'opacity: unset');

	headerOverlay && headerOverlay.classList.remove('open');
}

// Open Chat-box
chatIcon.addEventListener('click', function() {
	openChatAndSearch(
		chatBox, 
		false, 
		headerNavbar, 
		headerIcons, 
		headerOverlay
	);
});

// Close Chat-box
chatBoxClose.addEventListener('click', function() {
	closeChatAndSearch(
		chatBox, 
		false, 
		headerNavbar, 
		headerIcons, 
		headerOverlay
	);
});

// Open Search-wrap
searchIcon.addEventListener('click', function() {
	openChatAndSearch(
		searchWrap, 
		searchOverlay, 
		headerNavbar, 
		headerIcons, 
		headerOverlay
	);
});

// Close Search-wrap
searchClose.addEventListener('click', function() {
	closeChatAndSearch(
		searchWrap, 
		searchOverlay, 
		headerNavbar, 
		headerIcons, 
		headerOverlay
	);
});

// Font-size auto
setInterval(function() {
	let chatDisc = get('.chat-disc');
	let chatBoxL = getAll('.chat-disc > div > span');
	let chatDiscSpan = getAll('.chat-disc > span');
	let chatBoxInput = get('.input-form textarea');
	
	chatBoxL.forEach(element => {
		element.setAttribute('style', `font-size: ${chatDisc.offsetWidth * .05}px`);
	});

	if(chatDisc.offsetWidth * .02 < 16) {
		chatDiscSpan.forEach(element => {
			element.setAttribute('style', 'font-size: 16px');
		});

		chatBoxInput.setAttribute('style', 'font-size: 16px');
	} else {
		chatDiscSpan.forEach(element => {
			element.setAttribute('style', `font-size: ${chatDisc.offsetWidth * .02}px`);
		});

		chatBoxInput.setAttribute('style', `font-size: ${chatDisc.offsetWidth * .02}px`);
	}
});

// MENU
let headerIcon = getAll('.header-icon:not(:last-child)');
let menuIcon = get('.icon-menu');
let menu = get('.menu');

// Open Menu
menuIcon.addEventListener('click', function() {
	if (!this.classList.contains('active')) {
		this.classList.add('active');
		this.setAttribute('style', 'z-index: 1001');

		menu.classList.add('active');
		headerNavbar.setAttribute('style', 'opacity: .3');

		headerIcon.forEach((element) => {
			element.setAttribute('style', 'opacity: .3');
		});

		headerOverlay.classList.add('open');
	} else {
		this.classList.remove('active');
		this.setAttribute('style', 'z-index: unset');

		menu.classList.remove('active');
		headerNavbar.setAttribute('style', 'opacity: unset');

		headerIcon.forEach((element) => {
			element.setAttribute('style', 'opacity: unset');
		});

		headerOverlay.classList.remove('open');
	}
});

// Menu-height auto
setInterval(function() {
	let windowWidth = window.innerWidth;

	if(windowWidth > 1024) {
		if (menu.classList.contains('active')) {
			let menuDesktop = get('.menu-desktop');
	
			menu.setAttribute('style', `height: ${menuDesktop.offsetHeight}px`);
		} else {
			menu.setAttribute('style', 'height: 0');
		}
	}
	else {
		menu.removeAttribute('style');
	}
}, 1);

// MENU-MOBILE
let menuMobile = get('.menu-mobile');
let menuMobileContent = get('.menu-m-content');
let menuButtonLv1 = getAll('.menu-lv1 > ul > li > div.menu-button');
let menuButtonBack = getAll('.menu-button.back');
let menuButtonLv2 = getAll('.menu-lv2 > ul > li > div.menu-button');
let menuSub = getAll('.menu-sub');
let actionButtons = getAll('.action-button');

function activeElementArray(idName, className) {
	let elementArray = getAll(`.${className}`);
	let elementActive = get(`#${idName}.${className}`);

	elementArray.forEach((element) => {
		element.classList.remove('active');
	});

	elementActive.classList.add('active');
}

function openSub(
	elementClick, 
	elementOpen, 
	styleActiveString
) {
	let check = -1;

	for (let i = 0; i < elementClick.length; i++) {
		elementClick[i].addEventListener('click', function() {
			if (check !== i) {
				elementOpen.forEach((element) => {
					element.removeAttribute('style');
				});
				
				if(styleActiveString) {
					elementOpen[i].setAttribute('style', `${styleActiveString}`);
				} else {
					elementOpen[i].setAttribute('style', `height: ${elementOpen[i].scrollHeight}px`);
				}

				check = i;
			} else {
				elementOpen[i].removeAttribute('style');
				check = -1;
			}
		});
	}
}

// MenuMobile-height auto
setInterval(function() {
	let windowHeight = window.innerHeight;

	menuMobile.setAttribute('style', `height: ${windowHeight - 59.2}px`);
}, 1);

// Click Menu button level 1
menuButtonLv1.forEach(element => {
	element.addEventListener('click', function() {
		let menuButtonLv1Id = this.getAttribute('id');

		menuMobileContent.classList.add('active');
		activeElementArray(menuButtonLv1Id, 'menu-lv2');
	});
});

// Click Menu button back
menuButtonBack.forEach(element => {
	element.addEventListener('click', function() {
		menuMobileContent.classList.remove('active');
	});
});

// Click Menu button level 2
openSub(menuButtonLv2, menuSub, '');

menuButtonLv2.forEach(element => {
	element.addEventListener('click', function() {
		let menuOverview = get('.menu-lv2.active > .menu-overview');

		if(!this.classList.contains('active')) {
			menuButtonLv2.forEach(element => {
				element.classList.remove('active');
			});

			this.classList.add('active');
			menuOverview.classList.add('hidden');
		} 
		else {
			this.classList.remove('active');
			menuOverview.classList.remove('hidden');
		}
	});
});

// Click Action button
actionButtons.forEach(element => {
	element.addEventListener('click', function() {
		let actionId = this.getAttribute('id');

		if(!this.classList.contains('active')) {
			activeElementArray(actionId, 'action-button');
			activeElementArray(actionId, 'action-content');
		} else {
			this.classList.remove('active');
			this.nextElementSibling.classList.remove('active');
		}
	});
});