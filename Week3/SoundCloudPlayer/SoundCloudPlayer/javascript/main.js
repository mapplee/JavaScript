
var UserInput={};
UserInput.withclick=function()
{
	document.querySelector(".btn_1").addEventListener('click',function(){
			var  inputValue=document.querySelector(".input-search").value;
			//console.log(inputValue);
			var check=1;
			SoundCloud.SerachQuery(inputValue,check);
	});
}
UserInput.withclick_Track=function()
{
	document.querySelector(".btn_2").addEventListener('click',function(){
			var  inputValue=document.querySelector(".input-search").value;
			//console.log(inputValue);
			var check=2;
			SoundCloud.SerachQuery(inputValue,check);
	});
}
UserInput.withEnterKey=function()
{
	document.querySelector(".input-search").addEventListener('keyup',function(e){
		var inputValue=document.querySelector(".input-search").value;
		if(e.which===13)
		{
			var check=prompt("Enter 1 for playlists or any key for Treck");
			SoundCloud.SerachQuery(inputValue,check);
		}

	});
}
UserInput.withclick();
UserInput.withclick_Track();
UserInput.withEnterKey();

var SoundCloud={};

SoundCloud.SerachQuery=function(input,check){
	SC.initialize({
  //client_id: 'cd9be64eeb32d1741c17cb39e41d254d'
  client_id : '21832d295e3463208d2ed0371ae08791'

});
var btnPlaylist=document.querySelector('.btn_1');
var btnTracks=document.querySelector('.btn_2');

if (check===1){
SC.get('/playlists',{
  q: input
}).then(function(tracks) {
		  	var searchResult = document.querySelector('.js-search-results');
			searchResult.innerHTML = "";
			SoundCloud.CreateDiv(tracks);


  //console.log(tracks);

});
}

else{
SC.get('/tracks',{
  q: input
}).then(function(tracks) {
		  		var searchResult = document.querySelector('.js-search-results');
			searchResult.innerHTML = "";
			SoundCloud.CreateDiv(tracks);
  //console.log(tracks);
});
}

}//search query end


SoundCloud.CreateDiv=function(tracks)
{
	tracks.forEach(function(track){
		//console.log(track);
			var list=document.querySelector('.list');
			list.innerHTML="";
			var card=document.createElement('div');
			card.classList.add("card");
			var searchResult=document.querySelector(".js-search-results");

			searchResult.appendChild(card);// card in js-search-result


			var image_div=document.createElement('div');
			image_div.classList.add("image");


			var image_img=document.createElement('img');
			image_img.classList.add("image_img");
			image_img.src=track.artwork_url||"https://scontent.fdac18-1.fna.fbcdn.net/v/t1.0-9/92792793_1561119527374318_4987641217564016640_o.jpg?_nc_cat=102&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=CHJJ4qmRdQkAX-8VC5D&_nc_ht=scontent.fdac18-1.fna&oh=18b8d03e922067cebaaa71bd9bebc21a&oe=6075BBAC";
			//track.user.avatar_url
			image_div.appendChild(image_img);//image_img in img
			card.appendChild(image_div); //image_img in img and all are in card

			var content=document.createElement('div');
			content.classList.add("content");

			var header=document.createElement('div');
			header.classList.add("header");
			header.innerHTML='<a href="'+track.permalink_url+'" target="_blank">'+track.permalink+'</a>';
			content.appendChild(header);//header in content


			card.appendChild(content)// all headers in card
			var button=document.createElement('div');
			button.classList.add("ui","bottom","attached","button","js-button");
			var icon=document.createElement('i');
			icon.classList.add("add","icon");
			button.appendChild(icon);
			var button_text=document.createElement('span');
			button_text.innerHTML="Add To Playlist";
			button.appendChild(button_text); //button_text in button
			card.appendChild(button); //button i with button_text in card
			button.addEventListener('click',function(){
				SoundCloud.GetEmebed(track.permalink_url);


			});
			
	});	


}
SoundCloud.GetEmebed=function(track_link){
SC.oEmbed(track_link, {
  auto_play: true
}).then(function(embed){
 // console.log('oEmbed response: ', embed);
  var sidebar=document.querySelector('.js-playlist');
  var box=document.createElement('div');
  box.innerHTML=embed.html;
  sidebar.insertBefore(box,sidebar.firstChild);
  localStorage.setItem("key",sidebar.innerHTML);
  alert(sidebar.innerHTML);

});
}

var sidebar=document.querySelector(".js-playlist");
sidebar.innerHTML=localStorage.getItem("key");


var btnList=document.querySelector(".btn_3");
btnList.addEventListener('click',function(){
	var reset=document.createElement('button');
	reset.classList.add("search","icon","js-submit","btn_4");
	reset.innerHTML="reset";
	var list=document.querySelector('.list');
	list.innerHTML="";
	list.appendChild(reset);
	var searchResult=document.querySelector(".js-search-results");
	searchResult.innerHTML=localStorage.getItem("key");





	var BtnReset=document.querySelector('.btn_4');
	BtnReset.addEventListener('click',function(){
	var sidebar=document.querySelector(".js-playlist");
	localStorage.clear();
	sidebar.innerHTML="";
	var searchResult=document.querySelector(".js-search-results");
	searchResult.innerHTML="";

});

});