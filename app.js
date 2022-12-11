$(document).ready(function(){
    //for navbar
    $(window).scroll(function name() {
       if (this.scrollY > 200) {
        $('.navbar').addClass("sticky");
       }else{
           $('.navbar').removeClass("sticky");
       }
       //scroll

       if (this.scrollY > 500) {
           $('.scroll-up-btn').addClass("show");
       }else{
           $('.scroll-up-btn').removeClass("show");
       }
    });

    $('.scroll-up-btn').click(function () {
        $('html').animate({scrollTop:0});
    });

    var typed = new Typed(".typing-1",{
        strings:[
            "Developer", "Learner","Tech Enthusiast",
            "Designer","Freelancer"     
        ],
        typeSpeed: 80,
        backSpeed: 60,
        loop: true
    });
    
    var typed = new Typed(".typing-2",{
        strings:[
            "Developer", "Learner","Tech Enthusiast",
            "Designer","Freelancer"     
        ],
        typeSpeed: 80,
        backSpeed: 60,
        loop: true
    });

    //owl carousel
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        navigation: true,
        autoplay: true,
        autoplayTimeOut: 1000,
        autoplayHoverPause: true,

        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            } 
            
        }
    })
});