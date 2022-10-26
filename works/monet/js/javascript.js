
    const $books = $('.book');
    const $lightbox = $('.lightbox');
    const $shadow = $('.shadow');
    const $btn = $('.shadow>.lightbox>button');

    nowIdx=0;

    $books.on('click',function(evt){
        evt.preventDefault();
        
        nowIdx=$books.index(this);
       
        $shadow.eq(nowIdx).show();

        $btn.on('click',function(){
            $shadow.hide();
        });
    });

    $shadow.on('click',function(){
        $(this).hide();
    });

    $lightbox.on('click',function(evt){
        evt.stopPropagation();
    });

    $(document).on('keyup',function(evt){
        if(evt.which === 27){
            $shadow.hide();
        }
    });
