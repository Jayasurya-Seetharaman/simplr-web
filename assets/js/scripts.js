$(window).load(function() {
    $('.pLoader').hide();
    $('body').removeClass('noScroll');
    // $('.rLoader').hide('fade', { direction: 'left' }, 600);
    // $('body').css('overflow','auto');
});

$(".priceDDHead").click(function () {
    $(this).siblings('.priceDDCont').toggle('slide', { direction: 'up' }, 300);
    $('.priceDD').toggleClass('active');    
});

$('.bTxtBox').slick({
    dots: false,
    arrows: false,
    speed: 3500,
    infinite: false,
    autoplay: true,
    slidesToShow: 1,
    vertical: true,
    focusOnSelect: true,
    responsive: [
        {
          breakpoint: 769,
          settings: {
            infinite: true,
            slidesToScroll: 2
          }
        }
    ]
});

$(".bSlider").slick({
    dots: false,
    arrows: false,
    speed: 3500,
    infinite: false,
    autoplay: true,
    slidesToShow: 1
});

var screenWidth = window.innerWidth;
if(screenWidth > 768) {
    $(".tsSlider").slick({
        dots: false,
        arrows: false,
        slidesToShow: 3
    });
    $(".logoSlider").slick({
        dots: false,
        arrows: false,
        slidesToShow: 4    
    });
} else {
    $(".tsSlider").slick({
        dots: false,
        arrows: false,
        slidesToShow: 1
    });
    $(".logoSlider").slick({
        dots: false,
        arrows: false,
        slidesToShow: 2    
    });
}

$(".ffTab .ffMHead .ffMBtn").click(function () {
   $(".ffTab .ffMHead").find(".ffMBtn").removeClass('active');
   $(this).addClass('active');
   $(".ffSHead").children().hide();
   var subHead = $(this).data("subhead");
   $(".ffSHead").children("."+subHead).show();
});
$(".ffTab .ffSHead .ffSBtn").click(function () {
   $('.ffTab .ffSHead').find(".ffSBtn").removeClass('active');
   $(this).addClass('active');
   var subCont = $(this).data("content");
   $(".ffTab .ffCont").children().hide();
   $(".ffTab .ffCont").children("."+subCont).show();
});
// $(".ffTab .ffMHead .ffMBtn:first-child").click();
// $(".ffTab .ffSHead .salesOp .ffSBtn:first-child").click();

$(".activitySlider").slick({
    dots: false,
    arrows: false,
    speed: 2500,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    fade: true
});

$('.winnerSlide').slick({
    dots: false,
    arrows: false,
    infinite: false,
    autoplay: true,
    slidesToShow: 1
});

// var c = document.getElementById('plAnim'),
//     ctx = c.getContext('2d'),
//     cw = c.width = 200,
//         ch = c.height = 200,
//     rand = function(a,b){return ~~((Math.random()*(b-a+1))+a);},
//     dToR = function(degrees){
//         return degrees * (Math.PI / 180);
//     },
//     circle = {
//       x: (cw / 2) + 5,
//       y: (ch / 2) + 22,
//       radius: 63,
//       speed: 2,
//       rotation: 0,
//       angleStart: 260,
//       angleEnd: 40,
//       hue: 220,
//       thickness: 5,
//       blur: 45
//     },
//     particles = [],
//     particleMax = 100,
//     updateCircle = function(){
//       if(circle.rotation < 360){
//         circle.rotation += circle.speed;
//       } else {
//         circle.rotation = 0; 
//       }
//     },
//     renderCircle = function(){
//       ctx.save();
//       ctx.translate(circle.x, circle.y);
//       ctx.rotate(dToR(circle.rotation));
//       ctx.beginPath();
//       ctx.arc(0, 0, circle.radius, dToR(circle.angleStart), dToR(circle.angleEnd), true);
//       ctx.lineWidth = circle.thickness;    
//       ctx.strokeStyle = gradient1;
//       ctx.stroke();
//       ctx.restore();
//     },
//     renderCircleBorder = function(){
//       ctx.save();
//       ctx.translate(circle.x, circle.y);
//       ctx.rotate(dToR(circle.rotation));
//       ctx.beginPath();
//       ctx.arc(0, 0, circle.radius + (circle.thickness/2), dToR(circle.angleStart), dToR(circle.angleEnd), true);
//       ctx.lineWidth = 2;  
//       ctx.strokeStyle = gradient2;
//       ctx.stroke();
//       ctx.restore();
//     },
//         renderCircleFlare = function(){
//       ctx.save();
//       ctx.translate(circle.x, circle.y);
//       ctx.rotate(dToR(circle.rotation+175));
//       ctx.scale(1,1);
//       ctx.beginPath();
//       ctx.arc(0, circle.radius, 30, 0, Math.PI *2, false);
//       ctx.closePath();
//       var gradient3 = ctx.createRadialGradient(0, circle.radius, 0, 0, circle.radius, 10);      
//       gradient3.addColorStop(0, 'hsla(0, 0%, 100%, .5)');
//       gradient3.addColorStop(1, 'hsla(231, 51%, 30%, 0)');
//       ctx.fillStyle = gradient3;
//       ctx.fill();     
//       ctx.restore();
//     },
//     renderCircleFlare2 = function(){
//       ctx.save();
//       ctx.translate(circle.x, circle.y);
//       ctx.rotate(dToR(circle.rotation+168));
//       ctx.scale(1.5,1);
//       ctx.beginPath();
//       ctx.arc(0, circle.radius, 25, 0, Math.PI *2, false);
//       ctx.closePath();
//       var gradient4 = ctx.createRadialGradient(0, circle.radius, 0, 0, circle.radius, 8);
//       gradient4.addColorStop(0, 'hsla(160, 57%, 52%, .6)');
//       gradient4.addColorStop(1, 'hsla(160, 57%, 52%, 0)');
//       ctx.fillStyle = gradient4;
//       ctx.fill();     
//       ctx.restore();
//     },
//     createParticles = function(){
//       if(particles.length < particleMax){
//         particles.push({
//           x: (circle.x + circle.radius * Math.cos(dToR(circle.rotation-100))) + (rand(0, circle.thickness*3) - circle.thickness),
//           y: (circle.y + circle.radius * Math.sin(dToR(circle.rotation-100))) + (rand(0, circle.thickness*3) - circle.thickness),
//           vx: (rand(0, 100)-50)/1000,
//           vy: (rand(0, 100)-50)/1000,
//           radius: rand(1, 6)/2,
//           alpha: rand(10, 20)/100
//         });
//       }
//     },
//     createParticles2 = function(){
//       if(particles.length < particleMax){
//         particles.push({
//           x: (circle.x + circle.radius * Math.cos(dToR(circle.rotation-250))) + (rand(0, circle.thickness*3) - circle.thickness),
//           y: (circle.y + circle.radius * Math.sin(dToR(circle.rotation-50))) + (rand(0, circle.thickness*3) - circle.thickness),
//           vx: (rand(0, 100)-50)/1000,
//           vy: (rand(0, 100)-50)/1000,
//           radius: rand(1, 6)/2,
//           alpha: rand(10, 20)/100
//         });
//       }
//     },
//     updateParticles = function(){
//       var i = particles.length;
//       while(i--){
//         var p = particles[i];
//         p.vx += (rand(0, 100)-50)/750;
//         p.vy += (rand(0, 100)-50)/750;
//         p.x += p.vx;
//         p.y += p.vy;
//         p.alpha -= .01;
        
