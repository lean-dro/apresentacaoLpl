// index JS
// Vars
divAnim = document.getElementById("divAnim")
btForm = document.getElementById("btForm")

// onClick
btForm.onclick = function(){
    slideAnim()
    //Esperar 1s de anim e abrir a página do forms
    /*setTimeout(function(){
        window.location.href = "forms"
    },1000)*/
}

// Func Anim
function slideAnim(){
    divAnim.style.transform = 'translateX(100%)'
}
