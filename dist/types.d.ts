export type Rol = 'Backend' | 'Frontd' | 'Qa';
export type Seniority = 'Junior' | 'Sem' | 'Senior';
export type EstadoPr = 'abierto' | 'aprobado' | 'rechazado';
export type Prioridad = 'baja' | 'media' | 'alta';
export type IssueTip = 'Bug' | 'Mejora';
export type Tecnologia = [string, number];
export interface Desarrollador {
    nombre: string;
    rol: Rol;
    seniority: Seniority;
    tecnologia: Tecnologia[];
    disponibilidad: boolean;
}
export interface Repositorio {
    nombre: string;
    url: string;
    ramaPrincipal: string;
    lenguajePrincipal: string;
}
export interface PullRequest {
    id: number;
    titulo: string;
    estado: EstadoPr;
    autor: Desarrollador;
    reviewers: Desarrollador;
    lineaCodigo: number;
}
export interface Issue {
    id: number;
    titulo: string;
    tipo: IssueTip;
    prioridad: Prioridad;
    estado: EstadoPr;
}
export interface Proyecto {
    nombre: string;
    repositorio: Repositorio;
    issues: Issue;
    pullRequest: PullRequest;
}
//# sourceMappingURL=types.d.ts.map