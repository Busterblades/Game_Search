# Buscador de Juegos

Este es un buscador de juegos simple que utiliza la API de Giant Bomb para buscar y mostrar juegos. El proyecto está desarrollado con Node.js, Express y EJS para las vistas.

## Configuración

### Requisitos previos

Asegúrate de tener instalado Node.js en tu entorno de desarrollo.

### Instalación

- Clona o descarga el repositorio.
- Ejecuta `npm install` para instalar las dependencias.

## Uso

- Ejecuta `npm start` para iniciar el servidor.
- Abre tu navegador y ve a `http://localhost:3000`.
- Ingresa el nombre del juego en el campo de búsqueda y presiona enter o haz clic en el botón de búsqueda.
- Se mostrarán los resultados paginados y podrás hacer clic en los números de página para navegar.

## Estructura del Proyecto

- `index.js`: Contiene el código del servidor Express y las rutas.
- `views/`: Carpeta que contiene las plantillas EJS para las vistas.
- `public/`: Directorio estático para archivos CSS, imágenes, etc.

## Dependencias Principales

- `express`: Framework web para Node.js.
- `axios`: Cliente HTTP para realizar peticiones a la API.
- `ejs`: Motor de plantillas para generar vistas HTML.

## Detalles Técnicos

- **Página de Búsqueda** (`/search`): Realiza una búsqueda de juegos utilizando la API de Giant Bomb y muestra los resultados paginados. Cada página muestra hasta 24 juegos.
- **Detalles del Juego** (`/game/:id`): Muestra información detallada de un juego específico.
- 
![Captura de pantalla 1](https://github.com/Busterblades/Game_Search/assets/54655414/76c3a336-4ea5-49c0-8252-4ce17490bce1)

![Captura de pantalla 2](https://github.com/Busterblades/Game_Search/assets/54655414/3560fa22-1748-48e6-b280-19626e19feb7)

![Captura de pantalla 3](https://github.com/Busterblades/Game_Search/assets/54655414/025017e7-ec67-4da4-87fb-656aaac21488)

![Captura de pantalla 4](https://github.com/Busterblades/Game_Search/assets/54655414/d98ee3f2-3864-422a-9e95-56895a88fa1c)








