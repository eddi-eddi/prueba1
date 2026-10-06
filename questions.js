// ============================================================
// MATE FÁCIL V3.3
// questions.js
// Generador de preguntas matemáticas
// ============================================================


// ============================================================
// UTILIDADES GENERALES
// ============================================================

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomChoice(array) {
    return array[Math.floor(Math.random() * array.length)];
}

function randomNonZero(min, max) {
    let value = 0;

    while (value === 0) {
        value = randomInt(min, max);
    }

    return value;
}


// ============================================================
// MÁXIMO COMÚN DIVISOR
// ============================================================

function gcd(a, b) {
    a = Math.abs(a);
    b = Math.abs(b);

    while (b !== 0) {
        const temp = b;
        b = a % b;
        a = temp;
    }

    return a || 1;
}


// ============================================================
// FRACCIONES
// ============================================================

function simplifyFraction(numerator, denominator) {
    if (denominator === 0) {
        return {
            numerator: 0,
            denominator: 1
        };
    }

    if (denominator < 0) {
        numerator *= -1;
        denominator *= -1;
    }

    const divisor = gcd(numerator, denominator);

    return {
        numerator: numerator / divisor,
        denominator: denominator / divisor
    };
}


function fractionToString(numerator, denominator) {
    const fraction = simplifyFraction(numerator, denominator);

    if (fraction.denominator === 1) {
        return String(fraction.numerator);
    }

    return `${fraction.numerator}/${fraction.denominator}`;
}


function parseFraction(value) {
    if (typeof value === "number") {
        return {
            numerator: value,
            denominator: 1
        };
    }

    if (typeof value !== "string") {
        return null;
    }

    const text = value.trim().replace(",", ".");

    if (text.includes("/")) {
        const parts = text.split("/");

        if (parts.length !== 2) {
            return null;
        }

        const numerator = Number(parts[0].trim());
        const denominator = Number(parts[1].trim());

        if (!Number.isFinite(numerator) ||
            !Number.isFinite(denominator) ||
            denominator === 0
        ) {
            return null;
        }

        return simplifyFraction(numerator, denominator);
    }

    const number = Number(text);

    if (!Number.isFinite(number)) {
        return null;
    }

    return {
        numerator: number,
        denominator: 1
    };
}


function fractionsEqual(a, b) {
    const fractionA = parseFraction(a);
    const fractionB = parseFraction(b);

    if (!fractionA || !fractionB) {
        return false;
    }

    return (
        fractionA.numerator * fractionB.denominator ===
        fractionB.numerator * fractionA.denominator
    );
}


// ============================================================
// COMPARACIÓN NUMÉRICA
// ============================================================

function numbersEqual(a, b, tolerance = 0.01) {
    const numberA = Number(a);
    const numberB = Number(b);

    if (!Number.isFinite(numberA) || !Number.isFinite(numberB)) {
        return false;
    }

    return Math.abs(numberA - numberB) <= tolerance;
}


// ============================================================
// VALIDACIÓN GENERAL
// ============================================================

function validateQuestionAnswer(question, userAnswer) {
    if (!question) {
        return false;
    }

    if (
        question.answerType === "fraction" ||
        typeof question.answer === "string" &&
        question.answer.includes("/")
    ) {
        return fractionsEqual(userAnswer, question.answer);
    }

    return numbersEqual(
        userAnswer,
        question.answer,
        question.tolerance || 0.01
    );
}


// ============================================================
// OPERACIONES
// ============================================================

function operacionesFacil() {
    const operations = [{
            symbol: "+",
            calculate: (a, b) => a + b
        },
        {
            symbol: "-",
            calculate: (a, b) => a - b
        },
        {
            symbol: "×",
            calculate: (a, b) => a * b
        }
    ];

    const operation = randomChoice(operations);

    let a;
    let b;

    if (operation.symbol === "×") {
        a = randomInt(2, 12);
        b = randomInt(2, 12);
    } else {
        a = randomInt(5, 100);
        b = randomInt(1, 50);
    }

    const answer = operation.calculate(a, b);

    return {
        topic: "operaciones",
        difficulty: "facil",
        question: `¿Cuánto es ${a} ${operation.symbol} ${b}?`,
        answer,
        tolerance: 0,
        explanation: `Realizamos la operación ${a} ${operation.symbol} ${b}. ` +
            `El resultado es ${answer}.`
    };
}


