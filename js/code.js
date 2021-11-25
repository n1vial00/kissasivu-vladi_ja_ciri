function sivunVaihto(osoite) {
    let navLinks = document.querySelectorAll("a.nav-link");
    
    document.querySelector("#sisSivu").src = "./pages/" + osoite +".html";
    
    navLinks.forEach(e => e.classList.remove("active"));
    
    switch(osoite) {
        case "etusivu":
            navLinks[0].classList.add("active")
            break;
        case "vladimir":
            navLinks[1].classList.add("active")
            break;
        case "cirilla":
            navLinks[2].classList.add("active")
            break;
    }
}