$(function() {
    $('.slider-ch').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        variableWidth: true,
        appendArrows: '.slider-arrows',
        prevArrow: '<div class="slider-arrows__arrow prev"><svg xmlns="http://www.w3.org/2000/svg" width="14.185" height="11.185" viewBox="0 0 14.185 11.185"><path id="Path_6" data-name="Path 6" d="M9.772,15.3,8.593,16.478,3,10.886,8.593,5.293,9.772,6.472l-3.58,3.58H17.185v1.668H6.192Z" transform="translate(-3 -5.293)" fill="#8a91a1"/></svg></div>',
        nextArrow: '<div class="slider-arrows__arrow next"><svg xmlns="http://www.w3.org/2000/svg" width="14.185" height="11.185" viewBox="0 0 14.185 11.185"><path id="Path_6" data-name="Path 6" d="M9.772,15.3,8.593,16.478,3,10.886,8.593,5.293,9.772,6.472l-3.58,3.58H17.185v1.668H6.192Z" transform="translate(-3 -5.293)" fill="#8a91a1"/></svg></div>',
        responsive: [{
                breakpoint: 1160,
                settings: {
                    variableWidth: false
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    variableWidth: false,
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 768,
                settings: {
                    variableWidth: false,
                    slidesToShow: 2
                }
            }
        ]
    });

    $(".message__esc").on("click", function() {
        $(this).closest(".message").removeClass("open")
    });
});