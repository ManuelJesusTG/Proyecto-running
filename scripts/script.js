// Modo oscuro y modo Claro

window.onload = Comenzar;

function Comenzar() {

    document.getElementById("Modo_Oscuro").addEventListener("click",ModoOscuro)
}

function ModoOscuro(){
    let boton = document.getElementById("Modo_Oscuro");

if (boton.checked == false){

    console.log("Modo oscuro desactivado")

    document.getElementById("darkheader").id = "header"
    document.getElementById("nav").className= "navbar-expand-lg navbar-light bg-light"
    document.getElementById("login").className = "modal-content"
    for (let i = 0; i < document.getElementsByTagName("a").length; i++) {
        document.getElementsByTagName("a")[i].id="linkN"
    }
    for (let i = 0; i < document.getElementsByClassName("nav-link active").length; i++) {
        document.getElementsByClassName("nav-link active")[i].id="Negro"
    }
    document.getElementById("dark").id = "body"
    document.getElementById("noticia1").className = "col card text-center m-4"
    document.getElementById("noticia2").className = "col card text-center m-4"
    document.getElementById("noticia3").className = "col card text-center m-4"
    document.getElementById("noticia4").className = "col card text-center m-4"

} else {

    console.log("Modo oscuro activado")

    document.getElementById("header").id = "darkheader"
    document.getElementById("nav").className = "navbar-expand-lg navbar-dark bg-dark"
    document.getElementById("body").id = "dark"
    document.getElementById("login").className = "modal-content bg-dark"
    for (let i = 0; i < document.getElementsByTagName("a").length; i++) {
        document.getElementsByTagName("a")[i].id="linkO"
    }
    document.getElementById("noticia1").className = "col card text-center m-4 bg-dark"
    document.getElementById("noticia2").className = "col card text-center m-4 bg-dark"
    document.getElementById("noticia3").className = "col card text-center m-4 bg-dark"
    document.getElementById("noticia4").className = "col card text-center m-4 bg-dark"

}
}


// Funcion para eliminar el video y acceder a la página

function DeleteVideo(){
    
    var div = document.getElementById("content")
    var animation = document.getElementById("animation")

    animation.remove();
    video.remove();
    div.remove();
}