function operacionesMedio() {
    const a = randomInt(10, 100);
    const b = randomInt(2, 20);
    const c = randomInt(2, 20);

    const type = randomChoice(["add", "subtract", "multiply"]);

    let question;
    let answer;
    let explanation;

    if (type === "add") {
        question = `¿Cuánto es ${a} + ${b} × ${c}?`;
        answer = a + b * c;

        explanation =
            `Primero resolvemos la multiplicación: ${b} × ${c} = ${b * c}. ` +
            `Después sumamos ${a}: ${a} + ${b * c} = ${answer}.`;
    }

    if (type === "subtract") {
        question = `¿Cuánto es ${a} - ${b} × ${c}?`;
        answer = a - b * c;

        explanation =
            `Primero resolvemos la multiplicación: ${b} × ${c} = ${b * c}. ` +
            `Después: ${a} - ${b * c} = ${answer}.`;
    }

    if (type === "multiply") {
        question = `¿Cuánto es (${a} + ${b}) × ${c}?`;
        answer = (a + b) * c;

        explanation =
            `Primero resolvemos el paréntesis: ${a} + ${b} = ${a + b}. ` +
            `Después multiplicamos: ${a + b} × ${c} = ${answer}.`;
    }

    return {
        topic: "operaciones",
        difficulty: "medio",
        question,
        answer,
        tolerance: 0,
        explanation
    };
}


function operacionesDificil() {
    const a = randomInt(10, 50);
    const b = randomInt(2, 15);
    const c = randomInt(2, 10);
    const d = randomInt(2, 10);

    const answer = (a + b) * c - d;

    return {
        topic: "operaciones",
        difficulty: "dificil",
        question: `¿Cuánto es (${a} + ${b}) × ${c} - ${d}?`,
        answer,
        tolerance: 0,
        explanation: `Primero resolvemos el paréntesis: ${a} + ${b} = ${a + b}. ` +
            `Después multiplicamos: ${a + b} × ${c} = ${(a + b) * c}. ` +
            `Finalmente restamos ${d}: ${answer}.`
    };
}


// ============================================================
// FRACCIONES
// ============================================================

function fraccionesFacil() {
    let denominator = randomInt(2, 10);
    let numerator = randomInt(1, denominator - 1);

    const fraction = simplifyFraction(numerator, denominator);

    return {
        topic: "fracciones",
        difficulty: "facil",
        question: `Simplifica la fracción ${numerator}/${denominator}.`,
        answer: fractionToString(
            fraction.numerator,
            fraction.denominator
        ),
        answerType: "fraction",
        explanation: `Buscamos el máximo común divisor entre ${numerator} y ${denominator}. ` +
            `Después dividimos numerador y denominador entre ese número para simplificar la fracción.`
    };
}


function fraccionesMedio() {
    const d1 = randomInt(2, 10);
    const d2 = randomInt(2, 10);

    const n1 = randomInt(1, d1);
    const n2 = randomInt(1, d2);

    const operation = randomChoice(["+", "-", "×"]);

    let numerator;
    let denominator;
    let question;
    let explanation;

    if (operation === "+") {
        numerator = n1 * d2 + n2 * d1;
        denominator = d1 * d2;

        question = `Calcula: ${n1}/${d1} + ${n2}/${d2}.`;

        explanation =
            `Buscamos un denominador común. ` +
            `Después sumamos los numeradores y simplificamos el resultado.`;
    }

    if (operation === "-") {
        numerator = n1 * d2 - n2 * d1;
        denominator = d1 * d2;

        question = `Calcula: ${n1}/${d1} - ${n2}/${d2}.`;

        explanation =
            `Buscamos un denominador común. ` +
            `Después restamos los numeradores y simplificamos el resultado.`;
    }

    if (operation === "×") {
        numerator = n1 * n2;
        denominator = d1 * d2;

        question = `Calcula: ${n1}/${d1} × ${n2}/${d2}.`;

        explanation =
            `Multiplicamos los numeradores entre sí y los denominadores entre sí. ` +
            `Después simplificamos la fracción.`;
    }

    const result = simplifyFraction(numerator, denominator);

    return {
        topic: "fracciones",
        difficulty: "medio",
        question,
        answer: fractionToString(
            result.numerator,
            result.denominator
        ),
        answerType: "fraction",
        explanation
    };
}