//         if(p.alpha < .02){
//           particles.splice(i, 1)
//         }
//       }
//     },
//     renderParticles = function(){
//       var i = particles.length;
//       while(i--){
//         var p = particles[i];
//         ctx.beginPath();
//         ctx.fillRect(p.x, p.y, p.radius, p.radius);
//         ctx.closePath();
//         ctx.fillStyle = 'hsla(0, 0%, 100%, '+p.alpha+')';
//       }
//     },
//     clear = function(){
//       ctx.globalCompositeOperation = 'destination-out';
//       ctx.fillStyle = 'rgba(0, 0, 0, .1)';
//       ctx.fillRect(0, 0, cw, ch);
//       ctx.globalCompositeOperation = 'lighter';     
//     }
//     loop = function(){
//       clear();
//       updateCircle();
//       renderCircle();
//       renderCircleBorder();
//       renderCircleFlare();
//       renderCircleFlare2();
//       createParticles();
//       createParticles2();
//       updateParticles();
//       renderParticles();
//     }

// ctx.shadowBlur = circle.blur;
// ctx.shadowColor = 'hsla('+circle.hue+', 40%, 10%, 1)';
// ctx.lineCap = 'round'
  
// var gradient1 = ctx.createLinearGradient(0, -circle.radius, 0, circle.radius);
// gradient1.addColorStop(0, 'hsla('+circle.hue+', 10%, 90%, .15)');
// gradient1.addColorStop(1, 'hsla('+circle.hue+', 10%, 90%, 0)');
  
// var gradient2 = ctx.createLinearGradient(0, -circle.radius, 0, circle.radius);
// gradient2.addColorStop(0, 'hsla('+circle.hue+', 100%, 50%, 0)');
// gradient2.addColorStop(.1, 'hsla('+circle.hue+', 100%, 100%, .7)');
// gradient2.addColorStop(1, 'hsla('+circle.hue+', 100%, 50%, 0)');

// setInterval(loop, 16);


var winWidth = $(window).width();
var winHeight = $(window).height();
var screenWidth = window.innerWidth;
$(window).load(function() {
    // Mobile Menu
    $('#navIcon').click(function(){
        $(this).closest('header').toggleClass('openMenu');
        $(this).toggleClass('open');
        $('body').toggleClass('noScroll');
        $('.topLogo').toggle('fade', { direction: 'left' }, 100);
        var effect = 'slide';
        $('.menuBox').toggle('slide', { direction: 'left' }, 300);
    });
});

if(screenWidth < 769) {
    $(".blogGrid").slick();
}

