function DeleteVideo(){
    var video = document.getElementById("myVideo");
    var div = document.getElementById("content")
    var animation = document.getElementById("animation")

    animation.remove();
    video.remove();
    div.remove();
}

