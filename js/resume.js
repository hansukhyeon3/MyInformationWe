$(function(){
    openBook();
});

function openBook() {
    $('.bookCover').click(function(){
        $('.bookPage').css('transform', 'rotateY(-180deg)');
    });
    $('.bookResume').click(function(){
        $('.bookPage').css('transform', 'rotateY(-180deg)');
    }); 
}
