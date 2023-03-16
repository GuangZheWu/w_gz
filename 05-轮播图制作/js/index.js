//当html和css加载完之后执行
window.addEventListener('load',function(){
    //左箭头
    var arrow_l=document.querySelector('.arrow-l');
    //右箭头
    var arrow_r=document.querySelector('.arrow-r');
    //大盒子
    var focus=document.querySelector('.focus');
    //初始化定时器
    var dingshiqi=0;
    //移入大盒子显示箭头
    focus.addEventListener('mouseenter',function(){
        //显示左右箭头
        arrow_l.style.display='block'
        arrow_r.style.display='block'
        //停止定时器
        clearInterval(dingshiqi);
    })
    //移出大盒子隐藏箭头
    focus.addEventListener('mouseleave',function(){
        // 隐藏左右箭头
        arrow_l.style.display='none'
        arrow_r.style.display='none'
        // 继续执行定时器
        dingshiqi=setInterval(function () {
            sd();
            },2000);
    })
    //要移动的ul
    var ul=document.querySelector('.focus ul');
    //小圆点的父类
    var ol=document.querySelector('.circle');
    // 控制图片
    var num=0;
    // 控制小圆点
    var number=0;
    for(var i=0;i<ul.children.length;i++){
        //循环创建li
        var li=document.createElement('li');
        //循环设置li的自定义属性
        li.setAttribute('date-index',i)
        //
        li.addEventListener('click',function(){
            num=this.getAttribute('date-index')
            number=this.getAttribute('date-index')
            //排他 清除所有的样式
            for(var i=0;i<ol.children.length;i++){
                ol.children[i].className='';
            }
            //保留自己
            this.className='current';
            var index=this.getAttribute('date-index');
            animate(ul,-index*focus.offsetWidth)
        })
        ol.appendChild(li) 
    }
    // 克隆第一个li放到ul的最后
    var kelong=ul.children[0].cloneNode(true);
    ul.appendChild(kelong)

    // 默认第一个小圆圈是选中的
    ol.children[0].className='current';

    
    arrow_r.addEventListener('click',sd)
    function sd(){
        if(num==ul.children.length-1){
            num=0;
            ul.style.left=0;
        }
        
     num++;
     number++;
     if(number==ol.children.length){
        number=0;
     }
     for(var i=0;i<ol.children.length;i++){
        ol.children[i].className='';
     }
     ol.children[number].className='current';
     animate(ul,-num*focus.offsetWidth)
        
    }
    arrow_l.addEventListener('click',function(){
        if(num==0){
            num=4;
            number=4;
        }
        num--;
        number--;
        animate(ul,-num*focus.offsetWidth);
        for(var i=0;i<ol.children.length;i++){
            ol.children[i].className='';
         }
        ol.children[number].className='current';

    })
    
    dingshiqi=setInterval(function () {
        sd();
        },2000);

    var s=document.querySelector('.w329');
    s.addEventListener('click',function(){
       
        animates(s,0)
        
    })
    function animates(obj, target, callback) {
        // console.log(callback);  callback = function() {}  调用的时候 callback()
    
        // 先清除以前的定时器，只保留当前的一个定时器执行
        clearInterval(obj.timer);
        obj.timer = setInterval(function() {
            // 步长值写到定时器的里面
            // 把我们步长值改为整数 不要出现小数的问题
            // var step = Math.ceil((target - obj.offsetLeft) / 10);
            var step = (target - window.pageYOffset) / 10;
            step = step > 0 ? Math.ceil(step) : Math.floor(step);
            if (window.pageYOffset == target) {
                
                // 停止动画 本质是停止定时器
                clearInterval(obj.timer);
                // 回调函数写到定时器结束里面
                // if (callback) {
                //     // 调用函数
                //     callback();
                // }
                callback && callback();
            }
            // 把每次加1 这个步长值改为一个慢慢变小的值  步长公式：(目标值 - 现在的位置) / 10
           window.scroll(0,window.pageYOffset+step)
           
    
        }, 15);
    }

})