function fraccionesDificil() {
    const d1 = randomInt(2, 8);
    const d2 = randomInt(2, 8);
    const d3 = randomInt(2, 8);

    const n1 = randomInt(1, d1);
    const n2 = randomInt(1, d2);
    const n3 = randomInt(1, d3);

    const sumNumerator = n1 * d2 + n2 * d1;
    const sumDenominator = d1 * d2;

    const numerator = sumNumerator * n3;
    const denominator = sumDenominator * d3;

    const result = simplifyFraction(numerator, denominator);

    return {
        topic: "fracciones",
        difficulty: "dificil",
        question: `Calcula: (${n1}/${d1} + ${n2}/${d2}) × ${n3}/${d3}.`,
        answer: fractionToString(
            result.numerator,
            result.denominator
        ),
        answerType: "fraction",
        explanation: `Primero resolvemos la suma de las dos primeras fracciones. ` +
            `Después multiplicamos el resultado por ${n3}/${d3}. ` +
            `Finalmente simplificamos la fracción.`
    };
}


// ============================================================
// PORCENTAJES
// ============================================================

function porcentajesFacil() {
    const percentage = randomChoice([10, 20, 25, 50]);
    const number = randomInt(20, 200);

    const answer = number * percentage / 100;

    return {
        topic: "porcentajes",
        difficulty: "facil",
        question: `¿Cuánto es el ${percentage}% de ${number}?`,
        answer,
        tolerance: 0.01,
        explanation: `Convertimos ${percentage}% a decimal: ${percentage / 100}. ` +
            `Después multiplicamos ${number} × ${percentage / 100} = ${answer}.`
    };
}


function porcentajesMedio() {
    const percentage = randomInt(10, 50);
    const number = randomInt(50, 500);

    const answer = number * percentage / 100;

    return {
        topic: "porcentajes",
        difficulty: "medio",
        question: `¿Cuál es el ${percentage}% de ${number}?`,
        answer,
        tolerance: 0.01,
        explanation: `${percentage}% significa ${percentage}/100. ` +
            `Entonces ${number} × ${percentage}/100 = ${answer}.`
    };
}


function porcentajesDificil() {
    const original = randomInt(100, 1000);
    const increase = randomInt(5, 30);
    const decrease = randomInt(5, 30);

    const increased = original * (1 + increase / 100);
    const answer = increased * (1 - decrease / 100);

    return {
        topic: "porcentajes",
        difficulty: "dificil",
        question: `Un producto cuesta $${original}. ` +
            `Primero aumenta ${increase}% y después disminuye ${decrease}%. ` +
            `¿Cuál es su precio final?`,
        answer,
        tolerance: 0.01,
        explanation: `Primero aumentamos el precio: ` +
            `$${original} × ${1 + increase / 100} = $${increased.toFixed(2)}. ` +
            `Después aplicamos la disminución del ${decrease}%. ` +
            `El precio final es $${answer.toFixed(2)}.`
    };
}


// ============================================================
// LEY DE LOS SIGNOS
// ============================================================

function signosFacil() {
    const a = randomInt(-20, 20);
    const b = randomInt(-20, 20);

    const operation = randomChoice(["+", "-", "×"]);

    let answer;

    if (operation === "+") {
        answer = a + b;
    }

    if (operation === "-") {
        answer = a - b;
    }

    if (operation === "×") {
        answer = a * b;
    }

    return {
        topic: "signos",
        difficulty: "facil",
        question: `¿Cuánto es ${a} ${operation} (${b})?`,
        answer,
        tolerance: 0,
        explanation: `Aplicamos la regla correspondiente de los signos ` +
            `y realizamos la operación. El resultado es ${answer}.`
    };
}


