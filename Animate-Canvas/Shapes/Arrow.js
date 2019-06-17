window.addEventListener("DOMContentLoaded", (event )=>{
    
    
    var canvas = document.getElementById("arrow");
    
    function arrowDraw(param){
        
        
        if(canvas.getContext)
            {
                var ctx = canvas.getContext("2d");
            }
        
        else
            {
                alert(" Le canvas ID : arrow, n'est pas supporté pas votre navigateur.")
            }
        
                
        var firstParam = param;
        var secondParam = param * 3;
        
        var percentsFirst = param / 100;
        var percentsSecond = secondParam / 100;
        
        ctx.beginPath();
        
        ctx.moveTo(param,secondParam); // Starter = param1 conserve default, conserve default param2
        
        var firstParam = param;
        var secondParam = param * 3;
        
        var percentsFirst = param / 100;
        var percentsSecond = secondParam / 100;
        
        console.log()
        
        
        ctx.lineTo(firstParam, secondParam - percentsSecond * 10) // param1 = starter,  param2 egal starter -10%
        ctx.lineTo(firstParam + percentsFirst * 50,secondParam - percentsSecond * 10) // param1  = default + 50%
        ctx.lineTo(firstParam + percentsFirst * 50,secondParam - secondParam / 6) // param 2 - Approx 8%
        ctx.lineTo(firstParam + percentsFirst * 90,secondParam - percentsSecond * 5) //Param1 = default + 90% Param 2 = default + 6%
        ctx.lineTo(firstParam + percentsFirst * 50,secondParam + percentsSecond * 6.33) // param 1 : Return by default + 18%
        ctx.lineTo(firstParam + percentsFirst * 50, secondParam) // param1 = default + 50%
        ctx.lineTo(firstParam,secondParam)// param1 = default , param2 = movetoInit
        
        ctx.fill();
        
        ctx.stroke();
        
    }
    
    arrowDraw(90);
})