function MulTable(){
    var one = parseInt(document.getElementById("num1").value); 
    var two = parseInt(document.getElementById("num2").value); 
    var output = '';

	if (2 <= one && one <= 10 && 2 <= two && two <= 10){
		for(i = 1;i  <= one; i++){
			for(x = 1; x <= two; x++){
	      		   output += (i*x) + " ";
	   		}
		output += "<br>";	
		}
	 document.getElementById("result").innerHTML = output;
	}

	else {
	       document.getElementById("result").innerHTML = "Please enter a number between 2 and 10";}
}
