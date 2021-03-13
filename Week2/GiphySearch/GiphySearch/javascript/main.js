//grab input information
document.querySelector(".apple").addEventListener('click',function(){
	var input=document.querySelector(".js-userinput").value;
	//console.log(input);
});

document.querySelector(".js-userinput").addEventListener('keyup',function(e){
	var input=document.querySelector(".js-userinput").value;
	if(e.which===13){
	//console.log(input);
	var sh=document.querySelector(".dis");

	console.log(sh);
	sh.innerHTML=input;

	}
});


//