$(document).ready(function() {

    $('.myaccBtn').click(function(){
        if (screenWidth > 1080) {
            $('.nbContent').hide('slide', { direction: 'up' }, 400);
            $(this).siblings('.myaccDD').toggle('slide', { direction: 'up' }, 300);
            $('.myAcc').toggleClass('active');
        }else{
            $('.mobLeftAside').toggle('slide', { direction: 'right' }, 300);
            $('body').toggleClass('noScroll');
        }
    });

    $(document).on('mouseenter', '.ddMenu .ddmTitle', function(){
        /*$(this).parent().toggleClass('active');*/
        $(this).closest('.ddMenu').siblings('.ddMenu').find('.ddmBox').slideUp();
        $(this).siblings('.ddmBox').slideDown();
    });

    $(document).on('mouseleave', '.ddMenu', function(){
    //    $(this).closest('.ddMenu').siblings('.ddMenu').find('.ddmBox').slideUp();
       $(this).children('.ddmBox').slideUp();
    });

    /*SHOW-HIDE HEADER ON SCROLL*/
    var position = $(window).scrollTop();
    $(window).scroll(function() {
        // var headerHeight = $('header').height() + 10;
        // var asideHeight = 'calc(100vh - '+headerHeight+'px - 10px)';
        // var scroll = $(window).scrollTop();
        // if (screenWidth > 768) {
        //     if(scroll > 150 && scroll > position) {
        //         $('.topStrip').addClass('hideStrip');
        //         $("header").addClass("bgViolet");
        //         $(".header").css('background', '#FFF');
        //         $("header .menuBox a.item").css('color', '#793f98');
        //     } else {
        //         $('.topStrip').removeClass('hideStrip');
        //         $("header").removeClass("bgViolet");
        //         $(".header").css('background', '#793f98');
        //         $("header .menuBox a.item").css('color', '#FFF');
        //     }
        // }
        if (screenWidth > 991) {
            if(scroll > 150 && scroll > position) {
                $('.leftAside').css({'height':asideHeight});
                $('.leftAsideFixed').css({'height':asideHeight, 'top':headerHeight});
            } else {
                $('.leftAside').css({'height':asideHeight});
                $('.leftAsideFixed').css({'height':asideHeight, 'top':headerHeight});
            }

            if ($(window).scrollTop() > $(document).height() - $('footer').height() - $(window).height()) {
                $('.leftAside').css({'height':'auto'});
                $('.leftAsideFixed').css({'position':'absolute','bottom':'0','top':'unset'});
                $('.pgDialogue').fadeOut(300);
            }else{
                $('.leftAside').css({'height':asideHeight});
                $('.leftAsideFixed').css({'position':'fixed','bottom':'unset','top':headerHeight});
                if (!readCookie('dismissKycDialogue')) {
                    $('.pgDialogue').fadeIn(300);
                }
            }
        }
        if (screenWidth < 768) {
            if(scroll > 150 && scroll > position) {
                $('header').addClass('hideheader');
                $('.homeFloatBtn').removeClass('hideStrip');
            } else {
                $('header').removeClass('hideheader');
                $('.homeFloatBtn').addClass('hideStrip');
            }
            if ($(window).scrollTop() > $(document).height() - $('footer').height() - $(window).height()) {
                $('.homeFloatBtn').addClass('hideStrip');
            }
        }        
        position = scroll;
    });
    /*SHOW-HIDE HEADER ON SCROLL*/

    /*BANNER TAB*/
    $('.bsNav .bsTrigger').click(function () {
        $(this).siblings('.bsTrigger').removeClass('active');
        $(this).addClass('active');
        var bsslide = $(this).data('bsslide');
        var bsbg    = $(this).data('bsbg');
        $(this).closest('.boxSlider').find('.'+bsslide).addClass('active');
        $(this).closest('.boxSlider').find('.'+bsslide).siblings('.bsSlide').removeClass('active');
        $(this).closest('.boxSlider').find('.'+bsslide).css('background-image','url("'+bsbg+'")');
    });
    $('.bsNav .bsTrigger:first-child').click();
    setInterval(function() {
        if ($('.bsNav .bsTrigger.active').next().is('.bsTrigger')) {
            $('.bsNav .bsTrigger.active').next().click();
        }else{
            $('.bsNav .bsTrigger:first-child').click();
        }
    }, 3500);
    /*BANNER TAB*/

    /*STEP-CAROUSEL*/
    $('.stepCarousel').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        infinite: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
    /*STEP-CAROUSEL*/

    /*INLINE-COUNT*/
    $('.inlineCount').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        infinite: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
    /*INLINE-COUNT*/

    /*ONLINE-POKER-CAROUSEL*/
    $(".opCarousel").slick({
        dots: false,
        infinite: true,
        autoplay: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        variableWidth: true,
        focusOnSelect: true
    });
    /*ONLINE-POKER-CAROUSEL*/
 
    /*PROMO-SLIDER*/
    $('.psBlock').slick({
        dots: false,
        infinite: true,
        autoplay: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        variableWidth: true,
        focusOnSelect: true
    });
    /*PROMO-SLIDER*/

    /*PRO-PLAYER*/
    function pPlayerCarousel() {
        $('.pPlayer').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            infinite: true,
            responsive: [
                {
                    breakpoint: 880,
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1
                    }
                }
            ]
        });
    }
    pPlayerCarousel();
    function destroyPPlayerCarousel() {
        if ($('.pPlayer').hasClass('slick-initialized')) {
            $('.pPlayer').slick('destroy');
        }
    }
    /*PRO-PLAYER*/

    /*OTHER-EVENT*/
    $('.otherEventSlider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        infinite: true,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
    $('.otherArticleSlider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        infinite: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
    /*OTHER-EVENT*/

    /*TESTIMONIALS-SLIDER*/
    $('.testimonials').slick({
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1
    });
    /*TESTIMONIALS-SLIDER*/

    /*BAAZI-AWARD-SLIDER*/
    $('.awardSlider').slick({
        dots: false,
        infinite: true,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1
    });
    /*BAAZI-AWARD-SLIDER*/

    /*TOURNAMENTS-CAROUSEL*/
    $('.tlCarousel').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        infinite: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    infinite: true
                }
            }
        ]
    });
    /*TOURNAMENTS-CAROUSEL*/

    /*TOURNAMENTS-CAROUSEL*/
    $('.vCarousel').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        infinite: true,
        variableWidth: true
    });
    /*TOURNAMENTS-CAROUSEL*/

    /*FEATURE-SLIDER*/
    $('.featureSlider').slick({
        dots: false,
        infinite: true,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1
    });
    /*FEATURE-SLIDER*/

    /*PRICING SLIDER*/
    if(screenWidth > 768) {
        $(".pricingSLider").slick({
            slidesToShow: 3
        });
    } else {
        $(".pricingSLider").slick({
            slidesToShow: 1
        });
    }
    /*PRICING SLIDER*/

    /*FAQ DD*/
    $(document).on('click', '.fdQs', function(){
        $(this).closest('.faqDDItem').toggleClass('faqOpen');
        $(this).siblings('.fdAns').slideToggle();
    });
    $('.faqDD .faqDDItem:first-child .fdQs').click();
    /*FAQ DD*/

    /*HAND-DETAIL*/
    $(document).on('click', '.hdDDTrigger', function(){
        $(this).closest('.handDetail').toggleClass('hdOpen');
        $(this).siblings('.hdTable').slideToggle();
        /*$(this).*/
    });
    /*HAND-DETAIL*/

    /*CARD-DD*/
    $(".cardDD .cdHead").click(function () {
       $(this).children(".plus-minus-toggle").toggleClass('collapsed');
       $(this).siblings(".cdDes").slideToggle();
    });
    // $(".cardDD:first-child .cdHead").click();
    /*CARD-DD*/

    /*CUSTOMER SUPPORT DD BUTTON*/
    $(document).on('click', '.csDDBtn', function(){
        $(this).hide();
        $('.csContent').slideDown();
    });
    /*CUSTOMER SUPPORT DD BUTTON*/

    /*PACK-CARD*/
    $('.packCard').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        arrows: true,
        variableWidth: true
    });
    $(document).on('click', '.pcAction', function(){
        var pcName      = $(this).closest('.pcItem').find('.pcName').html();
        var pcAmount    = $(this).closest('.pcItem').find('.pcAmount').html();
        var pcContent   = $(this).closest('.pcItem').find('.pcContent').html();
        var pcDesc      = $(this).closest('.pcItem').find('.pcDesc').html();$('#pcName').html(pcName);
        $('#pcAmount').html(pcAmount);
        $('#pcContent').html(pcContent);
        $('#pcDesc').html(pcDesc);
        $('.pcItem').removeClass('pcAdded');
        $(this).closest('.pcItem').addClass('pcAdded');
        $('#pcEmpty').hide();
        $('#pcSummary').show();
        $('.pcAction').html('SELECT PACK');
        $(this).html('Remove');
    });
    $(document).on('click', '.pcAdded .pcAction, .removePack', function(){
        $('#pcSummary').hide();
        $('#pcEmpty').show();
        $('.pcItem').removeClass('pcAdded');
        $('.pcAction').html('SELECT PACK');
    });
    /*PACK-CARD*/

    /*COUPON-CODE*/
    $('.ccSmall').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: false,
        arrows: true,
        variableWidth: true,
        responsive: [
            {
                breakpoint: 1180,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 580,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
    $(document).on('click', '.ccAction', function(){
        var ccName      = $(this).closest('.ccItem').find('h5').html();
        var ccAction   = $(this).html();
        if (ccAction == 'APPLY CODE') {
            $('#amNote').html('Deposit code <span>'+ccName+'</span> code');
            $('.ccItem').removeClass('ccAdded');
            $('.ccAction').html('APPLY CODE');
            $(this).html('Remove');
            $(this).closest('.ccItem').addClass('ccAdded');
            $('#removeCoupon').show();
        }else{
            $('#amNote').html('No deposit code applied');
            $(this).html('APPLY CODE');
            $(this).closest('.ccItem').removeClass('ccAdded');
            $('#removeCoupon').hide();
        }

    });
    $('#removeCoupon').click(function(){
        $('.ccItem').removeClass('ccAdded');
        $('.ccAction').html('APPLY CODE');
        $('#amNote').html('No deposit code applied');
        $(this).hide();
    })
    $('.quickAmount .qaItem').click(function(){
        var quickAmount = $(this).find('span').html();
        $('#amAmount').val(quickAmount);
        $('.quickAmount .qaItem').removeClass('qaSelected');
        $(this).addClass('qaSelected');
        resizable(document.getElementById('amAmount'),22);
    });
    $('#amAmount').on('input', function(){
        $('.quickAmount .qaItem').removeClass('qaSelected');
    });
    /*COUPON-CODE*/

    /*HOW TO PLAY TAB*/
    $(".htpTabHead .htpTabLink").click(function () {
        $(this).addClass("active");
        $(this).siblings(".htpTabLink").removeClass("active");
        var tabHead = $(this).data("tabhead");
        $('.'+tabHead).siblings(".htpTabVideo").hide();
        $('.'+tabHead).siblings(".htpTabVideo").find("video").trigger('pause');
        $('.'+tabHead).siblings(".htpTabVideo").children(".playVideo").hide();
        $('.'+tabHead).fadeIn();
    });
    $(".htpTabHead .htpTabLink:first-child").click();

    $(".playIcon").click(function () {
      $(this).parent(".htpTabVideo").children(".playVideo").show();
      $(this).parent(".htpTabVideo").children(".playVideo").children("iframe")[0].src += "?autoplay=1";
      $(this).parent(".htpTabVideo").find("video").trigger('play');
    });
    /*HOW TO PLAY TAB*/


    /*VIDEO-THUMB*/
    $('.vtPlayIcon').click(function () {
      $(this).parent('.videoThumb').children('.vtPlayVideo').show();
      $(this).parent('.videoThumb').children('.vtPlayVideo').children('iframe')[0].src += '?autoplay=1';
      $(this).parent('.videoThumb').find('video').trigger('play');
    });
    /*VIDEO-THUMB*/

    /*TOGGLE-PASSWORD-VIEW*/
    $('.passView .pvEye').click(function(){
        var pvEye = $(this).siblings('input');
        $(this).toggleClass('pvHide');
        if (pvEye.attr('type') == "password") {
            pvEye.attr('type','text');
        } else {
            pvEye.attr('type','password');
        }
    });
    /*TOGGLE-PASSWORD-VIEW*/

    /*PAN-AVAILABILITY*/
    $('#panNo').click(function(){
        if ($(this).is(':checked')) {
            $('#noPanNote').show();
        }
    });
    $('#panYes').click(function(){
        if ($(this).is(':checked')) {
            $('#noPanNote').hide();
        }
    });
    if ($('#panNo').is(':checked')) {
        $('#noPanNote').show();
    }
    /*PAN-AVAILABILITY*/

    if (screenWidth < 768){
        $('.raBox32 .raMobDD .raBoxTitle').click(function(){
            $(this).closest('.raMobDD').toggleClass('ramdActive');
        });
    }

    /*SELECT-DATE-GO*/
    $('.inlineFldBtn .selectDate').change(function(){
        var checkforempty = $(this).parent().siblings('.ifbItem').children('.selectDate').val().trim();
        if (checkforempty) {
            $(this).closest('.inlineFldBtn').find('.ifbBtn').addClass('ifbBtnActive');
        }else{
            $(this).closest('.inlineFldBtn').find('.ifbBtn').removeClass('ifbBtnActive');
        }
    });

    $(document).mouseup(function(e) {
        $('.material .mAnim').each(function() {
            var container = $(this);
            if (!container.is(e.target) && container.has(e.target).length === 0) {
                var inputVal = $(this).val().trim();
                if (inputVal !== '' || $(this).is(":focus")) {
                    $(this).siblings('label').css({'-webkit-transform': 'scale(0.8)', 'transform': 'scale(0.8)'});
                }else{
                    $(this).siblings('label').css({'-webkit-transform': 'scale(1)', 'transform': 'scale(1)'});
                }
            }
        });
    });

    $('.material .mAnim').click(function(){
        var inputVal = $(this).val().trim();
        if (inputVal !== '' || $(this).is(":focus")) {
            $(this).siblings('label').css({'-webkit-transform': 'scale(0.8)', 'transform': 'scale(0.8)'});
        }else{
            $(this).siblings('label').css({'-webkit-transform': 'scale(1)', 'transform': 'scale(1)'});
        }
    });

    $('.material .mAnim').focus(function(){
        var inputVal = $(this).val().trim();
        if (inputVal !== '' || $(this).is(":focus")) {
            $(this).siblings('label').css({'-webkit-transform': 'scale(0.8)', 'transform': 'scale(0.8)'});
        }else{
            $(this).siblings('label').css({'-webkit-transform': 'scale(1)', 'transform': 'scale(1)'});
        }
    });

    $('.material .mAnim').focusout(function(){
        var inputVal = $(this).val().trim();
        if (inputVal !== '' || $(this).is(":focus")) {
            $(this).siblings('label').css({'-webkit-transform': 'scale(0.8)', 'transform': 'scale(0.8)'});
        }else{
            $(this).siblings('label').css({'-webkit-transform': 'scale(1)', 'transform': 'scale(1)'});
        }
    });
    $('.material .mAnim').each(function() {
        var inputVal = $(this).val().trim();
        if (inputVal !== '' || $(this).is(":focus")) {
            $(this).siblings('label').css({'-webkit-transform': 'scale(0.8)', 'transform': 'scale(0.8)'});
        }else{
            $(this).siblings('label').css({'-webkit-transform': 'scale(1)', 'transform': 'scale(1)'});
        }
    });
    /*FORM-INTERACTION*/
    
    /*SLIDE-TAB*/
    $('.tabSwipe').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        infinite: false,
        variableWidth: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2
                }
            },            
            { 
                breakpoint: 480, 
                settings: { 
                    slidesToShow: 1
                } 
            } 
        ]
    });
    /*SLIDE-TAB*/

    // Global function for Tab
    $('.itGItem.item').click(function() {
        var tabmenu = $(this).data('tabmenu');
        $(".tabMenu").find('.item').removeClass('activeTab');
        $(this).addClass('activeTab');
        $('.tabContent').hide();
        $('.'+tabmenu).fadeIn(650).show();
        // $($.fn.dataTable.tables(true)).DataTable() .columns.adjust() .responsive.recalc();
        
    });
    // $('.tabMenu .item:first-child').click();   
    // Global function for Tab
    
    // $(".qActionBtn").click(function () {
    //     $( "#dialog" ).dialog();        
    // });

    //Tab Slick
    if(screenWidth > 768) {
        $(".iconTabGrid").slick({
            slidesToShow: 7,
            arrows: true
        });
    } else {
        $(".iconTabGrid").slick({
            slidesToShow: 3,
            arrows: true
        });
        $(".ffMHead").slick({
            slidesToShow: 1
        });
        $("#ffSHeadSlide").slick({
            slidesToShow: 1
        });
    }

    // Global function for Sub-Tab
    $('.sTabMenu .item').click(function() {
        var tabmenu = $(this).data('stabmenu');
        $(this).siblings('.item').removeClass('activeTab');
        $(this).addClass('activeTab');
        $(this).closest('.sTabRel').find('.sTabContent').hide();
        $('.'+tabmenu).fadeIn(400).show();
        $($.fn.dataTable.tables(true)).DataTable() .columns.adjust() .responsive.recalc();
        destroyPPlayerCarousel();
        pPlayerCarousel();
        
    });
    $('.sTabMenu .item:first-child').click();
    // Global function for Sub-Tab

    // Global function for Tab with swipe
    $('.tabSwipe .item').click(function() {
        var tabmenu = $(this).data('tabmenu');
        $(this).closest('.slick-slide').siblings('.slick-slide').find('.item').removeClass('activeTab');
        $(this).addClass('activeTab');
        $('.tabContent').hide();
        $('.'+tabmenu).fadeIn(400).show();
        $($.fn.dataTable.tables(true)).DataTable() .columns.adjust() .responsive.recalc();

        var activePos = $(this).position();
        var activeWidth = $(this).width();
        changePos(activePos,activeWidth);
        
    });
    $('.tabSwipe .slick-slide:first-child .item').click();

    function changePos(activePos,activeWidth) {
        $('.tsEl').stop().css({
            left: activePos.left,
            width: activeWidth
        });
        // setTimeout(function(){
        //     $('.tsEl').css({backgroundColor: '#f03734'});
        // }, 300);
    }
    // Global function for Tab with swipe

    /*DASHBOARD-RIGHT-OVERLAY*/
    $('.raoTrigger').click(function(){
        var raoverlay = $(this).data('raoverlay');
        $('.'+raoverlay).addClass('active');
    });
    $('.raoBack').click(function(){
        $(this).closest('.raOverlay').removeClass('active');
    });
    /*DASHBOARD-RIGHT-OVERLAY*/

    /*TABLE-POPUP*/
    $(document).on('click', '.tpTrigger', function(){
        // var rewardpop = $(this).data('rewardpop');
        $('.tpInfo').show('fade', { direction: 'up' }, 300);
        $('.tpInfo').addClass('rpActive');
        $('body').addClass('noScroll');
        $($.fn.dataTable.tables(true)).DataTable().columns.adjust().responsive.recalc();
    });
    $('.tpTriggerClose').click(function(){
        $(this).closest('.tablePop').removeClass('rpActive');
        $(this).closest('.tablePop').hide('fade', { direction: 'up' }, 300);
        $('body').removeClass('noScroll');
    });
    /*TABLE-POPUP*/

    /*REWARD-POPUP*/
    $(document).on('click', '.rpTrigger', function(){
        var rewardpop = $(this).data('rewardpop');
        $('.'+rewardpop).show('fade', { direction: 'up' }, 300);
        $('.'+rewardpop).addClass('rpActive');
        $('body').addClass('noScroll');
    });
    $('.rpTriggerClose').click(function(){
        $(this).closest('.rewardPop').removeClass('rpActive');
        $(this).closest('.rewardPop').hide('fade', { direction: 'up' }, 300);
        $('body').removeClass('noScroll');
    });
    /*REWARD-POPUP*/

    /*MESSAGE-POPUP*/
    $(document).on('click', '.mpTrigger', function(){
        var msgpop = $(this).data('msgpop');
        $('.'+msgpop).show('fade', { direction: 'up' }, 300);
        $('.'+msgpop).addClass('rpActive');
        $('body').addClass('noScroll');
    });
    $('.mpTriggerClose').click(function(){
        $(this).closest('.msgPop').removeClass('rpActive');
        $(this).closest('.msgPop').hide('fade', { direction: 'up' }, 300);
        $('body').removeClass('noScroll');
    });
    /*MESSAGE-POPUP*/

    /*REWARD-SEE-MORE*/
    $(document).on('click', '.rlSeeMore', function(){
        $(this).siblings('.rewardList.rlGrid').addClass('rlFullView');
        $(this).hide();
    });
    /*REWARD-SEE-MORE*/

    /*LIKE-BUTTON*/
    $('.pblBtn').click(function(){
        var pblCount = parseInt($(this).siblings('.pblCount').html());
        pblCount = pblCount + 1;
        $(this).addClass('pbliked');
        $('.pblCount').html(pblCount);
        $(this).unbind('click');

    });



    function previewThumb(input, fileThumbId) {
        fileUpload(input, fileThumbId);
    }

    /*Table*/
    $('.respTable').DataTable({
        "aaSorting": false,
        "autoWidth": false,
        "responsive": true,
        "searching": false,
        "lengthChange": false,
        "paginate": false,
        "info":     false,
        "ordering": false
    });
    $('.taskdatatable').DataTable({
        "aaSorting": [],
        "autoWidth": false,
        "responsive": true,
        "searching": false,
        "lengthChange": false,
        'columns': [
            {responsivePriority: 1},
            {responsivePriority: 2},
            {responsivePriority: 3},
            {responsivePriority: 4},
            {responsivePriority: 5},
        ]
    });
    $('.rankDT').DataTable({
        "aaSorting": false,
        "autoWidth": false,
        "responsive": true,
        "searching": false,
        "lengthChange": false,
        "paginate": false,
        "info":     false,
        "ordering": false,
        'columns': [
            {responsivePriority: 1},
            {responsivePriority: 2},
            {responsivePriority: 3},
            {responsivePriority: 4}
        ]
    });
    $('.tLeaderboardDT').DataTable({
        "aaSorting": false,
        "autoWidth": false,
        "responsive": true,
        "searching": false,
        "lengthChange": false,
        "ordering": false,
        'columns': [
            {responsivePriority: 1},
            {responsivePriority: 2},
            {responsivePriority: 3},
            {responsivePriority: 4},
            {responsivePriority: 5},
            {responsivePriority: 6},
            {responsivePriority: 7}
        ]
    });
    $('.tScheduleDT').DataTable({
        "aaSorting": false,
        "autoWidth": false,
        "responsive": true,
        "searching": false,
        "lengthChange": false,
        "ordering": false,
        'columns': [
            {responsivePriority: 1},
            {responsivePriority: 2},
            {responsivePriority: 3},
            {responsivePriority: 4},
            {responsivePriority: 5}
        ]
    });
    $('.tLockedBalance').DataTable({
        "aaSorting": false,
        "autoWidth": false,
        "responsive": true,
        "searching": false,
        "lengthChange": false,
        "ordering": false,
        "paginate": false,
        "info":     false
    });
    /*Table*/

    $('.selectOption').selectmenu();
    $('.selectNumb').selectmenu().selectmenu('menuWidget').addClass('selectNumbOverflow');
    $(".selectDate").datepicker({
        changeMonth: true,
        changeYear: true,
        dateFormat: 'd M yy'
    });

    $('#rewardFilterGrid').cubeportfolio({
        filters: '#rewardFilterMenu',
        animationType: 'quicksand',
        gapHorizontal: 25,
        gapVertical: 20,
        loadMore: '.rlMore',
        loadMoreAction: 'click',
        gridAdjustment: 'responsive',
        mediaQueries: [{width: 1100, cols: 4}, {width: 520, cols: 3}, {width: 320, cols: 2}, {width: 280, cols: 1}]
    });
    $("#rewardFilterGrid").cubeportfolio('append', '<div class="logo cbp-item">my awesome content to append to plugin</div> <div class="logo cbp-item">my second awesome content to append to plugin</div>');

});

