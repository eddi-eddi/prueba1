/* =========================================================
   MATE FÁCIL — V3.3
   Aprende de tus errores
   ========================================================= */

"use strict";

/* =========================================================
   CONFIGURACIÓN
   ========================================================= */

const STORAGE_KEY = "mateFacilV33";

/* =========================================================
   BANCO DE PREGUNTAS
   ========================================================= */

const topics = {
    operaciones: {
        name: "Operaciones básicas",
        icon: "➕",
        description: "Suma, resta, multiplicación y división.",
        questions: {
            facil: [{
                    id: "op-f-1",
                    text: "¿Cuánto es 48 + 27?",
                    answer: "75",
                    explanation: "48 + 27 = 75.",
                    hint: "Suma primero las unidades y después las decenas."
                },
                {
                    id: "op-f-2",
                    text: "¿Cuánto es 9 × 7?",
                    answer: "63",
                    explanation: "9 × 7 = 63.",
                    hint: "Recuerda la tabla del 9."
                },
                {
                    id: "op-f-3",
                    text: "¿Cuánto es 144 ÷ 12?",
                    answer: "12",
                    explanation: "144 ÷ 12 = 12 porque 12 × 12 = 144.",
                    hint: "Busca qué número multiplicado por 12 da 144."
                },
                {
                    id: "op-f-4",
                    text: "¿Cuánto es 125 × 8?",
                    answer: "1000",
                    explanation: "125 × 8 = 1000.",
                    hint: "125 × 4 = 500; después duplica."
                }
            ],

            medio: [{
                    id: "op-m-1",
                    text: "¿Cuánto es 840 ÷ 15?",
                    answer: "56",
                    explanation: "15 × 56 = 840, por lo tanto 840 ÷ 15 = 56.",
                    hint: "Busca un número que multiplicado por 15 dé 840."
                },
                {
                    id: "op-m-2",
                    text: "¿Cuánto es 325 + 178 − 96?",
                    answer: "407",
                    explanation: "325 + 178 = 503 y 503 − 96 = 407.",
                    hint: "Resuelve de izquierda a derecha."
                },
                {
                    id: "op-m-3",
                    text: "¿Cuánto es 72 ÷ 8 + 6 × 4?",
                    answer: "33",
                    explanation: "Primero división y multiplicación: 72 ÷ 8 = 9 y 6 × 4 = 24. Después 9 + 24 = 33.",
                    hint: "Recuerda el orden de las operaciones."
                }
            ],

            dificil: [{
                    id: "op-d-1",
                    text: "¿Cuánto es 48 + 6 × 5 − 18 ÷ 3?",
                    answer: "72",
                    explanation: "Primero multiplicamos y dividimos: 6 × 5 = 30 y 18 ÷ 3 = 6. Luego 48 + 30 − 6 = 72.",
                    hint: "Primero multiplicaciones y divisiones."
                },
                {
                    id: "op-d-2",
                    text: "¿Cuánto es 100 − 8 × 7 + 36 ÷ 6?",
                    answer: "50",
                    explanation: "8 × 7 = 56 y 36 ÷ 6 = 6. Entonces 100 − 56 + 6 = 50.",
                    hint: "Multiplica y divide antes de sumar o restar."
                },
                {
                    id: "op-d-3",
                    text: "¿Cuánto es (18 + 6) ÷ 3 + 4 × 5?",
                    answer: "28",
                    explanation: "Primero (18 + 6) = 24. Después 24 ÷ 3 = 8 y 4 × 5 = 20. Finalmente 8 + 20 = 28.",
                    hint: "Primero resuelve los paréntesis."
                }
            ]
        }
    },

    fracciones: {
        name: "Fracciones",
        icon: "½",
        description: "Suma, resta, multiplicación y división de fracciones.",
        questions: {
            facil: [{
                    id: "fr-f-1",
                    text: "¿Cuánto es 1/2 + 1/2?",
                    answer: "1",
                    accepted: ["2/2"],
                    explanation: "1/2 + 1/2 = 2/2 = 1.",
                    hint: "Los denominadores ya son iguales."
                },
                {
                    id: "fr-f-2",
                    text: "¿Cuánto es 3/4 de 20?",
                    answer: "15",
                    explanation: "20 ÷ 4 = 5 y 5 × 3 = 15.",
                    hint: "Divide 20 entre el denominador y multiplica por el numerador."
                }
            ],

            medio: [{
                    id: "fr-m-1",
                    text: "¿Cuánto es 2/3 + 1/6?",
                    answer: "5/6",
                    accepted: ["10/12", "15/18"],
                    explanation: "Convertimos 2/3 a sextos: 2/3 = 4/6. Entonces 4/6 + 1/6 = 5/6.",
                    hint: "Necesitas un denominador común."
                },
                {
                    id: "fr-m-2",
                    text: "¿Cuánto es 1/4 + 2/4?",
                    answer: "3/4",
                    accepted: ["0.75"],
                    explanation: "Como los denominadores son iguales, sumamos los numeradores: 1 + 2 = 3. Resultado: 3/4.",
                    hint: "Cuando los denominadores son iguales, suma solamente los numeradores."
                }
            ],

            dificil: [{
                    id: "fr-d-1",
                    text: "¿Cuánto es 5/8 − 1/4?",
                    answer: "3/8",
                    explanation: "Convertimos 1/4 a octavos: 1/4 = 2/8. Entonces 5/8 − 2/8 = 3/8.",
                    hint: "Convierte 1/4 a una fracción con denominador 8."
                },
                {
                    id: "fr-d-2",
                    text: "¿Cuánto es 3/5 × 10/9?",
                    answer: "2/3",
                    accepted: ["0.6666666667", "4/6"],
                    explanation: "Multiplicamos: (3 × 10)/(5 × 9) = 30/45. Simplificando entre 15 obtenemos 2/3.",
                    hint: "Multiplica numeradores y denominadores y después simplifica."
                },
                {
                    id: "fr-d-3",
                    text: "¿Cuánto es 7/12 ÷ 7/18?",
                    answer: "3/2",
                    accepted: ["1.5"],
                    explanation: "Dividir entre una fracción equivale a multiplicar por su inversa: 7/12 × 18/7 = 18/12 = 3/2.",
                    hint: "Invierte la segunda fracción y multiplica."
                },
                {
                    id: "fr-d-4",
                    text: "¿Cuánto es 2/3 + 3/4 − 1/6?",
                    answer: "5/4",
                    accepted: ["1.25"],
                    explanation: "Con denominador 12: 2/3 = 8/12, 3/4 = 9/12 y 1/6 = 2/12. Entonces 8/12 + 9/12 − 2/12 = 15/12 = 5/4.",
                    hint: "Usa 12 como denominador común."
                }
            ]
        }
    },

    porcentajes: {
        name: "Porcentajes",
        icon: "%",
        description: "Porcentajes, descuentos y aumentos.",
        questions: {
            facil: [
                { id: "po-f-1", text: "¿Cuál es el 10% de 50?", answer: "5", explanation: "El 10% equivale a dividir una cantidad entre 10. Entonces, 50 ÷ 10 = 5.", hint: "Para encontrar el 10%, divide la cantidad entre 10." },
                { id: "po-f-2", text: "¿Cuál es el 20% de 80?", answer: "16", explanation: "El 20% escrito como decimal es 0.20. Multiplicamos 80 × 0.20 = 16.", hint: "Convierte 20% en 0.20 y multiplícalo por 80." },
                { id: "po-f-3", text: "¿Cuál es el 50% de 60?", answer: "30", explanation: "El 50% representa la mitad de una cantidad. La mitad de 60 es 30.", hint: "Piensa en qué número obtienes al dividir 60 entre 2." },
                { id: "po-f-4", text: "¿Cuál es el 25% of 100?", answer: "25", explanation: "El 25% representa una cuarta parte. 100 ÷ 4 = 25.", hint: "25% es lo mismo que una cuarta parte." },
                { id: "po-f-5", text: "¿Cuál es el 10% de 200?", answer: "20", explanation: "Para obtener el 10% de 200, dividimos 200 entre 10. El resultado es 20.", hint: "Busca una décima parte de 200." },
                { id: "po-f-6", text: "¿Cuál es el 5% de 100?", answer: "5", explanation: "El 5% es la mitad del 10%. Como el 10% de 100 es 10, la mitad es 5.", hint: "Primero piensa cuánto es el 10% y después toma la mitad." },
                { id: "po-f-7", text: "¿Cuál es el 20% de 150?", answer: "30", explanation: "Calculamos 150 × 0.20 = 30.", hint: "El 20% equivale a dos décimas de la cantidad." },
                { id: "po-f-8", text: "¿Cuál es el 50% de 90?", answer: "45", explanation: "El 50% es la mitad. Al dividir 90 entre 2 obtenemos 45.", hint: "Encuentra la mitad de 90." },
                { id: "po-f-9", text: "¿Cuál es el 25% de 80?", answer: "20", explanation: "Una cuarta parte of 80 es 20, y 25% representa una cuarta parte.", hint: "Divide 80 entre 4." },
                { id: "po-f-10", text: "¿Cuál es el 10% de 350?", answer: "35", explanation: "Dividimos 350 entre 10 y obtenemos 35.", hint: "Mueve el decimal una posición hacia la izquierda." },
                { id: "po-f-11", text: "¿Cuál es el 30% de 100?", answer: "30", explanation: "El 30% de 100 es directamente 30, porque una cantidad expresada sobre 100 conserva el mismo número.", hint: "Cuando la cantidad es 100, el porcentaje indica directamente el resultado." },
                { id: "po-f-12", text: "¿Cuál es el 40% of 50?", answer: "20", explanation: "Multiplicamos 50 × 0.40 = 20.", hint: "Calcula cuatro décimas de 50." },
                { id: "po-f-13", text: "¿Cuál es el 15% of 100?", answer: "15", explanation: "El 15% significa 15 partes de cada 100. Por eso, de 100 obtenemos 15.", hint: "Si la cantidad es 100, el número del porcentaje es el resultado." },
                { id: "po-f-14", text: "¿Cuál es el 20% of 200?", answer: "40", explanation: "200 × 0.20 = 40.", hint: "Calcula primero el 10% y duplica ese resultado." },
                { id: "po-f-15", text: "¿Cuál es el 50% of 140?", answer: "70", explanation: "El 50% es la mitad. 140 ÷ 2 = 70.", hint: "Busca la mitad de 140." },
                { id: "po-f-16", text: "¿Cuál es el 25% of 200?", answer: "50", explanation: "El 25% es una cuarta parte. 200 ÷ 4 = 50.", hint: "Divide 200 entre 4." },
                { id: "po-f-17", text: "¿Cuál es el 10% of 450?", answer: "45", explanation: "Dividir 450 entre 10 produce 45.", hint: "Encuentra una décima parte de 450." },
                { id: "po-f-18", text: "¿Cuál es el 30% of 200?", answer: "60", explanation: "El 10% de 200 es 20. Como necesitamos 30%, multiplicamos 20 × 3 = 60.", hint: "Calcula primero el 10% y multiplícalo por 3." },
                { id: "po-f-19", text: "¿Cuál es el 40% of 100?", answer: "40", explanation: "De cada 100 unidades, el 40% corresponde a 40 unidades.", hint: "Observa que la cantidad base es exactamente 100." },
                { id: "po-f-20", text: "¿Cuál es el 5% of 200?", answer: "10", explanation: "El 10% de 200 es 20 y el 5% es la mitad de ese valor: 10.", hint: "Calcula el 10% y divídelo entre 2." },
                { id: "po-f-21", text: "Una camiseta cuesta $40. ¿Cuánto representa el 10% de su precio?", answer: "$4", explanation: "El 10% de 40 se obtiene haciendo 40 ÷ 10 = 4.", hint: "El 10% es una décima parte." },
                { id: "po-f-22", text: "Una mochila cuesta $60. ¿Cuánto es el 20% de su precio?", answer: "$12", explanation: "60 × 0.20 = 12.", hint: "Calcula dos veces el 10% of 60." },
                { id: "po-f-23", text: "Una bicicleta cuesta $200. ¿Cuánto es el 10% de su precio?", answer: "$20", explanation: "200 ÷ 10 = 20.", hint: "Encuentra una décima parte del precio." },
                { id: "po-f-24", text: "Una tienda tiene 50 productos y el 20% son rojos. ¿Cuántos productos rojos hay?", answer: "10", explanation: "Calculamos 50 × 0.20 = 10.", hint: "El 20% equivale a dos décimas de los productos." },
                { id: "po-f-25", text: "En una clase hay 30 alumnos y el 50% son niñas. ¿Cuántas niñas hay?", answer: "15", explanation: "La mitad de 30 es 15.", hint: "El 50% significa la mitad." },
                { id: "po-f-26", text: "Un examen tiene 100 preguntas. Un alumno respondió correctamente el 80%. ¿Cuántas respondió correctamente?", answer: "80", explanation: "El 80% de 100 corresponde a 80 preguntas.", hint: "Cuando el total es 100, el porcentaje indica directamente la cantidad." },
                { id: "po-f-27", text: "Un equipo tiene 40 jugadores y el 25% son porteros. ¿Cuántos porteros hay?", answer: "10", explanation: "El 25% equivale a una cuarta parte. 40 ÷ 4 = 10.", hint: "Convierte 25% en una cuarta parte." },
                { id: "po-f-28", text: "Una caja contiene 80 lápices y el 10% son azules. ¿Cuántos lápices azules hay?", answer: "8", explanation: "80 ÷ 10 = 8.", hint: "Busca una décima parte de los lápices." },
                { id: "po-f-29", text: "Un libro tiene 200 páginas y Ana ha leído el 25%. ¿Cuántas páginas ha leído?", answer: "50", explanation: "Una cuarta parte de 200 es 50.", hint: "El 25% es equivalente a dividir entre 4." },
                { id: "po-f-30", text: "Un tanque contiene 100 litros de agua y se utiliza el 30%. ¿Cuántos litros se utilizaron?", answer: "30 litros", explanation: "El 30% de 100 es 30.", hint: "La cantidad total es 100 litros." },
                { id: "po-f-31", text: "¿Qué porcentaje representa 10 de 100?", answer: "10%", explanation: "Hay 10 unidades de cada 100, por lo que corresponde al 10%.", hint: "Compara la cantidad con un total de 100." },
                { id: "po-f-32", text: "¿Qué porcentaje representa 20 de 100?", answer: "20%", explanation: "20 de cada 100 equivale a 20%.", hint: "El total ya está expresado como 100." },
                { id: "po-f-33", text: "¿Qué porcentaje representa 50 de 100?", answer: "50%", explanation: "50 representa la mitad de 100, por lo tanto es 50%.", hint: "Piensa qué parte representa 50 de 100." },
                { id: "po-f-34", text: "¿Qué porcentaje representa 25 de 100?", answer: "25%", explanation: "25 unidades de cada 100 equivalen al 25%.", hint: "El denominador es 100." },
                { id: "po-f-35", text: "¿Qué porcentaje representa 30 de 100?", answer: "30%", explanation: "30 de cada 100 represents 30%.", hint: "Observa directamente la cantidad de cada 100." },
                { id: "po-f-36", text: "¿Qué porcentaje represents 40 de 100?", answer: "40%", explanation: "La fracción 40/100 se expresa como 40%.", hint: "El porcentaje indica cuántas partes hay de 100." },
                { id: "po-f-37", text: "¿Qué porcentaje represents 5 de 100?", answer: "5%", explanation: "Cinco unidades de cada cien equivalen a 5%.", hint: "Relaciona el número con un total de 100." },
                { id: "po-f-38", text: "¿Qué porcentaje represents 15 de 100?", answer: "15%", explanation: "15/100 equivale directamente a 15%.", hint: "Cuando el total es 100, el numerador indica el porcentaje." },
                { id: "po-f-39", text: "¿Qué porcentaje represents 75 de 100?", answer: "75%", explanation: "75 unidades de cada 100 representan 75%.", hint: "Lee la cantidad como partes de 100." },
                { id: "po-f-40", text: "¿Qué porcentaje represents 90 de 100?", answer: "90%", explanation: "90/100 se expresa como 90%.", hint: "El total es 100, así que la respuesta es inmediata." },
                { id: "po-f-41", text: "Un juguete cuesta $50 y tiene un descuento del 10%. ¿Cuánto dinero se descuenta?", answer: "$5", explanation: "El 10% de $50 es $5.", hint: "Calcula una décima parte of $50." },
                { id: "po-f-42", text: "Un pantalón cuesta $80 y tiene un descuento del 20%. ¿Cuánto dinero se descuenta?", answer: "$16", explanation: "80 × 0.20 = 16.", hint: "Calcula el 10% y duplica el resultado." },
                { id: "po-f-43", text: "Una pelota cuesta $40 y tiene un descuento del 25%. ¿Cuánto dinero se descuenta?", answer: "$10", explanation: "El 25% es una cuarta parte. 40 ÷ 4 = 10.", hint: "Busca una cuarta parte of $40." },
                { id: "po-f-44", text: "Un libro cuesta $100 y tiene un descuento del 30%. ¿Cuánto dinero se descuenta?", answer: "$30", explanation: "El 30% de 100 es 30.", hint: "Con una base de 100, el porcentaje se convierte directamente en la cantidad." },
                { id: "po-f-45", text: "Una camisa cuesta $60 y tiene un descuento del 50%. ¿Cuánto dinero se descuenta?", answer: "$30", explanation: "El 50% es la mitad of $60, que es $30.", hint: "Encuentra la mitad del precio." },
                { id: "po-f-46", text: "Una mochila cuesta $120 y tiene un descuento del 10%. ¿Cuánto se descuenta?", answer: "$12", explanation: "120 ÷ 10 = 12.", hint: "El 10% es una décima parte." },
                { id: "po-f-47", text: "Un videojuego cuesta $200 y tiene un descuento del 20%. ¿Cuánto se descuenta?", answer: "$40", explanation: "200 × 0.20 = 40.", hint: "Calcula dos veces el 10%." },
                { id: "po-f-48", text: "Una bicicleta cuesta $300 y tiene un descuento del 10%. ¿Cuánto se descuenta?", answer: "$30", explanation: "Una décima parte of $300 es $30.", hint: "Divide el precio entre 10." },
                { id: "po-f-49", text: "Un reloj cuesta $100 y tiene un descuento del 25%. ¿Cuánto se descuenta?", answer: "$25", explanation: "El 25% de $100 equivale a $25.", hint: "Recuerda que 25% es una cuarta parte." },
                { id: "po-f-50", text: "Un par de zapatos cuesta $80 y tiene un descuento del 50%. ¿Cuánto se descuenta?", answer: "$40", explanation: "El 50% representa la mitad of $80. La mitad es $40.", hint: "Divide $80 entre 2." }
            ],
            medio: [
                { id: "po-m-1", text: "Una camisa cuesta $80 y tiene un descuento del 15%. ¿Cuál es el precio final?", answer: "$68", explanation: "El descuento es 80 × 0.15 = $12. Restamos $12 a $80: $68.", hint: "Calcula primero el dinero que representa el 15%." },
                { id: "po-m-2", text: "Un teléfono cuesta $500 y tiene un descuento del 20%. ¿Cuál es el precio final?", answer: "$400", explanation: "El 20% de $500 es $100. Después restamos $100 al precio original.", hint: "Primero encuentra el descuento y después réstalo." },
                { id: "po-m-3", text: "Una mochila cuesta $120 y tiene un descuento del 25%. ¿Cuál es el precio final?", answer: "$90", explanation: "El 25% de $120 es $30. $120 − $30 = $90.", hint: "El 25% equivale a una cuarta parte." },
                { id: "po-m-4", text: "Un videojuego cuesta $60 y tiene un descuento del 30%. ¿Cuál es el precio final?", answer: "$42", explanation: "$60 × 0.30 = $18 de descuento. $60 − $18 = $42.", hint: "Calcula primero cuánto dinero se descuenta." },
                { id: "po-m-5", text: "Una bicicleta cuesta $400 y tiene un descuento del 15%. ¿Cuál es el precio final?", answer: "$340", explanation: "El descuento es $400 × 0.15 = $60. El precio final es $400 − $60 = $340.", hint: "Convierte 15% a decimal antes de multiplicar." },
                { id: "po-m-6", text: "Un televisor cuesta $800 y tiene un descuento del 10%. ¿Cuál es el precio final?", answer: "$720", explanation: "El 10% de $800 es $80. Al restarlo obtenemos $720.", hint: "El 10% es una décima parte del precio." },
                { id: "po-m-7", text: "Unos zapatos cuesta $100 y tienen un descuento del 35%. ¿Cuál es el precio final?", answer: "$65", explanation: "El descuento es $35. Al restarlo de $100 quedan $65.", hint: "De $100, quitar 35% significa quitar $35." },
                { id: "po-m-8", text: "Una computadora cuesta $1,000 y tiene un descuento del 20%. ¿Cuál es el precio final?", answer: "$800", explanation: "El descuento es $200. Por lo tanto, $1,000 − $200 = $800.", hint: "El 20% de 1,000 es 200." },
                { id: "po-m-9", text: "Una chaqueta cuesta $160 y tiene un descuento del 25%. ¿Cuál es el precio final?", answer: "$120", explanation: "Una cuarta parte of $160 es $40. Restamos $40 y obtenemos $120.", hint: "Usa que 25% equivale a 1/4." },
                { id: "po-m-10", text: "Una consola cuesta $450 y tiene un descuento del 30%. ¿Cuál es el precio final?", answer: "$315", explanation: "$450 × 0.30 = $135. Luego $450 − $135 = $315.", hint: "Primero calcula el 30% of $450." },
                { id: "po-m-11", text: "Un producto cuesta $200 y aumenta su precio un 10%. ¿Cuál es su nuevo precio?", answer: "$220", explanation: "El aumento es $20. Sumamos $20 al precio original y obtenemos $220.", hint: "Calcula el 10% y esta vez súmalo." },
                { id: "po-m-12", text: "Un producto cuesta $150 y aumenta su precio un 20%. ¿Cuál es su nuevo precio?", answer: "$180", explanation: "El 20% de $150 es $30. $150 + $30 = $180.", hint: "Encuentra primero el aumento." },
                { id: "po-m-13", text: "Un producto cuesta $300 y aumenta su precio un 15%. ¿Cuál es su nuevo precio?", answer: "$345", explanation: "El aumento es $45 porque 300 × 0.15 = 45. Sumando obtenemos $345.", hint: "Convierte 15% en 0.15." },
                { id: "po-m-14", text: "Una bicicleta cuesta $500 y aumenta su precio un 10%. ¿Cuál es su nuevo precio?", answer: "$550", explanation: "El 10% de $500 es $50. El nuevo precio es $550.", hint: "Añade una décima parte of $500." },
                { id: "po-m-15", text: "Un teléfono cuesta $600 y aumenta su precio un 25%. ¿Cuál es su nuevo precio?", answer: "$750", explanation: "El 25% de $600 es $150. Al sumarlo obtenemos $750.", hint: "Calcula una cuarta parte of $600." },
                { id: "po-m-16", text: "Una computadora cuesta $800 y aumenta su precio un 15%. ¿Cuál es su nuevo precio?", answer: "$920", explanation: "$800 × 0.15 = $120. Después $800 + $120 = $920.", hint: "Calcula el aumento antes de sumarlo." },
                { id: "po-m-17", text: "Un artículo cuesta $250 y aumenta su precio un 20%. ¿Cuál es su nuevo precio?", answer: "$300", explanation: "El aumento es $50. Sumado al precio original da $300.", hint: "El 20% de $250 equivale a $50." },
                { id: "po-m-18", text: "Una televisión cuesta $900 y aumenta su precio un 10%. ¿Cuál es su nuevo precio?", answer: "$990", explanation: "El 10% de $900 es $90. Sumamos $90 al precio original.", hint: "Encuentra el 10% of $900." },
                { id: "po-m-19", text: "Un videojuego cuesta $70 y aumenta su precio un 30%. ¿Cuál es su nuevo precio?", answer: "$91", explanation: "El aumento es $21. Entonces $70 + $21 = $91.", hint: "Calcula 70 × 0.30." },
                { id: "po-m-20", text: "Una mochila cuesta $100 y aumenta su precio un 25%. ¿Cuál es su nuevo precio?", answer: "$125", explanation: "El 25% de $100 es $25. Al aumentar el precio obtenemos $125.", hint: "Con una base de 100, el 25% son $25." },
                { id: "po-m-21", text: "En una escuela hay 500 estudiantes. El 36% participa en actividades deportivas. ¿Cuántos participan?", answer: "180", explanation: "500 × 0.36 = 180 estudiantes.", hint: "Multiplica el total por 0.36." },
                { id: "po-m-22", text: "En una biblioteca hay 800 libros. El 45% son novelas. ¿Cuántas novelas hay?", answer: "360", explanation: "800 × 0.45 = 360.", hint: "Convierte 45% en 0.45." },
                { id: "po-m-23", text: "Una empresa tiene 250 empleados y el 28% trabaja de noche. ¿Cuántos empleados trabajan de noche?", answer: "70", explanation: "250 × 0.28 = 70 empleados.", hint: "Calcula 28 centésimas de 250." },
                { id: "po-m-24", text: "Una encuesta fue respondida por 600 personas. El 65% eligió la opción A. ¿Cuántas personas eligieron A?", answer: "390", explanation: "600 × 0.65 = 390.", hint: "Multiplica 600 por 65 y divide entre 100." },
                { id: "po-m-25", text: "Un estadio tiene capacidad para 20,000 personas y está ocupado al 75%. ¿Cuántas personas hay?", answer: "15,000", explanation: "20,000 × 0.75 = 15,000.", hint: "El 75% equivale a tres cuartas partes." },
                { id: "po-m-26", text: "Una tienda recibió 400 productos y el 35% son electrónicos. ¿Cuántos son electrónicos?", answer: "140", explanation: "400 × 0.35 = 140.", hint: "Calcula 35 de cada 100 productos." },
                { id: "po-m-27", text: "Un colegio tiene 1,200 alumnos y el 40% practica algún deporte. ¿Cuántos alumnos practican deporte?", answer: "480", explanation: "1,200 × 0.40 = 480.", hint: "El 40% son cuatro décimas del total." },
                { id: "po-m-28", text: "Una fábrica produce 2,000 piezas al día y el 15% son defectuosas. ¿Cuántas piezas defectuosas produce?", answer: "300", explanation: "2,000 × 0.15 = 300.", hint: "Calcula primero el 10% y el 5%, y súmalos." },
                { id: "po-m-29", text: "De 750 clientes, el 32% compró un producto. ¿Cuántos clientes lo compraron?", answer: "240", explanation: "750 × 0.32 = 240.", hint: "Usa la fórmula cantidad × porcentaje decimal." },
                { id: "po-m-30", text: "Una encuesta de 900 personas muestra que el 55% prefiere el producto A. ¿Cuántas personas lo prefieren?", answer: "495", explanation: "900 × 0.55 = 495.", hint: "El 55% equivale a 55/100." },
                { id: "po-m-31", text: "En un examen de 50 preguntas, Luis respondió correctamente 42. ¿Qué porcentaje obtuvo?", answer: "84%", explanation: "Dividimos 42 entre 50 y multiplicamos por 100: 42/50 × 100 = 84%.", hint: "Usa porcentaje = parte ÷ total × 100." },
                { id: "po-m-32", text: "De 80 estudiantes, 60 aprobaron. ¿Qué porcentaje aprobó?", answer: "75%", explanation: "60 ÷ 80 = 0.75. Al multiplicar por 100 obtenemos 75%.", hint: "Divide los aprobados entre el total." },
                { id: "po-m-33", text: "Una tienda vendió 45 de 60 productos disponibles. ¿Qué porcentaje vendió?", answer: "75%", explanation: "45 ÷ 60 = 0.75, que corresponde al 75%.", hint: "Compara lo vendido con el total disponible." },
                { id: "po-m-34", text: "De 200 boletos, se vendieron 150. ¿Qué porcentaje se vendió?", answer: "75%", explanation: "150 ÷ 200 × 100 = 75%.", hint: "La cantidad vendida es la parte y 200 es el total." },
                { id: "po-m-35", text: "Una persona ahorró $75 de un ingreso de $500. ¿Qué porcentaje de su ingreso ahorró?", answer: "15%", explanation: "75 ÷ 500 × 100 = 15%.", hint: "Divide el ahorro entre el ingreso total." },
                { id: "po-m-36", text: "De 400 árboles plantados, sobrevivieron 360. ¿Qué porcentaje sobrevivió?", answer: "90%", explanation: "360 ÷ 400 × 100 = 90%.", hint: "Compara los árboles sobrevivientes con los plantados." },
                { id: "po-m-37", text: "Un jugador encestó 18 de 24 tiros. ¿Qué porcentaje de tiros acertó?", answer: "75%", explanation: "18 ÷ 24 = 0.75, y 0.75 × 100 = 75%.", hint: "Divide los tiros acertados entre todos los intentos." },
                { id: "po-m-38", text: "De 250 productos, 225 fueron vendidos. ¿Qué porcentaje se vendió?", answer: "90%", explanation: "225 ÷ 250 × 100 = 90%.", hint: "Usa vendidos ÷ total × 100." },
                { id: "po-m-39", text: "Una estudiante obtuvo 72 puntos de 90. ¿Qué porcentaje obtuvo?", answer: "80%", explanation: "72 ÷ 90 = 0.80. Por lo tanto, obtuvo 80%.", hint: "Divide los puntos obtenidos entre los puntos posibles." },
                { id: "po-m-40", text: "Una empresa entregó 480 pedidos de un total of 600. ¿Qué porcentaje de pedidos entregó?", answer: "80%", explanation: "480 ÷ 600 × 100 = 80%.", hint: "Los 600 pedidos representan el 100%." },
                { id: "po-m-41", text: "Un producto cuesta $250 y después de un descuento cuesta $200. ¿Qué porcentaje de descuento recibió?", answer: "20%", explanation: "Se descontaron $50. Luego 50 ÷ 250 × 100 = 20%.", hint: "Primero encuentra cuánto dinero disminuyó el precio." },
                { id: "po-m-42", text: "Una camisa bajó de $100 a $75. ¿Qué porcentaje disminuyó su precio?", answer: "25%", explanation: "La reducción fue de $25. $25 es el 25% de $100.", hint: "Calcula primero la diferencia entre los dos precios." },
                { id: "po-m-43", text: "Un teléfono subió de $400 a $480. ¿Qué porcentaje aumentó su precio?", answer: "20%", explanation: "El aumento fue de $80. $80 ÷ $400 × 100 = 20%.", hint: "Compara el aumento con el precio original." },
                { id: "po-m-44", text: "Una bicicleta subió de $500 a $575. ¿Qué porcentaje aumentó su precio?", answer: "15%", explanation: "El aumento fue de $75. $75 representa el 15% de $500.", hint: "Resta los precios y divide la diferencia entre $500." },
                { id: "po-m-45", text: "Un producto bajó de $300 a $240. ¿Qué porcentaje disminuyó?", answer: "20%", explanation: "La disminución fue de $60. $60 ÷ $300 × 100 = 20%.", hint: "Usa el precio original como referencia." },
                { id: "po-m-46", text: "Una computadora aumentó de $800 a $920. ¿Qué porcentaje aumentó?", answer: "15%", explanation: "El aumento fue de $120. $120 ÷ $800 × 100 = 15%.", hint: "Calcula primero cuánto aumentó en dólares." },
                { id: "po-m-47", text: "Un libro bajó de $50 a $40. ¿Qué porcentaje disminuyó?", answer: "20%", explanation: "Bajó $10. Como $10 es el 20% de $50, la disminución fue del 20%.", hint: "Divide la reducción entre el precio inicial." },
                { id: "po-m-48", text: "Una consola subió de $400 a $500. ¿Qué porcentaje aumentó?", answer: "25%", explanation: "El aumento fue de $100. $100 represents 25% of $400.", hint: "Calcula $100 ÷ $400 × 100." },
                { id: "po-m-49", text: "Una mochila bajó de $120 a $90. ¿Qué porcentaje disminuyó?", answer: "25%", explanation: "La reducción fue de $30. $30 ÷ $120 × 100 = 25%.", hint: "Primero calcula cuánto dinero perdió el precio." },
                { id: "po-m-50", text: "Un reloj subió de $200 a $230. ¿Qué porcentaje aumentó?", answer: "15%", explanation: "El aumento fue de $30. $30 represents the 15% of $200.", hint: "Compara los $30 de aumento con el precio inicial." }
            ],
            dificil: [
                { id: "po-d-1", text: "Un producto cuesta $500. Primero recibe un descuento del 20% y después otro descuento del 10%. ¿Cuál es el precio final?", answer: "$360", explanation: "El primer descuento deja el producto en $400. El segundo descuento es de $40, por lo que quedan $360.", hint: "El segundo 10% se calcula sobre $400, no sobre los $500 originales." },
                { id: "po-d-2", text: "Una computadora cuesta $1,200. Tiene un descuento del 15% y después otro del 5%. ¿Cuál es el precio final?", answer: "$969", explanation: "El primer descuento es $180 y deja $1,020. El 5% de $1,020 es $51. El precio final es $969.", hint: "Aplica los descuentos uno después del otro." },
                { id: "po-d-3", text: "Un teléfono cuesta $800. Se aplica un descuento del 25% y posteriormente un impuesto del 10%. ¿Cuál es el precio final?", answer: "$660", explanation: "El descuento leaves $600. Después, el impuesto es $60. Sumando el impuesto, el precio final es $660.", hint: "Primero resta el descuento y después calcula el impuesto sobre el nuevo precio." },
                { id: "po-d-4", text: "Una televisión cuesta $1,000. Aumenta un 15% y después recibe un descuento del 20%. ¿Cuál es el precio final?", answer: "$920", explanation: "El aumento lleva el precio a $1,150. El 20% de $1,150 es $230. Finalmente quedan $920.", hint: "El descuento se calcula sobre $1,150." },
                { id: "po-d-5", text: "Una bicicleta cuesta $600. Aumenta un 10% y después aumenta otro 15%. ¿Cuál es el precio final?", answer: "$759", explanation: "Después del primer aumento cuesta $660. El 15% de $660 es $99, así que termina en $759.", hint: "El segundo aumento utiliza como base el precio después del primer aumento." },
                { id: "po-d-6", text: "Un artículo cuesta $400. Tiene un descuento del 30% y después un impuesto del 12%. ¿Cuál es el precio final?", answer: "$313.60", explanation: "El descuento leaves $280. El impuesto es 12% de $280, es decir $33.60. Sumando ambos obtenemos $313.60.", hint: "No calcules el impuesto sobre los $400 originales." },
                { id: "po-d-7", text: "Una consola cuesta $500. Aumenta un 20% y posteriormente recibe un descuento del 15%. ¿Cuál es el precio final?", answer: "$510", explanation: "El aumento lleva el precio a $600. El 15% de $600 es $90. El precio final es $510.", hint: "Primero aumenta y después aplica el descuento al nuevo precio." },
                { id: "po-d-8", text: "Una computadora cuesta $1,500. Tiene un descuento del 20%, seguido de un impuesto del 8%. ¿Cuál es el precio final?", answer: "$1,296", explanation: "Después del 20% de descuento quedan $1,200. El 8% de $1,200 es $96. El total es $1,296.", hint: "Calcula el impuesto después del descuento." },
                { id: "po-d-9", text: "Un producto cuesta $750. Aumenta un 12% y después disminuye un 10%. ¿Cuál es el precio final?", answer: "$756", explanation: "El aumento lleva el precio a $840. El 10% de $840 es $84, por lo que quedan $756.", hint: "Los porcentajes consecutivos no se aplican siempre sobre el precio original." },
                { id: "po-d-10", text: "Una bicicleta cuesta $900. Recibe un descuento del 25% y después un impuesto del 16%. ¿Cuál es el precio final?", answer: "$783", explanation: "El descuento leaves $675. El impuesto de 16% is $108. Sumando ambos obtenemos $783.", hint: "Calcula primero el 25% de $900 y usa el precio restante como nueva base." },
                { id: "po-d-11", text: "Un artículo cuests $250 y después de un descuento queda en $200. ¿Cuál fue el porcentaje de descuento?", answer: "20%", explanation: "La reducción fue de $50. $50 represents 20% of $250.", hint: "Divide la cantidad descontada entre el precio original." },
                { id: "po-d-12", text: "Una computadora quedó en $720 después de un descuento del 10%. ¿Cuál era su precio original?", answer: "$800", explanation: "Después de un descuento del 10%, queda el 90% del precio original. $720 ÷ 0.90 = $800.", hint: "$720 represents the 90% del precio original." },
                { id: "po-d-13", text: "Un teléfono cuesta $540 después de aumentar su precio un 20%. ¿Cuál era su precio original?", answer: "$450", explanation: "$540 represents el 120% del precio original. Dividimos $540 entre 1.20 y obtenemos $450.", hint: "Después del aumento tienes el 120% del precio inicial." },
                { id: "po-d-14", text: "Una camisa cuesta $68 después de un descuento del 15%. ¿Cuál era su precio original?", answer: "$80", explanation: "Después de quitar 15%, queda el 85%. $68 ÷ 0.85 = $80.", hint: "El precio final represents el 85% del original." },
                { id: "po-d-15", text: "Una bicicleta cuesta $765 después de aumentar su precio un 10%. ¿Cuál era su precio original?", answer: "$695.45", explanation: "$765 represents el 110% del precio original. Dividimos 765 entre 1.10 y obtenemos aproximadamente $695.45.", hint: "El precio final represents el 110% del precio original." },
                { id: "po-d-16", text: "Un producto cuesta $425 después de un descuento del 15%. ¿Cuál era su precio original?", answer: "$500", explanation: "Después del descuento queda el 85%. $425 ÷ 0.85 = $500.", hint: "Piensa qué porcentaje del precio original quedó después del descuento." },
                { id: "po-d-17", text: "Una televisión cuesta $1,080 después de aumentar un 20%. ¿Cuál era su precio original?", answer: "$900", explanation: "$1,080 represents el 120% del precio inicial. $1,080 ÷ 1.20 = $900.", hint: "Convierte el 120% a 1.20." },
                { id: "po-d-18", text: "Un videojuego cuesta $56 después de un descuento del 30%. ¿Cuál era su precio original?", answer: "$80", explanation: "Después de quitar 30%, queda el 70%. $56 ÷ 0.70 = $80.", hint: "El precio final es el 70% del original." },
                { id: "po-d-19", text: "Una mochila cuesta $102 después de aumentar un 20%. ¿Cuál era su precio original?", answer: "$85", explanation: "El precio final represents el 120%. $102 ÷ 1.20 = $85.", hint: "Divide el precio final entre 1.20." },
                { id: "po-d-20", text: "Un reloj cuesta $144 después de un descuento del 10%. ¿Cuál era su precio original?", answer: "$160", explanation: "Después del descuento queda el 90%. $144 ÷ 0.90 = $160.", hint: "El precio final represents nueve décimas del precio original." },
                { id: "po-d-21", text: "Una población aumenta de 20,000 a 23,000 habitantes. ¿Cuál fue el porcentaje de aumento?", answer: "15%", explanation: "El aumento fue de 3,000. Dividimos 3,000 entre 20,000 y multiplicamos por 100: 15%.", hint: "Usa la población inicial como referencia." },
                { id: "po-d-22", text: "Una población disminuye de 50,000 a 42,500 habitantes. ¿Cuál fue el porcentaje de disminución?", answer: "15%", explanation: "La disminución fue de 7,500. 7,500 ÷ 50,000 × 100 = 15%.", hint: "Primero calcula cuántos habitantes se perdieron." },
                { id: "po-d-23", text: "Una empresa aumenta sus ventas de $80,000 a $96,000. ¿Cuál fue el porcentaje de aumento?", answer: "20%", explanation: "El aumento fue de $16,000. $16,000 ÷ $80,000 × 100 = 20%.", hint: "Divide el aumento entre las ventas originales." },
                { id: "po-d-24", text: "Una empresa reduce sus gastos de $60,000 a $51,000. ¿Cuál fue el porcentaje de reducción?", answer: "15%", explanation: "La reducción fue de $9,000. $9,000 ÷ $60,000 × 100 = 15%.", hint: "El denominador debe ser el gasto original." },
                { id: "po-d-25", text: "Un estudiante aumenta su puntuación de 70 a 84 puntos. ¿Cuál fue el porcentaje de aumento?", answer: "20%", explanation: "Aumentó 14 puntos. 14 ÷ 70 × 100 = 20%.", hint: "Compara los puntos ganados con la puntuación inicial." },
                { id: "po-d-26", text: "La producción de una fábrica baja de 5,000 a 4,250 unidades. ¿Cuál fue el porcentaje de disminución?", answer: "15%", explanation: "Se redujeron 750 unidades. 750 ÷ 5,000 × 100 = 15%.", hint: "Encuentra primero la cantidad que disminuyó." },
                { id: "po-d-27", text: "Un producto aumenta de $240 a $300. ¿Cuál fue el porcentaje de aumento?", answer: "25%", explanation: "El aumento is $60. $60 ÷ $240 × 100 = 25%.", hint: "Usa $240 como el 100%." },
                { id: "po-d-28", text: "Un producto baja de $450 a $360. ¿Cuál fue el porcentaje de disminución?", answer: "20%", explanation: "La reducción is de $90. $90 ÷ $450 × 100 = 20%.", hint: "Calcula la diferencia y compárala con $450." },
                { id: "po-d-29", text: "Una tienda aumenta sus ventas de 1,200 a 1,500 unidades. ¿Cuál fue el porcentaje de aumento?", answer: "25%", explanation: "El aumento is de 300 unidades. 300 ÷ 1,200 × 100 = 25%.", hint: "Las 1,200 unidades iniciales representan el 100%." },
                { id: "po-d-30", text: "Una empresa reduce sus empleados de 800 a 680. ¿Cuál fue el porcentaje de reducción?", answer: "15%", explanation: "Se redujeron 120 empleados. 120 ÷ 800 × 100 = 15%.", hint: "Compara los empleados eliminados con los 800 originales." },
                { id: "po-d-31", text: "Un artículo cuesta $600. Se aplica un descuento del 20% y luego un aumento del 20%. ¿Cuál es el precio final?", answer: "$576", explanation: "El descuento leaves $480. El aumento del 20% se calcula sobre $480, dando $96. El precio final es $576.", hint: "Un aumento y una disminución iguales no se cancelan cuando se aplican sobre bases diferentes." },
                { id: "po-d-32", text: "Un producto cuests $1,000. Se aumenta un 30% y después se aplica un descuento del 30%. ¿Cuál es el precio final?", answer: "$910", explanation: "El aumento lleva el precio a $1,300. El descuento es 30% de $1,300, es decir $390. Quedan $910.", hint: "El descuento se aplica sobre $1,300, no sobre $1,000." },
                { id: "po-d-33", text: "Una computadora cuesta $2,000. Se aplican dos descuentos consecutivos del 10% y 20%. ¿Cuál es el precio final?", answer: "$1,440", explanation: "El primer descuento leaves $1,800. El segundo descuento is $360. El precio final es $1,440.", hint: "Aplica el segundo 20% sobre $1,800." },
                { id: "po-d-34", text: "Un teléfono cuesta $900. Se aumenta un 25% y después se descuenta un 20%. ¿Cuál es el precio final?", answer: "$900", explanation: "El aumento lleva el precio a $1,125. El 20% de $1,125 is $225. Al restarlo quedan $900.", hint: "Calcula cada porcentaje usando como base el precio que resulte del paso anterior." },
                { id: "po-d-35", text: "Una bicicleta cuesta $800. Se descuenta un 15% y después se aplica un impuesto del 16%. ¿Cuál es el precio final?", answer: "$788.80", explanation: "Después del descuento quedan $680. El impuesto is $108.80. Sumando ambos obtenemos $788.80.", hint: "Primero reduce el precio y luego calcula el impuesto." },
                { id: "po-d-36", text: "Un producto cuesta $350. Se aumenta un 20% y después se aplica un descuento del 25%. ¿Cuál es el precio final?", answer: "$315", explanation: "El aumento lleva el precio a $420. El 25% de $420 is $105. Después del descuento quedan $315.", hint: "El 25% final se calcula sobre $420." },
                { id: "po-d-37", text: "Un televisor cuesta $1,500. Se aplica un descuento del 18% y después un impuesto del 12%. ¿Cuál es el precio final?", answer: "$1,377.60", explanation: "El descuento is $270, dejando $1,230. El impuesto is $147.60. El total es $1,377.60.", hint: "Calcula el impuesto sobre el precio después del descuento." },
                { id: "po-d-38", text: "Una computadora cuesta $2,400. Aumenta un 15% y después recibe un descuento del 10%. ¿Cuál es el precio final?", answer: "$2,484", explanation: "El aumento produce $2,760. El descuento is $276. Por lo tanto, quedan $2,484.", hint: "Primero calcula el 15% de $2,400." },
                { id: "po-d-39", text: "Un automóvil cuesta $20,000. Su precio aumenta un 8% y posteriormente disminuye un 5%. ¿Cuál es el precio final?", answer: "$20,520", explanation: "El aumento lleva el precio a $21,600. El 5% de $21,600 is $1,080. Restándolo quedan $20,520.", hint: "El 5% se calcula sobre $21,600." },
                { id: "po-d-40", text: "Una máquina cuesta $5,000. Tiene un descuento del 12% y después se aplica un impuesto del 16%. ¿Cuál es el precio final?", answer: "$5,104", explanation: "El descuento leaves $4,400. El impuesto de 16% is $704. El precio final es $5,104.", hint: "Calcula primero $5,000 − 12% y después agrega el 16%." },
                { id: "po-d-41", text: "Un producto cuesta $720 después de aplicarle un descuento del 20%. ¿Cuál era su precio original?", answer: "$900", explanation: "Después del descuento queda el 80% del precio. $720 ÷ 0.80 = $900.", hint: "Si se quitó 20%, quedó el 80%." },
                { id: "po-d-42", text: "Una televisión cuesta $1,380 después de aumentar su precio un 15%. ¿Cuál era su precio original?", answer: "$1,200", explanation: "El precio final represents el 115% del original. $1,380 ÷ 1.15 = $1,200.", hint: "El aumento hizo que el precio final fuera el 115% del original." },
                { id: "po-d-43", text: "Una bicicleta cuesta $680 después de un descuento del 15%. ¿Cuál era su precio original?", answer: "$800", explanation: "Después de descontar 15%, queda el 85%. $680 ÷ 0.85 = $800.", hint: "El precio final represents el 85% del original." },
                { id: "po-d-44", text: "Un teléfono cuesta $1,080 después de aumentar un 20%. ¿Cuál era su precio original?", answer: "$900", explanation: "$1,080 represents el 120% del precio original. $1,080 ÷ 1.20 = $900.", hint: "Usa 1.20 como multiplicador del precio inicial." },
                { id: "po-d-45", text: "Una computadora cuesta $1,530 después de un descuento del 15%. ¿Cuál era su precio original?", answer: "$1,800", explanation: "El precio final corresponde al 85% del precio original. $1,530 ÷ 0.85 = $1,800.", hint: "Después de quitar 15%, todavía queda el 85%." },
                { id: "po-d-46", text: "Una tienda aumenta el precio de un producto de $250 a $300 y posteriormente aplica un descuento del 10%. ¿Cuál es el precio final?", answer: "$270", explanation: "El nuevo precio antes del descuento es $300. El 10% de $300 is $30. Al restarlo quedan $270.", hint: "El descuento se aplica al nuevo precio de $300." },
                { id: "po-d-47", text: "Un artículo cuesta $400. Su precio aumenta un 25% y después disminuye un 20%. ¿Cuál es el precio final?", answer: "$400", explanation: "El aumento de 25% lleva el precio a $500. El descuento del 20% sobre $500 is $100. El precio vuelve a $400.", hint: "Primero calcula el precio después del aumento." },
                { id: "po-d-48", text: "Una empresa tenía 2,500 empleados. Redujo su plantilla un 12% y posteriormente aumentó el número de empleados un 10%. ¿Cuántos empleados tiene ahora?", answer: "2,420", explanation: "El 12% de 2,500 is 300, dejando 2,200 empleados. El aumento del 10% sobre 2,200 is 220. Finalmente hay 2,420.", hint: "El aumento del 10% se aplica sobre los 2,200 empleados restantes." },
                { id: "po-d-49", text: "Una inversión de $10,000 aumenta un 15% durante el primer año y un 10% durante el segundo año. ¿Cuál es su valor final?", answer: "$12,650", explanation: "Después del primer año vale $11,500. El 10% del segundo año is $1,150. Sumando obtenemos $12,650.", hint: "El segundo 10% se calcula sobre $11,500." },
                { id: "po-d-50", text: "Una tienda compra un producto por $400, le agrega un margen de ganancia del 25% y después ofrece un descuento del 10% sobre el precio de venta. ¿Cuál es el precio final para el cliente?", answer: "$450", explanation: "El margen del 25% agrega $100, por lo que el precio de venta es $500. El descuento del 10% is $50. El cliente paga $450.", hint: "Primero agrega la ganancia al costo y después calcula el descuento sobre el nuevo precio." }
            ]
        }
    },

    signos: {
        name: "Ley de los signos",
        icon: "±",
        description: "Suma, resta y multiplicación con números positivos y negativos.",
        questions: {
            facil: [{
                    id: "si-f-1",
                    text: "¿Cuánto es −5 + 8?",
                    answer: "3",
                    explanation: "Al sumar −5 y +8, gana el número con mayor valor absoluto: 8 − 5 = 3. El resultado es positivo.",
                    hint: "Resta los valores absolutos y conserva el signo del número mayor."
                },
                {
                    id: "si-f-2",
                    text: "¿Cuánto es (−6) × (−4)?",
                    answer: "24",
                    explanation: "Negativo por negativo da positivo. 6 × 4 = 24.",
                    hint: "− × − = +."
                }
            ],

            medio: [{
                    id: "si-m-1",
                    text: "¿Cuánto es −12 − (−5)?",
                    answer: "-7",
                    explanation: "Restar −5 equivale a sumar 5: −12 + 5 = −7.",
                    hint: "Dos signos negativos juntos se convierten en suma."
                },
                {
                    id: "si-m-2",
                    text: "¿Cuánto es −15 − 4(−3)?",
                    answer: "-3",
                    explanation: "4(−3) = −12. Entonces −15 − (−12) = −15 + 12 = −3.",
                    hint: "Resuelve primero la multiplicación."
                }
            ],

            dificil: [{
                    id: "si-d-1",
                    text: "¿Cuánto es −8 + 3(−4)?",
                    answer: "-20",
                    explanation: "3(−4) = −12. Entonces −8 + (−12) = −20.",
                    hint: "Primero realiza la multiplicación."
                },
                {
                    id: "si-d-2",
                    text: "¿Cuánto es (−6)(4) − (−8)?",
                    answer: "-16",
                    explanation: "(−6)(4) = −24. Entonces −24 − (−8) = −24 + 8 = −16.",
                    hint: "Recuerda que restar un negativo equivale a sumar."
                }
            ]
        }
    },

    potencias: {
        name: "Potencias y raíces",
        icon: "√",
        description: "Potencias, raíces cuadradas y operaciones combinadas.",
        questions: {
            facil: [{
                    id: "po2-f-1",
                    text: "¿Cuánto es 5²?",
                    answer: "25",
                    explanation: "5² significa 5 × 5 = 25.",
                    hint: "El exponente 2 indica que multiplicas la base por sí misma."
                },
                {
                    id: "po2-f-2",
                    text: "¿Cuál es √81?",
                    answer: "9",
                    explanation: "9 × 9 = 81, por lo tanto √81 = 9.",
                    hint: "Busca el número que multiplicado por sí mismo da 81."
                }
            ],

            medio: [{
                    id: "po2-m-1",
                    text: "¿Cuánto es 2⁵?",
                    answer: "32",
                    explanation: "2 × 2 × 2 × 2 × 2 = 32.",
                    hint: "Multiplica 2 cinco veces."
                },
                {
                    id: "po2-m-2",
                    text: "¿Cuánto es 3² + √64?",
                    answer: "17",
                    explanation: "3² = 9 y √64 = 8. Entonces 9 + 8 = 17.",
                    hint: "Calcula primero la potencia y la raíz."
                }
            ],

            dificil: [{
                    id: "po2-d-1",
                    text: "¿Cuánto es 2⁴ + √81 − 5?",
                    answer: "20",
                    explanation: "2⁴ = 16 y √81 = 9. Entonces 16 + 9 − 5 = 20.",
                    hint: "Resuelve primero potencia y raíz."
                },
                {
                    id: "po2-d-2",
                    text: "¿Cuánto es √100 + 3³ − 7?",
                    answer: "30",
                    explanation: "√100 = 10 y 3³ = 27. Entonces 10 + 27 − 7 = 30.",
                    hint: "Calcula primero la raíz y la potencia."
                }
            ]
        }
    },

    algebra: {
        name: "Álgebra",
        icon: "x",
        description: "Ecuaciones y expresiones algebraicas.",
        questions: {
            facil: [
                { id: "al-f-1", text: "Simplifica 3x + 5x.", answer: "8x", explanation: "3x y 5x son términos semejantes, así que sumamos sus coeficientes: 3 + 5 = 8.", hint: "Junta los términos que tienen la misma variable." },
                { id: "al-f-2", text: "Simplifica 9a - 4a.", answer: "5a", explanation: "Restamos los coeficientes de los términos semejantes: 9 - 4 = 5.", hint: "Conserva la letra y opera con los números." },
                { id: "al-f-3", text: "Simplifica 7y + 2 - 3y.", answer: "4y + 2", explanation: "7y - 3y = 4y. El número 2 no tiene términos semejantes, así que permanece.", hint: "No combines una variable con una constante." },
                { id: "al-f-4", text: "Simplifica 5m + 3m - 2.", answer: "8m - 2", explanation: "Sumamos 5m + 3m = 8m y dejamos el -2 sin cambios.", hint: "Agrupa primero los términos que contienen m." },
                { id: "al-f-5", text: "Calcula 2x + 7 cuando x = 4.", answer: "15", explanation: "Sustituimos x por 4: 2(4) + 7 = 8 + 7 = 15.", hint: "Reemplaza la variable por el valor indicado." },
                { id: "al-f-6", text: "Calcula 3a - 5 cuando a = 6.", answer: "13", explanation: "3(6) - 5 = 18 - 5 = 13.", hint: "Multiplica primero y después resta." },
                { id: "al-f-7", text: "Calcula x² + 1 cuando x = 5.", answer: "26", explanation: "Primero calculamos 5² = 25. Después sumamos 1: 25 + 1 = 26.", hint: "Resuelve primero la potencia." },
                { id: "al-f-8", text: "Resuelve x + 7 = 12.", answer: "x = 5", explanation: "Restamos 7 en ambos lados: x = 12 - 7 = 5.", hint: "Usa la operación contraria de sumar." },
                { id: "al-f-9", text: "Resuelve x - 9 = 4.", answer: "x = 13", explanation: "Sumamos 9 a ambos lados: x = 4 + 9 = 13.", hint: "Deshaz la resta con una suma." },
                { id: "al-f-10", text: "Resuelve 4x = 20.", answer: "x = 5", explanation: "Dividimos ambos lados entre 4: x = 20 ÷ 4 = 5.", hint: "La operación contraria de multiplicar es dividir." },
                { id: "al-f-11", text: "Resuelve x/3 = 6.", answer: "x = 18", explanation: "Multiplicamos ambos lados por 3: x = 6 × 3 = 18.", hint: "Elimina el denominador multiplicando por 3." },
                { id: "al-f-12", text: "Simplifica 2(x + 3).", answer: "2x + 6", explanation: "Aplicamos la propiedad distributiva: 2·x + 2·3 = 2x + 6.", hint: "Multiplica el 2 por cada término del paréntesis." },
                { id: "al-f-13", text: "Simplifica 5(x - 2).", answer: "5x - 10", explanation: "Multiplicamos 5 por x y por -2: 5x - 10.", hint: "No olvides conservar el signo negativo." },
                { id: "al-f-14", text: "Simplifica 3(a + 4) + 2a.", answer: "5a + 12", explanation: "Distribuimos el 3: 3a + 12 + 2a. Después sumamos 3a + 2a = 5a.", hint: "Quita primero el paréntesis." },
                { id: "al-f-15", text: "Simplifica 4y - 2(y + 3).", answer: "2y - 6", explanation: "Distribuimos -2: 4y - 2y - 6. Después 4y - 2y = 2y.", hint: "El -2 afecta a todos los términos del paréntesis." },
                { id: "al-f-16", text: "¿Cuál es el coeficiente de 7x?", answer: "7", explanation: "El coeficiente es el número que multiplica directamente a la variable.", hint: "Busca el número que acompaña a x." },
                { id: "al-f-17", text: "¿Cuál es la constante en 4x + 9?", answer: "9", explanation: "La constante es el término que no contiene ninguna variable.", hint: "Busca el término que no tiene letra." },
                { id: "al-f-18", text: "¿Cuál es el grado del monomio 6x³?", answer: "3", explanation: "El grado de este monomio corresponde al exponente de x, que es 3.", hint: "Observa el exponente de la variable." },
                { id: "al-f-19", text: "Multiplica 3x por 4.", answer: "12x", explanation: "Multiplicamos 3 × 4 = 12 y conservamos la variable x.", hint: "Opera primero con los coeficientes." },
                { id: "al-f-20", text: "Multiplica 2x por 5x.", answer: "10x²", explanation: "2 × 5 = 10 y x × x = x².", hint: "Al multiplicar la misma variable, suma sus exponentes." },
                { id: "al-f-21", text: "Divide 12x entre 3.", answer: "4x", explanation: "Dividimos el coeficiente 12 entre 3 y mantenemos x.", hint: "Divide solamente el coeficiente." },
                { id: "al-f-22", text: "Simplifica x + x + x + x.", answer: "4x", explanation: "Tenemos cuatro términos iguales x, por lo que el resultado es 4x.", hint: "Cuenta cuántas veces aparece x." },
                { id: "al-f-23", text: "Simplifica 10b - b.", answer: "9b", explanation: "Una b sola equivale a 1b. Entonces 10b - 1b = 9b.", hint: "Recuerda que una variable sola tiene coeficiente 1." },
                { id: "al-f-24", text: "Calcula 4p + 2 cuando p = 3.", answer: "14", explanation: "Sustituimos p por 3: 4(3) + 2 = 12 + 2 = 14.", hint: "Sustituye primero y después realiza las operaciones." },
                { id: "al-f-25", text: "Calcula 2n² cuando n = 4.", answer: "32", explanation: "4² = 16 y 2 × 16 = 32.", hint: "Calcula primero la potencia." },
                { id: "al-f-26", text: "Resuelve 2x + 3 = 11.", answer: "x = 4", explanation: "Restamos 3: 2x = 8. Luego dividimos entre 2: x = 4.", hint: "Primero elimina la constante." },
                { id: "al-f-27", text: "Resuelve 3x - 2 = 10.", answer: "x = 4", explanation: "Sumamos 2: 3x = 12. Dividimos entre 3 y obtenemos x = 4.", hint: "Deshaz las operaciones en orden inverso." },
                { id: "al-f-28", text: "Resuelve 5x + 1 = 26.", answer: "x = 5", explanation: "Restamos 1: 5x = 25. Dividimos entre 5: x = 5.", hint: "Aísla primero el término con x." },
                { id: "al-f-29", text: "Resuelve 7x - 14 = 0.", answer: "x = 2", explanation: "Sumamos 14: 7x = 14. Al dividir entre 7 obtenemos x = 2.", hint: "Convierte primero la ecuación en 7x = 14." },
                { id: "al-f-30", text: "Resuelve 2(x + 4) = 14.", answer: "x = 3", explanation: "Dividimos entre 2: x + 4 = 7. Restamos 4: x = 3.", hint: "Elimina primero el factor 2." },
                { id: "al-f-31", text: "Resuelve 3(x - 2) = 15.", answer: "x = 7", explanation: "Dividimos entre 3: x - 2 = 5. Sumamos 2 y obtenemos x = 7.", hint: "Quita primero el número que multiplica al paréntesis." },
                { id: "al-f-32", text: "Simplifica 2x + 3x + 4x.", answer: "9x", explanation: "Sumamos los coeficientes: 2 + 3 + 4 = 9.", hint: "Todos los términos son semejantes." },
                { id: "al-f-33", text: "Simplifica 6a - 2a + a.", answer: "5a", explanation: "6a - 2a + 1a = 5a.", hint: "La a sola equivale a 1a." },
                { id: "al-f-34", text: "Simplifica 8z + 3 - 5z + 2.", answer: "3z + 5", explanation: "8z - 5z = 3z y 3 + 2 = 5.", hint: "Separa variables y constantes." },
                { id: "al-f-35", text: "Simplifica 7m - 4 + 2m + 6.", answer: "9m + 2", explanation: "7m + 2m = 9m y -4 + 6 = 2.", hint: "Agrupa términos semejantes." },
                { id: "al-f-36", text: "Calcula 5x - 3 cuando x = 2.", answer: "7", explanation: "5(2) - 3 = 10 - 3 = 7.", hint: "Multiplica antes de restar." },
                { id: "al-f-37", text: "Calcula 3x² + 2 cuando x = 2.", answer: "14", explanation: "2² = 4; después 3(4) + 2 = 14.", hint: "La potencia se resuelve antes de multiplicar." },
                { id: "al-f-38", text: "Calcula 2a² - 1 cuando a = 3.", answer: "17", explanation: "3² = 9 y 2(9) - 1 = 17.", hint: "Calcula primero el cuadrado de a." },
                { id: "al-f-39", text: "¿Qué valor de x hace verdadera la ecuación x + 8 = 15?", answer: "x = 7", explanation: "Restamos 8 a ambos lados: x = 15 - 8 = 7.", hint: "Busca el número que sumado a 8 dé 15." },
                { id: "al-f-40", text: "¿Qué valor de x hace verdadera la ecuación 9 - x = 4?", answer: "x = 5", explanation: "9 - 5 = 4, por lo tanto x = 5.", hint: "Pregunta qué número debes quitarle a 9 para obtener 4." },
                { id: "al-f-41", text: "Resuelve 6x = 42.", answer: "x = 7", explanation: "Dividimos 42 entre 6 y obtenemos 7.", hint: "Divide entre el coeficiente de x." },
                { id: "al-f-42", text: "Resuelve x/5 = 9.", answer: "x = 45", explanation: "Multiplicamos ambos lados por 5: x = 45.", hint: "Elimina el denominador con una multiplicación." },
                { id: "al-f-43", text: "Simplifica 4(x + 2) - x.", answer: "3x + 8", explanation: "Distribuimos: 4x + 8 - x. Luego 4x - x = 3x.", hint: "Quita primero el paréntesis." },
                { id: "al-f-44", text: "Simplifica 2(3x - 1).", answer: "6x - 2", explanation: "Multiplicamos 2 por 3x y por -1.", hint: "Aplica la propiedad distributiva a ambos términos." },
                { id: "al-f-45", text: "Simplifica 3(2a + 5) - a.", answer: "5a + 15", explanation: "3(2a + 5) = 6a + 15. Luego 6a - a = 5a.", hint: "Recuerda que -a equivale a -1a." },
                { id: "al-f-46", text: "¿Cuál de los siguientes términos es semejante a 5x: 3x, 7 o 2y?", answer: "3x", explanation: "Los términos semejantes tienen la misma variable con el mismo exponente.", hint: "Busca la misma letra y el mismo exponente." },
                { id: "al-f-47", text: "Calcula 7 + 2b cuando b = 5.", answer: "17", explanation: "7 + 2(5) = 7 + 10 = 17.", hint: "Sustituye b por 5." },
                { id: "al-f-48", text: "Resuelve x - 3 = 11.", answer: "x = 14", explanation: "Sumamos 3 en ambos lados: x = 14.", hint: "Usa la operación contraria de restar." },
                { id: "al-f-49", text: "Simplifica 5c + 2 - 3c - 1.", answer: "2c + 1", explanation: "5c - 3c = 2c y 2 - 1 = 1.", hint: "Agrupa primero los términos con c." },
                { id: "al-f-50", text: "Calcula 4r² cuando r = 3.", answer: "36", explanation: "3² = 9 y 4 × 9 = 36.", hint: "Calcula primero la potencia." }
            ],
            medio: [
                { id: "al-m-1", text: "Resuelve 4x + 7 = 31.", answer: "x = 6", explanation: "Restamos 7: 4x = 24. Dividimos entre 4: x = 6.", hint: "Aísla primero 4x." },
                { id: "al-m-2", text: "Resuelve 7x - 5 = 30.", answer: "x = 5", explanation: "Sumamos 5: 7x = 35. Dividimos entre 7: x = 5.", hint: "Elimina primero la constante negativa." },
                { id: "al-m-3", text: "Resuelve 3x + 8 = x + 18.", answer: "x = 5", explanation: "Restamos x: 2x + 8 = 18. Restamos 8: 2x = 10. Finalmente x = 5.", hint: "Lleva las variables al mismo lado." },
                { id: "al-m-4", text: "Resuelve 5x - 4 = 2x + 11.", answer: "x = 5", explanation: "Restamos 2x: 3x - 4 = 11. Sumamos 4: 3x = 15. Dividimos entre 3.", hint: "Junta primero los términos con x." },
                { id: "al-m-5", text: "Resuelve 2(3x - 1) = 16.", answer: "x = 3", explanation: "Dividimos entre 2: 3x - 1 = 8. Sumamos 1 y obtenemos 3x = 9.", hint: "Puedes quitar primero el factor 2." },
                { id: "al-m-6", text: "Resuelve 3(x + 4) - 2 = 19.", answer: "x = 3", explanation: "Distribuimos: 3x + 12 - 2 = 19. Entonces 3x + 10 = 19 y x = 3.", hint: "Distribuye y después combina las constantes." },
                { id: "al-m-7", text: "Resuelve 5(x - 2) + 3 = 18.", answer: "x = 5", explanation: "5x - 10 + 3 = 18. Entonces 5x - 7 = 18 y 5x = 25.", hint: "Simplifica las constantes antes de despejar." },
                { id: "al-m-8", text: "Resuelve 4(2x + 1) = 3x + 17.", answer: "x = 13/5", explanation: "8x + 4 = 3x + 17. Restamos 3x y 4: 5x = 13.", hint: "Distribuye primero y después reúne las x." },
                { id: "al-m-9", text: "Resuelve x/2 + 3 = 9.", answer: "x = 12", explanation: "Restamos 3: x/2 = 6. Multiplicamos por 2: x = 12.", hint: "Deja sola la fracción antes de eliminar el denominador." },
                { id: "al-m-10", text: "Resuelve 3x/4 = 15.", answer: "x = 20", explanation: "Multiplicamos por 4: 3x = 60. Después dividimos entre 3.", hint: "Elimina primero el denominador." },
                { id: "al-m-11", text: "Simplifica 3x² + 5x - 2x² + x.", answer: "x² + 6x", explanation: "3x² - 2x² = x² y 5x + x = 6x.", hint: "Agrupa términos según su exponente." },
                { id: "al-m-12", text: "Simplifica 4a² - 3a + 2a² + 7a.", answer: "6a² + 4a", explanation: "Sumamos los términos con a² y después los términos con a.", hint: "No mezcles términos con diferentes exponentes." },
                { id: "al-m-13", text: "Multiplica 3x(2x + 5).", answer: "6x² + 15x", explanation: "3x·2x = 6x² y 3x·5 = 15x.", hint: "Multiplica el monomio por cada término." },
                { id: "al-m-14", text: "Multiplica 2a(4a - 3).", answer: "8a² - 6a", explanation: "Multiplicamos 2a por 4a y después por -3.", hint: "Cuida el signo negativo del segundo producto." },
                { id: "al-m-15", text: "Desarrolla (x + 3)(x + 2).", answer: "x² + 5x + 6", explanation: "Multiplicamos cada término: x² + 2x + 3x + 6. Después sumamos 2x + 3x.", hint: "Distribuye cada término del primer paréntesis." },
                { id: "al-m-16", text: "Desarrolla (x - 4)(x + 2).", answer: "x² - 2x - 8", explanation: "x² + 2x - 4x - 8 = x² - 2x - 8.", hint: "Revisa cuidadosamente el producto de -4 por 2." },
                { id: "al-m-17", text: "Factoriza x² + 7x + 12.", answer: "(x + 3)(x + 4)", explanation: "3 × 4 = 12 y 3 + 4 = 7.", hint: "Busca dos números cuyo producto sea 12 y cuya suma sea 7." },
                { id: "al-m-18", text: "Factoriza x² + 9x + 20.", answer: "(x + 4)(x + 5)", explanation: "4 × 5 = 20 y 4 + 5 = 9.", hint: "Busca factores positivos de 20." },
                { id: "al-m-19", text: "Factoriza x² - 5x + 6.", answer: "(x - 2)(x - 3)", explanation: "(-2)(-3) = 6 y -2 + -3 = -5.", hint: "Ambos números deben ser negativos." },
                { id: "al-m-20", text: "Resuelve x² - 5x + 6 = 0.", answer: "x = 2 y x = 3", explanation: "Factorizamos (x - 2)(x - 3) = 0. Por la propiedad del producto cero, x puede ser 2 o 3.", hint: "Factoriza antes de buscar las soluciones." },
                { id: "al-m-21", text: "Resuelve x² - 9 = 0.", answer: "x = 3 y x = -3", explanation: "x² - 9 = (x - 3)(x + 3). Por ello las soluciones son ±3.", hint: "Reconoce una diferencia de cuadrados." },
                { id: "al-m-22", text: "Resolves x² + 6x + 9 = 0.", answer: "x = -3", explanation: "x² + 6x + 9 = (x + 3)². Por lo tanto x + 3 = 0.", hint: "Identifica el trinomio como un cuadrado perfecto." },
                { id: "al-m-23", text: "Resuelve 2x² - 8 = 0.", answer: "x = 2 y x = -2", explanation: "Dividimos entre 2: x² - 4 = 0. Entonces x² = 4 y x = ±2.", hint: "Aísla primero x²." },
                { id: "al-m-24", text: "Resuelve x² = 49.", answer: "x = 7 y x = -7", explanation: "Tanto 7² como (-7)² son 49, por lo que existen dos soluciones.", hint: "No olvides la raíz positiva y la negativa." },
                { id: "al-m-25", text: "Simplifica x² · x³.", answer: "x⁵", explanation: "Al multiplicar potencias de la misma base, sumamos los exponentes: 2 + 3 = 5.", hint: "Conserva la base y suma los exponentes." },
                { id: "al-m-26", text: "Simplifica x⁷/x³.", answer: "x⁴", explanation: "Al dividir potencias con la misma base, restamos los exponentes: 7 - 3 = 4.", hint: "En una división de potencias, resta los exponentes." },
                { id: "al-m-27", text: "Simplifica (2x²)(3x³).", answer: "6x⁵", explanation: "2 × 3 = 6 y 2 + 3 = 5 para los exponentes de x.", hint: "Resuelve números y potencias por separado." },
                { id: "al-m-28", text: "Simplifica (x³)².", answer: "x⁶", explanation: "En una potencia de una potencia multiplicamos exponentes: 3 × 2 = 6.", hint: "Aquí los exponentes se multiplican." },
                { id: "al-m-29", text: "Resuelve 2x + 5 < 17.", answer: "x < 6", explanation: "Restamos 5: 2x < 12. Dividimos entre 2: x < 6.", hint: "Como divides entre un número positivo, el signo no cambia." },
                { id: "al-m-30", text: "Resuelve 3x - 4 ≥ 11.", answer: "x ≥ 5", explanation: "Sumamos 4: 3x ≥ 15. Dividimos entre 3 y obtenemos x ≥ 5.", hint: "Despeja x como en una ecuación." },
                { id: "al-m-31", text: "Resuelve -2x > 10.", answer: "x < -5", explanation: "Al dividir una desigualdad entre un número negativo, invertimos el signo: x < -5.", hint: "Recuerda la regla especial para números negativos." },
                { id: "al-m-32", text: "Resuelve x/3 - 2 = 4.", answer: "x = 18", explanation: "Sumamos 2: x/3 = 6. Multiplicamos por 3: x = 18.", hint: "Aísla primero la fracción." },
                { id: "al-m-33", text: "Resuelve 0.5x + 2 = 7.", answer: "x = 10", explanation: "Restamos 2: 0.5x = 5. Como 5 ÷ 0.5 = 10, x = 10.", hint: "Puedes pensar en 0.5 como 1/2." },
                { id: "al-m-34", text: "Resuelve 1.2x - 3 = 9.", answer: "x = 10", explanation: "Sumamos 3: 1.2x = 12. Dividimos 12 entre 1.2 y obtenemos 10.", hint: "Elimina primero la constante." },
                { id: "al-m-35", text: "Resuelve el sistema x + y = 10 y x - y = 2.", answer: "x = 6, y = 4", explanation: "Sumamos las ecuaciones: 2x = 12, así que x = 6. Sustituimos y obtenemos y = 4.", hint: "Al sumar las ecuaciones se elimina y." },
                { id: "al-m-36", text: "Resuelve el sistema 2x + y = 11 y x + y = 7.", answer: "x = 4, y = 3", explanation: "Restamos la segunda ecuación de la primera: x = 4. Sustituimos y obtenemos y = 3.", hint: "Resta las ecuaciones para cancelar y." },
                { id: "al-m-37", text: "Resuelve el sistema x + 2y = 8 y x - y = 2.", answer: "x = 4, y = 2", explanation: "De x - y = 2 obtenemos x = y + 2. Sustituimos en la primera: y + 2 + 2y = 8. Así, y = 2 y x = 4.", hint: "Despeja x en la ecuación más sencilla." },
                { id: "al-m-38", text: "Resuelve el sistema 3x + y = 14 y x + y = 6.", answer: "x = 4, y = 2", explanation: "Restamos las ecuaciones: 2x = 8, por lo que x = 4. Sustituimos y = 2.", hint: "La variable y desaparece al restar." },
                { id: "al-m-39", text: "Si 3 cuadernos cuestan 45 pesos, ¿cuánto cuesta cada cuaderno?", answer: "15 pesos", explanation: "Si x representa el precio de un cuaderno, 3x = 45. Entonces x = 15.", hint: "Divide el costo total entre la cantidad de cuadernos." },
                { id: "al-m-40", text: "Un número aumentado en 12 es 30. ¿Cuál es el número?", answer: "18", explanation: "Planteamos x + 12 = 30. Restamos 12 y obtenemos x = 18.", hint: "\"Aumentado en\" indica una suma." },
                { id: "al-m-41", text: "El doble de un número menos 5 es 17. ¿Cuál es el número?", answer: "11", explanation: "2x - 5 = 17. Sumamos 5 y dividimos entre 2: x = 11.", hint: "Representa \"el doble\" como 2x." },
                { id: "al-m-42", text: "Tres veces un número más 4 es 25. ¿Cuál es el número?", answer: "7", explanation: "3x + 4 = 25. Restamos 4: 3x = 21. Dividimos entre 3: x = 7.", hint: "\"Tres veces\" significa multiplicar por 3." },
                { id: "al-m-43", text: "Simplifica 2(x + 3) + 3(x - 1).", answer: "5x + 3", explanation: "Distribuimos: 2x + 6 + 3x - 3. Después combinamos los términos semejantes.", hint: "Distribuye ambos números antes de simplificar." },
                { id: "al-m-44", text: "Simplifica 4(2x - 3) - 2(x + 1).", answer: "6x - 14", explanation: "Obtenemos 8x - 12 - 2x - 2. Combinando resulta 6x - 14.", hint: "Ten cuidado con el signo negativo delante del segundo paréntesis." },
                { id: "al-m-45", text: "Simplifica (3x + 6)/3.", answer: "x + 2", explanation: "Dividimos cada término entre 3: 3x/3 = x y 6/3 = 2.", hint: "El divisor afecta a todos los términos del numerador." },
                { id: "al-m-46", text: "Resolves 2(x - 3) + 4 = x + 9.", answer: "x = 11", explanation: "2x - 6 + 4 = x + 9. Simplificamos a 2x - 2 = x + 9 y obtenemos x = 11.", hint: "Simplifica primero las constantes." },
                { id: "al-m-47", text: "Resuelve 5 - 2x = 17.", answer: "x = -6", explanation: "Restamos 5: -2x = 12. Dividimos entre -2 y obtenemos x = -6.", hint: "No pierdas el signo negativo del coeficiente." },
                { id: "al-m-48", text: "Factoriza 6x + 12.", answer: "6(x + 2)", explanation: "El factor común de ambos términos es 6. Al sacarlo queda x + 2.", hint: "Busca el número que divide a todos los términos." },
                { id: "al-m-49", text: "Factoriza 5x² + 10x.", answer: "5x(x + 2)", explanation: "Ambos términos tienen 5x como factor común.", hint: "El factor común puede contener número y variable." },
                { id: "al-m-50", text: "Simplifica (2x² + 8x)/(2x).", answer: "x + 4, con x ≠ 0", explanation: "Dividimos cada término entre 2x: 2x²/(2x) = x y 8x/(2x) = 4.", hint: "Divide término por término y considera que x no puede ser 0." }
            ],
            dificil: [
                { id: "al-d-1", text: "Resuelve 2x² - 7x + 3 = 0.", answer: "x = 3 y x = 1/2", explanation: "Factorizamos (2x - 1)(x - 3) = 0. Por lo tanto x = 1/2 o x = 3.", hint: "Busca dos factores cuyo producto genere los tres términos." },
                { id: "al-d-2", text: "Resuelve 3x² - 5x - 2 = 0.", answer: "x = 2 y x = -1/3", explanation: "Factorizamos (3x + 1)(x - 2) = 0. Las soluciones son -1/3 y 2.", hint: "Comprueba que los términos cruzados sumen -5x." },
                { id: "al-d-3", text: "Resuelve x² - 4x - 12 = 0.", answer: "x = 6 y x = -2", explanation: "Factorizamos (x - 6)(x + 2) = 0.", hint: "Busca dos números que multipliquen -12 y sumen -4." },
                { id: "al-d-4", text: "Resuelve x² + 2x - 15 = 0.", answer: "x = 3 y x = -5", explanation: "Factorizamos (x + 5)(x - 3) = 0.", hint: "Los números deben multiplicar -15 y sumar 2." },
                { id: "al-d-5", text: "Resuelve 2x² + 4x - 6 = 0.", answer: "x = 1 y x = -3", explanation: "Dividimos entre 2: x² + 2x - 3 = 0. Factorizamos (x + 3)(x - 1).", hint: "Simplifica la ecuación antes de factorizar." },
                { id: "al-d-6", text: "Resuelve x² - 6x + 1 = 0 usando la fórmula general.", answer: "x = 3 + 2√2 y x = 3 - 2√2", explanation: "Aplicando la fórmula general con a=1, b=-6 y c=1 obtenemos x = (6 ± √32)/2 = 3 ± 2√2.", hint: "Sustituye con cuidado los tres coeficientes." },
                { id: "al-d-7", text: "Resuelve 2x² + x - 3 = 0.", answer: "x = 1 y x = -3/2", explanation: "Factorizamos (2x + 3)(x - 1) = 0.", hint: "Busca factores que produzcan -3 como término independiente." },
                { id: "al-d-8", text: "Resuelve 4x² - 12x + 9 = 0.", answer: "x = 3/2", explanation: "La expresión es (2x - 3)² = 0. Por eso existe una única solución: x = 3/2.", hint: "Comprueba si es un trinomio cuadrado perfecto." },
                { id: "al-d-9", text: "Resuelve 9x² - 25 = 0.", answer: "x = 5/3 y x = -5/3", explanation: "Es una diferencia de cuadrados: (3x - 5)(3x + 5) = 0.", hint: "Identifica los dos cuadrados perfectos." },
                { id: "al-d-10", text: "Resuelve x² + 4x + 8 = 0 en los números reales.", answer: "No tiene soluciones reales.", explanation: "El discriminante es 4² - 4(1)(8) = 16 - 32 = -16. Al ser negativo, no hay raíces reales.", hint: "Calcula primero el discriminante." },
                { id: "al-d-11", text: "Resuelve x² - 10x + 25 = 0.", answer: "x = 5", explanation: "La expresión se puede escribir como (x - 5)² = 0.", hint: "Busca un cuadrado perfecto." },
                { id: "al-d-12", text: "Completa el cuadrado en x² + 8x + 7.", answer: "(x + 4)² - 9", explanation: "La mitad de 8 es 4 y 4² = 16. Reescribimos x² + 8x + 7 como (x + 4)² - 9.", hint: "Toma la mitad del coeficiente de x." },
                { id: "al-d-13", text: "Completa el cuadrado en x² - 6x + 2.", answer: "(x - 3)² - 7", explanation: "La mitad de -6 es -3. Sumamos y restamos 9 para formar el cuadrado perfecto.", hint: "Eleva al cuadrado la mitad del coeficiente de x." },
                { id: "al-d-14", text: "Resuelve x² + 8x + 7 = 0 usando completar el cuadrado.", answer: "x = -1 y x = -7", explanation: "Convertimos la ecuación en (x + 4)² - 9 = 0. Entonces (x + 4)² = 9 y x + 4 = ±3.", hint: "Primero transforma el trinomio en un cuadrado perfecto." },
                { id: "al-d-15", text: "Resuelve (x - 1)/(x + 2) = 3.", answer: "x = -7/2", explanation: "Multiplicamos por x + 2: x - 1 = 3x + 6. Entonces -7 = 2x y x = -7/2.", hint: "Elimina primero el denominador." },
                { id: "al-d-16", text: "Resuelve 2/x = 5.", answer: "x = 2/5", explanation: "Multiplicamos por x: 2 = 5x. Dividimos entre 5 y obtenemos x = 2/5.", hint: "Lleva x fuera del denominador." },
                { id: "al-d-17", text: "Resuelve 1/x + 1/2 = 1.", answer: "x = 2", explanation: "Restamos 1/2: 1/x = 1/2. Por lo tanto x = 2.", hint: "Aísla primero la fracción que contiene x." },
                { id: "al-d-18", text: "Resuelve 3/(x - 1) = 2.", answer: "x = 5/2", explanation: "Multiplicamos por x - 1: 3 = 2(x - 1). Entonces 3 = 2x - 2 y x = 5/2.", hint: "Elimina primero el denominador." },
                { id: "al-d-19", text: "Resuelve 1/(x + 1) = 1/3.", answer: "x = 2", explanation: "Multiplicamos cruzado: 3 = x + 1. Restamos 1 y obtenemos x = 2.", hint: "Usa multiplicación cruzada." },
                { id: "al-d-20", text: "Resuelve (x + 1)/(x - 2) = 2.", answer: "x = 5", explanation: "x + 1 = 2(x - 2). Entonces x + 1 = 2x - 4 y x = 5.", hint: "Multiplica ambos lados por x - 2." },
                { id: "al-d-21", text: "Resuelve √x = 7.", answer: "x = 49", explanation: "Elevamos ambos lados al cuadrado: x = 7² = 49.", hint: "Usa la operación inversa de la raíz cuadrada." },
                { id: "al-d-22", text: "Resuelve √(x + 5) = 4.", answer: "x = 11", explanation: "Elevamos al cuadrado: x + 5 = 16. Restamos 5 y obtenemos x = 11.", hint: "Eleva ambos lados al cuadrado." },
                { id: "al-d-23", text: "Resuelve √(2x - 1) = 5.", answer: "x = 13", explanation: "Al elevar al cuadrado obtenemos 2x - 1 = 25. Entonces 2x = 26 y x = 13.", hint: "Después de eliminar la raíz, despeja x." },
                { id: "al-d-24", text: "Resuelve √(x + 6) = x.", answer: "x = 3", explanation: "Al cuadrar obtenemos x + 6 = x². Factorizamos x² - x - 6 = 0 como (x - 3)(x + 2). Solo x = 3 funciona en la ecuación original.", hint: "Siempre verifica las soluciones de una ecuación con radicales." },
                { id: "al-d-25", text: "Resuelve 2^x = 32.", answer: "x = 5", explanation: "Como 32 = 2⁵, igualamos exponentes y obtenemos x = 5.", hint: "Escribe 32 como potencia de 2." },
                { id: "al-d-26", text: "Resuelve 3^x = 81.", answer: "x = 4", explanation: "81 = 3⁴. Por tener la misma base, x = 4.", hint: "Convierte 81 en una potencia de 3." },
                { id: "al-d-27", text: "Resuelve 5^(x+1) = 125.", answer: "x = 2", explanation: "125 = 5³. Entonces x + 1 = 3 y x = 2.", hint: "Expresa ambos lados usando la misma base." },
                { id: "al-d-28", text: "Simplifica (x² - 9)/(x - 3).", answer: "x + 3, con x ≠ 3", explanation: "x² - 9 = (x - 3)(x + 3). Cancelamos x - 3, teniendo en cuenta que x no puede ser 3.", hint: "Usa diferencia de cuadrados." },
                { id: "al-d-29", text: "Simplifica (x² - 4x)/x.", answer: "x - 4, con x ≠ 0", explanation: "Factorizamos x(x - 4) y cancelamos x. La expresión original exige x ≠ 0.", hint: "Busca un factor x común." },
                { id: "al-d-30", text: "Simplifica (x² + 5x + 6)/(x + 2).", answer: "x + 3, con x ≠ -2", explanation: "Factorizamos el numerador como (x + 2)(x + 3) y cancelamos x + 2.", hint: "Primero factoriza el trinomio." },
                { id: "al-d-31", text: "Resuelve el sistema 2x + 3y = 13 y 4x - y = 5.", answer: "x = 2, y = 3", explanation: "De 4x - y = 5 obtenemos y = 4x - 5. Sustituimos en la primera ecuación: 2x + 3(4x - 5) = 13, de donde x = 2 y y = 3.", hint: "Despeja una variable y sustitúyela en la otra ecuación." },
                { id: "al-d-32", text: "Resuelve el sistema 3x + 2y = 16 y 5x - 2y = 8.", answer: "x = 3, y = 7/2", explanation: "Sumamos las ecuaciones: 8x = 24, así que x = 3. Sustituyendo: 9 + 2y = 16, por lo que y = 7/2.", hint: "Los términos con y se eliminan al sumar." },
                { id: "al-d-33", text: "Resuelve el sistema 2x + y = 9 y 3x - 2y = 4.", answer: "x = 22/7, y = 19/7", explanation: "De la primera ecuación, y = 9 - 2x. Sustituimos en la segunda: 3x - 2(9 - 2x) = 4. Esto da 7x = 22.", hint: "Despejar y en la primera ecuación simplifica el sistema." },
                { id: "al-d-34", text: "La suma de dos números es 20 y su diferencia es 6. ¿Cuáles son los números?", answer: "13 y 7", explanation: "Planteamos x + y = 20 y x - y = 6. Sumando las ecuaciones obtenemos 2x = 26, por lo que x = 13 y y = 7.", hint: "Convierte las dos condiciones en un sistema de ecuaciones." },
                { id: "al-d-35", text: "Un rectángulo tiene un perímetro de 34 cm y su largo mide 3 cm más que su ancho. ¿Cuáles son sus dimensiones?", answer: "Largo = 10 cm, ancho = 7 cm", explanation: "Sea x el ancho. El largo es x + 3. Entonces 2x + 2(x + 3) = 34. De aquí x = 7 y el largo es 10.", hint: "Usa la fórmula del perímetro de un rectángulo." },
                { id: "al-d-36", text: "El producto de dos números consecutivos positivos es 72. ¿Cuáles son los números?", answer: "8 y 9", explanation: "Si el menor es x, el siguiente es x + 1. Entonces x(x + 1) = 72. Factorizamos x² + x - 72 = 0 y obtenemos x = 8.", hint: "Representa los números consecutivos como x y x + 1." },
                { id: "al-d-37", text: "El área de un rectángulo es 48 cm² y el largo mide 2 cm más que el ancho. ¿Cuáles son sus dimensiones?", answer: "Largo = 8 cm, ancho = 6 cm", explanation: "Sea x el ancho. El largo será x + 2. Entonces x(x + 2) = 48. Al factorizar obtenemos x = 6 como solución positiva.", hint: "Expresa el área mediante una ecuación cuadrática." },
                { id: "al-d-38", text: "Un número aumentado en su cuadrado es 20. ¿Cuáles son las soluciones?", answer: "x = 4 y x = -5", explanation: "La ecuación es x² + x = 20. Reordenamos: x² + x - 20 = 0. Factorizamos (x + 5)(x - 4) = 0.", hint: "Traduce \"su cuadrado\" como x²." },
                { id: "al-d-39", text: "Simplifica (2x² - 8)/(2x + 4).", answer: "x - 2, con x ≠ -2", explanation: "Factorizamos el numerador como 2(x - 2)(x + 2) y el denominador como 2(x + 2). Cancelamos los factores comunes.", hint: "Factoriza tanto el numerador como el denominador." },
                { id: "al-d-40", text: "Simplifica (x³ - 8)/(x - 2).", answer: "x² + 2x + 4, con x ≠ 2", explanation: "x³ - 8 es una diferencia de cubos: (x - 2)(x² + 2x + 4). Cancelamos x - 2.", hint: "Recuerda la identidad de diferencia de cubos." },
                { id: "al-d-41", text: "Resuelve (x + 2)² = 25.", answer: "x = 3 y x = -7", explanation: "Sacamos raíz cuadrada: x + 2 = ±5. De ahí salen las dos soluciones.", hint: "Una raíz cuadrada puede tener dos signos." },
                { id: "al-d-42", text: "Resuelve (2x - 1)² = 49.", answer: "x = 4 y x = -3", explanation: "2x - 1 = ±7. Si es 7, x = 4; si es -7, x = -3.", hint: "Considera tanto +7 como -7." },
                { id: "al-d-43", text: "Resuelve x(x - 5) = 14.", answer: "x = 7 y x = -2", explanation: "Expandimos: x² - 5x = 14. Reordenamos y factorizamos: x² - 5x - 14 = (x - 7)(x + 2).", hint: "Lleva todos los términos al mismo lado antes de factorizar." },
                { id: "al-d-44", text: "Si f(x) = 2x² - 3x + 1, calcula f(-2).", answer: "15", explanation: "Sustituimos -2: 2(-2)² - 3(-2) + 1 = 8 + 6 + 1 = 15.", hint: "Ten especial cuidado con el cuadrado de un número negativo." },
                { id: "al-d-45", text: "Si f(x) = x³ - 2x² + x, calcula f(3).", answer: "12", explanation: "f(3) = 3³ - 2(3²) + 3 = 27 - 18 + 3 = 12.", hint: "Calcula primero las potencias." },
                { id: "al-d-46", text: "Determina el valor de k para que x = 2 sea solución de x² + kx - 10 = 0.", answer: "k = 3", explanation: "Sustituimos x = 2: 4 + 2k - 10 = 0. Entonces 2k = 6 y k = 3.", hint: "Si un valor es solución, al sustituirlo la ecuación debe ser igual a cero." },
                { id: "al-d-47", text: "Determina el valor de k para que x = 3 sea raíz de x² - kx + 6 = 0.", answer: "k = 5", explanation: "Sustituimos x = 3: 9 - 3k + 6 = 0. Entonces 15 - 3k = 0 y k = 5.", hint: "Sustituye el valor de x y despeja k." },
                { id: "al-d-48", text: "Si x + 1/x = 5, con x ≠ 0, ¿cuánto vale x² + 1/x²?", answer: "23", explanation: "Elevamos al cuadrado: (x + 1/x)² = x² + 2 + 1/x². Como 5² = 25, obtenemos x² + 1/x² = 23.", hint: "Usa el cuadrado de un binomio." },
                { id: "al-d-49", text: "Si a + b = 10 y ab = 21, ¿cuánto vale a² + b²?", answer: "58", explanation: "Usamos (a + b)² = a² + 2ab + b². Entonces 100 = a² + 42 + b², por lo que a² + b² = 58.", hint: "Busca una identidad notable que incluya suma y producto." },
                { id: "al-d-50", text: "Resuelve x² - 2x - 8 = 0 y calcula la suma de sus soluciones.", answer: "2", explanation: "Factorizamos (x - 4)(x + 2) = 0. Las soluciones son 4 y -2; su suma es 2.", hint: "Primero encuentra las dos raíces y después súmalas." }
            ]
        }
    },

    geometria: {
        name: "Geometría",
        icon: "△",
        description: "Áreas, perímetros y figuras geométricas.",
        questions: {
            facil: [
                { id: "ge-f-1", text: "¿Cuántos lados tiene un triángulo?", answer: "3 lados.", explanation: "Un triángulo es un polígono formado por tres segmentos que se unen para crear tres lados y tres vértices.", hint: "El prefijo \"tri-\" significa tres." },
                { id: "ge-f-2", text: "¿Cuántos lados tiene un cuadrado?", answer: "4 lados.", explanation: "Un cuadrado tiene cuatro lados iguales y cuatro ángulos rectos.", hint: "Piensa en las cuatro esquinas de una ventana cuadrada." },
                { id: "ge-f-3", text: "¿Cuántos grados mide un ángulo recto?", answer: "90°.", explanation: "Por definición, un ángulo recto mide exactamente 90 grados.", hint: "Es el ángulo que forma una esquina perfecta." },
                { id: "ge-f-4", text: "¿Cuántos grados mide un ángulo llano?", answer: "180°.", explanation: "Un ángulo llano forma una línea recta y por eso mide 180 grados.", hint: "Una vuelta de media circunferencia." },
                { id: "ge-f-5", text: "¿Cuántos lados tiene un pentágono?", answer: "5 lados.", explanation: "Un pentágono es un polígono que tiene cinco lados y cinco vértices.", hint: "\"Penta\" significa cinco." },
                { id: "ge-f-6", text: "¿Cuántos lados tiene un hexágono?", answer: "6 lados.", explanation: "Un hexágono está formado por seis segmentos que se unen consecutivamente.", hint: "\"Hexa\" se relaciona con el número seis." },
                { id: "ge-f-7", text: "¿Cuántos lados tiene un octágono?", answer: "8 lados.", explanation: "Un octágono es un polígono de ocho lados y ocho vértices.", hint: "Una señal de ALTO tiene esta forma." },
                { id: "ge-f-8", text: "¿Cuántos vértices tiene un rectángulo?", answer: "4 vértices.", explanation: "Los cuatro lados del rectángulo se encuentran formando cuatro esquinas.", hint: "Cuenta las esquinas." },
                { id: "ge-f-9", text: "¿Cuánto mide cada ángulo interior de un cuadrado?", answer: "90°.", explanation: "Los cuatro ángulos del cuadrado son rectos, por lo que cada uno mide 90 grados.", hint: "Todos sus ángulos son iguales y rectos." },
                { id: "ge-f-10", text: "¿Cuánto mide el perímetro de un cuadrado cuyo lado mide 6 cm?", answer: "24 cm.", explanation: "El perímetro se obtiene sumando los cuatro lados: 6 + 6 + 6 + 6 = 24 cm.", hint: "Multiplica el lado por 4." },
                { id: "ge-f-11", text: "¿Cuál es el área de un cuadrado de lado 5 cm?", answer: "25 cm².", explanation: "El área de un cuadrado es lado × lado: 5 × 5 = 25 cm².", hint: "Eleva el lado al cuadrado." },
                { id: "ge-f-12", text: "¿Cuál es el perímetro de un rectángulo de 8 cm de largo y 3 cm de ancho?", answer: "22 cm.", explanation: "P = 2(largo + ancho) = 2(8 + 3) = 22 cm.", hint: "Suma largo y ancho y multiplica por 2." },
                { id: "ge-f-13", text: "¿Cuál es el área de un rectángulo de 7 cm de largo y 4 cm de ancho?", answer: "28 cm².", explanation: "El área del rectángulo se calcula multiplicando largo por ancho: 7 × 4 = 28 cm².", hint: "Usa base × altura." },
                { id: "ge-f-14", text: "¿Cuál es el perímetro de un triángulo cuyos lados miden 5 cm, 6 cm y 7 cm?", answer: "18 cm.", explanation: "Se suman los tres lados: 5 + 6 + 7 = 18 cm.", hint: "El perímetro es la suma de todos los lados." },
                { id: "ge-f-15", text: "¿Cuál es el área de un triángulo con base 10 cm y altura 6 cm?", answer: "30 cm².", explanation: "A = (base × altura) / 2 = (10 × 6) / 2 = 30 cm².", hint: "Multiplica base por altura y divide entre 2." },
                { id: "ge-f-16", text: "¿Cuál es el radio de un círculo cuyo diámetro mide 14 cm?", answer: "7 cm.", explanation: "El radio siempre mide la mitad del diámetro: 14 / 2 = 7 cm.", hint: "Divide el diámetro entre 2." },
                { id: "ge-f-17", text: "¿Cuál es el diámetro de un círculo cuyo radio mide 9 cm?", answer: "18 cm.", explanation: "El diámetro es dos veces el radio: 2 × 9 = 18 cm.", hint: "Multiplica el radio por 2." },
                { id: "ge-f-18", text: "Usando π = 3.14, ¿cuál es la longitud de una circunferencia de radio 5 cm?", answer: "31.4 cm.", explanation: "C = 2πr = 2 × 3.14 × 5 = 31.4 cm.", hint: "La fórmula utiliza dos veces π y el radio." },
                { id: "ge-f-19", text: "Usando π = 3.14, ¿cuál es el área de un círculo de radio 4 cm?", answer: "50.24 cm².", explanation: "A = πr² = 3.14 × 4² = 3.14 × 16 = 50.24 cm².", hint: "Primero calcula el cuadrado del radio." },
                { id: "ge-f-20", text: "¿Cómo se llama un triángulo que tiene tres lados iguales?", answer: "Triángulo equilátero.", explanation: "Un triángulo equilátero tiene sus tres lados de la misma longitud y sus tres ángulos iguales.", hint: "\"Equi\" indica igualdad." },
                { id: "ge-f-21", text: "¿Cómo se llama un triángulo que tiene dos lados iguales?", answer: "Triángulo isósceles.", explanation: "Un triángulo isósceles posee exactamente dos lados de igual longitud.", hint: "Busca la característica de tener un par de lados iguales." },
                { id: "ge-f-22", text: "¿Cómo se llama un triángulo que tiene un ángulo de 90°?", answer: "Triángulo rectángulo.", explanation: "Todo triángulo que contiene un ángulo recto se clasifica como rectángulo.", hint: "Su nombre contiene la palabra \"recto\"." },
                { id: "ge-f-23", text: "¿Cuánto suman los ángulos interiores de cualquier triángulo?", answer: "180°.", explanation: "La suma de los tres ángulos interiores de todo triángulo siempre es 180 grados.", hint: "Si conoces dos ángulos, puedes encontrar el tercero restando de 180°." },
                { id: "ge-f-24", text: "Si dos ángulos de un triángulo miden 50° y 60°, ¿cuánto mide el tercero?", answer: "70°.", explanation: "180° − 50° − 60° = 70°.", hint: "Los tres ángulos deben sumar 180°." },
                { id: "ge-f-25", text: "¿Cuánto mide cada ángulo de un triángulo equilátero?", answer: "60°.", explanation: "Sus tres ángulos son iguales y juntos suman 180°, así que 180° / 3 = 60°.", hint: "Divide 180 entre tres." },
                { id: "ge-f-26", text: "¿Cuánto mide cada ángulo interior de un rectángulo?", answer: "90°.", explanation: "Los cuatro ángulos de un rectángulo son ángulos rectos.", hint: "Tiene las mismas esquinas que un cuadrado." },
                { id: "ge-f-27", text: "¿Cuántas diagonales tiene un cuadrado?", answer: "2 diagonales.", explanation: "Cada vértice puede conectarse con el vértice opuesto, formando dos diagonales.", hint: "Une esquinas opuestas." },
                { id: "ge-f-28", text: "¿Cuántas diagonales tiene un rectángulo?", answer: "2 diagonales.", explanation: "Un rectángulo tiene dos segmentos que unen pares de vértices opuestos.", hint: "Traza líneas de una esquina a la esquina contraria." },
                { id: "ge-f-29", text: "¿Cuántos lados tiene un círculo?", answer: "No tiene lados rectos.", explanation: "El círculo es una figura curva y no está formado por segmentos rectos.", hint: "Observa su borde: es completamente curvo." },
                { id: "ge-f-30", text: "¿Cómo se llama el segmento que une el centro de un círculo con su borde?", answer: "Radio.", explanation: "El radio es el segmento que va desde el centro hasta cualquier punto de la circunferencia.", hint: "Es la mitad del diámetro." },
                { id: "ge-f-31", text: "¿Cómo se llama el segmento que atraviesa el centro de un círculo y une dos puntos de la circunferencia?", answer: "Diámetro.", explanation: "El diámetro es una cuerda especial que pasa por el centro del círculo.", hint: "Mide el doble que el radio." },
                { id: "ge-f-32", text: "¿Cuál es el perímetro de un cuadrado cuyo lado mide 9 m?", answer: "36 m.", explanation: "P = 4 × 9 = 36 m.", hint: "Un cuadrado tiene cuatro lados iguales." },
                { id: "ge-f-33", text: "¿Cuál es el área de un cuadrado de lado 8 m?", answer: "64 m².", explanation: "A = 8 × 8 = 64 m².", hint: "Multiplica el lado por sí mismo." },
                { id: "ge-f-34", text: "¿Cuál es el área de un rectángulo de 12 m por 5 m?", answer: "60 m².", explanation: "A = 12 × 5 = 60 m².", hint: "Multiplica las dos dimensiones." },
                { id: "ge-f-35", text: "¿Cuál es el perímetro de un rectángulo de 10 m por 6 m?", answer: "32 m.", explanation: "P = 2(10 + 6) = 32 m.", hint: "Suma los lados diferentes y duplica." },
                { id: "ge-f-36", text: "¿Cuál es el área de un triángulo con base 12 cm y altura 5 cm?", answer: "30 cm².", explanation: "A = (12 × 5) / 2 = 30 cm².", hint: "No olvides dividir entre dos." },
                { id: "ge-f-37", text: "¿Cuál es el perímetro de un triángulo equilátero de lado 7 cm?", answer: "21 cm.", explanation: "Los tres lados son iguales: 3 × 7 = 21 cm.", hint: "Multiplica un lado por tres." },
                { id: "ge-f-38", text: "¿Qué tipo de ángulo mide menos de 90°?", answer: "Ángulo agudo.", explanation: "Los ángulos agudos tienen una medida mayor que 0° y menor que 90°.", hint: "Es más pequeño que un ángulo recto." },
                { id: "ge-f-39", text: "¿Qué tipo de ángulo mide más de 90° y menos de 180°?", answer: "Ángulo obtuso.", explanation: "Un ángulo obtuso está entre 90° y 180°.", hint: "Es más abierto que un ángulo recto." },
                { id: "ge-f-40", text: "¿Qué tipo de ángulo mide exactamente 180°?", answer: "Ángulo llano.", explanation: "Un ángulo llano forma una línea recta y mide 180°.", hint: "Imagina dos rayos apuntando en sentidos opuestos." },
                { id: "ge-f-41", text: "¿Qué tipo de ángulo mide más de 180° y menos de 360°?", answer: "Ángulo reflejo.", explanation: "Un ángulo reflejo es mayor que un ángulo llano pero menor que una vuelta completa.", hint: "Su abertura supera media vuelta." },
                { id: "ge-f-42", text: "¿Cuántos grados tiene una vuelta completa?", answer: "360°.", explanation: "Una vuelta alrededor de un punto representa 360 grados.", hint: "Es el giro completo de una rueda." },
                { id: "ge-f-43", text: "¿Cuánto mide la suma de los ángulos alrededor de un punto?", answer: "360°.", explanation: "Los ángulos que rodean completamente un punto forman una vuelta completa.", hint: "Piensa en girar 360°." },
                { id: "ge-f-44", text: "¿Cuántos centímetros hay en 2 metros?", answer: "200 cm.", explanation: "Un metro equivale a 100 centímetros, por lo que 2 m = 200 cm.", hint: "Multiplica los metros por 100." },
                { id: "ge-f-45", text: "¿Cuántos milímetros hay en 5 centímetros?", answer: "50 mm.", explanation: "Cada centímetro contiene 10 milímetros: 5 × 10 = 50 mm.", hint: "Un centímetro equivale a diez milímetros." },
                { id: "ge-f-46", text: "Un cuadrado tiene un perímetro de 40 cm. ¿Cuánto mide cada lado?", answer: "10 cm.", explanation: "Como P = 4l, entonces l = 40 / 4 = 10 cm.", hint: "Divide el perímetro entre cuatro." },
                { id: "ge-f-47", text: "Un rectángulo tiene largo de 9 cm y ancho de 2 cm. ¿Cuál es su área?", answer: "18 cm².", explanation: "A = 9 × 2 = 18 cm².", hint: "Área de rectángulo = largo × ancho." },
                { id: "ge-f-48", text: "Un triángulo tiene base de 8 cm y altura de 9 cm. ¿Cuál es su área?", answer: "36 cm².", explanation: "A = (8 × 9) / 2 = 36 cm².", hint: "Multiplica primero y después divide entre dos." },
                { id: "ge-f-49", text: "Un círculo tiene diámetro de 20 cm. ¿Cuál es su radio?", answer: "10 cm.", explanation: "El radio es la mitad del diámetro: 20 / 2 = 10 cm.", hint: "Divide entre dos." },
                { id: "ge-f-50", text: "¿Qué cuadrilátero tiene cuatro lados iguales y cuatro ángulos rectos?", answer: "Cuadrado.", explanation: "La combinación de cuatro lados iguales y cuatro ángulos de 90° define al cuadrado.", hint: "Es como un rectángulo cuyos cuatro lados tienen la misma longitud." }
            ],
            medio: [
                { id: "ge-m-1", text: "Un cuadrado tiene un área de 144 cm². ¿Cuánto mide cada lado?", answer: "12 cm.", explanation: "El lado es la raíz cuadrada del área: √144 = 12 cm.", hint: "Busca el número que multiplicado por sí mismo da 144." },
                { id: "ge-m-2", text: "Un cuadrado tiene un perímetro de 52 cm. ¿Cuál es su área?", answer: "169 cm².", explanation: "El lado mide 52 / 4 = 13 cm. Luego A = 13² = 169 cm².", hint: "Primero encuentra el lado." },
                { id: "ge-m-3", text: "Un rectángulo tiene un área de 96 cm² y un largo de 12 cm. ¿Cuál es su ancho?", answer: "8 cm.", explanation: "Como A = largo × ancho, el ancho es 96 / 12 = 8 cm.", hint: "Divide el área entre el largo." },
                { id: "ge-m-4", text: "Un rectángulo tiene un perímetro de 50 cm y un largo de 15 cm. ¿Cuál es su ancho?", answer: "10 cm.", explanation: "50 = 2(15 + ancho). Entonces 25 = 15 + ancho y el ancho es 10 cm.", hint: "Divide primero el perímetro entre dos." },
                { id: "ge-m-5", text: "Un triángulo tiene área de 54 cm² y base de 12 cm. ¿Cuál es su altura?", answer: "9 cm.", explanation: "54 = (12 × h)/2, por lo que 108 = 12h y h = 9 cm.", hint: "Despeja la altura de la fórmula del área." },
                { id: "ge-m-6", text: "Un triángulo tiene lados de 9 cm, 12 cm y 15 cm. ¿Es rectángulo?", answer: "Sí.", explanation: "9² + 12² = 81 + 144 = 225 y 15² = 225. Cumple el teorema de Pitágoras.", hint: "Compara el cuadrado del lado mayor con la suma de los otros dos cuadrados." },
                { id: "ge-m-7", text: "Un triángulo rectángulo tiene catetos de 6 cm y 8 cm. ¿Cuánto mide la hipotenusa?", answer: "10 cm.", explanation: "c² = 6² + 8² = 36 + 64 = 100, así que c = 10 cm.", hint: "Usa el teorema de Pitágoras." },
                { id: "ge-m-8", text: "Un triángulo rectángulo tiene hipotenusa de 13 cm y un cateto de 5 cm. ¿Cuánto mide el otro cateto?", answer: "12 cm.", explanation: "x² = 13² − 5² = 169 − 25 = 144, por lo que x = 12 cm.", hint: "Resta el cuadrado del cateto conocido al cuadrado de la hipotenusa." },
                { id: "ge-m-9", text: "Usando π = 3.14, ¿cuál es el área de un círculo de diámetro 10 cm?", answer: "78.5 cm².", explanation: "El radio es 5 cm. Entonces A = 3.14 × 5² = 78.5 cm².", hint: "Convierte primero diámetro en radio." },
                { id: "ge-m-10", text: "Usando π = 3.14, ¿cuál es la circunferencia de un círculo de diámetro 12 cm?", answer: "37.68 cm.", explanation: "C = πd = 3.14 × 12 = 37.68 cm.", hint: "Cuando conoces el diámetro puedes usar C = πd." },
                { id: "ge-m-11", text: "Un círculo tiene un área de 153.86 cm² usando π = 3.14. ¿Cuál es aproximadamente su radio?", answer: "7 cm.", explanation: "r² = 153.86 / 3.14 = 49, así que r = 7 cm.", hint: "Divide el área entre π y después calcula la raíz." },
                { id: "ge-m-12", text: "¿Cuál es el área de un paralelogramo con base 14 cm y altura 6 cm?", answer: "84 cm².", explanation: "El área del paralelogramo es base × altura: 14 × 6 = 84 cm².", hint: "No uses el lado inclinado como altura." },
                { id: "ge-m-13", text: "¿Cuál es el área de un trapecio con bases de 10 cm y 16 cm y altura de 5 cm?", answer: "65 cm².", explanation: "A = ((10 + 16) × 5)/2 = 65 cm².", hint: "Suma las dos bases antes de multiplicar por la altura." },
                { id: "ge-m-14", text: "¿Cuál es el área de un rombo cuyas diagonales miden 12 cm y 8 cm?", answer: "48 cm².", explanation: "A = (D × d)/2 = (12 × 8)/2 = 48 cm².", hint: "Multiplica las diagonales y divide entre dos." },
                { id: "ge-m-15", text: "Un rombo tiene diagonales de 10 cm y 24 cm. ¿Cuál es su área?", answer: "120 cm².", explanation: "A = (10 × 24)/2 = 120 cm².", hint: "La fórmula del rombo utiliza sus dos diagonales." },
                { id: "ge-m-16", text: "¿Cuál es la suma de los ángulos interiores de un pentágono?", answer: "540°.", explanation: "La fórmula es (n − 2) × 180°. Para n = 5: 3 × 180° = 540°.", hint: "Usa la fórmula general de polígonos." },
                { id: "ge-m-17", text: "¿Cuál es la suma de los ángulos interiores de un hexágono?", answer: "720°.", explanation: "(6 − 2) × 180° = 4 × 180° = 720°.", hint: "Sustituye 6 en la fórmula (n − 2) × 180°." },
                { id: "ge-m-18", text: "¿Cuánto mide cada ángulo interior de un pentágono regular?", answer: "108°.", explanation: "La suma es 540° y, al ser regular, se divide entre 5: 540 / 5 = 108°.", hint: "Primero calcula la suma de los ángulos interiores." },
                { id: "ge-m-19", text: "¿Cuánto mide cada ángulo interior de un hexágono regular?", answer: "120°.", explanation: "La suma de sus ángulos es 720°. Al dividir entre seis se obtiene 120°.", hint: "En un polígono regular todos los ángulos interiores son iguales." },
                { id: "ge-m-20", text: "¿Cuánto mide cada ángulo exterior de un octágono regular?", answer: "45°.", explanation: "Los ángulos exteriores de cualquier polígono regular suman 360°. Entonces 360 / 8 = 45°.", hint: "Divide 360° entre el número de lados." },
                { id: "ge-m-21", text: "¿Cuántas diagonales tiene un pentágono?", answer: "5 diagonales.", explanation: "Se utiliza n(n − 3)/2: 5(2)/2 = 5.", hint: "Usa la fórmula de diagonales de un polígono." },
                { id: "ge-m-22", text: "¿Cuántas diagonales tiene un hexágono?", answer: "9 diagonales.", explanation: "n(n − 3)/2 = 6 × 3 / 2 = 9.", hint: "Sustituye n = 6 en la fórmula." },
                { id: "ge-m-23", text: "¿Cuántas diagonales tiene un octágono?", answer: "20 diagonales.", explanation: "8(8 − 3)/2 = 8 × 5 / 2 = 20.", hint: "La fórmula es n(n − 3)/2." },
                { id: "ge-m-24", text: "Dos ángulos son complementarios. Si uno mide 35°, ¿cuánto mide el otro?", answer: "55°.", explanation: "Los ángulos complementarios suman 90°: 90° − 35° = 55°.", hint: "Complementario significa completar 90°." },
                { id: "ge-m-25", text: "Dos ángulos son suplementarios. Si uno mide 115°, ¿cuánto mide el otro?", answer: "65°.", explanation: "Los ángulos suplementarios suman 180°: 180° − 115° = 65°.", hint: "Suplementario significa completar 180°." },
                { id: "ge-m-26", text: "Dos ángulos opuestos por el vértice tienen la misma medida. Si uno mide 72°, ¿cuánto mide el otro?", answer: "72°.", explanation: "Los ángulos opuestos por el vértice siempre son congruentes.", hint: "Los ángulos enfrentados tienen igual medida." },
                { id: "ge-m-27", text: "Un ángulo mide 128°. ¿Cuánto mide su ángulo suplementario?", answer: "52°.", explanation: "180° − 128° = 52°.", hint: "Los suplementarios forman una línea recta." },
                { id: "ge-m-28", text: "Un triángulo tiene ángulos de 45° y 65°. ¿Cuánto mide el tercer ángulo?", answer: "70°.", explanation: "180° − 45° − 65° = 70°.", hint: "La suma de los tres ángulos es 180°." },
                { id: "ge-m-29", text: "Un triángulo isósceles tiene un ángulo de 40° entre sus lados iguales. ¿Cuánto mide cada ángulo de la base?", answer: "70°.", explanation: "Los dos ángulos de la base son iguales. Quedan 180° − 40° = 140°, y 140° / 2 = 70°.", hint: "Los ángulos de la base de un isósceles son iguales." },
                { id: "ge-m-30", text: "Un triángulo isósceles tiene dos ángulos de 50°. ¿Cuánto mide el tercer ángulo?", answer: "80°.", explanation: "180° − 50° − 50° = 80°.", hint: "Resta los dos ángulos conocidos de 180°." },
                { id: "ge-m-31", text: "¿Cuál es el área de un cuadrado cuya diagonal mide 10 cm?", answer: "50 cm².", explanation: "El área de un cuadrado usando la diagonal es d²/2 = 100/2 = 50 cm².", hint: "La diagonal divide al cuadrado en dos triángulos rectángulos." },
                { id: "ge-m-32", text: "¿Cuál es la diagonal de un rectángulo de 6 cm por 8 cm?", answer: "10 cm.", explanation: "La diagonal es la hipotenusa: √(6² + 8²) = √100 = 10 cm.", hint: "Aplica Pitágoras." },
                { id: "ge-m-33", text: "¿Cuál es la diagonal de un cuadrado de lado 5 cm?", answer: "5√2 cm.", explanation: "Por Pitágoras, d² = 5² + 5² = 50, así que d = √50 = 5√2 cm.", hint: "Los dos lados forman los catetos de un triángulo rectángulo." },
                { id: "ge-m-34", text: "Un jardín rectangular mides 20 m por 15 m. ¿Cuál es su perímetro?", answer: "70 m.", explanation: "P = 2(20 + 15) = 70 m.", hint: "Suma largo y ancho y multiplica por dos." },
                { id: "ge-m-35", text: "Un terreno rectangular mide 18 m por 12 m. ¿Cuál es su área?", answer: "216 m².", explanation: "A = 18 × 12 = 216 m².", hint: "Multiplica sus dos dimensiones." },
                { id: "ge-m-36", text: "Un círculo tiene radio de 7 cm. Usando π = 22/7, ¿cuál es su área?", answer: "154 cm².", explanation: "A = πr² = (22/7) × 49 = 154 cm².", hint: "Simplifica primero 49 entre 7." },
                { id: "ge-m-37", text: "Usando π = 22/7, ¿cuál es la circunferencia de un círculo de radio 14 cm?", answer: "88 cm.", explanation: "C = 2πr = 2 × 22/7 × 14 = 88 cm.", hint: "Sustituye directamente el radio en la fórmula." },
                { id: "ge-m-38", text: "¿Cuál es el área de un semicírculo de radio 6 cm usando π = 3.14?", answer: "56.52 cm².", explanation: "El círculo completo tiene área 3.14 × 36 = 113.04 cm². La mitad es 56.52 cm².", hint: "Calcula el círculo completo y divide entre dos." },
                { id: "ge-m-39", text: "¿Cuál es el área de un triángulo rectángulo cuyos catetos miden 9 cm y 12 cm?", answer: "54 cm².", explanation: "Los catetos pueden funcionar como base y altura: A = (9 × 12)/2 = 54 cm².", hint: "En un triángulo rectángulo, los catetos son perpendiculares." },
                { id: "ge-m-40", text: "Un prisma rectangular mide 4 cm de largo, 5 cm de ancho y 6 cm de alto. ¿Cuál es su volumen?", answer: "120 cm³.", explanation: "V = largo × ancho × alto = 4 × 5 × 6 = 120 cm³.", hint: "Multiplica las tres dimensiones." },
                { id: "ge-m-41", text: "¿Cuál es el volumen de un cubo cuyo lado mide 4 cm?", answer: "64 cm³.", explanation: "V = l³ = 4³ = 64 cm³.", hint: "Multiplica 4 tres veces." },
                { id: "ge-m-42", text: "¿Cuál es el área total de un cubo de lado 3 cm?", answer: "54 cm².", explanation: "Un cubo tiene seis caras cuadradas. Cada cara mide 9 cm², así que 6 × 9 = 54 cm².", hint: "Cuenta las seis caras." },
                { id: "ge-m-43", text: "¿Cuál es el volumen de un cilindro de radio 3 cm y altura 10 cm usando π = 3.14?", answer: "282.6 cm³.", explanation: "V = πr²h = 3.14 × 9 × 10 = 282.6 cm³.", hint: "Calcula primero el área de la base circular." },
                { id: "ge-m-44", text: "¿Cuál es el área lateral de un cilindro de radio 4 cm y altura 5 cm usando π = 3.14?", answer: "125.6 cm².", explanation: "A lateral = 2πrh = 2 × 3.14 × 4 × 5 = 125.6 cm².", hint: "La superficie lateral depende de la circunferencia de la base y la altura." },
                { id: "ge-m-45", text: "¿Cuál es el volumen de una esfera de radio 3 cm usando π = 3.14?", answer: "113.04 cm³.", explanation: "V = (4/3)πr³ = (4/3)(3.14)(27) = 113.04 cm³.", hint: "Eleva el radio al cubo antes de multiplicar." },
                { id: "ge-m-46", text: "¿Cuál es el volumen de una pirámide con área de base 30 cm² y altura 9 cm?", answer: "90 cm³.", explanation: "V = (A_base × h)/3 = (30 × 9)/3 = 90 cm³.", hint: "Una pirámide usa un tercio del volumen del prisma correspondiente." },
                { id: "ge-m-47", text: "Un cubo tiene un volumen de 125 cm³. ¿Cuánto mide su lado?", answer: "5 cm.", explanation: "El lado es la raíz cúbica de 125: ∛125 = 5 cm.", hint: "Busca el número que multiplicado tres veces por sí mismo da 125." },
                { id: "ge-m-48", text: "Un prisma rectangular tiene volumen de 240 cm³, largo de 10 cm y ancho de 6 cm. ¿Cuál es su altura?", answer: "4 cm.", explanation: "240 = 10 × 6 × h, así que h = 240/60 = 4 cm.", hint: "Divide el volumen entre las otras dos dimensiones." },
                { id: "ge-m-49", text: "Un mapa usa una escala de 1:100 000. Si dos ciudades están separadas 3 cm en el mapa, ¿cuál es la distancia real?", answer: "3 km.", explanation: "3 × 100 000 = 300 000 cm, que equivalen a 3 km.", hint: "Convierte primero los centímetros reales a kilómetros." },
                { id: "ge-m-50", text: "Dos triángulos semejantes tienen una razón de lados de 2:3. Si un lado del primero mide 8 cm, ¿cuánto mide el correspondiente del segundo?", answer: "12 cm.", explanation: "Si 8 corresponde a 2 partes, una parte vale 4 cm. Tres partes son 12 cm.", hint: "Multiplica 8 por 3/2." }
            ],
            dificil: [
                { id: "ge-d-1", text: "Un triángulo rectángulo tiene catetos de 7 cm y 24 cm. ¿Cuánto mide su hipotenusa?", answer: "25 cm.", explanation: "c² = 7² + 24² = 49 + 576 = 625, por lo que c = 25 cm.", hint: "Busca la raíz cuadrada de la suma de los cuadrados." },
                { id: "ge-d-2", text: "Un triángulo rectángulo tiene hipotenusa de 17 cm y un cateto de 8 cm. ¿Cuánto mide el otro cateto?", answer: "15 cm.", explanation: "x² = 17² − 8² = 289 − 64 = 225, por lo que x = 15 cm.", hint: "Despeja el cateto usando Pitágoras." },
                { id: "ge-d-3", text: "Un cuadrado tiene una diagonal de 12√2 cm. ¿Cuál es su área?", answer: "144 cm².", explanation: "En un cuadrado, A = d²/2. Entonces A = (12√2)²/2 = 288/2 = 144 cm².", hint: "Eleva primero la diagonal al cuadrado." },
                { id: "ge-d-4", text: "Un rectángulo tiene diagonal de 25 cm y uno de sus lados mide 7 cm. ¿Cuál es el otro lado?", answer: "24 cm.", explanation: "x² + 7² = 25², entonces x² = 625 − 49 = 576 y x = 24 cm.", hint: "La diagonal es la hipotenusa." },
                { id: "ge-d-5", text: "Un triángulo equilátero tiene lado de 10 cm. ¿Cuál es su altura?", answer: "5√3 cm.", explanation: "La altura divide el triángulo en dos triángulos rectángulos con hipotenusa 10 y base 5. Por Pitágoras, h² = 100 − 25 = 75, así que h = 5√3 cm.", hint: "Divide el triángulo en dos partes iguales." },
                { id: "ge-d-6", text: "¿Cuál es el área de un triángulo equilátero de lado 12 cm?", answer: "36√3 cm².", explanation: "A = (√3/4)l² = (√3/4)(144) = 36√3 cm².", hint: "Usa la fórmula específica del triángulo equilátero." },
                { id: "ge-d-7", text: "Un hexágono regular tiene lado de 6 cm. ¿Cuál es su perímetro?", answer: "36 cm.", explanation: "Un hexágono regular tiene seis lados iguales: 6 × 6 = 36 cm.", hint: "Multiplica el número de lados por la medida de uno." },
                { id: "ge-d-8", text: "Un hexágono regular de lado 6 cm tiene un área de 54√3 cm². ¿Es correcta esta área?", answer: "Sí.", explanation: "El área de un hexágono regular es (3√3/2)l². Con l = 6: (3√3/2)(36) = 54√3 cm².", hint: "Usa la fórmula del área del hexágono regular." },
                { id: "ge-d-9", text: "¿Cuál es el área de un trapecio cuyas bases miden 18 cm y 30 cm y cuya altura es 12 cm?", answer: "288 cm².", explanation: "A = ((18 + 30) × 12)/2 = 48 × 6 = 288 cm².", hint: "Promedia las dos bases y multiplica por la altura." },
                { id: "ge-d-10", text: "Un trapecio tiene área de 180 cm², bases de 12 cm y 18 cm. ¿Cuál es su altura?", answer: "12 cm.", explanation: "180 = ((12 + 18)h)/2 = 15h, por lo que h = 12 cm.", hint: "Despeja la altura de la fórmula del trapecio." },
                { id: "ge-d-11", text: "Un rombo tiene diagonales de 16 cm y 30 cm. ¿Cuál es su lado?", answer: "17 cm.", explanation: "Las diagonales se bisecan perpendicularmente. Los semidiagonales son 8 y 15, formando un triángulo rectángulo: √(8² + 15²) = 17 cm.", hint: "Usa la mitad de cada diagonal como catetos." },
                { id: "ge-d-12", text: "Un rombo tiene diagonales de 10 cm y 24 cm. ¿Cuál es su perímetro?", answer: "52 cm.", explanation: "Los semidiagonales son 5 y 12. El lado mide √(25 + 144) = 13 cm. El perímetro es 4 × 13 = 52 cm.", hint: "Primero encuentra un lado con Pitágoras." },
                { id: "ge-d-13", text: "Un polígono regular tiene ángulos interiores de 150°. ¿Cuántos lados tiene?", answer: "12 lados.", explanation: "El ángulo exterior es 180° − 150° = 30°. Entonces n = 360/30 = 12.", hint: "Convierte el ángulo interior en exterior." },
                { id: "ge-d-14", text: "Un polígono regular tiene ángulos exteriores de 24°. ¿Cuántos lados tiene?", answer: "15 lados.", explanation: "Los ángulos exteriores suman 360°. Entonces n = 360/24 = 15.", hint: "Divide la vuelta completa entre un ángulo exterior." },
                { id: "ge-d-15", text: "Un polígono tiene 27 diagonales. ¿Cuántos lados tiene?", answer: "9 lados.", explanation: "n(n − 3)/2 = 27. Entonces n(n − 3) = 54. El valor que satisface la ecuación es n = 9.", hint: "Prueba valores enteros en la fórmula de diagonales." },
                { id: "ge-d-16", text: "¿Cuántas diagonales tiene un decágono?", answer: "35 diagonales.", explanation: "n(n − 3)/2 = 10 × 7 / 2 = 35.", hint: "Sustituye n = 10." },
                { id: "ge-d-17", text: "¿Cuál es la suma de los ángulos interiores de un decágono?", answer: "1440°.", explanation: "(10 − 2) × 180° = 8 × 180° = 1440°.", hint: "Un decágono tiene diez lados." },
                { id: "ge-d-18", text: "Un pentágono regular tiene perímetro de 50 cm. ¿Cuánto mide cada lado?", answer: "10 cm.", explanation: "Al tener cinco lados iguales, cada lado mide 50 / 5 = 10 cm.", hint: "Divide el perímetro entre el número de lados." },
                { id: "ge-d-19", text: "Un polígono regular tiene 18 lados. ¿Cuánto mide cada ángulo exterior?", answer: "20°.", explanation: "360° / 18 = 20°.", hint: "Todos los ángulos exteriores de un polígono regular son iguales." },
                { id: "ge-d-20", text: "Un polígono regular tiene 18 lados. ¿Cuánto mide cada ángulo interior?", answer: "160°.", explanation: "El ángulo interior y exterior son suplementarios: 180° − 20° = 160°.", hint: "Primero calcula el ángulo exterior." },
                { id: "ge-d-21", text: "Un círculo tiene una circunferencia de 62.8 cm usando π = 3.14. ¿Cuál es su radio?", answer: "10 cm.", explanation: "62.8 = 2(3.14)r. Entonces r = 62.8/6.28 = 10 cm.", hint: "Despeja el radio de C = 2πr." },
                { id: "ge-d-22", text: "Un círculo tiene un área de 314 cm² usando π = 3.14. ¿Cuál es su diámetro?", answer: "20 cm.", explanation: "r² = 314/3.14 = 100, así que r = 10 cm. El diámetro es 20 cm.", hint: "Primero encuentra el radio." },
                { id: "ge-d-23", text: "Usando π = 3.14, ¿cuál es el área de una corona circular con radio exterior de 10 cm y radio interior de 6 cm?", answer: "200.96 cm².", explanation: "A = π(R² − r²) = 3.14(100 − 36) = 3.14 × 64 = 200.96 cm².", hint: "Resta primero las áreas cuadradas de los radios." },
                { id: "ge-d-24", text: "Un sector circular tiene radio 12 cm y ángulo central de 90°. Usando π = 3.14, ¿cuál es su área?", answer: "113.04 cm².", explanation: "Es la cuarta parte de un círculo: (90/360) × 3.14 × 12² = 113.04 cm².", hint: "90° representa un cuarto de una vuelta completa." },
                { id: "ge-d-25", text: "Un sector circular tiene radio 10 cm y ángulo central de 72°. Usando π = 3.14, ¿cuál es su área?", answer: "62.8 cm².", explanation: "A = (72/360) × 3.14 × 100 = 62.8 cm².", hint: "Calcula qué fracción de 360° representa 72°." },
                { id: "ge-d-26", text: "Un arco corresponde a un ángulo central de 60° en un círculo de radio 12 cm. Usando π = 3.14, ¿cuál es la longitud del arco?", answer: "12.56 cm.", explanation: "La longitud es (60/360) × 2πr = 1/6 × 75.36 = 12.56 cm.", hint: "El arco es una fracción de la circunferencia completa." },
                { id: "ge-d-27", text: "Un arco de una circunferencia mide 15.7 cm y corresponde a un ángulo central de 90°. Usando π = 3.14, ¿cuál es el radio?", answer: "10 cm.", explanation: "15.7 = (90/360)(2πr) = πr/2. Entonces r = 10 cm.", hint: "Plantea la longitud del arco como un cuarto de la circunferencia." },
                { id: "ge-d-28", text: "Una escalera de 13 m está apoyada contra una pared y su base está a 5 m de la pared. ¿A qué altura llega?", answer: "12 m.", explanation: "La escalera es la hipotenusa: h² + 5² = 13². Entonces h² = 144 y h = 12 m.", hint: "Representa la situación como un triángulo rectángulo." },
                { id: "ge-d-29", text: "Una rampa mide 10 m de largo y alcanza una altura of 6 m. ¿Qué distancia horizontal cubre?", answer: "8 m.", explanation: "x² + 6² = 10², por lo que x² = 64 y x = 8 m.", hint: "La rampa es la hipotenusa." },
                { id: "ge-d-30", text: "Desde un punto se observa la parte superior de un edificio formando un triángulo rectángulo. Si la distancia horizontal es 20 m y la altura es 15 m, ¿cuál es la distancia directa al edificio?", answer: "25 m.", explanation: "d² = 20² + 15² = 625, por lo que d = 25 m.", hint: "La distancia directa corresponde a la hipotenusa." },
                { id: "ge-d-31", text: "Un prisma triangular tiene un área de base of 20 cm² y una longitud de 15 cm. ¿Cuál es su volumen?", answer: "300 cm³.", explanation: "El volumen de un prisma es área de la base × longitud: 20 × 15 = 300 cm³.", hint: "La forma de la base no cambia la fórmula del volumen del prisma." },
                { id: "ge-d-32", text: "Una pirámide tiene área de base de 45 cm² y altura de 12 cm. ¿Cuál es su volumen?", answer: "180 cm³.", explanation: "V = (45 × 12)/3 = 180 cm³.", hint: "Divide entre tres después de multiplicar base por altura." },
                { id: "ge-d-33", text: "Un cilindro tiene volumen de 628 cm³, radio de 5 cm y usa π = 3.14. ¿Cuál es su altura?", answer: "8 cm.", explanation: "628 = 3.14 × 25 × h = 78.5h. Entonces h = 8 cm.", hint: "Despeja la altura de V = πr²h." },
                { id: "ge-d-34", text: "Un cilindro tiene radio de 6 cm y altura of 10 cm. Usando π = 3.14, ¿cuál es su área total?", answer: "602.88 cm².", explanation: "A total = 2πr² + 2πrh = 2(3.14)(36) + 2(3.14)(6)(10) = 226.08 + 376.8 = 602.88 cm².", hint: "El área total incluye las dos bases y la superficie lateral." },
                { id: "ge-d-35", text: "Una esfera tiene radio de 5 cm. Usando π = 3.14, ¿cuál es su área superficial?", answer: "314 cm².", explanation: "A = 4πr² = 4 × 3.14 × 25 = 314 cm².", hint: "La fórmula de superficie de una esfera es 4πr²." },
                { id: "ge-d-36", text: "Una esfera tiene diámetro de 12 cm. Usando π = 3.14, ¿cuál es su volumen?", answer: "904.32 cm³.", explanation: "El radio es 6 cm. V = (4/3)(3.14)(216) = 904.32 cm³.", hint: "Convierte primero el diámetro a radio." },
                { id: "ge-d-37", text: "Una figura está formada por un rectángulo de 10 × 6 cm y un semicírculo cuyo diámetro es 10 cm. Usando π = 3.14, ¿cuál es su área total?", answer: "99.25 cm².", explanation: "El rectángulo tiene 60 cm². El semicírculo tiene radio 5 cm y área 39.25 cm². La suma es 99.25 cm².", hint: "Calcula cada figura por separado y luego suma." },
                { id: "ge-d-38", text: "Una figura está formada por un cuadrado de lado 8 cm y un círculo de radio 4 cm que ocupa una esquina sin superponerse al resto. Usando π = 3.14, ¿cuál es el área total?", answer: "114.24 cm².", explanation: "El cuadrado tiene 64 cm² y el círculo 50.24 cm². Como no se superponen, el total es 114.24 cm².", hint: "Suma las áreas independientes." },
                { id: "ge-d-39", text: "Dos triángulos semejantes tienen lados correspondientes de 6 cm y 15 cm. Si otro lado del triángulo pequeño mide 8 cm, ¿cuánto mide el correspondiente del grande?", answer: "20 cm.", explanation: "La razón de semejanza es 15/6 = 2.5. Entonces 8 × 2.5 = 20 cm.", hint: "Multiplica por la razón entre los lados correspondientes." },
                { id: "ge-d-40", text: "Dos figuras semejantes tienen una razón de semejanza linear de 3:5. Si el área de la figura pequeña es 36 cm², ¿cuál es el área de la grande?", answer: "100 cm².", explanation: "Las áreas cambian con el cuadrado de la razón: (5/3)² = 25/9. Entonces 36 × 25/9 = 100 cm².", hint: "Para áreas, eleva al cuadrado la razón lineal." },
                { id: "ge-d-41", text: "Dos sólidos semejantes tienen una razón lineal de 2:3. Si el volumen del sólido pequeño es 80 cm³, ¿cuál es el volumen del grande?", answer: "270 cm³.", explanation: "Los volúmenes cambian con el cubo de la razón: (3/2)³ = 27/8. Entonces 80 × 27/8 = 270 cm³.", hint: "Para volúmenes, utiliza la razón elevada al cubo." },
                { id: "ge-d-42", text: "En un triángulo, un segmento paralelo a la base divide los lados proporcionalmente. Si un lado queda dividido en 4 cm y 6 cm, y el segmento correspondiente del otro lado tiene una parte de 5 cm, ¿cuánto mide la otra parte?", answer: "7.5 cm.", explanation: "Por proporcionalidad, 4/6 = 5/x. Entonces 4x = 30 y x = 7.5 cm.", hint: "Forma una proporción entre las partes correspondientes." },
                { id: "ge-d-43", text: "Un punto está a 6 cm del centro de un círculo de radio 10 cm. ¿Cuál es la longitud de una cuerda perpendicular a esa distancia, sabiendo que la perpendicular desde el centro biseca la cuerda?", answer: "16 cm.", explanation: "La mitad de la cuerda forma un triángulo rectángulo: x² + 6² = 10². Entonces x = 8 cm y la cuerda mide 16 cm.", hint: "Calcula primero la mitad de la cuerda." },
                { id: "ge-d-44", text: "Desde un punto exterior a un círculo se trazan dos segmentos tangentes al círculo. Si uno mide 13 cm, ¿cuánto mide el otro?", answer: "13 cm.", explanation: "Los segmentos tangentes trazados desde un mismo punto exterior tienen la misma longitud.", hint: "Recuerda la propiedad de las tangentes desde un punto común." },
                { id: "ge-d-45", text: "En un círculo, un ángulo central mide 80°. ¿Cuánto mide el ángulo inscrito que intercepta el mismo arco?", answer: "40°.", explanation: "Un ángulo inscrito que intercepta el mismo arco mide la mitad del ángulo central: 80° / 2 = 40°.", hint: "El ángulo inscrito mide la mitad del arco que intercepta." },
                { id: "ge-d-46", text: "Un ángulo inscrito intercepta un arco de 120°. ¿Cuánto mide el ángulo?", answer: "60°.", explanation: "La medida de un ángulo inscrito es la mitad de su arco interceptado: 120° / 2 = 60°.", hint: "Divide la medida del arco entre dos." },
                { id: "ge-d-47", text: "En un círculo, un ángulo inscrito mide 35°. ¿Cuánto mide el arco que intercepta?", answer: "70°.", explanation: "El arco mide el doble del ángulo inscrito: 2 × 35° = 70°.", hint: "Invierte la relación: arco = 2 × ángulo inscrito." },
                { id: "ge-d-48", text: "Dos rectas paralelas son cortadas por una transversal. Si uno de los ángulos correspondientes mide 118°, ¿cuánto mide el otro ángulo correspondiente?", answer: "118°.", explanation: "Los ángulos correspondientes formados por una transversal en rectas paralelas son congruentes.", hint: "Los ángulos correspondientes tienen la misma medida." },
                { id: "ge-d-49", text: "Dos rectas paralelas son cortadas por una transversal. Si un ángulo interior mide 65°, ¿cuánto mide el ángulo interior consecutivo del mismo lado?", answer: "115°.", explanation: "Los ángulos interiores consecutivos son suplementarios: 180° − 65° = 115°.", hint: "Estos dos ángulos suman 180°." },
                { id: "ge-d-50", text: "Un terreno tiene forma de rectángulo de 30 m × 20 m y dentro hay un círculo de radio 5 m. Usando π = 3.14, ¿qué área del terreno queda libre fuera del círculo?", answer: "521.5 m².", explanation: "El rectángulo tiene 600 m². El círculo tiene 3.14 × 25 = 78.5 m². El área libre es 600 − 78.5 = 521.5 m².", hint: "Calcula el área del terreno y réstale el área del círculo." }
            ]
        }
    },

    estadistica: {
        name: "Estadística",
        icon: "📊",
        description: "Media, mediana y moda.",
        questions: {
            facil: [
                { id: "es-f-1", text: "¿Cuál es la media de los números 4, 6 y 8?", answer: "6", explanation: "Se suman los tres valores: 4 + 6 + 8 = 18. Luego se divide entre 3: 18 ÷ 3 = 6.", hint: "Suma todos los datos y divide entre la cantidad de datos." },
                { id: "es-f-2", text: "¿Cuál es la media de 5, 10, 15 y 20?", answer: "12.5", explanation: "La suma es 5 + 10 + 15 + 20 = 50. Hay 4 datos, por lo que 50 ÷ 4 = 12.5.", hint: "La media se obtiene dividiendo la suma entre el número de valores." },
                { id: "es-f-3", text: "¿Cuál es la mediana de 2, 4 y 7?", answer: "4", explanation: "Los datos ya están ordenados. El número que queda en el centro es 4.", hint: "Ordena los datos y busca el valor central." },
                { id: "es-f-4", text: "¿Cuál es la mediana of 3, 8, 5, 2 y 9?", answer: "5", explanation: "Al ordenar los datos obtenemos 2, 3, 5, 8, 9. El valor central es 5.", hint: "Primero ordena los cinco números de menor a mayor." },
                { id: "es-f-5", text: "¿Cuál es la moda of 2, 3, 3, 5 y 7?", answer: "3", explanation: "El número 3 aparece dos veces, mientras que los demás aparecen una sola vez.", hint: "Busca el valor que se repite más." },
                { id: "es-f-6", text: "¿Cuál es el rango of 4, 9, 2, 7 y 6?", answer: "7", explanation: "El valor máximo es 9 y el mínimo es 2. El rango es 9 − 2 = 7.", hint: "Resta el menor valor al mayor." },
                { id: "es-f-7", text: "¿Cuál es la media of 10, 10, 10 y 10?", answer: "10", explanation: "La suma es 40 y hay 4 datos. Entonces 40 ÷ 4 = 10.", hint: "Cuando todos los valores son iguales, la media también lo es." },
                { id: "es-f-8", text: "¿Cuál es la mediana of 1, 3, 5, 7 y 9?", answer: "5", explanation: "Hay cinco valores ordenados y el tercero ocupa la posición central.", hint: "Con cinco datos, busca el tercer valor." },
                { id: "es-f-9", text: "¿Cuál es la moda of 4, 4, 6, 7 y 8?", answer: "4", explanation: "El 4 aparece dos veces y los demás una sola vez.", hint: "Cuenta cuántas veces aparece cada número." },
                { id: "es-f-10", text: "¿Cuál es el rango of 12, 15, 18 y 20?", answer: "8", explanation: "El mayor valor es 20 y el menor es 12. Entonces 20 − 12 = 8.", hint: "Identifica primero los extremos." },
                { id: "es-f-11", text: "¿Cuál es la media of 2, 4, 6, 8 y 10?", answer: "6", explanation: "La suma es 30 y hay cinco datos. 30 ÷ 5 = 6.", hint: "Calcula primero la suma total." },
                { id: "es-f-12", text: "¿Cuál es la mediana of 10, 4, 8, 6 y 2?", answer: "6", explanation: "Ordenamos: 2, 4, 6, 8, 10. El valor central es 6.", hint: "La mediana requiere ordenar los datos." },
                { id: "es-f-13", text: "¿Cuál es la moda of 1, 2, 2, 3, 4, 2?", answer: "2", explanation: "El número 2 aparece tres veces, más que cualquier otro valor.", hint: "Cuenta las repeticiones." },
                { id: "es-f-14", text: "¿Cuál es el rango of 5, 11, 3, 8 y 14?", answer: "11", explanation: "Máximo = 14 y mínimo = 3. Rango = 14 − 3 = 11.", hint: "Usa solamente el mayor y el menor." },
                { id: "es-f-15", text: "¿Cuál es la media of 7, 8 y 9?", answer: "8", explanation: "7 + 8 + 9 = 24. Al dividir 24 entre 3 obtenemos 8.", hint: "Divide la suma entre tres." },
                { id: "es-f-16", text: "¿Cuál es la mediana of 6, 1, 4, 9 y 3?", answer: "4", explanation: "Ordenamos: 1, 3, 4, 6, 9. El valor central es 4.", hint: "No tomes el valor central hasta ordenar la lista." },
                { id: "es-f-17", text: "¿Cuál es la moda of 5, 7, 5, 8 y 5?", answer: "5", explanation: "El 5 aparece tres veces, por lo que es el valor más frecuente.", hint: "Busca el número que tiene mayor frecuencia." },
                { id: "es-f-18", text: "¿Cuál es el rango of 25, 30, 22 y 28?", answer: "8", explanation: "30 es el máximo y 22 el mínimo. 30 − 22 = 8.", hint: "Rango = máximo − mínimo." },
                { id: "es-f-19", text: "¿Cuál es la media of 3, 3, 6 y 8?", answer: "5", explanation: "La suma es 20. Como hay cuatro datos, 20 ÷ 4 = 5.", hint: "No importa que un valor se repita; cada aparición cuenta como dato." },
                { id: "es-f-20", text: "¿Cuál es la mediana of 2, 5, 8 y 10?", answer: "6.5", explanation: "Hay una cantidad par de datos. Los valores centrales son 5 y 8. Su promedio es (5 + 8) ÷ 2 = 6.5.", hint: "Con una cantidad par de datos, promedia los dos valores centrales." },
                { id: "es-f-21", text: "¿Cuál es la moda of 9, 9, 10, 11 y 12?", answer: "9", explanation: "El 9 es el único valor que aparece más de una vez.", hint: "Observa cuál se repite." },
                { id: "es-f-22", text: "¿Cuál es el rango of 100, 80, 90 y 70?", answer: "30", explanation: "Máximo = 100, mínimo = 70. Entonces 100 − 70 = 30.", hint: "Solo necesitas dos valores." },
                { id: "es-f-23", text: "¿Cuál es la media of 12, 14, 16 y 18?", answer: "15", explanation: "La suma es 60. Al dividir 60 entre 4 obtenemos 15.", hint: "Suma los cuatro datos antes de dividir." },
                { id: "es-f-24", text: "¿Cuál es la mediana of 11, 7, 9, 3 y 5?", answer: "7", explanation: "Ordenamos: 3, 5, 7, 9, 11. El centro es 7.", hint: "Ordena de menor a mayor." },
                { id: "es-f-25", text: "¿Cuál es la moda of 2, 4, 4, 4, 6 y 8?", answer: "4", explanation: "El 4 aparece tres veces, más que los demás números.", hint: "El valor con mayor frecuencia es la moda." },
                { id: "es-f-26", text: "¿Cuál es el rango of 6, 12, 18, 24 y 30?", answer: "24", explanation: "30 − 6 = 24.", hint: "Busca primero el máximo y el mínimo." },
                { id: "es-f-27", text: "¿Cuál es la media of 20, 30 y 40?", answer: "30", explanation: "20 + 30 + 40 = 90. Después 90 ÷ 3 = 30.", hint: "El valor central coincide con la media en esta sucesión." },
                { id: "es-f-28", text: "¿Cuál es la mediana of 4, 10, 6, 8 y 2?", answer: "6", explanation: "Ordenamos: 2, 4, 6, 8, 10. El dato central es 6.", hint: "Ordenar es el primer paso." },
                { id: "es-f-29", text: "¿Cuál es la moda of 1, 1, 2, 3, 3, 3?", answer: "3", explanation: "El 3 aparece tres veces y es el valor más frecuente.", hint: "Compara la frecuencia de 1, 2 y 3." },
                { id: "es-f-30", text: "¿Cuál es el rango of 15, 19, 21, 13 y 17?", answer: "8", explanation: "Máximo = 21 y mínimo = 13. 21 − 13 = 8.", hint: "Resta los extremos." },
                { id: "es-f-31", text: "¿Cuál es la media of 1, 2, 3, 4 y 5?", answer: "3", explanation: "La suma es 15 y hay cinco datos. 15 ÷ 5 = 3.", hint: "Divide la suma entre cinco." },
                { id: "es-f-32", text: "¿Cuál es la mediana of 12, 15, 10, 8 y 20?", answer: "12", explanation: "Ordenamos: 8, 10, 12, 15, 20. El valor central es 12.", hint: "Encuentra el tercer valor después de ordenar." },
                { id: "es-f-33", text: "¿Cuál es la moda of 7, 8, 8, 9, 10 y 8?", answer: "8", explanation: "El 8 aparece tres veces.", hint: "Cuenta cuántas apariciones tiene cada número." },
                { id: "es-f-34", text: "¿Cuál es el rango of 2, 9, 14, 5 y 11?", answer: "12", explanation: "Máximo = 14, mínimo = 2. Rango = 14 − 2 = 12.", hint: "No necesitas sumar los datos." },
                { id: "es-f-35", text: "¿Cuál es la media of 6, 8, 10 y 12?", answer: "9", explanation: "6 + 8 + 10 + 12 = 36. 36 ÷ 4 = 9.", hint: "Calcula primero la suma total." },
                { id: "es-f-36", text: "¿Cuál es la mediana of 20, 14, 18, 12 y 16?", answer: "16", explanation: "Ordenados quedan 12, 14, 16, 18, 20. El centro es 16.", hint: "El tercer valor es la mediana cuando hay cinco datos." },
                { id: "es-f-37", text: "¿Cuál es la moda of 10, 12, 10, 14 y 10?", answer: "10", explanation: "El 10 aparece tres veces.", hint: "Identifica el valor más repetido." },
                { id: "es-f-38", text: "¿Cuál es el rango of 40, 45, 38 y 50?", answer: "12", explanation: "50 − 38 = 12.", hint: "Localiza el mayor y el menor." },
                { id: "es-f-39", text: "¿Cuál es la media of 9, 11, 13 y 15?", answer: "12", explanation: "La suma es 48 y 48 ÷ 4 = 12.", hint: "Suma los cuatro números." },
                { id: "es-f-40", text: "¿Cuál es la mediana of 30, 10, 20, 40 y 50?", answer: "30", explanation: "Ordenamos: 10, 20, 30, 40, 50. El valor central es 30.", hint: "Ordena antes de elegir el centro." },
                { id: "es-f-41", text: "¿Cuál es la moda of 6, 7, 6, 8, 9, 6?", answer: "6", explanation: "El número 6 aparece tres veces.", hint: "Cuenta las repeticiones." },
                { id: "es-f-42", text: "¿Cuál es el rango of 3, 18, 9, 12 y 6?", answer: "15", explanation: "El máximo es 18 y el mínimo 3. 18 − 3 = 15.", hint: "Rango significa diferencia entre los extremos." },
                { id: "es-f-43", text: "¿Cuál es la media of 4, 8, 12 y 16?", answer: "10", explanation: "4 + 8 + 12 + 16 = 40. 40 ÷ 4 = 10.", hint: "Divide la suma entre cuatro." },
                { id: "es-f-44", text: "¿Cuál es la mediana of 1, 10, 4, 7 y 13?", answer: "7", explanation: "Ordenamos: 1, 4, 7, 10, 13. El valor central es 7.", hint: "Busca el tercer valor." },
                { id: "es-f-45", text: "¿Cuál es la moda of 5, 5, 6, 7, 8 y 5?", answer: "5", explanation: "El 5 aparece tres veces y es el valor más frecuente.", hint: "Observa qué número se repite más." },
                { id: "es-f-46", text: "¿Cuál es el rango of 7, 15, 22 y 10?", answer: "15", explanation: "Máximo = 22 y mínimo = 7. 22 − 7 = 15.", hint: "Calcula máximo menos mínimo." },
                { id: "es-f-47", text: "¿Cuál es la media of 10, 20, 30, 40 y 50?", answer: "30", explanation: "La suma es 150. Al dividir entre 5 obtenemos 30.", hint: "Divide 150 entre la cantidad de datos." },
                { id: "es-f-48", text: "¿Cuál es la mediana of 14, 2, 8, 10 y 6?", answer: "8", explanation: "Ordenamos: 2, 6, 8, 10, 14. El centro es 8.", hint: "Ordena antes de buscar el centro." },
                { id: "es-f-49", text: "¿Cuál es la moda of 2, 5, 7, 7, 9 y 7?", answer: "7", explanation: "El 7 aparece tres veces.", hint: "El valor con mayor frecuencia es la moda." },
                { id: "es-f-50", text: "¿Cuál es el rango of 10, 25, 18, 30 y 12?", answer: "20", explanation: "El máximo es 30 y el mínimo es 10. 30 − 10 = 20.", hint: "Busca solamente los dos extremos." }
            ],
            medio: [
                { id: "es-m-1", text: "Las edades de cinco personas son 12, 15, 14, 13 y 16 años. ¿Cuál es la media?", answer: "14 años", explanation: "La suma es 12 + 15 + 14 + 13 + 16 = 70. Al dividir entre 5 obtenemos 14.", hint: "Suma todas las edades y divide entre cinco." },
                { id: "es-m-2", text: "Las calificaciones son 7, 8, 9, 6, 10 y 8. ¿Cuál es la media?", answer: "8", explanation: "La suma es 48 y hay seis calificaciones. 48 ÷ 6 = 8.", hint: "Cada calificación tiene el mismo peso." },
                { id: "es-m-3", text: "En los datos 4, 7, 7, 9, 10, 7 y 12, ¿cuál es la moda y el rango?", answer: "Moda = 7; rango = 8", explanation: "El 7 aparece tres veces. El rango es 12 − 4 = 8.", hint: "Calcula frecuencia para la moda y extremos para el rango." },
                { id: "es-m-4", text: "Calcula la mediana of 18, 11, 15, 20, 13, 17 y 10.", answer: "15", explanation: "Ordenamos: 10, 11, 13, 15, 17, 18, 20. El cuarto valor es 15.", hint: "Hay siete datos, así que busca el cuarto." },
                { id: "es-m-5", text: "Un estudiante obtuvo 70, 80, 90 y 100 puntos. ¿Cuál es su promedio?", answer: "85", explanation: "70 + 80 + 90 + 100 = 340. 340 ÷ 4 = 85.", hint: "El promedio es la media aritmética." },
                { id: "es-m-6", text: "Un conjunto tiene media 12 y está formado por 5 datos. ¿Cuál es la suma total de los datos?", answer: "60", explanation: "Media = suma ÷ cantidad. Por lo tanto, suma = 12 × 5 = 60.", hint: "Despeja la suma de la fórmula de la media." },
                { id: "es-m-7", text: "Cuatro números tienen media 15. Tres son 10, 12 y 18. ¿Cuál es el cuarto número?", answer: "20", explanation: "La suma necesaria es 15 × 4 = 60. Los tres conocidos suman 40. Entonces falta 60 − 40 = 20.", hint: "Primero calcula cuánto deben sumar los cuatro datos." },
                { id: "es-m-8", text: "Cinco números tienen media 20. Si cuatro son 15, 18, 22 y 25, ¿cuál es el quinto?", answer: "20", explanation: "La suma total debe ser 20 × 5 = 100. Los cuatro conocidos suman 80. Falta 20.", hint: "Convierte primero la media en suma total." },
                { id: "es-m-9", text: "En una encuesta, 8 personas eligieron A, 5 eligieron B y 7 eligieron C. ¿Cuántas personas participaron?", answer: "20", explanation: "Sumamos las frecuencias: 8 + 5 + 7 = 20.", hint: "Las frecuencias representan cantidades de personas." },
                { id: "es-m-10", text: "En una clase de 40 estudiantes, 10 prefieren fútbol. ¿Qué porcentaje representa?", answer: "25%", explanation: "10 ÷ 40 = 0.25. Multiplicamos por 100 y obtenemos 25%.", hint: "Usa porcentaje = parte ÷ total × 100." },
                { id: "es-m-11", text: "En un grupo de 50 estudiantes, 30 aprobaron. ¿Qué porcentaje aprobó?", answer: "60%", explanation: "30 ÷ 50 = 0.6, y 0.6 × 100 = 60%.", hint: "Compara la cantidad aprobada con el total." },
                { id: "es-m-12", text: "Una encuesta de 80 personas indica que 20 prefieren té. ¿Qué porcentaje prefiere té?", answer: "25%", explanation: "20 ÷ 80 = 0.25 = 25%.", hint: "Divide la frecuencia entre el total." },
                { id: "es-m-13", text: "Los datos son 5, 8, 8, 10, 12, 12, 12 y 15. ¿Cuál es la moda?", answer: "12", explanation: "El 12 aparece tres veces; es la frecuencia más alta.", hint: "Compara las repeticiones de cada valor." },
                { id: "es-m-14", text: "¿Cuál es la mediana of 5, 7, 9, 10, 12 y 15?", answer: "9.5", explanation: "Los datos centrales son 9 y 10. Su promedio es (9 + 10) ÷ 2 = 9.5.", hint: "Hay seis datos, por lo que debes usar los dos centrales." },
                { id: "es-m-15", text: "¿Cuál es el rango of 18, 25, 31, 14, 22 y 29?", answer: "17", explanation: "Máximo = 31 y mínimo = 14. 31 − 14 = 17.", hint: "Ignora los valores intermedios para calcular el rango." },
                { id: "es-m-16", text: "Las temperaturas de cinco días fueron 20, 22, 25, 23 y 20 °C. ¿Cuál es la temperatura media?", answer: "22 °C", explanation: "La suma es 110 y 110 ÷ 5 = 22.", hint: "Suma las cinco temperaturas." },
                { id: "es-m-17", text: "Un jugador anotó 12, 15, 18, 10 y 20 puntos. ¿Cuál fue su media de puntos?", answer: "15 puntos", explanation: "La suma es 75 y 75 ÷ 5 = 15.", hint: "Divide el total anotado entre cinco partidos." },
                { id: "es-m-18", text: "La media of 6 números es 14. ¿Cuál es su suma?", answer: "84", explanation: "Multiplicamos media por cantidad: 14 × 6 = 84.", hint: "Invierte la fórmula de la media." },
                { id: "es-m-19", text: "La media of 8 datos es 10. Si se agrega un dato de 18, ¿cuál es la nueva media?", answer: "10.89 aproximadamente", explanation: "Los ocho datos suman 80. Al agregar 18, la suma es 98. Hay nueve datos: 98 ÷ 9 ≈ 10.89.", hint: "Primero encuentra la suma original." },
                { id: "es-m-20", text: "La media of 5 datos es 12. Se agrega un sexto dato of 18. ¿Cuál es la nueva media?", answer: "13", explanation: "Los cinco datos suman 60. Con 18, la suma es 78. 78 ÷ 6 = 13.", hint: "Convierte la media inicial en una suma." },
                { id: "es-m-21", text: "Una tienda vendió 12, 15, 18 y 15 productos durante cuatro días. ¿Cuál es la moda?", answer: "15", explanation: "15 aparece dos veces y los demás una vez.", hint: "Busca el número que se repite." },
                { id: "es-m-22", text: "Una familia gastó $100, $150, $120, $130 y $200. ¿Cuál fue el gasto promedio?", answer: "$140", explanation: "La suma is $700. Al dividir entre 5 obtenemos $140.", hint: "Suma todos los gastos antes de dividir." },
                { id: "es-m-23", text: "¿Cuál es la mediana of 21, 15, 18, 30, 12, 24 y 27?", answer: "21", explanation: "Ordenamos: 12, 15, 18, 21, 24, 27, 30. El cuarto dato es 21.", hint: "Con siete datos, toma el cuarto después de ordenar." },
                { id: "es-m-24", text: "En una encuesta, 18 de 60 personas eligieron la opción A. ¿Qué porcentaje representa?", answer: "30%", explanation: "18 ÷ 60 = 0.3, que equivale a 30%.", hint: "Convierte la fracción parte/total a porcentaje." },
                { id: "es-m-25", text: "Un conjunto tiene valores 4, 6, 6, 7, 9, 10, 10 y 10. ¿Cuál es la moda?", answer: "10", explanation: "El 10 aparece tres veces, más que cualquier otro valor.", hint: "Cuenta la frecuencia de cada número." },
                { id: "es-m-26", text: "¿Cuál es la media of 14, 16, 18, 20 y 22?", answer: "18", explanation: "La suma is 90 y 90 ÷ 5 = 18.", hint: "Los datos están distribuidos simétricamente alrededor de 18." },
                { id: "es-m-27", text: "¿Cuál es el rango of 105, 98, 120, 110 y 95?", answer: "25", explanation: "Máximo = 120 y mínimo = 95. 120 − 95 = 25.", hint: "Encuentra los extremos antes de restar." },
                { id: "es-m-28", text: "Una encuesta tiene 100 participantes y 45 prefieren la opción X. ¿Qué porcentaje no eligió X?", answer: "55%", explanation: "Los que no eligieron X son 100 − 45 = 55 personas. Como el total is 100, representan 55%.", hint: "Primero calcula cuántas personas quedan." },
                { id: "es-m-29", text: "Las ventas fueron 10, 20, 30, 20 y 40. ¿Cuál es la media?", answer: "24", explanation: "La suma is 120 y 120 ÷ 5 = 24.", hint: "No confundas la moda 20 con la media." },
                { id: "es-m-30", text: "¿Cuál es la mediana of 3, 8, 12, 15, 20 y 25?", answer: "13.5", explanation: "Los valores centrales son 12 y 15. (12 + 15) ÷ 2 = 13.5.", hint: "Con seis datos hay dos valores centrales." },
                { id: "es-m-31", text: "La media of tres números es 18. Dos números son 15 y 20. ¿Cuál es el tercero?", answer: "19", explanation: "La suma total debe ser 18 × 3 = 54. Los conocidos suman 35. El tercero is 54 − 35 = 19.", hint: "Calcula primero la suma que deben tener los tres." },
                { id: "es-m-32", text: "Una clase tiene 30 alumnos. 12 son mujeres. ¿Qué porcentaje son hombres?", answer: "60%", explanation: "Hay 30 − 12 = 18 hombres. 18 ÷ 30 × 100 = 60%.", hint: "Primero calcula la cantidad de hombres." },
                { id: "es-m-33", text: "Un conjunto tiene media 25 y 4 datos. Si tres datos son 20, 30 y 24, ¿Cuál es el cuarto?", answer: "26", explanation: "La suma total debe ser 100. Los tres datos suman 74. Falta 26.", hint: "Usa media × cantidad para obtener la suma total." },
                { id: "es-m-34", text: "Los tiempos de carrera son 12, 14, 13, 16 y 15 segundos. ¿Cuál es la mediana?", answer: "14 segundos", explanation: "Ordenados: 12, 13, 14, 15, 16. El valor central es 14.", hint: "Ordena los tiempos antes de buscar la posición central." },
                { id: "es-m-35", text: "¿Cuál es la media of 25, 30, 35, 40, 45 y 50?", answer: "37.5", explanation: "La suma is 225. 225 ÷ 6 = 37.5.", hint: "Hay seis datos, así que divide entre seis." },
                { id: "es-m-36", text: "Una encuesta registra 15 votos para A, 20 para B y 25 para C. ¿Cuál es la frecuencia relativa de B?", answer: "33.33% aproximadamente", explanation: "Hay 60 votos en total. Para B: 20 ÷ 60 = 0.3333, equivalente a 33.33%.", hint: "Divide la frecuencia de B entre el total." },
                { id: "es-m-37", text: "Los datos 2, 4, 4, 5, 7, 8, 8 y 8 tienen ¿qué moda?", answer: "8", explanation: "El 8 aparece tres veces, mientras que el 4 aparece dos veces.", hint: "Compara las frecuencias." },
                { id: "es-m-38", text: "¿Cuál es el rango of 45, 32, 50, 41, 38 y 29?", answer: "21", explanation: "Máximo = 50 y mínimo = 29. 50 − 29 = 21.", hint: "Solo importa el mayor y el menor." },
                { id: "es-m-39", text: "La media of 10 datos es 24. ¿Qué suma tienen los datos?", answer: "240", explanation: "24 × 10 = 240.", hint: "Despeja la suma a partir de la fórmula de la media." },
                { id: "es-m-40", text: "Una lista tiene media 16 con 5 datos. Si se agrega el número 26, ¿Cuál es la nueva media?", answer: "17.67 aproximadamente", explanation: "La suma original es 80. Al agregar 26, obtenemos 106. Hay 6 datos: 106 ÷ 6 ≈ 17.67.", hint: "Encuentra primero la suma de los cinco datos originales." },
                { id: "es-m-41", text: "Las edades son 8, 10, 10, 11, 12, 10 y 14. ¿Cuál es la moda?", answer: "10", explanation: "La edad 10 aparece tres veces.", hint: "Busca la edad con mayor frecuencia." },
                { id: "es-m-42", text: "¿Cuál es la mediana of 4, 9, 2, 11, 7, 5 y 13?", answer: "7", explanation: "Ordenamos: 2, 4, 5, 7, 9, 11, 13. El cuarto dato es 7.", hint: "Con siete datos, la posición central es la cuarta." },
                { id: "es-m-43", text: "Un producto tuvo ventas of 50, 60, 55, 70 y 65 unidades. ¿Cuál fue la venta promedio?", answer: "60 unidades", explanation: "La suma is 300 y 300 ÷ 5 = 60.", hint: "Calcula el total de unidades vendidas." },
                { id: "es-m-44", text: "En una encuesta, 24 de 80 personas eligieron una opción. ¿Cuál es la frecuencia relativa?", answer: "30%", explanation: "24 ÷ 80 = 0.30, equivalente a 30%.", hint: "Parte entre total." },
                { id: "es-m-45", text: "Los valores 10, 15, 20, 25 y 30 tienen una media of 20. Si se elimina el 30, ¿Cuál es la nueva media?", answer: "17.5", explanation: "La suma original es 100. Al quitar 30 quedan 70. Hay cuatro datos: 70 ÷ 4 = 17.5.", hint: "Actualiza la suma y la cantidad de datos." },
                { id: "es-m-46", text: "La media of cuatro números es 25. Si se agrega un quinto número of 40, ¿Cuál es la nueva media?", answer: "28", explanation: "Los cuatro datos suman 100. Con 40 suman 140. 140 ÷ 5 = 28.", hint: "Convierte la media inicial en suma." },
                { id: "es-m-47", text: "Un grupo tiene 12, 15, 15, 18, 20, 15 y 22. ¿Cuál es la media?", answer: "16.71 aproximadamente", explanation: "La suma is 117. 117 ÷ 7 ≈ 16.71.", hint: "La repetición del 15 no cambia la fórmula: cuenta cada aparición." },
                { id: "es-m-48", text: "¿Cuál es la mediana of 25, 10, 30, 20, 15 y 40?", answer: "22.5", explanation: "Ordenamos: 10, 15, 20, 25, 30, 40. Los centrales son 20 y 25. Su promedio es 22.5.", hint: "Con seis valores debes promediar las posiciones tercera y cuarta." },
                { id: "es-m-49", text: "Una encuesta tiene 200 personas y 70 prefieren la opción A. ¿Qué porcentaje prefiere otras opciones?", answer: "65%", explanation: "200 − 70 = 130 personas. 130 ÷ 200 × 100 = 65%.", hint: "Primero calcula cuántas personas no eligieron A." },
                { id: "es-m-50", text: "Los datos son 6, 8, 8, 9, 10, 10, 10, 12. ¿Cuál es la media y la moda?", answer: "Media = 9.125; moda = 10", explanation: "La suma is 73 y hay 8 datos, por lo que 73 ÷ 8 = 9.125. El 10 aparece tres veces y es la moda.", hint: "Calcula la media con suma/cantidad y la moda contando repeticiones." }
            ],
            dificil: [
                { id: "es-d-1", text: "La media of cinco números es 18. Si uno de los números, que era 12, se reemplaza por 27, ¿Cuál es la nueva media?", answer: "21", explanation: "La suma original es 5 × 18 = 90. Al reemplazar 12 por 27, la suma aumenta 15: 90 + 15 = 105. La nueva media es 105 ÷ 5 = 21.", hint: "El reemplazo cambia la suma, pero no la cantidad de datos." },
                { id: "es-d-2", text: "La media of 8 datos es 15. Si se elimina un dato of 22, ¿Cuál es la nueva media?", answer: "Aproximadamente 14", explanation: "La suma original es 8 × 15 = 120. Al quitar 22 quedan 98. Como quedan 7 datos, 98 ÷ 7 = 14.", hint: "Actualiza tanto la suma como la cantidad." },
                { id: "es-d-3", text: "Un conjunto of 6 datos tiene media 20. Cinco datos son 12, 18, 21, 25 y 30. ¿Cuál es el sexto dato?", answer: "14", explanation: "La suma total debe ser 6 × 20 = 120. Los cinco datos conocidos suman 106. El sexto es 120 − 106 = 14.", hint: "Determina primero la suma total requerida." },
                { id: "es-d-4", text: "La media of 10 valores es 24. Se descubre que uno de ellos fue registrado como 18 cuando realmente era 28. ¿Cuál es la media corregida?", answer: "25", explanation: "La suma registrada era 10 × 24 = 240. La corrección aumenta la suma en 10, quedando 250. 250 ÷ 10 = 25.", hint: "Corrige la suma antes de recalcular la media." },
                { id: "es-d-5", text: "La media of 7 números es 16. Si se agrega un número de 30 y otro de 10, ¿Cuál es la nueva media?", answer: "16.89 aproximadamente", explanation: "La suma original es 7 × 16 = 112. Los dos nuevos datos suman 30 + 10 = 40. La nueva suma es 112 + 40 = 152. Ahora hay 9 datos, por lo que la nueva media es 152 ÷ 9 ≈ 16.89.", hint: "Calcula primero la suma original y después agrega los dos nuevos valores." },
                { id: "es-d-6", text: "La media of 12 datos es 25. Si se agregan tres datos con valores 20, 30 y 40, ¿Cuál es la nueva media?", answer: "26", explanation: "Los 12 datos suman 300. Los nuevos suman 90. La suma total es 390 y ahora hay 15 datos. 390 ÷ 15 = 26.", hint: "Usa media × cantidad para obtener la suma inicial." },
                { id: "es-d-7", text: "Un conjunto of 9 datos tiene media 14. Se eliminan dos datos, 10 y 18. ¿Cuál es la nueva media?", answer: "14", explanation: "La suma original es 126. Al eliminar 10 y 18, queda 98. Hay 7 datos restantes: 98 ÷ 7 = 14.", hint: "Los dos valores eliminados suman exactamente 28." },
                { id: "es-d-8", text: "Cinco estudiantes tienen promedio 82. Si se incorpora un sexto estudiante con calificación 94, ¿Cuál es el nuevo promedio?", answer: "84", explanation: "Las cinco calificaciones suman 410. Con 94 suman 504. 504 ÷ 6 = 84.", hint: "Convierte el promedio inicial en puntos totales." },
                { id: "es-d-9", text: "Un examen tiene media 70 para 20 alumnos. Si se elimina una calificación de 50 y otra of 90, ¿Cuál es la nueva media?", answer: "70", explanation: "La suma original es 1400. Las dos calificaciones eliminadas suman 140. Quedan 1260 puntos para 18 alumnos: 1260 ÷ 18 = 70.", hint: "Las dos calificaciones eliminadas tienen promedio 70." },
                { id: "es-d-10", text: "La media of 8 números es 30. Uno de ellos se registró como 42, pero debía ser 24. ¿Cuál es la media correcta?", answer: "27.75", explanation: "La suma registrada es 240. La corrección disminuye 18: 240 − 18 = 222. 222 ÷ 8 = 27.75.", hint: "Resta la diferencia entre el dato incorrecto y el correcto." },
                { id: "es-d-11", text: "Los datos son 4, 6, 6, 8, 9, 10, 10, 10, 12 y 15. Calcula media, mediana y moda.", answer: "Media = 9; mediana = 9.5; moda = 10", explanation: "La suma is 90, por lo que la media es 9. Los datos centrales son el quinto y sexto: 9 y 10, cuya media es 9.5. La moda es 10.", hint: "Revisa cuidadosamente las posiciones centrales." },
                { id: "es-d-12", text: "Los tiempos of 9 corredores son 12, 15, 11, 18, 14, 20, 13, 16 y 17 segundos. ¿Cuál es la mediana?", answer: "15 segundos", explanation: "Ordenamos: 11, 12, 13, 14, 15, 16, 17, 18, 20. El quinto valor es 15.", hint: "Con nueve datos, la mediana ocupa la quinta posición." },
                { id: "es-d-13", text: "Una distribución tiene valores 2, 4, 6 y 8 con frecuencias 3, 5, 4 y 2 respectively. ¿Cuál es la media?", answer: "5.14 aproximadamente", explanation: "Calculamos la suma ponderada: 2(3) + 4(5) + 6(4) + 8(2) = 6 + 20 + 24 + 16 = 66. La frecuencia total es 3 + 5 + 4 + 2 = 14. Por tanto, la media es 66 ÷ 14 ≈ 4.71.", hint: "Multiplica cada valor por su frecuencia y después divide la suma ponderada entre la frecuencia total." },
                { id: "es-d-14", text: "Una tabla tiene valores 10, 20, 30 y 40 con frecuencias 2, 3, 4 y 1. ¿Cuál es la media?", answer: "24", explanation: "Calculamos la suma ponderada: 10(2) + 20(3) + 30(4) + 40(1) = 20 + 60 + 120 + 40 = 240. La frecuencia total is 2 + 3 + 4 + 1 = 10. Entonces la media es 240 ÷ 10 = 24.", hint: "No olvides multiplicar cada valor por la cantidad de veces que aparece." },
                { id: "es-d-15", text: "Los valores 5, 10 y 15 tienen frecuencias 4, 3 y 3. ¿Cuál es la media ponderada?", answer: "9.5", explanation: "5(4) + 10(3) + 15(3) = 95. La frecuencia total is 10. 95 ÷ 10 = 9.5.", hint: "Usa cada frecuencia como multiplicador." },
                { id: "es-d-16", text: "Una encuesta registra 12 votos para A, 18 para B, 25 para C y 15 para D. ¿Qué porcentaje representa C?", answer: "35.71% aproximadamente", explanation: "Hay 70 votos. C tiene 25: 25 ÷ 70 × 100 ≈ 35.71%.", hint: "Suma primero todas las frecuencias." },
                { id: "es-d-17", text: "Una muestra tiene 200 personas. El 35% pertenece al grupo A. ¿Cuántas personas pertenecen al grupo A?", answer: "70 personas", explanation: "35% de 200 = 0.35 × 200 = 70.", hint: "Convierte el porcentaje a decimal." },
                { id: "es-d-18", text: "En una población de 500 personas, 125 presentan cierta característica. ¿Qué porcentaje representa?", answer: "25%", explanation: "125 ÷ 500 = 0.25. Multiplicado por 100 da 25%.", hint: "Parte entre total y multiplica por 100." },
                { id: "es-d-19", text: "Una encuesta tiene 240 participantes. El 40% eligió A y el 25% eligió B. ¿Cuántas personas eligieron otras opciones?", answer: "84 personas", explanation: "A representa 96 personas y B representa 60. Juntas son 156. Entonces 240 − 156 = 84.", hint: "Calcula primero las cantidades de A y B." },
                { id: "es-d-20", text: "Un conjunto of 10 datos tiene media 50. Si cada dato aumenta en 5 unidades, ¿Cuál será la nueva media?", answer: "55", explanation: "Al sumar 5 a cada dato, la media también aumenta exactamente 5 unidades.", hint: "La media cambia en la misma cantidad cuando todos los datos reciben el mismo incremento." },
                { id: "es-d-21", text: "Un conjunto tiene media 18. Si cada dato se multiplica por 3, ¿Cuál será la nueva media?", answer: "54", explanation: "Multiplicar todos los datos por 3 multiplica también su media por 3: 18 × 3 = 54.", hint: "Las transformaciones multiplicativas afectan la media de la misma forma." },
                { id: "es-d-22", text: "Un conjunto tiene media 40. Si cada dato disminuye 7 unidades, ¿Cuál será la nueva media?", answer: "33", explanation: "La media también disminuye 7: 40 − 7 = 33.", hint: "Aplica la misma modificación a la media." },
                { id: "es-d-23", text: "Los datos 10, 20, 30 y 40 tienen media 25. Si cada dato se multiplica por 2 y después se le suma 5, ¿Cuál será la nueva media?", answer: "55", explanation: "Primero la media se multiplica por 2: 25 × 2 = 50. Luego se suma 5: 55.", hint: "Aplica las transformaciones a la media en el mismo orden." },
                { id: "es-d-24", text: "La media of 6 datos es 12. Si cada dato se multiplies por 4, ¿Cuál será la suma de los nuevos datos?", answer: "288", explanation: "La suma original es 6 × 12 = 72. Al multiplicar cada dato por 4, la nueva suma es 72 × 4 = 288.", hint: "Encuentra primero la suma original." },
                { id: "es-d-25", text: "Una distribución tiene media 30. Si todos sus datos se dividen entre 5, ¿Cuál será la nueva media?", answer: "6", explanation: "La media también se divide entre 5: 30 ÷ 5 = 6.", hint: "Una transformación lineal aplicada a todos los datos afecta igual a la media." },
                { id: "es-d-26", text: "Los datos 2, 4, 6, 8 y 10 tienen media 6. ¿Cuál es la desviación de cada dato respecto a la media para el dato 10?", answer: "4", explanation: "La desviación respecto a la media es 10 − 6 = 4.", hint: "Resta la media al dato analizado." },
                { id: "es-d-27", text: "Los datos son 4, 6, 8 y 10. ¿Cuál es la media y cuál es la suma de las desviaciones respecto a la media?", answer: "Media = 7; suma de desviaciones = 0", explanation: "La media is 28 ÷ 4 = 7. Las desviaciones son −3, −1, 1 y 3, cuya suma es 0.", hint: "Las desviaciones respecto a la media siempre se equilibran." },
                { id: "es-d-28", text: "Calcula la varianza poblacional de los datos 2, 4 y 6.", answer: "8/3 ≈ 2.67", explanation: "La media is 4. Las desviaciones son −2, 0 y 2. Sus cuadrados son 4, 0 y 4. La suma es 8 y se divide entre 3: 8/3 ≈ 2.67.", hint: "Calcula primero la media y después las desviaciones al cuadrado." },
                { id: "es-d-29", text: "Calcula la varianza poblacional of 1, 3 y 5.", answer: "8/3 ≈ 2.67", explanation: "La media is 3. Las desviaciones son −2, 0 y 2; sus cuadrados suman 8. Dividiendo entre 3 obtenemos 8/3.", hint: "La varianza usa cuadrados de las desviaciones." },
                { id: "es-d-30", text: "¿Cuál es la desviación estándar poblacional de los datos 2, 4 y 6?", answer: "√(8/3) ≈ 1.63", explanation: "La varianza es 8/3. La desviación estándar es la raíz cuadrada de la varianza: √(8/3) ≈ 1.63.", hint: "La desviación estándar es la raíz cuadrada de la varianza." },
                { id: "es-d-31", text: "Una distribución tiene media 50 y desviación estándar 5. ¿Qué puntuación está a 2 desviaciones estándar por encima de la media?", answer: "60", explanation: "Dos desviaciones son 2 × 5 = 10. Sumamos 50 + 10 = 60.", hint: "Multiplica la desviación estándar por 2 y súmala a la media." },
                { id: "es-d-32", text: "Una puntuación es 80, la media es 70 y la desviación estándar es 5. ¿Cuál es su puntuación z?", answer: "2", explanation: "z = (80 − 70) ÷ 5 = 10 ÷ 5 = 2.", hint: "Usa z = (dato − media) ÷ desviación estándar." },
                { id: "es-d-33", text: "Una puntuación es 60, la media es 75 y la desviación estándar es 5. ¿Cuál es su puntuación z?", answer: "−3", explanation: "z = (60 − 75) ÷ 5 = −15 ÷ 5 = −3.", hint: "Una puntuación menor que la media produce una z negativa." },
                { id: "es-d-34", text: "Una distribución tiene media 100 y desviación estándar 10. ¿Qué valor corresponde a z = 1.5?", answer: "115", explanation: "x = media + z(desviación estándar) = 100 + 1.5(10) = 115.", hint: "Despeja el valor original de la fórmula de z." },
                { id: "es-d-35", text: "Una distribución tiene media 40 y desviación estándar 8. ¿Qué valor corresponde to z = −2?", answer: "24", explanation: "x = 40 + (−2)(8) = 40 − 16 = 24.", hint: "Una z negativa indica que el valor está debajo de la media." },
                { id: "es-d-36", text: "Dos grupos tienen medias of 70 y 80. ¿Cuál tiene mayor media y por cuántos puntos?", answer: "El segundo grupo, por 10 puntos", explanation: "Se comparan las medias: 80 − 70 = 10.", hint: "La diferencia entre medias indica cuánto separa a los grupos." },
                { id: "es-d-37", text: "El grupo A tiene media 75 y el grupo B media 75. ¿Qué puede afirmarse sobre sus medias?", answer: "Son iguales", explanation: "Ambos grupos tienen exactamente la misma media, aunque sus datos individuales podrían ser diferentes.", hint: "Compara directamente los valores de las medias." },
                { id: "es-d-38", text: "Dos conjuntos tienen la misma media of 50. El conjunto A tiene rango 10 y el B tiene rango 40. ¿Qué indica esto?", answer: "B presenta mayor dispersión según el rango", explanation: "Un rango mayor significa una mayor distancia entre el valor máximo y mínimo.", hint: "El rango mide la amplitud entre los extremos." },
                { id: "es-d-39", text: "Los datos de un grupo son 10, 10, 10, 10 y 10. ¿Cuál es su rango y qué indica?", answer: "Rango = 0; todos los datos son iguales", explanation: "Máximo y mínimo son ambos 10, por lo que 10 − 10 = 0.", hint: "Si no existe diferencia entre máximo y mínimo, el rango es cero." },
                { id: "es-d-40", text: "Una distribución tiene valores 1, 2, 3, 4 y 5. ¿Cuál es su media?", answer: "3", explanation: "La suma is 15 y hay 5 datos. 15 ÷ 5 = 3.", hint: "Los datos están equilibrados alrededor de 3." },
                { id: "es-d-41", text: "Un conjunto contiene 20 valores. El primer cuartil es 15 y el tercer cuartil es 35. ¿Cuál es el rango intercuartílico?", answer: "20", explanation: "El rango intercuartílico es Q3 − Q1 = 35 − 15 = 20.", hint: "RIC = tercer cuartil menos primer cuartil." },
                { id: "es-d-42", text: "Si Q1 = 12 y Q3 = 30, ¿Cuál es el rango intercuartílico?", answer: "18", explanation: "30 − 12 = 18.", hint: "Solo necesitas los dos cuartiles indicados." },
                { id: "es-d-43", text: "Un conjunto tiene Q1 = 20 y Q3 = 50. ¿Qué valor queda en el centro del intervalo intercuartílico?", answer: "35", explanation: "El punto medio entre 20 y 50 is (20 + 50) ÷ 2 = 35.", hint: "Calcula el promedio de Q1 y Q3." },
                { id: "es-d-44", text: "Un conjunto tiene Q1 = 10 y Q3 = 30. Un dato vale 65. Usando la regla de 1.5 × RIC, ¿el dato puede considerarse atípico por encima?", answer: "Sí", explanation: "RIC = 30 − 10 = 20. El límite superior es 30 + 1.5(20) = 60. Como 65 > 60, queda por encima del límite.", hint: "Calcula primero el RIC y después el límite superior." },
                { id: "es-d-45", text: "Un conjunto tiene Q1 = 20 y Q3 = 40. ¿Cuál es su límite superior usando 1.5 × RIC?", answer: "70", explanation: "RIC = 40 − 20 = 20. El límite superior es 40 + 1.5(20) = 70.", hint: "El límite superior se obtiene sumando 1.5 veces el RIC a Q3." },
                { id: "es-d-46", text: "Un conjunto tiene Q1 = 10 y Q3 = 30. ¿Cuál es su límite inferior usando 1.5 × RIC?", answer: "−20", explanation: "RIC = 20. El límite inferior is 10 − 1.5(20) = 10 − 30 = −20.", hint: "Al límite inferior se le resta 1.5 veces el RIC a Q1." },
                { id: "es-d-47", text: "Una variable tiene media 50 y desviación estándar 10. ¿Qué valor tiene una puntuación z of −1.5?", answer: "35", explanation: "x = 50 + (−1.5)(10) = 50 − 15 = 35.", hint: "Usa x = media + z × desviación estándar." },
                { id: "es-d-48", text: "Una variable tiene media 80 y desviación estándar 4. Un dato es 72. ¿Cuál es su puntuación z?", answer: "−2", explanation: "z = (72 − 80) ÷ 4 = −8 ÷ 4 = −2.", hint: "Primero calcula la diferencia entre el dato y la media." },
                { id: "es-d-49", text: "Una distribución tiene media 60 y desviación estándar 6. ¿Qué valor está a 2.5 desviaciones estándar por debajo de la media?", answer: "45", explanation: "2.5 × 6 = 15. Al estar por debajo de la media: 60 − 15 = 45.", hint: "Multiplica la desviación por 2.5 y resta el resultado." },
                { id: "es-d-50", text: "Un conjunto of 10 datos tiene media 25. Si cada dato se multiplica por 2 y después se le resta 3, ¿Cuál será la nueva media?", answer: "47", explanation: "La media también se transforma: 25 × 2 = 50 y después 50 − 3 = 47.", hint: "Cuando la misma operación se aplica a todos los datos, puedes aplicarla directamente a la media." }
            ]
        }
    },

    probabilidad: {
        name: "Probabilidad",
        icon: "🎲",
        description: "Probabilidad de eventos sencillos.",
        questions: {
            facil: [
                { id: "pr-f-1", text: "Al lanzar una moneda justa una vez, ¿cuál es la probabilidad de obtener cara?", answer: "1/2", explanation: "Hay 2 resultados posibles: cara y cruz. Solo uno es favorable. Por tanto, P(cara)=(1)/(2).", hint: "Cuenta los resultados posibles y los favorables." },
                { id: "pr-f-2", text: "Al lanzar un dado de seis caras, ¿cuál es la probabilidad de obtener un 4?", answer: "1/6", explanation: "El dado tiene 6 resultados posibles y solo uno corresponde al número 4.", hint: "Hay un solo resultado favorable." },
                { id: "pr-f-3", text: "Al lanzar un dado, ¿cuál es la probabilidad de obtener un número par?", answer: "1/2", explanation: "Los números pares son 2, 4 y 6. Hay 3 resultados favorables de 6 posibles: (3)/(6)=(1)/(2).", hint: "Identifica primero los números pares." },
                { id: "pr-f-4", text: "Al lanzar un dado, ¿cuál es la probabilidad de obtener un número impar?", answer: "1/2", explanation: "Los números impares son 1, 3 y 5. Entonces P=(3)/(6)=(1)/(2).", hint: "Los impares son 1, 3 y 5." },
                { id: "pr-f-5", text: "Al lanzar un dado, ¿cuál es la probabilidad de obtener un número mayor que 4?", answer: "1/3", explanation: "Los resultados mayores que 4 son 5 y 6. Por tanto, P=(2)/(6)=(1)/(3).", hint: "Solo considera 5 y 6." },
                { id: "pr-f-6", text: "Al lanzar un dado, ¿cuál es la probabilidad de obtener un número menor que 3?", answer: "1/3", explanation: "Los números menores que 3 son 1 y 2. Hay 2 casos favorables de 6.", hint: "Considera 1 y 2." },
                { id: "pr-f-7", text: "¿Cuál es la probabilidad de sacar un as de una baraja estándar de 52 cartas?", answer: "1/13", explanation: "Hay 4 ases entre 52 cartas: (4)/(52)=(1)/(13).", hint: "Hay cuatro ases." },
                { id: "pr-f-8", text: "¿Cuál es la probabilidad de sacar un corazón de una baraja estándar de 52 cartas?", answer: "1/4", explanation: "Hay 13 corazones entre 52 cartas. Entonces (13)/(52)=(1)/(4).", hint: "Una baraja tiene cuatro palos." },
                { id: "pr-f-9", text: "En una bolsa hay 3 bolas rojas y 2 azules. ¿Cuál es la probabilidad de sacar una roja?", answer: "3/5", explanation: "Hay 5 bolas en total y 3 son rojas.", hint: "Favorables sobre totales." },
                { id: "pr-f-10", text: "En una bolsa hay 4 bolas verdes y 6 amarillas. ¿Cuál es la probabilidad de sacar una amarilla?", answer: "3/5", explanation: "Hay 10 bolas en total y 6 amarillas: (6)/(10)=(3)/(5).", hint: "Simplifica la fracción." },
                { id: "pr-f-11", text: "Se elige al azar un número del 1 al 10. ¿Cuál es la probabilidad de obtener un múltiplo de 2?", answer: "1/2", explanation: "Los múltiplos de 2 son 2, 4, 6, 8 y 10: 5 de 10 números.", hint: "Enumera los múltiplos de 2." },
                { id: "pr-f-12", text: "Se elige un número del 1 al 10. ¿Cuál es la probabilidad de obtener un múltiplo de 5?", answer: "1/5", explanation: "Los únicos múltiplos de 5 son 5 y 10. Hay 2 favorables de 10: (2)/(10)=(1)/(5).", hint: "Los múltiplos son 5 y 10." },
                { id: "pr-f-13", text: "Se elige un número del 1 al 20. ¿Cuál es la probabilidad de obtener un número menor que 5?", answer: "1/5", explanation: "Los números favorables son 1, 2, 3 y 4. Hay 4 de 20: (4)/(20)=(1)/(5).", hint: "Cuenta del 1 al 4." },
                { id: "pr-f-14", text: "Se lanza una moneda. ¿Cuál es la probabilidad de no obtener cara?", answer: "1/2", explanation: "Si no sale cara, necesariamente sale cruz.", hint: "Usa el evento complementario." },
                { id: "pr-f-15", text: "¿Cuál es la probabilidad de obtener un número entre 1 y 6 al lanzar un dado?", answer: "1", explanation: "Todos los resultados posibles del dado están entre 1 y 6. Es un evento seguro.", hint: "¿Existe algún resultado fuera de ese intervalo?" },
                { id: "pr-f-16", text: "¿Cuál es la probabilidad de obtener un 7 al lanzar un dado de seis caras?", answer: "0", explanation: "El número 7 no aparece en un dado estándar de seis caras. Es un evento imposible.", hint: "Revisa el espacio muestral." },
                { id: "pr-f-17", text: "Una bolsa contiene 8 bolas: 5 blancas y 3 negras. ¿Cuál es la probabilidad de sacar una negra?", answer: "3/8", explanation: "Hay 3 bolas negras de un total de 8.", hint: "Favorables = bolas negras." },
                { id: "pr-f-18", text: "Una bolsa contiene 10 bolas, de las cuales 7 son rojas. ¿Cuál es la probabilidad de no sacar una roja?", answer: "3/10", explanation: "Hay 3 bolas que no son rojas.", hint: "Usa 1-P(roja)." },
                { id: "pr-f-19", text: "Se lanza un dado. ¿Cuál es la probabilidad de obtener un número menor o igual a 6?", answer: "1", explanation: "Todos los resultados posibles cumplen esa condición.", hint: "Es un evento seguro." },
                { id: "pr-f-20", text: "Se lanza un dado. ¿Cuál es la probabilidad de obtener un número mayor que 6?", answer: "0", explanation: "No existe ningún resultado mayor que 6 en un dado estándar.", hint: "Observa el máximo valor del dado." },
                { id: "pr-f-21", text: "Se lanzan dos monedas. ¿Cuál es la probabilidad de obtener dos caras?", answer: "1/4", explanation: "Los resultados son CC, CX, XC y XX. Solo uno tiene dos caras.", hint: "Enumera los cuatro resultados." },
                { id: "pr-f-22", text: "Se lanzan dos monedas. ¿Cuál es la probabilidad de obtener dos cruces?", answer: "1/4", explanation: "Solo el resultado XX tiene dos cruces, de 4 resultados posibles.", hint: "Usa el espacio muestral." },
                { id: "pr-f-23", text: "Se lanzan dos monedas. ¿Cuál es la probabilidad de obtener exactamente una cara?", answer: "1/2", explanation: "Los casos favorables son CX y XC. Hay 2 de 4.", hint: "El orden importa en los resultados." },
                { id: "pr-f-24", text: "Se lanzan dos dados. ¿Cuántos resultados posibles existen?", answer: "36", explanation: "Cada dado tiene 6 resultados y son independientes: 6×6=36.", hint: "Multiplica las posibilidades." },
                { id: "pr-f-25", text: "Se lanzan dos dados. ¿Cuál es la probabilidad de obtener dos seises?", answer: "1/36", explanation: "La probabilidad de obtener 6 en cada dado es (1)/(6). Entonces (1)/(6)×(1)/(6)=(1)/(36).", hint: "Los lanzamientos son independientes." },
                { id: "pr-f-26", text: "Se lanzan dos dados. ¿Cuál es la probabilidad de obtener una suma de 7?", answer: "1/6", explanation: "Hay 6 combinaciones: (1,6), (2,5), (3,4), (4,3), (5,2) y (6,1), de 36 posibles.", hint: "Busca todas las parejas que suman 7." },
                { id: "pr-f-27", text: "Se lanzan dos dados. ¿Cuál es la probabilidad de obtener una suma de 2?", answer: "1/36", explanation: "Solo existe el resultado (1,1).", hint: "¿Qué única pareja suma 2?" },
                { id: "pr-f-28", text: "Se lanza un dado. ¿Cuál es la probabilidad de obtener un número primo?", answer: "1/2", explanation: "Los números primos del dado son 2, 3 y 5. Son 3 de 6.", hint: "Recuerda cuáles números son primos." },
                { id: "pr-f-29", text: "Se elige al azar un día de la semana. ¿Cuál es la probabilidad de que sea sábado o domingo?", answer: "2/7", explanation: "Hay 2 días de fin de semana entre 7 días.", hint: "Cuenta los días favorables." },
                { id: "pr-f-30", text: "Se elige un mes al azar. ¿Cuál es la probabilidad de que tenga 31 días?", answer: "7/12", explanation: "Hay 7 meses con 31 días de un total de 12 meses.", hint: "Recuerda qué meses tienen 31 días." },
                { id: "pr-f-31", text: "Se elige una letra al azar de la palabra \"CASA\". ¿Cuál es la probabilidad de elegir una A?", answer: "1/2", explanation: "La palabra tiene 4 letras y 2 son A.", hint: "Cuenta las apariciones de A." },
                { id: "pr-f-32", text: "Se elige una letra al azar de \"PROBABILIDAD\". ¿Cuál es la probabilidad de obtener una B?", answer: "2/12", explanation: "La palabra tiene 12 letras y contiene 2 B.", hint: "Cuenta todas las letras." },
                { id: "pr-f-33", text: "Una ruleta tiene 10 sectores iguales numerados del 1 al 10. ¿Cuál es la probabilidad de obtener un número mayor que 7?", answer: "3/10", explanation: "Los resultados favorables son 8, 9 y 10.", hint: "Hay tres números mayores que 7." },
                { id: "pr-f-34", text: "Una ruleta tiene 8 sectores iguales, 3 rojos y 5 azules. ¿Cuál es la probabilidad de rojo?", answer: "3/8", explanation: "Hay 3 sectores rojos de 8.", hint: "Favorables sobre sectores totales." },
                { id: "pr-f-35", text: "En una caja hay 12 lápices, 4 de ellos son verdes. ¿Cuál es la probabilidad de escoger uno verde?", answer: "1/3", explanation: "(4)/(12)=(1)/(3).", hint: "Simplifica la fracción." },
                { id: "pr-f-36", text: "En una caja hay 20 focos y 2 están defectuosos. ¿Cuál es la probabilidad de seleccionar uno defectuoso?", answer: "1/10", explanation: "Hay 2 defectuosos entre 20: (2)/(20)=(1)/(10).", hint: "Reduce la fracción." },
                { id: "pr-f-37", text: "Si la probabilidad de que llueva es 0.3, ¿cuál es la probabilidad de que no llueva?", answer: "0.7", explanation: "El complemento es 1-0.3=0.7.", hint: "La probabilidad de un evento y su complemento suma 1." },
                { id: "pr-f-38", text: "Si P(A)=0.8, ¿cuál es P(A^c)?", answer: "0.2", explanation: "P(A^c)=1-P(A)=1-0.8=0.2.", hint: "Usa la regla del complemento." },
                { id: "pr-f-39", text: "Si P(A)=0.25, expresa la probabilidad como porcentaje.", answer: "25%", explanation: "Multiplica 0.25 por 100.", hint: "Decimal × 100 = porcentaje." },
                { id: "pr-f-40", text: "Si la probabilidad de un evento es 75%, ¿cuál es su expresión decimal?", answer: "0.75", explanation: "Divide 75 entre 100.", hint: "Porcentaje ÷ 100." },
                { id: "pr-f-41", text: "¿Puede una probabilidad ser igual a 1.2?", answer: "No.", explanation: "Una probabilidad siempre debe estar entre 0 y 1 inclusive.", hint: "Recuerda el intervalo 0\le P(A)\le1." },
                { id: "pr-f-42", text: "¿Puede una probabilidad ser negativa?", answer: "No.", explanation: "Las probabilidades no pueden ser menores que 0.", hint: "El mínimo es 0." },
                { id: "pr-f-43", text: "Si un evento tiene probabilidad 1, ¿qué significa?", answer: "Es un evento seguro.", explanation: "Una probabilidad de 1 significa que el evento ocurrirá con certeza dentro del modelo.", hint: "Piensa en certeza absoluta." },
                { id: "pr-f-44", text: "Si un evento tiene probabilidad 0, ¿qué significa?", answer: "Es un evento imposible.", explanation: "El evento no puede ocurrir bajo el modelo considerado.", hint: "Probabilidad cero significa imposibilidad." },
                { id: "pr-f-45", text: "Se lanza un dado. ¿Cuál es la probabilidad de obtener 1 o 2?", answer: "1/3", explanation: "Hay 2 resultados favorables de 6: (2)/(6)=(1)/(3).", hint: "Los eventos son mutuamente excluyentes." },
                { id: "pr-f-46", text: "Se lanza un dado. ¿Cuál es la probabilidad de obtener 3, 4 o 5?", answer: "1/2", explanation: "Hay 3 resultados favorables de 6.", hint: "Cuenta 3, 4 y 5." },
                { id: "pr-f-47", text: "En una bolsa hay 2 bolas rojas, 3 verdes y 5 azules. ¿Cuál es la probabilidad de sacar una bola verde?", answer: "3/10", explanation: "Hay 10 bolas en total y 3 verdes.", hint: "Primero calcula el total." },
                { id: "pr-f-48", text: "En la misma bolsa, ¿cuál es la probabilidad de sacar una bola roja o azul?", answer: "7/10", explanation: "Hay 2+5=7 bolas rojas o azules de 10.", hint: "Suma los casos favorables." },
                { id: "pr-f-49", text: "Si hay 5 estudiantes y uno será elegido al azar, ¿cuál es la probabilidad de elegir a un estudiante específico?", answer: "1/5", explanation: "Cada estudiante tiene la misma probabilidad y hay 5 opciones.", hint: "Un caso favorable entre cinco." },
                { id: "pr-f-50", text: "Una moneda se lanza 3 veces. ¿Cuántos resultados diferentes existen?", answer: "8", explanation: "Cada lanzamiento tiene 2 posibilidades: 2^3=8.", hint: "Usa 2^n." }
            ],

            medio: [
                { id: "pr-m-1", text: "Se lanzan dos dados. ¿Cuál es la probabilidad de obtener una suma de 8?", answer: "5/36", explanation: "Las combinaciones son (2,6), (3,5), (4,4), (5,3) y (6,2): 5 casos de 36.", hint: "Busca todas las parejas que sumen 8." },
                { id: "pr-m-2", text: "Se lanzan dos dados. ¿Cuál es la probabilidad de obtener una suma mayor que 9?", answer: "1/6", explanation: "Las sumas posibles son 10, 11 y 12. Hay 3 + 2 + 1 = 6 casos favorables de 36.", hint: "Cuenta las combinaciones para 10, 11 y 12." },
                { id: "pr-m-3", text: "Se lanzan dos dados. ¿Cuál es la probabilidad de obtener una suma menor que 5?", answer: "1/6", explanation: "Las sumas 2, 3 y 4 tienen 1, 2 y 3 combinaciones respectivamente. Hay 6 casos de 36.", hint: "1+2+3=6." },
                { id: "pr-m-4", text: "Se lanzan dos dados. ¿Cuál es la probabilidad de obtener al menos un 6?", answer: "11/36", explanation: "Es más sencillo usar el complemento: 1-P(ningún 6)=1-(25)/(36)=(11)/(36).", hint: "Calcula primero la probabilidad de que ninguno sea 6." },
                { id: "pr-m-5", text: "Se lanzan tres monedas. ¿Cuál es la probabilidad de obtener exactamente dos caras?", answer: "3/8", explanation: "Hay \binom32=3 formas de colocar las dos caras entre tres lanzamientos. Hay 2^3=8 resultados.", hint: "Usa combinaciones." },
                { id: "pr-m-6", text: "Se lanzan cuatro monedas. ¿Cuál es la probabilidad de obtener exactamente una cara?", answer: "1/4", explanation: "Hay \binom41=4 resultados favorables de 2^4=16.", hint: "\binom41/2^4." },
                { id: "pr-m-7", text: "Se lanzan cuatro monedas. ¿Cuál es la probabilidad de obtener al menos tres caras?", answer: "5/16", explanation: "Hay 4 resultados con exactamente 3 caras y 1 con 4 caras. 5/16.", hint: "Suma P(3)+P(4)." },
                { id: "pr-m-8", text: "Una urna contiene 5 bolas rojas y 7 azules. Se extrae una bola sin reemplazo y luego otra. ¿Cuál es la probabilidad de obtener dos rojas?", answer: "5/33", explanation: "P(R_1)=5/12 y P(R_2|R_1)=4/11. Multiplicamos: (5)/(12)(4)/(11)=(5)/(33).", hint: "Al no reemplazar, cambia el total." },
                { id: "pr-m-9", text: "En la misma urna, ¿cuál es la probabilidad de obtener primero roja y después azul?", answer: "35/132", explanation: "P(R_1)=5/12 y luego P(A_2|R_1)=7/11. Por tanto, (5)/(12)×(7)/(11)=(35)/(132).", hint: "Usa probabilidades condicionales." },
                { id: "pr-m-10", text: "Una urna contiene 4 bolas blancas y 6 negras. Se extraen dos sin reemplazo. ¿Cuál es la probabilidad de obtener dos negras?", answer: "1/3", explanation: "(6)/(10)×(5)/(9)=(30)/(90)=(1)/(3).", hint: "Después de sacar una negra quedan 5 negras y 9 bolas." },
                { id: "pr-m-11", text: "Una urna contiene 4 bolas blancas y 6 negras. Se extraen dos sin reemplazo. ¿Cuál es la probabilidad de obtener una blanca y una negra, en cualquier orden?", answer: "8/15", explanation: "P(BN)+P(NB)=(4)/(10)(6)/(9)+(6)/(10)(4)/(9)=(8)/(15).", hint: "Considera los dos órdenes posibles." },
                { id: "pr-m-12", text: "Se elige una carta de una baraja estándar. ¿Cuál es la probabilidad de obtener un rey o una reina?", answer: "2/13", explanation: "Hay 4 reyes y 4 reinas, 8 cartas favorables de 52. (8)/(52)=(2)/(13).", hint: "Los eventos no se superponen." },
                { id: "pr-m-13", text: "¿Cuál es la probabilidad de sacar un corazón o un as de una baraja estándar?", answer: "4/13", explanation: "Hay 13 corazones y 4 ases, pero el as de corazones se cuenta dos veces. Favorables: 13+4-1=16.", hint: "Usa inclusión-exclusión." },
                { id: "pr-m-14", text: "¿Cuál es la probabilidad de sacar una carta que no sea de corazones?", answer: "3/4", explanation: "Hay 39 cartas que no son corazones de 52.", hint: "Usa el complemento." },
                { id: "pr-m-15", text: "¿Cuál es la probabilidad de sacar dos ases consecutivos sin reemplazo?", answer: "1/221", explanation: "(4)/(52)×(3)/(51)=(12)/(2652)=(1)/(221).", hint: "Después del primer as quedan 3 ases." },
                { id: "pr-m-16", text: "Se extraen dos cartas sin reemplazo. ¿Cuál es la probabilidad de que ambas sean corazones?", answer: "1/17", explanation: "(13)/(52)×(12)/(51)=(1)/(17).", hint: "Quedan 12 corazones después de la primera extracción." },
                { id: "pr-m-17", text: "Se lanzan dos dados. ¿Cuál es la probabilidad de obtener números iguales?", answer: "1/6", explanation: "Hay 6 resultados dobles: (1,1), ..., (6,6), de 36 posibles.", hint: "Cuenta los dobles." },
                { id: "pr-m-18", text: "Se lanzan dos dados. ¿Cuál es la probabilidad de obtener números diferentes?", answer: "5/6", explanation: "Es el complemento de obtener números iguales: 1-(1)/(6)=(5)/(6).", hint: "Usa el complemento." },
                { id: "pr-m-19", text: "Se lanzan dos dados. ¿Cuál es la probabilidad de que al menos uno sea par?", answer: "3/4", explanation: "El complemento es que ambos sean impares: (1)/(2)×(1)/(2)=(1)/(4). Entonces 1-(1)/(4)=(3)/(4).", hint: "Calcula primero \"ninguno par\"." },
                { id: "pr-m-20", text: "Se lanzan dos dados. ¿Cuál es la probabilidad de que ambos sean pares?", answer: "1/4", explanation: "Cada dado tiene 3 números pares de 6, así que (1)/(2)×(1)/(2)=(1)/(4).", hint: "Los lanzamientos son independientes." },
                { id: "pr-m-21", text: "Si P(A)=0.4, P(B)=0.3 y A y B son mutuamente excluyentes, ¿cuál es P(A\cup B)?", answer: "0.7", explanation: "Para eventos mutuamente excluyentes, P(A\cup B)=P(A)+P(B).", hint: "No existe intersección." },
                { id: "pr-m-22", text: "Si P(A)=0.6, P(B)=0.5 y P(A\cap B)=0.2, calcula P(A\cup B).", answer: "0.9", explanation: "P(A\cup B)=0.6+0.5-0.2=0.9.", hint: "Resta la intersección." },
                { id: "pr-m-23", text: "Si P(A)=0.7 y P(B|A)=0.4, ¿cuál es P(A\cap B)?", answer: "0.28", explanation: "P(A\cap B)=P(A)P(B|A)=0.7(0.4)=0.28.", hint: "Usa la regla de multiplicación." },
                { id: "pr-m-24", text: "Si P(A\cap B)=0.24 y P(A)=0.6, ¿cuál es P(B|A)?", answer: "0.4", explanation: "P(B|A)=(P(A\cap B))/(P(A))=(0.24)/(0.6)=0.4.", hint: "Divide intersección entre P(A)." },
                { id: "pr-m-25", text: "Una máquina produce 5% de productos defectuosos. Si se selecciona un producto, ¿cuál es la probabilidad de que no sea defectuoso?", answer: "95%", explanation: "1-0.05=0.95.", hint: "Usa el complemento." },
                { id: "pr-m-26", text: "Una máquina produce productos defectuosos con probabilidad 0.02. ¿Cuál es la probabilidad de que dos productos independientes sean defectuosos?", answer: "0.0004", explanation: "0.02×0.02=0.0004.", hint: "Multiplica porque son independientes." },
                { id: "pr-m-27", text: "Si la probabilidad de que una persona responda correctamente una pregunta es 0.8, ¿cuál es la probabilidad de que responda correctamente dos preguntas independientes?", answer: "0.64", explanation: "0.8^2=0.64.", hint: "Multiplica las probabilidades." },
                { id: "pr-m-28", text: "Si la probabilidad de acertar una pregunta es 0.7, ¿cuál es la probabilidad de fallar tres preguntas independientes consecutivas?", answer: "0.027", explanation: "Fallar tiene probabilidad 0.3. Entonces 0.3^3=0.027.", hint: "Primero calcula la probabilidad de fallo." },
                { id: "pr-m-29", text: "Un estudiante tiene probabilidad 0.8 de aprobar cada examen independientemente. ¿Cuál es la probabilidad de aprobar los dos primeros?", answer: "0.64", explanation: "0.8×0.8=0.64.", hint: "Eventos independientes." },
                { id: "pr-m-30", text: "Se lanza una moneda 5 veces. ¿Cuál es la probabilidad de obtener exactamente 3 caras?", answer: "5/16", explanation: "Hay \binom53=10 secuencias favorables de 32 posibles. (10)/(32)=(5)/(16).", hint: "Usa la distribución binomial." },
                { id: "pr-m-31", text: "Se lanza una moneda 5 veces. ¿Cuál es la probabilidad de obtener al menos 4 caras?", answer: "3/16", explanation: "Hay 5 secuencias con 4 caras y 1 con 5: 6/32=3/16.", hint: "Suma exactamente 4 y exactamente 5." },
                { id: "pr-m-32", text: "Se lanzan 6 monedas. ¿Cuál es la probabilidad de que todas sean caras?", answer: "1/64", explanation: "Cada lanzamiento tiene probabilidad 1/2: (1/2)^6=1/64.", hint: "Eleva 1/2 al número de lanzamientos." },
                { id: "pr-m-33", text: "Una familia tiene 3 hijos. Suponiendo igual probabilidad de niño y niña, ¿cuál es la probabilidad de tener exactamente 2 niñas?", answer: "3/8", explanation: "Hay \binom32=3 formas favorables entre 2^3=8.", hint: "Es un problema binomial." },
                { id: "pr-m-34", text: "En una familia de 4 hijos, ¿cuál es la probabilidad de que todos sean niñas?", answer: "1/16", explanation: "Cada nacimiento tiene probabilidad 1/2, por lo que (1/2)^4=1/16.", hint: "Multiplica cuatro probabilidades de 1/2." },
                { id: "pr-m-35", text: "En una familia de 4 hijos, ¿cuál es la probabilidad de tener al menos una niña?", answer: "15/16", explanation: "El complemento es tener cuatro niños: 1/16. Entonces 1-1/16=15/16.", hint: "\"Al menos una\" se resuelve fácilmente con complemento." },
                { id: "pr-m-36", text: "Se elige un número del 1 al 100. ¿Cuál es la probabilidad de que sea divisible entre 10?", answer: "1/10", explanation: "Hay 10 múltiplos de 10 entre 1 y 100.", hint: "10, 20, ..., 100." },
                { id: "pr-m-37", text: "Se elige un número del 1 al 100. ¿Cuál es la probabilidad de que sea divisible entre 3?", answer: "33/100", explanation: "Existen 33 múltiplos de 3 entre 1 y 100.", hint: "El mayor múltiplo es 99." },
                { id: "pr-m-38", text: "Se elige un número del 1 al 100. ¿Cuál es la probabilidad de que sea divisible entre 3 o 5?", answer: "47/100", explanation: "Hay 33 múltiplos de 3 y 20 de 5, pero 6 múltiplos de 15 fueron contados dos veces: 33+20-6=47.", hint: "Usa inclusión-exclusión." },
                { id: "pr-m-39", text: "Se elige un número del 1 al 50. ¿Cuál es la probabilidad de que sea primo?", answer: "15/50", explanation: "Hay 15 números primos entre 1 y 50.", hint: "Enumera los primos hasta 50." },
                { id: "pr-m-40", text: "Se escoge una carta al azar. ¿Cuál es la probabilidad de que sea roja?", answer: "1/2", explanation: "Hay 26 cartas rojas de 52.", hint: "Corazones y diamantes son rojos." },
                { id: "pr-m-41", text: "Se escoge una carta. ¿Cuál es la probabilidad de que sea un 10, J, Q o K?", answer: "4/13", explanation: "Hay 4 rangos y 4 palos, para un total de 16 cartas: 16/52=4/13.", hint: "Son cuatro tipos de carta." },
                { id: "pr-m-42", text: "Se extrae una carta de una baraja. ¿Cuál es la probabilidad de que sea un as o una carta roja?", answer: "7/13", explanation: "Hay 26 rojas y 4 ases, pero 2 ases son rojos: 26+4-2=28. Entonces 28/52=7/13.", hint: "No cuentes dos veces los ases rojos." },
                { id: "pr-m-43", text: "Se extraen dos cartas sin reemplazo. ¿Cuál es la probabilidad de que al menos una sea un as?", answer: "33/221", explanation: "Complemento: ninguna es as: (48)/(52)(47)/(51)=(188)/(221). Por tanto, 1-(188)/(221)=(33)/(221).", hint: "\"Al menos una\" suele resolverse con complemento." },
                { id: "pr-m-44", text: "En una clase hay 12 mujeres y 8 hombres. Se elige un estudiante al azar. ¿Cuál es la probabilidad de elegir una mujer?", answer: "3/5", explanation: "Hay 12 mujeres de 20 estudiantes: 12/20=3/5.", hint: "Total = 20." },
                { id: "pr-m-45", text: "En una clase de 20 estudiantes, 8 son hombres. Si se eligen dos estudiantes sin reemplazo, ¿cuál es la probabilidad de que ambos sean hombres?", answer: "14/95", explanation: "(8)/(20)×(7)/(19)=(56)/(380)=(14)/(95).", hint: "El segundo total es 19." },
                { id: "pr-m-46", text: "Si dos eventos A y B son independientes, P(A)=0.5 y P(B)=0.4, ¿cuál es P(A\cap B)?", answer: "0.2", explanation: "Para eventos independientes, P(A\cap B)=P(A)P(B).", hint: "Multiplica." },
                { id: "pr-m-47", text: "Si A y B son independientes y P(A)=0.6, P(B)=0.5, ¿cuál es P(A\cup B)?", answer: "0.8", explanation: "0.6+0.5-(0.6)(0.5)=0.8.", hint: "Primero calcula la intersección." },
                { id: "pr-m-48", text: "Una prueba tiene 10 preguntas de verdadero/falso. Si se responde al azar, ¿cuál es la probabilidad de acertar todas?", answer: "1/1024", explanation: "Cada pregunta tiene probabilidad 1/2 de acierto: (1/2)^{10}=1/1024.", hint: "Son 10 eventos independientes." },
                { id: "pr-m-49", text: "En una prueba de 5 preguntas verdadero/falso, ¿cuál es la probabilidad de acertar exactamente 3 al responder al azar?", answer: "5/16", explanation: "\binom53(1/2)^5=10/32=5/16.", hint: "Usa binomial." },
                { id: "pr-m-50", text: "Una contraseña tiene un solo dígito elegido al azar del 0 al 9. ¿Cuál es la probabilidad de que sea par?", answer: "1/2", explanation: "Hay 5 dígitos pares: 0, 2, 4, 6 y 8.", hint: "Hay 10 dígitos posibles." }
            ],

            dificil: [
                { id: "pr-d-1", text: "Una urna contiene 5 bolas rojas, 4 azules y 3 verdes. Se extraen 3 bolas sin reemplazo. ¿Cuál es la probabilidad de que las tres sean de colores diferentes?", answer: "3/11", explanation: "Hay 5·4·3=60 selecciones ordenadas favorables y 12·11·10=1320 posibles. Por tanto, 60/1320=1/22 para un orden específico; como existen 3!=6 órdenes, la probabilidad es 6/22=3/11.", hint: "Cuenta primero una secuencia R-A-V y después sus permutaciones." },
                { id: "pr-d-2", text: "En una urna hay 6 bolas rojas y 4 blancas. Se extraen 3 sin reemplazo. ¿Cuál es la probabilidad de obtener exactamente 2 rojas?", answer: "1/2", explanation: "Mediante combinaciones: \frac{\binom62\binom41}{\binom{10}3}=(15·4)/(120)=(1)/(2).", hint: "Usa combinaciones cuando el orden no importa." },
                { id: "pr-d-3", text: "Una urna tiene 8 bolas rojas y 2 blancas. Se extraen 4 sin reemplazo. ¿Cuál es la probabilidad de obtener al menos una blanca?", answer: "2/3", explanation: "Complemento: ninguna blanca significa elegir las 4 rojas. 1-\frac{\binom84}{\binom{10}4}=1-(70)/(210)=(2)/(3).", hint: "\"Al menos una\" → usa el complemento." },
                { id: "pr-d-4", text: "De una baraja estándar se extraen 5 cartas. ¿Cuál es la probabilidad de obtener exactamente 2 ases?", answer: "\frac{\binom42\binom{48}3}{\binom{52}5}", explanation: "Se seleccionan 2 de los 4 ases y 3 de las 48 cartas restantes, dividido entre todas las manos posibles de 5 cartas.", hint: "Es una distribución hipergeométrica." },
                { id: "pr-d-5", text: "De una baraja estándar se extraen 5 cartas. ¿Cuál es la probabilidad de obtener al menos un as?", answer: "1-\frac{\binom{48}5}{\binom{52}5}", explanation: "Es más sencillo calcular la probabilidad de no obtener ningún as y restarla de 1.", hint: "Complemento." },
                { id: "pr-d-6", text: "De una baraja estándar se extraen 5 cartas. ¿Cuál es la probabilidad de obtener exactamente un rey y exactamente un as?", answer: "\frac{\binom41\binom41\binom{44}3}{\binom{52}5}", explanation: "Elegimos un rey, un as y tres cartas que no sean ni ases ni reyes.", hint: "Divide el espacio muestral según categorías." },
                { id: "pr-d-7", text: "Se lanzan 6 dados. ¿Cuál es la probabilidad de obtener exactamente dos seises?", answer: "\binom62(1/6)^2(5/6)^4", explanation: "Elegimos las dos posiciones que tendrán 6 y las otras cuatro deben ser diferentes de 6.", hint: "Distribución binomial." },
                { id: "pr-d-8", text: "Se lanzan 10 dados. ¿Cuál es la probabilidad de obtener al menos un seis?", answer: "1-(5/6)^{10}", explanation: "El complemento de obtener al menos un seis es no obtener ningún seis en los 10 lanzamientos.", hint: "Usa el complemento." },
                { id: "pr-d-9", text: "Se lanzan 8 monedas. ¿Cuál es la probabilidad de obtener más caras que cruces?", answer: "93/256", explanation: "Necesitamos 5, 6, 7 u 8 caras. (\binom85+\binom86+\binom87+\binom88)/(2^8)=(56+28+8+1)/(256)=(93)/(256).", hint: "\"Más caras que cruces\" significa más de 4 caras." },
                { id: "pr-d-10", text: "Se lanzan 10 monedas. ¿Cuál es la probabilidad de obtener exactamente 5 caras?", answer: "\frac{\binom{10}5}{2^{10}}", explanation: "Hay 252 secuencias con exactamente 5 caras entre 1024 posibles.", hint: "Usa C(10,5)." },
                { id: "pr-d-11", text: "Un examen tiene 20 preguntas de opción múltiple con 4 opciones cada una. Si un estudiante responde al azar, ¿cuál es la probabilidad de acertar exactamente 5?", answer: "\binom{20}5(1/4)^5(3/4)^{15}", explanation: "Es una distribución binomial con n=20, p=1/4 y k=5.", hint: "Identifica n, p y k." },
                { id: "pr-d-12", text: "En el mismo examen, ¿cuál es la probabilidad de acertar al menos una pregunta?", answer: "1-(3/4)^{20}", explanation: "Calculamos el complemento: fallar las 20 preguntas.", hint: "\"Al menos una\" → complemento." },
                { id: "pr-d-13", text: "Una prueba tiene 15 preguntas con probabilidad de acierto individual de 0.8 e independencia entre preguntas. ¿Cuál es la probabilidad de acertar exactamente 12?", answer: "C(15,12)(0.8)^{12}(0.2)^3", explanation: "Aplicamos la fórmula binomial.", hint: "Exactamente k éxitos." },
                { id: "pr-d-14", text: "Si X\sim Binomial(12,0.3), ¿cuál es P(X=4)?", answer: "C(12,4)(0.3)^4(0.7)^8", explanation: "La distribución binomial utiliza P(X=k)=\binom nkp^k(1-p)^{n-k}.", hint: "Sustituye n=12,k=4,p=0.3." },
                { id: "pr-d-15", text: "Si X\sim Binomial(10,0.4), ¿cuál es P(X\le2)?", answer: "\sum_{k", explanation: "Debemos sumar las probabilidades de obtener 0, 1 o 2 éxitos.", hint: "\"Menor o igual\" requiere una suma." },
                { id: "pr-d-16", text: "Si X\sim Binomial(10,0.4), ¿cuál es P(X\ge8)?", answer: "\sum_{k", explanation: "Sumamos los casos 8, 9 y 10.", hint: "Enumera los valores posibles." },
                { id: "pr-d-17", text: "Una máquina tiene probabilidad 0.1 de producir una pieza defectuosa. Se inspeccionan 8 piezas. ¿Cuál es la probabilidad de obtener exactamente una defectuosa?", answer: "\binom81(0.1)(0.9)^7", explanation: "Es binomial con n=8,p=0.1,k=1.", hint: "Una defectuosa y siete buenas." },
                { id: "pr-d-18", text: "Una máquina produce defectos con probabilidad 0.05. ¿Cuál es la probabilidad de que en 20 piezas no haya ningún defecto?", answer: "(0.95)^{20}", explanation: "Cada pieza debe ser no defectuosa y los eventos se consideran independientes.", hint: "Multiplica 20 probabilidades de 0.95." },
                { id: "pr-d-19", text: "Una fábrica tiene tres máquinas A, B y C que producen 20%, 30% y 50% de las piezas, respectivamente. Sus tasas de defectos son 1%, 2% y 3%. ¿Cuál es la probabilidad de que una pieza seleccionada sea defectuosa?", answer: "0.023 o 2.3%", explanation: "Por probabilidad total: 0.2(0.01)+0.3(0.02)+0.5(0.03)=0.023.", hint: "Multiplica cada producción por su tasa de defectos y suma." },
                { id: "pr-d-20", text: "Usando los datos anteriores, si una pieza resultó defectuosa, ¿cuál es la probabilidad de que haya sido producida por C?", answer: "15/23", explanation: "Por Bayes: P(C|D)=(P(D|C)P(C))/(P(D))=(0.03(0.5))/(0.023)=(15)/(23)≈65.22\%.", hint: "Aplica el teorema de Bayes." },
                { id: "pr-d-21", text: "Una enfermedad afecta al 2% de una población. Una prueba tiene sensibilidad del 95% y especificidad del 90%. ¿Cuál es la probabilidad de que una persona seleccionada al azar tenga la enfermedad y dé positivo?", answer: "0.019 o 1.9%", explanation: "P(E\cap +)=P(E)P(+|E)=0.02(0.95)=0.019.", hint: "Multiplica prevalencia por sensibilidad." },
                { id: "pr-d-22", text: "Con los datos anteriores, ¿cuál es la probabilidad de que una persona dé positivo?", answer: "0.117 o 11.7%", explanation: "P(+)=P(+|E)P(E)+P(+|E^c)P(E^c). Entonces 0.95(0.02)+0.10(0.98)=0.117.", hint: "Usa probabilidad total." },
                { id: "pr-d-23", text: "Con los datos anteriores, si una persona dio positivo, ¿cuál es la probabilidad de que realmente tenga la enfermedad?", answer: "19/117", explanation: "P(E|+)=(0.019)/(0.117)=(19)/(117)≈0.1624.", hint: "Bayes: posterior = conjunta / probabilidad del positivo." },
                { id: "pr-d-24", text: "En una población, 60% de las personas practica deporte y 40% no. Del grupo que practica deporte, 70% consume cierta bebida; del grupo que no practica, 30% la consume. ¿Cuál es la probabilidad de que una persona elegida al azar consuma la bebida?", answer: "54%", explanation: "0.6(0.7)+0.4(0.3)=0.42+0.12=0.54.", hint: "Usa probabilidad total." },
                { id: "pr-d-25", text: "Con los datos anteriores, si una persona consume la bebida, ¿cuál es la probabilidad de que practique deporte?", answer: "7/9", explanation: "P(D|B)=(P(B|D)P(D))/(P(B))=(0.7(0.6))/(0.54)=(7)/(9).", hint: "Aplica Bayes." },
                { id: "pr-d-26", text: "Se extraen dos cartas de una baraja sin reemplazo. Si se sabe que la primera carta es un as, ¿cuál es la probabilidad de que la segunda también sea un as?", answer: "3/51", explanation: "Después de saber que salió un as, quedan 3 ases entre 51 cartas.", hint: "La información cambia el espacio muestral." },
                { id: "pr-d-27", text: "Se lanzan dos dados. Sabiendo que la suma es mayor que 8, ¿cuál es la probabilidad de que la suma sea 10?", answer: "3/10", explanation: "Las sumas mayores que 8 son 9, 10, 11 y 12, con 4, 3, 2 y 1 combinaciones respectivamente: 10 tiene 3 de 10 casos.", hint: "Construye el espacio condicionado." },
                { id: "pr-d-28", text: "Se lanzan dos dados. Sabiendo que la suma es par, ¿cuál es la probabilidad de que ambos dados sean pares?", answer: "1/2", explanation: "Una suma par ocurre cuando ambos son pares o ambos impares. Hay 9 casos de cada tipo, así que 9 de 18 corresponden a ambos pares.", hint: "Par + par y impar + impar producen suma par." },
                { id: "pr-d-29", text: "Una urna tiene 5 bolas rojas y 5 azules. Se extraen dos sin reemplazo. Sabiendo que al menos una es roja, ¿cuál es la probabilidad de que ambas sean rojas?", answer: "2/7", explanation: "Hay \binom{10}2=45 pares. Con al menos una roja hay 45-\binom52=35. Dos rojas: \binom52=10. Por tanto 10/35=2/7.", hint: "Revisa cuidadosamente el denominador condicionado." },
                { id: "pr-d-30", text: "Un jugador lanza una moneda hasta obtener cara por primera vez. ¿Cuál es la probabilidad de que la primera cara aparezca en el cuarto lanzamiento?", answer: "1/16", explanation: "Deben ocurrir tres cruces y después una cara: (1/2)^4=1/16.", hint: "La secuencia es CCC-Cara." },
                { id: "pr-d-31", text: "Una moneda justa se lanza hasta obtener cara. ¿Cuál es la probabilidad de necesitar más de 5 lanzamientos?", answer: "1/32", explanation: "Necesitar más de 5 significa obtener cruz en los primeros cinco lanzamientos: (1/2)^5.", hint: "No necesitas considerar el sexto lanzamiento." },
                { id: "pr-d-32", text: "En una serie de lanzamientos de una moneda justa, ¿cuál es la probabilidad de que aparezca cara antes que cruz?", answer: "1/2", explanation: "El primer lanzamiento necesariamente será cara o cruz, y ambos resultados son igualmente probables.", hint: "Observa únicamente el primer lanzamiento." },
                { id: "pr-d-33", text: "Una variable aleatoria X toma los valores 0, 1 y 2 con probabilidades 0.2, 0.5 y 0.3. ¿Cuál es E(X)?", answer: "1.1", explanation: "E(X)=0(0.2)+1(0.5)+2(0.3)=1.1.", hint: "Multiplica cada valor por su probabilidad." },
                { id: "pr-d-34", text: "Una variable aleatoria X toma 1, 2 y 3 con probabilidades 0.2, 0.5 y 0.3. ¿Cuál es E(X^2)?", answer: "4.9", explanation: "E(X^2)=1^2(0.2)+2^2(0.5)+3^2(0.3)=0.2+2+2.7=4.9.", hint: "Eleva primero los valores al cuadrado." },
                { id: "pr-d-35", text: "Si E(X)=2 y E(X^2)=5, ¿cuál es la varianza de X?", answer: "1", explanation: "Var(X)=E(X^2)-[E(X)]^2=5-4=1.", hint: "Usa la fórmula de varianza." },
                { id: "pr-d-36", text: "Si X tiene distribución binomial con n=20 y p=0.3, ¿cuál es su esperanza?", answer: "6", explanation: "Para una binomial, E(X)=np=20(0.3)=6.", hint: "Media binomial = np." },
                { id: "pr-d-37", text: "Si X tiene distribución binomial con n=20 y p=0.3, ¿cuál es su varianza?", answer: "4.2", explanation: "Var(X)=np(1-p)=20(0.3)(0.7)=4.2.", hint: "Varianza binomial = npq." },
                { id: "pr-d-38", text: "Una variable aleatoria X sigue una distribución binomial con n=5 y p=0.2. ¿Cuál es la probabilidad de que X sea 0?", answer: "0.8^5", explanation: "Para obtener cero éxitos, los cinco ensayos deben ser fallos.", hint: "Usa (1-p)^n." },
                { id: "pr-d-39", text: "Si X\sim Binomial(100,0.5), ¿cuál es E(X)?", answer: "50", explanation: "E(X)=np=100(0.5)=50.", hint: "Media binomial." },
                { id: "pr-d-40", text: "Si X\sim Binomial(100,0.5), ¿cuál es la desviación estándar?", answer: "5", explanation: "Var(X)=100(0.5)(0.5)=25, por lo que \sigma=\sqrt{25}=5.", hint: "Primero calcula la varianza." },
                { id: "pr-d-41", text: "Una variable aleatoria sigue una distribución de Poisson con \lambda=3. ¿Cuál es la probabilidad de observar exactamente 2 eventos?", answer: "\frac{e^{-3}3^2}{2!}", explanation: "La distribución de Poisson usa P(X=k)=e^{-\lambda}\lambda^k/k!.", hint: "Sustituye k=2." },
                { id: "pr-d-42", text: "Una variable de Poisson tiene \lambda=4. ¿Cuál es la probabilidad de observar cero eventos?", answer: "e^{-4}", explanation: "P(X=0)=e^{-4}(4^0)/(0!)=e^{-4}.", hint: "Recuerda que 0!=1." },
                { id: "pr-d-43", text: "Un centro de llamadas recibe en promedio 2 llamadas por minuto. Modelando las llamadas con Poisson, ¿cuál es la probabilidad de recibir exactamente 3 llamadas en un minuto?", answer: "\frac{e^{-2}2^3}{3!}", explanation: "Usamos Poisson con \lambda=2 y k=3.", hint: "Sustituye directamente en la fórmula." },
                { id: "pr-d-44", text: "Un centro recibe en promedio 2 llamadas por minuto. ¿Cuál es la probabilidad de recibir al menos una llamada durante un minuto?", answer: "1-e^{-2}", explanation: "El complemento de al menos una llamada es cero llamadas. 1-P(X=0)=1-e^{-2}.", hint: "Usa complemento." },
                { id: "pr-d-45", text: "Una variable aleatoria continua tiene distribución uniforme en el intervalo [0,10]. ¿Cuál es la probabilidad de que X esté entre 2 y 7?", answer: "1/2", explanation: "La longitud favorable es 5 y la longitud total es 10: 5/10=1/2.", hint: "En uniforme, usa longitudes de intervalos." },
                { id: "pr-d-46", text: "Si X es uniforme en [0,20], ¿cuál es P(X>15)?", answer: "1/4", explanation: "El intervalo favorable [15,20] tiene longitud 5, mientras que el total tiene longitud 20.", hint: "5/20." },
                { id: "pr-d-47", text: "Si X es uniforme en [10,30], ¿cuál es la probabilidad de que 15<X<25?", answer: "1/2", explanation: "El intervalo favorable mide 10 y el total mide 20.", hint: "Divide longitud favorable entre longitud total." },
                { id: "pr-d-48", text: "Dos números X e Y se eligen independientemente de manera uniforme entre 0 y 1. ¿Cuál es la probabilidad de que X+Y<1?", answer: "1/2", explanation: "En el cuadrado unitario, la condición X+Y<1 corresponde a un triángulo que ocupa la mitad del área.", hint: "Representa la desigualdad en un plano." },
                { id: "pr-d-49", text: "Dos números X e Y se eligen independientemente de manera uniforme entre 0 y 1. ¿Cuál es la probabilidad de que |X-Y|<0.2?", answer: "0.36", explanation: "En el cuadrado unitario, el área donde |X-Y|\ge0.2 son dos triángulos de área 0.8^2/2 cada uno. Su área total es 0.64, por lo que el complemento es 0.36.", hint: "Dibuja las líneas Y=X+0.2 y Y=X-0.2." },
                { id: "pr-d-50", text: "Se tienen 10 personas y se seleccionan 3 al azar. ¿Cuál es la probabilidad de que dos personas específicas sean seleccionadas juntas?", answer: "1/15", explanation: "Hay C(10,3)=120 grupos posibles. Para incluir a las dos personas específicas, la tercera puede ser cualquiera de las otras 8: hay 8 grupos favorables. Entonces 8/120=1/15.", hint: "Fija a las dos personas y elige la tercera." }
            ]
        }
    },

    funciones: {
        name: "Funciones",
        icon: "ƒ",
        description: "Evaluación de funciones sencillas.",
        questions: {
            facil: [{
                    id: "fu-f-1",
                    text: "Si f(x) = x + 2, ¿cuánto vale f(5)?",
                    answer: "7",
                    explanation: "Sustituimos x = 5: f(5) = 5 + 2 = 7.",
                    hint: "Sustituye la x por 5."
                },
                {
                    id: "fu-f-2",
                    text: "Si f(x) = 2x + 1, ¿cuánto vale f(3)?",
                    answer: "7",
                    explanation: "f(3) = 2(3) + 1 = 6 + 1 = 7.",
                    hint: "Sustituye x por 3."
                }
            ],

            medio: [{
                    id: "fu-m-1",
                    text: "Si f(x) = 3x − 4, ¿cuánto vale f(6)?",
                    answer: "14",
                    explanation: "f(6) = 3(6) − 4 = 18 − 4 = 14.",
                    hint: "Sustituye x por 6."
                },
                {
                    id: "fu-m-2",
                    text: "Si f(x) = x² + 2x, ¿cuánto vale f(3)?",
                    answer: "15",
                    explanation: "f(3) = 3² + 2(3) = 9 + 6 = 15.",
                    hint: "Primero calcula 3²."
                }
            ],

            dificil: [{
                    id: "fu-d-1",
                    text: "Si f(x) = 2x² − 3, ¿cuánto vale f(4)?",
                    answer: "29",
                    explanation: "f(4) = 2(4²) − 3 = 2(16) − 3 = 32 − 3 = 29.",
                    hint: "Primero calcula 4²."
                },
                {
                    id: "fu-d-2",
                    text: "Si f(x) = 3x² − 2x + 1, ¿cuánto vale f(2)?",
                    answer: "9",
                    explanation: "f(2) = 3(2²) − 2(2) + 1 = 12 − 4 + 1 = 9.",
                    hint: "Sustituye x por 2 y respeta el orden de las operaciones."
                }
            ]
        }
    }
};

