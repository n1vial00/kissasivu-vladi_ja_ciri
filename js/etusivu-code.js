
function carousel() {

    let carInner = document.querySelector(".carousel-inner");

    for (i = 0; i < 12; i++) {
        let div = document.createElement("div");
        let img = document.createElement("img");

        div.classList.add("carousel-item");
        if (i == 0) {
            div.classList.add("active");
        }
        img.classList.add("d-block", "w-100");
        img.src = "../pics/" + i + ".jpg";

        div.append(img);
        carInner.append(div);
    }
}

carousel();
