let categoriaActual = "todos";

// BUSCADOR
function buscar() {
    let input = document.getElementById("busqueda").value.toLowerCase();
    filtrar(categoriaActual, input);
}

// FILTRO
function filtrar(categoria, textoBusqueda = "") {
    categoriaActual = categoria;

    let cards = document.querySelectorAll(".card");

    cards.forEach(card => {
        let texto = card.innerText.toLowerCase();

        let coincideCategoria =
            categoria === "todos" ?
            !card.classList.contains("oculto") :
            card.classList.contains(categoria);

        let coincideBusqueda = texto.includes(textoBusqueda);

        if (coincideCategoria && coincideBusqueda) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
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
