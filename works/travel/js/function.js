const $header = document.querySelector('header');
const $mnus = document.querySelectorAll('header>.container>nav>.gnb>li>a');
const $top = document.querySelector('aside>a.top');
const $aside = document.querySelector('aside')

const $container = document.querySelector('#visual>.container');
const $prev = document.querySelector('#visual>p:nth-of-type(2)');
const $next = document.querySelector('#visual>p:nth-of-type(3)');

const $indicators = document.querySelectorAll('section>article.cont2>ol>.picture');
const $slides = document.querySelectorAll('section>article.cont2>.slides>ul>li');
const $left = document.querySelector('section>article.cont2>.slides>.next>p:nth-of-type(1)');
const $right = document.querySelector('section>article.cont2>.slides>.next>p:nth-of-type(2)');
const $play = document.querySelector('section>.cont2>.slides>.play>p:nth-of-type(1)');
const $stop = document.querySelector('section>.cont2>.slides>.play>p:nth-of-type(2)');

const $container2 = document.querySelector('section>.cont3>.frame>.container');
const $btnPrev = document.querySelector('section>.cont3>.content>p:nth-of-type(1)');
const $btnNext = document.querySelector('section>.cont3>.content>p:nth-of-type(2)');
const $indicators2 = document.querySelectorAll('section>.cont3>.frame>.container>.pic-container>figure');
const $slides2 = document.querySelectorAll('section>.cont3>.content>ul>li');



{
    let nowIdx = 0;
    let intervalKey = null;

    $prev.addEventListener('click',function(evt){
    evt.preventDefault();
    
    if(nowIdx>0){
        nowIdx--;
    }else{
        nowIdx=3
    }

    $container.style.left=-(100*nowIdx)+'%'
});    
$next.addEventListener('click',function(evt){
    evt.preventDefault();
    
    if(nowIdx<3){
        nowIdx++;
    }else{
        nowIdx=0
    }
    
    $container.style.left=-(100*nowIdx)+'%'
});    

const autoPlay = function(){
    clearInterval(intervalKey);

    
    intervalKey = setInterval(function(){
    $next.click();
   
},4000)};

autoPlay();
}









{
//fade 슬라이드

let nowIdx = 0;
let intervalKey = null;

const fadeAction = function(nowIdx){
   
    for(let i=0;i<$indicators.length;i++){
        $slides[i].style.display = 'none';
      
    }

    
    $slides[nowIdx].style.display = 'block';
   
};

$indicators.forEach(function($indicator,idx){
    $indicator.addEventListener('click',function(evt){
        evt.preventDefault();
        nowIdx = idx;
        fadeAction(nowIdx);
    });
});

$right.addEventListener('click', function(evt){
    evt.preventDefault();
    (nowIdx<$indicators.length-1) ? nowIdx++ : nowIdx=0;
    fadeAction(nowIdx);
});


$left.addEventListener('click', function(evt){
    evt.preventDefault();
    nowIdx>0 ? nowIdx-- : nowIdx=$indicators.length-1;
    fadeAction(nowIdx);
});

const autoPlay = function(){
    clearInterval(intervalKey);

    
    intervalKey = setInterval(function(){
    $right.click();
   
},3000)};

autoPlay();



$play.addEventListener('click',function(evt){
    evt.preventDefault();
    clearInterval(intervalKey);
    
    intervalKey = setInterval(function(){
        
        if(nowIdx<3){
            nowIdx++;
        }else{
            nowIdx=0;
        }
        
        
       fadeAction(nowIdx);
        
    },3000);
});

$stop.addEventListener('click', function(evt){
    evt.preventDefault();
    clearInterval(intervalKey);
});

}








{
    let nowIdx = 0;
    let oldIdx = nowIdx;

$btnPrev.addEventListener('click',function(evt){
    evt.preventDefault();
    if(nowIdx>0){
        nowIdx--;
    }else{
        nowIdx=2
    }

    $container2.style.left=-(1200*nowIdx)+'px'
});
$btnNext.addEventListener('click',function(evt){
    evt.preventDefault();
    if(nowIdx<2){
        nowIdx++;
    }else{
        nowIdx=0
    }

    $container2.style.left=-(1200*nowIdx)+'px'
});
}

{
    let nowIdx = 0;
    let oldIdx = nowIdx;

 

$indicators2.forEach(function($indicator,idx){
    $indicator.addEventListener('click',function(evt){
        evt.preventDefault();
        
        oldIdx = nowIdx
        nowIdx = idx;
        
        $slides2[oldIdx].style.display = 'none';
        $slides2[nowIdx].style.display = 'block';
    });
});

}










{
    let nowIdx = 0;
    let oldIdx = nowIdx;

const arrTopVal = [];



document.querySelectorAll('article').forEach(function($article, idx){
    arrTopVal[idx] = $article.offsetTop;
});

console.log('arrTopVal =',arrTopVal);


$mnus.forEach(function($mnu, idx){
    $mnu.addEventListener('click', function(evt){
        evt.preventDefault();

        window.scrollTo({top:arrTopVal[idx]-85, behavior:'smooth'});
    });
});


window.addEventListener('scroll', function(){
    
    const scrollTop = Math.ceil(window.scrollY);
    console.log(`scrollTop = ${scrollTop}`);

    for(let i=0;i<$mnus.length;i++){

        if(scrollTop >= arrTopVal[i]-185){

            oldIdx = nowIdx;
            nowIdx = i;
    
            $mnus[oldIdx].parentElement.classList.remove('on');
            $mnus[nowIdx].parentElement.classList.add('on');
            
        }else if(scrollTop<arrTopVal[0]-185){
            $mnus[nowIdx].parentElement.classList.remove('on');

        }
    }

});


$top.addEventListener('click', function(evt){
    evt.preventDefault();
    window.scrollTo({top:0, behavior:'smooth'});
});

document.querySelector('.logo>a').addEventListener('click', function(evt){
    evt.preventDefault();
    $top.click();
});
}

{
    window.addEventListener('scroll',function(){
    
    const scrollTop = Math.ceil(window.scrollY);
    
    const footDist = document.querySelector('footer').offsetTop;

    const view = (scrollTop + window.innerHeight) - footDist;

    if(view>0){
        $aside.style.marginBottom = view + 'px';
    }else{
        $aside.style.marginBottom = 0;

    }
});
}