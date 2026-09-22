const TOTAL_EJERCICIOS = 10;

const STORAGE_KEY = "mateFacilV3";

let temaActual = "";
let nivelActual = "facil";

let ejercicioActual = 0;

let puntos = 0;
let correctas = 0;

let rachaActual = 0;
let mejorRacha = 0;

let errores = 0;

let respuestaCorrecta = 0;

let datosPregunta = {};


let progreso =
    JSON.parse(localStorage.getItem(STORAGE_KEY)) || {

        signos: 0,
        suma: 0,
        jerarquia: 0

    };


// =====================================================
// TEMAS
// =====================================================

const temas = {

    signos: {

        titulo: "Reglas de los signos",

        explicacion: "Cuando multiplicamos o dividimos números con signos, debemos observar los signos antes de hacer la operación. Signos iguales producen un resultado positivo. Signos diferentes producen un resultado negativo.",

        ejemplo: "(-6) × (-4) = +24"

    },


    suma: {

        titulo: "Suma y resta de números enteros",

        explicacion: "Si los números tienen el mismo signo, sumamos sus valores y conservamos el signo. Si tienen signos diferentes, restamos sus valores y conservamos el signo del número con mayor valor absoluto.",

        ejemplo: "(-8) + 5 = -3"

    },


    jerarquia: {

        titulo: "Jerarquía de operaciones",

        explicacion: "Cuando tenemos varias operaciones debemos respetar un orden. Primero resolvemos multiplicaciones y divisiones. Después resolvemos sumas y restas.",

        ejemplo: "4 + 3 × 2 = 10"

    }

};


// =====================================================
// INICIAR TEMA
// =====================================================

function iniciarTema(tema) {

    temaActual = tema;

    document.getElementById("inicio").style.display = "none";

    document.getElementById("leccion").style.display = "block";

    document.getElementById("ejercicio").style.display = "none";

    document.getElementById("resultado").style.display = "none";


    const datos = temas[tema];


    document.getElementById("tituloLeccion").textContent =
        datos.titulo;


    document.getElementById("explicacion").textContent =
        datos.explicacion;


    document.getElementById("ejemplo").textContent =
        datos.ejemplo;


    const recomendado =
        obtenerNivelRecomendado(tema);


    document.getElementById("nivelRecomendado").textContent =
        "Nivel recomendado: " +
        nombreNivel(recomendado);


    seleccionarNivel(recomendado);
}


// =====================================================
// NIVEL RECOMENDADO
// =====================================================

function obtenerNivelRecomendado(tema) {

    const avance = progreso[tema] || 0;


    if (avance < 60) {
        return "facil";
    }


    if (avance < 85) {
        return "medio";
    }


    return "dificil";
}


// =====================================================
// NOMBRE DEL NIVEL
// =====================================================

function nombreNivel(nivel) {

    if (nivel === "facil") {
        return "Fácil";
    }


    if (nivel === "medio") {
        return "Medio";
    }


    if (nivel === "dificil") {
        return "Difícil";
    }


    return nivel;
}


// =====================================================
// SELECCIONAR NIVEL
// =====================================================

function seleccionarNivel(nivel) {

    nivelActual = nivel;


    document.querySelectorAll(".nivel").forEach(boton => {

        boton.classList.remove("seleccionado");

    });


    const boton =
        document.getElementById("nivel-" + nivel);


    if (boton) {

        boton.classList.add("seleccionado");

    }
}


// =====================================================
// COMENZAR
// =====================================================

function comenzarEjercicios() {

    ejercicioActual = 0;

    puntos = 0;

    correctas = 0;

    rachaActual = 0;

    mejorRacha = 0;

    errores = 0;


    document.getElementById("leccion").style.display = "none";

    document.getElementById("ejercicio").style.display = "block";

    document.getElementById("resultado").style.display = "none";


    siguienteEjercicio();
}


// =====================================================
// SIGUIENTE EJERCICIO
// =====================================================

