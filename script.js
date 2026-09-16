/* =====================================
   MATE FÁCIL - V2
   Lógica principal
===================================== */


/* =====================================
   CONFIGURACIÓN
===================================== */

const TOTAL_EJERCICIOS = 10;

const STORAGE_KEY = "mateFacilV2";


/* =====================================
   VARIABLES
===================================== */

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


/* =====================================
   PROGRESO DEL ALUMNO
===================================== */

let progreso = cargarProgreso();


/* =====================================
   DATOS DE LOS TEMAS
===================================== */

const temas = {

    signos: {

        titulo: "Reglas de los signos",

        explicacion: "Cuando multiplicamos o dividimos números con signos, debemos observar si los signos son iguales o diferentes. Signos iguales dan positivo. Signos diferentes dan negativo.",

        ejemplo: `
            <div class="formula">
                (+5) × (+2) = +10
            </div>

            <div class="formula">
                (+5) × (-2) = -10
            </div>

            <div class="formula">
                (-5) × (-2) = +10
            </div>
        `

    },


    suma: {

        titulo: "Suma y resta",

        explicacion: "Los números positivos pueden imaginarse como avanzar y los negativos como retroceder. Cuando sumamos números con signos, debemos observar hacia qué dirección nos estamos moviendo.",

        ejemplo: `
            <div class="formula">
                5 + 3 = 8
            </div>

            <div class="formula">
                5 + (-3) = 2
            </div>

            <div class="formula">
                -5 + 3 = -2
            </div>
        `

    },


    jerarquia: {

        titulo: "Jerarquía de operaciones",

        explicacion: "Cuando una operación tiene varias cuentas, no hacemos todo al mismo tiempo. Primero resolvemos los paréntesis, después las multiplicaciones y divisiones, y finalmente las sumas y restas.",

        ejemplo: `
            <div class="formula">
                2 + 3 × 4
            </div>

            <p>
                Primero hacemos la multiplicación:
            </p>

            <div class="formula">
                3 × 4 = 12
            </div>

            <div class="formula">
                2 + 12 = 14
            </div>
        `

    }

};


/* =====================================
   CARGAR PROGRESO
===================================== */

function cargarProgreso() {

    const guardado =
        localStorage.getItem(STORAGE_KEY);

    if (guardado) {

        try {

            return JSON.parse(guardado);

        } catch (error) {

            console.log(
                "No se pudo cargar el progreso."
            );

        }

    }


    return {

        signos: 0,

        suma: 0,

        jerarquia: 0

    };

}


/* =====================================
   GUARDAR PROGRESO
===================================== */

function guardarProgreso() {

    localStorage.setItem(

        STORAGE_KEY,

        JSON.stringify(progreso)

    );

}


/* =====================================
   ACTUALIZAR PANTALLA INICIAL
===================================== */

function actualizarProgresoPantalla() {

    const listaTemas = [
        "signos",
        "suma",
        "jerarquia"
    ];


    listaTemas.forEach(function(tema) {

        const valor = progreso[tema];


        const barra =
            document.getElementById(
                `barra-${tema}`
            );


        const texto =
            document.getElementById(
                `texto-progreso-${tema}`
            );


        barra.style.width =
            `${valor}%`;


        if (valor === 0) {

            texto.textContent =
                "Sin comenzar";

        } else if (valor < 60) {

            texto.textContent =
                `${valor}% de progreso`;

        } else if (valor < 85) {

            texto.textContent =
                `${valor}% · En progreso`;

        } else if (valor < 100) {

            texto.textContent =
                `${valor}% · Casi dominado`;

        } else {

            texto.textContent =
                "🏆 Tema dominado";

        }

    });

}


/* =====================================
   NIVEL RECOMENDADO
===================================== */

function obtenerNivelRecomendado(tema) {

    const avance =
        progreso[tema];


    if (avance < 60) {

        return "facil";

    }


    if (avance < 85) {

        return "medio";

    }


    return "dificil";

}


/* =====================================
   TEXTO DEL NIVEL
===================================== */

function textoNivel(nivel) {

    if (nivel === "facil") {

        return "🟢 Fácil";

    }


    if (nivel === "medio") {

        return "🟡 Medio";

    }


    return "🔴 Difícil";

}


