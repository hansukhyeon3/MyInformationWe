

// $(function(){
//     $('.splash').addClass('unBlur');

//     var firstIndex = 0; //첫번째 텍스트
//     var secondIndex = 1;//두번째 텍스트
//     var thirdIndex = 2; //세번째 텍스트
//     $('.loding').eq(firstIndex).animate({'left' : '50%'}, 6000, 'linear', function(){ //시작 애니메이션 첫번째 텍스트를 중간으로 이동, 첫번째 애니메이션이 끝나면 실행 하는 function함수
//         $('.loding').eq(firstIndex).animate({'left' : '0%'}, 6000, 'linear', function(){// 첫번째 텍스트가 왼쪽끝으로 이동, 애니메이션이끝나면 first함수 호출
//             first(firstIndex, secondIndex, thirdIndex);
//         });
//         $('.loding').eq(secondIndex).animate({'left' : '50%'}, 6000, 'linear', function(){//두번째 텍스트가 가운데로 이동

//         });
//     });
//     setTimeout(function(){
//         $('.closeSplashMsg > p').css('visibility', 'visible');
//         closeSplash();
//     }, 5000);
// });

// function first(firstIndex, secondIndex, thirdIndex){
//     $('.loding').eq(firstIndex).animate({'left' : '-50%'}, 6000, 'linear', function(){//첫번째 텍스트가 화면 밖으로 이동(모든 텍스트가 50%씩 이동하기때문에 화면밖에서도 50%를 이동해야 속도가 같음)
//         $(this).css('left', '100%');//텍스트가 화면 밖으로 나간후 다시 오른쪽화면 밖으로 이동
//     });
//     $('.loding').eq(secondIndex).animate({'left' : '0%'}, 6000, 'linear', function(){//두번째 텍스트가 왼쪽 끝으로 이동
//         second(firstIndex, secondIndex, thirdIndex);//두번째 텍스트가 왼쪽끝에 도착하면 second함수 호출
//     });
//     $('.loding').eq(thirdIndex).animate({'left' : '50%'}, 6000, 'linear', function(){//세번째 텍스트가 가운데로 이동
        
//     });
// }
// function second(firstIndex, secondIndex, thirdIndex) {
//     $('.loding').eq(firstIndex).animate({'left' : '50%'}, 6000, 'linear', function(){//오른쪽 끝으로 이동한 첫번째 텍스트가 다시 가운데로 이동

//     });
//     $('.loding').eq(secondIndex).animate({'left' : '-50%'}, 6000, 'linear', function(){//두번째 텍스트가 화면 밖으로 이동
//         $(this).css('left', '100%');//화면밖으로 이동한 텍스트가 다시 오른쪽 화면밖으로 이동
        
//     });
//     $('.loding').eq(thirdIndex).animate({'left' : '0%'}, 6000, 'linear', function(){//세번째 텍스트가 왼쪽 끝으로 이동
//         third(firstIndex, secondIndex, thirdIndex);//왼쪽끝에 도착하면 third함수 호출
//     });
// }
// function third(firstIndex, secondIndex, thirdIndex){
//     $('.loding').eq(firstIndex).animate({'left' : '0%'}, 6000, 'linear', function(){//첫번째 텍스트가 왼쪽 끝으로 이동
//         first(firstIndex, secondIndex, thirdIndex);//왼쪽끝에 도착하면 first함수 호출
//     });
//     $('.loding').eq(secondIndex).animate({'left' : '50%'}, 6000, 'linear', function(){//두번째 텍스트가 가운데로 이동

//     });
//     $('.loding').eq(thirdIndex).animate({'left' : '-50%'}, 6000, 'linear', function(){// 세번째 텍스트가 화면 밖으로 이동
//         $(this).css('left', '100%');//세번째 텍스트가 오른쪽 끝으로 이동
//     });
// }

// function closeSplash(){
//     document.addEventListener('keydown', function(event) {
//         console.log('A key was pressed:', event.key);
//         // 여기에 원하는 동작을 추가하세요
//         $('.splash').animate({'top' : '10%'}, 1000, 'easeOutCubic', function(){
//             $('.splash').animate({'top' : '-100%'}, 300, 'linear', function(){
//                 $('.splash').hide();
//             });
//         });
//       }, {once : true});//이벤트리스너가 한번만 호출되도록 함 여러개에 이벤트중 한개만 한번만 호출하고 싶을때는 부적합함
// }

