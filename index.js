$(document).ready(function(){
    $("li").each(function(){
        $(this).click(function(){
            console.log(this)
            if ($(this).hasClass("A")){
                window.scrollTo({
                    top:500,
                    behavior:"smooth"
                })
            }else if($(this).hasClass("active")){
                window.scrollTo({
                    top:3,
                    behavior:"smooth"
                })
            }else if($(this).hasClass("B")){
                window.scrollTo({
                    top:1000,
                    behavior:"smooth"
                })

            }else if($(this).hasClass("C")){
                window.scrollTo({
                    top:1500,
                    behavior:"smooth"
                })

            }else{

                window.scrollTo({
                    top:2000,
                    behavior:"smooth"
                })
            }
        })
        
    });
    $(".active").addClass("back")
    let isHalf;
    $(window).scroll(function(){
        $("[id]").each(function(currentid){
            const slideNot = (window.scrollY + window.innerHeight) - this.offsetHeight /2
             isHalf = slideNot  > this.offsetTop  
                if(isHalf){
                    $("li").each(function(current){
                        if(current == currentid){
                            $(this).addClass("back")
                        }else{
                            $(this).removeClass("back")

                        }
                        
                    })
                    
                }

                
        })
        
       
    })
});