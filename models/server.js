const express = require('express');
var cors = require('cors')


class Server{

    constructor() {
        this.app=express();
        this.port=process.env.PORT;
        this.usuariosPath = '/api/usuarios';

        //Midlewares
        this.midlewares();

        // rutas de mi aplicacion
        this,this.routes();
    }
    midlewares() {

        //CORS
        this.app.use(cors());
        
        //lectura y parseo del body
        this.app.use( express.json());

        //directorio publico
        this.app.use( express.static('public'));
    }

    //Endpoints
    routes(){
         this.app.use(this.usuariosPath,require('../routes/usuarios'));
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('servidor corriendo en el puerto '+this.port )
        });

    }

}

module.exports = Server;