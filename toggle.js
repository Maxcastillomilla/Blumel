
let menu =  document.getElementById('togglemenu')
let changeIcon = function(icon){
    if(menu.classList.contains('fa-bars')){
        menu.classList.remove( 'fa-bars' )
    menu.classList.add( 'fa-times' )
    }
    else{
        menu.classList.remove( 'fa-times' )
        menu.classList.add( 'fa-bars' )
    }
    
   /*  menu.classList.toggle('fa-times')
    console.log('cambio')
    console.log(menu) */
}

console.log('hola')