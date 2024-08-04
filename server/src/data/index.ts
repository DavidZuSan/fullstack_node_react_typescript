import { exit } from "node:process";
import db from "../config/db";


const clearBD = async () => {
    try {
        await db.sync({force: true});
        console.log('Base de datos eliminada con éxito'); 
        exit(0);  
    } catch (error) {
        console.error(error);
        exit(1);
    }
}
if(process.argv[2] === '--clear'){
    clearBD();
}

console.log(process.argv);