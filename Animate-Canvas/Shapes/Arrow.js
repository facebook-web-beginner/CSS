window.addEventListener("DOMContentLoaded", (event )=>{
    
    
    var canvas = document.getElementById("arrow");
    
    function arrowDraw(){
        
        
        if(canvas.getContext)
            {
                var ctx = canvas.getContext("2d");
            }
        
        else
            {
                alert(" Le canvas ID : arrow, n'est pas supporté pas votre navigateur.")
            }
        
        ctx.beginPath();
        
        ctx.moveTo(50,150);
        
        ctx.lineTo(50,135)
        ctx.lineTo(75,135)
        ctx.lineTo(75,125)
        ctx.lineTo(95,142.50)
        ctx.lineTo(75,159.50)
        ctx.lineTo(75,150)
        ctx.lineTo(50,150)
        
        
        ctx.stroke();
        
    }
    
    arrowDraw();
})