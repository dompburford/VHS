$( document ).ready(function() {
    
    $(".still").mouseover(function(){

        // $("#tape").mousedown(function(e){ e.preventDefault(); });
    
        $(".vhsone").fadeIn(100);
        setTimeout(function() { $(".a").fadeIn(1400); }, 1000);
        setTimeout(function() { $(".a").fadeOut(900); }, 8270);
        
        
        setTimeout(function() { $(".vhstwo").fadeIn(500); }, 8800);
        $(".still").fadeIn(0);

        setTimeout(function() { $(".vhsone").fadeOut(10); }, 10500);
        setTimeout(function() { $(".vhstwo").fadeOut(10); }, 10500);

        var gifSource = $('.vhsone').attr('src'); 
        $('.vhsone').attr('src', ""); 
        $('.vhsone').attr('src', gifSource+"?"+new Date().getTime()); 
    
        var gifSource = $('.vhstwo').attr('src'); 
        $('.vhstwo').attr('src', ""); 
        $('.vhstwo').attr('src', gifSource+"?"+new Date().getTime()); 

        var gifSource = $('.a').attr('src'); 
        $('.a').attr('src', ""); 
        $('.a').attr('src', gifSource+"?"+new Date().getTime()); 
          
        // setTimeout(function() { $("#tape").unbind('mousedown'); }, 8900);

    });

    document.getElementById("tape").addEventListener("dragstart", function(e) {
        e.dataTransfer.setDragImage(img, 0, 200);
    }, false);
         var img = document.createElement("img");
         img.src = "https://i.imgur.com/FLqpRMq.png";


    $(".vhsone, .vhstwo, .a, .b, .c, .d, .e, .f, .still").mousedown(function(){
      return false;
    });


});