/* =====================================
   ABRIR TEMA
===================================== */

function abrirTema(tema) {

    temaActual = tema;


    document.getElementById("inicio")
        .classList.add("oculto");


    document.getElementById("leccion")
        .classList.remove("oculto");


    document.getElementById("tituloTema")
        .textContent =
        temas[tema].titulo;


    document.getElementById("textoExplicacion")
        .textContent =
        temas[tema].explicacion;


    document.getElementById("ejemploTexto")
        .innerHTML =
        temas[tema].ejemplo;


    const recomendado =
        obtenerNivelRecomendado(tema);


    seleccionarNivel(recomendado);


    document.getElementById(
            "nivelRecomendado"
        ).textContent =
        textoNivel(recomendado) +
        " · Recomendado";

}


/* =====================================
   SELECCIONAR NIVEL
===================================== */

function seleccionarNivel(nivel) {

    nivelActual = nivel;


    document.getElementById(
        "nivelFacil"
    ).classList.remove("seleccionado");


    document.getElementById(
        "nivelMedio"
    ).classList.remove("seleccionado");


    document.getElementById(
        "nivelDificil"
    ).classList.remove("seleccionado");


    if (nivel === "facil") {

        document.getElementById(
            "nivelFacil"
        ).classList.add("seleccionado");

    }


    if (nivel === "medio") {

        document.getElementById(
            "nivelMedio"
        ).classList.add("seleccionado");

    }


    if (nivel === "dificil") {

        document.getElementById(
            "nivelDificil"
        ).classList.add("seleccionado");

    }

}


/* =====================================
   COMENZAR EJERCICIOS
===================================== */

function comenzarEjercicio() {

    ejercicioActual = 0;

    puntos = 0;

    correctas = 0;

    errores = 0;

    rachaActual = 0;

    mejorRacha = 0;


    document.getElementById("leccion")
        .classList.add("oculto");


    document.getElementById("ejercicio")
        .classList.remove("oculto");


    document.getElementById("nivelActual")
        .textContent =
        textoNivel(nivelActual);


    nuevoEjercicio();

}


/* =====================================
   NUEVO EJERCICIO
===================================== */

function nuevoEjercicio() {

    ejercicioActual++;


    if (
        ejercicioActual >
        TOTAL_EJERCICIOS
    ) {

        terminar();

        return;

    }


    document.getElementById("contador")
        .textContent =
        `Ejercicio ${ejercicioActual} de ${TOTAL_EJERCICIOS}`;


    document.getElementById("puntos")
        .textContent =
        `⭐ ${puntos} puntos`;


    limpiarEjercicio();


    generarPregunta();

}


/* =====================================
   LIMPIAR EJERCICIO
===================================== */

function limpiarEjercicio() {

    const respuesta =
        document.getElementById(
            "respuesta"
        );


    respuesta.value = "";

    respuesta.disabled = false;


    document.getElementById(
        "botonComprobar"
    ).disabled = false;


    document.getElementById(
        "mensaje"
    ).innerHTML = "";


    document.getElementById(
            "mensaje"
        ).className =
        "mensaje";


    document.getElementById(
        "opcionesAyuda"
    ).classList.add("oculto");


    document.getElementById(
        "ayudaTexto"
    ).innerHTML = "";


    document.getElementById(
        "siguiente"
    ).classList.add("oculto");

}


/* =====================================
   NÚMERO ALEATORIO
===================================== */

function numeroAleatorio(min, max) {

    return Math.floor(

        Math.random() *
        (max - min + 1)

    ) + min;

}


/* =====================================
   SIGNO ALEATORIO
===================================== */

function signoAleatorio() {

    return Math.random() < 0.5 ?
        1 :
        -1;

}


/* =====================================
   GENERAR PREGUNTA
===================================== */

function generarPregunta() {

    if (temaActual === "signos") {

        generarPreguntaSignos();

    } else if (temaActual === "suma") {

        generarPreguntaSuma();

    } else if (temaActual === "jerarquia") {

        generarPreguntaJerarquia();

    }

}


