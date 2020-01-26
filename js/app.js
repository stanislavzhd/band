document.body.onload = function () {

    setTimeout(function () {
        let preloader = document.getElementById("page-preloader");
        if (!preloader.classList.contains("done")) {
            preloader.classList.add("done")
        }
    }, 1500);
};

$('.gw-slider').slick({
    slidesToShow: 1,
    infinite: true,
    prevArrow: "<img src='images/left_arrow.png' class='prev' alt='1'>",
    nextArrow: "<img src='images/right_arrow.png' class='next' alt='2'>",
});

let filter = $("[data-filter]");
filter.on("click", function () {

    let cat = $(this).data("filter");

    $("[data-cat]").each(function () {

        let workCat = $(this).data("cat");

        if (workCat != cat) {
            $(this).addClass("hide");
        } else {
            $(this).removeClass("hide");
        }
    })
});

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