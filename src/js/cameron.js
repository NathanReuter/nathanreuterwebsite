/** *************Init JS*********************

 TABLE OF CONTENTS
 ---------------------------
 1.Load function
 2.Set height-width function
 3.cameron function
 4.MasonryPortfolio function
 5.Ready function
 6.Resize function
 7.LightGallery Init
 8.Availablity Calendar
 ** ***************************************/

"use strict";
/*****Load function start*****/

function calculateBirthday(birthday) {
    var ageDifMs = Date.now() - birthday.getTime(),
        ageDate = new Date(ageDifMs);

    return Math.abs(ageDate.getUTCFullYear() - 1970);
}


function setMyAge($) {
    var age = calculateBirthday(new Date('09/12/1992'));

    $('#myage').text(age);
}

$(window).load(function(){
    if( $('.portfolio-wrap').length > 0 ) {}
        onResizePort();
    $(".preloader-it").delay(500).fadeOut("slow");
    if(window.location.href.indexOf("index.html#") > -1)
        $("html, body").animate({scrollTop: $(window.location.hash).offset().top - 50 }, 800);

    setMyAge($);
});
/*****Load function* end*****/

/***** Set height-width function start *****/
var setHeightWidth = function () {
    var height = $(window).height();
    $('.full-height').css('min-height', (height));
    $('.full-width-header').width($('.main-wrapper').width());
};
/***** Set height-width function end *****/

/***** cameron function start *****/
var cameron = function () {
    /*SmoothScroll*/
    smoothScroll.init({
        speed: 800,
        easing: 'easeInOutCubic',
        offset: 50,
        updateURL: false,
        callbackBefore: function ( toggle, anchor ) {},
        callbackAfter: function ( toggle, anchor ) {},
    });

    /*Scrollspy*/
    var bodySel = $("#body");
    bodySel.scrollspy({ target: ".mdl-scroll-spy-1",offset:52 });
    var scollSpy2ActiveLI = "";
    bodySel.on('activate.bs.scrollspy', function () {
        if (scollSpy2ActiveLI != "") {
            scollSpy2ActiveLI.removeClass('active');
        }
        var activeTab = $('.mdl-scroll-spy-1 li.active a').attr('href');
        scollSpy2ActiveLI = $('.mdl-scroll-spy-2 li a[href="' + activeTab + '"]').parent();
        scollSpy2ActiveLI.addClass('active');
    });
    bodySel.trigger('activate.bs.scrollspy');

    /*Progressbar animation*/
    var progressBar = $('.progress-bar-graph div');
    for(var i = 0; i < progressBar.length; i++){
        $(progressBar[i]).appear(function(){
            var percent = $(this).find('span').attr('data-width');
            var $endNum = parseInt($(this).find('.bar-wrap strong i').text(),10);

            var $that = $(this);
            $(this).find('span').animate({
                'width' : percent + '%'
            },1600, function(){
            });
            $(this).find('.bar-wrap strong').animate({
                'opacity' : 1
            },1400);
            if(percent == '100'){
                $that.find('bar-wrap strong').addClass('full');
            }
        });
    }
};
/***** cameron function end *****/

