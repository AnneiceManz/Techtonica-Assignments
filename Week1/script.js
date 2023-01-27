const colorChange = document.getElementById('ingredients');

colorChange.addEventListener('mouseover', (event)=> {
    event.target.style.color = "cyan";
    setTimeout(()=> {
        event.target.style.color="";
    }, 500)
}, false)