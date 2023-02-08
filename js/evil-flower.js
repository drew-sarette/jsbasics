let flower = document.querySelector("#evil-flower");
if (!flower) {
    flower = document.createElement("img");
    flower.style.cssText = "background-image: url(/img/tumblr_o2v88toSwZ1umsmpio3_540.png);background-repeat: no-repeat;height: 120px;background-position: -120px -120px;";
}
document.querySelector("#evil-flower").addEventListener("click", handleClick);

const counter = (function () {
    let count = 1;
    return function() {
        return count++;
    }
})();

function handleClick(eventObject) {
    const count = counter();
    switch (count) {
        case 1: 
            console.log("Hey! Don't click on me again. And don't even think of removing me from the DOM! C")
    }
}