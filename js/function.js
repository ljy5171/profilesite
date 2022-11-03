const $loading = $('.loading');
$loading.children('p').fadeOut(20000);
$loading.delay(350).fadeOut(800,function(){
    $(this).remove();
});

//와우 플러그인

    $(window).on('load',function(){
        new WOW().init();
    });

    
const $h1 = $('h1');
const $home = $('#home');
const $mnu = $('nav>.gnb>li>a');
const $about = $('#about');
const $nav = $('header>.container>nav');
const $strength = $('#strength');
const $portfolio = $('#portfolio');
const $intro = $('#intro');
const $contact = $('#contact');
const $title = $('header>.container>h2');

const $ul_container=$('#portfolio > .portfolio1 > .page > .frame > .ul-container');
const $prev=$('#portfolio > .portfolio1 > .page > p:nth-child(1)');
const $next=$('#portfolio > .portfolio1 > .page > p:nth-child(2)');
const $cloud=$('#intro > .cloud > li');
const $header = $('header');
const homeH = $header.outerHeight();
const arrTopVal = [];

$(window).on('load resize',function(){
    $home.height(window.innerHeight);
    

    //가로폭 크기 기준
    if(window.innerWidth>640){//pc모드
        $h1.css({
            top : $intro.offset().top - 72,
            marginLeft : -$h1.width()/2
        });

        $nav.show();
    }else{//모바일
        $h1.css({
            top : $intro.offset().top -100,
            marginLeft : -$h1.width()/2
        });

        
        $nav.hide();
    }

    
    for(let i=0;i<$mnu.length;i++){
        arrTopVal[i] = Math.ceil($('header~section').eq(i).offset().top)+1;
    }

});


//about 막대그래프
$("#about").on("inview", function(evt, visible){
    if(visible==true){

        setTimeout(function(){
        for(var i=0;i<=5;i++){
                var $that = $("#about .bar").eq(i);
                $that.css({
                    "width" : $that.parent().attr("data-bar")+"%"
                });

            }
        },1000);
    }
});

$(window).on("scroll", function(){
    const scrollTop = $(this).scrollTop();

    if(scrollTop < $("#about").offset().top-$(this).height()){
        
        $("#about .bar").width(0);
    }
 
});


{
//라이트박스
const $styleguide = $('#portfolio > .portfolio1 > .page > .frame > .ul-container  .desc > .btn > a:nth-of-type(1)');
const $shadow = $('#portfolio > .portfolio1 > .page > .shadow');
const $lightbox = $('#portfolio > .portfolio1 > .page > .shadow > .lightbox');
const $clse_btn=$('#portfolio > .portfolio1 > .page > .shadow > button');

    
let nowIdx=0;


$styleguide.on('click',function(evt){
    evt.preventDefault();
    nowIdx=$styleguide.index(this);

    $shadow.eq(nowIdx).css({
        display:'block'
    })
});
$clse_btn.on('click',function(){
    $shadow.css({
        display:'none'
    })
});
$shadow.on('click',function(){
    $shadow.hide();
});
$lightbox.on('click',function(evt){
        evt.stopPropagation();
    });
$(document).on('keyup',function(evt){
        if(evt.which === 27){
            $shadow.hide();
        }
    });


}


const $logo = $('header>.container>.logo2');

//원페이지 스크롤
$(window).on('scroll',function(){
    let scrollTop = Math.ceil($(this).scrollTop());

    //헤더고정
    if(scrollTop>$(this).height()){
        $nav.addClass('side');
        $logo.css({
            display : 'none'
        });
        $title.css({
            display:'none'
        });
        

       
    }else{
        $nav.removeClass('side');
        $logo.css({
            display : 'block'
        });
        $title.css({
            display:'block'
        });
    }


    //메뉴활성화
    for(let i=0;i<$mnu.length;i++){
        if(scrollTop>=arrTopVal[i]-homeH){
            $mnu.eq(i).parent().addClass('on').siblings().removeClass('on');
            
        }else if(scrollTop<arrTopVal[0]-homeH){//비주얼 구간
            $mnu.parent().removeClass('on');
        }
    }
});

