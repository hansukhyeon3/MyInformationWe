////웹페이지가 실행될때 시작하는 함수
$(function(){
    scrollOff();
    handleResize();
    const storageDate = localStorage.getItem('splashOnDate'); //캐시로 저장되어있던 날짜를 가져옴
    const currentDate = getDate(); // 현재 날짜를 가져옴

    if(!storageDate || storageDate !== currentDate){ //캐시에 저장된 데이터가 없거나 저장된 데이터가 현재 날짜와 다르면 실행
        localStorage.removeItem('splashOnDate'); // 캐시에 저장된 데이터를 삭제
        $('.splashBg').show(); //스플래시 화면을 보이게 함
        setTimeout(function(){ 
            let count = 0; //램프가 켜지고 꺼진 횟수를 저장
                lampOpen(count); //lapmOpen 함술를 호출
            
        }, 1500);
    }else {
        startIndex(); //캐시에 저장된 날과 현재날짜가 같으면 startIndex함수 호출
    }
    

});

//현재 날짜 구하는 함수
function getDate() {
    const date = new Date(); //시스템에 날짜와 시간을 가져옴
    return `${date.getMonth() + 1}:${date.getDate()}`; // getMonth는 0~11까지여서 +1을 해줘야한다
    // date에 저장된 월과 날짜를 가져와서 반환한다
}
//램프에 불빛이 켜지고 램프 불을 끄는 함수를 실행
function lampOpen(count) {
    $('.lampInternal').css('box-shadow', '0 0 10px rgba(153, 116, 23, 1)');
    $('.light').show();
    $('.lightGround').show();

    setTimeout(function(){
        lampOff(count);
    }, 250);
    
}
// 램프에 불을 끄고 불이 꺼진 횟수를 계산해서 불을 다시 킬지 다음 애니메이션을 실행할지 결정
function lampOff(count) {
    $('.lampInternal').css('box-shadow', '0 0 10px rgba(153, 116, 23, 0)');
    $('.light').hide();
    $('.lightGround').hide();

    count++;//램프가 꺼진후 +1을 함
    if(count < 2){// 램프가 꺼진 횟수가 2미만이염 다시 램프를 킴
        setTimeout(function(){
            lampOpen(count);
        }, 250);
    }else {//램프가 꺼진횟수가 2이상이면 다음 shorteningSplash함수를 호출
        setTimeout(function(){
            shorteningSplash()
        }, 1500);
    }
    
}
// 스플래시 화면이 줄이고 램프에 불을 키며 로고를 빛춰 로고를 보여주고 다음 함수를 부름
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
//스플래시 화면을 종료하는 함수
function closeSplash(){
   $('.splashBg').addClass('splashBgBlur').animate({'opacity' : '0'}, 2000, function(){
        $('.splashBg').hide();
        localStorage.setItem('splashOnDate', getDate());
   });
    setTimeout(function(){
        startIndex();
    }, 1000);
}
// 인덱스 화면을 시작하는 함수
function startIndex(){
    setTimeout(function(){
        $('.mainWrap').addClass('mainWrapRemoveBlur');
        $('header').css('box-shadow' , '#ffffff 0 10px 20px');
        setTimeout(function(){
            setScrollAnimation();
        }, 3000);
    }, 800);
}

function scrollOff() {
    $('.list').mouseover(function(){
        $('body').css('overflow', 'hidden');
    });
    $('.list').mouseout(function(){
        $('body').css('overflow', '');
    });
    $('.slideWrap').mouseover(function(){
        $('body').css('overflow', 'hidden');
    });
    $('.slideWrap').mouseout(function(){
        $('body').css('overflow', '');
    });
}

window.addEventListener('resize', handleResize);
function handleResize() {

    var wrapHeight = $('.slideWrap').height();
    var wrapWidth = $('.slideWrap').width();
    $('.slideContent').css('width', `${wrapWidth}`).css('height', `${wrapHeight}`)
}

