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
//	����˵�� 
//	���ڱ��̬�������ʾ����
//	���ڹ��ù��ܺ���

	function select(newObj)
	{
		if(oldObj!=null){oldObj.className="hand"}

		newObj.className="selectedtr";
	       	oldObj = newObj;
		
	}

//  ����˵��
//  ��ʼĬ��ѡ����
//  ���ڹ��ù��ܺ���
	function defaultSelect(i)
	{
		eval("sub"+i+".className = 'selectedtr'");
		eval("oldObj=sub"+i);

	}
