// src/pages/administrador.ts

class Administrador {
    nombre: string;
    empleados: { nombre: string; cargo: string }[];
    tareas: { descripcion: string; estado: string; asignadaA: string }[];

    constructor(nombre: string) {
        this.nombre = nombre;
        this.empleados = [];

        // Recuperar tareas guardadas
        const guardadas = localStorage.getItem("tareas");
        this.tareas = guardadas ? JSON.parse(guardadas) : [];
    }

    // --- Registrar empleados ---
    registrarEmpleado(nombre: string, cargo: string) {
        this.empleados.push({ nombre, cargo });
        console.log(`👤 Nuevo empleado: ${nombre} (${cargo})`);

        // Guardar en localStorage
        let empleados = JSON.parse(localStorage.getItem("empleados") || "[]");
        empleados.push({ nombre, cargo });
        localStorage.setItem("empleados", JSON.stringify(empleados));
    }

    obtenerEmpleados() {
        return this.empleados;
    }

    // --- Crear y asignar tareas ---
    crearTarea(descripcion: string, asignadaA: string) {
        const nuevaTarea = {
            descripcion,
            estado: "pendiente",
            asignadaA
        };

        this.tareas.push(nuevaTarea);
        localStorage.setItem("tareas", JSON.stringify(this.tareas));

        console.log(`📋 Tarea creada: "${descripcion}" para ${asignadaA}`);
        alert(`✅ Tarea creada y asignada a ${asignadaA}`);
    }

    obtenerTareas() {
        return this.tareas;
    }
}

export { Administrador };

    
