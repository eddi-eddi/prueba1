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

        card.style.display = (mostrar && texto.includes(textoBusqueda)) ? "block" : "none";
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
    let slider = document.getElementById("slider");
    if (slider) slider.src = imagenes[i];
}, 3000);

// =======================
// 🛒 ABRIR / CERRAR
// =======================
function toggleCarrito() {
    let carritoDiv = document.querySelector(".carrito");
    let overlay = document.querySelector(".overlay");

    carritoDiv.classList.toggle("activo");
    overlay.classList.toggle("activo");

    document.body.style.overflow =
        carritoDiv.classList.contains("activo") ? "hidden" : "auto";
}

// cerrar tocando fondo
document.addEventListener("DOMContentLoaded", () => {
    let overlay = document.querySelector(".overlay");
    if (overlay) {
        overlay.addEventListener("click", toggleCarrito);
    }
});

// =======================
// 🛒 AGREGAR
// =======================
function agregarCarrito(boton) {

    let card = boton.closest(".card");

    let nombre = card.querySelector("h3").innerText;
    let precioTexto = card.querySelector(".price").innerText;

    let precio = parseFloat(precioTexto.replace(/[^\d.]/g, ""));

    let producto = carrito.find(p => p.nombre === nombre);

    if (producto) {
        producto.cantidad++;
    } else {
        carrito.push({ nombre, precio, cantidad: 1 });
    }

    animarBotonCarrito();
    mostrarToast();
    actualizarCarrito();
    abrirCarrito();
}

// =======================
// 🛒 ABRIR DIRECTO
// =======================
function abrirCarrito() {
    document.querySelector(".carrito").classList.add("activo");
    document.querySelector(".overlay").classList.add("activo");
    document.body.style.overflow = "hidden";
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

        let subtotal = item.precio * item.cantidad;

        total += subtotal;
        totalProductos += item.cantidad;

        let li = document.createElement("li");

        li.innerHTML = `
            <strong>${item.nombre}</strong><br>
            x${item.cantidad} = $${subtotal.toFixed(2)}
            <br>
            <button onclick="cambiarCantidad(${index}, 1)">+</button>
            <button onclick="cambiarCantidad(${index}, -1)">-</button>
        `;

        lista.appendChild(li);
    });

    document.getElementById("total").textContent = "Total: $" + total.toFixed(2);

    // 🔥 ACTUALIZA AMBOS CONTADORES
    let c1 = document.getElementById("contador");
    let c2 = document.getElementById("contadorCarrito");

    if (c1) c1.textContent = totalProductos;
    if (c2) c2.textContent = totalProductos;
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

    let nombreCliente = document.getElementById("nombreCliente").value.trim();
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
        let subtotal = item.precio * item.cantidad;
        mensaje += `- ${item.nombre} x${item.cantidad} = $${subtotal.toFixed(2)}\n`;
        total += subtotal;
    });

    mensaje += `\n💰 Total: $${total.toFixed(2)}`;
    mensaje += `\n\nVerifica pedido y confirma 🙌`;

    let url = `https://wa.me/526463849069?text=${encodeURIComponent(mensaje)}`;
    window.open(url, "_blank");
}

// =======================
// 🔔 TOAST
// =======================
function mostrarToast() {
    let t = document.getElementById("toast");
    if (!t) return;

    t.style.opacity = 1;

    setTimeout(() => {
        t.style.opacity = 0;
    }, 1200);
}

// =======================
// 🎯 ANIMACIÓN BOTÓN
// =======================
function animarBotonCarrito() {
    let btn = document.querySelector(".btn-carrito");
    if (!btn) return;

    btn.style.transform = "scale(1.2)";

    setTimeout(() => {
        btn.style.transform = "scale(1)";
    }, 200);
}
