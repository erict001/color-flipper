const color = document.getElementById("button");

const colors = ["red", "green", "blue", "yellow", "orange"]

function getColor() {
    const setColor = randomColor();
    console.log(setColor);
    console.log(randomColor);
    document.body.style.backgroundColor = colors[setColor];
}

function randomColor() {
    return Math.floor(Math.random() * colors.length);
}

color.addEventListener("click", getColor)