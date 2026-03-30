import { pelicula } from './models';
import { peliAvatar } from './data';

//crear dos funciones un post y un get
//get
export const obtenerCatalogoPelicula = (): pelicula[] => {
    return [...peliAvatar];
}

//agregar funcion que me permita insertar un nuevo objeto
export const agregarPelicula = (nuevaPeli: pelicula): void => {
    const existe = peliAvatar.some(p => p.id === nuevaPeli.id);

    if (existe) {
        console.log("Ey loco ese Id ya existeeee");
        return;
    }
    peliAvatar.push(nuevaPeli);
    console.log("Ey peso se inserto");
}