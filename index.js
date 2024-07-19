var n=document.querySelectorAll(".drum").length;

for(var i=0;i<n;i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click",function()
    {
        var s=this.innerHTML;
        handle(s);
        buttonAnimation(s);
    });

   
}
document.addEventListener("keypress",function(event)
{
    handle(event.key);
    buttonAnimation(event.key);
    // alert(key);
});


function handle(key)
{

    
    switch (key) {
        case 'w':
            var a=new Audio("sounds/crash.mp3");
            a.play();
            break;
        
        case 'a':
            var d=new Audio("sounds/kick-bass.mp3");
            d.play();
            break;
        case 's':
            var a=new Audio("sounds/snare.mp3");
            a.play();
            break;
        case 'd':
                var a=new Audio("sounds/tom-1.mp3");
                a.play();
                break;   
        case 'j':
            var a=new Audio("sounds/tom-2.mp3");
            a.play();
            break;   
        case 'k':
                var a=new Audio("sounds/tom-3.mp3");
                a.play();
                break;      
        default:
            var a=new Audio("sounds/tom-4.mp3");
                a.play();
            break;
    }
    // // alert("hello");
    // var c=Math.floor(Math.random()*7) +1;
    // var a=new Audio("sounds/" + c + ".mp3");
    // a.play();
} 

function buttonAnimation(k)
{
      var active=document.querySelector("." + k);
      active.classList.add("pressed");

      setTimeout(function(){
        active.classList.remove("pressed");
      },100);
}