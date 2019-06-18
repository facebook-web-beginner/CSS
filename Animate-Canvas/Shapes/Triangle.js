


// On attends que le DOM complet sois charger.
window.addEventListener("DOMContentLoaded", (event) => {
    
console.log("DOM entièrement chargé et analysé");
 

var triangle = document.getElementById("triangle");
    
        if (triangle.getContext)
        {
    
            var ctx = triangle.getContext('2d');
        }

        // Si le canvas n'est pas pris en charge on fais un rapport.
        else
        {
            alert(" Le canvas ID : triangle,  n'est pas pris en charge par votre navigateur.")
        }    

function triangleDraw (param)
    {
     
        

        

                firstParam = param;
        
                secondParam = param * 4
        
                
        
        
                ctx.beginPath();

                ctx.moveTo(firstParam, secondParam);
    
                ctx.lineTo(secondParam, secondParam);
    
                ctx.lineTo(secondParam / 100 * 62, firstParam);
                ctx.lineTo(firstParam, secondParam);
    
                ctx.fill();
                ctx.stroke();
            
        

        
    }
    
    triangleDraw(38);


 });