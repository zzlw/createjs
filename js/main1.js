/**
 * Created by ajex on 2017/4/10.
 */
var canvas,stage
function init() {
    canvas = document.getElementById("mainView");
    stage = new createjs.Stage(canvas);
    stageBreakHandler();
    createjs.Ticker.timingMode =  createjs.Ticker.RAF_SYNCHED;
    createjs.Ticker.setFPS(30);
    createjs.Ticker.addEventListener("tick", stageBreakHandler);

    createRain()
}
function createRain()
{
    var scount = 600;
    for(var i = 0;i < scount;i++)
    {
        var yudian = new lib.b();
        yudian.x = - 200 +  1920*Math.random();
        yudian.y = -20;
        yudian.gotoAndPlay(Math.ceil(Math.random()*yudian.totalFrames));//随机跳帧 防止所有雨点一起下来
        yudian.mouseEnabled = false;//一般特效都需要取消鼠标事件 已防止阻碍正常鼠标事件
        yudian.mouseChildren = false;
        stage.addChild(yudian);
        var scale = 0.2 + Math.random() * 0.8;
        yudian.scaleX = -scale;
        yudian.scaleY = scale;
        var a = 0.4 + Math.random()*0.3;
        yudian.alpha = a;

    }
}
function stageBreakHandler(event)
{
    stage.update();
}