/* =========================================================
   DESAFÍOS
   ========================================================= */

const challenges = [{
        id: "ch-1",
        title: "Compra en la tienda",
        description: "Aplica porcentajes y operaciones con dinero.",
        difficulty: "medio",
        topic: "porcentajes",
        questions: [{
                text: "Una mochila cuesta $850 y tiene 20% de descuento. ¿Cuánto dinero se descuenta?",
                answer: "170",
                explanation: "20% de 850 = 850 × 0.20 = 170.",
                hint: "Multiplica 850 × 0.20."
            },
            {
                text: "Después del descuento, ¿cuál es el precio de la mochila?",
                answer: "680",
                explanation: "850 − 170 = 680.",
                hint: "Resta el descuento al precio original."
            },
            {
                text: "Si pagas con $1000, ¿cuánto cambio recibes?",
                answer: "320",
                explanation: "1000 − 680 = 320.",
                hint: "Resta el precio final a los $1000."
            }
        ]
    },

    {
        id: "ch-2",
        title: "El terreno",
        description: "Usa área, perímetro y multiplicación.",
        difficulty: "medio",
        topic: "geometria",
        questions: [{
                text: "Un terreno rectangular mide 12 m de largo y 8 m de ancho. ¿Cuál es su área?",
                answer: "96",
                explanation: "Área = 12 × 8 = 96 m².",
                hint: "Área = largo × ancho."
            },
            {
                text: "¿Cuál es el perímetro del terreno?",
                answer: "40",
                explanation: "P = 2(12 + 8) = 2 × 20 = 40 m.",
                hint: "Suma largo y ancho y multiplica por 2."
            },
            {
                text: "Si cercar cada metro cuesta $85, ¿cuánto cuesta cercar todo el terreno?",
                answer: "3400",
                explanation: "40 × 85 = 3400.",
                hint: "Multiplica el perímetro por el costo por metro."
            }
        ]
    },

    {
        id: "ch-3",
        title: "Puntuación",
        description: "Combina multiplicaciones y números negativos.",
        difficulty: "medio",
        topic: "operaciones",
        questions: [{
                text: "Un jugador obtiene 15 puntos durante 6 rondas. ¿Cuántos puntos obtiene en total?",
                answer: "90",
                explanation: "15 × 6 = 90.",
                hint: "Multiplica los puntos por ronda por el número de rondas."
            },
            {
                text: "Si recibe una penalización de 20 puntos, ¿con cuántos puntos termina?",
                answer: "70",
                explanation: "90 − 20 = 70.",
                hint: "Resta la penalización."
            }
        ]
    },

    {
        id: "ch-4",
        title: "La caja",
        description: "Calcula área de base y volumen.",
        difficulty: "medio",
        topic: "geometria",
        questions: [{
                text: "Una caja tiene una base de 5 m por 4 m. ¿Cuál es el área de la base?",
                answer: "20",
                explanation: "5 × 4 = 20 m².",
                hint: "Área del rectángulo = largo × ancho."
            },
            {
                text: "Si la caja tiene 3 m de altura, ¿cuál es su volumen?",
                answer: "60",
                explanation: "Volumen = área de la base × altura = 20 × 3 = 60 m³.",
                hint: "Multiplica el área de la base por la altura."
            }
        ]
    }
];