function previewThumb(input, fileThumbId) {
    fileUpload(input, fileThumbId);
}
function fileUpload(input, fileThumbId) {
    var fileTypesAccept = ['jpg', 'jpeg', 'png', 'pdf'];
    if (input.files && input.files[0]) {
        var extension = input.files[0].name.split('.').pop().toLowerCase();  //Getting file extension from input file
        var isSuccess = fileTypesAccept.indexOf(extension) > -1;  //is extension in acceptable types
        var fileSize = input.files[0].size; //Getting file size

        if (isSuccess && fileSize < 3100000) {
            $('.fileUploadErr').remove();
            var reader = new FileReader();
            reader.onload = function (e) {
                if (extension == 'pdf') {
                    $('#'+fileThumbId).attr('src', 'assets/images/cashback-program.png');
                }else{
                    $('#'+fileThumbId).attr('src', e.target.result);
                }
                $('#'+fileThumbId).addClass('bbPreviewAdded');
            };
            reader.readAsDataURL(input.files[0]);
        }else {
            if (!isSuccess) {
            $('.fileUploadErr').remove();
                $('#'+fileThumbId).parent().append('<div class="fileUploadErr">Supported document JPG, PNG & PDF.</div>');
            }else if(fileSize > 3100000){
            $('.fileUploadErr').remove();
                $('#'+fileThumbId).parent().append('<div class="fileUploadErr">Max file size should be less than 3MB</div>');
            }
        }
    }
}

