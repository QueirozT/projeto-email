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


