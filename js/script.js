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
	menuOpenBtn.classList.remove("active");

});







