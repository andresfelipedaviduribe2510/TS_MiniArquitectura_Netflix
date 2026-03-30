"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dev1 = {
    nombre: "andres",
    rol: "Backend",
    seniority: "Senior",
    tecnologia: [["c#", 10]],
    disponibilidad: true
};
const dev2 = {
    nombre: "karlos",
    rol: "Frontd",
    seniority: "Junior",
    tecnologia: [["c#", 10]],
    disponibilidad: false
};
const dev3 = {
    nombre: "franklin",
    rol: "Qa",
    seniority: "Junior",
    tecnologia: [["ruby", 10]],
    disponibilidad: true
};
const listaIssue = [
    { id: 1, titulo: "fallo", tipo: "Bug", prioridad: "alta", estado: "rechazado" },
    { id: 2, titulo: "paso", tipo: "Mejora", prioridad: "alta", estado: "aprobado" },
    { id: 3, titulo: "fallo", tipo: "Bug", prioridad: "alta", estado: "abierto" }
];
const pullRequest = [
    { id: 1, titulo: "fallo", estado: "abierto", autor: dev1, reviewers: dev3, lineaCodigo: 5 }
];
const miProyecto = {
    nombre: "IA for devs",
    repositorio: {
        nombre: "core",
        url: "https",
        ramaPrincipal: "Prod",
        lenguajePrincipal: ".Net"
    },
    issues: listaIssue,
    pullRequest: pullRequest
};
//# sourceMappingURL=index.js.map