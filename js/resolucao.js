var screenWidth = window.innerWidth

if(screenWidth < 795 ){
    var tituloClass = document.getElementsByClassName("titulo")
    var leadClass = document.getElementsByClassName("lead")
    var corpoQClass = document.getElementsByClassName("corpoQ")

    for (var i = 0; i < tituloClass.length; i++) {
        tituloClass[i].style.margin = 0
    }

    for (var i = 0; i < leadClass.length; i++) {
        leadClass[i].style.margin = 0
    }

    for (var i = 0; i < corpoQClass.length; i++) {
        corpoQClass[i].style.margin = 0
        corpoQClass[i].style.transform = "translateY(0)"
        corpoQClass[i].style.transform = "translateX(0)"
    }
}