function siguienteEjercicio() {

    if (ejercicioActual >= TOTAL_EJERCICIOS) {

        terminar();

        return;
    }


    ejercicioActual++;


    document.getElementById("numeroEjercicio").textContent =
        ejercicioActual + " / " + TOTAL_EJERCICIOS;


    document.getElementById("puntos").textContent =
        puntos;


    document.getElementById("nivelActual").textContent =
        nombreNivel(nivelActual);


    document.getElementById("mensaje").textContent = "";


    const input =
        document.getElementById("respuesta");


    input.value = "";

    input.disabled = false;


    document.getElementById("btnComprobar").disabled = false;


    document.getElementById("btnSiguiente").style.display =
        "none";


    document.getElementById("ayuda").style.display =
        "none";


    document.getElementById("solucion").style.display =
        "none";


    generarPregunta();


    document.getElementById("pregunta").textContent =
        datosPregunta.texto;


    respuestaCorrecta =
        datosPregunta.resultado;


    input.focus();
}


// =====================================================
// GENERAR PREGUNTA
// =====================================================

function generarPregunta() {

    if (temaActual === "signos") {

        generarPreguntaSignos();

        return;
    }


    if (temaActual === "suma") {

        generarPreguntaSuma();

        return;
    }


    if (temaActual === "jerarquia") {

        generarPreguntaJerarquia();

        return;
    }
}


// =====================================================
// LEY DE LOS SIGNOS
// =====================================================

function generarPreguntaSignos() {

    let a;
    let b;


    // FÁCIL
    if (nivelActual === "facil") {

        a = numeroAleatorio(1, 10);

        b = numeroAleatorio(1, 10);

    }


    // MEDIO
    else if (nivelActual === "medio") {

        a = numeroAleatorio(5, 30);

        b = numeroAleatorio(2, 15);

    }


    // DIFÍCIL
    else {

        a = numeroAleatorio(10, 50);

        b = numeroAleatorio(5, 20);

    }


    const numeroA =
        a * signoAleatorio();


    const numeroB =
        b * signoAleatorio();


    /*
        IMPORTANTE:

        El resultado se calcula directamente
        con los números que se muestran.
    */

    const resultado =
        numeroA * numeroB;


    datosPregunta = {

        tipo: "signos",

        a: numeroA,

        b: numeroB,

        resultado: resultado,

        texto: `${formatearNumero(numeroA)} × ${formatearNumero(numeroB)} = ?`

    };


    // Comprobación interna
    console.assert(
        numeroA * numeroB === resultado,
        "Error en cálculo de signos"
    );
}


// =====================================================
// SUMA
// =====================================================

function generarPreguntaSuma() {

    let a;
    let b;


    if (nivelActual === "facil") {

        a = numeroAleatorio(1, 10);

        b = numeroAleatorio(1, 10);

    } else if (nivelActual === "medio") {

        a = numeroAleatorio(5, 30);

        b = numeroAleatorio(5, 30);

    } else {

        a = numeroAleatorio(10, 80);

        b = numeroAleatorio(10, 80);

    }


    a *= signoAleatorio();

    b *= signoAleatorio();


    const resultado =
        a + b;


    datosPregunta = {

        tipo: "suma",

        a: a,

        b: b,

        resultado: resultado,

        texto: `${formatearNumero(a)} + ${formatearNumero(b)} = ?`

    };
}


// =====================================================
// JERARQUÍA
// =====================================================

function generarPreguntaJerarquia() {

    let a;
    let b;
    let c;


    if (nivelActual === "facil") {

        a = numeroAleatorio(1, 5);

        b = numeroAleatorio(1, 5);

        c = numeroAleatorio(1, 5);

    } else if (nivelActual === "medio") {

        a = numeroAleatorio(2, 15);

        b = numeroAleatorio(2, 10);

        c = numeroAleatorio(2, 8);

    } else {

        a = numeroAleatorio(5, 30);

        b = numeroAleatorio(2, 15);

        c = numeroAleatorio(2, 12);

    }


    const multiplicacion =
        b * c;


    const resultado =
        a + multiplicacion;


    datosPregunta = {

        tipo: "jerarquia",

        a: a,

        b: b,

        c: c,

        resultado: resultado,

        texto: `${a} + ${b} × ${c} = ?`

    };
}


// =====================================================
// COMPROBAR
// =====================================================

