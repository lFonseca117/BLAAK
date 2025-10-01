import { getYaEmpleadoForm } from "./forms/yaEmpleadoForm";
import { getNuevoEmpleadoForm } from "./forms/nuevoEmpleadoForm";

document.addEventListener("DOMContentLoaded", () => {
  const yaEmpleadoBtn = document.getElementById("yaEmpleado") as HTMLButtonElement;
  const nuevoEmpleadoBtn = document.getElementById("nuevoEmpleado") as HTMLButtonElement;
  const resultado = document.getElementById("resultado") as HTMLDivElement;

  // Función para guardar usuarios en localStorage
  function guardarUsuario(usuario: any) {
    const usuarios = JSON.parse(localStorage.getItem("usuarios") || "[]");
    usuarios.push(usuario);
    localStorage.setItem("usuarios", JSON.stringify(usuarios));
  }

  yaEmpleadoBtn.addEventListener("click", () => {
    resultado.innerHTML = getYaEmpleadoForm();
    const form = document.getElementById("formYaEmpleado") as HTMLFormElement;

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const idEmpleado = (document.getElementById("idEmpleado") as HTMLInputElement).value;
      const password = (document.getElementById("password") as HTMLInputElement).value;

      const usuarios = JSON.parse(localStorage.getItem("usuarios") || "[]");
      const usuarioEncontrado = usuarios.find((u: any) => u.idEmpleado === idEmpleado && u.password === password);

      if (usuarioEncontrado) {
        alert(`✅ Bienvenido de nuevo, ${usuarioEncontrado.nombre} (ID: ${idEmpleado})`);
      } else {
        alert("❌ Usuario no encontrado, verifica tus credenciales.");
      }
    });
  });

  nuevoEmpleadoBtn.addEventListener("click", () => {
    resultado.innerHTML = getNuevoEmpleadoForm();
    const form = document.getElementById("formNuevoEmpleado") as HTMLFormElement;

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const nombre = (document.getElementById("nombre") as HTMLInputElement).value;
      const email = (document.getElementById("email") as HTMLInputElement).value;
      const cargo = (document.getElementById("cargo") as HTMLInputElement).value;

      const nuevoUsuario = { 
        idEmpleado: Date.now().toString(), 
        nombre, 
        email, 
        cargo, 
        password: "1234" 
      };

      guardarUsuario(nuevoUsuario);

      alert(`🎉 Usuario ${nombre} registrado con éxito.
Tu ID es: ${nuevoUsuario.idEmpleado}
Contraseña inicial: "1234"`);
    });
  });
});
