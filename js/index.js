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
    });
    
}

