function recarregar(){
    window.location.reload(true);
}

document.body.addEventListener('click', (e)=>{
    let checkbox = e.target;

    
    if (checkbox.classList.contains('hidden') && !checkbox.classList.contains('box')){
        
        checkbox.classList.toggle('view');

        if (!checkbox.classList.contains('star')){
        
            let destaque = checkbox.parentNode.parentNode.parentNode.parentNode;

            if (!destaque.classList.contains('destaque')){
                destaque.classList.add('destaque')
            } else {
                destaque.classList.remove('destaque')
            }
        }
    }
})


function swithHiddenAll(){
    let checkbox = document.querySelectorAll('.hidden')
    
    checkbox.forEach((e)=>{

        if (!e.classList.contains('hid')){
            if (!e.classList.contains('star')){
                e.classList.add('view');
                
                e.classList.add('hid')
    
                if (!e.classList.contains('box')){
                    let pai = e.parentNode.parentNode.parentNode.parentNode;

                    pai.classList.add('destaque')
                }
            }
        } else {
            let pai = e.parentNode.parentNode.parentNode.parentNode;

            e.classList.remove('view')
            pai.classList.remove('destaque')
            e.classList.remove('hid')
        }
    });
}