/* =========================================================
   LOGROS
   ========================================================= */

const achievements = [{
        id: "first",
        title: "Primer paso",
        icon: "🌟",
        description: "Responde correctamente tu primera pregunta.",
        condition: stats => stats.correctAnswers >= 1
    },
    {
        id: "five",
        title: "En marcha",
        icon: "🔥",
        description: "Consigue 5 respuestas correctas.",
        condition: stats => stats.correctAnswers >= 5
    },
    {
        id: "ten",
        title: "Diez aciertos",
        icon: "🏆",
        description: "Consigue 10 respuestas correctas.",
        condition: stats => stats.correctAnswers >= 10
    },
    {
        id: "streak5",
        title: "Racha de 5",
        icon: "⚡",
        description: "Consigue una racha de 5 respuestas correctas.",
        condition: stats => stats.bestStreak >= 5
    },
    {
        id: "perfect",
        title: "Precisión",
        icon: "🎯",
        description: "Alcanza al menos 90% de precisión con 10 ejercicios.",
        condition: stats =>
            stats.totalExercises >= 10 &&
            (stats.correctAnswers / stats.totalExercises) >= 0.9
    },
    {
        id: "explorer",
        title: "Explorador",
        icon: "🧭",
        description: "Practica al menos 5 temas diferentes.",
        condition: stats => Object.keys(stats.topicStats).length >= 5
    }
];

