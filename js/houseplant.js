// Declare a global variable to store the flower's current health level
let flowerHealth = 4;

// get reference to div with plant 
const flower = document.getElementById("flower");
// Add event listeners to the three buttons to call each three functions named neglect, compliment, water


// write a neglect function that reduces the plant's health by 1 and changes the image acordingly
function neglect() {
    flowerHealth--;
    updateDisplay();
}

// write a function that increases health by 1 and changes the image
function water() {
    flowerHealth++;
    updateDisplay();
}

// write a compliment function that makes the flower temporarily happy, then reverts to its old state
function compliment() {
    flower.style.backgroundPosition = "0px";
    setTimeout(function () {
        updateDisplay();
    }, 2000)

}


function killFlower() {
    flower.classList.add("dead");
}

function updateDisplay() {
    if ( flowerHealth >= 4 ) {
        flower.style.backgroundPosition = "-100px";
    }
    else if (flowerHealth === 3) {
        flower.style.backgroundPosition = "-200px";
    }  
    else if (flowerHealth === 2) {
        flower.style.backgroundPosition = "-300px";
    } 
    else if (flowerHealth === 1) {
        flower.style.backgroundPosition = "-400px";
    } 
    else {
        killFlower();
    }
}

document.getElementById("neglect").addEventListener("click", neglect);
document.getElementById("water").addEventListener("click", water);
document.getElementById("compliment").addEventListener("click", compliment);