function comprobarRespuesta() {

    const input =
        document.getElementById("respuesta");


    if (input.value.trim() === "") {

        document.getElementById("mensaje").textContent =
            "Escribe una respuesta.";

        return;
    }


    const respuestaUsuario =
        Number(input.value);


    /*
        COMPARACIÓN EXACTA
    */

    if (respuestaUsuario === respuestaCorrecta) {

        correctas++;

        rachaActual++;


        if (rachaActual > mejorRacha) {

            mejorRacha =
                rachaActual;

        }


        let puntosPregunta = 10;


        if (nivelActual === "medio") {

            puntosPregunta = 12;

        }


        if (nivelActual === "dificil") {

            puntosPregunta = 15;

        }


        puntos += puntosPregunta;


        document.getElementById("mensaje").textContent =
            "¡Correcto! ✓";


        input.disabled = true;


        document.getElementById("btnComprobar").disabled =
            true;


        document.getElementById("btnSiguiente").style.display =
            "inline-block";


    } else {

        errores++;

        rachaActual = 0;


        document.getElementById("mensaje").textContent =
            "No es correcto. Revisa tu procedimiento e inténtalo otra vez.";

        input.select();
    }
}


// =====================================================
// PISTA
// =====================================================

function mostrarAyuda() {

    const ayuda =
        document.getElementById("ayuda");


    ayuda.style.display =
        "block";


    if (temaActual === "signos") {

        ayuda.textContent =
            "Primero determina el signo del resultado. Después multiplica los números sin los signos.";

    } else if (temaActual === "suma") {

        ayuda.textContent =
            "Observa primero si los números tienen el mismo signo o signos diferentes.";

    } else if (temaActual === "jerarquia") {

        ayuda.textContent =
            "Recuerda: primero multiplicaciones y divisiones. Después sumas y restas.";

    }
}


// =====================================================
// SOLUCIÓN
// =====================================================

function mostrarSolucion() {

    const solucion =
        document.getElementById("solucion");


    solucion.style.display =
        "block";


    if (temaActual === "signos") {

        const a =
            datosPregunta.a;


        const b =
            datosPregunta.b;


        const valorA =
            Math.abs(a);


        const valorB =
            Math.abs(b);


        const multiplicacion =
            valorA * valorB;


        let regla;


        if (
            (a < 0 && b < 0) ||
            (a > 0 && b > 0)
        ) {

            regla = "Los signos son iguales → resultado positivo.";

        } else {

            regla = "Los signos son diferentes → resultado negativo.";

        }


        solucion.innerHTML = `

            <strong>Paso 1:</strong><br>

            ${regla}

            <br><br>

            <strong>Paso 2:</strong><br>

            Multiplicamos los valores sin los signos:

            <br>

            ${valorA} × ${valorB} = ${multiplicacion}

            <br><br>

            <strong>Paso 3:</strong><br>

            Aplicamos el signo:

            <br>

            ${formatearNumero(a)}
            ×
            ${formatearNumero(b)}
            =
            <strong>
                ${formatearNumero(datosPregunta.resultado)}
            </strong>

        `;

        return;
    }


    if (temaActual === "suma") {

        const a =
            datosPregunta.a;


        const b =
            datosPregunta.b;


        solucion.innerHTML = `

            <strong>Paso 1:</strong><br>

            Observamos los signos.

            <br><br>

            <strong>Paso 2:</strong><br>

            Realizamos la operación respetando los signos.

            <br><br>

            <strong>Resultado:</strong><br>

            ${formatearNumero(a)}
            +
            ${formatearNumero(b)}
            =
            <strong>
                ${formatearNumero(datosPregunta.resultado)}
            </strong>

        `;

        return;
    }


    if (temaActual === "jerarquia") {

        const a =
            datosPregunta.a;


        const b =
            datosPregunta.b;


        const c =
            datosPregunta.c;


        const multiplicacion =
            b * c;


        solucion.innerHTML = `

            <strong>Paso 1:</strong><br>

            Primero hacemos la multiplicación:

            <br>

            ${b} × ${c} = ${multiplicacion}

            <br><br>

            <strong>Paso 2:</strong><br>

            Ahora hacemos la suma:

            <br>

            ${a} + ${multiplicacion}

            =

            <strong>
                ${datosPregunta.resultado}
            </strong>

        `;
    }
}


// =====================================================
// TERMINAR
// =====================================================

