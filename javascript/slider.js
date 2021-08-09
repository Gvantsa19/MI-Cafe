$(function() {
    $('.multiple-items').slick({
        infinite: true,
        // რამდენი სურათი უნდა გამოჩნდეს
        slidesToShow: 4,
        // სლაიდის დროს რადმენი ელემნტით უნდა აგდავიდეს
        slidesToScroll: 3,
        // რომ გამოჩნდეს ღილაკები _ next and previuos
        arrows: true,
        dots: true,
        //responsive styles
        responsive: [
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true
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
});
