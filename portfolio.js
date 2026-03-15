function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    
    document.getElementById("popup").style.display = "flex";

    
    document.getElementById("contactForm").reset();
});

function closePopup(){
    document.getElementById("popup").style.display = "none";
}