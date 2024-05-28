'use strict'
const nome = document.getElementById('nome').value
const senha = document.getElementById('senha').value
const validarAdministrador = function(){
    if(nome == 'administrador' && senha == 'administrador'){
        alert('funciona')
        window.location.href("./pages/paginaInicial.html")
    }else{
        const conteiner = document.getElementById('conteiner')
        if(conteiner.classList.contains("h-10", "w-full", "bg-[#4661BF]", "hidden", "items-center", "justify-between")){
            conteiner.classList.remove("h-10", "w-full", "bg-[#4661BF]", "hidden", "items-center", "justify-between")
            conteiner.classList.add("h-10", "w-full", "bg-[#4661BF]", "flex", "items-center", "justify-between")
        }
    }
}
const botaoEntrar = document.getElementById('botaoEntrar')
botaoEntrar.addEventListener('click', validarAdministrador)