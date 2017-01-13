/**
 * Created by ivws on 2017/1/9.
 */
$(document).ready(function () {
    tabList(wx_data,true,false);
    newsList(news_data,true,false);
    /* 侧边栏提示按钮事件 */
    $(".qq-left").bind('click', function () {
        $(this).toggleClass("qq-left-active");
    })
    /* 导航栏点击事件 */
    $(".typenav-btn").click(function () {
        $(this).addClass('m-typenav-active').siblings().removeClass("m-typenav-active");

        $("#programTab").css({"display": "block"}); //小程序选项卡
        $("#programTabwrap").css({"display": "none"}); //最近更新
        $("#hotnews-wrap").css({"display": "none"}); //新闻列表容器
        $("#banner").css({"display": "none"}); //焦点图容器
        if ($(this).text() == '实用工具') {
            tabList(type1,false,true);
            breadcrumbLISt($(this).text());
        } else if ($(this).text() == '社交生活') {
            tabList(type2,false,true);
            breadcrumbLISt($(this).text());
        } else if ($(this).text() == '金融理财') {
            tabList(type3,false,true);
            breadcrumbLISt($(this).text());
        } else if ($(this).text() == '影音娱乐') {
            tabList(type4,false,true);
            breadcrumbLISt($(this).text());
        } else if ($(this).text() == '教育学习') {
            tabList(type5,false,true);
            breadcrumbLISt($(this).text());
        } else if ($(this).text() == '最新咨讯') {
            newsList(news_data,false,true);
            $("#hotnews-wrap").css({"display": "block"}); //新闻列表容器
            $(".m-hotnews2").css({"display": "block"}); //最新资讯
            $("#banner").css({"display": "block"}); //焦点图容器
            $("#s-hotnews").css({"display":"none"}); // 热点推荐
            $("#programTab").css({"display": "none"}); // 小程序选项卡

        } else if ($(this).text() == '首页') {
            tabList(wx_data, true);
            newsList(news_data,true,false);

            $("#hotnews-wrap").css({"display": "block"});  //新闻列表容器
            $("#s-hotnews").css({"display":"block"}); // 热点推荐
            $("#banner").css({"display": "block"}); //焦点图容器
            $("#programTabwrap").css({"display": "block"}); //最近更新
            $(".m-hotnews2").css({"display": "none"}); //最新资讯
            /* 路由路由路由 */
            breadcrumbLISt("");
        }
    })

    /* 热文推荐查看更多按钮 */
    $("#l_newslist").click(function () {
        newsList(news_data,false,true);
        $(".m-hotnews2").css({"display": "block"});
        $("#s-hotnews").css({"display":"none"});
    })

    /* 搜索点击事件 */
    $("#search-btn").click(function () {
        var search_value = $("#search-value").val();//获取搜索值
        var search_data = [];//存放匹配到的数据

        var search_reg =new RegExp("[\\" +search_value+ "]","g");//匹配搜索值
        //console.log(search_reg);
        for (var i = 0; i < wx_data.length; i++) {
            //console.log(wx_data[i].name );
            if (search_reg.test( wx_data[i].name)) {
                search_data.push(wx_data[i]);
                $("#search-tips").text("");
            }
        }

        if (search_data.length == 0) {
            $("#search-tips").text("没有找到这个小程序呀！！！").css({"color": "#fff"});
        }else {
            tabList(search_data);
        }
    })
});

/* 小程序选项卡html */
function tabList(data, newslist,list) {
    var tab;
    $("#programTab").empty();
    $("#programTab2").empty();
    for (var i = 0; i < data.length; i++) {
        tab = '<li class="programtab-wrap col-xs-6 col-sm-4 col-md-2" data-id="' + data[i].id + '">'
        tab += '<div class=programtab-imgwrap>'
        tab += '<img src="img/' + data[i].url + '">'
        tab += '<div class="programtab-codewrap">'
        tab += '<img src="img/' + data[i].url2 + '">'
        tab += ' </div>'
        tab += '</div>'
        tab += '<h5>' + data[i].name + '</h5>'
        tab += ' <p>发布者：' + data[i].developer + '</p>'

        if(list){
            $("#programTab").append(tab);
        }
        if (newslist && i < 4) {
            $("#programTab2").append(tab);
        }
    }
    /* 小程序选项卡点击 */
    $(".programtab-wrap").click(function(){
        window.location.href = "details.html?id=" + $(this).data('id');
    })
    
}
/* 面包屑导航 */
function breadcrumbLISt(data) {
    var list;
    $(".breadcrumb").empty().append('<li>首页</li><li>' + data + '</li>')
}

/* 新闻信息 */
function newsList(data,s_hotnews,l_hotnews) {
    $("#hotnews-listwrap").empty();
    $("#hotnews-list-wrap").empty();
    var newshtml="";
    var s_newshtml="";
    for (var i = 0; i < data.length; i++) {
        newshtml+= '<li class="hotnews-li" data-id='+data[i].id+'>';
        newshtml+= '<div class=imgwrap><img src="img/' + data[i].url + '"></div>';
        newshtml+= '<h3>'+data[i].name+'</h3>';
        newshtml+= '<p><span>作者：'+data[i].developer+'</span> · <span>'+data[i].date+'</span></p>';
        newshtml+= '<p class="info">'+data[i].sinfo+'</p>';

        if (s_hotnews && i<5){
            s_newshtml='<li class="hotnews-li2" data-id='+data[i].id+' ><a>'+(i+1)+'. '+data[i].name+'</a></li>';
            $("#hotnews-listwrap").append(s_newshtml);

            /* 新闻列表点击事件 */
            $(".hotnews-li2").click(function () {
                window.location.href = "newsinfo.html?id=" + $(this).data('id');
            })
        }
    }
    if(l_hotnews){
        $("#hotnews-list-wrap").append(newshtml);
        $(".hotnews-li").click(function () {
            window.location.href = "newsinfo.html?id=" + $(this).data('id');
        })
    }
}



