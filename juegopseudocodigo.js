/* =====================================================
   PREGUNTAS DEL JUEGO
===================================================== */

const preguntas = [

    {
        nivel: 1,

        pregunta:
            "¿Qué pseudoclase se activa cuando pasas el mouse sobre un elemento?",

        codigo:
            "button:hover { background: blue; }",

        respuestas: [
            ":hover",
            ":active",
            ":focus",
            ":checked"
        ],

        correcta: 0,

        explicacion:
            ":hover se utiliza cuando el cursor del mouse está colocado sobre un elemento.",

        ejemplo:
            "button:hover { color: white; }"
    },


    {
        nivel: 1,

        pregunta:
            "¿Qué pseudoclase funciona mientras mantienes presionado un botón?",

        codigo:
            "button:active { transform: scale(.95); }",

        respuestas: [
            ":focus",
            ":active",
            ":hover",
            ":target"
        ],

        correcta: 1,

        explicacion:
            ":active se aplica durante la acción de presionar un elemento.",

        ejemplo:
            "button:active { transform: scale(.95); }"
    },


    {
        nivel: 1,

        pregunta:
            "¿Qué pseudoclase indica que un input tiene el foco?",

        codigo:
            "input:focus { border: 2px solid blue; }",

        respuestas: [
            ":checked",
            ":focus",
            ":hover",
            ":lang()"
        ],

        correcta: 1,

        explicacion:
            ":focus se utiliza cuando un elemento recibe el foco.",

        ejemplo:
            "input:focus { border-color: blue; }"
    },


    {
        nivel: 2,

        pregunta:
            "¿Qué pseudoclase selecciona un contenedor cuando uno de sus elementos internos tiene foco?",

        codigo:
            ".caja:focus-within { background: yellow; }",

        respuestas: [
            ":focus-within",
            ":focus",
            ":active",
            ":target"
        ],

        correcta: 0,

        explicacion:
            ":focus-within selecciona un elemento cuando él mismo o uno de sus descendientes tiene el foco.",

        ejemplo:
            ".formulario:focus-within { box-shadow: 0 0 20px blue; }"
    },


    {
        nivel: 2,

        pregunta:
            "¿Qué pseudoclase sirve para mostrar el foco de forma visible, especialmente al navegar con teclado?",

        codigo:
            "button:focus-visible { outline: 3px solid orange; }",

        respuestas: [
            ":focus-visible",
            ":focus-within",
            ":visible",
            ":keyboard"
        ],

        correcta: 0,

        explicacion:
            ":focus-visible permite mostrar un indicador de foco cuando resulta apropiado, especialmente durante la navegación con teclado.",

        ejemplo:
            "button:focus-visible { outline: 3px solid orange; }"
    },


    {
        nivel: 2,

        pregunta:
            "¿Qué pseudoclase selecciona un checkbox o radio cuando está seleccionado?",

        codigo:
            "input:checked { accent-color: green; }",

        respuestas: [
            ":selected",
            ":check",
            ":checked",
            ":active"
        ],

        correcta: 2,

        explicacion:
            ":checked selecciona elementos como checkbox y radio cuando están marcados.",

        ejemplo:
            "input:checked + span { color: green; }"
    },


    {
        nivel: 2,

        pregunta:
            "¿Qué pseudoclase se utiliza con un elemento cuyo id coincide con el fragmento de la URL?",

        codigo:
            "section:target { background: purple; }",

        respuestas: [
            ":focus",
            ":target",
            ":link",
            ":visited"
        ],

        correcta: 1,

        explicacion:
            ":target selecciona el elemento cuyo id coincide con el fragmento de la URL.",

        ejemplo:
            "#mensaje:target { display: block; }"
    },


    {
        nivel: 3,

        pregunta:
            "¿Qué pseudoclase permite aplicar estilos dependiendo del idioma?",

        codigo:
            "p:lang(en) { color: blue; }",

        respuestas: [
            ":language()",
            ":lang()",
            ":idioma()",
            ":locale()"
        ],

        correcta: 1,

        explicacion:
            ":lang() permite aplicar estilos dependiendo del idioma declarado en HTML.",

        ejemplo:
            "p:lang(en) { color: blue; }"
    },


    /* =================================================
       HIJOS
    ================================================= */

    {
        nivel: 3,

        pregunta:
            "¿Cuál de estos elementos es el PRIMER HIJO?",

        codigo:
            ".lista .hijo:first-child { ... }",

        respuestas: [
            "HIJO 1",
            "HIJO 2",
            "HIJO 3",
            "HIJO 4"
        ],

        correcta: 0,

        explicacion:
            ":first-child selecciona al elemento que ocupa la primera posición entre sus hermanos.",

        ejemplo:
            ".hijo:first-child { color: red; }"
    },


    {
        nivel: 3,

        pregunta:
            "¿Cuál de estos elementos es el SEGUNDO HIJO?",

        codigo:
            ".lista .hijo:nth-child(2) { ... }",

        respuestas: [
            "HIJO 1",
            "HIJO 2",
            "HIJO 3",
            "HIJO 4"
        ],

        correcta: 1,

        explicacion:
            ":nth-child(2) selecciona el elemento que ocupa la segunda posición.",

        ejemplo:
            ".hijo:nth-child(2) { color: orange; }"
    },


    {
        nivel: 3,

        pregunta:
            "¿Cuál de estos elementos es el TERCER HIJO?",

        codigo:
            ".lista .hijo:nth-child(3) { ... }",

        respuestas: [
            "HIJO 1",
            "HIJO 2",
            "HIJO 3",
            "HIJO 4"
        ],

        correcta: 2,

        explicacion:
            ":nth-child(3) selecciona el tercer elemento hijo.",

        ejemplo:
            ".hijo:nth-child(3) { color: green; }"
    },


    {
        nivel: 3,

        pregunta:
            "¿Cuál de estos elementos es el ÚLTIMO HIJO?",

        codigo:
            ".lista .hijo:last-child { ... }",

        respuestas: [
            "HIJO 1",
            "HIJO 2",
            "HIJO 3",
            "HIJO 4"
        ],

        correcta: 3,

        explicacion:
            ":last-child selecciona el último elemento entre sus hermanos.",

        ejemplo:
            ".hijo:last-child { color: purple; }"
    },


    {
        nivel: 4,

        pregunta:
            "¿Qué pseudoclase selecciona los hijos que están en posiciones IMPARES?",

        codigo:
            ".hijo:nth-child(odd) { ... }",

        respuestas: [
            ":nth-child(even)",
            ":odd",
            ":nth-child(odd)",
            ":first-child"
        ],

        correcta: 2,

        explicacion:
            ":nth-child(odd) selecciona las posiciones impares: 1, 3, 5, 7, etc.",

        ejemplo:
            ".hijo:nth-child(odd) { background: red; }"
    },


    {
        nivel: 4,

        pregunta:
            "¿Qué pseudoclase selecciona los hijos que están en posiciones PARES?",

        codigo:
            ".hijo:nth-child(even) { ... }",

        respuestas: [
            ":nth-child(even)",
            ":even",
            ":last-child",
            ":nth-child(odd)"
        ],

        correcta: 0,

        explicacion:
            ":nth-child(even) selecciona las posiciones pares: 2, 4, 6, 8, etc.",

        ejemplo:
            ".hijo:nth-child(even) { background: blue; }"
    }

];


