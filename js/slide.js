$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});

$('.slide_product').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    // autoplay:true,
    // autoplayTimeout:3000,
    // autoplayHoverPause:false,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:2
        },
        700:{
            items:2
        },
        800:{
            items:3
        },
        900:{
            items:4
        },
        1000:{
            items:5
        }
    }
});


