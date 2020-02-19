'use strict';


var score=0;


var names =prompt("what is your name please ");
document.write("Good morning"+' '+names);
//console.log(names);

 var answerA = prompt("do you think that i can pass the exam ?").toLowerCase();
 while((answerA !== 'yes'&& answerA!== 'y') && (answerA !== 'no'&& answerA !== 'n') ){
     answerA = prompt("do you think that i can pass the exam? please do yes or no answer").toLowerCase();}

    //console.log(answerA);
    if(answerA === "yes" || answerA === "y"){
        score=score+1;
        alert("yes..that's right !  ");
    }else if(answerA === "no" || answerA==="n"){
        alert("no that's wrong ");
    }
 
 
 var answerB = prompt("do you think i love banana ?").toLowerCase();
 while((answerB!== 'yes'&& answerB!== 'y') && (answerB !== 'no'&& answerB !== 'n') ){
     answerB = prompt("do you think i love banana ? please do yes or no answer").toLowerCase();}
    //console.log(answerB);
    if(answerB === "yes" || answerB === "y"){
        score=score+1;
        alert("yes..that's right !  ");
    }else if(answerB === "no" || answerB ==="n"){
        alert("no that's wrong ");
    }
 
 var answerc = prompt("i am working or not ?").toLowerCase();
 while((answerc !== 'yes'&& answerc !== 'y') && (answerc !== 'no'&& answerc !== 'n') ){
     answerc = prompt("i am working or not ? please do yes or no answer").toLowerCase();}
    //console.log(answerc);
    if(answerc === "yes" || answerc === "y"){
        score=score+1;
        alert("yes..that's right !  ");
        
    }else if(answerc === "no" || answerc ==="n"){
        alert("no that's wrong ");
    }
 
 
 var answerD = prompt("do you think i'am a happy person? ?").toLowerCase();
while((answerD !== 'yes'&& answerD !== 'y') && (answerD !== 'no'&& answerD !== 'n') ){
   answerD = prompt("do you think i'am a happy person? please answer with yes or no").toLowerCase();}
//console.log(answerD);
//console.log((answerD === "yes" || answerD === "y"));
if(answerD === "yes" || answerD === "y"){
    score=score+1;
    alert("yes..that's right !  ");
    
}else if(answerD === "no" || answerD ==="n"){
    alert("no that's wrong ");
}
var answerf = prompt("do you think i love coding ?").toLowerCase();
while((answerf !== 'yes'&& answerf !== 'y') && (answerf !== 'no'&& answerf !== 'n') ){
   answerD = prompt("do you think i love coding ? please answer with yes or no").toLowerCase();}
//console.log(answerf);
//console.log((answerf === "yes" || answerf === "y"));
if(answerf === "yes" || answerf === "y"){
    score=score+1;
    alert("yes..that's right !  ");
    
}else if(answerf === "no" || answerf ==="n"){
    alert("no that's wrong ");
}
 
var myAge = prompt("can you know how old i'm ?");
//console.log(myAge);
    myAge=Number(myAge)
    if(myAge > 0 && myAge <= 10){
        alert("No do i look so young ...try again ");
        for(var k=0 ; k<3 ;k++){
            myAge = prompt("can you know how old i'm ?");
        }
    }else if(myAge === 22){
        score=score+1;
        alert("oh my God that's totaly right ..you are Gorgeous ");
    }
    else if(myAge > 20  &&  myAge <= 30){
        alert("you are close to answering ...try again please ");
        for(var k=0 ; k<3 ;k++){
            myAge = prompt("can you know how old i'm ?");
        }
    }
    else if(myAge > 10 && myAge <= 20){
        alert("no that not true ...try again please ");
        for(var k=0 ; k<3 ;k++){
            myAge = prompt("can you know how old i'm ?");
        }
        
    }else if(myAge > 30 && myAge <= 1000){
        alert("no that not true ...try again please ");
        for(var k=0 ; k<3 ;k++){
            myAge = prompt("can you know how old i'm ?");
        }
        
    }
    alert("my age is 22");
    



   var myColor=['green' , 'pink' ,'blue' ,'black'];

   var answerseven = prompt("tell me one of my favorit colors ?").toLowerCase();
   //console.log(answerseven);
   for(var j=0 ; j<= myColor.length ; j++){
   
       if (answerseven === myColor[j] ){
           score=score+1;
           alert("cool..this is my favorit color");
           break;
       }
       }
   for(var l=0 ; l<5 ;l++){
       if (answerseven !== myColor[j] )
       {
        alert("no that not true ...try again please ");
        answerseven = prompt("tell me one of my favorit colors ?").toLowerCase(); 
       }
}

   alert( "my favorit colors : " +' :'+ myColor);
   alert (names + " your degree is: " + score +" out of 7");