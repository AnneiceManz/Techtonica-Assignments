//Function to change color of Ingredients list on mouse over.
const colorChange = document.getElementById('ingredientList');

colorChange.addEventListener('mouseover', (event)=> {
    event.target.style.color = "black";
    setTimeout(()=> {
        event.target.style.color="";
    }, 500)
}, false)

//Yummy button displays yummy picture
function displayYummy() {
    let sourcePic1= "https://latamlist.com/wp-content/uploads/2021/11/BB01DF63-9641-48A4-882F-D19F21FBF7F6.png";
    let yummyImg= document.getElementById('yummyImg');
    yummyImg.src=sourcePic1.replace('90x90', '225x225');
    yummyImg.style.display= "block"
}
//Yummy button event listener
document.getElementById('yummyButton').addEventListener('click', displayYummy)

//Cheers button displays cheers picture
function displayCheers() {
    let sourcePic1= "https://www.citypng.com/public/uploads/small/116386969750vrd7khwlsnv9osxjyxc90ftnwijisvpofhuab7h9mgo3uqyseqb5c9jhfylygpppphcnigua1qfhinmfgoqzj0re8pal6yul4cw.png";
    let yummyImg= document.getElementById('cheersImg');
    cheersImg.src=sourcePic1.replace('90x90', '225x225');
    cheersImg.style.display= "block"
}
//Cheers button event listener
document.getElementById('cheersButton').addEventListener('click', displayCheers)