/***** MasonryPortfolio function start *****/
if( $('.portfolio-wrap').length > 0 ){
    var $container = $('.portf'),
        $body = $('body');



    /*On Resize Portfolio Function*/
    var onResizePort= function() {
        $body.find('.portf').each(function () {
            var winWidth = window.innerWidth;
            var container_mock = $('.gallery-wrap').width();
            columnNumb = 1;
            var attr_col = $(this).attr('data-col');

            if (winWidth >= 1466) {

                $('.portfolio-wrap').css( {width : container_mock});
                $('.portfolio-wrap.no-gutter').css( {width : container_mock});
                $('.portfolio-wrap.no-gutter.full-width').css( {width : 100  + '%'});
                var portfolioWidth = $('.portfolio-wrap').width();

                if (typeof attr_col !== typeof undefined && attr_col !== false) {
                    columnNumb = $(this).attr('data-col');
                } else columnNumb = 3;

                var postWidth = Math.floor(portfolioWidth / columnNumb)
                $(this).find('.item').each(function () {
                    $(this).css( {
                        width : postWidth - 20 + 'px',
                        height : 'auto',
                        margin : 10 + 'px'
                    });
                    $('.no-gutter .'+$(this).attr('class')).css( {
                        width : postWidth  + 'px',
                        height : 'auto',
                        margin : 0 + 'px'
                    });
                    $('.wide.'+$(this).attr('class')).css( {
                        width : postWidth * 2 - 20 + 'px'
                    });
                    $('.no-gutter .wide.'+$(this).attr('class')).css( {
                        width : postWidth * 2 + 'px'
                    });
                    $('.tall.'+$(this).attr('class')).css( {
                        height : 'auto'
                    });
                    $('.small.'+$(this).attr('class')).css( {
                        height : 'auto',
                    });

                    $('.no-gutter .tall.'+$(this).attr('class')).css( {
                        height : 'auto',
                    });
                    $('.wide-tall.'+$(this).attr('class')).css( {
                        width : postWidth * 2 - 20 + 'px',
                        height : postWidth * 2 - 20 + 'px'
                    });
                    $('.no-gutter .wide-tall.'+$(this).attr('class')).css( {
                        width : postWidth * 2 + 'px',
                        height : 'auto',
                    });
                });


            } else if (winWidth > 1024) {

                $('.portfolio-wrap').css( {width : container_mock});
                $('.portfolio-wrap.no-gutter').css( {width : container_mock});
                var portfolioWidth = $('.portfolio-wrap').width();

                if (typeof attr_col !== typeof undefined && attr_col !== false) {
                    columnNumb = $(this).attr('data-col'); //alert(columnNumb);
                } else columnNumb = 3;

                postWidth = Math.floor(portfolioWidth / columnNumb)
                $(this).find('.item').each(function () {

                    $(this).css( {
                        width : postWidth - 20 + 'px',
                        height : 'auto',
                        margin : 10 + 'px'
                    });

                    $('.no-gutter .' +$(this).attr('class')).css( {
                        width : postWidth  + 'px',
                        height : 'auto',
                        margin : 0 + 'px'
                    });
                    $('.wide.'+$(this).attr('class') ).css( {
                        width : postWidth * 2 - 20 + 'px'
                    });
                    $('.no-gutter .wide.'+$(this).attr('class')).css( {
                        width : postWidth * 2 + 'px'
                    });
                    $('.tall.'+$(this).attr('class')).css( {
                        height : 'auto',
                    });
                    $('.small.'+$(this).attr('class')).css( {
                        height : 'auto',
                    });
                    $('.no-gutter .tall.'+$(this).attr('class')).css( {
                        height : 'auto',
                    });
                    $('.wide-tall.'+$(this).attr('class')).css( {
                        width : postWidth * 2 - 20 + 'px',
                        height : 'auto',
                    });
                    $('.no-gutter .wide-tall.'+$(this).attr('class')).css( {
                        width : postWidth * 2 + 'px',
                        height : 'auto',
                    });
                });


            } else if (winWidth > 767) {

                $('.portfolio-wrap').css( {width : container_mock});
                $('.portfolio-wrap.no-gutter').css({width : container_mock});
                var portfolioWidth = $('.portfolio-wrap').width(),

                    columnNumb = 2;
                postWidth = Math.floor(portfolioWidth / columnNumb)
                $(this).find('.item').each(function () {
                    $(this).css( {
                        width : postWidth - 20 + 'px',
                        height : 'auto',
                        margin : 10 + 'px'
                    });
                    $('.no-gutter .'+$(this).attr('class')).css( {
                        width : postWidth  + 'px',
                        height : 'auto',
                        margin : 0 + 'px'
                    });
                    $('.wide.'+$(this).attr('class')).css( {
                        width : postWidth * 2 - 20 + 'px'
                    });
                    $('.no-gutter .wide.'+$(this).attr('class')).css( {
                        width : postWidth * 2 + 'px'
                    });
                    $('.tall.'+$(this).attr('class')).css( {
                        height : 'auto',
                    });
                    $('.small.'+$(this).attr('class')).css( {
                        height : 'auto',
                    });
                    $('.no-gutter .tall.'+$(this).attr('class')).css( {
                        height : 'auto',
                    });
                    $('.wide-tall.'+$(this).attr('class')).css( {
                        width : postWidth * 2 - 20 + 'px',
                        height : postWidth   + 'px',
                    });
                    $('.no-gutter .wide-tall.'+$(this).attr('class')).css( {
                        width : postWidth * 2 + 'px',
                        height : 'auto',
                    });
                });


            }	else if (winWidth > 479) {

                $('.portfolio-wrap').css( {width : container_mock});
                $('.portfolio-wrap.no-gutter').css( {width : container_mock});
                var portfolioWidth = $('.portfolio-wrap').width(),

                    columnNumb = 1;
                postWidth = Math.floor(portfolioWidth / columnNumb)
                $(this).find('.item').each(function () {
                    $(this).css( {
                        width : postWidth - 20 + 'px',
                        height : 'auto',
                        margin : 10 + 'px'
                    });
                    $('.no-gutter .'+$(this).attr('class')).css( {
                        width : postWidth  + 'px',
                        height : 'auto',
                        margin : 0 + 'px'
                    });
                    $('.wide.'+$(this).attr('class')).css( {
                        width : postWidth - 20 + 'px'
                    });
                    $('.no-gutter .wide.'+$(this).attr('class')).css( {
                        width : postWidth + 'px'
                    });
                    $('.tall.'+$(this).attr('class')).css( {
                        height : 'auto',
                    });
                    $('.small.'+$(this).attr('class')).css( {
                        height : 'auto',
                    });
                    $('.no-gutter .tall.'+$(this).attr('class')).css( {
                        height : 'auto',
                    });
                    $('.wide-tall.'+$(this).attr('class')).css( {
                        width : postWidth - 20 + 'px',
                        height : postWidth   + 'px',
                    });
                    $('.no-gutter .wide-tall.'+$(this).attr('class')).css( {
                        width : postWidth  + 'px',
                        height : postWidth   + 'px',
                    });
                });


            }

            else if (winWidth <= 479) {

                $('.portfolio-wrap').css( {width : container_mock});
                $('.portfolio-wrap.no-gutter').css( {width : container_mock});
                var portfolioWidth = $('.portfolio-wrap').width(),

                    columnNumb = 1;
                postWidth = Math.floor(portfolioWidth / columnNumb)
                $(this).find('.item').each(function () {
                    $(this).css( {
                        width : postWidth - 20 + 'px',
                        height : 'auto',
                        margin : 10 + 'px'
                    });
                    $('.no-gutter .'+$(this).attr('class')).css( {
                        width : postWidth  + 'px',
                        height : 'auto',
                        margin : 0 + 'px'
                    });
                    $('.wide.'+$(this).attr('class')).css( {
                        width : postWidth - 20 + 'px'
                    });
                    $('.no-gutter .wide.'+$(this).attr('class')).css( {
                        width : postWidth + 'px'
                    });
                    $('.tall.'+$(this).attr('class')).css( {
                        height : 'auto',
                    });
                    $('.small.'+$(this).attr('class')).css( {
                        height : 'auto',
                    });
                    $('.no-gutter .tall.'+$(this).attr('class')).css( {
                        height : 'auto',
                    });
                    $('.wide-tall.'+$(this).attr('class')).css( {
                        width : postWidth - 20 + 'px',
                        height : postWidth   + 'px',
                    });
                    $('.no-gutter .wide-tall.'+$(this).attr('class')).css( {
                        width : postWidth + 'px',
                        height : postWidth   + 'px',
                    });
                });


            }
            //alert();

            //return columnNumb;
        });
        $container.isotope({
            itemSelector: '.item',
            gutter:0,
            layoutMode: 'packery',
            transitionDuration: "0.8s"
        });
    };
    /*On Resize Portfolio Function*/
}
/***** MasonryPortfolio function End *****/

