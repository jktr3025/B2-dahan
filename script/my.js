$(function(){
    //메뉴 방법 1
    // $(".main >li, .sub_bg").hover(function(){
    //     $(".sub, .sub_bg").stop().slideDown();
    // }, function(){
    //     $(".sub, .sub_bg").stop().slideUp();
    // })

    //메뉴 방법2
    $(".main >li, .sub_bg").mouseover(function(){
        $(".sub, .sub_bg").stop().slideDown();
    })    
    $(".main >li, .sub_bg").mouseout(function(){
        $(".sub, .sub_bg").stop().slideUp();

    })    
    //이미지 슬라이드 방법1
    // var n=0;
    // setInterval(function(){
    //     if(n == 2){
    //         n=0;
    //     }else{
    //         n++;
    //     }
    //     console.log(n);
    //     pos = n * (-300) + "px"
    //     $(".move_top").animate({top:pos},500)

    // },2000)//setInterval

    //이미지 슬라이드 방법2
    setInterval(function(){
        $(".move_top").animate({top:"-300px"}, 500, function(){
            $(".move_top").css({top:0});
            $(".move_top").append($(".move_top li").eq(0));
        })//animate
    },2000)//setInterval

    //팝업
    $(".p_click").click(function(){
        $(".pop, .pop_bg").show();
    })//
    $(".close").click(function(){
        $(".pop, .pop_bg").hide();
    })//

})//jquery