function animate(obj,tar,fun){
    //执行前先停止定时器，防止冲突
  
    clearInterval(obj.timer);
  
    obj.timer=setInterval(function(){
        //算法，让盒子每次移动的值变小
    var s=(tar-obj.offsetLeft)/20;
    //因为s=0.1的时候默认是0了，就不移动了，所以设置0.1的时候是1，-0.1的时候是-1
    if(s>0){
log();
       s= Math.ceil(s)
    }else{
        s= Math.floor(s)
    }
   //如果距离等于目标值，就结束定时器，但是结束后方法会继续执行，所以要return停止方法
    if(obj.offsetLeft==tar){
        clearInterval(obj.timer);
        if(fun){
            fun();
        }
        return false
    }
    //核心，每10毫秒执行一次当前距离+需要移动的距离
    obj.style.left=obj.offsetLeft+s+'px';
},10)
}