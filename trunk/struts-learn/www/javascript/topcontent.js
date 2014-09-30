var oldObj = null;

function switchItem(oldobj) {

if(oldObj != null) {
	oldObj.className = "noClick"
}

newObj = event.srcElement.parentElement
newObj.className = "clicked"
oldObj = newObj

	//pre="file:///F:/chc/"
	//alert(pre+"ybmx"+key+".htm")
	//window.parent.frames[1].location = pre+"Number1"+key+".htm"
}

// this function opens up edit window
function editWindow(url) {
	window.open(url, 'pop', 'height=280, width=480, top=200, left=200, toolbar=no, menubar=no, scrollbars=no, resizable=no,location=no, status=no');
}
//	函数说明 
//	用于表格动态光标行显示功能
//	属于公用功能函数

	function select(newObj)
	{
		if(oldObj!=null){oldObj.className="hand"}

		newObj.className="selectedtr";
	       	oldObj = newObj;
		
	}

//  函数说明
//  初始默认选择行
//  属于公用功能函数
	function defaultSelect(i)
	{
		eval("sub"+i+".className = 'selectedtr'");
		eval("oldObj=sub"+i);

	}
