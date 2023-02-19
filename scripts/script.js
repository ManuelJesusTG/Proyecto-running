function DeleteVideo(){
    var video = document.getElementById("myVideo");
    var div = document.getElementById("content")
    var animation = document.getElementById("animation")

    animation.remove();
    video.remove();
    div.remove();
}



document.getElementById('id-sun').onclick = function(){
    document.getElementById('page').classList.remove('dark-mode')
    document.getElementById('id-moon').classList.remove('active')
    this.classList.add('active')
  }

  document.getElementById('id-moon').onclick = function(){
    document.getElementById('page').classList.add('dark-mode')
    document.getElementById('id-sun').classList.remove('active')
    this.classList.add('active')
  }