/* =====================================
   PREGUNTAS DE SIGNOS
===================================== */

function generarPreguntaSignos() {

    let a;

    let b;


    /* -------- FÁCIL -------- */

    if (nivelActual === "facil") {

        a =
            numeroAleatorio(1, 10) *
            signoAleatorio();

        b =
            numeroAleatorio(1, 10) *
            signoAleatorio();

    }


    /* -------- MEDIO -------- */
    else if (nivelActual === "medio") {

        a =
            numeroAleatorio(5, 25) *
            signoAleatorio();

        b =
            numeroAleatorio(2, 12) *
            signoAleatorio();

    }


    /* -------- DIFÍCIL -------- */
    else {

        a =
            numeroAleatorio(10, 50) *
            signoAleatorio();

        b =
            numeroAleatorio(5, 20) *
            signoAleatorio();

    }


    respuestaCorrecta =
        a * b;


    datosPregunta = {

        tipo: "signos",

        a: a,

        b: b,

        operacion: "×"

    };


    document.getElementById(
            "pregunta"
        ).textContent =
        `${mostrarNumero(a)} × ${mostrarNumero(b)}`;

}


/* =====================================
   PREGUNTAS DE SUMA
===================================== */

function generarPreguntaSuma() {

    let a;

    let b;


    if (nivelActual === "facil") {

        a =
            numeroAleatorio(1, 10) *
            signoAleatorio();

        b =
            numeroAleatorio(1, 10) *
            signoAleatorio();

    } else if (nivelActual === "medio") {

        a =
            numeroAleatorio(5, 30) *
            signoAleatorio();

        b =
            numeroAleatorio(5, 30) *
            signoAleatorio();

    } else {

        a =
            numeroAleatorio(10, 80) *
            signoAleatorio();

        b =
            numeroAleatorio(10, 80) *
            signoAleatorio();

    }


    respuestaCorrecta =
        a + b;


    datosPregunta = {

        tipo: "suma",

        a: a,

        b: b,

        operacion: "+"

    };


    document.getElementById(
            "pregunta"
        ).textContent =
        `${mostrarNumero(a)} + ${mostrarNumero(b)}`;

}


/* =====================================
   PREGUNTAS DE JERARQUÍA
===================================== */

function generarPreguntaJerarquia() {

    let a;

    let b;

    let c;


    if (nivelActual === "facil") {

        a =
            numeroAleatorio(1, 5);

        b =
            numeroAleatorio(1, 5);

        c =
            numeroAleatorio(1, 5);

    } else if (nivelActual === "medio") {

        a =
            numeroAleatorio(2, 15);

        b =
            numeroAleatorio(2, 10);

        c =
            numeroAleatorio(2, 8);

    } else {

        a =
            numeroAleatorio(5, 30);

        b =
            numeroAleatorio(2, 15);

        c =
            numeroAleatorio(2, 12);

    }


    respuestaCorrecta =
        a + (b * c);


    datosPregunta = {

        tipo: "jerarquia",

        a: a,

        b: b,

        c: c,

        operacion: "+"

    };


    document.getElementById(
            "pregunta"
        ).textContent =
        `${a} + ${b} × ${c}`;

}


/* =====================================
   MOSTRAR NÚMERO
===================================== */

function mostrarNumero(numero) {

    if (numero > 0) {

        return `+${numero}`;

    }


    return numero;

}


/* =====================================
   COMPROBAR RESPUESTA
===================================== */

function comprobarRespuesta() {

    const entrada =
        document.getElementById(
            "respuesta"
        ).value;


    if (entrada === "") {

        alert(
            "Escribe una respuesta."
        );

        return;

    }


    const respuestaUsuario =
        Number(entrada);


    if (
        respuestaUsuario ===
        respuestaCorrecta
    ) {

        respuestaCorrectaAccion();

    } else {

        respuestaIncorrectaAccion();

    }

}


/* =====================================
   RESPUESTA CORRECTA
===================================== */

