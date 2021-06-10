// Vars
var divAnim = document.getElementById("divAnim")
var btForm = document.getElementById("btForm")

// onClick
btForm.onclick = function(){
    slideAnim()
    //Esperar 1s de anim e abrir a página do forms
    setTimeout(function(){
        window.location.href = "Formulario.html"
    },1000)
}

// Func Anim
function slideAnim(){
    divAnim.style.transform = 'translateX(100%)'
}
