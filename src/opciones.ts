document.addEventListener("DOMContentLoaded", () => {
  const yaEmpleadoBtn = document.getElementById("yaEmpleado") as HTMLButtonElement;
  const nuevoEmpleadoBtn = document.getElementById("nuevoEmpleado") as HTMLButtonElement;
  const resultado = document.getElementById("resultado") as HTMLDivElement;

  yaEmpleadoBtn.addEventListener("click", () => {
    resultado.textContent = "Has seleccionado: Ya eres empleado.";
  });

  nuevoEmpleadoBtn.addEventListener("click", () => {
    resultado.textContent = "Has seleccionado: Nuevo empleado.";
  });
});