function signosMedio() {
    const a = randomInt(-20, 20);
    const b = randomInt(-20, 20);
    const c = randomInt(-10, 10);

    const answer = a + b * c;

    return {
        topic: "signos",
        difficulty: "medio",
        question: `¿Cuánto es ${a} + (${b}) × (${c})?`,
        answer,
        tolerance: 0,
        explanation: `Primero realizamos la multiplicación: ` +
            `(${b}) × (${c}) = ${b * c}. ` +
            `Después sumamos ${a}: ${a} + ${b * c} = ${answer}.`
    };
}


function signosDificil() {
    const a = randomInt(-20, 20);
    const b = randomInt(-15, 15);
    const c = randomInt(-10, 10);
    const d = randomInt(-10, 10);

    const answer = (a - b) * c + d;

    return {
        topic: "signos",
        difficulty: "dificil",
        question: `¿Cuánto es (${a} - (${b})) × (${c}) + (${d})?`,
        answer,
        tolerance: 0,
        explanation: `Primero resolvemos el paréntesis: ${a} - (${b}) = ${a - b}. ` +
            `Después multiplicamos por ${c}. ` +
            `Finalmente sumamos ${d}.`
    };
}


// ============================================================
// POTENCIAS
// ============================================================

function potenciasFacil() {
    const base = randomInt(2, 6);
    const exponent = randomInt(2, 4);

    const answer = Math.pow(base, exponent);

    return {
        topic: "potencias",
        difficulty: "facil",
        question: `¿Cuánto es ${base}^${exponent}?`,
        answer,
        tolerance: 0,
        explanation: `${base}^${exponent} significa multiplicar ${base} por sí mismo ${exponent} veces. ` +
            `El resultado es ${answer}.`
    };
}


function potenciasMedio() {
    const base = randomInt(2, 10);
    const exponent = randomInt(2, 4);
    const multiplier = randomInt(2, 5);

    const power = Math.pow(base, exponent);
    const answer = power * multiplier;

    return {
        topic: "potencias",
        difficulty: "medio",
        question: `¿Cuánto es ${base}^${exponent} × ${multiplier}?`,
        answer,
        tolerance: 0,
        explanation: `Primero calculamos ${base}^${exponent} = ${power}. ` +
            `Después multiplicamos ${power} × ${multiplier} = ${answer}.`
    };
}


function potenciasDificil() {
    const base = randomInt(2, 5);
    const exponent = randomInt(2, 4);
    const secondBase = randomInt(2, 5);
    const secondExponent = randomInt(2, 3);

    const first = Math.pow(base, exponent);
    const second = Math.pow(secondBase, secondExponent);

    const answer = first + second;

    return {
        topic: "potencias",
        difficulty: "dificil",
        question: `¿Cuánto es ${base}^${exponent} + ${secondBase}^${secondExponent}?`,
        answer,
        tolerance: 0,
        explanation: `Calculamos cada potencia por separado: ` +
            `${base}^${exponent} = ${first} y ` +
            `${secondBase}^${secondExponent} = ${second}. ` +
            `Después sumamos: ${first} + ${second} = ${answer}.`
    };
}


// ============================================================
// ÁLGEBRA
// ============================================================

function algebraFacil() {
    const x = randomInt(1, 20);
    const a = randomInt(1, 10);

    const answer = x + a;

    return {
        topic: "algebra",
        difficulty: "facil",
        question: `Si x = ${x}, ¿cuánto vale x + ${a}?`,
        answer,
        tolerance: 0,
        explanation: `Sustituimos x por ${x}: ` +
            `${x} + ${a} = ${answer}.`
    };
}


