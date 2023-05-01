import { menuArray } from "/data.js";
import { v4 as uuidv4 } from "https://jspm.dev/uuid";

let displayFoodOrder = [];
let foodItemsArray = [];
const completeOrderDisplay = document.querySelector('.complete-order');
const payBtn =document.getElementById("pay")
const consentForm = document.getElementById("card-detail")
let starx=document.getElementsByClassName("fa-star")


setTimeout(function() {
  document.getElementById("discount").style.display="block"
}, 2000);

document.addEventListener("click", function (e) {
  
  if (e.target.id === "btn0") {

    completeOrderDisplay.style.display = "block";
    if(  document.getElementById('btn-submit')){
      document.getElementById('btn-submit').style.display="none";
    }
   
    const foodItems1 = menuArray.filter(function (menu) {
      return "btn" + menu.id === e.target.id;
    })[0];

    displayFoodOrder.unshift(foodItems1);

    
    render()

  

   
  } else if (e.target.id === "btn1") {
    
    completeOrderDisplay.style.display = "block";
    const foodItems2 = menuArray.filter(function (menu1) {
        return "btn" + menu1.id === e.target.id;
      })[0];
      if(  document.getElementById('btn-submit')){
        document.getElementById('btn-submit').style.display="none";
      }
     
  
      displayFoodOrder.unshift(foodItems2);
       render()

     console.log(e.target.class)
 
  } else if (e.target.id === "btn2") {
   
    completeOrderDisplay.style.display = "block";
    const foodItems3 = menuArray.filter(function (menu3) {
        return "btn" + menu3.id === e.target.id;
      })[0];
      if(  document.getElementById('btn-submit')){
        document.getElementById('btn-submit').style.display="none";
      }
     
  
      displayFoodOrder.unshift(foodItems3);
       render()
  }
  else if (e.target.id === "btn3") {
   
    completeOrderDisplay.style.display = "block";
    const foodItems3 = menuArray.filter(function (menu3) {
        return "btn" + menu3.id === e.target.id;
      })[0];
      if(  document.getElementById('btn-submit')){
        document.getElementById('btn-submit').style.display="none";
      }
     
  
      displayFoodOrder.unshift(foodItems3);
       render()
  }


   else if (e.target.dataset.remove){
    
    // const element = document.querySelector(`div.order-food[data-food="${e.target.dataset.remove}"]`);
    //      element.style.display='none';
    const foodDeletItem= displayFoodOrder.filter(function(del){
       return del.uuid === e.target.dataset.remove
    })[0]
       let index = displayFoodOrder.indexOf(foodDeletItem)
        displayFoodOrder.splice(index,1)
        render()
     console.log(index)
     console.log(foodDeletItem)
   
    
   }
   else if(e.target.id === "submit-order"){
       console.log("you clicked on the submit-order button")
       document.getElementById("model").style.display="block"
       starx[0].classList.remove("fa-solid")
        starx[1].classList.remove("fa-solid")
        starx[2].classList.remove("fa-solid")
        starx[3].classList.remove("fa-solid")
        starx[4].classList.remove("fa-solid")
   }
   else if(e.target.id === "btn-rate"){
   
    document.querySelector(".thanks").style.display="block"

    setTimeout(function() {
      document.getElementById("model-rate").style.display="none"
    }, 2000);
  }
    else if (e.target.id === "btn-close"){
      document.getElementById("model").style.display='none'
    }
    else if(e.target.id === "btn-close-discount"){
      document.getElementById("discount").style.display='none' 
     }
   
  
   else if(e.target.dataset.starca){
     if (!starx[0].classList.contains("fa-solid")){
      starx[0].classList.toggle("fa-solid")
     }
     else if (starx[0].classList.contains("fa-solid")){
        starx[0].classList.toggle("fa-solid")
        starx[1].classList.remove("fa-solid")
        starx[2].classList.remove("fa-solid")
        starx[3].classList.remove("fa-solid")
        starx[4].classList.remove("fa-solid")
     }
     
     
   }
   else if(e.target.dataset.starcb){
   
      if (!starx[0].classList.contains("fa-solid" ) && !starx[1].classList.contains("fa-solid")){
      starx[0].classList.add("fa-solid")
      starx[1].classList.add("fa-solid")
     }
     else if (starx[0].classList.contains("fa-solid" ) && !starx[1].classList.contains("fa-solid")){
      starx[1].classList.add("fa-solid")
     }
     else if (starx[0].classList.contains("fa-solid" ) && starx[1].classList.contains("fa-solid") && !starx[2].classList.contains("fa-solid") ){
      
      starx[1].classList.remove("fa-solid")
      
     }
   
     else if (starx[0].classList.contains("fa-solid" ) && starx[1].classList.contains("fa-solid") && starx[2].classList.contains("fa-solid") && starx[3].classList.contains("fa-solid") && starx[4].classList.contains("fa-solid")){
     
      starx[2].classList.remove("fa-solid")
      starx[3].classList.remove("fa-solid")
      starx[4].classList.remove("fa-solid")
      
    }
    else if (starx[0].classList.contains("fa-solid" ) && starx[1].classList.contains("fa-solid") && starx[2].classList.contains("fa-solid") && !starx[3].classList.contains("fa-solid") && !starx[4].classList.contains("fa-solid")){
     
      starx[2].classList.remove("fa-solid")
      starx[3].classList.remove("fa-solid")
      starx[4].classList.remove("fa-solid")
      
    }
    else if (starx[0].classList.contains("fa-solid" ) && starx[1].classList.contains("fa-solid") && starx[2].classList.contains("fa-solid") && starx[3].classList.contains("fa-solid") && !starx[4].classList.contains("fa-solid")){
     
      starx[2].classList.remove("fa-solid")
      starx[3].classList.remove("fa-solid")
      starx[4].classList.remove("fa-solid")
      
    }
    else if (starx[0].classList.contains("fa-solid" ) && starx[1].classList.contains("fa-solid") && starx[2].classList.contains("fa-solid") && starx[3].classList.contains("fa-solid") && starx[4].classList.contains("fa-solid")){
     
      starx[2].classList.remove("fa-solid")
      starx[3].classList.remove("fa-solid")
      starx[4].classList.remove("fa-solid")
      
    }
  
   }
   else if(e.target.dataset.starcc){
    if (!starx[0].classList.contains("fa-solid" ) && !starx[1].classList.contains("fa-solid") && !starx[2].classList.contains("fa-solid")){
      starx[0].classList.add("fa-solid")
      starx[1].classList.add("fa-solid")
      starx[2].classList.add("fa-solid")
      
     }
    else if (starx[0].classList.contains("fa-solid" ) && starx[1].classList.contains("fa-solid") && starx[2].classList.contains("fa-solid")& !starx[3].classList.contains("fa-solid")&& !starx[4].classList.contains("fa-solid") ){
      starx[0].classList.add("fa-solid")
      starx[1].classList.add("fa-solid")
      starx[2].classList.remove("fa-solid")
      
      
     }
     else if (starx[0].classList.contains("fa-solid" ) && starx[1].classList.contains("fa-solid")&& !starx[2].classList.contains("fa-solid") && !starx[3].classList.contains("fa-solid")&& !starx[4].classList.contains("fa-solid") ){
      starx[0].classList.add("fa-solid")
      starx[1].classList.add("fa-solid")
      starx[2].classList.add("fa-solid")
      
      
     

     }else if (starx[0].classList.contains("fa-solid" ) && starx[1].classList.contains("fa-solid") && starx[2].classList.contains("fa-solid") && starx[3].classList.contains("fa-solid")&& !starx[4].classList.contains("fa-solid")){
     
      starx[3].classList.remove("fa-solid")
      starx[4].classList.remove("fa-solid")
      
     }
     else if (starx[0].classList.contains("fa-solid" ) ){
      starx[0].classList.add("fa-solid")
      starx[1].classList.add("fa-solid")
      starx[2].classList.add("fa-solid")
      
     }
     else if (starx[0].classList.contains("fa-solid" ) && starx[1].classList.contains("fa-solid") && starx[2].classList.contains("fa-solid") && starx[3].classList.contains("fa-solid")&& !starx[4].classList.contains("fa-solid")){
      starx[0].classList.add("fa-solid")
      starx[1].classList.add("fa-solid")
      starx[2].classList.add("fa-solid")
     
     }
     else if (starx[0].classList.contains("fa-solid" ) && starx[1].classList.contains("fa-solid") && starx[2].classList.contains("fa-solid") && starx[3].classList.contains("fa-solid")&& starx[4].classList.contains("fa-solid")){
      
      starx[3].classList.remove("fa-solid")
      starx[4].classList.remove("fa-solid")
     
     }
     
   } else if (e.target.dataset.starcd){
    if (!starx[0].classList.contains("fa-solid" ) && !starx[1].classList.contains("fa-solid") && !starx[2].classList.contains("fa-solid") && !starx[3].classList.contains("fa-solid")){
      starx[0].classList.add("fa-solid")
      starx[1].classList.add("fa-solid")
      starx[2].classList.add("fa-solid")
      starx[3].classList.add("fa-solid")
     
     }
     else if (starx[0].classList.contains("fa-solid" ) && starx[1].classList.contains("fa-solid") && starx[2].classList.contains("fa-solid") && starx[3].classList.contains("fa-solid")){
      starx[0].classList.remove("fa-solid")
      starx[1].classList.remove("fa-solid")
      starx[2].classList.remove("fa-solid")
      starx[3].classList.remove("fa-solid")
     
     }
     else if (starx[0].classList.contains("fa-solid" ) && !starx[1].classList.contains("fa-solid") && !starx[2].classList.contains("fa-solid") && !starx[3].classList.contains("fa-solid")){
  
      starx[1].classList.add("fa-solid")
      starx[2].classList.add("fa-solid")
      starx[3].classList.add("fa-solid")
     
     }
     else if (starx[0].classList.contains("fa-solid" ) && starx[1].classList.contains("fa-solid") && !starx[2].classList.contains("fa-solid") && !starx[3].classList.contains("fa-solid")){
      
      starx[2].classList.add("fa-solid")
      starx[3].classList.add("fa-solid")
     
     }
     else if (starx[0].classList.contains("fa-solid" ) && starx[1].classList.contains("fa-solid") && starx[2].classList.contains("fa-solid") && !starx[3].classList.contains("fa-solid")){
  
      starx[3].classList.add("fa-solid")
     
     }
     else if (starx[0].classList.contains("fa-solid" ) && starx[1].classList.contains("fa-solid") && starx[2].classList.contains("fa-solid") && starx[3].classList.contains("fa-solid") && starx[4].classList.contains("fa-solid")){
     
      starx[4].classList.remove("fa-solid")
     
     }

   }
   else if (e.target.dataset.starce){
    if (!starx[0].classList.contains("fa-solid" ) && !starx[1].classList.contains("fa-solid") && !starx[2].classList.contains("fa-solid") && !starx[3].classList.contains("fa-solid") && !starx[4].classList.contains("fa-solid")){
      starx[0].classList.add("fa-solid")
      starx[1].classList.add("fa-solid")
      starx[2].classList.add("fa-solid")
      starx[3].classList.add("fa-solid")
      starx[4].classList.add("fa-solid")
     }
     else if (starx[0].classList.contains("fa-solid" ) && !starx[1].classList.contains("fa-solid") && !starx[2].classList.contains("fa-solid") && !starx[3].classList.contains("fa-solid") && !starx[4].classList.contains("fa-solid")){
     
      starx[1].classList.add("fa-solid")
      starx[2].classList.add("fa-solid")
      starx[3].classList.add("fa-solid")
      starx[4].classList.add("fa-solid")
     }
     else if (starx[0].classList.contains("fa-solid" ) && starx[1].classList.contains("fa-solid") && !starx[2].classList.contains("fa-solid") && !starx[3].classList.contains("fa-solid") && !starx[4].classList.contains("fa-solid")){
      
      starx[2].classList.add("fa-solid")
      starx[3].classList.add("fa-solid")
      starx[4].classList.add("fa-solid")
     }
     else if (starx[0].classList.contains("fa-solid" ) && starx[1].classList.contains("fa-solid") && starx[2].classList.contains("fa-solid") && !starx[3].classList.contains("fa-solid") && !starx[4].classList.contains("fa-solid")){
     
      starx[3].classList.add("fa-solid")
      starx[4].classList.add("fa-solid")
     }
     else if (starx[0].classList.contains("fa-solid" ) && starx[1].classList.contains("fa-solid") && starx[2].classList.contains("fa-solid") && starx[3].classList.contains("fa-solid") && !starx[4].classList.contains("fa-solid")){
      
      starx[4].classList.add("fa-solid")
     }
     else if (starx[0].classList.contains("fa-solid" ) && starx[1].classList.contains("fa-solid") && starx[2].classList.contains("fa-solid") && starx[3].classList.contains("fa-solid") && starx[4].classList.contains("fa-solid")){
       starx[1].classList.remove("fa-solid")
       starx[2].classList.remove("fa-solid")
       starx[3].classList.remove("fa-solid")
       starx[4].classList.remove("fa-solid")
       starx[0].classList.remove("fa-solid")
     }

   }
   


  
});
consentForm.addEventListener("submit",function(e){
  e.preventDefault()
  console.log( document.querySelector(".food-order-itmes"))
  document.getElementById("model").style.display="none"

  displayFoodOrder=[]
  const consentFormData = new FormData(consentForm)
    const fullName = consentFormData.get('fullName')
    const cardNumber = consentFormData.get('cardnumber')
    const cVV = consentFormData.get('cvv')
    
      document.querySelector(".complete-order").innerHTML = `<button id="btn-submit" class="thanks-text">Thank you, ${fullName}!Your Order is on it's way.</button>`
      
      render()
      setTimeout(function() {
        document.getElementById("model-rate").style.display="block"
      }, 2000);
   
     document.querySelector('input[name="fullName"]').value=""
      document.querySelector('input[name="cardnumber"]').value=""
      document.querySelector('input[name="cvv"]').value=""
})

