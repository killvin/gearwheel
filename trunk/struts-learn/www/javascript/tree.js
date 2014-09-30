//菜单选择2004.04.09 by zyw
//onclick事件
var oldObj = null;
function oSelect(newObj){
	if(oldObj!=null)
        {oldObj.className="normal"}
	newObj.className="clicked";
   	oldObj = newObj;
	selectObj=oldObj;
	}
//onmouseover事件
function overSelect(overnewObj){
        if(selectObj!=overnewObj)   
        {	
         overnewObj.className="over"; 
         }
     }
//onmouseout事件
function outSelect(outnewObj){
       if(selectObj!=outnewObj)
	   {
	   outnewObj.className="normal";
	   }

}
//默认选择菜单
	function defaultSelect(i)
	{
		eval("bLable"+i+".className = 'clicked'");
		eval("oldObj=bLable"+i);
		eval("selectObj=oldObj");

	}