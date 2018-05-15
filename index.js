
function submitName(){
    const t = document.querySelector('.second')
  const name = document.getElementById("text").value
  //console.log("yo---" + name)

  t.textContent = name
}

const button = document.querySelector('button')
button.addEventListener('click',submitName)
