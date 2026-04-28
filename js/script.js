// =======================
// 📂 VARIABLES GLOBALES
// =======================
let categoriaActual = "todos";
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

// =======================
// 🔎 BUSCADOR
// =======================
function buscar() {
    const texto = document.getElementById("busqueda").value.toLowerCase().trim();
    filtrar(categoriaActual, texto);
}

// =======================
// 📂 FILTRAR PRODUCTOS
// =======================
function filtrar(categoria, textoBusqueda = "") {
    categoriaActual = categoria;

    const titulo = document.getElementById("section-title");
    if (titulo) {
        titulo.textContent = categoria === "todos" ? "Destacados" :
            categoria === "promos" ? "Promociones" :
            categoria.charAt(0).toUpperCase() + categoria.slice(1);
    }

    document.querySelectorAll(".card").forEach(card => {
        const textoCard = card.innerText.toLowerCase();
        let mostrar = false;

        if (categoria === "todos") {
            mostrar = card.classList.contains("inicio") || card.classList.contains("promos");
        } else if (categoria === "promos") {
            mostrar = card.classList.contains("promos");
        } else {
            mostrar = card.classList.contains(categoria);
        }

        const coincideBusqueda = textoBusqueda === "" || textoCard.includes(textoBusqueda);

        card.style.display = (mostrar && coincideBusqueda) ? "flex" : "none";
    });
}

// =======================
// 🚀 INICIALIZACIÓN
// =======================
document.addEventListener("DOMContentLoaded", () => {
    filtrar("todos");
    actualizarCarrito();

    // Mostrar sugerencia si hay productos guardados al refrescar
    if (carrito.length > 0) {
        mostrarSugerenciaCarrito();
    }

    // Configurar menú de categorías
    document.querySelectorAll('.menu-item').forEach(item => {
        item.addEventListener('click', () => {
            document.querySelectorAll('.menu-item').forEach(i => i.classList.remove('active'));
            item.classList.add('active');
            const categoria = item.getAttribute('data-categoria');
            filtrar(categoria);
        });
    });
});

// =======================
// SUGERENCIA AL REFRESCAR LA PÁGINA
// =======================
function mostrarSugerenciaCarrito() {
    const toast = document.getElementById("toast");
    if (!toast) return;

    toast.innerHTML = `
        Tienes ${carrito.length} producto(s) en tu carrito<br><br>
        <button onclick="seguirConPedido()" style="margin:5px; padding:8px 14px; background:#00c9a7; color:white; border:none; border-radius:6px; cursor:pointer;">Seguir con mi pedido</button>
        <button onclick="vaciarCarritoDesdeSugerencia()" style="margin:5px; padding:8px 14px; background:#e74c3c; color:white; border:none; border-radius:6px; cursor:pointer;">Vaciar carrito</button>
    `;
    toast.style.background = "#1e3a2f";
    toast.style.color = "white";
    toast.style.padding = "15px";
    toast.style.textAlign = "center";
    toast.style.borderRadius = "8px";
    toast.classList.add("show");

    setTimeout(() => {
        toast.classList.remove("show");
    }, 12000);
}

function seguirConPedido() {
    document.getElementById("toast").classList.remove("show");
    toggleCarrito();
}

function vaciarCarritoDesdeSugerencia() {
    if (confirm("¿Estás seguro de vaciar todo el carrito?")) {
        carrito = [];
        guardarCarrito();
        actualizarCarrito();
        document.getElementById("toast").classList.remove("show");
    }
}

// =======================
// 🖼️ CARRUSEL
// =======================
let imagenes = [
    "img/banner1.jpg",
    "img/banner2.jpg",
    "img/banner3.jpg"
];
let indiceActual = 0;

function cambiarCarrusel() {
    indiceActual = (indiceActual + 1) % imagenes.length;
    const slider = document.getElementById("slider");
    if (slider) slider.src = imagenes[indiceActual];
}
setInterval(cambiarCarrusel, 4000);

// =======================
// 🛒 ABRIR / CERRAR CARRITO
// =======================
function toggleCarrito() {
    const carritoEl = document.getElementById("carrito");
    const overlay = document.getElementById("overlay");
    if (carritoEl && overlay) {
        carritoEl.classList.toggle("activo");
        overlay.classList.toggle("activo");
    }
}

