$(document).ready(function (){

    (function() {

        var gamePlayer =location.search.match(/^\?id\=(\d{1,2})/);

        if(gamePlayer){
            tabInfoDta(wx_data,gamePlayer[1]);
        }
    })()

    /* 侧边栏提示按钮事件 */
    $(".qq-left").bind('click',function () {
        $(this).toggleClass("qq-left-active");
    })

    /* 搜索点击事件 */
    $("#search-btn").click(function () {
        var search_value = $("#search-value").val();
        var search_data=[];
        for(var i=0;i<wx_data.length;i++){
            if (wx_data[i].name == search_value) {
                search_data.push(wx_data[i]);
                tabInfoDta(search_data);
                $("#search-tips").text("");
                return
            }
        }
        if (search_data.length == 0){
            $("#search-tips").text("没有找到这个小程序呀！！！").css({"color": "#fff"});
        }
    })
})

function tabInfoDta(data,gamePlayer){
    var tab="";
    for(var i=0;i<data.length;i++){
        if(data[i].id == gamePlayer||data.length == 1){
            tab +='<div class="m-programtab-tt clearfix">'
            tab += '<div class="programtab-name col-xs-12 col-sm-6 col-md-4">'
            tab += '<div class="programtab-img"><img src="img/' + data[i].url + '"></div>'
            tab += '<h2>' + data[i].name + '</h2>'
            tab += '<span>发布者：' + data[i].developer + '</span><br>'
            tab += '<span>发布时间：' + data[i].date + '</span>'
            tab += '</div>'
            tab += '<div class="programtab-img col-xs-12 col-sm-6 col-md-4">'
            tab += '<img src="img/' + data[i].url2+'" alt="">'
            tab += '<span>微信扫码体验</span>'
            tab += '</div>'
            tab += '</div>'
            tab += '<div class="m-programtab-ct">'
            tab += '<h4>应用介绍</h4>'
            tab += '<p> ' + data[i].info + '</p>'
            $(".m-programtabInfo").empty().append(tab);
            $(".breadcrumb").empty().append('<li>'+data[i].type+'</li><li>'+data[i].name+'</li>')
        }
    }
}