function algebraMedio() {
    const a = randomInt(2, 10);
    const x = randomInt(1, 20);
    const c = randomInt(1, 20);

    const answer = x;
    const rightSide = a * x + c;

    return {
        topic: "algebra",
        difficulty: "medio",
        question: `Resuelve: ${a}x + ${c} = ${rightSide}.`,
        answer,
        tolerance: 0,
        explanation: `Restamos ${c} en ambos lados: ` +
            `${a}x = ${rightSide - c}. ` +
            `Después dividimos entre ${a}: x = ${answer}.`
    };
}


function algebraDificil() {
    const a = randomInt(2, 8);
    const p = randomInt(1, 5);
    const x = randomInt(1, 15);

    let c;

    do {
        c = randomInt(1, 10);
    } while (c === p * a);

    const d = (p * a - c) * x;

    const answer = x;

    return {
        topic: "algebra",
        difficulty: "dificil",
        question: `Resuelve: ${a}x + ${c} = ${p}x - ${d}.`,
        answer,
        tolerance: 0,
        explanation: `Agrupamos los términos con x en un lado ` +
            `y los números en el otro. ` +
            `Después despejamos x hasta obtener x = ${answer}.`
    };
}


// ============================================================
// GEOMETRÍA
// ============================================================

function geometriaFacil() {
    const base = randomInt(3, 20);
    const height = randomInt(3, 20);

    const answer = base * height / 2;

    return {
        topic: "geometria",
        difficulty: "facil",
        question: `¿Cuál es el área de un triángulo con base ${base} cm ` +
            `y altura ${height} cm?`,
        answer,
        tolerance: 0.01,
        explanation: `Usamos la fórmula A = (base × altura) / 2. ` +
            `A = (${base} × ${height}) / 2 = ${answer} cm².`
    };
}


function geometriaMedio() {
    const width = randomInt(4, 20);
    const height = randomInt(4, 20);

    const answer = width * height;

    return {
        topic: "geometria",
        difficulty: "medio",
        question: `¿Cuál es el área de un rectángulo de ${width} cm ` +
            `de ancho y ${height} cm de alto?`,
        answer,
        tolerance: 0.01,
        explanation: `Área = ancho × alto. ` +
            `${width} × ${height} = ${answer} cm².`
    };
}


function geometriaDificil() {
    const radius = randomInt(2, 15);
    const pi = 3.1416;

    const answer = pi * radius * radius;

    return {
        topic: "geometria",
        difficulty: "dificil",
        question: `Calcula el área de un círculo con radio ${radius} cm. ` +
            `Usa π ≈ 3.1416.`,
        answer,
        tolerance: 0.05,
        explanation: `Usamos A = πr². ` +
            `A = 3.1416 × ${radius}² = ${answer.toFixed(2)} cm².`
    };
}


// ============================================================
// ESTADÍSTICA
// ============================================================

function estadisticaFacil() {
    const numbers = [
        randomInt(1, 20),
        randomInt(1, 20),
        randomInt(1, 20)
    ];

    const answer =
        (numbers[0] + numbers[1] + numbers[2]) / 3;

    return {
        topic: "estadistica",
        difficulty: "facil",
        question: `Calcula el promedio de: ${numbers.join(", ")}.`,
        answer,
        tolerance: 0.01,
        explanation: `Sumamos los valores y dividimos entre la cantidad de datos. ` +
            `El promedio es ${answer.toFixed(2)}.`
    };
}


function estadisticaMedio() {
    const numbers = [
        randomInt(1, 30),
        randomInt(1, 30),
        randomInt(1, 30),
        randomInt(1, 30),
        randomInt(1, 30)
    ];

    const sorted = [...numbers].sort((a, b) => a - b);
    const answer = sorted[2];

    return {
        topic: "estadistica",
        difficulty: "medio",
        question: `Encuentra la mediana de: ${numbers.join(", ")}.`,
        answer,
        tolerance: 0,
        explanation: `Ordenamos los datos de menor a mayor: ${sorted.join(", ")}. ` +
            `El valor central es ${answer}, por lo tanto esa es la mediana.`
    };
}


