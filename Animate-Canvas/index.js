// On attends que le DOM complet sois charger.
window.addEventListener("DOMContentLoaded", (event) => {
    
console.log("DOM entièrement chargé et analysé");
 

var retro = document.getElementById("retro");

function retroDraw ()
    {
     
        // On vérifie que le canvas est pris en charge par le navigateur
        if (retro.getContext)
        {
            // La méthode getContext permet d'accéder au contexte de rendu, dans notre exemple on spécifie 2d
            var ctx = retro.getContext('2d');
        }

        // Si le canvas n'est pas pris en charge on fais un rapport.
        else
        {
            alert(" Le canvas nommé tutoriel n'est pas pris en charge par votre navigateur.")
        }
        
        // On déclare la couleur rouge pour le canvas
        ctx.fillStyle = 'rgb(200, 0,0)';
        
        // On déclare les dimensions d'un rectangle rempli
        ctx.fillRect(30,30,80,80);
        
        
        // On déclare les dimensions d'un rectangle vide
        ctx.strokeRect(25,25,90,90);

        
    }
    
    retroDraw();


 });