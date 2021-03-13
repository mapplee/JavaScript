//grab input information
document.querySelector(".apple").addEventListener('click',function(){
	var input=document.querySelector(".js-userinput").value;
	//console.log(input);
	show(input);
});



document.querySelector(".js-userinput").addEventListener('keyup',function(e){
	var input=document.querySelector(".js-userinput").value;
	if(e.which===13){
	//console.log(input);
	//var sh=document.querySelector(".dis");
	show(input);
	}
});

//Api 
//ajax request
var url="http://api.giphy.com/v1/gifs/search?api_key=VuMSAatfDGEFi1NpnLRMgCCSgoqBIabg&q=dog"
var ajaxCall=new XMLHttpRequest();
ajaxCall.open('GET',url);
ajaxCall.send()
//console.log(ajaxCall);
ajaxCall.addEventListener('load',function(e){
	var data=e.target.response;
	//console.log(e);
	show(data);

});





//Show 
function show(data){
	var raw=JSON.parse(data);
	console.log(raw);
var sh=document.querySelector(".dis");
sh.innerHTML=raw.data[0].images.fixed_height.url;
}

//
