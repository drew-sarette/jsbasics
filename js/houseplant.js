// Declare a global variable to store the flower's current health level
let flowerHealth = 4;

// get reference to div with plant 
const flower = document.getElementById("flower");

// Add event listeners to the three buttons to call each three functions named neglect, compliment, water
document.getElementById("neglect").addEventListener("click", neglect);
document.getElementById("compliment").addEventListener("click", compliment);
document.getElementById("water").addEventListener("click", water);

// write a neglect function that reduces the plant's health by 1 and changes the image acordingly
function neglect() {
    flowerHealth--;
    if (flowerHealth === 3) {
        console.log(flower)
        flower.style.backgroundImage = "url(img/spritesheet.png) -200px 0";
    }
    else if (flowerHealth === 2) {

    }
    else if (flowerHealth === 1) {

    }
    else {
        killFlower();
    }
}

// write a function that increases health by 1 and changes the image
function water() {
    flowerHealth++;
    if (flowerHealth === 2) {

    }
    else if (flowerHealth === 3) {

    }
    else if (flowerHealth === 4) {

    }
    else {
        killFlower();
    }
}

// write a compliment function that makes the flower temporarily happy, then reverts to its old state
function compliment() {

}

function killFlower() {

}
