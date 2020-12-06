var names = document.getElementsByClassName('items');
function toBig(){
	this.style.fontSize="25px";
}
function toSmall(){
	this.style.fontSize="20px";
}

for(var i = 0; i < names.length;i++){
	names[i].addEventListener('mouseover',toBig);
}
for(var i = 0; i < names.length;i++){
	names[i].addEventListener('mouseout',toSmall);
}
$("#btn").hover(function(){
  $(this).css("background-color", "orange");
  }, function(){
  $(this).css("background-color", "silver");
});
$("#bw").hover(function(){
  $(this).css("background-color", "pink");
  }, function(){
  $(this).css("background-color", "silver");
});$("#bm").hover(function(){
  $(this).css("background-color", "pink");
  }, function(){
  $(this).css("background-color", "silver");
});
$("#mainText").animate({
	opacity:'1'
},2000);
$("#seconMain").animate({
	opacity:'1'
},2000);

$("#girl").animate({
	right: '0'
},2000);

function sendButton(){
	alert('Thanks for contacting with us!');
	document.getElementById("name").value="";
	document.getElementById("email").value="";
	document.getElementById("phone").value="";
	document.getElementById("subject").value="";
	document.getElementById("area").value="";
}
$("#conUs").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $(".main3").offset().top
    }, 2000);
});
$("#local").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#whl").offset().top
    }, 2000);
});
$("#favt").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#ofavt").offset().top
    }, 2000);
});
$("#shoes").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#shoess").offset().top
    }, 2000);
});

