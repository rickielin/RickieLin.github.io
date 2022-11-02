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
function expand(expandEle,goalEle,height){
    if (goalEle.style.maxHeight==='unset'){
        goalEle.style.maxHeight=`${height}px`
        expandEle.innerHTML='[Expand]'
    }else {
        goalEle.style.maxHeight='unset'
        expandEle.innerHTML='[Collapse]'
    }
}
// 传两个id进来，实现展开收起
function expandById(expandId, goalId, height){
    let expandEle=document.getElementById(expandId)
    let goalEle=document.getElementById(goalId)
    expandEle.addEventListener('click',
        (e) => expand(expandEle,goalEle,height))
}

(function (){
    // 导航栏点击跳转事件
    scrollById('toHome', 'toptitle')
    scrollById('toPublications', 'Publications')
    scrollById('toPatents','Patents')
    scrollById('toExperiences','Experiences')
    scrollById('toMiscellaneous','Miscellaneous')
    // 点击收起展开事件
    expandById('ExpandPublications', 'Publications',260)

})()