(function($) {
    $.fn.visible = function(partial) {
        var $t            = $(this),
        $w            = $(window),
        viewTop       = $w.scrollTop(),
        viewBottom    = viewTop + $w.height(),
        _top          = $t.offset().top,
        _bottom       = _top + $t.height(),
        compareTop    = partial === true ? _bottom : _top,
        compareBottom = partial === true ? _top : _bottom;
        /*console.log('viewTop='+viewTop+', viewBottom='+viewBottom+', _top='+_top+', _bottom='+_bottom);*/
        return (((compareBottom + 250) <= viewBottom) && ((compareTop - 100) >= viewTop));
    };
})(jQuery);
(function($) {
    $.fn.onloadvisible = function(partial) {
        var $t            = $(this),
        $w            = $(window),
        viewTop       = $w.scrollTop(),
        viewBottom    = viewTop + $w.height(),
        _top          = $t.offset().top,
        _bottom       = _top + $t.height(),
        compareTop    = partial === true ? _bottom : _top,
        compareBottom = partial === true ? _top : _bottom;
        /*console.log('viewTop='+viewTop+', viewBottom='+viewBottom+', _top='+_top+', _bottom='+_bottom);*/
        return (((compareBottom + 50) <= viewBottom) && ((compareTop - 100) >= viewTop));
    };
 })(jQuery);

