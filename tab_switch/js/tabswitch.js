/**
 * Created by rptang on 2017/6/24.
 */
function $(id) {
    return typeof id == 'string' ? document.getElementById(id) : id;
}

window.onload = function () {

    //时间对象
    var timer = null;
    var index = 0;

    //获取鼠标滑过或点击的标签和要切换内容的元素
    var tabList = $("tab_list").getElementsByTagName("li");
    var tabContentList = $("tab_content").getElementsByTagName("div");

    if(tabList.length != tabContentList.length) return;

    for(var i = 0; i < tabList.length; i++){
        tabList[i].id = i;
        tabList[i].onmouseover = function () {
            clearInterval(timer);
            changeOption(this.id);
        };
        tabList[i].onmouseout = function () {
            timer = setInterval(autoPlay,2000);
        };
    }

    //清空定时器
    if(timer){
        clearInterval(timer);
    }

    //添加定时器
    timer = setInterval(autoPlay,2000);

    //更换选项卡
    function changeOption(curIndex){
        //清除所有li上的className
        for(var j = 0; j < tabList.length; j++){
            tabList[j].className = "";
            tabContentList[j].style.display = "none";
        }
        //设置当前为高亮显示
        tabList[curIndex].className = "select";
        tabContentList[curIndex].style.display = "block";
        index = curIndex;
    };

    //自动切换函数
    function autoPlay() {
        index++;
        if(index >= tabList.length){
            index = 0;
        }
        changeOption(index);
    }
}
