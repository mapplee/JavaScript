var Apple={
	color:"red",
	size:10,
	source:{
		country:"bangladesh",
		city:"Dhaka"
	}

}
var obj=document.querySelector("h1");
obj.innerHTML=Apple.source.city;