$(window).load(function(){
    animateFrmTop();
    animateFrmBottom();
    animateFrmLeft();
    animateFrmRight();
    animateFrmCenter();
    animateSideFade();
    animateSideFadeFast();
});
function animateFrmTop(){
    $(".frmTop").each(function(i, el) {
        var el = $(el);
        if (el.onloadvisible(true)) {
            el.addClass("inFrmTop"); 
        } 
    });
}
$(window).scroll(function(event) {
    $(".frmTop").each(function(i, el) {
        var el = $(el);
        if (el.visible(true)) {
            el.addClass("inFrmTop"); 
        }
    });
});
function animateFrmBottom(){
    $(".frmBtm").each(function(i, el) {
        var el = $(el);
        if (el.onloadvisible(true)) {
            el.addClass("inFrmBtm"); 
        } 
    });
}
$(window).scroll(function(event) {
    $(".frmBtm").each(function(i, el) {
        var el = $(el);
        if (el.visible(true)) {
            el.addClass("inFrmBtm"); 
        }
    });
});
function animateFrmLeft(){
    $(".frmLeft").each(function(i, el) {
        var el = $(el);
        if (el.onloadvisible(true)) {
            el.addClass("inFrmLeft"); 
        } 
    });
}
$(window).scroll(function(event) {
    $(".frmLeft").each(function(i, el) {
        var el = $(el);
        if (el.visible(true)) {
            el.addClass("inFrmLeft"); 
        }
    });
});
function animateFrmRight(){
    $(".frmRight").each(function(i, el) {
        var el = $(el);
        if (el.onloadvisible(true)) {
            el.addClass("inFrmRight"); 
        } 
    });
}
$(window).scroll(function(event) {
    $(".frmRight").each(function(i, el) {
        var el = $(el);
        if (el.visible(true)) {
            el.addClass("inFrmRight"); 
        }
    });
});
function animateFrmCenter(){
    $(".frmCtr").each(function(i, el) {
        var el = $(el);
        if (el.onloadvisible(true)) {
            el.addClass("inFrmCtr"); 
        } 
    });
}
$(window).scroll(function(event) {
    $(".frmCtr").each(function(i, el) {
        var el = $(el);
        if (el.visible(true)) {
            el.addClass("inFrmCtr"); 
        }
    });
});
function animateSideFade(){
    $('.sideFade .sideFadeObj').each(function(i, el) {
        var el = $(el);
        if (el.onloadvisible(true)) {
            setTimeout(function(){ el.delay(300*i).addClass("sideFadeInit"); }, 300*i);
        } 
    });
}
$(window).scroll(function(event) {
    $('.sideFade .sideFadeObj').each(function(i, el) {
        var el = $(el);
        if (el.visible(true)) {
            setTimeout(function(){ el.delay(300*i).addClass("sideFadeInit"); }, 300*i);
        }
    });
});
function animateSideFadeFast(){
    $('.sideFade .sideFadeObj.sfoFast').each(function(i, el) {
        var el = $(el);
        if (el.onloadvisible(true)) {
            setTimeout(function(){ el.delay(100*i).addClass("sideFadeInit"); }, 100*i);
        } 
    });
}
$(window).scroll(function(event) {
    $('.sideFade .sideFadeObj.sfoFast').each(function(i, el) {
        var el = $(el);
        if (el.visible(true)) {
            setTimeout(function(){ el.delay(100*i).addClass("sideFadeInit"); }, 100*i);
        }
    });
});


