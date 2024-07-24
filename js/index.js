$(function(){
    setTimeout(function(){
        lamp();
    }, 1500);


});

function lamp() {
    $('.lampBody').animate({'top' : '150px'}, 3000, 'easeOutCubic', function(){
        $('.lampInternal').css('box-shadow', '0 0 10px rgba(153, 116, 23, 1)');
        $('.light').show();
        $('.lightGround').show();
        $('.splashLogo').addClass('splashLogoOffBlur');

        setTimeout(function(){
            closeSplash();
        }, 2000);
    });
    
}
function closeSplash(){
    $('.splashLogo').removeClass('splashLogoOffBlur').addClass('splashLogoOnBlur').animate({'opacity' : '0'}, 3000);
    $('.light').animate({'opacity' : '0'}, 3000);
    $('.lampInternal').addClass('lampInternalOff');
    $('.lightGround').animate({'opacity' : '0'}, 3000, function(){
        $('.lampBody').animate({'top' : '-150px'}, 3000, 'easeOutCubic', function(){
            $('.splash').animate({'top' : '10%'}, 1000, 'easeOutCubic', function(){
                $('.splash').animate({'top' : '-100%'}, 500, 'easeOutCubic', function(){
                    $('.splash').hide();
                    startIndex();
                });
            });
        });
    });
}

function startIndex(){
    $('.mainWrap').addClass('mainWrapRemoveBlur');
    setTimeout(function(){
        $('header').css('box-shadow' , 'rgba(153, 116, 23, 1) 0 10px 20px');
    }, 1500);
}
