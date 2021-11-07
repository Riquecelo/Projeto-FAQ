//buscar items da tela
const itemsPerguntasRespostas = document.querySelectorAll('.item');

//entender que o item foi clicado
//  forEach[para cada] elemento dentro da constante que tenha 'item' execute a função 
itemsPerguntasRespostas.forEach(function(item){
    //escuta o evento que está acontecedo com o item e executa a função
    item.addEventListener('click', function(){
    //verificar se a pergunta clicada foi ativa
        const estaAtivo = item.classList.contains('ativo')

    // se a pergunta não está ativa
        if(!estaAtivo){
             //abrir a resposta atual, mas eu preciso fechar todas
             itemsPerguntasRespostas.forEach(function(item){
                 item.classList.remove('ativo')
             })

            //abrir resposta atual 
            item.classList.add('ativo')
        }
       

    // se a pergunta estiver ativa
        //desativar[remover a classe ativa]
    })
})

