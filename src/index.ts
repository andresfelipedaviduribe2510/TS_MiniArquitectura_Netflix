import { obtenerCatalogoPelicula, agregarPelicula } from './services';
import { pelicula } from './models';

console.log("=========Programa inicial=========");
console.table(obtenerCatalogoPelicula());

const peliNueva: pelicula = {
    id: 4,
    nombre: "aleluya",
    categoria: "Terror",
    estreno: true
};

agregarPelicula(peliNueva);
console.log("muchachos funciono");
console.table(obtenerCatalogoPelicula());
