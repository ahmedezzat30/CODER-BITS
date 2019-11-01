//scroll by navbar
$(".navbar a").click(function(){
    
    let aHref= $(this).attr("href")
    let scrollOffset =  $(aHref).offset().top;
    $("body,html").animate({scrollTop:scrollOffset},(1000))
})


$(".navbar a").click(function(){
    
   let aHref = $(this).attr("href");
    
    let scrollOffset = $(aHref).offset().top;
    
    ("body,html").animate({scrollTop:scrollOffset},(1000))
    
})


//scroll by navbar




//loading spinner
$(document).ready(function()
                 {
    $(".spinner").css("display","none");
    $("body").css("overflow","auto")
    
})
//loading spinner



$(window).scroll(function(){
    let scrollTop = $(window).scrollTop();
    
    if (scrollTop > 600)
        {
           $(".btnTop").fadeIn(1000) 
        }
    else
        {
            $(".btnTop").fadeOut(1000) 
        }
})


$(".btnTop").click(function(){
    
    $("body,html").animate({scrollTop:0},(2000))
})

