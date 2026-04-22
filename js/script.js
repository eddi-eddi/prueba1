// =======================
// 📂 ESTADO
// =======================
let categoriaActual = "todos";
let carrito = [];

// =======================
// 🔎 BUSCADOR
// =======================
function buscar() {
    let input = document.getElementById("busqueda").value.toLowerCase();
    filtrar(categoriaActual, input);
}

// =======================
// 📂 FILTRO
// =======================
function filtrar(categoria, textoBusqueda = "") {
    categoriaActual = categoria;

    let cards = document.querySelectorAll(".card");

    cards.forEach(card => {
        let texto = card.innerText.toLowerCase();
        let mostrar = false;

        if (categoria === "todos") {
            mostrar = card.classList.contains("inicio");
        } else {
            mostrar = card.classList.contains(categoria);
        }

        if (mostrar && texto.includes(textoBusqueda)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
}

// =======================
// 🚀 INICIO
// =======================
filtrar("todos");

// =======================
// 🖼️ CARRUSEL
// =======================
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

// =======================
// 🛒 ABRIR / CERRAR
// =======================
function toggleCarrito() {
    document.querySelector(".carrito").classList.toggle("activo");
    document.querySelector(".overlay").classList.toggle("activo");
}
// =======================
// 🛒 AGREGAR
// =======================
function agregarCarrito(boton) {

    let card = boton.closest(".card");

    let nombre = card.querySelector("h3").innerText;
    let precioTexto = card.querySelector(".price").innerText;
    let precio = parseFloat(precioTexto.replace("$", ""));

    let producto = carrito.find(p => p.nombre === nombre);

    if (producto) {
        producto.cantidad++;
    } else {
        carrito.push({ nombre, precio, cantidad: 1 });
    }

    mostrarToast();
    actualizarCarrito();

    // 🔥 abre carrito automático
    document.querySelector(".carrito").classList.add("activo");
}

// =======================
// 🔄 ACTUALIZAR
// =======================
function actualizarCarrito() {

    let lista = document.getElementById("lista-carrito");
    lista.innerHTML = "";

    let total = 0;
    let totalProductos = 0;

    carrito.forEach((item, index) => {

        total += item.precio * item.cantidad;
        totalProductos += item.cantidad;

        let li = document.createElement("li");

        li.innerHTML = `
            <strong>${item.nombre}</strong><br>
            x${item.cantidad} = $${item.precio * item.cantidad}
            <br>
            <button onclick="cambiarCantidad(${index}, 1)">+</button>
            <button onclick="cambiarCantidad(${index}, -1)">-</button>
        `;

        lista.appendChild(li);
    });

    document.getElementById("total").textContent = "Total: $" + total;

    // 🔥 contador REAL (cantidad total)
    document.getElementById("contador").textContent = totalProductos;
}

// =======================
// ➕➖ CANTIDAD
// =======================
function cambiarCantidad(index, cambio) {
    carrito[index].cantidad += cambio;

    if (carrito[index].cantidad <= 0) {
        carrito.splice(index, 1);
    }

    actualizarCarrito();
}

// =======================
// 🧹 VACIAR
// =======================
function vaciarCarrito() {
    carrito = [];
    actualizarCarrito();
}

// =======================
// 📲 ENVIAR PEDIDO
// =======================
function enviarPedido() {

    let nombreCliente = document.getElementById("nombreCliente").value;
    let horario = document.getElementById("horario").value;

    if (carrito.length === 0) {
        alert("Agrega productos primero");
        return;
    }

    if (!nombreCliente) {
        alert("Ingresa tu nombre");
        return;
    }

    if (!horario) {
        alert("Selecciona horario de recolección");
        return;
    }

    let mensaje = "🛒 *Nuevo Pedido*\n\n";
    mensaje += `👤 Nombre: ${nombreCliente}\n`;
    mensaje += `⏰ Recolección: ${horario}\n\n`;

    let total = 0;

    carrito.forEach(item => {
        mensaje += `- ${item.nombre} x${item.cantidad} = $${item.precio * item.cantidad}\n`;
        total += item.precio * item.cantidad;
    });

    mensaje += `\n💰 Total: $${total}`;
    mensaje += `\n\nVerifica pedido y confirma 🙌`;

    let url = `https://wa.me/526463849069?text=${encodeURIComponent(mensaje)}`;
    window.open(url, "_blank");
}

// =======================
// 🔔 TOAST
// =======================
function mostrarToast() {
    let t = document.getElementById("toast");
    t.style.opacity = 1;

    setTimeout(() => {
        t.style.opacity = 0;
    }, 1200);
}
