$(function(){
    setTimeout(function(){
        lamp();
    }, 1500);


});

function lamp() {
    $('.lampBody').animate({'top' : '150px'}, 3000, 'easeOutCubic', function(){
        $('.lampInternal').css('box-shadow', '0 0 10px gold');
        $('.light').css('display', 'block');
        $('.lightCircle').css('display', 'block');

        setTimeout(function(){
            closeSplash();
        }, 5000);
    });
    
}
function closeSplash(){
    $('.lampInternal').css('box-shadow', 'none');
    $('.light').css('display', 'none');
    $('.lightCircle').css('display', 'none');
    
    setTimeout(function(){
        $('.lampBody').animate({'top' : '-150px'}, 3000, 'easeOutCubic', function(){
            $('.splash').animate({'top' : '10%'}, 1000, 'easeOutCubic', function(){
                $('.splash').animate({'top' : '-100%'}, 500, 'easeOutCubic', function(){
                    $('.splash').hide();
                });
            });
        });
    }, 200);
    
}

