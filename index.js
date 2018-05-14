
const heading = document.querySelector('#heading2')
const button=document.querySelector('button')
const changeText = function(changeHeading){
    heading.textContent="U mad bro?!"
   }

button.addEventListener('click', changeText)


