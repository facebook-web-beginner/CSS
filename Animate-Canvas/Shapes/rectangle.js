document.addEventListener("DOMContentLoaded", (event )=>{
    
    
    var canvas = document.getElementById("rectangle");
    
    function rectangleDraw(){
        
        
        if(canvas.getContext)
            {
                var ctx = canvas.getContext("2d");
            }
        
        else
            {
                alert(" Le canvas ID : rectangle, n'est pas supporté pas votre navigateur.")
            }
        
        ctx.beginPath();
        
        ctx.moveTo(50,150);
        
        ctx.lineTo(50,35)
        ctx.lineTo(250,35)
        ctx.lineTo(250,150)
        ctx.lineTo(50,150)
        
        
        ctx.stroke();
        
    }
    
    rectangleDraw();
})