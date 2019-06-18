window.addEventListener("DOMContentLoaded", (event )=>{
    
    
    var target = document.getElementById("target");
    var circle = document.getElementById("circle");
    
    var userWidth = prompt("Entrez  un nombre : ")
    
    document.getElementById("target").style.width = userWidth + "px"; 
    document.getElementById("target").style.height = userWidth + "px"; 
    document.getElementById("circle").style.height = userWidth + "px"; 
    document.getElementById("circle").style.height = userWidth + "px"; 
    
    var defaultVal = target.offsetWidth;
    
    var percents = defaultVal / defaultVal
    
    target.addEventListener("click",function(){
      
        
            var defaultVal = target.offsetWidth;
        
        
            if (defaultVal > 600)
                {
                    defaultVal = 150;
                }
        
        
            document.getElementById("target").style.width = String(defaultVal + 20) + "px"; 
            document.getElementById("target").style.height = String(defaultVal + 20)  + "px"; 

    
            var percents = defaultVal / defaultVal
        
        
    })
    
        
    circle.addEventListener("click",function(){
      
        
            var defaultVal = circle.offsetWidth;
        
        
            if (defaultVal > 600)
                {
                    defaultVal = 150;
                }
        
            document.getElementById("circle").style.width = String(defaultVal + 20) + "px"; 
            document.getElementById("circle").style.height = String(defaultVal + 20)  + "px"; 
        
        
            
    
            var percents = defaultVal / defaultVal
        
        
    })
    
    
     // Check for canvas 
    
    if(target.getContext)
        {
            var ctx = target.getContext('2d')
        }
    
    else
        {
            alert(" Le canvas ID : target, n'est pas pris en charge pas votre navigateur.")
        }
    
        if(circle.getContext)
        {
            var ctx2 = circle.getContext('2d')
        }
    
    else
        {
            alert(" Le canvas ID : circle, n'est pas pris en charge pas votre navigateur.")
        }
    
    
    function targetDraw(){

        
        ctx.beginPath();
        
        ctx.moveTo(percents * 150, percents * 150)
                
        // Medium
        ctx.arc(percents * 150, percents * 120, percents * 30, percents * 90, percents * 30, true);
        

        
        ctx.moveTo(percents * 150,percents * 110)
        
        
        // Small
        ctx.arc(percents * 150, percents * 120, percents * 10, percents * 30, percents * 10, true);
        
        
        ctx.moveTo(percents * 120,percents * 172)
        
   
        
        // Large
        ctx.arc(percents * 150, percents * 120, percents * 60, percents * 90, percents * 20, true);
        
        ctx.moveTo(percents * 150, percents * 150)
        
        
        // cross
        ctx.lineTo(percents * 150,percents * 0)
        
        ctx.lineTo(percents * 150,percents * 250)
        
        ctx.moveTo(percents * 150,percents * 120)
        
        ctx.lineTo(0,percents * 120)
        ctx.lineTo(percents * 290,percents * 120)
        
        ctx.stroke();
        
    }
    
    
        function circleDraw(){
        
        
        
        ctx2.beginPath();
        
        ctx2.moveTo(percents * 120, percents * 172)
                

        
   
        
        // Large
        ctx2.arc(percents * 150, percents * 120, percents * 60, percents * 90, percents * 20, true);

        
        ctx2.stroke();
        
    }
    
   
    
    targetDraw()
    circleDraw()
    
})