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
    }else {
        
        content.forEach((e)=>{
            e.removeAttribute('style')
        })
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

            if (!e.classList.contains('todosSelecionados')) {

                e.classList.add('todosSelecionados')
                e.classList.add('selecionado')
            } else {

                e.classList.remove('todosSelecionados')
                e.classList.remove('selecionado')
            }        
        })
    }


    // Selecionar Uma
    if (target.classList.contains('selecionar')) {

        if (!target.classList.contains('selecionado')) {

            target.classList.add('selecionado')
            
            checar()
        } else {

            target.classList.remove('selecionado')
            
            checar()
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

        console.log('todas selecionadas')

        selecionarTodas.classList.add('selecionados')
        selecionarTodas.classList.remove('parcialmenteSelecionados')

        todas.forEach((e) => {
            e.classList.add('todosSelecionados')
        })
    } else if (totalSelecionado == 0) {
        
        console.log('nenhuma selecionada')

        selecionarTodas.classList.remove('selecionados')
        selecionarTodas.classList.remove('parcialmenteSelecionados')

        todas.forEach((e)=>{
            e.classList.remove('todosSelecionados')
        })
    } else {
        console.log('parcialmente selecionado')
        selecionarTodas.classList.add('parcialmenteSelecionados')
    }
}