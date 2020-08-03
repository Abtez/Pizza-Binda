var modal = document.getElementById('id01');

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

var modal2 = document.getElementById('id02');


window.onclick = function(event) {
    if (event.target == modal2) {
        modal2.style.display = "none";
    }
}

var dropdown=document.getElementById("options");
dropdown.onchange=function(event){
    if(dropdown.value==="Delivery"){
       var address= prompt("Enter Your Address");
        document.getElementById("address").innerHTML=address;
    }
}

const delivery=document.querySelector(".dropdown-delivery");
let address= document.getElementById("address").innerHTML;
const submit=document.querySelector("#submit");

submit.addEventListener("click", function(){
    alert("Order received");
})

/*grand pize of pizza=(topping+crust+size)*quantity
if place order is cliked dispaly grand prize*/

var small=document.getElementById("small").value;
var medium=document.getElementById("medium").value;
var large=document.getElementById("large").value;

small=300;
medium=550;
large=800;

const pizzaSize=[small,medium,large];

//console.log(pizzaSize);

var crustCrisp=document.getElementById()







