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
	search=search.replace(' ','+');
	console.log(search);

	var url="https://api.giphy.com/v1/gifs/search?api_key=VuMSAatfDGEFi1NpnLRMgCCSgoqBIabg&q="+search;
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
	//console.log(raw);
	//var link=raw.data[0].images.fixed_height.url;
	var link=raw.data;
	console.log(link);
	var sh=document.querySelector(".dis");
	sh.innerHTML=' ';
	link.forEach(function(img){
	var nlink=img.images.fixed_height.url;
	var n2=img.embed_url;
	console.log(n2);
	var item='<a href="'+nlink+'">'+'<img src="'+nlink+'class="container-image">'+'</a>';
	
	sh.innerHTML+=item;
	/*
	copyText.select();
  	copyText.setSelectionRange(0, 99999)
  	document.execCommand("copy");
  	alert("Copied the text: " + copyText.value);*/
	});
}

//