function estadisticaDificil() {
    const numbers = [
        randomInt(1, 20),
        randomInt(1, 20),
        randomInt(1, 20),
        randomInt(1, 20),
        randomInt(1, 20)
    ];

    const mean =
        numbers.reduce((sum, value) => sum + value, 0) /
        numbers.length;

    const variance =
        numbers.reduce(
            (sum, value) => sum + Math.pow(value - mean, 2),
            0
        ) / numbers.length;

    const answer = Math.sqrt(variance);

    return {
        topic: "estadistica",
        difficulty: "dificil",
        question: `Calcula la desviación estándar poblacional de: ` +
            `${numbers.join(", ")}.`,
        answer,
        tolerance: 0.01,
        explanation: `Primero calculamos el promedio. ` +
            `Después calculamos la diferencia de cada dato respecto al promedio, ` +
            `elevamos esas diferencias al cuadrado, obtenemos su promedio ` +
            `y finalmente calculamos la raíz cuadrada. ` +
            `Resultado: ${answer.toFixed(2)}.`
    };
}


// ============================================================
// PROBABILIDAD
// ============================================================

function probabilidadFacil() {
    const favorable = randomInt(1, 5);
    const total = randomInt(favorable + 1, 10);

    const answer = favorable / total;

    return {
        topic: "probabilidad",
        difficulty: "facil",
        question: `Si hay ${favorable} resultados favorables de un total de ${total}, ` +
            `¿cuál es la probabilidad?`,
        answer: fractionToString(favorable, total),
        answerType: "fraction",
        explanation: `Probabilidad = casos favorables / casos posibles. ` +
            `Entonces ${favorable}/${total}.`
    };
}


function probabilidadMedio() {
    const favorable = randomInt(1, 8);
    const total = randomInt(favorable + 1, 12);

    const percentage = favorable / total * 100;

    return {
        topic: "probabilidad",
        difficulty: "medio",
        question: `Hay ${favorable} resultados favorables de ${total} posibles. ` +
            `¿Cuál es la probabilidad expresada como porcentaje?`,
        answer: percentage,
        tolerance: 0.01,
        explanation: `Calculamos ${favorable}/${total} × 100 = ${percentage.toFixed(2)}%.`
    };
}


function probabilidadDificil() {
    const p1 = randomInt(1, 5);
    const t1 = randomInt(p1 + 1, 8);

    const p2 = randomInt(1, 5);
    const t2 = randomInt(p2 + 1, 8);

    const numerator = p1 * p2;
    const denominator = t1 * t2;

    const result = simplifyFraction(numerator, denominator);

    return {
        topic: "probabilidad",
        difficulty: "dificil",
        question: `Dos eventos independientes tienen probabilidades ` +
            `${p1}/${t1} y ${p2}/${t2}. ` +
            `¿Cuál es la probabilidad de que ocurran ambos?`,
        answer: fractionToString(
            result.numerator,
            result.denominator
        ),
        answerType: "fraction",
        explanation: `Para eventos independientes multiplicamos sus probabilidades: ` +
            `(${p1}/${t1}) × (${p2}/${t2}) = ` +
            `${fractionToString(result.numerator, result.denominator)}.`
    };
}


// ============================================================
// FUNCIONES
// ============================================================

function funcionesFacil() {
    const a = randomInt(1, 5);
    const b = randomInt(1, 10);
    const x = randomInt(1, 10);

    const answer = a * x + b;

    return {
        topic: "funciones",
        difficulty: "facil",
        question: `Si f(x) = ${a}x + ${b}, ¿cuánto vale f(${x})?`,
        answer,
        tolerance: 0,
        explanation: `Sustituimos x por ${x}: ` +
            `f(${x}) = ${a}(${x}) + ${b} = ${answer}.`
    };
}


