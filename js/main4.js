/**
 * Created by ajex on 2017/4/11.
 */
var canvas,stage,container1,container2,images = {};
function init() {
    createjs.MotionGuidePlugin.install();
    canvas = document.getElementById("mainView");
    stage = new createjs.Stage(canvas);
    container1 = new createjs.Container();//后雪景容器
    stage.addChild(container1);
    container2 = new createjs.Container();//前雪景容器
    stage.addChild(container2);

    var loader = new createjs.LoadQueue(false);
    loader.addEventListener("fileload", handleFileLoad);
    loader.addEventListener("complete",completeHandler);
    loader.loadManifest([
        {src:"images/xue1.png", id:"snow1"},
        {src:"images/xue2.png", id:"snow2"},
        {src:"images/xue3.png", id:"snow3"},
        {src:"images/xue4.png", id:"snow4"},
        {src:"images/xue5.png", id:"snow5"},
        {src:"images/xue6.png", id:"snow6"},
        {src:"images/xue7.png", id:"snow7"},
        {src:"images/xue8.png", id:"snow8"}
    ]);

    createjs.Ticker.timingMode =  createjs.Ticker.RAF_SYNCHED;
    createjs.Ticker.setFPS(60);
    createjs.Ticker.addEventListener("tick", stageBreakHandler);
}
function handleFileLoad(evt) {
    if (evt.item.type == "image") { images[evt.item.id] = evt.result; }
}
function completeHandler(event)
{
    event.currentTarget.removeEventListener("fileload",handleFileLoad);
    event.currentTarget.removeEventListener("complete",completeHandler);
    stageBreakHandler();
    createSnow();
}

//雪花数组 用作回收
var _snow1List = [];
var _snow2List = [];
var _snow3List = [];
var _snow4List = [];
var _snow5List = [];
var _snow6List = [];
var _snow7List = [];
var _snow8List = [];
var _frameIndex = 0;
function createSnow()
{
    var i;
    var snow;
    var scale;
    for(i = 0;i < 100;i++)
    {
        //后景雪
        snow = getSnow(1);
        scale = 0.2 + Math.random() * 0.3;
        snow.scaleX = scale;
        snow.scaleY = scale;
        snow.x = Math.random() * 1920;
        snow.y =  Math.random() * 800;
        snow.speed = 0.5 + Math.random() * 1;
        snow.rotation = 360 * Math.random();
        container1.addChild(snow);

        //前景雪
        snow = getSnow(0);
        scale = 0.6 + Math.random() * 0.4;
        snow.scaleX = scale;
        snow.scaleY = scale;
        snow.x = Math.random() * 1920;
        snow.y = Math.random() * 800;
        snow.speed = 0.7 + Math.random() * 1.3;
        snow.rotation = 360 * Math.random();
        container2.addChild(snow);
    }
}
function lightFrameHandler()
{
    var i;
    var snow;
    var scale;

    if(_frameIndex % 10 == 0)
    {
        //后景雪
        snow = getSnow(1);
        scale = 0.2 + Math.random() * 0.3;
        snow.scaleX = scale;
        snow.scaleY = scale;
        snow.x = Math.random() * 1920;
        snow.y = - 20;
        snow.speed = 0.5 + Math.random() * 1;
        container1.addChild(snow);

        //前景雪
        snow = getSnow(0);
        scale = 0.6 + Math.random() * 0.4;
        snow.scaleX = scale;
        snow.scaleY = scale;
        snow.x = Math.random() * 1920;
        snow.y = - 20;
        snow.speed = 0.7 + Math.random() * 1.3;
        container2.addChild(snow);
    }


    var mc

    for(i = 0; i < container1.numChildren;i++)
    {
        mc = container1.getChildAt(i);
        if(mc.y > 850)
        {
            if(mc.parent) mc.parent.removeChild(mc);
            this["_snow" + mc.type + "List"].push(mc);
        }
        mc.x -= 0.1;
        mc.y += mc.speed;
    }
    for(i = 0; i < container2.numChildren;i++)
    {
        mc = container2.getChildAt(i);
        if(mc.y > 850)
        {
            if(mc.parent) mc.parent.removeChild(mc);
            this["_snow" + mc.type + "List"].push(mc);
        }
        mc.x -= 0.2;
        mc.y += mc.speed;
        mc.rotation +=1;
    }
    _frameIndex++;
}
//为什么不直接做成一个对象，通过参数改变子对象呢？
// 因为如果这样做new一个对象，相当于new所有子对象，
// 而且这个对象本身又new的多 这种情况生成多个对象时很浪费性能的
function getSnow(type)
{
    var snow;
    switch(type)
    {
        case 0://0时随机
        {
            var random = Math.random();
            if(random >= 0 && random < 0.2 )
            {
                snow = getSnow(1);
            }
            else if(random >= 0.2 && random< 0.4)
            {
                snow = getSnow(2);
            }
            else if(random >=0.4 && random < 0.6)
            {
                snow = getSnow(3);
            }
            else if(random >= 0.6 && random < 0.8)
            {
                snow = getSnow(4);
            }
            else if(random >=0.8 && random < 0.85)
            {
                snow = getSnow(5);
            }
            else if(random >= 0.85 && random < 0.9)
            {
                snow = getSnow(6);
            }
            else if(random >=0.9 && random < 0.95)
            {
                snow = getSnow(7);
            }
            else if(random >= 0.95)
            {
                snow = getSnow(8);
            }
            break;
        }

        case 1:
        {
            if(_snow1List.length > 0)
            {
                snow = _snow1List.shift();
            }
            else
            {
                snow = new createjs.Bitmap(images.snow1);
            }
            snow.type = type;
            break;
        }
        case 2:
        {
            if(_snow2List.length > 0)
            {
                snow = _snow2List.shift();
            }
            else
            {
                snow = new createjs.Bitmap(images.snow2);
            }
            snow.type = type;
            break;
        }
        case 3:
        {
            if(_snow3List.length > 0)
            {
                snow = _snow3List.shift();
            }
            else
            {
                snow = new createjs.Bitmap(images.snow3);
            }
            snow.type = type;
            break;
        }
        case 4:
        {
            if(_snow4List.length > 0)
            {
                snow = _snow4List.shift();
            }
            else
            {
                snow = new createjs.Bitmap(images.snow4);
            }
            snow.type = type;
            break;
        }
        case 5:
        {
            if(_snow5List.length > 0)
            {
                snow = _snow5List.shift();
            }
            else
            {
                snow = new createjs.Bitmap(images.snow5);
            }
            snow.type = type;
            break;
        }
        case 6:
        {
            if(_snow6List.length > 0)
            {
                snow = _snow6List.shift();
            }
            else
            {
                snow = new createjs.Bitmap(images.snow6);
            }
            snow.type = type;
            break;
        }
        case 7:
        {
            if(_snow7List.length > 0)
            {
                snow = _snow7List.shift();
            }
            else
            {
                snow = new createjs.Bitmap(images.snow7);
            }
            snow.type = type;
            break;
        }
        case 8:
        {
            if(_snow8List.length > 0)
            {
                snow = _snow8List.shift();
            }
            else
            {
                snow = new createjs.Bitmap(images.snow8);
            }
            snow.type = type;
            break;
        }
        default:
        {
            break;
        }
    }
    return snow;
}
function stageBreakHandler(event)
{
    lightFrameHandler();
    stage.update();
}