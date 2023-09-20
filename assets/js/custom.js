window.addEventListener('scroll', function () {
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
});

jQuery(window).resize(function () {
    var width = jQuery(window).width();
    if (width < 992) {
        //console.log('okay');
        window.addEventListener('scroll', function () {
            let header = document.querySelector('header');
            header.classList.remove('sticky', window.scrollY > 0);
        });
    }
});


//header sticky menu
//mob menu section
jQuery(".mob-menu-img").on('click', function () {
    jQuery(".mob-menu-wrap").addClass('model-open');
    jQuery("#hidden-search-box-mob").css('display', 'none');
});
jQuery(".menu-cross-sec").click(function () {
    jQuery(".mob-menu-wrap").removeClass('model-open');
});
//mob menu section
//lightbox popup section
jQuery(".example-image-link, .img-fluid").on('click', function () {
    jQuery("body").addClass('lightbox-body');
});
// jQuery("#lightbox, .lb-close").click(function(){
//     jQuery("body").removeClass('lightbox-body');
// });


jQuery("#lightbox, .lb-close").click(function () {
    console.log('hi');
    alert('hello')
    jQuery("body").removeClass('lightbox-body');
});

jQuery(document).on('click', '.btn-close', function (event) {
    jQuery("body").removeClass('lightbox-body');
});
//lightbox popup section
//browse button effect
jQuery('.browse-website-btn').on('click', function () {
    jQuery('.browse-website-box').fadeToggle("slow");
});
//browse button effect


jQuery(document).ready(function () {

    jQuery(".mob-cont-menu").click(function () {

        jQuery(".menu-cross-sec").trigger('click');

    });
    jQuery(".mob-browse-btn").click(function () {

        jQuery(".menu-cross-sec").trigger('click');

    });

});
// new dropdown menu section
jQuery('header ul li.dropdown').hover(
    function () { jQuery(this).addClass('show') },
    function () { jQuery(this).removeClass('show') }
)

// new dropdown menu for mobile section

jQuery(".mob-menu-ul li:nth-child(3).dropdown").click(function () {
    jQuery(".mob-menu-ul li:nth-child(3).dropdown ul.sub-menu").slideToggle();
    jQuery(".mob-menu-ul li:nth-child(4).dropdown ul.sub-menu").slideUp();
});

jQuery(".mob-menu-ul li:nth-child(4).dropdown").click(function () {
    jQuery(".mob-menu-ul li:nth-child(4).dropdown ul.sub-menu").slideToggle();
    jQuery(".mob-menu-ul li:nth-child(3).dropdown ul.sub-menu").slideUp();
});
// new dropdown menu section

jQuery('#show-search-box').click(function () {
    jQuery("#hidden-search-box").slideToggle();
});


jQuery('#show-search-box-mob').click(function () {
    jQuery("#hidden-search-box-mob").slideToggle();
});

//home banner
jQuery('#home-banner').owlCarousel({
    loop: true,
    margin: 0,
    nav: false,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: false,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
})
//home banner

//home product
jQuery(document).ready(function () {
    jQuery('.home-product-carousel').owlCarousel({
        loop: true,
        margin: 30,
        nav: true,
        responsive: {
            0: {
                items: 1,
                margin: 0
            },
            575: {
                items: 2,
                margin: 20
            },
            768: {
                items: 2.8,
                margin: 20
            },
            1120: {
                items: 3.4,
                margin: 30
            }
        }

    });
    jQuery('a[data-toggle="pill"]').on('shown.bs.tab', function (e) {
        e.target // newly activated tab
        e.relatedTarget // previous active tab
        jQuery(".owl-carousel").trigger('refresh.owl.carousel');
    });
});


//home product

// Product details page product slider start
jQuery(document).ready(function () {
    jQuery('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav'
    });
    jQuery('.slider-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: false,
        arrows: true,
        centerMode: false,
        focusOnSelect: true,
        verticalSwiping: true,
        vertical: true,
        centerPadding: 0,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    verticalSwiping: false,
                    vertical: false,
                    dots: true,
                    arrows: false,
                }
            }
        ]
    });
});

// Product details page product slider end

// Product details order button

jQuery('.product-category_btn .common-btn').on('click',function(){
    jQuery(this).addClass('active-btn').siblings().removeClass('active-btn');;
})

jQuery('#consumer-btn').on('click',function(){
    jQuery('.category_button-inline').hide();
    jQuery('.category_button-single').show();
})

jQuery('#industrial-btn').on('click',function(){
jQuery('.category_button-inline').show();
jQuery('.category_button-single').hide();
}) 

// milestone slide start

$(".loading-bar").slick({
    centerMode: false,
    dots: false,
    infinite: false,
    arrows: true,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 1,
    focusOnSelect: true,
    asNavFor: ".labels",
    responsive: [
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }

    ]
});

$(".labels").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    infinite: false,
    fade: true,
    draggable: false,
    swipe: false,
    touchMove: false,
    asNavFor: ".loading-bar"
});

$('.timeLine_slider').slick({
    dots: true,
    infinite: false,
    speed: 300,
    // margin:30,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }

    ]
});

// milestone slide end

// For media video

$('.video-modal').on('hide.bs.modal', function () { var memory = $(this).html(); $(this).html(memory); })

// Custom file upload

$(".custom-file").on("change", ".file-upload-field", function(){ 
    $(this).parent(".file-upload-wrapper").attr("data-text",         $(this).val().replace(/.*(\/|\\)/, '') );
});

