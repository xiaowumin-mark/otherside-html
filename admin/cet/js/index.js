var home_ = lottie.loadAnimation({
    container: document.getElementById('sy'),  //播放的位置
    renderer: 'svg', 
    loop: false, //是否循环播放
    autoplay: true, //是否自动播放
    animationData: home // 加载json的文件名
});

let set_ = lottie.loadAnimation({
    container: document.getElementById('set'),
    renderer: 'svg', 
    loop: false, //是否循环播放
    autoplay: true, //是否自动播放
    animationData: set // 加载json的文件名
})

window.onload = function(){
    home_.play()
    set_.play()
}
 // 加载
//		    lottie.playAnimation();   //播放
//      	lottie.pauseAnimation();  //暂停
//      	lottie.cancelAnimation();  //取消
//      	lottie.getDuration();   //获取动画时长

let home_click = document.getElementById('item_home')
home_click.onclick = function () {
    home_.stop()
    home_.play()
}
let set_click = document.getElementById('item_set')
set_click.onclick = function () {
    set_.stop()
    set_.play()
}