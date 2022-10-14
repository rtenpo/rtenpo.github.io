/** @format */

const line = document.getElementsByClassName("line");
const iheb = document.getElementsByClassName("iheb");
const link = document.getElementsByClassName("link");
const lokmane = document.getElementsByClassName("lokmane");
const anchor = document.getElementsByClassName("anchor");
const mail = document.getElementsByClassName("mail");

for (let i = 0; i < line.length; i++) {
	line[i].style.rotate = "-30deg";
	line[i].style.width = "95%";
}

for (let i = 0; i < iheb.length; i++) {
	iheb[i].addEventListener("mouseover", () => {
		line[i].style.transform = "rotate(30deg)";
		line[i].style.width = "80%";
		line[i].style.transition = "all 0.15s ease-out";
	});
}

for (let i = 0; i < iheb.length; i++) {
	iheb[i].addEventListener("mouseout", () => {
		line[i].style.transform = "rotate(0deg)";
		line[i].style.width = "95%";
		line[i].style.transition = "all 0.15s ease-out";
	});
}

for (let i = 0; i < lokmane.length; i++) {
	lokmane[i].addEventListener("mouseover", () => {
		line[i].style.transform = "rotate(30deg)";
		line[i].style.width = "80%";
		line[i].style.transition = "all 0.15s ease-out";
	});
}

for (let i = 0; i < lokmane.length; i++) {
	lokmane[i].addEventListener("mouseout", () => {
		line[i].style.transform = "rotate(0deg)";
		line[i].style.width = "95%";
		line[i].style.transition = "all 0.15s ease-out";
	});
}

for (let i = 0; i < link.length; i++) {
	link[i].onclick = () => {
		anchor[i].style.pointerEvents = "all";
	};
	link[i].onmouseleave = () => {
		anchor[i].style.pointerEvents = "none";
	};
}

mail[0].onclick = () => {
	navigator.clipboard.writeText("benariba28@gmail.com");
	setTimeout(() => {
		window.alert("Copied to clipboard");
	}, 500);
};
mail[1].onclick = () => {
	navigator.clipboard.writeText("Lokmankerboua@gmail.com");
	setTimeout(() => {
		window.alert("Copied to clipboard");
	}, 500);
};
