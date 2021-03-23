const mongoose = require('mongoose');

var mongoDB = process.env.MONGO_URI;

const dbConnection = async() => {
    //Código de conexión a la base de datos
    try {
        mongoose.connect(mongoDB, 
        { //Ponga su clave aquí
            useNewUrlParser: true, 
            useUnifiedTopology: true,
            useCreateIndex: true
        });
        console.log('Conectado a MongoDB satisfactoriamente!!');
    
    }
    catch(error){
        console.log('Ocurrio un error al conectarse al cluster de Mongo Atlas: ' + error);
    }
    
}

module.exports = dbConnection



