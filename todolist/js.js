const button = document.querySelector('.button-task')
const input = document.querySelector('.input-task')
const listaCompleta = document.querySelector('.lista')

let minhaLista = []

function AddNovaTarefa(){
    //console.log(input.value)
    minhaLista.push({
        tarefa: input.value,
        concluido: false
    })
    //push: add valor no próximo índice do array
    
    input.value =''
    mostrarTarefas();

}

function mostrarTarefas(){

    let novaLi = ''
    //pode ser add qualquer nome dentro do '()'
    // 'posicao' foi adicionado depois para pegar as posições após o evento de click
    minhaLista.forEach((item, posicao) => {
        novaLi += `
            <li>
                <button class="button1" onclick="finalizarTarefa(${posicao})" >ok</button>
                <p>${item.tarefa}</p>
                <button class="button1" onclick="deletarTarefa(${posicao})" >Limpar</button>
            </li>
        `;
    }) //pode ser add qualquer nome dentro do '()'

    listaCompleta.innerHTML = novaLi
}

function finalizarTarefa(posicao){
    alert(posicao)
    minhaLista[posicao].concluido = !minhaLista[posicao].concluido

}

function deletarTarefa(posicao){
    alert(posicao)
    minhaLista.splice(posicao,1) //deleta items em determinadas posições do array - identificar posição e o numero de posições que serão deletados
    mostrarTarefas()
}

button.addEventListener('click', AddNovaTarefa) //Não colocar o '()' da função