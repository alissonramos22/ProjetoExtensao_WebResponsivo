document.querySelectorAll('.menu-item').forEach(menu => {
    menu.addEventListener('click',()=>{
        document.getElementById(menu.getAttribute('box')).scrollIntoView({behavior:"smooth"})
    })
})