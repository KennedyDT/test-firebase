# Proyecto Tienda con Node.js y Firebase

Este es un proyecto de demostración básico que implementa un CRUD (Crear, Leer, Actualizar, Borrar) de productos utilizando Node.js y Firebase (Firestore) como base de datos.

## Requisitos Previos

Antes de empezar, asegúrate de tener instalado lo siguiente en tu sistema:
- [Node.js](https://nodejs.org/) (se recomienda la versión LTS)
- npm (normalmente viene incluido con Node.js)

## Pasos para la Configuración

Sigue estos pasos para poner en marcha el proyecto en tu máquina local.


### Instala las Dependencias

Una vez dentro del directorio del proyecto, ejecuta el siguiente comando para instalar todas las dependencias necesarias, incluyendo el SDK de Firebase.
```bash
npm install
```

## Cómo Ejecutar los Scripts

Hemos configurado varios scripts en el archivo `package.json` para facilitar la interacción con la base de datos.

### Crear un Producto
Para añadir un nuevo producto a la base de datos (los datos del producto están definidos en `scripts/create.js`), ejecuta: (Asegura de estar en la carpeta de scripts desde la terminal)
```bash
npm run create
```

### Leer todos los Productos
Para ver en la consola todos los productos que tienes guardados en la base de datos, ejecuta:
```bash
npm run read
```
Este comando es útil para obtener los IDs de los documentos que quieras modificar o eliminar.

### Actualizar un Producto
1.  Primero, ejecuta `npm run read` para obtener el ID del producto que deseas actualizar.
2.  Abre el archivo `scripts/update.js`.
3.  Reemplaza el valor de `productIdToUpdate` con el ID que copiaste.
4.  Modifica el objeto `newProductData` si lo deseas.
5.  Ejecuta el script:
    ```bash
    npm run update
    ```

### Eliminar un Producto
1.  De forma similar a la actualización, ejecuta `npm run read` para obtener el ID del producto a eliminar.
2.  Abre el archivo `scripts/delete.js`.
3.  Reemplaza el valor de `productIdToDelete` con el ID que copiaste.
4.  Ejecuta el script:
    ```bash
    npm run delete
    ``` 