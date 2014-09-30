//	函数说明
//	用于主从表维护功能页面
	function parent_detail_fresh(url)
	{
		window.frames[1].location = url;
	}
function showit(myLable,file,lmax) {
	nested = document.all[myLable];

	
	id = nested.id;

	
	tmpa = id.charAt(id.length-1)

	
	for(k=1;k<=lmax;k++)
	{
		
		if(k.toString()!=tmpa)
		{
			hObjName = "BlueLable"+k;
			hObj=document.all[hObjName];
			hObj.className="lable_up"
		}
	

	}

	if (file != document.all.ckprint1.src) {
		document.all.ckprint1.src = file;
	}

	nested.className="lable_down"

}
function showit2(myLable,file,lmax) {
	nested = document.all[myLable];

	
	id = nested.id;

	
	tmpa = id.charAt(id.length-1)

	
	for(k=1;k<=lmax;k++)
	{

		if(k.toString()!=tmpa)
		{
			hObjName = "BlueLable"+k;
			hObj=document.all[hObjName];
			hObj.className="lable_up2"
		}
	

	}

	if (file != document.all.ckprint2.src) {
		document.all.ckprint2.src = file;
	}

	nested.className="lable_down2"

}