function terminar() {

    const porcentaje =
        Math.round(
            (correctas / TOTAL_EJERCICIOS) * 100
        );


    /*
        Se considera avance si consigue
        al menos 70%.
    */

    if (porcentaje >= 70) {

        let aumento = 20;


        if (nivelActual === "medio") {

            aumento = 25;

        }


        if (nivelActual === "dificil") {

            aumento = 30;

        }


        progreso[temaActual] =
            Math.min(
                100,
                progreso[temaActual] + aumento
            );


        localStorage.setItem(
            STORAGE_KEY,
            JSON.stringify(progreso)
        );
    }


    document.getElementById("ejercicio").style.display =
        "none";


    document.getElementById("resultado").style.display =
        "block";


    document.getElementById("resultadoTema").textContent =
        temas[temaActual].titulo;


    document.getElementById("resultadoNivel").textContent =
        nombreNivel(nivelActual);


    document.getElementById("resultadoCorrectas").textContent =
        correctas;


    document.getElementById("resultadoEjercicios").textContent =
        TOTAL_EJERCICIOS;


    document.getElementById("resultadoRacha").textContent =
        mejorRacha;


    document.getElementById("resultadoPuntos").textContent =
        porcentaje + "%";
}


// =====================================================
// VOLVER AL INICIO
// =====================================================

function volverInicio() {

    document.getElementById("inicio").style.display =
        "block";


    document.getElementById("leccion").style.display =
        "none";


    document.getElementById("ejercicio").style.display =
        "none";


    document.getElementById("resultado").style.display =
        "none";


    actualizarProgreso();
}


// =====================================================
// ACTUALIZAR PROGRESO
// =====================================================

function actualizarProgreso() {

    for (const tema in progreso) {

        const barra =
            document.getElementById(
                "progreso-" + tema
            );


        const texto =
            document.getElementById(
                "porcentaje-" + tema
            );


        if (barra) {

            barra.style.width =
                progreso[tema] + "%";

        }


        if (texto) {

            texto.textContent =
                progreso[tema] + "%";

        }
    }
}


// =====================================================
// NÚMERO ALEATORIO
// =====================================================

function numeroAleatorio(min, max) {

    return Math.floor(
        Math.random() *
        (max - min + 1)
    ) + min;
}


// =====================================================
// SIGNO ALEATORIO
// =====================================================

function signoAleatorio() {

    return Math.random() < 0.5 ?
        -1 :
        1;
}


// =====================================================
// FORMATEAR NÚMERO
// =====================================================

function formatearNumero(numero) {

    if (numero > 0) {

        return "+" + numero;

    }


    return numero.toString();
}


// =====================================================
// DESCARGAR LOGRO
// =====================================================

function descargarLogro() {

    const canvas =
        document.createElement("canvas");


    canvas.width = 1200;

    canvas.height = 700;


    const ctx =
        canvas.getContext("2d");


    ctx.fillStyle =
        "#ffffff";


    ctx.fillRect(
        0,
        0,
        canvas.width,
        canvas.height
    );


    ctx.strokeStyle =
        "#222222";


    ctx.lineWidth =
        8;


    ctx.strokeRect(
        30,
        30,
        canvas.width - 60,
        canvas.height - 60
    );


    ctx.textAlign =
        "center";


    ctx.fillStyle =
        "#222222";


    ctx.font =
        "bold 60px Arial";


    ctx.fillText(
        "¡LOGRO CONSEGUIDO!",
        600,
        150
    );


    ctx.font =
        "bold 42px Arial";


    ctx.fillText(
        temas[temaActual].titulo,
        600,
        230
    );


    ctx.font =
        "32px Arial";


    ctx.fillText(
        "Nivel: " +
        nombreNivel(nivelActual),
        600,
        310
    );


    ctx.fillText(
        `Aciertos: ${correctas} / ${TOTAL_EJERCICIOS}`,
        600,
        370
    );


    ctx.fillText(
        `Puntuación: ${Math.round(
            (correctas / TOTAL_EJERCICIOS) * 100
        )}%`,
        600,
        430
    );


    ctx.fillText(
        `Mejor racha: ${mejorRacha}`,
        600,
        490
    );


    ctx.font =
        "24px Arial";


    ctx.fillText(
        "Mate Fácil — V3.0",
        600,
        590
    );


    const enlace =
        document.createElement("a");


    enlace.download =
        "logro-mate-facil-v3.png";


    enlace.href =
        canvas.toDataURL("image/png");


    enlace.click();
}


// =====================================================
// INICIAR
// =====================================================

actualizarProgreso();
