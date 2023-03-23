

   window.onload = page;
   window.onresize = page;

    function page(){
    myWidth = window.innerWidth;//the width of the page
}

     
     const enter = document.querySelector("#pop");
     const ran = Math.random() * 100;//generate random number and multipling it by 100 to get a number from 0.009 - 99   
     const randon = Math.floor(ran) + 1;// adding the generated 99 + 1 to get from 0.009 - 100

  
     //variables that stores the display messages 
    const sentence = "<br><br><br><br><br><br><br> Maybe relationship is'nt for you, you should try farming"
    const less = "<br><br><br><br><br><br> <br> Hmmmmm, my dear it is well"
    const lesser = "<br><br><br><br><br><br><br> Just know that Jesus loves you"
    const mid = "<br><br><br><br><br><br><br> Take heart, just try again next year"
    const hope = "<br><br><br><br><br><br><br> Its like there is hope for you oh"
    const light = "<br><br><br><br><br><br><br> Wow, the future is bright!"
    const cong =  "<br><br><br><br><br><br><br>Congratulation!, I see you alreading wearing matching oufits with your partner"
    const blablu =  "<br><br><br><br><br><br><br>Your aso-ebi color is bulaba blue with a touch of longsuffering red"
    const child =  "<br><br><br><br><br><br><br>Congrats!, Your first child is already in jss1"
  

  if (randon >= 0 && randon <= 5 ) {
    enter.innerHTML = `  The odd : ${randon}% ${sentence}`
  
    
    
  } else if(randon >= 6 && randon <= 15) {
    enter.innerHTML =  `  The odd : ${randon}% ${less}`}
   

    else if ( randon >= 16 && randon <= 25){
     enter.innerHTML = `  The odd : ${randon}% ${lesser}`

    }
      else if( randon >= 26 && randon <= 35){
           enter.innerHTML = `  The odd : ${randon}% ${mid}`

      }
       else if( randon >= 36 && randon <= 45){
        enter.innerHTML = `  The odd : ${randon}% ${hope}`

       }
       else if (randon > 46 && randon <= 55){
        enter.innerHTML = `  The odd : ${randon}% ${light}`

       }
        else if (randon >= 56 && randon <= 70){
            enter.innerHTML = `  The odd : ${randon}% ${cong}`

        }
        else if(randon >= 71 && randon <=90){
            enter.innerHTML = `  The odd : ${randon}% ${blablu}`

        }
        else if(randon >= 70 && randon <= 100){
            enter.innerHTML = `  The odd : ${randon}% ${child}`

        }

         const screen = document.querySelector("#name");
         console.log(screen);

         const btn = document.querySelector("#btn-enter");
         const pun = document.querySelector("#pun");
          const small = document.querySelector("#small");

         btn.addEventListener("click", function(){
            if ( screen.value === "") {
                small.style.display = "block"

            } else {
                pun.style.display = "block";
            }

            setTimeout(function(){// the timeout for the small popup messages that asks for a name
                small.style.display = "none"
            }, 2000)
         })


             //this is the button that closes the popup messages of the odds
             const close = document.querySelector("#close")
             close.addEventListener("click", function(){
                pun.style.display = "none"
             })

             const refresh = document.querySelector("#btn-refresh");//code that refrshes the page.
             refresh.addEventListener("click", function(){
                location.reload();
             })