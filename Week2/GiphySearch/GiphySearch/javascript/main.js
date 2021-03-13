//grab input information
document.querySelector(".apple").addEventListener('click',function(){
	var input=document.querySelector(".js-userinput").value;
	//console.log(input);
	pushToApi(input);
});



document.querySelector(".js-userinput").addEventListener('keyup',function(e){
	var input=document.querySelector(".js-userinput").value;
	if(e.which===13){
	//console.log(input);
	//var sh=document.querySelector(".dis");
	pushToApi(input);
	}
});

//Api 
//ajax request
function pushToApi(input){
	
	var search=input;
	/*for(i=0;i<search.length;i++)
	{
		if(search[i]===' ')
			search[i].replace(' ','+');
		console.log(search[i]);
	}*/
	search=search.replace(' ','+');
	console.log(search);

var url="http://api.giphy.com/v1/gifs/search?api_key=VuMSAatfDGEFi1NpnLRMgCCSgoqBIabg&q="+search;
console.log(url);
var ajaxCall=new XMLHttpRequest();
ajaxCall.open('GET',url);
ajaxCall.send();
//console.log(ajaxCall);
ajaxCall.addEventListener('load',function(e){
	var data=e.target.response;
	//console.log(e);
	show(data);

});
}





//Show 
function show(data){
	var raw=JSON.parse(data);
	console.log(raw);
var sh=document.querySelector(".dis");
var link=raw.data[0].images.fixed_height.url;
sh.innerHTML='<img src="'+link+'">';
}

//