/* =========================================================
   ESTADO
   ========================================================= */

const defaultStats = {
    score: 0,
    streak: 0,
    bestStreak: 0,
    totalExercises: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
    topicStats: {},
    errorHistory: [],
    usedQuestions: {},
    lastActivity: null
};

let stats = loadStats();

let currentTopic = null;
let currentQuestion = null;
let currentDifficulty = null;
let challengeIndex = null;
let challengeQuestionIndex = 0;
let sessionExerciseCount = 0;
const SESSION_EXERCISE_LIMIT = 5;

/* =========================================================
   ELEMENTOS
   ========================================================= */

let headerScore;
let headerStreak;

let practiceCategory;
let questionTitle;
let difficultyLabel;
let questionText;
let answerArea;
let feedback;
let hintButton;
let hintText;
let checkButton;
let nextButton;

let recommendation;
let dailyBar;
let dailyDone;
let dailyMessage;
let weakTopics;

let totalExercises;
let correctAnswers;
let wrongAnswers;
let accuracy;
let skillsProgress;
let errorHistory;

let challengesGrid;
let achievementsGrid;

let levelModal;
let modalTopicTitle;
let modalTopicDescription;
let selectedTopicId = null;
let selectedDifficulty = null;

/* =========================================================
   CARGAR / GUARDAR ESTADÍSTICAS
   ========================================================= */

