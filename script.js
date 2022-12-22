var plus_btns=document.querySelectorAll(".plus")
var minus_btns=document.querySelectorAll(".minus")
var total = document.getElementById("total")
var Del_btns = document.querySelectorAll(".delete")
var Like_btns = document.querySelectorAll(".like")
console.log(Like_btns)

console.log(document)



function inc(e){
    clicked_button = e.target;
    // console.log(e);
    var div_container = clicked_button.parentElement;
    var paragraph = div_container.querySelector("p");
    // console.log(paragraph);
    var value = Number(paragraph.innerHTML);
    value++;
    // console.log(value);
    paragraph.innerHTML = value;
// console.log(div_container);
var tr_container = div_container.parentElement.parentElement;
var unitPricea = tr_container.querySelector(".unitPrice");
var unitPrice = Number (unitPricea.innerHTML);

var tdprice = tr_container.querySelector(".price")
tdprice.innerHTML = unitPrice*value;
console.log (tdprice)
Summm()
}




function dec(e){
    clicked_button = e.target;
    console.log(e);
    var div_container = clicked_button.parentElement;
    var paragraph = div_container.querySelector("p");
    console.log(paragraph);
    var value = Number(paragraph.innerHTML);
    if( value > 0 ) {
    value--;
    console.log(value);
    }
    paragraph.innerHTML = value;
    var tr_container = div_container.parentElement.parentElement;
var unitPricea = tr_container.querySelector(".unitPrice");
var unitPrice = Number (unitPricea.innerHTML);

var tdprice = tr_container.querySelector(".price")
tdprice.innerHTML = unitPrice*value;
console.log (tdprice)

Summm()

}






function Summm() {
    var somme = 0;
    var prices = document.querySelectorAll(".price");
    var total=document.getElementById("total");

    
    for( let i =0 ; i< prices.length ; i++){
      somme += Number(prices[i].innerHTML);
      total.innerHTML=somme;
      console.log(somme);
  }
  }

  
  
  function Supp(e) {
      console.log(e)
      var clicked_supp = e.target
      console.log(clicked_supp.parentElement.parentElement.parentElement.parentElement)
      var trDEL = clicked_supp.parentElement.parentElement.parentElement.parentElement
      var priceDEL = trDEL.querySelector(".price")
      priceDEL.innerHTML=0
      Summm()
      trDEL.remove()
  }


  function changeColor(e){
    console.log(e)
    var clicked_color = e.target
    if (clicked_color.style.color !== "red") {
        clicked_color.style.color = "red" ;
    }else{
        clicked_color.style.color = "gray";
    }


  }



for (let i = 0; i < plus_btns.length; i++) {
    plus_btns[i].addEventListener("click",inc)
    
}
console.log(minus_btns)

for (let i = 0; i < plus_btns.length; i++) {
    plus_btns[i].addEventListener("click",inc)  
}
for (let i = 0; i < minus_btns.length; i++) {
    minus_btns[i].addEventListener("click",dec)  
}
for (let  i= 0; i < Del_btns.length; i++) {
    Del_btns[i].addEventListener("click",Supp);
    
}
for (let i = 0; i < Like_btns.length; i++) {
    Like_btns[i].addEventListener("click",changeColor);
    
}





