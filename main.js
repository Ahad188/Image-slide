var img = document.getElementById("imgTag");
var photho = ["./img/1 (1).jpg","./img/1 (2).jpg","./img/1 (3).jpg","./img/1 (4).jpg","./img/1 (5).jpg","./img/1 (6).jpg"];
 var count = 0;
   

 function next(){
     count++;
     if(count >= photho.length){
          count = 0;
          img.src = photho[count]
     }else{
          img.src = photho[count];
     }; 
 }
 function  prev(){
     count--;
     if(count < 0){
          count = photho.length - 1;
          img.src = photho[count]
     }else{
          img.src = photho[count];
     }; 
 }