// =======================
// 🛒 AGREGAR AL CARRITO
// =======================
function agregarCarrito(boton) {
    const card = boton.closest(".card");
    if (!card) return;

    const nombre = card.querySelector("h3").innerText.trim();
    const precioTexto = card.querySelector(".price").innerText;
    const precio = parseFloat(precioTexto.replace(/[^\d.]/g, "")) || 0;

    const existente = carrito.find(p => p.nombre === nombre);

    if (existente) {
        existente.cantidad++;
    } else {
        carrito.push({ nombre, precio, cantidad: 1 });
    }

    guardarCarrito();
    mostrarToast("Producto agregado ✓");
    actualizarCarrito();
}

// =======================
// 🔄 ACTUALIZAR CARRITO
// =======================
function actualizarCarrito() {
    const lista = document.getElementById("lista-carrito");
    if (!lista) return;

    lista.innerHTML = "";

    let total = 0;
    let totalItems = 0;

    carrito.forEach((item, index) => {
        const subtotal = item.precio * item.cantidad;
        total += subtotal;
        totalItems += item.cantidad;

        const li = document.createElement("li");
        li.innerHTML = `
            <div class="item-carrito">
                <strong>${item.nombre}</strong><br>
                <span>$${item.precio.toFixed(2)} × ${item.cantidad}</span>
                <div class="cantidad-btns">
                    <button onclick="cambiarCantidad(${index}, -1)">–</button>
                    <span>${item.cantidad}</span>
                    <button onclick="cambiarCantidad(${index}, 1)">+</button>
                </div>
            </div>
        `;
        lista.appendChild(li);
    });

    document.getElementById("total").textContent = `Total: $${total.toFixed(2)}`;

    document.querySelectorAll("#contador, #contador-header, #contador-flotante").forEach(el => {
        if (el) el.textContent = totalItems;
    });
}

// =======================
// ➕➖ CAMBIAR CANTIDAD
// =======================
function cambiarCantidad(index, cambio) {
    if (!carrito[index]) return;
    carrito[index].cantidad += cambio;
    if (carrito[index].cantidad <= 0) carrito.splice(index, 1);
    guardarCarrito();
    actualizarCarrito();
}

// =======================
// 🧹 VACIAR CARRITO
// =======================
function vaciarCarrito() {
    if (confirm("¿Estás seguro de vaciar todo el carrito?")) {
        carrito = [];
        guardarCarrito();
        actualizarCarrito();
    }
}

// =======================
// 💾 GUARDAR EN LOCALSTORAGE
// =======================
function guardarCarrito() {
    localStorage.setItem("carrito", JSON.stringify(carrito));
}

// =======================
// 📲 ENVIAR PEDIDO POR WHATSAPP
// =======================
function enviarPedido() {
    const nombreCliente = document.getElementById("nombreCliente").value.trim();
    const horario = document.getElementById("horario").value;

    if (carrito.length === 0) return alert("Tu carrito está vacío");
    if (!nombreCliente) return alert("Por favor ingresa tu nombre");
    if (!horario) return alert("Por favor selecciona un horario de recolección");

    let mensaje = "🛒 *Nuevo Pedido - Frutería La Pasadita*%0A%0A";
    mensaje += `👤 *Nombre:* ${nombreCliente}%0A`;
    mensaje += `⏰ *Recolección:* ${horario}%0A%0A*Productos:*%0A`;

    let total = 0;
    carrito.forEach(item => {
        const subtotal = item.precio * item.cantidad;
        mensaje += `• ${item.nombre} ×${item.cantidad} = $${subtotal.toFixed(2)}%0A`;
        total += subtotal;
    });

    mensaje += `%0A💰 *Total:* $${total.toFixed(2)}%0A%0A`;
    mensaje += "✅ Confirma tu pedido por favor 🙌";

    const url = `https://wa.me/526463849069?text=${mensaje}`;
    window.open(url, "_blank");
}

// =======================
// 🔔 TOAST
// =======================
function mostrarToast(mensaje = "Producto agregado ✓") {
    const toast = document.getElementById("toast");
    if (!toast) return;

    toast.textContent = mensaje;
    toast.style.background = "#1e3a2f";
    toast.style.padding = "12px 20px";
    toast.classList.add("show");

    setTimeout(() => {
        toast.classList.remove("show");
    }, 2000);
}
