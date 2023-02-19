window.onload = function(){
    var IniciarPausar = document.getElementById("IniciarPausar")
    var video = document.getElementById("myVideo");
    var Velocidad = document.getElementById("Velocidad")


IniciarPausar.addEventListener("click", function(){
    if(video.paused){
        video.play();
        IniciarPausar.innerHTML = "⏸️"
    } else{
        video.pause()
        IniciarPausar.innerHTML = "▶️"
    }
})

video.addEventListener("timeupdate", function(){
    var tiempo = video.currentTime / video.duration *100;
    Velocidad.value = tiempo;
})

Velocidad.addEventListener("change", function(){
    var cambios = Velocidad.value * video.duration /100;
    video.currentTime = cambios;
})

}

function DeleteVideo(){
    
    var div = document.getElementById("content")
    var animation = document.getElementById("animation")

    animation.remove();
    video.remove();
    div.remove();
}