function respuestaCorrectaAccion() {

    correctas++;

    rachaActual++;


    if (
        rachaActual >
        mejorRacha
    ) {

        mejorRacha =
            rachaActual;

    }


    /* Puntos */

    let puntosEjercicio = 10;


    if (nivelActual === "medio") {

        puntosEjercicio = 12;

    }


    if (nivelActual === "dificil") {

        puntosEjercicio = 15;

    }


    puntos += puntosEjercicio;


    document.getElementById(
        "respuesta"
    ).disabled = true;


    document.getElementById(
        "botonComprobar"
    ).disabled = true;


    document.getElementById(
            "mensaje"
        ).className =
        "mensaje correcto";


    document.getElementById(
            "mensaje"
        ).innerHTML =
        `✅ ¡Correcto! Muy bien. 🔥 Racha de ${rachaActual}`;


    document.getElementById(
        "opcionesAyuda"
    ).classList.add("oculto");


    document.getElementById(
        "siguiente"
    ).classList.remove("oculto");


    document.getElementById(
            "puntos"
        ).textContent =
        `⭐ ${puntos} puntos`;

}


/* =====================================
   RESPUESTA INCORRECTA
===================================== */

function respuestaIncorrectaAccion() {

    errores++;

    rachaActual = 0;


    document.getElementById(
            "mensaje"
        ).className =
        "mensaje incorrecto";


    document.getElementById(
            "mensaje"
        ).innerHTML =
        "❌ Todavía no. Revisa la pista o mira cómo se resuelve paso a paso.";


    document.getElementById(
        "opcionesAyuda"
    ).classList.remove("oculto");

}


/* =====================================
   PISTA
===================================== */

function mostrarPista() {

    let html = "";


    if (
        datosPregunta.tipo ===
        "signos"
    ) {

        const a =
            datosPregunta.a;

        const b =
            datosPregunta.b;


        const signoA =
            a < 0 ?
            "negativo" :
            "positivo";


        const signoB =
            b < 0 ?
            "negativo" :
            "positivo";


        html = `

            <div class="paso">
                💡 El primer número es
                <strong>${signoA}</strong>.
            </div>

            <div class="paso">
                💡 El segundo número es
                <strong>${signoB}</strong>.
            </div>

            <div class="paso">
                💡 Ahora recuerda:
                signos iguales = positivo.
                Signos diferentes = negativo.
            </div>

        `;

    } else if (
        datosPregunta.tipo ===
        "suma"
    ) {

        html = `

            <div class="paso">
                💡 Observa primero los signos.
            </div>

            <div class="paso">
                💡 Si tienen el mismo signo,
                los valores se suman.
            </div>

            <div class="paso">
                💡 Si tienen signos diferentes,
                puedes calcular la diferencia.
            </div>

        `;

    } else if (
        datosPregunta.tipo ===
        "jerarquia"
    ) {

        html = `

            <div class="paso">
                💡 No resuelvas la operación
                simplemente de izquierda a derecha.
            </div>

            <div class="paso">
                💡 Primero busca la multiplicación.
            </div>

            <div class="paso">
                💡 Después realiza la suma.
            </div>

        `;

    }


    document.getElementById(
        "ayudaTexto"
    ).innerHTML = html;

}


/* =====================================
   SOLUCIÓN PASO A PASO
===================================== */

