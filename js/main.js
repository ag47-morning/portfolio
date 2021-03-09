$(function(){

    var agent = navigator.userAgent.toLowerCase();

    if ( (navigator.appName == 'Netscape' && navigator.userAgent.search('Trident') != -1) || (agent.indexOf("msie") != -1) ){
        $("#body").css("display","none");
        $("#ie").css("display","block");
    }

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
/////////// head event finish ///////////

$(document).ready(function(){
    /////////// #home event ///////////
    var a = 0;
    var b;
    var c = 0;
    var flipTime = 2000;
    var flip_item = $("#home .flip_item");
    var flipOption = new Array();
    for (var h = 0; h <flip_item.length; h++) {
        b = flip_item.eq(h).css('transform');
        flipOption.push(b);
    }
    
    function flipDown() {
        
        $("#flip").css('transform','rotateX('+(c*90)+'deg)');
        flip_item.css('opacity',0);
        flip_item.eq(a).stop().animate({opacity:1},flipTime/100);
        a++; c++;
        if (a >=flip_item.length) a = 0;
        flip_item.eq(a).stop().animate({opacity:0},flipTime/10);
        
    }
    
    setInterval(function(){flipDown();},flipTime);
    /////////// #home event finish ///////////
    
    /////////// .skill effect  ///////////
    var x;
    var skill_item = $("#about .skill_item");
    var skill_cir = $(".skill_cir");
    // var skill_cir_desc = Number($("#about .skill_cir_desc").text().split('%')[0]);
    var skill_cir_desc = new Array();
    var skill_cir_width = Number(skill_cir.css("width").split("px")[0])-5;
    if (window.innerWidth <=700) {
        skill_cir_width = Number(skill_cir.css("width").split("px")[0])-8;
    }
    for (var zz = 0; zz < skill_item.length; zz++) {
        x = skill_item.eq(zz).text();
        skill_cir_desc.push(Number(x.split('%')[0]));
    }
    console.log(skill_cir_desc);
    for (var z = 0; z<skill_item.length; z++) {
        skill_item.eq(z).find(".skill_cir_bak").css("border-bottom-width",( (skill_cir_width/100)*skill_cir_desc[z] )+"px");
    }

    /////////// .skill effect finish  ///////////

    // project open, close
    $("#empty2, #project_close").on("click", function(){
        $(".project").removeClass('open');
        $("#empty2").toggleClass('open');
        $(".popup_wr").toggleClass('open');
    })
})