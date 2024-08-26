var number = Math.floor(Math.random() * 10) + 1;
var player = document.querySelector("input");
var display = document.getElementById("dis");

function guess() {
    if(player.value == number) {
        display.innerHTML = "Correct!";
    }

    else if(player.value > number) {
        display.innerHTML = "Too high";
    }

    else if(player.value < number) {
        display.innerHTML = "Too low";
    }
}