// payBtn.addEventListener("click",function(e){
//   e.preventDefault()
//   console.log( document.querySelector(".food-order-itmes"))
//   document.getElementById("model").style.display="none"

//   displayFoodOrder=[]
//   const consentFormData = new FormData(consentForm)
//     const fullName = consentFormData.get('fullName')
//     const cardNumber = consentFormData.get('cardnumber')
//     const cVV = consentFormData.get('cvv')
//     if(fullName&&cardNumber&&cVV){
//       document.querySelector(".complete-order").innerHTML = `<button id="btn-submit" class="thanks-text">Thank you, ${fullName}!Your Order is on it's way.</button>`
      
//       render()
//       setTimeout(function() {
//         document.getElementById("model-rate").style.display="block"
//       }, 2000);
//     }
//     else{
//       alert('Please enter your full name and card number and cvv')
//     }
   
//      document.querySelector('input[name="fullName"]').value=""
//       document.querySelector('input[name="cardnumber"]').value=""
//       document.querySelector('input[name="cvv"]').value=""
// })


function getMenuHtml() {
    let htmlAllRender=''
  let htmlRender = ``;
  let htmlFooditems = '';
  let htmlFoodPrice = ``
  let hasPizza = false;
  let hasBeer = false;
  let hasHamburger = false;
  let hasDrumstick = false;
  let discount = 0


          menuArray.forEach(function (menu) {
            htmlRender += `
                      <div class="menu-flex">
                        <div class="inner-menu">
                        <span class="pizza-span">
                        <div class="pizza-icon">
                            
                            <i>${menu.emoji}</i>
                        </div>
                        </span>
        
                        <div class="pizz-detail">
                        <h2>${menu.name}</h2> 
                        <p>${menu.ingredients}</p>
                        <h3>$${menu.price}</h3>
                        </div>
                        </div>
                        <div  class="pizza-btn">
                        <button  class="food-item-add" id="btn${menu.id}">+</button>
        
                        </div> 
                        </div>
                              
                            
                       


                        `;
          });
      //      if(displayFoodOrder.length ===1){
      //       htmlFooditems=`
  
      //       <h2 class="order-h2">Your Order</h2>
           

      //         <div class="order-food">
      //         <div class="foods">
      //             <h3>${displayFoodOrder[0].name}</h3>

      //         </div>
      //         <div class="remove-foods">
      //         <h4 class ="remove-${displayFoodOrder[0].id}">remove</h4>
              
      //         </div>

      //         <div class="food-prices">
      //             <h3>$${displayFoodOrder[0].price}</h3>
              
      //         </div>


      //         </div> 
      //  `  
      //     htmlFoodPrice=`
      //     <div class="order-submit">
      //     <h3>Total price</h3>
      //       <h3>$${displayFoodOrder[0].price}</h3>
      //       </div>
      //       <div class="main-order-btn">
      //         <button class="order-btn">
      //             complete-order
      //            </button>
      //               </div> 
      //     `
      //      }
            if(displayFoodOrder.length>=1){
            let uu= uuidv4();
            let foodprice = 0
            
            displayFoodOrder.forEach(function(food){
                // if(food.includes("Pizza")&&food.includes("Hamburger")){
                //   foodprice+= food.price
                // } 
                   
                       

                if (food.name.toLowerCase().includes("pizza")) {
                  hasPizza = true;
                  console.log("hasPizza")
                }
                if (food.name.toLowerCase().includes("beer")) {
                  hasBeer = true;
                  console.log("hasBeer")

                }
                if(food.name.toLowerCase().includes("hamburger")){
                   hasHamburger=true
                   console.log("hashumburger")

                }
                 if(food.name.toLowerCase().includes("chicken drumstick")){
                  hasDrumstick=true
                  console.log("hasDrumstick")
                 }
                if (hasPizza && hasBeer && !hasHamburger && !hasDrumstick) {
                  discount = 3;
                 }
                 else if (hasPizza && hasBeer && hasHamburger && hasDrumstick) {
                  discount = 10;
                 }
                 if (hasPizza && !hasBeer && hasHamburger && hasDrumstick) {
                  discount = 10;
                 }
                  if (hasPizza && hasBeer && hasHamburger && !hasDrumstick) {
                    discount = 6;
                   }
                   if (!hasPizza && hasBeer && hasHamburger && hasDrumstick) {
                    discount = 7;
                   }
                 
                
              foodprice += parseFloat(food.price);
    
                if(displayFoodOrder.length>0){
                  
                }
                
                htmlFooditems+=`
  
              
           
               <div class="food-order-itmes">
              <div class="order-food" data-food="${uuidv4()}">
              <div class="foods">
                  <h3>${food.name}</h3>

              </div>
              <div class="remove-foods">
              <h4 class ="remove-singlefood" data-remove="${food.uuid}">remove</h4>
              
              </div>

              <div class="food-prices">
                  <h3>$${food.price}</h3>
              
              </div>


              </div> 
              </div>
       ` 
             
            })
               
            htmlFoodPrice=`
            <div class="order-submit">
            <h3>Total price</h3>
              <h3>$${foodprice-discount}</h3>
              </div>
              <div  class="main-order-btn">
                <button id ="submit-order" class="order-btn">
                    complete-order
                   </button>
                      </div> 
            ` 
           htmlFooditems = `<h2 class="order-h2">Your Order</h2>  
                              ${htmlFooditems}` 
                              
                             
                 
           }
          htmlAllRender= htmlRender+htmlFooditems+htmlFoodPrice
       document.get    

  return htmlAllRender;
  
 
}

// stars.addEventListener("click",function(){
//       stars.forEach(function(star){
//         star.classList.add("fa-solid")
//       })
// })

function render() {
  document.getElementById("pizza").innerHTML = getMenuHtml();
  
}

render();
