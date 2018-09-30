var next = document.getElementById("next");
var prev = document.getElementById("prev");
function change_prev() {
	var newleft = parseInt(list.style.left) + 600;
	var list = document.getElementById("list_image");
	/*for(var i=0;i<99;i++)
		{
			newleft = parseInt(list.style.left) + 6;
		}*/
	if(newleft<-3000){
		newleft = -600;
	}
	if(newleft>-600){
		newleft = -3000;
	}
	var d = "left: " + newleft +"px";
	list.setAttribute("style",d);
	
}
function change_next() {
	var list = document.getElementById("list_image");
	var newleft = parseInt(list.style.left) - 600;
	/*for(var i=0;i<99;i++)
		{
			newleft = parseInt(list.style.left) - 6;
		}*/
	if(newleft<-3000){
		newleft = -600;
	}
	if(newleft>-600){
		newleft = -3000;
	}
	var d = "left: " + newleft +"px";
	list.setAttribute("style",d);
	
}

var timer = null;
function play(){
	timer = setInterval(function(){
		change_next();
	}, 3000);
	
}
play();

/*var container = document.getElementById('container');
function stop() {
	clearInterval(timer);
}
container.onmouseover = stop;
container.onmouseout = play;*/