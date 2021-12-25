
function carousel() {

    let carInner = document.querySelector(".carousel-inner");

    for (i = 0; i < 12; i++) {
        let div = document.createElement("div");
        let img = document.createElement("img");

        div.classList.add("carousel-item");
        img.classList.add("img-fluid", "d-block");
        img.src = "../pics/" + i + ".jpg";

        div.append(img);
        carInner.append(div);
    }

    document.querySelectorAll(".carousel-item")[getRndInteger(0, 12)].classList.add("active")
}


// Funktio haettu osoitteesta https://www.w3schools.com/js/js_random.asp
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

carousel();
