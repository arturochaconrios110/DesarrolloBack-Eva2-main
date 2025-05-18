const express = require('express'); 
const bodyParser = require('body-parser'); 
const dotenv = require('dotenv'); 
const ofertaRoutes = require('./routes/ofertaRoutes');   
// Cargar variables de entorno 
dotenv.config({ path: './config/.env' }); 
const app = express(); 
app.use(bodyParser.json()); 

// Usar rutas 
    app.use('/api/ofertas', ofertaRoutes); 
// Puerto 
const PORT = process.env.PORT || 3000; 
    app.listen(PORT, () => { 
        console.log(`Servidor corriendo en http://localhost:${PORT}`); 
}); 