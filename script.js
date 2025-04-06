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
let timer=document.getElementById("timer");
let txtCounter=document.getElementById("countDown")
function countDown(){
    timer.innerHTML-=1;
    if (timer.innerHTML==="0"){
        clearInterval(counter);
        txtCounter.innerHTML="";
        flipperAll(cards)
    }
}
let counter=setInterval(countDown,1000);



function flipperAll(cards)
{
    
    for(let i=0;i<cards.length;i++)
    {
        cards[i].classList.add('show');
        cards[i].style.cursor = "pointer";
        
        cards[i].addEventListener('click',function(){flipperCard(cards[i],i)})
    }
    
}
var back1,back2,card1,card2;
let score=document.getElementById('score')
let nbreClique=document.getElementById('essai')
let found=document.getElementById('found')

function stopClick(){
    container.classList.add('stopClick')
    setTimeout(()=>{container.classList.remove('stopClick')},1500)
}


function flipperCard(card,i){
    nbreClique.textContent=parseInt(nbreClique.textContent)+1;
 
    if (nbr==0){
        back1=backs[i].getElementsByTagName('img')[0].src;
        card1=i
        
    }
        
    if (nbr==1){
        back2=backs[i].getElementsByTagName('img')[0].src;
        card2=i
        
        
    }
    if ((nbr<2)&&(card1!=card2)){
        card.classList.remove('show')
        nbr++
    }
 
    
    if ((nbr==2))
    {
        stopClick()
        setTimeout(()=>{
            
            if (back1!=back2)
            {
                cards[card1].classList.add('show')
                cards[card2].classList.add('show')
                score.innerHTML=(s*2/parseInt(nbreClique.innerHTML)*100).toFixed(2)+ ' %'
            }
            else
            {
                
                cards[card1].classList.add('zoom');
                cards[card2].classList.add('zoom');
                
                s=Number(found.innerHTML);
                s+=1;
                found.innerHTML=String(s);
                score.innerHTML=(s*2/parseInt(nbreClique.innerHTML)*100).toFixed(2)+ ' %'
                if (s==9){
                    txtCounter.style.fontSize='1.5rem';
                    txtCounter.style.color='red';
                    txtCounter.innerHTML="Bravo! Vous avez gagné"
                    
                }
            }
            back1="";
            back2="";
            card1=null;
            card2=null;
            nbr=0
           
        },1000)
    }
}
