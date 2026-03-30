//simular netflix

export type Categoria = 'Accion' | 'Terror' | 'Comedia' | 'Documental';
export type Plan = 'Basico' | 'Premium';

export interface pelicula {
    id: number;
    nombre: string;
    categoria: Categoria;
    estreno: boolean;
}

export interface usuarios {
    id: number;
    nombre: string;
    plan: Plan;
}