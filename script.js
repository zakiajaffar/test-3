// write your JS code here
var count=0; 

price= 5.99;

// function calculate(x) {
// 	document.querySelector("th").innerHTML+=x;
// 	// body...
// }
function cal(){
	count++;
	console.log(count);
	document.querySelector(".input").innerHTML=`${count}`;
	document.querySelector(".amount").innerHTML=`Total Amount:$ ${count * price}`;
	

// 		
}

function calculate(){
	count--;
	console.log(count);
	document.querySelector(".input").innerHTML=`${count}`;
	document.querySelector(".amount").innerHTML=`Total Amount:$ ${count * price}`;
}