/*****Ready function start*****/
$(document).ready(function(){
    cameron();
    $('#button-scrolltop').on('click', function () {
        $("html, body").animate({ scrollTop: 0 }, "slow");
    });
});
/*****Ready function end*****/

/***** Resize function start *****/
$(window).on("resize", function () {
    setHeightWidth();
    if( $('.portfolio-wrap').length > 0 )
        onResizePort();
}).resize();
/***** Resize function end *****/

/***** Availablity Calendar End*****/

/***** Setting Panel Start*****/
$(document).on('click', '.setting-btn', function () {
    $(".mdl-layout__drawer-right").addClass("active-drawer-right");
    $(".mdl-layout__obfuscator").addClass("is-visible");
});

$(document).on('click', '.mdl-layout__obfuscator', function () {
    $(".mdl-layout__drawer-right").removeClass("active-drawer-right");
    $(".mdl-layout__drawer").removeClass("is-visible");
    $(".mdl-layout__obfuscator").removeClass("is-visible");
});

window.toogleDarkMode = function () {
    if(!$('.main-wrapper').hasClass('dark-mode')) {
        $('.main-wrapper').addClass("dark-mode");
    } else {
        $('.main-wrapper').removeClass("dark-mode");
    }
};

if($('#switch-3').is(":checked")) {
    $('.mdl-layout__header').addClass("full-width-header");
} else {
    $('.mdl-layout__header').removeClass("full-width-header");
}
$(document).on('change', '#switch-3', function () {
    if($(this).is(":checked")) {
        $('.mdl-layout__header').addClass("full-width-header");
        $('.full-width-header').width($('.main-wrapper').width());
    } else {
        $('.mdl-layout__header').removeClass("full-width-header");
        $('header').css('width', '');
    }
});

