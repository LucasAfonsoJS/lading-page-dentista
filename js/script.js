$(function(){
    
    //EVENTO DE CLICK QUE DESCE O MENU MOBILE
    $('.menu-mobile').click(function(){
        $(this).find('ul').slideToggle();
    })
    //EVENTO DO SCROLLTOP
    $('nav a').click(function(){
        let href = $(this).attr('href');
        let offSetTop = $(href).offSet().top;

        $('html,body').animate({'scrollTop':offSetTop});
        
        return false;
    })

})