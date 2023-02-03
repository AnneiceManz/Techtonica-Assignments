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