import app from './app.js'
import { sequelize } from "./database/database.js";

async function main () {

    try {
        sequelize.sync( {force: false})//
        
        app.listen( 8080, () => {  console.log('Servidor Corriendo') } );
    } catch (error) {
        console.log( 'Conexion fallada: ' + error)
        
    }



}

main();