function mostrarSolucion() {

    let html = "";


    if (
        datosPregunta.tipo ===
        "signos"
    ) {

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


        const signosIguales =
            (a > 0 && b > 0) ||
            (a < 0 && b < 0);


        const resultadoSigno =
            signosIguales ?
            "positivo" :
            "negativo";


        html = `

            <div class="paso">
                1️⃣ Tenemos:
                <strong>
                    ${mostrarNumero(a)}
                    ×
                    ${mostrarNumero(b)}
                </strong>
            </div>

            <div class="paso">
                2️⃣ Multiplicamos los valores:
                ${valorA} × ${valorB}
                =
                <strong>${multiplicacion}</strong>
            </div>

            <div class="paso">
                3️⃣ Los signos son
                ${signosIguales
                    ? "iguales"
                    : "diferentes"}.
            </div>

            <div class="paso">
                4️⃣ Por lo tanto,
                el resultado es
                <strong>${resultadoSigno}</strong>.
            </div>

            <div class="paso">
                5️⃣ Resultado final:
                <strong>${respuestaCorrecta}</strong>
            </div>

        `;

    } else if (
        datosPregunta.tipo ===
        "suma"
    ) {

        const a =
            datosPregunta.a;

        const b =
            datosPregunta.b;


        if (
            (a >= 0 && b >= 0) ||
            (a < 0 && b < 0)
        ) {

            html = `

                <div class="paso">
                    1️⃣ Tenemos:
                    <strong>
                        ${mostrarNumero(a)}
                        +
                        ${mostrarNumero(b)}
                    </strong>
                </div>

                <div class="paso">
                    2️⃣ Los dos números
                    tienen el mismo signo.
                </div>

                <div class="paso">
                    3️⃣ Sumamos sus valores:
                    ${Math.abs(a)}
                    +
                    ${Math.abs(b)}
                    =
                    ${Math.abs(respuestaCorrecta)}
                </div>

                <div class="paso">
                    4️⃣ Conservamos el signo.
                </div>

                <div class="paso">
                    5️⃣ Resultado:
                    <strong>${respuestaCorrecta}</strong>
                </div>

            `;

        } else {

            html = `

                <div class="paso">
                    1️⃣ Tenemos:
                    <strong>
                        ${mostrarNumero(a)}
                        +
                        ${mostrarNumero(b)}
                    </strong>
                </div>

                <div class="paso">
                    2️⃣ Los signos son diferentes.
                </div>

                <div class="paso">
                    3️⃣ Restamos el valor menor
                    al valor mayor:
                    ${Math.abs(a)}
                    y
                    ${Math.abs(b)}
                </div>

                <div class="paso">
                    4️⃣ El signo del resultado
                    corresponde al número
                    con mayor valor absoluto.
                </div>

                <div class="paso">
                    5️⃣ Resultado:
                    <strong>${respuestaCorrecta}</strong>
                </div>

            `;

        }

    } else if (
        datosPregunta.tipo ===
        "jerarquia"
    ) {

        const a =
            datosPregunta.a;

        const b =
            datosPregunta.b;

        const c =
            datosPregunta.c;


        const multiplicacion =
            b * c;


        html = `

            <div class="paso">
                1️⃣ Tenemos:
                <strong>
                    ${a} + ${b} × ${c}
                </strong>
            </div>

            <div class="paso">
                2️⃣ Primero hacemos
                la multiplicación:
                ${b} × ${c}
                =
                <strong>${multiplicacion}</strong>
            </div>

            <div class="paso">
                3️⃣ Ahora queda:
                ${a} + ${multiplicacion}
            </div>

            <div class="paso">
                4️⃣ Hacemos la suma.
            </div>

            <div class="paso">
                5️⃣ Resultado:
                <strong>${respuestaCorrecta}</strong>
            </div>

        `;

    }


    document.getElementById(
        "ayudaTexto"
    ).innerHTML = html;

}


/* =====================================
   TERMINAR TEMA
===================================== */

