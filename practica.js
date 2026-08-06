// ====================================================
// Funciones según la diapositiva (Sección Texto)
// ====================================================

function fnGeo() {
  let datoVariable = "";
  datoVariable = document.getElementById("txtDato").value;
  console.log("Dato: ", datoVariable);

  fnSalidaParrafo(datoVariable);
  fnAlerta(datoVariable);
}

function fnSalidaParrafo(datoVariable) {
  document.getElementById("pfoSalida").innerHTML = "El dato ingresado fue: " + datoVariable;
}

function fnAlerta(datoVariable) {
  alert(`El dato ingresado en caja fue: ${datoVariable}`);
}

// ====================================================
// Funciones para la sección de Operaciones
// ====================================================

function calcular() {
  const n1 = parseFloat(document.getElementById("num1").value) || 0;
  const n2 = parseFloat(document.getElementById("num2").value) || 0;

  // Operaciones básicas
  const suma = n1 + n2;
  const resta = n1 - n2;
  const multi = n1 * n2;
  
  // Operaciones de división
  let divide, cociente, residuo;
  if (n2 !== 0) {
    divide = (n1 / n2).toFixed(2);
    cociente = Math.floor(n1 / n2);
    residuo = n1 % n2;
  } else {
    divide = "No se puede dividir por 0";
    cociente = "Indefinido";
    residuo = "Indefinido";
  }

  // ==================================================
  // AQUÍ VAN LAS OPERACIONES DE SENO Y COSENO
  // (Tomando el valor de 'num1' como los grados)
  // ==================================================
  const radianes = n1 * (Math.PI / 180); // Conversión obligatoria a radianes
  const seno = Math.sin(radianes).toFixed(4);
  const coseno = Math.cos(radianes).toFixed(4);


  // ==================================================
  // IMPRESIÓN DE RESULTADOS EN EL HTML
  // ==================================================

  // 1. Mostrar resultado general en <h2>
  document.getElementById("resultado").innerText = "El resultado es: " + suma;

  // 2. Suma
  document.getElementById("divSalidaSuma").innerHTML = `Resultado Suma: ${n1} + ${n2} = ${suma}`;

  // 3. Resta
  const elementoResta = document.querySelector(".divSalidaResta");
  if (elementoResta) elementoResta.innerHTML = `Resultado Resta: ${n1} - ${n2} = ${resta}`;

  // 4. Multiplicación
  const elementoMulti = document.querySelector(".divSalidaMultiplica");
  if (elementoMulti) elementoMulti.innerHTML = `Resultado Multiplicación: ${n1} * ${n2} = ${multi}`;

  // 5. División
  const elementoDivide = document.querySelector(".divSalidaDivide");
  if (elementoDivide) elementoDivide.innerHTML = `Resultado División: ${n1} / ${n2} = ${divide}`;

  // 6. Cociente
  const elementoCociente = document.querySelector(".divSalidaCociente");
  if (elementoCociente) elementoCociente.innerHTML = `Resultado Cociente (entero): Math.floor(${n1} / ${n2}) = ${cociente}`;

  // 7. Residuo
  const elementoResiduo = document.querySelector(".divSalidaResiduo");
  if (elementoResiduo) elementoResiduo.innerHTML = `Resultado Residuo (módulo): ${n1} % ${n2} = ${residuo}`;

  // 8. Seno (NUEVO)
  const elementoSeno = document.querySelector(".divSalidaSeno");
  if (elementoSeno) elementoSeno.innerHTML = `Resultado Seno de ${n1}°: Math.sin() = ${seno}`;

  // 9. Coseno (NUEVO)
  const elementoCoseno = document.querySelector(".divSalidaCoseno");
  if (elementoCoseno) elementoCoseno.innerHTML = `Resultado Coseno de ${n1}°: Math.cos() = ${coseno}`;
}

// ====================================================
// Escuchadores de eventos (Event Listeners)
// ====================================================
document.getElementById("btnLlamaFuncion").addEventListener("click", fnGeo);
document.getElementById("btnCalcular").addEventListener("click", calcular);