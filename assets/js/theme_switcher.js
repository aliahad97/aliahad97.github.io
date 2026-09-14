let systemInitiatedDark = window.matchMedia("(prefers-color-scheme: dark)");
let theme = sessionStorage.getItem('theme');

const SUN_ICON = '<i class="fas fa-sun" aria-hidden="true"></i>';
const MOON_ICON = '<i class="fas fa-moon" aria-hidden="true"></i>';

function setToggleIcon(nextThemeIsLight) {
	let toggle = document.getElementById("theme-toggle");
	toggle.innerHTML = nextThemeIsLight ? SUN_ICON : MOON_ICON;
	toggle.setAttribute('aria-label', nextThemeIsLight ? 'Switch to light mode' : 'Switch to dark mode');
}

if (systemInitiatedDark.matches) {
	setToggleIcon(true);
} else {
	setToggleIcon(false);
}

function prefersColorTest(systemInitiatedDark) {
  if (systemInitiatedDark.matches) {
  	document.documentElement.setAttribute('data-theme', 'dark');
   	setToggleIcon(true);
   	sessionStorage.setItem('theme', '');
  } else {
  	document.documentElement.setAttribute('data-theme', 'light');
    setToggleIcon(false);
    sessionStorage.setItem('theme', '');
  }
}
systemInitiatedDark.addListener(prefersColorTest);


function modeSwitcher() {
	let theme = sessionStorage.getItem('theme');
	if (theme === "dark") {
		document.documentElement.setAttribute('data-theme', 'light');
		sessionStorage.setItem('theme', 'light');
		setToggleIcon(false);
	}	else if (theme === "light") {
		document.documentElement.setAttribute('data-theme', 'dark');
		sessionStorage.setItem('theme', 'dark');
		setToggleIcon(true);
	} else if (systemInitiatedDark.matches) {
		document.documentElement.setAttribute('data-theme', 'light');
		sessionStorage.setItem('theme', 'light');
		//let theme = sessionStorage.getItem('theme');
		//console.log("this was triggered");
		setToggleIcon(false);
	} else {
		document.documentElement.setAttribute('data-theme', 'dark');
		sessionStorage.setItem('theme', 'dark');
		setToggleIcon(true);
	}
}

if (theme === "dark") {
	document.documentElement.setAttribute('data-theme', 'dark');
	sessionStorage.setItem('theme', 'dark');
	setToggleIcon(true);
} else if (theme === "light") {
	document.documentElement.setAttribute('data-theme', 'light');
	sessionStorage.setItem('theme', 'light');
	setToggleIcon(false);
}