const images = [
    "jeju.jpg",
    "paris.jpg",
    "sea.jpg",
    "village.jpg"
]

const chosenImg = images[Math.floor(Math.random() * images.length)];

const bgImg = document.createElement("img");

bgImg.src = `img/${chosenImg}`;
bgImg.id = "bgImg";



const wrap = document.getElementById("wrap");
//wrap.appendChild(bgImg);

let windowWidth = window.outerWidth;
let windowHeight = window.innerHeight;

wrap.style.backgroundImage = `url("img/${chosenImg}")`;
wrap.style.backgroundSize = `${windowWidth}px ${windowHeight}px`;
wrap.style.width = `${windowWidth}px`;
wrap.style.height = `${windowHeight}px`;

console.log(window.innerWidth, windowHeight);
console.log(bgImg);

