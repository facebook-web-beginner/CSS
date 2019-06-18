

window.addEventListener("DOMContentLoaded", (event )=>{
    
    function trianglesDraw(param) {
  
        var canvas = document.getElementById('triangle');
  
        if (canvas.getContext) {
    
            var ctx = canvas.getContext('2d');

            // Triangle plein
    
            ctx.beginPath();
    
            var initVal = param;
            
            var initPercents = param * 4 / 100
            
            
            ctx.moveTo(param, param);
    
            ctx.lineTo(initPercents * 105, param);
    
            ctx.lineTo(param, initPercents * 105);
    
            ctx.fill();

            // Triangle filaire
    
            ctx.beginPath();
    
            ctx.moveTo(initPercents * 125, initPercents * 125);
    
            ctx.lineTo(initPercents * 125, initPercents * 45);
    
            ctx.lineTo(initPercents * 45, initPercents * 125);
    
            ctx.closePath();
    
            ctx.stroke();
  }
}

trianglesDraw(25);

})