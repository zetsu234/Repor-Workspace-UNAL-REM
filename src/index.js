
import express from 'express'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'

import rutasdenavegacion from './routes/index.js'
import authRoutes from './routes/autenticacion.js'

const app = express()

//Ruta absoluta
const __dirname = dirname(fileURLToPath (import.meta.url) )
console.log(join(__dirname, '/views'))

app.set('views',join(__dirname, 'views') )
app.set('view engine', 'ejs')

// MIDDLEWARES PARA LEER DATOS DE FORMULARIOS (¡Crucial para req.body!)
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

//Ruta para llamar la aplicacion
app.use(rutasdenavegacion)
app.use(authRoutes)

//Ruta de la Carpeta publica para archivos estaticos (CSS,img,video)
app.use(express.static(join(__dirname,'public')))

//Ruta para Iniciar el Servidor con su respectivo puerto
app.listen(10)
console.log('Hola Mundo')
console.log ('El servidor esta escuchando el puerto es', 10)



