function loadStats() {
    try {
        const saved = localStorage.getItem(STORAGE_KEY);

        if (!saved) {
            return cloneDefaultStats();
        }

        const parsed = JSON.parse(saved);

        return {
            ...cloneDefaultStats(),
            ...parsed,
            topicStats: parsed.topicStats || {},
            errorHistory: Array.isArray(parsed.errorHistory) ?
                parsed.errorHistory : [],
            usedQuestions: parsed.usedQuestions || {}
        };
    } catch (error) {
        console.error("No se pudieron cargar las estadísticas:", error);
        return cloneDefaultStats();
    }
}

function cloneDefaultStats() {
    return JSON.parse(JSON.stringify(defaultStats));
}

function saveStats() {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(stats));
    } catch (error) {
        console.error("No se pudieron guardar las estadísticas:", error);
    }
}

/* =========================================================
   UTILIDADES
   ========================================================= */

function shuffle(array) {
    const copy = [...array];

    for (let i = copy.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [copy[i], copy[j]] = [copy[j], copy[i]];
    }

    return copy;
}

function normalizeAnswer(value) {
    return String(value)
        .trim()
        .toLowerCase()
        .replace(/\$/g, "")
        .replace(/%/g, "")
        .replace(/\s+/g, "")
        .replace(/,/g, ".");
}

