/**
 * Created by ajex on 2017/4/10.
 */
var canvas,stage
function init() {
    createjs.MotionGuidePlugin.install();
    canvas = document.getElementById("mainView");
    stage = new createjs.Stage(canvas);
    stageBreakHandler();
    createjs.Ticker.timingMode =  createjs.Ticker.RAF_SYNCHED;
    createjs.Ticker.setFPS(30);
    createjs.Ticker.addEventListener("tick", stageBreakHandler);


    createLight()
}
function createLight()
{
    var scount = 300;
    for(var i = 0;i < scount;i++)
    {
        var light = new lib.lightY();
        light.x = 1920*Math.random();
        light.y = 600;
        light.gotoAndPlay(Math.ceil(Math.random()*light.totalFrames));
        light.mouseEnabled = false;
        light.mouseChildren = false;
        stage.addChild(light);
        var scale = 0.3 + Math.random() * 0.7;
        var arrow = Math.random() > 0.5?1:-1;//左右2个方向随机
        light.scaleX = scale*arrow;
        light.scaleY = scale;
        var a = 0.4 + Math.random()*0.3;
        light.alpha = a;

    }
}
function stageBreakHandler(event)
{
    stage.update();
}
