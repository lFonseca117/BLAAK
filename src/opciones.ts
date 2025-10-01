import { getYaEmpleadoForm } from "./forms/yaEmpleadoForm.js";
import { getNuevoEmpleadoForm } from "./forms/nuevoEmpleadoForm.js";

document.addEventListener("DOMContentLoaded", () => {
  const yaEmpleadoBtn = document.getElementById("yaEmpleado") as HTMLButtonElement;
  const nuevoEmpleadoBtn = document.getElementById("nuevoEmpleado") as HTMLButtonElement;
  const resultado = document.getElementById("resultado") as HTMLDivElement;

  function guardarUsuario(usuario: any) {
    const usuarios = JSON.parse(localStorage.getItem("usuarios") || "[]");
    usuarios.push(usuario);
    localStorage.setItem("usuarios", JSON.stringify(usuarios));
  }

  // --- Ya empleado ---
  yaEmpleadoBtn.addEventListener("click", () => {
    resultado.innerHTML = getYaEmpleadoForm();
    const form = document.getElementById("formYaEmpleado") as HTMLFormElement;

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const idEmpleado = (document.getElementById("idEmpleado") as HTMLInputElement).value;
      const password = (document.getElementById("password") as HTMLInputElement).value;

      const usuarios = JSON.parse(localStorage.getItem("usuarios") || "[]");
      const usuarioEncontrado = usuarios.find((u: any) => u.idEmpleado === idEmpleado && u.password === password);

      const mensajeDiv = document.createElement("div");
      mensajeDiv.style.marginTop = "15px";

      if (usuarioEncontrado) {
        mensajeDiv.innerHTML = `✅ Bienvenido de nuevo, <b>${usuarioEncontrado.nombre}</b>`;

        // Redirigir según el cargo
        switch (usuarioEncontrado.cargo) {
          case "ING":
            window.location.href = "pages/ingeniero.html";
            break;
          case "ADM":
            window.location.href = "pages/administrador.html";
            break;
          case "JFA":
            window.location.href = "pages/jefeArea.html";
            break;
          case "EMP":
            window.location.href = "pages/empleadoNormal.html";
            break;
        }
      } else {
        mensajeDiv.innerHTML = `❌ Usuario no encontrado.`;
      }

      resultado.appendChild(mensajeDiv);
    });
  });

  // --- Nuevo empleado ---
  nuevoEmpleadoBtn.addEventListener("click", () => {
    resultado.innerHTML = getNuevoEmpleadoForm();
    const form = document.getElementById("formNuevoEmpleado") as HTMLFormElement;

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const nombre = (document.getElementById("nombre") as HTMLInputElement).value.trim();
      const email = (document.getElementById("email") as HTMLInputElement).value.trim();
      const cedula = (document.getElementById("cedula") as HTMLInputElement).value.trim();
      const anioIngreso = (document.getElementById("anioIngreso") as HTMLInputElement).value.trim();
      const cargo = (document.getElementById("cargo") as HTMLSelectElement).value;
      const password = (document.getElementById("password") as HTMLInputElement).value;
      const confirmPassword = (document.getElementById("confirmPassword") as HTMLInputElement).value;

      if (password !== confirmPassword) {
        alert("❌ Las contraseñas no coinciden.");
        return;
      }

      const nombreLimpio = nombre.split(" ")[0].toUpperCase();
      const ultimosCedula = cedula.slice(-4);
      const idEmpleado = `${anioIngreso}-${cargo}-${nombreLimpio}-${ultimosCedula}`;

      const nuevoUsuario = { 
        idEmpleado, 
        nombre, 
        email, 
        cedula, 
        anioIngreso, 
        cargo, 
        password 
      };

      guardarUsuario(nuevoUsuario);

      const mensajeDiv = document.createElement("div");
      mensajeDiv.style.marginTop = "15px";
      mensajeDiv.innerHTML = `
        🎉 Usuario <b>${nombre}</b> registrado con éxito.<br>
        Tu ID es: <b style="color:blue">${idEmpleado}</b>
      `;
      resultado.appendChild(mensajeDiv);
    });
  });
});
