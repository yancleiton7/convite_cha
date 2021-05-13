

var nome = ''
function capturar(nome, intro, convite,  some, aparece){

    capturando = document.getElementById(nome).value;
    if (capturando === ""){
        alert('Eita! Acho que você esqueceu de digitar seu nome! kkkk')
    }
    else{
    
    muda_pagina(some, aparece);
    document.getElementById(intro).innerHTML = capturando;
    document.getElementById(convite).innerHTML = capturando;
    }

}

function nao_aceitou(){
    alert('Oxe?! Acho que clicou sem querer aqui, hein?')
}

function show_article(id){
    
    var infos = document.getElementById(id);
   
    if (infos.style.display === "none") {
        infos.style.display = "inline-block";
      } 
    else {
        infos.style.display = "none";
      }
    
}


function muda_pagina(some, aparece){
    show_article(some);
    show_article(aparece);
    
    some = '';
    aparece = '';
    
}
function play_audio() {
    document.getElementById('musica').play();
}

function redirect (){
    window.location.href = "http://www.encurtador.com.br/gxEQ6";
}


