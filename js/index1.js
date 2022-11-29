function cambioUyuni(){

    location.href="#ids";
}

function paquetes(){
  
    location.href="../html/index2.html"
}

function inicio(){
    location.href="../html/index1.html"
}

const menu=document.getElementById("icon-menu");

const nav = document.querySelector("nav");

menu.addEventListener("click",verMenu)

function verMenu(){
    alert("hola");
}