
$(function(){
    setTimeout(function(){
        let count = 0;
        lampOpen(count);
    }, 1500);
    study();

});


function lampOpen(count) {
    $('.lampInternal').css('box-shadow', '0 0 10px rgba(153, 116, 23, 1)');
    $('.light').show();
    $('.lightGround').show();

    setTimeout(function(){
        lampOff(count);
    }, 250);
    
}
function lampOff(count) {
    $('.lampInternal').css('box-shadow', '0 0 10px rgba(153, 116, 23, 0)');
    $('.light').hide();
    $('.lightGround').hide();
    // $('.splashLogo').removeClass('splashLogoOffBlur'); 
    count++;
    if(count < 2){
        setTimeout(function(){
            lampOpen(count);
        }, 250);
    }else {
        setTimeout(function(){
            shorteningSplash()
        }, 1500);
    }
    
}

function shorteningSplash(){
    $('.splashLogo').addClass('splashLogoMove');
    $('.lampBody').addClass('lampMove');
    $('.light').css('left', '50%');
    $('.lightGround').css('left', '50%').css('top', '91%');
    $('.splash').addClass('splashShortening');

    setTimeout(function(){
        $('.lampInternal').css('box-shadow', '0 0 10px rgba(153, 116, 23, 1)');
        $('.light').show();
        $('.lightGround').show();
        $('.splashLogo').addClass('splashLogoOffBlur');
        
        setTimeout(function(){
            closeSplash();
        }, 2000);
    }, 3000);
}
function closeSplash(){
   $('.splashBg').addClass('splashBgBlur').animate({'opacity' : '0'}, 2000, function(){
        $('.splashBg').hide();
   });
    setTimeout(function(){
        startIndex();
    }, 1000);
}

function startIndex(){
    setTimeout(function(){
        $('.mainWrap').addClass('mainWrapRemoveBlur');
        $('header').css('box-shadow' , 'rgba(153, 116, 23, 1) 0 10px 20px');
    }, 800);
}

function study(){
    $(document).ready(function() {
        // 요소 선택
        var $element = $('main');
        var $squal = $('.squal');
    
        // 중심점 계산 함수
        function getCenter($el) {
            var rect = $el[0].getBoundingClientRect();
            return {
                x: rect.left + rect.width / 2,
                y: rect.top + rect.height / 2
            };
        }
    
        // 마우스 이동 이벤트 처리
        $element.on('mousemove', function(event) {
            var mouseX = event.clientX;
            var mouseY = event.clientY;
    
            // 요소의 위치와 크기 가져오기
            var elementCenter = getCenter($element);
            var squalCenter = getCenter($squal); 
    
            // 두 중심점 간의 거리 계산
            var distance = Math.sqrt(
                Math.pow(squalCenter.x - mouseX, 2) +
                Math.pow(squalCenter.y - mouseY, 2)
            );
            if(distance < 50){
                $('.squal').css('background', 'blue');
            }else {
                $('.squal').css('background', 'red');
            }
        });
    });
    
}
