let catalogue = document.getElementById("catalogue")
let menu = document.getElementById("menu")
catalogue.onclick=function(){
    menu.classList.add("ulShow")
}
window.onclick=function(event){
    if(event.target.id !="catalogue"){
        menu.classList.remove("ulShow")
     
    }
}