import express from 'express' 
import colors from 'colors'
import swaggerUi from 'swagger-ui-express'
import swaggerSpec, { swaggerUiOptions } from './config/swagger'
import router from './router'
import db from './config/db'
import path from 'path'

// Conectar a base de datos
export async function connectDB() {
    try {
        await db.authenticate()
        db.sync()
        console.log(colors.blue('Conexión exitosa a la BD'))
    } catch (error) {
        console.log(colors.red.bold('Hubo un error al conectar a la BD'))
    }
}
connectDB()

// Instancia de express
const server = express()

// Leer datos de formularios
server.use(express.json())

// Configuración para servir archivos estáticos desde 'public'
server.use(express.static(path.join(__dirname, '../public')))

// Rutas de la API
server.use('/api/products', router)

// Documentación de Swagger
server.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec, swaggerUiOptions))

export default server
