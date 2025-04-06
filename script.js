const faces=[
    'image/1.jpg',
    'image/2.jpg',
    'image/3.jpg',
    'image/4.jpg',
    'image/5.jpg',
    'image/6.jpg',
    'image/7.jpg',
    'image/8.jpg',
    'image/9.jpg',
    'image/1.jpg',
    'image/2.jpg',
    'image/3.jpg',
    'image/4.jpg',
    'image/5.jpg',
    'image/6.jpg',
    'image/7.jpg',
    'image/8.jpg',
    'image/9.jpg',
]
btn=document.getElementById("btn");
let backs=document.getElementsByClassName('back')
let cards=document.getElementsByClassName("card")
btn.addEventListener("click",function(){window.location.reload()});
var nbr=0

var s=0
let container=document.getElementById("container");
faces.sort(()=>Math.random()-0.5)
for(let i=0;i<backs.length;i++)
{
    imgback=backs[i].getElementsByTagName('img')
    imgback[0].src=faces[i]
}
