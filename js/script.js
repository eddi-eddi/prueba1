// BUSCADOR
function buscar() {
    let input = document.getElementById("busqueda").value.toLowerCase();
    let cards = document.querySelectorAll(".card");

    cards.forEach(card => {
        let texto = card.innerText.toLowerCase();
        card.style.display = texto.includes(input) ? "block" : "none";
    });
}

// FILTRO
function filtrar(categoria) {
    let cards = document.querySelectorAll(".card");

    cards.forEach(card => {
        if (categoria === "todos") {
            card.style.display = "block";
        } else {
            card.style.display = card.classList.contains(categoria) ? "block" : "none";
        }
    });
}

// CARRUSEL
let imagenes = [
    "img/banner1.jpg",
    "img/banner2.jpg",
    "img/banner3.jpg"
];

let i = 0;

setInterval(() => {
    i = (i + 1) % imagenes.length;
    document.getElementById("slider").src = imagenes[i];
}, 3000);