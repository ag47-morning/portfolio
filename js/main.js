$(function(){
    /////////// head event ///////////

    // scroll
    var index = 0;
    var hdArray = new Array();
    var secTop;
    for(var j = 0; j<$("#hd .hd1li").length; j++) {
        secTop = $("#container section").eq(j).offset().top;
        secTop = Number(secTop);
        hdArray.push(secTop);
    }
    // console.log(hdArray);
    $(window).on("mousewheel DOMMousewheel scroll", function(){
        var winH = $(this).scrollTop();
        if(winH < (hdArray[1]-150)) index = 0;
        else if (winH < (hdArray[2]-150)) index = 1;
        else if (winH < (hdArray[3]-150)) index = 2;
        else if (winH >= (hdArray[3]-150)) index = 3;
        $("#hd .hd1li").removeClass('active');
        $("#hd .hd1li").eq(index).addClass('active');
    })
    var ani = false;
    $("#hd .hd1li").on("click", function(e){
        e.preventDefault();
        if(ani) return;
        ani = true;
        index = $(this).index();
        $("#hd .hd1li").removeClass('active');
        $("#hd .hd1li").eq(index).addClass('active');
        $("html, body").stop().animate({scrollTop:hdArray[index]}, 400, function(){ani=false;});
    })

    // hd open, close
    $("#mark, #empty").on("click", function(){
        var hdW = Number($("header").css("width").split('px')[0]);
        var winW = window.innerWidth / 100;
        var hdP = Math.ceil(hdW/winW);

        $("#mark").toggleClass('open');
        $("#empty").toggleClass('open');
        $("header").toggleClass('open');
        if ($("header").hasClass('open')) {
            $("header").stop().animate({left:(100-hdP)+"%"},300);
        }
        else $("header").stop().animate({left:"100%"},300);
    })
    
})