$(document).on('click', '#imbg_1', function () {
    $('.bg-img').attr("class","bg-struct bg-img");
});

$(document).on('click', '#imbg_2', function () {
    $('.bg-img').attr("class","bg-struct bg-img").addClass("bg-img-2");
});

$(document).on('click', '#imbg_3', function () {
    $('.bg-img').attr("class","bg-struct bg-img").addClass("bg-img-3");
});

$(document).on('click', '#imbg_4', function () {
    $('.bg-img').attr("class","bg-struct bg-img").addClass("bg-img-4");
});

$(document).on('click', '#pattrnbg_1', function () {
    $('.bg-img').attr("class","bg-struct bg-img").addClass("bg-pattern-1");
});

$(document).on('click', '#pattrnbg_2', function () {
    $('.bg-img').attr("class","bg-struct bg-img").addClass("bg-pattern-2");
});

$(document).on('click', '#pattrnbg_3', function () {
    $('.bg-img').attr("class","bg-struct bg-img").addClass("bg-pattern-3");
});

$(document).on('click', '#pattrnbg_4', function () {
    $('.bg-img').attr("class","bg-struct bg-img").addClass("bg-pattern-4");
});


$(document).on('click', '#abstctbg_1', function () {
    $('.bg-img').attr("class","bg-struct bg-img").addClass("bg-abstract-1");
});

$(document).on('click', '#abstctbg_2', function () {
    $('.bg-img').attr("class","bg-struct bg-img").addClass("bg-abstract-2");
});

$(document).on('click', '#abstctbg_3', function () {
    $('.bg-img').attr("class","bg-struct bg-img").addClass("bg-abstract-3");
});

$(document).on('click', '#abstctbg_4', function () {
    $('.bg-img').attr("class","bg-struct bg-img").addClass("bg-abstract-4");
});

$(document).on('click', '#colorbg_1', function () {
    $('.bg-img').attr("class","bg-struct bg-img").addClass("bg-green");
});

$(document).on('click', '#colorbg_2', function () {
    $('.bg-img').attr("class","bg-struct bg-img").addClass("bg-blue");
});

$(document).on('click', '#colorbg_3', function () {
    $('.bg-img').attr("class","bg-struct bg-img").addClass("bg-violet");
});

$(document).on('click', '#colorbg_4', function () {
    $('.bg-img').attr("class","bg-struct bg-img").addClass("bg-red");
});
$(document).on('click', '#reset', function (e) {
    e.preventDefault();
    $('.bg-img').attr("class","bg-struct bg-img");

    if($('.mdl-switch').is('.is-checked')) {
        $('.mdl-switch.is-checked').click();
        $('.mdl-switch.is-checked').removeClass('is-focused');
        $('mdl-switch__thumb').click();
    }
});
/***** Setting Panel End*****/

