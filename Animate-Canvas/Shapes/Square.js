// On attends que le DOM complet sois charger.
window.addEventListener("DOMContentLoaded", (event) => {
    
console.log("DOM entièrement chargé et analysé");
 

var square = document.getElementById("square");

function squareDraw ()
    {
     
        
        if (square.getContext)
        {
    
            var ctx = square.getContext('2d');
        }

        // Si le canvas n'est pas pris en charge on fais un rapport.
        else
        {
            alert(" Le canvas ID : square,  n'est pas pris en charge par votre navigateur.")
        }
        
        
        
        // un carré posé sur X: 25 , Y: 25, avec 90 hauteur, et 90 largeur.
        ctx.strokeRect(25,25,90,90);

        
    }
    
    squareDraw();


 });