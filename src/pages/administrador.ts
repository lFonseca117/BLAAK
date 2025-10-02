// src/pages/administrador.ts

class Administrador {
    nombre: string;
    empleados: { cargo: string; nombre: string }[];
    tareas: { descripcion: string; estado: string; asignadaA?: string | null }[];

    constructor(nombre: string) {
        this.nombre = nombre;
        this.empleados = [];
        this.tareas = [];
 
    // Empleados
    registrarEmpleado(nombre: string, cargo: string) {
        this.empleados.push({ nombre, cargo });
        console.log(`Administrador registró a ${nombre} como ${cargo}`);
    }

    obtenerEmpleados() {
        return this.empleados.map(e => ({ ...e }));
    }

    verCargos() {
        console.log("Lista de empleados por cargo:");
        this.empleados.forEach(emp => {
            console.log(`- ${emp.cargo}: ${emp.nombre}`);
        });
    }

    // Tareas
    crearTarea(descripcion: string) {
        this.tareas.push({ descripcion, estado: "pendiente", asignadaA: null });
        console.log(`Nueva tarea creada: ${descripcion}`);
    }

    obtenerTareas() {
        return this.tareas.map(t => ({ ...t }));
    }

    enviarTareaAJefe(index: number, nombreJefe?: string) {
        if (index < 0 || index >= this.tareas.length) return false;
        const tarea = this.tareas[index];
        tarea.estado = "enviada";
        tarea.asignadaA = nombreJefe || "Jefe de área";
        console.log(`Tarea enviada al jefe: ${tarea.descripcion}`);
        return true;
    }

    finalizarTarea(index: number) {
        if (index < 0 || index >= this.tareas.length) return false;
        this.tareas[index].estado = "finalizada";
        console.log(`Tarea finalizada: ${this.tareas[index].descripcion}`);
        return true;
    }
}

export { Administrador };
