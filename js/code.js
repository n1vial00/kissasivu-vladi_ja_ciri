window.onload = korkeus();

function sivunVaihto(osoite) {
    let navLinks = document.querySelectorAll("a.nav-link");
    
    document.querySelector("#sisSivu").src = "kissasivu-vladi_ja_ciri/pages/" + osoite +".html";
    
    navLinks.forEach(e => e.classList.remove("active"));
    
    switch(osoite) {
        case "vladimir":
            navLinks[0].classList.add("active")
            break;
        case "cirilla":
            navLinks[1].classList.add("active")
            break;
        case "tietoa":
            navLinks[2].classList.add("active")
            break;
    }
    window.history.pushState(osoite, osoite, "#" + osoite);
}


function korkeus() {
    let embedMuuttuja = document.querySelector("#sisSivu");
    let nav = document.querySelector(".navbar");

    let navbarHeight = nav.offsetHeight;
    embedMuuttuja.style.height = "calc(100vh - " + navbarHeight + "px)";
    embedMuuttuja.style.width = "100vw"
}