function parseFraction(value) {
    const clean = normalizeAnswer(value);

    const match = clean.match(/^(-?\d+(?:\.\d+)?)\/(-?\d+(?:\.\d+)?)$/);

    if (!match) {
        return null;
    }

    const numerator = Number(match[1]);
    const denominator = Number(match[2]);

    if (denominator === 0) {
        return null;
    }

    return numerator / denominator;
}

function parseFlexibleNumber(value) {
    const raw = String(value).trim();
    const clean = normalizeAnswer(raw);

    const fraction = parseFraction(raw);

    if (fraction !== null) {
        return fraction;
    }

    if (clean === "") {
        return null;
    }

    const number = Number(clean);

    if (Number.isFinite(number)) {
        return number;
    }

    return null;
}

function numbersAreEqual(a, b) {
    const tolerance = 0.000001;
    return Math.abs(a - b) <= tolerance;
}

/* =========================================================
   COMPROBACIÓN DE RESPUESTAS
   ========================================================= */

function isCorrectAnswer(userAnswer, question) {
    const rawUser = String(userAnswer).trim();
    const normalizedUser = normalizeAnswer(rawUser);

    if (normalizedUser === "") {
        return false;
    }

    const acceptedAnswers = [
        question.answer,
        ...(question.accepted || [])
    ];

    for (const possibleAnswer of acceptedAnswers) {
        if (
            normalizedUser === normalizeAnswer(possibleAnswer)
        ) {
            return true;
        }
    }

    const userHasPercent = rawUser.includes("%");

    const correctAnswersList = acceptedAnswers.map(answer =>
        String(answer).trim()
    );

    const userNumber = parseFlexibleNumber(rawUser);

    if (userNumber === null) {
        return false;
    }

    for (const possibleAnswer of correctAnswersList) {
        const correctRaw = String(possibleAnswer).trim();
        const correctNumber = parseFlexibleNumber(correctRaw);

        if (correctNumber === null) {
            continue;
        }

        let adjustedUser = userNumber;
        let adjustedCorrect = correctNumber;

        if (userHasPercent) {
            adjustedUser = userNumber / 100;
        }

        if (correctRaw.includes("%")) {
            adjustedCorrect = correctNumber / 100;
        }

        if (numbersAreEqual(adjustedUser, adjustedCorrect)) {
            return true;
        }
    }

    return false;
}

