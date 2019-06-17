


// On attends que le DOM complet sois charger.
window.addEventListener("DOMContentLoaded", (event) => {
    
console.log("DOM entièrement chargé et analysé");
 

var triangle = document.getElementById("triangle");

function triangleDraw ()
    {
     
        
        if (triangle.getContext)
        {
    
            var ctx = triangle.getContext('2d');
        }

        // Si le canvas n'est pas pris en charge on fais un rapport.
        else
        {
            alert(" Le canvas ID : triangle,  n'est pas pris en charge par votre navigateur.")
        }
        

        
        
                ctx.beginPath();

                ctx.moveTo(25, 100);
    
                ctx.lineTo(100, 100);
    
                ctx.lineTo(62, 25);
                ctx.lineTo(25, 100);
    
                ctx.fill();
                ctx.stroke();
            
        

        
    }
    
    triangleDraw();


 });