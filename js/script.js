//hace un hover a la foto de perfi
var img = document.getElementById('foto');
img.addEventListener('mouseenter', function(){
    this.src = "../img/otro_perfil.jpg";
}, false);
img.addEventListener('mouseleave', function(){
    this.src = "../img/foto_de_perfil.jpg"
}, false);