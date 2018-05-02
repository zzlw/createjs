## createjs 实现飘落动画

[![GitHub issues](https://img.shields.io/github/issues/zzlw/createjs.svg)](https://github.com/zzlw/createjs/issues)
[![GitHub forks](https://img.shields.io/github/forks/zzlw/createjs.svg)](https://github.com/zzlw/createjs/network)
[![GitHub stars](https://img.shields.io/github/stars/zzlw/createjs.svg)](https://github.com/zzlw/createjs/stargazers)
[![GitHub license](https://img.shields.io/github/license/zzlw/createjs.svg)](https://github.com/zzlw/createjs/blob/master/LICENSE)


代码很长哈，主要是为了做对象复用，对象复用是一个防止内存溢出的很好办法（如果不停的new会导致对象回收不了而造成内存溢出），当雪花超过屏幕的时候被回收，当雪花要被生成时，对象池又有对象，那对象直接被拿出来，既被复用（其实还有更简单的办法，就是超过屏幕时，直接放回顶端，但是这样复用做的比较死，万一短时间被不会马上被用到就不行了，所以我还是用了比较麻烦的对象池）。

这个动画完全没用animateCC，下落的动画也用算法直接写出来，那有些人又问了，我为什么不用tween来做呢，用tween明明更加简单，原因是这样的：tween采用的是真实时间，而不是帧，真实时间会有什么问题呢，如果你浏览器最小化一会再还原，你会发现雪花都变成了一堆，因为真实时间的运算导致它还原的瞬间把原来漏运行的动画给全部一起运行了。

有些人可能注意到了，大雪花片，会有漂浮效果，这是怎么做到的呢？其实也很简单，别设置中心点就好了，在0,0点旋转的时候，它会有个向上的过程，图片本身又是向下落的，这样上下一中和，就有种漂浮的感觉了。

以上的算法都是用js搭配createjs的api写的，其实这里api的成分并不多，只要大家掌握了核心思想，换哪种语言都可以写出来。
