/**
 * Created by Stiven on 2017/6/19.
 */
;(function ($) {
    var Carousel = function (poster) {

        //保存单个旋转木马对象
        this.poster = poster;
        this.posterItemMain = poster.find("ul.poster-list");
        this.nextBtn = poster.find("div.poster-next-btn");
        this.prevBtn = poster.find("div.poster-prev-btn");
        this.posterItems = poster.find("li.poster-item");
        this.posterFirstItem = this.posterItems.first();
        // if(this.posterItems.size()%2==0){
        //     this.posterItemMain.append(this.posterItems.eq(0).clone());
        //     this.posterItems = this.posterItemMain.children();
        // };
        // this.posterFirstItem  = this.posterItems.first();
        // this.posterLastItem  = this.posterItems.last();

        //默认配置参数
        this.setting = {
            "width":1000,			//幻灯片的宽度
            "height":270,				//幻灯片的高度
            "posterWidth":640,	//幻灯片第一帧的宽度
            "posterHeight":270,	//幻灯片第一帧的高度
            "scale":0.9,					//记录显示比例关系
            "speed":500,
            "autoPlay":false,
            "delay":5000,
            "verticalAlign":"middle" //top bottom
        };
        $.extend(this.setting,this.getSetting());

        //设置配置参数值
        this.setSettingValue();
    };

    Carousel.prototype = {

        //设置配置参数值去控制基本的宽度高度。。。
        setSettingValue:function () {
            this.poster.css({
                width:this.setting.width,
                height:this.setting.height
            });

            this.posterItemMain.css({
                width:this.setting.width,
                height:this.setting.height,
            });
            //计算上下切换按钮的宽度
            var w = (this.setting.width-this.setting.posterWidth)/2;
            //设置切换按钮的宽高，层级关系
            this.nextBtn.css({
                width:w,
                height:this.setting.height,
                zIndex:Math.ceil(this.posterItems.size()/2)
            });
            this.prevBtn.css({
                width:w,
                height:this.setting.height,
                zIndex:Math.ceil(this.posterItems.size()/2)
            });

            this.posterItems.css({
                width:this.setting.posterWidth,
                height:this.setting.posterHeight,
                left:w,
                top:0,
                zIndex:Math.floor(this.posterItems.size()/2)
            });

            this.posterFirstItem.css({
                zIndex:Math.floor(this.posterItems.size()/2)
            });
        },

        //获取人工配置参数
        getSetting:function(){
            var setting = this.poster.attr("data-setting");
            if(setting&&setting!=""){
                return $.parseJSON(setting);
            }else{
                return {};
            };
        }
    };

    Carousel.init = function(posters){
        var _this_ = this;
        posters.each(function(){
            new  _this_($(this));
        });
    };
    window["Carousel"] = Carousel;

})(jQuery);