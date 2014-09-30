function movstar(a,time){
	movx=setInterval("mov("+a+")",time)
	}
function movover(){
	clearInterval(movx)
	}
function mov(a){
	scrollx=menu.document.body.scrollLeft
	scrolly=menu.document.body.scrollTop
	scrolly=scrolly+a
	menu.window.scroll(scrollx,scrolly)
	}
function o_down(theobject){
object=theobject
	while(object.filters.alpha.opacity>60){
		object.filters.alpha.opacity+=-10}
		}
function o_up(theobject){
object=theobject
	while(object.filters.alpha.opacity<100){
		object.filters.alpha.opacity+=10}
		}

function frameCollapse(){
//top.document.getElementById("leftset").cols="20,*";
if(top.leftset.cols=="160,*"){
	top.leftset.cols="20,*";
	frameImg.src="/btcjerpWeb/images/menu/arrow_right.gif";
	frameImg.alt="打开菜单栏";
	}else{
	top.leftset.cols="160,*";
	frameImg.src="/btcjerpWeb/images/menu/arrow_left.gif";
	frameImg.alt="关掉菜单栏";
	}
}