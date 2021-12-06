const slider1 = document.getElementById("slider1");
const slider2 = document.getElementById("slider2");
const nextButton = document.getElementById("next");
const backButton = document.getElementById("back");

const next = (event) => {
	slider2.setAttribute("style", "display:inline-flex;");
	slider1.setAttribute("style", "display:none;");
};

const back = (event) => {
	slider1.setAttribute("style", "display:inline-flex;");
	slider2.setAttribute("style", "display:none;");
};

nextButton.onclick = next;
backButton.onclick = back;
