const swaggerJSDOC = require('swagger-jsdoc');

const swaggerDefinition = {
openapi: '3.0.0',
info: {
    title: 'API de Postulaciones',
    version: '1.0.0',
    description: 'Documentación de la API para el sistema de postulaciones, usuarios, ofertas laborales y postulaciones.',        

},
Servers: [
    {
        url: 'http://localhost:3000/api',
        description: 'Servidor de desarrollo'
    },
],
};


const options = {
    swaggerDefinition,
    apis: ['./routes/*.js'], // Ruta a los archivos donde se encuentran las anotaciones de Swagger  
}

const swaggerSpec = swaggerJSDoc(options)
module.exports = swaggerSpec;
