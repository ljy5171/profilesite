
 const $thmbs = document.querySelectorAll('.slides>.thmbs>li>a');
 const $container = document.querySelector('.slides>.main>.container');
 const $btnPrev = document.querySelector('.slides>.slides-main.prev');
 const $btnNext = document.querySelector('.slides>.slides-main.next');
 
 
 const $btnPlay = document.querySelector('.slides>.slides-auto.play');
 const $btnStop = document.querySelector('.slides>.slides-auto.stop');
 
 let nowIdx = 0;
 
 
 $thmbs.forEach(function($thmb, idx){
     $thmb.addEventListener('mouseover', function(evt){
         evt.preventDefault();
 
         nowIdx = idx;
         
         $container.style.left = -400*nowIdx + 'px';
 
         $thmbs.forEach(function(anchor, actIdx){
             anchor.parentElement.classList.toggle('on',actIdx===nowIdx);
         });
     });
 });
 
 
 
 $btnPrev.addEventListener('click', function(evt){
     evt.preventDefault();
 
     if(nowIdx>0){
         nowIdx--;
     }else{
         nowIdx=3;
     }
 
     $container.style.left = -400*nowIdx + 'px';
 
 
     $thmbs.forEach(function(anchor, actIdx){
         anchor.parentElement.classList.toggle('on',actIdx===nowIdx);
     });
 
 });
 
 
 
 $btnNext.addEventListener('click', function(evt){
     evt.preventDefault();

     
     if(nowIdx<3){
         nowIdx++;
     }else{
         nowIdx=0;
     }
 
     $container.style.left = -400*nowIdx + 'px';
 
 
     $thmbs.forEach(function(anchor, actIdx){
         anchor.parentElement.classList.toggle('on',actIdx===nowIdx);
     });
  
 });
 

let intervalKey = setInterval(function(){
   
  if(nowIdx<3){
        nowIdx++;
       }else{
        nowIdx=0;
    }
    
    $container.style.left= -400*nowIdx + 'px'; 
    
    $thmbs.forEach(function(anchor,actIdx){
        anchor.parentElement.classList.toggle('on',actIdx===nowIdx);
    })
},2000);


$btnPlay.addEventListener('click', function(evt){
    evt.preventDefault();
    
    
    clearInterval(intervalKey);
 
     intervalKey = setInterval(function(){
     
         if(nowIdx<3){
             nowIdx++;
         }else{
             nowIdx=0;
         }
     
         $container.style.left = -400*nowIdx + 'px';
     
     
         $thmbs.forEach(function(anchor, actIdx){
             anchor.parentElement.classList.toggle('on',actIdx===nowIdx);
         });
      
     },2000);
 });
 
 
 
 $btnStop.addEventListener('click', function(evt){
     evt.preventDefault();
     clearInterval(intervalKey);
 });