// For each image with an SVG class, execute the following function.
$("img.svg").each(function () {
    // Perf tip: Cache the image as jQuery object so that we don't use the selector muliple times.
    var $img = jQuery(this);
    // Get all the attributes.
    var attributes = $img.prop("attributes");
    // Get the image's URL.
    var imgURL = $img.attr("src");
    // Fire an AJAX GET request to the URL.
    $.get(imgURL, function (data) {
        // The data you get includes the document type definition, which we don't need.
        // We are only interested in the <svg> tag inside that.
        var $svg = $(data).find('svg');
        // Remove any invalid XML tags as per http://validator.w3.org
        $svg = $svg.removeAttr('xmlns:a');
        // Loop through original image's attributes and apply on SVG
        $.each(attributes, function() {
            $svg.attr(this.name, this.value);
        });
        // Replace image with new SVG
        $img.replaceWith($svg);
    });
});

/*FUNCTIONS FOR COOKIES SETTINGS*/
function createCookie(name, value, days) {
    var expires;
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toGMTString();
    } else {
        expires = "";
    }
    document.cookie = encodeURIComponent(name) + "=" + encodeURIComponent(value) + expires + "; path=/";
}
function readCookie(name) {
    var nameEQ = encodeURIComponent(name) + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) === ' ')
            c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0)
            return decodeURIComponent(c.substring(nameEQ.length, c.length));
    }
    return null;
}
function eraseCookie(name) {
    createCookie(name, "", -1);
}
/*FUNCTIONS FOR COOKIES SETTINGS*/

