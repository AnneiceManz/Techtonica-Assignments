//Function to change color of Ingredients list on mouse over.
const colorChange = document.getElementById('ingredientList');

colorChange.addEventListener('mouseover', (event)=> {
    event.target.style.color = "white";
    setTimeout(()=> {
        event.target.style.color="";
    }, 500)
}, false)

