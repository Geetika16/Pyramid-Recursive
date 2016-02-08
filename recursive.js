//anonymous function to generate pattern 
var myFunction= function(num) {

	if(num>0)
	{	
		//recursive call to pevious pattern (ex: for 10 it will call 9,and so on....till it reaches 1
		myFunction(num-1);
		document.write("<center>");
		array=new Array();
		for(i=0;i<num;i++){	//this for loop creates an array from 1 to the value,
			array[i]=i+1;  
		}
		str = array.join(' ');  //combines the array elements with space
		array.pop(); //pops up the last element
		str=str+' '+array.reverse().join(' '); //concates the array with its reverse and then joins it separated with spaces
		document.write(str+"<br>"); //writes it to document
	}	
};