/* =====================================================
   VARIABLES DEL JUEGO
===================================================== */

let preguntaActual = 0;

let puntos = 0;

let vidas = 3;

let respondida = false;

let record =
    Number(
        localStorage.getItem(
            "recordPseudoclases"
        )
    ) || 0;


/* =====================================================
   ELEMENTOS HTML
===================================================== */

const preguntaElemento =
    document.getElementById(
        "pregunta"
    );

const codigoElemento =
    document.getElementById(
        "codigo"
    );

const respuestasElemento =
    document.getElementById(
        "respuestas"
    );

const explicacionElemento =
    document.getElementById(
        "explicacion"
    );

const resultadoElemento =
    document.getElementById(
        "resultado"
    );

const textoExplicacion =
    document.getElementById(
        "texto-explicacion"
    );

const ejemploCSS =
    document.getElementById(
        "ejemplo-css"
    );

const siguiente =
    document.getElementById(
        "siguiente"
    );


/* =====================================================
   MOSTRAR PREGUNTA
===================================================== */

function mostrarPregunta() {

    respondida = false;

    const pregunta =
        preguntas[preguntaActual];


    document.getElementById(
        "numero"
    ).textContent =
        preguntaActual + 1;


    document.getElementById(
        "nivel"
    ).textContent =
        "Nivel " + pregunta.nivel;


    document.getElementById(
        "descripcion-nivel"
    ).textContent =
        obtenerDescripcion(
            pregunta.nivel
        );


    preguntaElemento.textContent =
        pregunta.pregunta;


    codigoElemento.textContent =
        pregunta.codigo;


    respuestasElemento.innerHTML =
        "";


    explicacionElemento.classList.remove(
        "visible"
    );


    siguiente.classList.remove(
        "visible"
    );


    siguiente.textContent =
        "Siguiente pregunta ➜";


    pregunta.respuestas.forEach(
        (respuesta, indice) => {

            const boton =
                document.createElement(
                    "button"
                );


            boton.className =
                "respuesta";


            boton.textContent =
                respuesta;


            boton.addEventListener(
                "click",
                function () {

                    comprobarRespuesta(
                        indice,
                        boton
                    );

                }
            );


            respuestasElemento.appendChild(
                boton
            );

        }
    );


    const porcentaje =
        (
            preguntaActual /
            preguntas.length
        ) * 100;


    document.getElementById(
        "progreso"
    ).style.width =
        porcentaje + "%";


    actualizarMarcador();

}


