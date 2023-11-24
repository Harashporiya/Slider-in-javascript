const clickMe = document.getElementById('click')
const resetMe = document.getElementById('reset')
let count=0
clickMe.onclick=function changeImage(){
  count++
  if(count==1){
      document.getElementById('div1').style.background='red'
  document.getElementById('btn').style.backgroundImage="url('6_img.webp')"   
  document.getElementById('btn2').style.backgroundImage="url('5_img.webp')"  
  document.getElementById('btn3').style.backgroundImage="url('4img.webp')" 
  document.getElementById('div1').style.display="flex"   
  document.getElementById('div1').style.justifyContent="space-around"
  
  
  }  
  if(count==2){
      document.getElementById('div2').style.background='yellow'
  document.getElementById('btn4').style.backgroundImage="url('img-1.webp')"
  document.getElementById('btn5').style.backgroundImage="url('breakfast.webp')"
  document.getElementById('div2').style.display="flex"   
  document.getElementById('div2').style.justifyContent="space-around"
  document.getElementById('btn6').style.backgroundImage="url('2img.webp')"
  // count=0
  }
  if(count==3){
      document.getElementById('div3').style.background='green'
  document.getElementById('btn7').style.backgroundImage="url('background1.png')"
  document.getElementById('btn8').style.backgroundImage="url('background2.jpg')"
  document.getElementById('div3').style.display="flex"   
  document.getElementById('div3').style.justifyContent="space-around"
  document.getElementById('btn9').style.backgroundImage="url('background3.jpg')"
  
  }
  if(count==4){
      document.getElementById('div4').style.background='pink'
  document.getElementById('btn10').style.backgroundImage="url('background4.jpg')"
  document.getElementById('btn11').style.backgroundImage="url('background5.jpg')"
  document.getElementById('div4').style.display="flex"   
  document.getElementById('div4').style.justifyContent="space-around"
  document.getElementById('btn12').style.backgroundImage="url('image 17.png')"
  }
   if(count==5){
      document.getElementById('div5').style.background='orange'
  document.getElementById('btn13').style.backgroundImage="url('image 18.png')"
  document.getElementById('btn14').style.backgroundImage="url('image 19.png')"
  document.getElementById('div5').style.display="flex"   
  document.getElementById('div5').style.justifyContent="space-around"
  document.getElementById('btn15').style.backgroundImage="url('image 20.png')"
  count=0
  }
  
}
resetMe.onclick= function reset(){
  console.log(count)
  
  count++
  if(count==5){
  document.getElementById('div1').style.background=''
  document.getElementById('btn').style.backgroundImage="url('')"   
  document.getElementById('btn2').style.backgroundImage="url('')"  
  document.getElementById('btn3').style.backgroundImage="url('')" 
  count=0
  }
  else if(count==4){
  document.getElementById('div2').style.background=''
  document.getElementById('btn4').style.backgroundImage="url('')"
  document.getElementById('btn5').style.backgroundImage="url('')"
  document.getElementById('btn6').style.backgroundImage="url('')"
 
  }
  if(count==3){
      document.getElementById('div3').style.background=''
  document.getElementById('btn7').style.backgroundImage="url('')"
  document.getElementById('btn8').style.backgroundImage="url('')"
  document.getElementById('btn9').style.backgroundImage="url('')"
  }
  if(count==2){
      document.getElementById('div4').style.background=''
  document.getElementById('btn10').style.backgroundImage="url('')"
  document.getElementById('btn11').style.backgroundImage="url('')"
  document.getElementById('btn12').style.backgroundImage="url('')"
  }
  if(count==1){
      document.getElementById('div5').style.background=''
  document.getElementById('btn13').style.backgroundImage="url('')"
  document.getElementById('btn14').style.backgroundImage="url('')"
  document.getElementById('btn15').style.backgroundImage="url('')"
  }

}