function setScrollAnimation() {
    
    // 애니메이션 설정
    const scrollAnimation = {
        height: 12000, // 스크롤 높이
        elements: {
            sl1: { top: 500, bottom: 1900 },
            sl2: { top: 1900, bottom: 3200 },
            sl3: { top: 3300, bottom: 4600 },
            sl4: { top: 4700, bottom: 6000 },
            sl5: { top: 6100, bottom: 7300 },
            sl6: { top: 7400, bottom: 8700 }
        },
        animations: {
            //슬라이드의 애니메이션 설정
            sl1: [
                { top: 500, bottom: 1900, styles: { translateY: [60, -60] } },
                { top: 500, bottom: 1200, styles: { opacity: [0, 1] } },
                { top: 1200, bottom: 1900, styles: { opacity: [1, 0] } }
              ],
              sl2: [
                { top: 1900, bottom: 3200, styles: { opacity: [0, 1], translateY: [60, -60] } },
                { top: 2600, bottom: 3200, styles: { opacity: [1, 0] } }
              ],
              sl3: [
                { top: 3300, bottom: 4600, styles: { opacity: [0, 1], translateY: [60, -60] } },
                { top: 4000, bottom: 4600, styles: { opacity: [1, 0] } }
              ],
              sl4: [
                { top: 4700, bottom: 6000, styles: { opacity: [0, 1], translateY: [60, -60] } },
                { top: 5400, bottom: 6000, styles: { opacity: [1, 0] } }
              ],
              sl5: [
                { top: 6100, bottom: 7100, styles: { opacity: [0, 1], translateY: [60, -60] } },
                { top: 6800, bottom: 7400, styles: { opacity: [1, 0] } }
              ],
              sl6: [
                { top: 7400, bottom: 8700, styles: { opacity: [0, 1], translateY: [60, -60] } },
                { top: 8100, bottom: 8700, styles: { opacity: [1, 0] } }
              ]
        }
    }
    //contentArea 요소를 가져옴
    const $container = $('.slidecontentArea');
    //contentArea에 높이를 scrollAnimation에 정이된 높이만큼 바꿈
    $container.height(scrollAnimation.height);
    $('.slideWrap').scrollTop(0);
    $('.slideWrap').on('scroll', function(event) {
        // 현재 스크롤 위치를 픽셀단위로 반환
        var scrollPostitionTop = $('.slideWrap').scrollTop(); // 페이지에 상단 부분에서 부터 현재 화면에 페이지상단부분에 거리
        // $(window).height()는 내화면에 높이값(픽섹단위)
        // 현재 화면에 중앙값은 = 스크롤된 거리 + 내 화면에 반
        // $('.content').height()는 content에 높이
        // content안에서에 화면 중앙값 = content에서 스크롤된 거리 + content 높이에 반
        var currentPos = scrollPostitionTop + $('.slideWrap').height() / 2;
        // scrollAnimation에 저장된 배열elements안에 저장된 sl1~sl8까지 반복함
        // refname은 sl1부터 sl8 까지 저장된 순서대로 저장됨
        for (const refname in scrollAnimation.elements) {
            // element에 현재 순회하고 있는 값을 저장함
            const element = scrollAnimation.elements[refname];
            // 현재 순회하고 있는 요소를 가져옴
            const $el = $('#' + refname); //제이쿼리 요소로 변환
            // 현재 순회하고 있는 애니메이션을 가져옴
            const animations = scrollAnimation.animations[refname];
            // 만약 현재 스크롤 위치가 순회하고 있는 요소 범위 안에 있는지 확인
            if (currentPos >= element.top && currentPos <= element.bottom) {
                //범위 안에 있으면 요소를 요소를 활성화함
                $el.addClass('enbled').removeClass('disabled');
                //만약 애니메이션이 정의된 경우
                if (animations) {
                    // animation에 저장된 배열을 순회함
                    animations.forEach(animation => {
                        // 현재 순회하고 있는 애니메이션 배열에 값을 가져옴
                        const { top, bottom, styles } = animation;
                        // 현재 스크롤 위치가 가져온 값 사이에 있는지 확인
                        const isIn = currentPos >= top && currentPos <= bottom;
                        // 현재 스크롤 위치가 가져온 값 사이에 있을경우
                        if (isIn) {
                            // 진행률 = (현재위치 - 시작위치) / (종료위치 - 시작위치)
                            // ex) (1000 - 500) / (1900 - 500) = 0.357....
                            const progress = (currentPos - top) / (bottom - top);
                            // styles에 정의 된 배열을 순회함
                            for (const style in styles) {
                                // 스타일에 정의된 css스타일을 가져옴
                                const [startValue, endValue] = styles[style];
                                // value = 0 + (1 - 0) * 0.357...
                                const value = startValue + (endValue - startValue) * progress;
                                //만약 현재 순회하고 있는 styles가 translateY라면
                                if (style === 'translateY') {
                                    $el.css('transform', `translateY(${value}px)`);
                                } else {
                                    $el.css(style , value);
                                }
                            }
                        }
                    });
                }
            // 범위 밖에 있으면 비활성화 함
            } else {
                $el.addClass('disabled').removeClass('enbled');
            }
        }
    });
    $(window).trigger('scroll');
    
};