function terminar() {

    const porcentaje =
        Math.round(
            (correctas /
                TOTAL_EJERCICIOS) *
            100
        );


    /*
       Actualizamos el progreso.

       Si el alumno terminó el nivel
       con al menos 70%, avanzamos.
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
                progreso[temaActual] +
                aumento
            );


        guardarProgreso();

    }


    mostrarResultado(
        porcentaje
    );

}


/* =====================================
   MOSTRAR RESULTADO
===================================== */

function mostrarResultado(
    porcentaje
) {

    document.getElementById(
        "ejercicio"
    ).classList.add("oculto");


    document.getElementById(
        "resultado"
    ).classList.remove("oculto");


    document.getElementById(
            "resultadoTema"
        ).textContent =
        temas[temaActual].titulo;


    document.getElementById(
            "resultadoPuntos"
        ).textContent =
        Math.min(
            100,
            Math.round(
                (puntos /
                    (TOTAL_EJERCICIOS *
                        (nivelActual === "dificil" ?
                            15 :
                            nivelActual === "medio" ?
                            12 :
                            10))) *
                100
            )
        );


    document.getElementById(
            "resultadoCorrectas"
        ).textContent =
        correctas;


    document.getElementById(
            "resultadoEjercicios"
        ).textContent =
        TOTAL_EJERCICIOS;


    document.getElementById(
            "resultadoRacha"
        ).textContent =
        `🔥 ${mejorRacha}`;


    document.querySelector(
            ".resultado-nivel"
        ).textContent =
        textoNivel(nivelActual)
        .toUpperCase();


    let mensaje = "";


    if (porcentaje === 100) {

        mensaje =
            "🏆 ¡Perfecto! Dominaste este ejercicio.";

    } else if (porcentaje >= 90) {

        mensaje =
            "🎉 ¡Excelente trabajo!";

    } else if (porcentaje >= 70) {

        mensaje =
            "👏 ¡Muy bien! Sigue practicando.";

    } else {

        mensaje =
            "💪 Buen intento. Practicar es parte del aprendizaje.";

    }


    document.getElementById(
            "mensajeFinal"
        ).textContent =
        mensaje;


    actualizarProgresoPantalla();

}


/* =====================================
   DESCARGAR LOGRO
===================================== */

function descargarLogro() {

    /*
       Creamos una imagen usando Canvas.

       No necesitamos ninguna biblioteca
       externa ni servidor.
    */


    const canvas =
        document.createElement(
            "canvas"
        );


    canvas.width = 1200;

    canvas.height = 700;


    const ctx =
        canvas.getContext("2d");


    /* Fondo */

    ctx.fillStyle = "#f4f6f8";

    ctx.fillRect(
        0,
        0,
        canvas.width,
        canvas.height
    );


    /* Tarjeta */

    ctx.fillStyle = "#ffffff";

    ctx.fillRect(
        60,
        60,
        1080,
        580
    );


    /* Borde */

    ctx.strokeStyle = "#dddddd";

    ctx.lineWidth = 3;

    ctx.strokeRect(
        60,
        60,
        1080,
        580
    );


    /* Título */

    ctx.fillStyle = "#222222";

    ctx.textAlign = "center";

    ctx.font =
        "bold 48px Arial";


    ctx.fillText(
        "🎉 ¡TEMA COMPLETADO!",
        600,
        145
    );


    /* Tema */

    ctx.font =
        "bold 32px Arial";


    ctx.fillText(
        temas[temaActual].titulo,
        600,
        200
    );


    /* Puntuación */

    const puntuacion =
        document.getElementById(
            "resultadoPuntos"
        ).textContent;


    ctx.font =
        "bold 100px Arial";


    ctx.fillText(
        `${puntuacion} / 100`,
        600,
        330
    );


    /* Nivel */

    ctx.font =
        "bold 30px Arial";


    ctx.fillText(
        textoNivel(nivelActual),
        600,
        390
    );


    /* Estadísticas */

    ctx.font =
        "24px Arial";


    ctx.fillText(
        `✓ ${correctas} correctas   |   ${TOTAL_EJERCICIOS} ejercicios   |   🔥 ${mejorRacha} mejor racha`,
        600,
        455
    );


    /* Mensaje */

    ctx.font =
        "bold 27px Arial";


    ctx.fillText(
        "¡Sigue aprendiendo y superando nuevos retos!",
        600,
        530
    );


    /* Marca */

    ctx.font =
        "bold 22px Arial";


    ctx.fillStyle = "#666666";


    ctx.fillText(
        "📘 MATE FÁCIL",
        600,
        590
    );


    /* Descargar */

    const enlace =
        document.createElement("a");


    enlace.download =
        "mi-logro-mate-facil.png";


    enlace.href =
        canvas.toDataURL(
            "image/png"
        );


    enlace.click();

}


/* =====================================
   VOLVER AL INICIO
===================================== */

function volverInicio() {

    document.getElementById(
        "leccion"
    ).classList.add("oculto");


    document.getElementById(
        "ejercicio"
    ).classList.add("oculto");


    document.getElementById(
        "resultado"
    ).classList.add("oculto");


    document.getElementById(
        "inicio"
    ).classList.remove("oculto");


    actualizarProgresoPantalla();

}


/* =====================================
   INICIAR
===================================== */

actualizarProgresoPantalla();