# Evaluación Unidad 2 - Backend API REST

Este proyecto corresponde a la evaluación de la unidad 2 para el ramo de Desarrollo Backend. Se desarrolla una API RESTful enfocada en el perfil de **Reclutador**, permitiendo gestionar la entidad `oferta_laboral`.

## Tecnologías utilizadas

- Node.js
- Express.js
- MySQL
- dotenv
- Thunder Client (para pruebas)
- Visual Studio Code

## Estructura

Desarrollo-Back-eva2/
├── config/
│   ├── .env
│   ├── db.js
│   └── database.sql
├── controllers/
│   └── ofertaController.js
├── routes/
│   └── ofertaRoutes.js
├── app.js
├── package-lock.json
├── package.json
└── README.md


## Instalación

1. Crear reoositorio y archivos
2. Ejecutar en la terminal:

npm install


3. Configurar la base de datos:

- Importar el archivo `config/database.sql` en phpMyAdmin
- crear tabla `cliente_feliz`

4. Configurar las variables de entorno en `config/.env`:

```
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=
DB_NAME=cliente_feliz
DB_PORT=3306
PORT=3000

5. Iniciar el servidor:

node app.js


## Endpoints creados

| Método | Ruta                         | Descripción                           |
|--------|------------------------------|---------------------------------------|
| POST   | /api/ofertas                 | Crear una oferta laboral              |
| GET    | /api/ofertas                 | Listar todas las ofertas              |
| PUT    | /api/ofertas/:id             | Editar una oferta                     |
| PATCH  | /api/ofertas/estado/:id      | Cambiar estado (activa/inactiva)     |
| PATCH  | /api/ofertas/remove/:id      | Simular eliminación (desactivar)     |

## Pruebas realizadas con:

- Se usó **Thunder Client** para probar cada endpoint
- Se incluye archivo `.json` con la colección

## 

Desarrollado por: Cesar rubilar sanhueza 
Instituto Profesional IPSS – 2° Año  
Ramo: Desarrollo Backend
