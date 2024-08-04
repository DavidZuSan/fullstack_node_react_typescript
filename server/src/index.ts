import colors from 'colors';
import server from './server';

// Configuración de la base de datos
const port = process.env.PORT || 4000
server.listen(4000, () => {
    console.log( colors.cyan.bold(`Server corriendo en el puerto ${port}` ) );
});    