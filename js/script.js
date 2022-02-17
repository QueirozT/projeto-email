// Load da página

var timeLoad = 0;

window.onload = timeLoad = performance.now()

setTimeout(() => {

    let browser = document.querySelector('#browser')
    let animation = document.querySelector('#animacao')

    browser.classList.add('browserLoad')
    animation.classList.add('animUnload')
    
    console.log(`Tempo até o chamado do timeout: ${Number(performance.now()/1000).toFixed(2)}s`)
}, 6000 + timeLoad)



// Barra de Pesquisa.

document.addEventListener('input', () => {

    let barra = document.querySelector('#buscar')

    let content = document.querySelectorAll('.mensagem')

    if (barra.value.length != 0) {

        content.forEach((e)=>{
            
            if (!e.innerHTML.includes(barra.value)) {
                
                e.setAttribute('style', 'display: none')
            } else {
                
                e.removeAttribute('style')
            }
        })

        quantidadeDeEmails()
    }else {
        
        content.forEach((e)=>{
            e.removeAttribute('style')
        })

        quantidadeDeEmails()
    }
})



// Script de Seleção das mensagens.

let selecionarTodas = document.querySelector('#selecionar-todos')

let todas = document.querySelectorAll('.selecionar')

let target;

document.addEventListener('click', (e) => {

    target = e.target
    

    // Selecionar Todas
    if (target == selecionarTodas) {    
        
        if (!target.classList.contains('selecionados')) {
            
            target.classList.add('selecionados')
            target.classList.remove('parcialmenteSelecionados')
        } else {
            
            target.classList.remove('selecionados')
            target.classList.remove('parcialmenteSelecionados')
        }

        todas.forEach((e) => {

            
            let pai = e.parentElement;

            if (!e.classList.contains('todosSelecionados')) {

                e.classList.add('todosSelecionados')
                e.classList.add('selecionado')
                
                pai.classList.add('marcado')

            } else {

                e.classList.remove('todosSelecionados')
                e.classList.remove('selecionado')

                
                pai.classList.remove('marcado')
            }        
        })
    }


    // Selecionar Uma
    if (target.classList.contains('selecionar')) {

        let pai = target.parentElement;

        if (!target.classList.contains('selecionado')) {

            target.classList.add('selecionado')
            
            pai.classList.add('marcado')

            checar()
        } else {

            target.classList.remove('selecionado')
            
            pai.classList.remove('marcado')
            
            checar()
        }
    }



    // Adicionar Estrelas
    if (target.classList.contains('estrela')) {

        if (!target.classList.contains('estrelaMarcada')) {

            target.classList.add('estrelaMarcada')

            let filho = target.childNodes[0]
            filho.innerText = 'Com Estrela'
            
            checarEstrelas()
        } else {

            target.classList.remove('estrelaMarcada')

            let filho = target.childNodes[0]
            filho.innerText = 'Sem Estrela'

            checarEstrelas()
        }
    }



    // Marcar Importante
    if (target.classList.contains('importante')) {

        if (!target.classList.contains('importanteMarcado')) {

            target.classList.add('importanteMarcado')

            let filho = target.childNodes[0]
            filho.innerText = 'Importante'
        } else {

            target.classList.remove('importanteMarcado')

            let filho = target.childNodes[0]
            filho.innerText = 'Marcar como Importante'
        }
    }
})



// Logica da seleção
function checar() {
        
    let totalSelecionado = 0;

    todas.forEach((e) => {
        
        if (e.classList.contains('selecionado')){
            totalSelecionado ++
        }
    })

    if (todas.length == totalSelecionado) {

        selecionarTodas.classList.add('selecionados')
        selecionarTodas.classList.remove('parcialmenteSelecionados')

        todas.forEach((e) => {
            e.classList.add('todosSelecionados')
        })
    } else if (totalSelecionado == 0) {

        selecionarTodas.classList.remove('selecionados')
        selecionarTodas.classList.remove('parcialmenteSelecionados')

        todas.forEach((e)=>{
            e.classList.remove('todosSelecionados')
        })
    } else {

        selecionarTodas.classList.add('parcialmenteSelecionados')
    }
}



// Logica das Estrelas
function checarEstrelas() {
    
    let todasEstrelas = document.querySelectorAll('.estrela')

    let exibirComEstrelas = document.querySelector('#estrelas')


    let estrelasSelecionadas = 0;

    todasEstrelas.forEach((e) => {

        if (e.classList.contains('estrelaMarcada')) {
            estrelasSelecionadas ++
        }
    })

    if (estrelasSelecionadas > 0) {

        exibirComEstrelas.classList.add('contagem')

        exibirComEstrelas.setAttribute('data-content', `${Number(estrelasSelecionadas)}`)
    } else {

        exibirComEstrelas.classList.remove('contagem')
    }

}



// Quantidade de Emails

quantidadeDeEmails()

function quantidadeDeEmails() {
    let emails = document.querySelector('#emails')

    let mensagens = document.querySelectorAll('.mensagem')

    let informacao = document.querySelector('#informacao p')

    let quantidade = 0;

    mensagens.forEach((e) => {
        if (!e.hasAttribute('style')){

            quantidade ++
        }
    })

    if (quantidade > 0) {

        informacao.innerText = `1-${quantidade} de ${mensagens.length}`
    } else if (quantidade == 0) {
        
        informacao.innerText = `0-${quantidade} de ${mensagens.length}`
    }
}



// Botão de Reload
let recarregar = document.querySelector('#recarregar')

recarregar.addEventListener('click', ()=>{
    
    window.location.reload(true)
})