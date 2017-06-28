/**
 * Created by Stiven on 2017/6/28.
 */

function $(id) {
    return typeof id == 'string' ? document.getElementById(id) : id;
}

window.onload = function () {

    /**
     * 用户名事件
     */
    var userNameClass = document.getElementsByClassName("username")[0];
    var userNameInput = userNameClass.getElementsByTagName("input")[0];
    var userNameP = userNameClass.getElementsByTagName("p")[0];
    var userNameI = userNameClass.getElementsByTagName("i")[0];
    var count = $("count");
    var nameLength = 0;

    /**
     * 用户名输入框获得焦点
     */
    userNameInput.onfocus = function () {
        userNameP.style.display = "inline-block";
        userNameP.innerHTML = "<i class = 'tip'></i>&nbsp;6-25个字符，一个汉字为两个字符，推荐使用中文会员名";
    };

    /**
     * 用户名输入框输入字符
     */
    userNameInput.onkeyup = function () {
        count.style.visibility = "visible";
        nameLength = getLength(this.value);
        count.innerHTML = nameLength + "个字符";
        if(nameLength == 0){
            count.style.visibility = "hidden";
        }
    };

    /**
     * 用户名输入框失去焦点
     */
    userNameInput.onblur = function () {

        var re = /[^\w\u4e00-\u9fa5]/g;

        //含有非法字符
        if(re.test(this.value)){
            userNameP.innerHTML = "<i class = 'err'></i>&nbsp;含有非法字符!";
        }else if(this.value == ""){
            userNameP.innerHTML = "<i class = 'err'></i>&nbsp;不能为空!";
        }else if (nameLength > 25){
            userNameP.innerHTML = "<i class = 'err'></i>&nbsp;长度超过25个字符!";
        }else if(nameLength < 6){
            userNameP.innerHTML = "<i class = 'err'></i>&nbsp;长度少于6个字符!";
        }else {
            userNameP.innerHTML = "<i class = 'ok'></i>&nbsp;OK!";
        }
    };


    /*获得字符串字符数*/
    function getLength(str) {
        return str.replace(/[^\x00-xff]/g,"xx").length;
    }
};
