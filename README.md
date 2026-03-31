# Ruta Avanzada — TypeScript

Resumen de sesiones, arquitectura del proyecto y reto de la célula.

---

## Lo que ya vimos

Arrancamos desde cero: entorno, tooling y los fundamentos del lenguaje.

| Tema | Descripción |
|------|-------------|
| Configuración del entorno | Instalación y setup inicial del proyecto |
| Instalación de TypeScript | Global (`npm i -g typescript`) y como dev dependency |
| Transpilación | Uso de `tsc` y configuración del `tsconfig.json` |
| Tipos y atributos | Tipado estricto de variables y propiedades |
| Objetos | Definición y tipado de objetos con interfaces y types |
| Arrays | Arrays tipados y métodos con inferencia |
| Tuplas | Arreglos de longitud y tipos fijos |
| Funciones tipadas | Parámetros, retorno y funciones genéricas |
| Modularización | Separación de responsabilidades en módulos |

---

## Mini Arquitectura del Proyecto

La estructura que construimos juntos como base de todo proyecto:

```
src/
├── index.ts       ← punto de entrada de la aplicación
├── moduls.ts      ← módulos reutilizables
├── services.ts    ← lógica de negocio
└── data.ts        ← datos y modelos
```

---

## Temas a Investigar — Por Células

Antes de arrancar a codear, cada célula debe investigar estos tres pilares:

### 1. Clases en TypeScript
- Declaración de clases y constructores
- Modificadores de acceso: `public`, `private`, `protected`
- Herencia con `extends`
- Clases abstractas e interfaces
- Métodos estáticos y propiedades de solo lectura (`readonly`)

### 2. Namespaces
- Qué son y para qué sirven
- Cómo agrupar código relacionado bajo un mismo namespace
- Diferencia entre namespaces y módulos ES
- Cuándo usarlos correctamente (y cuándo no)

### 3. Decoradores
- Qué son los decoradores y cómo habilitarlos en `tsconfig.json`
- Tipos: de clase, de método, de propiedad y de parámetro
- Cómo crear un decorador propio
- Casos de uso reales (logging, validación, etc.)

> **Tip:** No se limiten a la documentación oficial. Busquen ejemplos reales, compartan hallazgos entre la célula y lleguen a sus propias conclusiones antes de codear.

---

## Entregable por Célula

### Objetivo

Construir una **aplicación CRUD que corra por consola** TS sobre una entidad que elijan de una app ya existente.

Las **4 operaciones** deben estar implementadas:

| Operación | Descripción |
|-----------|-------------|
| **Create** | Agregar un nuevo registro |
| **Read** | Listar todos o buscar por ID |
| **Update** | Modificar un registro existente |
| **Delete** | Eliminar un registro |

---

### Requisitos Técnicos Obligatorios

- [ ] Respetar la arquitectura modular `src/` que ya vimos
- [ ] Usar **clases con TypeScript** para modelar las entidades
- [ ] Organizar el código con **namespaces** donde tenga sentido
- [ ] Aplicar al menos un **decorador** (de clase o de método)
- [ ] Tipado estricto en todo el proyecto — **cero `any`**
- [ ] Separar responsabilidades: datos, servicios, módulos y entrada

---

### Criterios de Evaluación

| Criterio | ¿Qué se evalúa? |
|----------|-----------------|
| Funcionalidad | ¿La app corre sin errores desde consola? |
| CRUD completo | ¿Las 4 operaciones funcionan correctamente? |
| Arquitectura | ¿El código está bien organizado y separado? |
| Tipado | ¿Se usa TypeScript correctamente sin atajos? |
| Sustentación | ¿Supieron explicar cómo funciona cada parte? |

---

### Stack recomendado

```bash
# Iniciar proyecto
npm init -y
npm install -D typescript ts-node @types/node

# Ejecutar
npx ts-node src/index.ts
```

```json
// tsconfig.json — habilitar decoradores
{
  "compilerOptions": {
    "target": "ES6",
    "module": "commonjs",
    "strict": true,
    "experimentalDecorators": true,
    "emitDecoratorMetadata": true,
    "outDir": "./dist",
    "rootDir": "./src"
  }
}
```

---

> **El reto no es solo que funcione — es que esté bien pensado, bien tipado y bien explicado.**  
> ¡Mucho éxito y NO ES SOLO QUE FUNCIONE, TAMBIÉN HACER Y EXPLICAR LA CLASE(Busquen formas de que la clase sea interesante y entendible).
