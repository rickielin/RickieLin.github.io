// 点击后拉到指定位置
function heightToTop(ele){
    //ele为指定跳转到该位置的DOM节点
    let bridge = ele;
    let root = document.body;
    let height = 0;
    do{
        height += bridge.offsetTop;
        bridge = bridge.offsetParent;
    }while(bridge !== root)

    return height - 100;
}
function scroll(goal){
    window.scrollTo({
        top:heightToTop(goal),
        behavior:'smooth'
    })
}
// 传两个id进来，实现滚动跳转
function scrollById(menuId, goalId){
    document.getElementById(menuId).addEventListener('click',
        (e) => scroll(document.getElementById(goalId)))
}
// function expand(expandEle,goalEle,height){
//     if (goalEle.style.maxHeight==='unset'){
//         goalEle.style.maxHeight=`${height}px`
//         expandEle.innerHTML='[Expand]'
//     }else {
//         goalEle.style.maxHeight='unset'
//         expandEle.innerHTML='[Collapse]'
//     }
// }
// // 传两个id进来，实现展开收起
// function oldExpandById(expandId, goalId, height){
//     let expandEle=document.getElementById(expandId)
//     let goalEle=document.getElementById(goalId)
//     expandEle.addEventListener('click',
//         (e) => expand(expandEle,goalEle,height))
// }

function expand(expandId,goalId,display = 'block'){
    let expandEle=document.getElementById(expandId)
    let goalEle=document.getElementById(goalId)
    expandEle.addEventListener('click',(e) => {
        if (expandEle.innerHTML==='[Collapse]'){
            expandEle.innerHTML='[Expand]'
            goalEle.style.display='none'
        }else {
            expandEle.innerHTML='[Collapse]'
            goalEle.style.display=display
        }
    })
}
// window.onload，浏览器加载完毕以后再执行，以免DOM节点还没渲染出来，导致document.getElementById获取不到东西导致事件绑定不上
// 但加载得也忒慢了，所以如果遇到首次加载绑定不上的，加一个setTimeout延迟
(window.onload = function (){
    // 导航栏点击跳转事件
    scrollById('toHome', 'toptitle')
    scrollById('toPublications', 'Publications')
    scrollById('toPatents','Patents')
    scrollById('toExperiences','Experiences')
    scrollById('toMiscellaneous','Miscellaneous')
    // 点击收起展开事件
    setTimeout(()=>expand('ExpandExperiences','expand1'),100)

})()
