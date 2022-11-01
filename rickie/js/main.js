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
(function (){
    scrollById('toHome', 'toptitle')
    scrollById('toPublications', 'Publications')
    scrollById('toPatents','Patents')
    scrollById('toExperiences','Experiences')
    scrollById('toMiscellaneous','Miscellaneous')
})()