/*Function to dismiss kyc dialogue and check if dismiss is set or not on page load*/
function dismissKycDialogue(days){
    createCookie('dismissKycDialogue', 'true', days);
    checkKycDialogue();
}
function checkKycDialogue(){
    if (readCookie('dismissKycDialogue')) {
        $('.pgDialogue').fadeOut(300);
    }else{
        $('.pgDialogue').fadeIn(300);
    }
}
checkKycDialogue();
/*Function to dismiss kyc dialogue*/

/*Function to check for authentication*/
function checkAuthSuccess(){
    if (readCookie('authSuccess')) {
        $('.notLoginCheck').remove();
    }else{
        $('.myAcc').remove();
    }
}
checkAuthSuccess();
/*Function to check for authentication*/

/*Function to distroy cookies and logout*/
function setLogout(){
    eraseCookie('authSuccess');
    eraseCookie('dismissKycDialogue');
}
/*Function to distroy cookies and logout*/

/*Input auto width*/
function resizable (el, factor) {
  var int = Number(factor) || 7.7;
  function resize() {el.style.width = ((el.value.length+1) * int) + 'px'}
  var e = 'keyup,keypress,focus,blur,change'.split(',');
  for (var i in e) el.addEventListener(e[i],resize,false);
  resize();
}
if ($('#amAmount').length) {
    resizable(document.getElementById('amAmount'),22);
}
if ($('#amAmount2').length) {
    resizable(document.getElementById('amAmount2'),22);
}
/*Input auto width*/

/*Smooth Scroll*/
/*$(window).load(function() {
    if (window.addEventListener) window.addEventListener('DOMMouseScroll', wheel, false);
    window.onmousewheel = document.onmousewheel = wheel;
    function wheel(event) {
        var delta = 0;
        if (event.wheelDelta) delta = event.wheelDelta / 120;
        else if (event.detail) delta = -event.detail / 3;
        handle(delta);
        if (event.preventDefault) event.preventDefault();
        event.returnValue = false;
    }

    var goUp = true;
    var end = null;
    var interval = null;

    function handle(delta) {
        var animationInterval = 15;
        var scrollSpeed = 10;
        if (end == null) {
            end = $(window).scrollTop();
        }
        end -= 150 * delta;
        goUp = delta > 0;
        if (interval == null) {
            interval = setInterval(function () {
                var scrollTop = $(window).scrollTop();
                var step = Math.round((end - scrollTop) / scrollSpeed);
                if (scrollTop < 0 || scrollTop >= $(window).prop("scrollHeight") - $(window).height() || goUp && step > -1 || !goUp && step < 1 ) {
                    clearInterval(interval);
                    interval = null;
                    end = null;
                }
                $(window).scrollTop(scrollTop + step );
            }, animationInterval);
        }
    }
});*/
/*Smooth Scroll*/

// $(document).ready(function () {
//     hrfId = location.hash;
//     console.log('Id: '+ hrfId);
//     if(location.hash == hrfId){
//         $('html, body').animate({
//             scrollTop: $(hrfId).offset().top - 120
//         }, 1200);
//     }
// });

$(".ftgItem.item").click(function (event) {
    event.preventDefault();
    hrfId = this.hash;
    console.log('Id: '+ hrfId);
    if(this.hash == hrfId){
        $('html, body').animate({
            scrollTop: $(hrfId).offset().top - 60
        }, 1200);
    }    
});

if(screenWidth > 768) {
    $(".menuBox a.item").click(function (event) {
        event.preventDefault();
        hrfId = this.hash;
        console.log('Id: '+ hrfId);
        if(this.hash == hrfId){
            $('html, body').animate({
                scrollTop: $(hrfId).offset().top - 60
            }, 1200);
        }    
    });
} else {
    $(".menuBox a.item").click(function (event) {
        event.preventDefault();
        hrfId = this.hash;
        console.log('Id: '+ hrfId);
        
        $(this).closest('header').toggleClass('openMenu');
        $('#navIcon').toggleClass('open');
        $('body').toggleClass('noScroll');
        $('.topLogo').toggle('fade', { direction: 'left' }, 100);
        var effect = 'slide';
        $('.menuBox').toggle('slide', { direction: 'left' }, 300);

        if(this.hash == hrfId){
            $('html, body').animate({
                scrollTop: $(hrfId).offset().top - 40
            }, 1200);
        }    
    });
}

