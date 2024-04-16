// var random1=math.floor(math.random()*6)+1;
// var imgSourse="images/dice"+random1+"png";
// var random2=math.floor(math.random()*6)+1;
// var imgSourse2="images/dice"+random2+"png";
 function roll(){
    var random1=Math.floor(Math.random()*6)+1;
var random2=Math.floor(Math.random()*6)+1;
    document.querySelector(".img1").setAttribute("src","images/dice"+random1+".png");
    document.querySelector(".img2").setAttribute("src","images/dice"+random2+".png");
    if(random1>random2){
        document.querySelector("h1").innerHTML="player1 wins";
    }
   else if(random1<random2){
        document.querySelector("h1").innerHTML="player2 wins";
    }
    else{
        document.querySelector("h1").innerHTML="player2 wins";
    
    }
    
}
function edit(){
    var name1=prompt("enter player1");
    var name2=prompt("enter player2");
    document.querySelector("p.p").innerHTML=name1;
    document.querySelector("p.p1").innerHTML=name2;
}