let arrows = document.querySelectorAll(".down");
let contents = document.querySelectorAll(".content");
let clickCounter = new Array(arrows.length).fill(0);

// alert(clickCounter);

for (let i = 0; i < arrows.length; i++) {
    arrows[i].onclick = () => {
        clickCounter[i]++;
        // alert(clickCounter);

        if (clickCounter[i] % 2 != 0) {
            arrows[i].src = "images/right.png";
            contents[i].style.display = "none";
        } else {
            arrows[i].src = "images/down.png";
            contents[i].style.display = "grid";
        }
    }
}