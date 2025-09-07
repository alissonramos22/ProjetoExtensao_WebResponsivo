document.querySelectorAll('.menu-item').forEach(menu => {
    menu.addEventListener('click',()=>{
        document.getElementById(menu.getAttribute('box')).scrollIntoView({behavior:"smooth"})
    })
})


document.querySelector('.content').addEventListener('scroll', () => {
    document.querySelectorAll('.content-box').forEach(box => {
        let rect = box.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
            document.querySelectorAll(`.menu-item`).forEach( menu => {
                menu.classList.remove('selected-menu');
            })
            document.querySelector(`.menu-item[box=${box.id}`).classList.add('selected-menu');
        }
    })
})

document.querySelectorAll('.content-box').forEach(box => {
    box.addEventListener('scroll', () =>{
        let rect = box.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
        
            document.querySelector(`.menu-item[box=${box.id}`).classList.add('selected-menu');
        }
    })
})

document.querySelectorAll('.person').forEach(person => {
    let func = () =>{
        document.querySelectorAll('.person-detail').forEach(detail => {
            if (detail.id == person.getAttribute('person')){
                detail.classList.remove('hidden');
            }else{
                detail.classList.add('hidden');
            }
        })
        document.querySelectorAll('.person').forEach(personA => {
            personA.classList.remove('selected')
        })
        person.classList.add('selected')     
    }

    person.addEventListener('mouseover',()=>{func()})
    person.addEventListener('click',()=>{func()})
})

document.querySelectorAll('.submenu-item').forEach(menu => {
    let func = () =>{
        document.querySelectorAll('.section').forEach(section => {
            if (section.id == menu.getAttribute('section')){
                section.classList.remove('hidden');
            }else{
                section.classList.add('hidden');
            }
        })
        document.querySelectorAll('.submenu-item').forEach(menuA => {
            menuA.classList.remove('selected-menu')
        })
        menu.classList.add('selected-menu')
    }

    menu.addEventListener('mouseover',()=>{func()})
    menu.addEventListener('click',()=>{func()})
})

document.getElementById('contact-email').addEventListener('change', email => {
    /*validação gerada usando IA.
        - estilização ajutada manualmente
    */ 
    const emailValue = email.target.value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!emailRegex.test(emailValue)) {
        email.target.setCustomValidity('Por favor, insira um e-mail válido.');
        email.target.classList.add('invalid');
    } else {
        email.target.setCustomValidity('');
        email.target.classList.remove('invalid');
    }
    email.target.reportValidity();
})


document.querySelectorAll('.contactform').forEach(input => {
    if (input.id !== 'contact-email') {
        input.addEventListener('change', () => {
            if (input.value !== "") {
                input.classList.remove('invalid');
            }
        });
    }
});

document.getElementById('contact-btn').addEventListener('click', button => {
    let valid=true;
    document.querySelectorAll('.contactform').forEach(input => {
        if (input.value == ""){
            input.classList.add('invalid')
        }
    })
    /*verifica se tem campos preenchidos errados*/
    const invalidos=document.querySelectorAll('.invalid');
    if (invalidos.length>0){
        button.target.setCustomValidity('Campos obrigatórios não estão preenchidos corretamente');
        valid=false;
    }else{
        button.target.setCustomValidity('');
    }
    button.target.reportValidity();

    if (valid){
        alert('E-mail enviado com sucesso!');
        clearForm();
    }
})

function clearForm(){
    document.querySelectorAll('.contactform').forEach(input => {
      input.value="";
    }) 
}