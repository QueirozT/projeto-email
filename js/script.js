function recarregar(){
    window.location.reload();
}

document.body.addEventListener('click', (e)=>{
    let checkbox = e.target;

    if (checkbox.classList.contains('hidden') && !checkbox.classList.contains('box')){
        
        checkbox.classList.toggle('view');

        if (!checkbox.classList.contains('star') && !checkbox.classList.contains('seta')){
        
            let destaque = checkbox.parentNode.parentNode.parentNode.parentNode;

            if (!destaque.classList.contains('destaque')){
            destaque.classList.add('destaque')
            } else if (destaque.classList.contains('destaque')){
                destaque.classList.remove('destaque')
            }
    
            checkBox();
        }
    }
})


function swithHiddenAll(){
    let checkbox = document.querySelectorAll('.hidden')
    
    checkbox.forEach((e)=>{

        if (!e.classList.contains('hid')){
            if (!e.classList.contains('star') && !e.classList.contains('seta')){
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

function checkBox(){
    let checkbox = document.querySelectorAll('.hidden')
    
    let val = 0;

    let count = 0;

    checkbox.forEach((e)=>{

        if (!e.classList.contains('box') && !e.classList.contains('star') && !e.classList.contains('seta') && e.classList.contains('view')){
            val += 1;
        }
    })

    checkbox.forEach((e)=>{

        if (!e.classList.contains('box') && !e.classList.contains('star') && !e.classList.contains('seta')){
            count += 1;
        }
    })


    if (val == 0){
        swithHiddenAll()
    }

    if (val == count){
        swithHiddenAll()
    }
}