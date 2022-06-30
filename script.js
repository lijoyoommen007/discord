window.addEventListener('scroll',reveal)

function reveal(){
    var reveals = document.querySelectorAll('.reveal');

    for(var i = 0;i < reveals.length;i++){
        var windowheight=window.innerHeight;
        var revealtop=reveals[i].getBoundingClientRect().top;
        var revealpoint =100;

        if(revealtop<windowheight-revealpoint){
            reveals[i].classList.add('active');
        }
        else{
            reveals[i].classList.remove('active');
        }
    }
}

$(document).ready(function(){
    $(window).scroll(function(){
        if($(this).scrollTop()>200){
           $('#topBtn').fadeIn(); 
        }else{
            $('#topBtn').fadeOut(); 
        }
    })


    $("#topBtn").click(function(){
        $('html ,body').animate({scrollTop : 0},100);
    });
}) ;