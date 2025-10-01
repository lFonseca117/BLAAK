export function getNuevoEmpleadoForm(): string {
  return `
    <h2>Formulario - Nuevo empleado</h2>
    <form id="formNuevoEmpleado">
      <label for="nombre">Nombre completo:</label><br>
      <input type="text" id="nombre" name="nombre" required><br><br>

      <label for="email">Correo electrónico:</label><br>
      <input type="email" id="email" name="email" required><br><br>

      <label for="cargo">Cargo:</label><br>
      <input type="text" id="cargo" name="cargo" required><br><br>

      <button type="submit">Registrar</button>
    </form>
  `;
}
