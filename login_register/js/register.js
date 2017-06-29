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

    /**
     * 登录密码事件
     */
    var passwordClass = document.getElementsByClassName("password")[0];
    var passwordInput = passwordClass.getElementsByTagName("input")[0];
    var passwordP = passwordClass.getElementsByTagName("p")[0];
    var passwordI = passwordClass.getElementsByTagName("i")[0];
    var passwordSafeClass = document.getElementsByClassName("password-safe")[0];
    var pwdSafe = passwordSafeClass.getElementsByTagName("em");
    var pwdSafeLow = pwdSafe[0];
    var pwdSafeMid = pwdSafe[1];
    var pwdSafeHigh = pwdSafe[2];

    //登录密码输入框获取焦点
    passwordInput.onfocus = function () {
        passwordP.style.display = "inline-block";
        passwordP.innerHTML = "<i class = 'tip'></i>&nbsp;6-16个字符，请使用字母加数字或符号的组合密码，不能单独使用字母、数字或符号";
    };

    //登录密码输入框输入字符
    passwordInput.onkeyup = function () {
        if(this.value.length > 5 && this.value.length <10){
            pwdSafe[1].className = "select";
            pwdSafe[2].className = "unsel";
        }else if(this.value.length >= 10){
            pwdSafe[1].className = "select";
            pwdSafe[2].className = "select";
        }else{
            pwdSafe[0].className = "select";
            pwdSafe[1].className = "unsel";
            pwdSafe[2].className = "unsel";
        }
    };

    //登录密码输入框失去焦点
    passwordInput.onblur = function () {
        var re = /[^\w\u4e00-\u9fa5]/g;
        var re_n = /[^\d]/g;
        var re_t = /[^a-zA-Z]/g;

        //含有非法字符
        if(re.test(this.value)){
            passwordP.innerHTML = "<i class = 'err'></i>&nbsp;含有非法字符!";
        }else if(this.value == ""){
            passwordP.innerHTML = "<i class = 'err'></i>&nbsp;不能为空!";
        }else if (this.value.length > 16){
            passwordP.innerHTML = "<i class = 'err'></i>&nbsp;长度超过16个字符!";
        }else if(this.value.length < 6){
            passwordP.innerHTML = "<i class = 'err'></i>&nbsp;长度少于6个字符!";
        }else if(!re_n.test(this.value)){
            passwordP.innerHTML = "<i class = 'err'></i>&nbsp;不能全为数字!";
        }else if(!re_t.test(this.value)){
            passwordP.innerHTML = "<i class = 'err'></i>&nbsp;不能全为字母!";
        }else {
            passwordP.innerHTML = "<i class = 'ok'></i>&nbsp;OK!";
        }
    };

    /**
     * 确认密码事件
     */
    var confirmPwdClass = document.getElementsByClassName("confirmPwd")[0];
    var confirmPwdInput = confirmPwdClass.getElementsByTagName("input")[0];
    var confirmPwdP = confirmPwdClass.getElementsByTagName("p")[0];

    //确认密码输入框获得焦点
    confirmPwdInput.onfocus = function () {
        confirmPwdP.style.display = "inline-block";
        confirmPwdP.innerHTML = "<i class = 'tip'></i>&nbsp;请再输入一次!";
    };

    //确认密码输入框输入字符
    confirmPwdInput.onkeyup = function () {
        if(passwordInput.value != this.value){
            confirmPwdP.innerHTML = "<i class = 'err'></i>&nbsp;两次输入的密码不一致!";
        }else {
            confirmPwdP.innerHTML = "<i class = 'ok'></i>&nbsp;OK!";
        }
    };

    //确认密码输入框失去焦点
    confirmPwdInput.onblur = function () {

    };


    /*获得字符串字符数*/
    function getLength(str) {
        return str.replace(/[^\x00-xff]/g,"xx").length;
    }
};
