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

var crispy=document.getElementById("crispy").value;
var stuffed=document.getElementById("stuffed").value;
var gluttenFree=document.getElementById("gluttenfree").value;

crispy=140;
stuffed=170;
gluttenFree=150;

const pizzaCrust=[crispy,stuffed,gluttenFree]

//console.log(pizzaCrust);

$(document).ready(function(){
    $('#form input').on('change', function() {
        //alert($('input[name=radioName]:checked', '#form').val()); 
     });
  
     $(":radio").on("change", function(){
         var total=0;
         $(":radio:checked").each(function(){
             total+=Number(this.value)
         })
         $("#total1").text(total);
         

     

     $('select').on("change", function(){
        var sum = 0;
        $('select.values').each(function() {
            sum += Number($(this).val());
        });
         $("#total2").html(sum);

         var quantity = $('input[type=number][name=quant]').val();

         $('input[type=number][name=quant]').on
         
         var grandTotal=[(sum+total) * quantity];
         document.getElementById("total3").innerHTML=grandTotal;
         console.log(sum);
         console.log(quantity);
         console.log(total);
         console.log(grandTotal)
      
})

    });
    
}); 

var orderBtn=document.getElementById("getorder");
orderBtn.addEventListener("click", function(){
 alert("total")


});