{
let nowIdx=0;
if($(window).width()<=640){
    
    
    $prev.on('click',function(evt){
        evt.preventDefault();
        
        if(nowIdx<1){
            nowIdx=2;
        }else{
            nowIdx--;
        }
        console.log(nowIdx);
        $ul_container.stop().animate({left:-350*nowIdx});
    });
    $next.on('click',function(evt){
        evt.preventDefault();
        
        if(nowIdx>1){
            nowIdx=0;
        }else{
            nowIdx++;
        }
        $ul_container.stop().animate({left:-350*nowIdx});
        
    });
}else{
    
    $prev.on('click',function(evt){
        evt.preventDefault();
        
        if(nowIdx<1){
            nowIdx=2;
        }else{
            nowIdx--;
        }
        console.log(nowIdx);
        $ul_container.stop().animate({left:-1300*nowIdx});
    });
    $next.on('click',function(evt){
        evt.preventDefault();
        
        if(nowIdx>1){
            nowIdx=0;
        }else{
            nowIdx++;
        }
        $ul_container.stop().animate({left:-1300*nowIdx});
    });
}
}

// $(window).resize(function(){document.location.reload();})


const $work1=$('#portfolio > .portfolio2 > ul > li:nth-of-type(1) > a > ol > li:nth-child(5)');
const $work2=$('#portfolio > .portfolio2 > ul > li:nth-of-type(3) > a > ol > li:nth-child(5)');
const $work_clse=$('#portfolio > .portfolio2 > p');
const $pdf=$('#portfolio > .portfolio2 > iframe');
const $pdf1=$('#portfolio > .portfolio2 > iframe:nth-of-type(1)');
const $pdf2=$('#portfolio > .portfolio2 > iframe:nth-of-type(2)');

$work1.on('click',function(evt){
    evt.preventDefault();
    $pdf1.css({
        display:'block'
    })
    $work_clse.css({
        display:'block'
    })
});
$work2.on('click',function(evt){
    evt.preventDefault();
    $pdf2.css({
        display:'block'
    })
    $work_clse.css({
        display:'block'
    })
});
$work_clse.on('click',function(){
    $pdf.css({
        display:'none'
    })
    $work_clse.css({
        display:'none'
    })
});
$(document).on('keyup',function(evt){
    if(evt.which === 27){
        $pdf.css({
            display:'none'
        })
        $work_clse.css({
            display:'none'
        })
    }
});


//contact
$(function(){
    
    const $tit = $("#contact dl>dt>a");

    $tit.on('click', function(evt){
        evt.preventDefault();
        $(this).parent().toggleClass('on').next().slideToggle(150).siblings('dd').slideUp(150);
        $(this).parent().siblings().removeClass('on');
    });
});

//구름이동
(function () {
    let intervalKey=null;
    const autoPlay = function(){

        $cloud.stop().animate({left:"-=1000"},40000,'linear')
        .animate({left:"+=1000"},40000,'linear');
    
};
    
    autoPlay();
    setInterval(autoPlay,40000);
})();

let nowIdx = null;

//페이지이동함수
const pageAni = function(topVal){
    $('html,body').stop().animate({
        scrollTop : topVal
    },400,'easeInOutCubic');
};

//메뉴클릭시 페이지 이동
$mnu.on('click',function(evt){
    evt.preventDefault();

    nowIdx = $mnu.index(this);

    pageAni(arrTopVal[nowIdx]);
});

//로고클릭시 맨위로 이동
$('.logo, aside').on('click',function(evt){
    evt.preventDefault();
    pageAni(0);
});

//최초 로딩시 맨위로 이동
$(window).on('load',function(){
    pageAni(0);
});

//오른쪽 하단 탑버튼
$(function() {
	const $aside = $('aside'); 

	$(window).on('scroll', function() {
		
		let scrollTop = $(this).scrollTop();

		
		if (scrollTop > 120) {
			$aside.stop().fadeIn();
		} else {
			$aside.stop().fadeOut();
		}

		const view = scrollTop + $(this).height() - $('.foot-container').offset().top;

		if (view > 0) {
			$aside.css({ marginBottom: view });
		} else {
			$aside.css({ marginBottom: 0 });
		}
	}); 
});

