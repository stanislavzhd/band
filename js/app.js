document.body.onload = function () {

    setTimeout(function () {
        let preloader = document.getElementById("page-preloader");
        if (!preloader.classList.contains("done")) {
            preloader.classList.add("done")
        }
    }, 1500);
};

$('.gw-slider').slick();

$('.gw-tours-slider').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 3
            }
        },
        {
            breakpoint: 480,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
            }
        }
    ]
});