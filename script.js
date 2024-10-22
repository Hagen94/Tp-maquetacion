const botonMensajes = document.getElementById("mensaje");
const usuarioMensajes = document.getElementById("usuario-mensajes");
const bottonCierroMensajes = document.getElementById("cierro-seccion-mensajes");
/**----opciones de usuario */
const botonOpciones = document.getElementById("boton-opciones");
const usuarioOpciones = document.getElementById("usuario-opciones");

botonMensajes.addEventListener("click", () => {
    //verificamos que no este activo para no superponer
if(usuarioOpciones.classList.contains("usuario-opciones-activo")){
    usuarioOpciones.classList.remove("usuario-opciones-activo");
}
    //activa o desactiva los mensajes
    usuarioMensajes.classList.toggle("boton-mensajes-activo");
})
//otra opcion para cerrar
bottonCierroMensajes.addEventListener("click", () => {
    usuarioMensajes.classList.remove("boton-mensajes-activo");
})

botonOpciones.addEventListener("click", () => {
    //verificamos que no este activo para no superponer
    if(usuarioMensajes.classList.contains("boton-mensajes-activo")){
        usuarioMensajes.classList.remove("boton-mensajes-activo");
    }
    //activa o desactiva las opciones
    usuarioOpciones.classList.toggle("usuario-opciones-activo");
})

//popup

document.getElementById('openPopup').addEventListener('click', function() {
    document.getElementById('popup').style.display = 'flex';
});

document.getElementById('closePopup').addEventListener('click', function() {
    document.getElementById('popup').style.display = 'none';
});

window.addEventListener('click', function(event) {
    var popup = document.getElementById('popup');
    if (event.target === popup) {
        popup.style.display = 'none';
    }
});
