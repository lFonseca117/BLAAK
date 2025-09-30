"use strict";
document.addEventListener("DOMContentLoaded", () => {
    const yaEmpleadoBtn = document.getElementById("yaEmpleado");
    const nuevoEmpleadoBtn = document.getElementById("nuevoEmpleado");
    const resultado = document.getElementById("resultado");
    yaEmpleadoBtn.addEventListener("click", () => {
        resultado.textContent = "Has seleccionado: Ya eres empleado.";
    });
    nuevoEmpleadoBtn.addEventListener("click", () => {
        resultado.textContent = "Has seleccionado: Nuevo empleado.";
    });
});
