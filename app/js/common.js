//waypoints



$('.popup-link').magnificPopup({
    // Delay in milliseconds before popup is removed
    removalDelay: 300,

    // Class that is added to popup wrapper and background
    // make it unique to apply your CSS animations just to this exact popup
    mainClass: 'mfp-fade',
    function() {
        $('#thx').addClass('start');
    },
});



setTimeout(function() {
    $('body').addClass('start')
}, 250);










$(function() {
    $("[name=send]").click(function() {



        // conversion  выбор
        var submit = $(this),
            form = submit.closest('form'),
            conversion = form.attr('data-conversion');




        $(":input.error").removeClass('error');
        $(".allert").remove();
        var error;
        var btn = $(this);
        var ref = btn.closest('form').find('[required]');
        var msg = btn.closest('form').find('input, textarea');
        var send_btn = btn.closest('form').find('[name=send]');
        var send_options = btn.closest('form').find('[name=campaign_token]');
        $(ref).each(function() {
            if ($(this).val() == '') {
                var errorfield = $(this);
                $(this).addClass('error').parent('.field').append('<div class="allert"><span>Заполните это поле</span><i class="fa fa-exclamation-triangle" aria-hidden="true"></i></div>');
                error = 1;
                $(":input.error:first").focus();
                return;
            } else {
                var pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
                if ($(this).attr("type") == 'email') {
                    if (!pattern.test($(this).val())) {
                        $("[name=email]").val('');
                        $(this).addClass('error').parent('.field').append('<div class="allert"><span>Укажите коректный e-mail</span><i class="fa fa-exclamation-triangle" aria-hidden="true"></i></div>');
                        error = 1;
                        $(":input.error:first").focus();
                    }
                }
                var patterntel = /^()[0-9+()]{7,16}/i;
                if ($(this).attr("type") == 'tel') {
                    if (!patterntel.test($(this).val())) {
                        $("[name=phone]").val('');
                        $(this).addClass('error').parent('.field').append('<div class="allert"><span>Укажите коректный номер телефона</span><i class="fa fa-exclamation-triangle" aria-hidden="true"></i></div>');
                        error = 1;
                        $(":input.error:first").focus();
                    }
                }
            }
        });


        if (!(error == 1)) {
            $(send_btn).each(function() {
                $(this).attr('disabled', true);
            });
            $(send_options).each(function() {
                var form = $(this).closest('form'),
                    name = form.find('.name').val();
                if ($(this).val() == '') {
                    $.ajax({
                        type: 'POST',
                        url: 'mail.php',
                        data: msg,
                        success: function() {
                            $('form').trigger("reset");
                            setTimeout(function() { $("[name=send]"); }, 4000);
                            // Настройки модального окна после удачной отправки

                            setTimeout(function() {
                                $('.mfp-close').click();
                            }, 3050);


                            $('#open__sacsec').click();

                            /* setTimeout(function() {
                                $('.mfp-close').click();
                            }, 7500);
*/




                            yaCounter43685024.reachGoal(conversion);
                            //  location.href = 'http://www.u2powerbank.com.ua/success.php';



                        },
                        error: function(xhr, str) {
                            alert('Возникла ошибка: ' + xhr.responseCode);
                        }
                    });
                } else {
                    $.ajax({
                        type: 'POST',
                        url: 'mail.php',
                        data: msg,
                        success: $.ajax({
                            type: 'POST',
                            url: 'https://app.getresponse.com/add_subscriber.html',
                            data: msg,
                            statusCode: {
                                0: function() {
                                    $('form').trigger("reset");
                                    setTimeout(function() { $("[name=send]"); }, 4000);
                                    // Настройки модального окна после удачной отправки

                                    setTimeout(function() {
                                        $('.mfp-close').click();
                                    }, 3050);



                                    $('#open__sacsec').click();

                                    /* setTimeout(function() {
                                         $('.mfp-close').click();
                                     }, 7500);*/



                                    yaCounter43685024.reachGoal(conversion);
                                    //   location.href = 'http://www.u2powerbank.com.ua/success.php';

                                }
                            }
                        }),
                        error: function(xhr, str) {
                            alert('Возникла ошибка: ' + xhr.responseCode);
                        }
                    });
                }
            });
        }
        return false;
    })
});













// телефон маска
$(function() {

    $('[id*="phone"]').mask("+38(999) 999-9999");

});

// телефон маска












$('a.popup-youtube ').magnificPopup({
    overflowY: 'hidden',
    type: 'iframe',
    removalDelay: 300,

    // Class that is added to popup wrapper and background
    // make it unique to apply your CSS animations just to this exact popup
    mainClass: 'mfp-fade',
    iframe: {
        markup: '<div class="forma__popup mfp-iframe-scaler">' +
            '<div class="mfp-close"></div>' +
            '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
            '</div>',
        patterns: {
            youtube: {
                index: 'youtube.com/',
                id: 'v=',
                src: '//www.youtube.com/embed/%id%?autoplay=1'
            }
        },
        srcAction: 'iframe_src',
    }
});



// Example 1: From an element in DOM
$('.open-popup-link').magnificPopup({
    type: 'inline',
    midClick: true, // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
    removalDelay: 300,

    // Class that is added to popup wrapper and background
    // make it unique to apply your CSS animations just to this exact popup
    mainClass: 'mfp-fade',
    overflowY: 'hidden',
});












// Inline popups
$('#inline-popups').magnificPopup({
    delegate: 'a',
    removalDelay: 500, //delay removal by X to allow out-animation
    callbacks: {
        beforeOpen: function() {
            this.st.mainClass = this.st.el.attr('data-effect');
        }
    },
    midClick: true // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
});


// Image popups
$('#image-popups').magnificPopup({
    delegate: 'a',
    type: 'image',
    removalDelay: 500, //delay removal by X to allow out-animation
    callbacks: {
        beforeOpen: function() {
            // just a hack that adds mfp-anim class to markup 
            this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
            this.st.mainClass = this.st.el.attr('data-effect');
        }
    },
    closeOnContentClick: true,
    midClick: true // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
});


// Hinge effect popup
$('a.hinge').magnificPopup({
    mainClass: 'mfp-with-fade',
    removalDelay: 1000, //delay removal by X to allow out-animation
    callbacks: {
        beforeClose: function() {
            this.content.addClass('hinge');
        },
        close: function() {
            this.content.removeClass('hinge');
        }
    },
    midClick: true
});