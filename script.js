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

let