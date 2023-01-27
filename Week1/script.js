let recipeList=document.querySelector('ol li')

let recipeStep=1;
for (let step of recipeList) {
    let span = document.createElement('span');
    let checkbox=document.createElement('input');
    checkbox.className='checked';
    span.id=`step -${recipeStep}`;
    checkbox.type='checkbox';
    checkbox.name='step';
    checkbox.value=step.textContent;

    span.textContent= step.textContent;

    step.textContent="";
    step.appendChild(span);
    span.prepend(checkbox)
    recipeStep += 1;
}
