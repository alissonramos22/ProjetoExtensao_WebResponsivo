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

