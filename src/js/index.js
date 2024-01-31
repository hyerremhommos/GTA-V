//Buscando o botão via seletor
const botao = document.querySelector(".btn-plataforma");

//Buscando os elementos do botão via seletor tbm
const elementoPlataformas = document.querySelector(".btn-plataforma .plataformas");

//Pegando o clique do usuário no botão
function eventoClick(){
    //Verificar se o botão está aberto/ativo
    if(elementoPlataformas.classList.contains("ativo")){
        //Removendo a classe ativo na listagem para esconder o conteúdo
        elementoPlataformas.classList.remove("ativo");
    }else {
        //Adicionando a classe ativo na listagem para aparecer o conteúdo
        elementoPlataformas.classList.add("ativo");
    }
}

/*Outra forma de se fazer:
botao.addEventListener("click", () => {
    const botaoEstaAberto = elementoPlataformas.classList.contains("ativo");

    if(botaoEstaAberto){
        elementoPlataformas.classList.remove("ativo");
    }else{
        elementoPlataformas.classList.add("ativo");
    }

    Podemos reescrever o if e else com (refatorando 4 linhas em 1):
    elementoPlataformas.classList.toggle("ativo");
});*/