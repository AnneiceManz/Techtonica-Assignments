document.getElementById("readMore").addEventListener( 'click' , changeClass);

function changeClass() {
  let content = document.getElementById("extraContent");
  let btn = document.getElementById("readMore");
  content.classList.toggle('show');

  if (content.classList.contains("show")) {
      btn.innerHTML = "Show Less";
  } else {
      btn.innerHTML = "Show More";
  }
}

let name= document.getElementById('name');
let email=document.getElementById('email');
let phone=document.getElementById('phone');
let message=document.getElementById('message');

document.getElementById('form').addEventListener('submit', function(event){
    event.preventDefault();
    let alert= "";
    let messageArea=document.getElementById('messageArea');
    alert="Thankn you for your message!"
    messageArea.innerHTML=alert
    console.log(name.value,email.value,phone.value,message.value)
})