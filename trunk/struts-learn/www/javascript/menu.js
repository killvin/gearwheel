function expandIt(mypara){
whichChild=eval(mypara+"Child");
whichImg=eval(mypara+"Img");

if (whichChild.style.display=="none"){
	whichChild.style.display="block";
	whichImg.src="/btcjerpWeb/images/menu/bullet_tree_open.gif";
	}else {
	whichChild.style.display="none";
	whichImg.src="/btcjerpWeb/images/menu/bullet_tree_close.gif";
	}
}

function initIt(totalSet){
for (i=1;i<totalSet ;i++ )
{
	whichChild=eval("KB"+i+"Child");
	eval("KB"+i+"Img.src='/btcjerpWeb/images/menu/bullet_tree_close.gif';");
	whichChild.style.display="none";
}
}

function showContextMenu(){
popX=event.screenX;
popY=event.screenY;
mypop=window.createPopup();
mypop.document.body.innerHTML=contextMenu.innerHTML;
mypop.show(popX,popY,70,42);
}