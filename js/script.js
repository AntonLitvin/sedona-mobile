//================ Mobile main manu open-close

(function() {

var menuOpenBtn = document.querySelector(".main-nav-open");
var menuCloseBtn = document.querySelector(".main-nav-close");
var modalMenu = document.querySelector(".modal-menu");
var mainNav = document.querySelector(".main-nav");

menuOpenBtn.addEventListener("click", function(event) {
	event.preventDefault();

	if (modalMenu.classList.contains("modal-menu-open")) {
		modalMenu.classList.remove("modal-menu-open");
		mainNav.classList.remove("main-nav-active");
	} else {
		modalMenu.classList.add("modal-menu-open");
		mainNav.classList.add("main-nav-active");
	}

});

menuCloseBtn.addEventListener("click", function(event) {
	event.preventDefault();

	modalMenu.classList.remove("modal-menu-open");
	mainNav.classList.remove("main-nav-active");

});

})();

// ================= Search form open-close

(function() {

var link = document.querySelector(".search-hotel");
var popup = document.querySelector(".search-hotel-modal");
var close = popup.querySelector(".search-close");
var submitClose = popup.querySelector(".submit-btn");

var overlay = document.querySelector(".modal-overlay");

link.addEventListener("click", function(event) {
event.preventDefault();

overlay.classList.add("modal-overlay-show");
popup.classList.add("search-hotel-show");

});

close.addEventListener("click", function(event) {
event.preventDefault();

popup.classList.remove("search-hotel-show");
overlay.classList.remove("modal-overlay-show");
});

window.addEventListener("keydown", function(event) {
	if (event.keyCode === 27) {
		if (popup.classList.contains("search-hotel-show")) {
			popup.classList.remove("search-hotel-show");
			overlay.classList.remove("modal-overlay-show");
		}
	}
});


submitClose.addEventListener("click", function(event) {
event.preventDefault();

popup.classList.remove("search-hotel-show");
overlay.classList.remove("modal-overlay-show");

});


overlay.addEventListener("click", function(event) {
event.preventDefault();

popup.classList.remove("search-hotel-show");
overlay.classList.remove("modal-overlay-show");

});

})();