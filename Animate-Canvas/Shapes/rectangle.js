window.addEventListener("DOMContentLoaded", (event )=>{
    
    
    var canvas = document.getElementById("rectangle");
    
            if(canvas.getContext)
            {
                var ctx = canvas.getContext("2d");
            }
        
        else
            {
                alert(" Le canvas ID : rectangle, n'est pas supporté pas votre navigateur.")
            }
    
    function rectangleDraw(param){
        
        

        
        var firstParam = param;
        
        var percents = param * 2 /100;
        
        ctx.beginPath();
        
        ctx.moveTo(param,percents * 150);
        
        ctx.lineTo(param,percents * 35)
        ctx.lineTo(percents * 250,percents * 35)
        ctx.lineTo(percents * 250,percents * 150)
        ctx.lineTo(param,percents * 150)
        
        
        ctx.stroke();
        
    }
    
    rectangleDraw(16);
})