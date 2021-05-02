const burger = document.querySelector(".btn--hamburger");
const menu = document.querySelector(".menu");
const menuTabs = document.querySelectorAll("li");

const bodyBackground = document.querySelector(".body-background");

const blueButton = document.querySelector("#blue-button");
const redButton = document.querySelector("#red-button");
const pinkButton = document.querySelector("#pink-button");
const orangeButton = document.querySelector("#orange-button");
const greenButton = document.querySelector("#green-button");

burger.addEventListener("click", toggleMenu);

menu.classList.contains("menu--show");

// toggle menu in and out when clicking on the hamburger
function toggleMenu() {
  if (menu.classList.contains("menu--show")) {
      menu.classList.remove("menu--show");
  } else {
      menu.classList.add("menu--show");
  }
}
menuTabs.forEach( 
  function(menuTab) { 
    menuTab.addEventListener("click", toggleMenu);
  }
)
// KIJKEN OF HIER EEN KORTERE MANIER VOOR IS!!

// veranderd de bodyBackground in blue
const changeBlueBackground = function() {
  bodyBackground.classList.remove("background--red");
  bodyBackground.classList.remove("background--pink");
  bodyBackground.classList.remove("background--orange");
  bodyBackground.classList.remove("background--green");
	bodyBackground.classList.add("background--blue"); 
};

// veranderd de bodyBackground in red
const changeRedBackground = function() {
  bodyBackground.classList.remove("background--blue");
  bodyBackground.classList.remove("background--pink");
  bodyBackground.classList.remove("background--orange");
  bodyBackground.classList.remove("background--green");
	bodyBackground.classList.add("background--red"); 
};

// veranderd de bodyBackground in pink
const changePinkBackground = function() {
  bodyBackground.classList.remove("background--blue");
  bodyBackground.classList.remove("background--red");
  bodyBackground.classList.remove("background--orange");
  bodyBackground.classList.remove("background--green");
	bodyBackground.classList.add("background--pink"); 
};

// veranderd de bodyBackground in orange
const changeOrangeBackground = function() {
  bodyBackground.classList.remove("background--blue");
  bodyBackground.classList.remove("background--red");
  bodyBackground.classList.remove("background--pink");
  bodyBackground.classList.remove("background--green");
	bodyBackground.classList.add("background--orange"); 
};

// veranderd de bodyBackground in green
const changeGreenBackground = function() {
  bodyBackground.classList.remove("background--blue");
  bodyBackground.classList.remove("background--red");
  bodyBackground.classList.remove("background--orange");
  bodyBackground.classList.remove("background--orange");
	bodyBackground.classList.add("background--green"); 
};

blueButton.addEventListener("click", changeBlueBackground); 
redButton.addEventListener("click", changeRedBackground); 
pinkButton.addEventListener("click", changePinkBackground);
orangeButton.addEventListener("click", changeOrangeBackground);  
greenButton.addEventListener("click", changeGreenBackground); 



