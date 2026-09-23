import { Router } from "express";
const router = Router ()

//Ruta POST para procesar el login
//error hay que quitar el api de la extencion del login --- router.post('/api/login', (req, res) => {
    
    // Error No2 - de la Carpeta Routes/index.js debemos quitar el llamado de la ruta ya que mas abajo se se esta 
    // llamando esa ruta: router.get('/login',(req,res) => res.render ('login.ejs', {etiqueta: 'Vista de inicio de sesion'}) )


//4. Enlace para "Restablecer contrasena"
router.get('/recuperar-password',(req, res) => {
    res.send("Vista o Logica para enviar el correo de recuperacion de contrasena");
});
//5 Enlace para "Recordar Usuario"
router.get('/recordar-usuario',(req, res) => {
    res.send("Vista o Logica para recordar el nombre del Usuario");     
});

//Ruta de ejemplo para el exito del login 

router.get('/dashboard',(req, res) => {
    res.send("Bienvenido al Sistema");
});



export default router