function funcionesMedio() {
    const a = randomInt(2, 8);
    const b = randomInt(-10, 10);
    const x = randomInt(1, 10);

    const answer = a * x + b;

    return {
        topic: "funciones",
        difficulty: "medio",
        question: `Si f(x) = ${a}x ${b >= 0 ? "+" : "-"} ${Math.abs(b)}, ` +
            `¿cuánto vale f(${x})?`,
        answer,
        tolerance: 0,
        explanation: `Sustituimos x por ${x}: ` +
            `f(${x}) = ${a}(${x}) ${b >= 0 ? "+" : "-"} ${Math.abs(b)} = ${answer}.`
    };
}


function funcionesDificil() {
    const a = randomInt(2, 6);
    const b = randomInt(-8, 8);
    const x = randomInt(-5, 10);

    const answer = a * x * x + b;

    return {
        topic: "funciones",
        difficulty: "dificil",
        question: `Si f(x) = ${a}x² ${b >= 0 ? "+" : "-"} ${Math.abs(b)}, ` +
            `¿cuánto vale f(${x})?`,
        answer,
        tolerance: 0,
        explanation: `Primero calculamos ${x}² = ${x * x}. ` +
            `Después multiplicamos por ${a}: ${a * x * x}. ` +
            `Finalmente aplicamos ${b >= 0 ? "+" : "-"} ${Math.abs(b)}. ` +
            `Resultado: ${answer}.`
    };
}


// ============================================================
// GENERADORES POR TEMA Y DIFICULTAD
// ============================================================

const questionGenerators = {

    operaciones: {
        facil: operacionesFacil,
        medio: operacionesMedio,
        dificil: operacionesDificil
    },

    fracciones: {
        facil: fraccionesFacil,
        medio: fraccionesMedio,
        dificil: fraccionesDificil
    },

    porcentajes: {
        facil: porcentajesFacil,
        medio: porcentajesMedio,
        dificil: porcentajesDificil
    },

    signos: {
        facil: signosFacil,
        medio: signosMedio,
        dificil: signosDificil
    },

    potencias: {
        facil: potenciasFacil,
        medio: potenciasMedio,
        dificil: potenciasDificil
    },

    algebra: {
        facil: algebraFacil,
        medio: algebraMedio,
        dificil: algebraDificil
    },

    geometria: {
        facil: geometriaFacil,
        medio: geometriaMedio,
        dificil: geometriaDificil
    },

    estadistica: {
        facil: estadisticaFacil,
        medio: estadisticaMedio,
        dificil: estadisticaDificil
    },

    probabilidad: {
        facil: probabilidadFacil,
        medio: probabilidadMedio,
        dificil: probabilidadDificil
    },

    funciones: {
        facil: funcionesFacil,
        medio: funcionesMedio,
        dificil: funcionesDificil
    }
};


// ============================================================
// GENERAR UNA PREGUNTA
// ============================================================

function generateQuestion(topic, difficulty) {

    if (!questionGenerators[topic]) {
        throw new Error(`Tema desconocido: ${topic}`);
    }

    if (!questionGenerators[topic][difficulty]) {
        throw new Error(
            `Dificultad desconocida: ${difficulty}`
        );
    }

    const generator =
        questionGenerators[topic][difficulty];

    const question = generator();

    // Clave única de la pregunta.
    // Sirve para que script.js pueda detectar repeticiones.
    question.key =
        `${question.topic}|${question.difficulty}|${question.question}`;

    return question;
}


// ============================================================
// GENERAR PREGUNTA ALEATORIA
// ============================================================

function generateRandomQuestion(topic = null, difficulty = null) {

    if (topic && difficulty) {
        return generateQuestion(topic, difficulty);
    }

    const topics = Object.keys(questionGenerators);

    const selectedTopic =
        topic || randomChoice(topics);

    const difficulties =
        Object.keys(questionGenerators[selectedTopic]);

    const selectedDifficulty =
        difficulty || randomChoice(difficulties);

    return generateQuestion(
        selectedTopic,
        selectedDifficulty
    );
}


// ============================================================
// EXPORTAR PARA SCRIPT.JS
// ============================================================

window.MateFacilQuestions = {

    generateQuestion,

    generateRandomQuestion,

    validateQuestionAnswer,

    numbersEqual,

    fractionsEqual,

    parseFraction,

    simplifyFraction

};