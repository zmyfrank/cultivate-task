/**
 * Created by ivws on 2017/1/11.
 */
$(document).ready(function (){

    /* 侧边栏提示按钮事件 */
    $(".qq-left").bind('click',function () {
        $(this).toggleClass("qq-left-active");
    });


    (function() {
        var newsid = location.search.match(/^\?id\=(\d{1,2})/);
        newsInfo(news_data,newsid[1]);
    })()
})


function newsInfo(data,newsid) {

    newsif="";
    for(var i=0;i<data.length;i++){
        if (data[i].id == newsid) {
            newsif+='<div class="m-newsinfo">'
            newsif+=  '<div><h1>'+data[i].name+'</h1><p><span>作者：'+data[i].developer+'</span> · <span>'+data[i].date+'</span></p><p>（如有侵权，请联系删除）</p></div>'
            newsif+='<div>'+data[i].info+'</div>'
            $(".breadcrumb").empty().append('<li>最新资讯</li><li>'+data[i].name+'</li>')
        }
    }
    $("#m-newsinfo-wrap").empty().append(newsif);

}




