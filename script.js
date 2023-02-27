
var btn = document.querySelector("#show-or-hide");
var projetos = document.querySelector(".projetos");

btn.addEventListener("click", function() {

    if(projetos.style.display === "flex") {
        projetos.style.display = "none";
    } else {
        projetos.style.display = "flex";
    }
});

