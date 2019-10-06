$(document).ready(function(){
    $('.go_to').click( function(){ 
    var scroll_el = $(this).attr('href'); 
    if ($(scroll_el).length != 0) { 
    $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 500); 
    }
    return false; 
    });
    });

    /* $(document).ready(function () {
        $('.kar').click(function(){ 
          $(this).attr("style","border: 1px dotted #F0F0F0;");
         });
       }); */