/* =====================================================
   DESCRIPCIÓN DE LOS NIVELES
===================================================== */

function obtenerDescripcion(nivel) {

    const descripciones = {

        1:
            "Interacciones básicas",

        2:
            "Foco y selección",

        3:
            "Idiomas y elementos hijos",

        4:
            "Selección avanzada"

    };


    return descripciones[nivel];

}


/* =====================================================
   COMPROBAR RESPUESTA
===================================================== */

function comprobarRespuesta(
    indice,
    boton
) {

    if (respondida) {
        return;
    }


    respondida = true;


    const pregunta =
        preguntas[preguntaActual];


    const botones =
        document.querySelectorAll(
            ".respuesta"
        );


    botones.forEach(
        b => {
            b.disabled = true;
        }
    );


    if (
        indice ===
        pregunta.correcta
    ) {

        boton.classList.add(
            "correcta"
        );


        puntos += 100;


        if (puntos > record) {

            record = puntos;

            localStorage.setItem(
                "recordPseudoclases",
                record
            );

        }


        resultadoElemento.textContent =
            "🎉 ¡Correcto! +100 puntos";


        textoExplicacion.textContent =
            pregunta.explicacion;

    }

    else {

        boton.classList.add(
            "incorrecta"
        );


        vidas--;


        botones[
            pregunta.correcta
        ].classList.add(
            "correcta"
        );


        resultadoElemento.textContent =
            "❌ Respuesta incorrecta";


        textoExplicacion.textContent =
            pregunta.explicacion;

    }


    ejemploCSS.textContent =
        pregunta.ejemplo;


    explicacionElemento.classList.add(
        "visible"
    );


    siguiente.classList.add(
        "visible"
    );


    if (vidas <= 0) {

        siguiente.textContent =
            "Ver resultado 🏆";

    }


    actualizarMarcador();

}


/* =====================================================
   ACTUALIZAR MARCADOR
===================================================== */

function actualizarMarcador() {

    document.getElementById(
        "puntos"
    ).textContent =
        puntos;


    document.getElementById(
        "vidas"
    ).textContent =
        vidas;


    document.getElementById(
        "record"
    ).textContent =
        record;

}


/* =====================================================
   SIGUIENTE PREGUNTA
===================================================== */

siguiente.addEventListener(
    "click",
    function () {

        preguntaActual++;


        if (
            preguntaActual >=
            preguntas.length ||
            vidas <= 0
        ) {

            terminarJuego();

            return;

        }


        mostrarPregunta();

    }
);


/* =====================================================
   TERMINAR JUEGO
===================================================== */

function terminarJuego() {

    document.getElementById(
        "juego-contenido"
    ).style.display =
        "none";


    document.querySelector(
        ".nivel"
    ).style.display =
        "none";


    document.querySelector(
        ".progreso-contenedor"
    ).style.display =
        "none";


    const final =
        document.getElementById(
            "final"
        );


    final.classList.add(
        "visible"
    );


    document.getElementById(
        "resultado-final"
    ).innerHTML =

        `
        Obtuviste
        <strong>${puntos}</strong>
        puntos.
        <br><br>
        Tu récord actual es:
        <strong>${record}</strong>.
        <br><br>
        ${obtenerMensajeFinal()}
        `;

}


/* =====================================================
   MENSAJE FINAL
===================================================== */

function obtenerMensajeFinal() {

    if (puntos >= 1200) {

        return "🔥 ¡Eres un experto en pseudoclases!";

    }


    if (puntos >= 800) {

        return "🚀 ¡Excelente trabajo!";

    }


    if (puntos >= 500) {

        return "👏 ¡Vas muy bien!";

    }


    return "💪 ¡Sigue practicando!";

}


/* =====================================================
   REINICIAR JUEGO
===================================================== */

function reiniciarJuego() {

    preguntaActual = 0;

    puntos = 0;

    vidas = 3;

    respondida = false;


    document.getElementById(
        "juego-contenido"
    ).style.display =
        "block";


    document.querySelector(
        ".nivel"
    ).style.display =
        "block";


    document.querySelector(
        ".progreso-contenedor"
    ).style.display =
        "block";


    document.getElementById(
        "final"
    ).classList.remove(
        "visible"
    );


    mostrarPregunta();

}


/* =====================================================
   BOTÓN REINICIAR
===================================================== */

document.getElementById(
    "reiniciar"
).addEventListener(
    "click",
    reiniciarJuego
);


/* =====================================================
   INICIAR
===================================================== */

mostrarPregunta();