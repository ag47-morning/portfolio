$(function(){
    $.ajax({
        crossOrigin: true,
        dataType: "json",
        type: "GET",
        url: "http://www.ag47morning.com/js/lookup.php",
        success: function(data){
            var info = 0;
            for(info=0; info<data.length; info++){
                var inline_img = 'url(../images/'+data[info].pd_image+')';
                $(".port_wr").append(
                    '<div class="project" data-hash="'+data[info].pd_index+'" style="background-image:'+inline_img+'">'
                        +'<div class="project_desc">'
                            +'<div class="project_name">'+data[info].pd_name+'</div>'
                            +'<div class="project_time">제작 기간 : <span>'+data[info].pd_time+'</span>시간</div>'
                            +'<div class="project_per">제작 참여도 : <span>'+data[info].pd_per+'</span>%</div>'
                        +'</div>'
                    +'</div>'
                )
                // $(".project").css("background-image","url(../"+data[info].pd_image+")");
            }
            $(".project").on("click",function(e){
                e.stopPropagation();
                info = $(this).index();
                var infos = $(this).attr("data-hash");
                $(".project").eq(info).addClass('open');
                $("#empty2").toggleClass('open');
                $(".popup_wr").toggleClass('open');
                $(".pp_img a").attr("href",data[info].pd_link).css("background-image","url(../images/"+data[info].pd_image+")");
                $(".pp_name").text(data[info].pd_name);
                $(".pp_time").text(data[info].pd_time);
                $(".pp_per").text(data[info].pd_per);
                $(".pp_link").attr("href",data[info].pd_link).text(data[info].pd_link);
                $(".pp_lang").text(data[info].pd_lang);
                $(".pp_git").attr("href",data[info].pd_git).text(data[info].pd_git);
                $(".pp_txt").html(data[info].pd_descA);
                console.log(info);
                console.log(info);
            })
        }
    })
})