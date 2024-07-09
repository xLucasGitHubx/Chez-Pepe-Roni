// menu hamburger début
const hamburgerIcon = document.querySelector(".hamburgerIcon");
const navLinks = document.querySelectorAll("nav a");
const nav = document.querySelector("nav");

hamburgerIcon.addEventListener("click", () => {
	if (nav.classList.contains("open_menu")) {
		nav.classList.remove("open_menu");
		navLinks.forEach((link) => {
			link.style.display = "none";
		});
		hamburgerIcon.src = "../icons/hamburger_icon.svg";
	} else {
		nav.classList.add("open_menu");
		navLinks.forEach((link) => {
			link.style.display = "flex";
		});
		hamburgerIcon.src = "../icons/cross_icon.png";
	}
});

window.addEventListener("resize", () => {
	const windowWidth = window.innerWidth;
	if (windowWidth <= 641) {
		nav.classList.remove("open_menu");
		navLinks.forEach((link) => {
			link.style.display = "none";
		});
		hamburgerIcon.src = "../icons/hamburger_icon.svg";
	} else {
		nav.classList.add("open_menu");
		navLinks.forEach((link) => {
			link.style.display = "flex";
		});
		hamburgerIcon.src = "../icons/cross_icon.png";
	}
});

// menu hamburger fin
