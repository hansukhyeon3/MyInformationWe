$(function(){
    $('.bookPage').eq(0).css('transform', 'rotateY(0deg) translateZ(1px)')
    pageMove();
});



function pageMove() {
    var count = 0;
    //왼쪽페이지를 눌렀을때
    $(document).on('click', '.leftMove', function(){
        switch (count) {
            case 1:
                $('.book').css('left', '25%');
                $(this).parent('.bookPage').css('transform', 'rotateY(0deg) translateZ(1px)'); 
                break;
            case 2:
                $(this).parent('.bookPage').css('transform', `rotateY(0deg)`);

                break;
        }

        $('.leftMove').removeClass('leftMove');
        $('.rightMove').removeClass('rightMove');

        count--;

        $('.bookPage').eq(count).find('.page').eq(0).addClass('rightMove');
        $('.bookPage').eq(count-1).find('.page').eq(1).addClass('leftMove'); 
    });
    //오른쪽페이지를 눌렀을때
    $(document).on('click', '.rightMove', function(){
        switch (count) {
            case 0:
                $('.book').css('left', '50%');
                $(this).parent('.bookPage').css('transform', 'rotateY(-180deg)');
                break;
            case 1:
                $(this).parent('.bookPage').css('transform', `rotateY(-180deg)`);       
                break;
            case 2:
                $(this).parent('.bookPage').css('transform', `rotateY(-180deg)`);
                break;
        }

        $('.leftMove').removeClass('leftMove');
        $('.rightMove').removeClass('rightMove');

        count++;

        $('.bookPage').eq(count).find('.page').eq(0).addClass('rightMove');
        $('.bookPage').eq(count-1).find('.page').eq(1).addClass('leftMove'); 
    });
}

