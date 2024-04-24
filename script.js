const circle =document.querySelector(".circle")
const text =circle.innerText

circle.innerText ='';
for (let i = 0; i < text.length; i++){
    let letter = text[i]
    let span =document.createElement('span')
    span.innerText = letter;
    let r =(360/text.length)*i;
    span.style.transform ='rotate(' + r + 'deg)';
    circle.appendChild(span);
}


let panel=document.querySelectorAll('.panel');

// 设置选中态样式
function setActive(){
    // 遍历所有.item元素，移出active样式
    panel.forEach((panel)=>{
        panel.classList.remove('active');
    })
    // 为当前选中项添加active样式
    this.classList.add('active');
}
// 遍历所有.item元素，分别为其设置点击事件
panel.forEach((panel)=>{
    panel.addEventListener('click',setActive);
})
  