/* =========================================================
   DIFICULTAD
   ========================================================= */

function getDifficultyLabel(difficulty) {
    const labels = {
        facil: "Fácil",
        medio: "Medio",
        dificil: "Difícil"
    };

    return labels[difficulty] || difficulty;
}

function getDifficultyPoints(difficulty) {
    const points = {
        facil: 5,
        medio: 8,
        dificil: 12
    };

    return points[difficulty] || 5;
}

function getTopicMastery(topicId) {
    const topicStats = stats.topicStats[topicId];

    if (!topicStats || topicStats.total === 0) {
        return 0;
    }

    return (topicStats.correct / topicStats.total) * 100;
}

function getRecommendedDifficulty(topicId) {
    const mastery = getTopicMastery(topicId);

    if (mastery < 40) {
        return "facil";
    }

    if (mastery < 75) {
        return "medio";
    }

    return "dificil";
}

/* =========================================================
   SELECCIÓN ALEATORIA DE PREGUNTAS
   ========================================================= */

function getAllTopicQuestions(topicId) {
    const topic = topics[topicId];

    if (!topic) {
        return [];
    }

    return [
        ...topic.questions.facil,
        ...topic.questions.medio,
        ...topic.questions.dificil
    ];
}

const dynamicTopics = ["operaciones", "fracciones", "signos", "potencias"];

function getRandomQuestion(topicId) {
    const topic = topics[topicId];

    if (!topic) {
        return null;
    }

    if (dynamicTopics.includes(topicId) && window.MateFacilQuestions) {
        try {
            const question = window.MateFacilQuestions.generateQuestion(topicId, selectedDifficulty);
            question.id = `dyn-${topicId}-${selectedDifficulty}-${Date.now()}-${Math.random()}`;
            // Normalizar el formato del generador (question → text, agregar hint)
            if (question.text === undefined && question.question !== undefined) {
                question.text = question.question;
            }
            if (question.hint === undefined) {
                question.hint = "";
            }
            return question;
        } catch (e) {
            console.warn("Error generando pregunta dinámica:", e);
        }
    }

    let pool = topic.questions[selectedDifficulty] || [];

    if (pool.length === 0) {
        pool = getAllTopicQuestions(topicId);
    }

    if (!stats.usedQuestions[topicId]) {
        stats.usedQuestions[topicId] = [];
    }

    let usedIds = stats.usedQuestions[topicId];

    let available = pool.filter(
        question => !usedIds.includes(question.id)
    );

    if (available.length === 0) {
        stats.usedQuestions[topicId] = [];
        available = pool;
    }

    const question =
        available[Math.floor(Math.random() * available.length)];

    return question || null;
}

/* =========================================================
   INICIALIZAR UNA PREGUNTA
   ========================================================= */

function startPractice(topicId, difficulty = null) {
    if (!topics[topicId]) {
        return;
    }

    currentTopic = topicId;
    selectedDifficulty = difficulty || getRecommendedDifficulty(topicId);
    challengeIndex = null;
    challengeQuestionIndex = 0;
    sessionExerciseCount = 0;

    showSection("practica");

    renderQuestion();
}

function renderQuestion() {
    if (!currentTopic) {
        return;
    }

    currentQuestion = getRandomQuestion(currentTopic);

    if (!currentQuestion) {
        return;
    }

    currentDifficulty = currentQuestion.difficulty || findQuestionDifficulty(
        currentTopic,
        currentQuestion.id
    );

    /*
       Registrar que esta pregunta ya fue utilizada.
    */
    if (!stats.usedQuestions[currentTopic]) {
        stats.usedQuestions[currentTopic] = [];
    }

    if (!stats.usedQuestions[currentTopic].includes(
            currentQuestion.id
        )) {
        stats.usedQuestions[currentTopic].push(
            currentQuestion.id
        );
    }

    saveStats();

    if (practiceCategory) {
        practiceCategory.textContent =
            topics[currentTopic].icon + " " +
            topics[currentTopic].name;
    }

    if (questionTitle) {
        questionTitle.textContent = "Resuelve el ejercicio";
    }

    if (difficultyLabel) {
        difficultyLabel.textContent =
            getDifficultyLabel(currentDifficulty);
        difficultyLabel.dataset.difficulty = currentDifficulty;
    }

    if (questionText) {
        questionText.textContent = currentQuestion.text;
    }

    if (answerArea) {
        answerArea.innerHTML = `
            <input
                type="text"
                id="answerInput"
                class="answer-input"
                autocomplete="off"
                placeholder="Escribe tu respuesta"
            >
        `;
    }

    if (feedback) {
        feedback.innerHTML = "";
        feedback.className = "feedback";
    }

    if (hintText) {
        hintText.textContent = "";
        hintText.style.display = "none";
    }

    if (hintButton) {
        hintButton.style.display = "inline-flex";
    }

    if (checkButton) {
        checkButton.style.display = "inline-flex";
        checkButton.disabled = false;
    }

    /*
       IMPORTANTE:
       Ocultamos Siguiente solamente al cargar una nueva pregunta.
    */
    if (nextButton) {
        nextButton.style.display = "none";
        nextButton.disabled = true;
    }

    focusAnswerInput();
}

function findQuestionDifficulty(topicId, questionId) {
    const topic = topics[topicId];

    if (!topic) {
        return "facil";
    }

    for (const difficulty of ["facil", "medio", "dificil"]) {
        const found = topic.questions[difficulty].some(
            question => question.id === questionId
        );

        if (found) {
            return difficulty;
        }
    }

    return "facil";
}

function focusAnswerInput() {
    setTimeout(() => {
        const input = document.getElementById("answerInput");

        if (input) {
            input.focus();
        }
    }, 50);
}

/* =========================================================
   COMPROBAR RESPUESTA
   ========================================================= */

function checkAnswer() {
    if (!currentQuestion || !currentTopic) {
        return;
    }

    const input = document.getElementById("answerInput");

    if (!input) {
        return;
    }

    const userAnswer = input.value.trim();

    if (userAnswer === "") {
        showFeedback(
            "✏️ Escribe una respuesta antes de comprobar.",
            "warning"
        );

        input.focus();
        return;
    }

    stats.totalExercises++;

    const today = new Date().toISOString().slice(0, 10);

    if (!stats.dailyProgress) {
        stats.dailyProgress = {};
    }

    if (stats.dailyProgress.date !== today) {
        stats.dailyProgress = {
            date: today,
            count: 0
        };
    }

    stats.dailyProgress.count++;

    ensureTopicStats(currentTopic);

    stats.topicStats[currentTopic].total++;

    const correct = isCorrectAnswer(
        userAnswer,
        currentQuestion
    );

    if (correct) {
        handleCorrect();
    } else {
        handleIncorrect(userAnswer);
    }

    saveStats();

    updateHeader();
    updateDashboard();
    updateProgress();
    renderAchievements();
}

/* =========================================================
   RESPUESTA CORRECTA
   ========================================================= */

function handleCorrect() {
    const points = getDifficultyPoints(currentDifficulty);

    stats.correctAnswers++;
    stats.topicStats[currentTopic].correct++;

    stats.score += points;
    stats.streak++;

    if (stats.streak > stats.bestStreak) {
        stats.bestStreak = stats.streak;
    }

    stats.lastActivity = new Date().toISOString();

    let learnedFromError = false;

    const errorIndex = stats.errorHistory.findIndex(
        error =>
        error.topic === currentTopic &&
        error.questionId === currentQuestion.id &&
        !error.resolved
    );

    if (errorIndex !== -1) {
        stats.errorHistory[errorIndex].resolved = true;
        stats.errorHistory[errorIndex].resolvedAt =
            new Date().toISOString();

        learnedFromError = true;
    }

    sessionExerciseCount++;

    let message = `
        <div class="feedback-success">
            <strong>🎉 ¡Correcto!</strong>
            <p>${currentQuestion.explanation}</p>
            <p><strong>Has ganado ${points} puntos.</strong></p>
            ${
                learnedFromError
                    ? "<p>🧠 ¡Aprendiste de tu error anterior!</p>"
                    : ""
            }
        </div>
    `;

    if (sessionExerciseCount === SESSION_EXERCISE_LIMIT) {
        message += `
            <div class="session-complete">
                <p>📊 <strong>Has completado ${SESSION_EXERCISE_LIMIT} ejercicios en esta sesión.</strong></p>
                <p>¿Quieres continuar practicando?</p>
                <div class="session-actions">
                    <button id="continueSessionBtn" class="primary-btn">Continuar</button>
                    <button id="endSessionBtn" class="secondary-btn">Terminar sesión</button>
                </div>
            </div>
        `;
    }

    if (feedback) {
        feedback.innerHTML = message;
        feedback.className = "feedback correct";
    }

    if (hintButton) {
        hintButton.style.display = "none";
    }

    if (hintText) {
        hintText.style.display = "none";
    }

    if (checkButton) {
        checkButton.style.display = "none";
    }

    if (nextButton) {
        nextButton.style.display = "inline-flex";
        nextButton.disabled = false;
    }

    disableAnswerInput();

    if (sessionExerciseCount >= SESSION_EXERCISE_LIMIT) {
        setTimeout(() => {
            const continueBtn = document.getElementById("continueSessionBtn");
            const endBtn = document.getElementById("endSessionBtn");

            if (continueBtn) {
                continueBtn.addEventListener("click", () => {
                    renderQuestion();
                });
            }

            if (endBtn) {
                endBtn.addEventListener("click", () => {
                    showSection("inicio");
                });
            }
        }, 100);
    }
}

/* =========================================================
   RESPUESTA INCORRECTA
   ========================================================= */

function handleIncorrect(userAnswer) {
    stats.wrongAnswers++;
    stats.topicStats[currentTopic].wrong++;
    stats.streak = 0;

    stats.lastActivity = new Date().toISOString();

    const existingError = stats.errorHistory.find(
        error =>
        error.topic === currentTopic &&
        error.questionId === currentQuestion.id &&
        !error.resolved
    );

    if (existingError) {
        existingError.attempts++;
        existingError.lastWrongAt =
            new Date().toISOString();
        existingError.lastAnswer = userAnswer;
    } else {
        stats.errorHistory.unshift({
            topic: currentTopic,
            questionId: currentQuestion.id,
            question: currentQuestion.text,
            userAnswer,
            correctAnswer: currentQuestion.answer,
            attempts: 1,
            resolved: false,
            createdAt: new Date().toISOString(),
            lastWrongAt: new Date().toISOString()
        });
    }

    /*
       No mostramos todavía "Siguiente".
       El alumno puede intentar nuevamente.
    */
    if (feedback) {
        feedback.innerHTML = `
            <div class="feedback-error">
                <strong>❌ Todavía no.</strong>
                <p>Revisa el procedimiento e inténtalo nuevamente.</p>
                <p>💡 Puedes utilizar la pista si la necesitas.</p>
            </div>
        `;

        feedback.className = "feedback incorrect";
    }

    if (nextButton) {
        nextButton.style.display = "none";
        nextButton.disabled = true;
    }

    const input = document.getElementById("answerInput");

    if (input) {
        input.select();
        input.focus();
    }
}

/* =========================================================
   PISTA
   ========================================================= */

function showHint() {
    if (!currentQuestion || !hintText) {
        return;
    }

    if (currentQuestion.hint) {
        hintText.textContent = "💡 Pista: " + currentQuestion.hint;
    } else {
        hintText.textContent = "Sin pista disponible para este ejercicio.";
    }

    hintText.style.display = "block";
}

/* =========================================================
   SIGUIENTE PREGUNTA
   ========================================================= */

function nextQuestion() {
    if (challengeIndex !== null) {
        nextChallenge();
        return;
    }

    renderQuestion();
}

/* =========================================================
   INPUT
   ========================================================= */

function disableAnswerInput() {
    const input = document.getElementById("answerInput");

    if (input) {
        input.disabled = true;
    }
}

/* =========================================================
   FEEDBACK
   ========================================================= */

function showFeedback(message, type = "") {
    if (!feedback) {
        return;
    }

    feedback.innerHTML = message;
    feedback.className = "feedback " + type;
}

/* =========================================================
   ESTADÍSTICAS POR TEMA
   ========================================================= */

function ensureTopicStats(topicId) {
    if (!stats.topicStats[topicId]) {
        stats.topicStats[topicId] = {
            total: 0,
            correct: 0,
            wrong: 0
        };
    }
}

/* =========================================================
   DASHBOARD
   ========================================================= */

function updateDashboard() {
    updateRecommendation();
    updateDailyProgress();
    updateWeakTopics();
}

function updateRecommendation() {
    if (!recommendation) {
        return;
    }

    const topicIds = Object.keys(topics);

    let recommendedTopic = topicIds[0];
    let lowestMastery = 101;

    for (const topicId of topicIds) {
        const topicStats = stats.topicStats[topicId];

        if (!topicStats || topicStats.total === 0) {
            recommendedTopic = topicId;
            break;
        }

        const mastery = getTopicMastery(topicId);

        if (mastery < lowestMastery) {
            lowestMastery = mastery;
            recommendedTopic = topicId;
        }
    }

    const topic = topics[recommendedTopic];

    if (!topic) {
        return;
    }

    const difficulty =
        getRecommendedDifficulty(recommendedTopic);

    recommendation.innerHTML = `
        <div class="recommendation-card">
            <span class="recommendation-icon">
                ${topic.icon}
            </span>

            <div>
                <strong>Te recomendamos practicar:</strong>
                <h3>${topic.name}</h3>
                <p>${topic.description}</p>
                <p>
                    Nivel sugerido:
                    <strong>${getDifficultyLabel(difficulty)}</strong>
                </p>
            </div>

            <button
                class="primary-btn"
                type="button"
                onclick="startRecommended()"
            >
                Empezar
            </button>
        </div>
    `;
}

function startRecommended() {
    const topicIds = Object.keys(topics);

    let recommendedTopic = topicIds[0];
    let lowestMastery = 101;

    for (const topicId of topicIds) {
        const topicStats = stats.topicStats[topicId];

        if (!topicStats || topicStats.total === 0) {
            recommendedTopic = topicId;
            break;
        }

        const mastery = getTopicMastery(topicId);

        if (mastery < lowestMastery) {
            lowestMastery = mastery;
            recommendedTopic = topicId;
        }
    }

    startPractice(recommendedTopic);
}

function updateDailyProgress() {
    if (!dailyBar || !dailyDone || !dailyMessage) {
        return;
    }

    const goal = 10;
    const doneToday = getTodayExerciseCount();

    const percentage = Math.min(
        100,
        (doneToday / goal) * 100
    );

    dailyBar.style.width = percentage + "%";
    dailyDone.textContent = `${doneToday} / ${goal}`;

    if (doneToday >= goal) {
        dailyMessage.textContent =
            "🎉 ¡Meta diaria completada!";
    } else {
        dailyMessage.textContent =
            `Te faltan ${goal - doneToday} ejercicios para completar tu meta diaria.`;
    }
}

function getTodayExerciseCount() {
    const today = new Date().toISOString().slice(0, 10);

    if (!stats.dailyProgress) {
        stats.dailyProgress = {};
    }

    if (stats.dailyProgress.date !== today) {
        stats.dailyProgress = {
            date: today,
            count: 0
        };
    }

    return stats.dailyProgress.count;
}

function updateWeakTopics() {
    if (!weakTopics) {
        return;
    }

    const topicIds = Object.keys(topics);

    const weak = topicIds
        .map(topicId => {
            const topicStats = stats.topicStats[topicId];

            if (!topicStats || topicStats.total === 0) {
                return {
                    topicId,
                    mastery: 0
                };
            }

            return {
                topicId,
                mastery: getTopicMastery(topicId)
            };
        })
        .sort((a, b) => a.mastery - b.mastery)
        .slice(0, 3);

    weakTopics.innerHTML = weak.map(item => {
        const topic = topics[item.topicId];

        return `
            <div class="weak-topic">
                <span>${topic.icon}</span>
                <div>
                    <strong>${topic.name}</strong>
                    <small>${Math.round(item.mastery)}% de precisión</small>
                </div>
                <button
                    type="button"
                    class="secondary-btn"
                    onclick="startPractice('${item.topicId}')"
                >
                    Practicar
                </button>
            </div>
        `;
    }).join("");
}

/* =========================================================
   PROGRESO
   ========================================================= */

function updateProgress() {
    if (totalExercises) {
        totalExercises.textContent =
            stats.totalExercises;
    }

    if (correctAnswers) {
        correctAnswers.textContent =
            stats.correctAnswers;
    }

    if (wrongAnswers) {
        wrongAnswers.textContent =
            stats.wrongAnswers;
    }

    if (accuracy) {
        const value =
            stats.totalExercises > 0 ?
            (stats.correctAnswers /
                stats.totalExercises) * 100 :
            0;

        accuracy.textContent =
            Math.round(value) + "%";
    }

    renderSkillsProgress();
    renderErrorHistory();
}

function renderSkillsProgress() {
    if (!skillsProgress) {
        return;
    }

    skillsProgress.innerHTML =
        Object.keys(topics).map(topicId => {
            const topic = topics[topicId];
            const mastery = getTopicMastery(topicId);

            return `
                <div class="skill-row">
                    <div class="skill-header">
                        <span>
                            ${topic.icon} ${topic.name}
                        </span>
                        <strong>
                            ${Math.round(mastery)}%
                        </strong>
                    </div>

                    <div class="progress-track">
                        <div
                            class="progress-fill"
                            style="width:${mastery}%"
                        ></div>
                    </div>
                </div>
            `;
        }).join("");
}

function renderErrorHistory() {
    if (!errorHistory) {
        return;
    }

    if (stats.errorHistory.length === 0) {
        errorHistory.innerHTML = `
            <div class="empty-state">
                🎉 Todavía no tienes errores registrados.
            </div>
        `;
        return;
    }

    errorHistory.innerHTML =
        stats.errorHistory
        .slice(0, 10)
        .map(error => {
            const topic = topics[error.topic];

            return `
                    <div class="error-item ${
                        error.resolved
                            ? "resolved"
                            : "unresolved"
                    }">
                        <div class="error-item-header">
                            <strong>
                                ${topic ? topic.icon : "📘"}
                                ${topic ? topic.name : "Tema"}
                            </strong>

                            <span>
                                ${
                                    error.resolved
                                        ? "✅ Aprendido"
                                        : "🔄 Pendiente"
                                }
                            </span>
                        </div>

                        <p>
                            ${error.question}
                        </p>

                        <small>
                            Tu respuesta:
                            <strong>${error.userAnswer}</strong>
                            · Correcta:
                            <strong>${error.correctAnswer}</strong>
                        </small>
                    </div>
                `;
        })
        .join("");
}

/* =========================================================
   TEMAS
   ========================================================= */

function renderTopicButtons() {
    const container =
        document.querySelector(".topics-grid");

    if (!container) {
        return;
    }

    container.innerHTML =
        Object.keys(topics)
        .map(topicId => {
            const topic = topics[topicId];
            const mastery = getTopicMastery(topicId);

            return `
                    <button
                        type="button"
                        class="topic-card"
                        data-topic="${topicId}"
                    >
                        <span class="topic-icon">
                            ${topic.icon}
                        </span>

                        <strong>
                            ${topic.name}
                        </strong>

                        <span>
                            ${topic.description}
                        </span>

                        <small>
                            Dominio:
                            ${Math.round(mastery)}%
                        </small>
                    </button>
                `;
        })
        .join("");

    container
        .querySelectorAll("[data-topic]")
        .forEach(button => {
            button.addEventListener("click", () => {
                showLevelModal(button.dataset.topic);
            });
        });
}

function showLevelModal(topicId) {
    const topic = topics[topicId];

    if (!topic || !levelModal) {
        return;
    }

    selectedTopicId = topicId;

    if (modalTopicTitle) {
        modalTopicTitle.textContent = topic.icon + " " + topic.name;
    }

    if (modalTopicDescription) {
        modalTopicDescription.textContent = topic.description;
    }

    levelModal.style.display = "flex";
}

function hideLevelModal() {
    if (levelModal) {
        levelModal.style.display = "none";
    }
    selectedTopicId = null;
}

function setupLevelModal() {
    if (!levelModal) return;

    const levelBtns = levelModal.querySelectorAll(".level-btn");

    levelBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            const level = btn.dataset.level;
            if (selectedTopicId && level) {
                startPractice(selectedTopicId, level);
                hideLevelModal();
            }
        });
    });

    const cancelBtn = document.getElementById("cancelLevelBtn");
    if (cancelBtn) {
        cancelBtn.addEventListener("click", hideLevelModal);
    }

    levelModal.addEventListener("click", (e) => {
        if (e.target === levelModal) {
            hideLevelModal();
        }
    });
}

/* =========================================================
   DESAFÍOS
   ========================================================= */

function renderChallenges() {
    if (!challengesGrid) {
        return;
    }

    challengesGrid.innerHTML =
        challenges.map((challenge, index) => {
            return `
                <article class="challenge-card">
                    <div class="challenge-icon">
                        🧩
                    </div>

                    <h3>
                        ${challenge.title}
                    </h3>

                    <p>
                        ${challenge.description}
                    </p>

                    <span class="difficulty-badge">
                        ${getDifficultyLabel(challenge.difficulty)}
                    </span>

                    <button
                        type="button"
                        class="primary-btn"
                        onclick="startChallenge(${index})"
                    >
                        Comenzar desafío
                    </button>
                </article>
            `;
        }).join("");
}

function startChallenge(index) {
    if (
        index < 0 ||
        index >= challenges.length
    ) {
        return;
    }

    challengeIndex = index;
    challengeQuestionIndex = 0;

    const challenge = challenges[index];

    currentTopic = challenge.topic;
    currentQuestion = null;

    showSection("practica");

    renderChallengeQuestion();
}

function renderChallengeQuestion() {
    if (
        challengeIndex === null ||
        !challenges[challengeIndex]
    ) {
        return;
    }

    const challenge =
        challenges[challengeIndex];

    const question =
        challenge.questions[challengeQuestionIndex];

    if (!question) {
        return;
    }

    currentQuestion = question;
    currentDifficulty = challenge.difficulty;

    if (practiceCategory) {
        practiceCategory.textContent =
            "🧩 " + challenge.title;
    }

    if (questionTitle) {
        questionTitle.textContent =
            `Desafío · Pregunta ${
                challengeQuestionIndex + 1
            } de ${challenge.questions.length}`;
    }

    if (difficultyLabel) {
        difficultyLabel.textContent =
            getDifficultyLabel(challenge.difficulty);
        difficultyLabel.dataset.difficulty =
            challenge.difficulty;
    }

    if (questionText) {
        questionText.textContent =
            question.text;
    }

    if (answerArea) {
        answerArea.innerHTML = `
            <input
                type="text"
                id="answerInput"
                class="answer-input"
                autocomplete="off"
                placeholder="Escribe tu respuesta"
            >
        `;
    }

    if (feedback) {
        feedback.innerHTML = "";
        feedback.className = "feedback";
    }

    if (hintText) {
        hintText.textContent = "";
        hintText.style.display = "none";
    }

    if (hintButton) {
        hintButton.style.display = "inline-flex";
    }

    if (checkButton) {
        checkButton.style.display = "inline-flex";
        checkButton.disabled = false;
    }

    if (nextButton) {
        nextButton.style.display = "none";
        nextButton.disabled = true;
    }

    focusAnswerInput();
}

function checkChallengeAnswer() {
    if (
        challengeIndex === null ||
        !challenges[challengeIndex]
    ) {
        return;
    }

    const input =
        document.getElementById("answerInput");

    if (!input) {
        return;
    }

    const userAnswer = input.value.trim();

    if (userAnswer === "") {
        showFeedback(
            "✏️ Escribe una respuesta antes de comprobar.",
            "warning"
        );

        input.focus();
        return;
    }

    const challenge =
        challenges[challengeIndex];

    const question =
        challenge.questions[challengeQuestionIndex];

    stats.totalExercises++;

    ensureTopicStats(challenge.topic);

    stats.topicStats[challenge.topic].total++;

    const correct =
        isCorrectAnswer(userAnswer, question);

    if (correct) {
        stats.correctAnswers++;
        stats.topicStats[challenge.topic].correct++;

        const points =
            getDifficultyPoints(challenge.difficulty);

        stats.score += points;
        stats.streak++;

        if (stats.streak > stats.bestStreak) {
            stats.bestStreak = stats.streak;
        }

        if (feedback) {
            feedback.innerHTML = `
                <div class="feedback-success">
                    <strong>🎉 ¡Correcto!</strong>
                    <p>${question.explanation}</p>
                    <p>
                        <strong>
                            Has ganado ${points} puntos.
                        </strong>
                    </p>
                </div>
            `;

            feedback.className =
                "feedback correct";
        }

        if (hintButton) {
            hintButton.style.display = "none";
        }

        if (hintText) {
            hintText.style.display = "none";
        }

        if (checkButton) {
            checkButton.style.display = "none";
        }

        /*
           CORRECCIÓN:
           El botón debe aparecer explícitamente.
        */
        if (nextButton) {
            nextButton.style.display = "inline-flex";
            nextButton.disabled = false;
        }

        disableAnswerInput();
    } else {
        stats.wrongAnswers++;
        stats.topicStats[challenge.topic].wrong++;
        stats.streak = 0;

        if (feedback) {
            feedback.innerHTML = `
                <div class="feedback-error">
                    <strong>❌ Todavía no.</strong>
                    <p>
                        Revisa el procedimiento e
                        inténtalo nuevamente.
                    </p>
                </div>
            `;

            feedback.className =
                "feedback incorrect";
        }

        if (nextButton) {
            nextButton.style.display = "none";
            nextButton.disabled = true;
        }

        input.select();
        input.focus();
    }

    saveStats();

    updateHeader();
    updateDashboard();
    updateProgress();
    renderAchievements();
}

function nextChallenge() {
    if (
        challengeIndex === null ||
        !challenges[challengeIndex]
    ) {
        return;
    }

    const challenge =
        challenges[challengeIndex];

    challengeQuestionIndex++;

    if (
        challengeQuestionIndex >=
        challenge.questions.length
    ) {
        finishChallenge();
        return;
    }

    renderChallengeQuestion();
}

function finishChallenge() {
    const challenge =
        challenges[challengeIndex];

    if (feedback) {
        feedback.innerHTML = `
            <div class="feedback-success">
                <strong>🏆 ¡Desafío completado!</strong>
                <p>
                    Terminaste correctamente
                    "${challenge.title}".
                </p>
            </div>
        `;

        feedback.className =
            "feedback correct";
    }

    if (hintButton) {
        hintButton.style.display = "none";
    }

    if (checkButton) {
        checkButton.style.display = "none";
    }

    if (nextButton) {
        nextButton.style.display = "none";
    }

    if (questionText) {
        questionText.textContent =
            "¡Excelente trabajo! Puedes elegir otro desafío o tema.";
    }

    if (answerArea) {
        answerArea.innerHTML = "";
    }

    challengeIndex = null;
    currentQuestion = null;
}

/* =========================================================
   LOGROS
   ========================================================= */

function renderAchievements() {
    if (!achievementsGrid) {
        return;
    }

    achievementsGrid.innerHTML =
        achievements.map(achievement => {
            const unlocked =
                achievement.condition(stats);

            return `
                <article class="achievement-card ${
                    unlocked ? "unlocked" : "locked"
                }">
                    <div class="achievement-icon">
                        ${achievement.icon}
                    </div>

                    <h3>
                        ${achievement.title}
                    </h3>

                    <p>
                        ${achievement.description}
                    </p>

                    <span>
                        ${
                            unlocked
                                ? "🏆 Desbloqueado"
                                : "🔒 Bloqueado"
                        }
                    </span>
                </article>
            `;
        }).join("");
}

/* =========================================================
   HEADER
   ========================================================= */

function updateHeader() {
    if (headerScore) {
        headerScore.textContent =
            stats.score;
    }

    if (headerStreak) {
        headerStreak.textContent =
            stats.streak;
    }
}

/* =========================================================
   NAVEGACIÓN
   ========================================================= */

function showSection(sectionId) {
    document
        .querySelectorAll(".section")
        .forEach(section => {
            section.classList.toggle(
                "active",
                section.id === sectionId
            );
        });

    document
        .querySelectorAll(".menu-btn")
        .forEach(button => {
            button.classList.toggle(
                "active",
                button.dataset.section === sectionId
            );
        });

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

/* =========================================================
   BOTONES PRINCIPALES
   ========================================================= */

function setupMainButtons() {
    document
        .querySelectorAll(".menu-btn")
        .forEach(button => {
            button.addEventListener("click", () => {
                const section =
                    button.dataset.section;

                if (section) {
                    showSection(section);
                }
            });
        });

    const heroPracticeBtn = document.getElementById("heroPracticeBtn");
    if (heroPracticeBtn) {
        heroPracticeBtn.addEventListener("click", () => {
            showSection("practica");
        });
    }

    const recommendedBtn = document.getElementById("recommendedBtn");
    if (recommendedBtn) {
        recommendedBtn.addEventListener("click", () => {
            startRecommended();
        });
    }

    if (hintButton) {
        hintButton.addEventListener(
            "click",
            showHint
        );
    }

    if (checkButton) {
        checkButton.addEventListener(
            "click",
            handleCheckButton
        );
    }

    if (nextButton) {
        nextButton.addEventListener(
            "click",
            handleNextButton
        );
    }

    /*
       Enter = comprobar respuesta.
    */
    document.addEventListener("keydown", event => {
        if (
            event.key !== "Enter" ||
            event.target.id !== "answerInput"
        ) {
            return;
        }

        if (
            nextButton &&
            nextButton.style.display !== "none" &&
            !nextButton.disabled
        ) {
            nextQuestion();
            return;
        }

        if (
            checkButton &&
            checkButton.style.display !== "none" &&
            !checkButton.disabled
        ) {
            handleCheckButton();
        }
    });
}

function handleCheckButton() {
    if (challengeIndex !== null) {
        checkChallengeAnswer();
    } else {
        checkAnswer();
    }
}

function handleNextButton() {
    if (challengeIndex !== null) {
        nextChallenge();
    } else {
        nextQuestion();
    }
}

/* =========================================================
   INICIALIZACIÓN
   ========================================================= */

function initializeApp() {
    /*
       Obtener elementos después de cargar el DOM.
    */

    headerScore =
        document.getElementById("headerScore");

    headerStreak =
        document.getElementById("headerStreak");

    practiceCategory =
        document.getElementById("practiceCategory");

    questionTitle =
        document.getElementById("questionTitle");

    difficultyLabel =
        document.getElementById("difficultyLabel");

    questionText =
        document.getElementById("questionText");

    answerArea =
        document.getElementById("answerArea");

    feedback =
        document.getElementById("feedback");

    hintButton =
        document.getElementById("hintBtn");

    hintText =
        document.getElementById("hintText");

    checkButton =
        document.getElementById("checkBtn");

    nextButton =
        document.getElementById("nextBtn");

    recommendation =
        document.getElementById("recommendation");

    dailyBar =
        document.getElementById("dailyBar");

    dailyDone =
        document.getElementById("dailyDone");

    dailyMessage =
        document.getElementById("dailyMessage");

    weakTopics =
        document.getElementById("weakTopics");

    totalExercises =
        document.getElementById("totalExercises");

    correctAnswers =
        document.getElementById("correctAnswers");

    wrongAnswers =
        document.getElementById("wrongAnswers");

    accuracy =
        document.getElementById("accuracy");

    skillsProgress =
        document.getElementById("skillsProgress");

    errorHistory =
        document.getElementById("errorHistory");

    challengesGrid =
        document.getElementById("challengesGrid");

    achievementsGrid =
        document.getElementById("achievementsGrid");

    levelModal = document.getElementById("levelModal");
    modalTopicTitle = document.getElementById("modalTopicTitle");
    modalTopicDescription = document.getElementById("modalTopicDescription");

    setupMainButtons();
    setupLevelModal();

    renderTopicButtons();
    renderChallenges();

    updateHeader();
    updateDashboard();
    updateProgress();
    renderAchievements();

    /*
       Aseguramos el estado inicial del botón.
    */
    if (nextButton) {
        nextButton.style.display = "none";
        nextButton.disabled = true;
    }

    /*
       Mostrar inicio.
    */
    showSection("inicio");
}

/* =========================================================
   FUNCIONES GLOBALES
   ========================================================= */

window.startRecommended = startRecommended;
window.showHint = showHint;
window.checkAnswer = checkAnswer;
window.nextQuestion = nextQuestion;
window.startPractice = startPractice;
window.startChallenge = startChallenge;
window.checkChallengeAnswer = checkChallengeAnswer;
window.nextChallenge = nextChallenge;
window.showSection = showSection;

/* =========================================================
   HERRAMIENTAS DE DESARROLLO
   ========================================================= */

window.mateFacil = {
    reset: function() {
        const confirmed = confirm(
            "¿Seguro que quieres borrar todo tu progreso?"
        );

        if (!confirmed) {
            return;
        }

        localStorage.removeItem(STORAGE_KEY);
        location.reload();
    },

    stats: function() {
        console.table(stats);
        return stats;
    },

    current: function() {
        return {
            topic: currentTopic,
            question: currentQuestion,
            difficulty: currentDifficulty,
            challenge: challengeIndex
        };
    }
};

/* =========================================================
   ARRANQUE
   ========================================================= */

if (document.readyState === "loading") {
    document.addEventListener(
        "DOMContentLoaded",
        initializeApp
    );
} else {
    initializeApp();
}