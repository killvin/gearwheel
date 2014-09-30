//四舍五入，保留制定小数位数   
  function Round(a_Num , a_Bit) 
  { 
   return( Math.round(a_Num * Math.pow (10 , a_Bit)) / Math.pow(10 , a_Bit)) ; 
  } 
     
 function stopError() {
            return true;
          }

//  window.onerror = stopError;
// document.oncontextmenu=function(){return false};
//选择日期函数，引自雅泰项目组
var oField,dateWin
function getDateNo(field){
	oField=field
	xPos=window.event.screenX
	yPos=window.event.screenY
	if ((xPos+260)>window.screen.width){
		xPos=xPos-260
	}
	if ((yPos+230)>window.screen.height){
		yPos=yPos-230
	}
	if (!dateWin||dateWin.closed){
		dateWin=open("/btcjerpWeb/jsp/co/message/date.html", "", "left="+xPos+",top="+yPos+",width=250,height=200")
	}else{
		dateWin.moveTo(xPos,yPos)
	}
	dateWin.focus()
}

//屏蔽掉可能导致页面被重新刷新的键盘操作
// 在页面加上 <body onkeydown="KeyDown()" 

function KeyDown(){ 
   if ((window.event.altKey)&&((window.event.keyCode==37)|| //屏蔽 Alt+ 方向键 ←
      (window.event.keyCode==39))){ //屏蔽 Alt+ 方向键 →
      //alert("不准你使用ALT+方向键前进或后退网页！");
      event.returnValue=false;
   }

   if ((event.keyCode==8) || //屏蔽退格删除键
      (event.keyCode==116)|| //屏蔽 F5 刷新键
      (event.keyCode==117)|| //屏蔽 F6 刷新键
      (event.keyCode==118)|| //屏蔽 F7 刷新键
      (event.keyCode==119)|| //屏蔽 F8 刷新键
      (event.keyCode==120)|| //屏蔽 F9 刷新键
      (event.ctrlKey && event.keyCode==82)){ //Ctrl + R
      event.keyCode=0;
      event.returnValue=false;
   }

   if ((event.ctrlKey)&&(event.keyCode==78)) //屏蔽 Ctrl+n
      event.returnValue=false;

   if ((event.shiftKey)&&(event.keyCode==121)) //屏蔽 shift+F10
      event.returnValue=false;

   if (window.event.srcElement.tagName == "A" && window.event.shiftKey) 
      window.event.returnValue = false; //屏蔽 shift 加鼠标左键新开一网页

   if ((window.event.altKey)&&(window.event.keyCode==115)){ //屏蔽Alt+F4
      window.showModelessDialog("about:blank","","dialogWidth:1px;dialogheight:1px");
      return false;
   }
}


/*  全局共用变量 */
    var sys_maxyear = 2100;
    var sys_minyear = 1900;

	var F_YEAR = 0;
    var F_MONTH = 1;
    var F_DATE = 2;
    var F_HOUR = 3;
    var F_MINUTE = 4;
    var F_SECOND = 5;

/*  页面显示光标内容功能  */

//	函数说明 
//	用于表格动态光标行显示功能
//	属于公用功能函数
	function select(oldObj)
	{
		if(oldObj != null)
		{
			oldObj.className = "hand";
		}

		newObj = event.srcElement.parentElement;
		newObj.className = "selectedtr";
		oldObj = newObj;

		return oldObj;
	}

//  函数说明
//  初始默认选择行
//  属于公用功能函数
	function defaultSelect(i)
	{
		eval("sub"+i+".className = 'selectedtr'");
		eval("oldObj=sub"+i);
	}

//  函数说明
//  用于单表维护功能页面浏览一条页面的内容刷新
//  属于单表功能函数
	function detail_fresh(url)
	{
		window.parent.frames[1].location = url;
	}

//  函数说明
//  用于单表维护功能页面浏览一条页面的内容刷新
//  属于单表功能函数
	function detail_fresh_key(url, key)
	{
		if(key!=null)
		{
			window.parent.frames[1].location = url;
		}
	}

//	函数说明
//	用于主从表维护功能页面
//	属于主从表功能函数 参见客户资料维护模版
	function parent_detail_fresh(url)
	{
		window.frames[1].location = url;
	}

//  函数说明
//  用于单表维护功能页面各类操作内容提交
//  属于单表功能函数
	function submit_detial(action)
	{
		document.forms[0].action = action;
		document.forms[0].target = window.parent.frames[0].name;
		document.forms[0].submit();
	}

//	函数说明
//	提交表单
//	属于公用功能函数

//  作者：蒲剑
//  日期：2001-11-25
//  备注：参数1为提交URL,参数2为提交目标框架

	function submit_form(action, target)
	{
		document.forms[0].action = action;
		document.forms[0].target = target;
		document.forms[0].submit();
	}

//	函数说明
//	提交表单
//	属于公用功能函数

//  作者：蒲剑
//  日期：2001-11-25
//  备注：参数1为提交目标框架

	function submit_form_no_action(target)
	{
		document.forms[0].target = target;
		document.forms[0].submit();
	}


//  函数说明
//  用于单表模版的纪录删除功能
//  以及主从模版的主表纪录删除功能
	function delRecord(url)
	{
		if(confirm("确定要删除该条记录吗？"))
		{
			window.parent.frames[0].location = url;
		}
	}
	function delSubRecord(url)
	{
		if(confirm("确定要删除该条记录吗？"))
		{
			window.parent.frames[1].location = url;
		}
	}

//  函数说明
//  用于单表模版的记录提示审核功能
    function valRecord(url)
	{
		if(confirm("确定要送审该条记录吗？"))
		{
			window.parent.frames[0].location = url;
		}
	}

//  函数说明  
//  用于提示用户指定不同信息，确认信息后转向指定页面
    function confirmMessage(message, url)
	{
		if(confirm(message))
		{
			window.parent.frames[0].location = url;
		}
	}

//  函数说明  
//  用于提示用户指定不同信息，确认信息后转向指定页面
    function confirmSubMessage(message, url)
	{
		if(confirm(message))
		{
			window.parent.frames[1].location = url;
		}
	}


//	函数说明
//	用于主从模版从表纪录的删除功能
    function delDetail(url)
	{
		if(confirm("确定要删除该条记录吗？"))
		{
			window.location = url;
    	}
	}

//  函数说明
//  用于页面select
	function selected(select,value)
	{
		var sel = null;
		for(var i = 0;i<document.forms[0].elements.length;i++)
		{
			if(document.forms[0].elements[i].name == select)
			{
				sel = document.forms[0].elements[i];
    			for(var i = 0;i<sel.options.length;i++)
				{
    				if( trim(sel.options[i].value) == trim(value))
					{
						sel.selectedIndex = i;
					}
				}
			}
		}
	}

//	函数说明
//	选择下拉列表中和给定值相同的选项
//	属于公用功能函数

//  作者：蒲剑
//  日期：2001-11-10
//  备注：参数1为下拉列表对象，参数二为比较值
	function compareListValue(Objects, Value)
	{
	   for(i=0; i<Objects.length;i++)
	   {
		  if(Value == Objects.options[i].value)
		  {
			 Objects.selectedIndex = i;
		  }
	   }
	}

//	函数说明
//	选择单选框中和给定值相同的选项
//	属于公用功能函数

//  作者：蒲剑
//  日期：2001-11-10
//  备注：参数1为单选框对象，参数二为比较值

	function compareRadioValue(Objects, Value)
	{
		for(i=0; i<Objects.length;i++)
   	    {
		   if(Value == Objects[i].value)
		   {
			   Objects[i].checked = true;
           }
        }
	}


//	函数说明
//	选择下拉框的值给文本框
//	属于公用功能函数

//  作者：蒲剑
//  日期：2001-11-10
//  备注：
    function choice(form_name,text_name,select_name)
    {
		eval('document.'+form_name.name+'.'+text_name.name+'.value='+'document.'+form_name.name+'.'+select_name.name+'.value')
    }

//	函数说明
//	用于比较列表值和一个定值
	function openURL(url, name, toolbar, scrollbars, location, left, top, width, height)
	{
		var subWindow = window.open(url, name, "toolbar = " + toolbar + ", scrollbars =  1,                  location =0, resizable =1,   left = " + left + ", top = " +  top +", width = " + width + ", height = " + height);
		subWindow.focus();
	}

	function openURL_A(url, name, toolbar, scrollbars, location, resizable, left, top, width, height)
	{
		var subWindow = window.open(url, name, "toolbar = " + toolbar + ", scrollbars =  " + scrollbars + ", location = 0, resizable =1 , left = " + left + ", top = " +  top +", width = " + width + ", height = " + height);
		subWindow.focus();
	}

	function normalwin_A(page)
	{
		openURL_A(page, "normalwin", 0, 1, 0, 1, 160, 100, 520, 390);
	}
    function normalwin_A(page,t)
	{   if (t==null) t=1
		openURL_A(page, "normalwin", 0, t, 0, 1, 160, 100, 520, 390);
	}
    function normalwin_B(page,twidth,thigh)
	{
		openURL_A(page, "normalwin", 0, 1, 0, 1, (screen.width-twidth)/2-1, (screen.height-thigh)/2-15, twidth, thigh);
	}
    function normalwin_B(page,twidth,thigh,t)
	{   if (t==null) t=1
		openURL_A(page, "normalwin", 0, t, 0, 1, (screen.width-twidth)/2-1, (screen.height-thigh)/2-15, twidth, thigh);
	}

	function normalwin_C(page,leftloc,toploc,twidth,thigh)
	{
		openURL_A(page, "normalwin", 0, 1, 0, 1, leftloc, toploc, twidth, thigh);
	}
    function normalwin_C(page,leftloc,toploc,twidth,thigh,t)
	{
	    if (t==null) t=1
		openURL_A(page, "normalwin", 0, t, 0, 1, leftloc, toploc, twidth, thigh);
	}
	function smallwin(page)
	{
		openURL_A(page, "_blank", 0, 1, 0, 1, 100, 100, 400, 300);
	}
    function smallwin(page,t)
	{
		
		if (t==null) t=1
		openURL_A(page, "_blank", 0, t, 0, 1, 100, 100, 400, 300);
	}
	function normalwin(page)
	{
		openURL_A(page, "_blank", 0, 1, 0, 1, 100, 100, 520, 390);
	}
    function normalwin(page,t)
	{
		if (t==null) t=1
		openURL_A(page, "_blank", 0, t, 0, 1, 100, 100, 520, 390);
	}
	function tinywin(page)
	{
		openURL_A(page, "_blank", 0, 1, 0, 1, 100, 100, 600, 450);
	}
    function tinywin(page,t)
	{
		if (t==null) t=1
		openURL_A(page, "_blank", 0, t, 0, 1, 100, 100, 600, 450);
	}
	function bigwin(page)
	{   		
		openURL_A(page, "_blank", 0, 1, 0, 1, 100, 100, 740, 560);
	}
	
	function bigwin(page,t)
	{   		
		
		if (t==null) t=1
		openURL_A(page, "_blank", 0, t, 0, 1, 100, 100, 740, 560);
	}
	function bigtoowin(page)
	{
		openURL(page,"_blank",0,1,1, 10, 5, 790, 590);
	}
    function bigtoowin(page,t)
	{
		if (t==null) t=1
		openURL(page,"_blank",0,t,1, 10, 5, 790, 590);
	}

	function smallwin_blank(page)
	{
		openURL(page,"_blank",0,1,1, 200, 100, 400, 300);
	}
    function smallwin_blank(page,t)
	{
		
		if (t==null) t=1
		openURL(page,"_blank",0,t,1, 200, 100, 400, 300);
	}
    
	function normalwin_blank(page)
	{
		openURL(page,"_blank",0,1,1, 160, 100, 520, 390);
	}
    function normalwin_blank(page,t)
	{
		if (t==null) t=1
		
		openURL(page,"_blank",0,t,1, 160, 100, 520, 390);
	}
	function tinywin_blank(page)
	{
		openURL(page,"_blank",0,1,1, 100, 100, 600, 450);
	}
    function tinywin_blank(page,t)
	{
		
		if (t==null) t=1
		openURL(page,"_blank",0,t,1, 100, 100, 600, 450);
	}
	function bigwin_blank(page)
	{
		openURL(page,"_blank",0,1,1, 20, 10, 740, 560);
	}
    	function bigwin_blank(page,t)
	{
		
		if (t==null) t=1
		openURL(page,"_blank",0,t,1, 20, 10, 740, 560);
	}
	function op_1(url)
	{
		window.open(url, "_blank", "toolbar=0,width=200,height=100");
	}

	function op_2(url)
	{
		window.open(url, "_blank", "toolbar=0,width=300,height=200,top=200,left=200,resizable=1,scrollbars=auto");
	}

	function op_3(url)
	{
		window.open(url, "_blank", "toolbar=0,width=600,height=400");
	}
	
	function form_reset1()
	{
	    window.reset();
	}

function form_reset()
	{
	    if(window.opener){
	       window.close();
	     }
	    if(window.parent){
	     
	      document.forms[0].reset();
	    }
	    
	}

// 送交审核
	function sendRecord(url)
	{
		if(confirm("要送审该记录吗？"))
		{
			window.parent.frames[0].location = url
		}
	}

//	函数说明 
//	新增或修改完成后，关闭提示窗口，并刷新主表页面
//	属于公用功能函数
	function closeWindow()
	{
		var start="?startIndex=";
		url = window.opener.parent.frames[0].location;
		var urlstr = new String(url);
		spliturl = urlstr.split("?");
         
		if (spliturl.length<2)
		{
			var current = opener.parent.frames[0].current;
            if( (current == null) || (current == "") )
			{
				current = 0;
			}
            url = url + start + current;

		}
		window.opener.parent.frames[0].location = url;
		window.close();
	}

//	函数说明 
//	新增或修改完成后，关闭提示窗口，并刷新主表页面
//	属于公用功能函数

//  作者：蒲剑
//  日期：2001-10-27
//  备注：修改closeWindow方法中删除后新增错误、并对主表分页功能进行完善
	function closeWindow_A(url)
	{
		var start="startIndex=";
		var urlstr = new String(url);

        // 取当前父框架概要浏览页面的页面计数值 
		var current = opener.parent.frames[0].current;
        if( (current == null) || (current == "") )
    	{
			current = 0;
		}

        // 如果资源定位字符串中没有？符号则加上startIndex参数
		spliturl = urlstr.split("?")

		if (spliturl.length<2)
		{
            url = url + "?" + start + current;
		}
		else
		{
            url = url + "&" + start + current;
		}

		window.opener.parent.frames[0].location = url;
		window.close();
	}

//	新增或修改完成后，关闭提示窗口，并刷新从表页面
	function closeSubWindow()
	{
		var start="?startIndex=";
		url = window.opener.parent.frames[1].location;
		var urlstr = new String(url);
		spliturl = urlstr.split("?");
         
		if (spliturl.length<2)
		{
			var current = opener.parent.frames[1].current;
            if( (current == null) || (current == "") )
			{
				current = 0;
			}
            url = url + start + current;
		}

		window.opener.parent.frames[1].location = url;
		window.close();
	}

//	函数说明 
//	新增或修改完成后，关闭提示窗口，并刷新主表页面
//	属于公用功能函数

//  作者：蒲剑
//  日期：2001-10-27
//  备注：修改closeWindow方法中删除后新增错误、并对主表分页功能进行完善
	function closeSubWindow_A(url)
	{
		var start="startIndex=";
		var urlstr = new String(url);

        // 取当前父框架概要浏览页面的页面计数值 
		var current = opener.parent.frames[1].current;
        if( (current == null) || (current == "") )
    	{
			current = 0;
		}

        // 如果资源定位字符串中没有？符号则加上startIndex参数
		spliturl = urlstr.split("?")

		if (spliturl.length<2)
		{
            url = url + "?" + start + current;
		}
		else
		{
            url = url + "&" + start + current;
		}

		window.opener.parent.frames[1].location = url;
		window.close();
	}

//	函数说明 
//	新增或修改完成后，关闭提示窗口，并刷新主表页面
//	属于公用功能函数

//  作者：蒲剑
//  日期：2001-10-27
//  备注：适用于子窗口为多帧结构，在子窗口的子窗口中关闭，并刷新子窗口的父窗口的子窗口
//  示例：总账子系统－设定会计科目转出系统
	function closeSubParentWindow_A(url)
	{
		var start="startIndex=";
		var urlstr = new String(url);

        // 取当前父框架概要浏览页面的页面计数值 
		var current = window.parent.opener.parent.frames[1].current;
        if( (current == null) || (current == "") )
    	{
			current = 0;
		}

        // 如果资源定位字符串中没有？符号则加上startIndex参数
		spliturl = urlstr.split("?")

		if (spliturl.length<2)
		{
            url = url + "?" + start + current;
		}
		else
		{
            url = url + "&" + start + current;
		}

		window.parent.opener.parent.frames[1].location = url;
		window.parent.close();
	}


//  由于主从表在维护子表时维护的对象不一样，所以需要不同的窗口关闭函数
	function detailClose()
	{
    	url = window.opener.location;
	    window.opener.location = url;
		window.close();
	}

//  以汉字为3个单位计算字符串的长度
    function getlength(str)
	{
		str=trim(str);
		var k=0;
		for(var i=0;i<str.length;i++)
		{
			if(str.charCodeAt(i) > 10000)
			{
				k+=2;
			}
			else
			{
				k++;
			}
		}
		
		return k;
	}

//  类型检查后提交表单
	function form_submit()
	{
		if(check(fieldname,fieldnull,fieldtype,fieldlength,fieldtitle))
		{
			window.document.forms[0].submit();
			this.disabled=true;
		}
		else
		{
			return false
		}
	}
	function form_nosubmit()
	{
		if(check(fieldname,fieldnull,fieldtype,fieldlength,fieldtitle))
		{
			this.disabled=true;
		    return true;
		}
		else
		{
			return false
		}
	}


        function checkAll()
        {
		if(check(fieldname,fieldnull,fieldtype,fieldlength,fieldtitle))
		{
                        return true;
		}
                else
                {
                        return false;
                }   

        }  

    function openURL_New(url)
	{
		var subWindow = window.open(url, "newwindows", "toolbar = no,menubar=yes, scrollbars = 1, location = 0, resizable =1 , left = 80, top = 60, width = 750, height =600" );
		subWindow.focus();
	} 
//  适用于弹出式窗口中表单点击确认后提交目标至主窗口， 例如查询条件输入窗口
	function sel_form_submit()
	{
		window.document.forms[0].target = window.opener.parent.frames[0].name;
        window.document.forms[0].submit();
		window.close();
	}

//  不检查直接提交表单
    function form_nocheck_submit()
	{
		window.document.forms[0].submit();
	}

//  不检查直接提交表单,并将窗口关闭
    function form_cnocheck_submit()
	{
		window.document.forms[0].submit();
		window.close();
	}

//  截取表单中所有的字段值中的空格
	function trimFormValue()
	{
		for(var i=0;i<window.document.forms[0].elements.length;i++)
		{
			window.document.forms[0].elements[i].value = trim(window.document.forms[0].elements[i].value);
		}
	}
// 送交审核
	function sendRecord(url)
	{
		if(confirm("要送审该记录吗？"))
		{
			window.parent.frames[0].location = url
		}
	}
	function sendSubRecord(url)
	{
		if(confirm("要送审该记录吗？"))
		{
			window.parent.frames[1].location = url
		}
	}

	function audiRecord(url)
	{
		if(confirm("要确认该记录吗？"))
		{
			window.parent.frames[0].location = url
		}
	}
	function audiSubRecord(url)
	{
		if(confirm("要确认该记录吗？"))
		{
			window.parent.frames[1].location = url
		}
	}

//	函数说明
//	根据日期字符串取年、月、日
//	属于公用功能函数

//  作者：李智
//  建立日期：2001-11-10
//  修改日期：2002-01-04
//  备注：蒲剑新增对于整型内容判断，对于定长判断。
	function check(fieldname,fieldnull,fieldtype,fieldlength,fieldtitle)
	{
		trimFormValue();
		
		for(var i=0;i<window.document.forms[0].elements.length;i++)
		{
			var k=0;
			//	 fieldnull.index=fieldname

			for(var j=0;j<fieldname.length;j++)
			{
				if(window.document.forms[0].elements[i].name == fieldname[j])
				{
					k=j;
				}
			}

			if(window.document.forms[0].elements[i].name == fieldname[k])
			{
				// 判断是否输入值允许为空
				if(!If_NotNull(window.document.forms[0].elements[i])&&(fieldnull[k] == "0"))
				{
					alert(fieldtitle[k]+"  不能为空！");
					return false;
				}

                // 判断是否输入值长度超长 
				if(If_NotNull(window.document.forms[0].elements[i])&&fieldtype[k]=="string"&&getlength(window.document.forms[0].elements[i].value) > fieldlength[k])
				{
					alert(fieldtitle[k]+"  过长！(一个汉字占2个字母位)");
					return false;
				}

/*              后期公开

                // 判断是否输入值长度少于规定长度  
				if(If_NotNull(window.document.forms[0].elements[i])&&fieldtype[k]=="string"&&getlength(window.document.forms[0].elements[i].value) < fieldlength[k]&&fieldconst[k]=="0")
				{
					alert(fieldtitle[k]+"  过短！");
					return false;
				}

*/				
				if(If_NotNull(window.document.forms[0].elements[i])&&fieldtype[k] == "date"&&!If_Date(window.document.forms[0].elements[i].value))
				{
					alert(fieldtitle[k]+"  是日期型！");
					return false;
				}

				if(If_NotNull(window.document.forms[0].elements[i])&&fieldtype[k] == "number"&&!If_Number(window.document.forms[0].elements[i].value))
				{
					alert(fieldtitle[k]+"  是数字型！");
					return false;
				}

				if(If_NotNull(window.document.forms[0].elements[i])&&fieldtype[k] == "integer"&&!If_Integer(window.document.forms[0].elements[i].value))
				{
					alert(fieldtitle[k]+"  是整数型！");
					return false;
				}

				if(If_NotNull(window.document.forms[0].elements[i])&&fieldtype[k] == "bool"&&window.document.forms[0].elements[i].value!="Y"&&window.document.forms[0].elements[i].value!="N")
				{
					alert(fieldtitle[k]+"  是布尔型！");
					return false;
				}
			}
		}

		return true;
	}


//	函数说明
//	判断字符串内容是否都为合法数字字符
//	属于公用功能函数

//  作者：李智
//  日期：2001-11-25
//  备注：
    function If_Numeric(Input)
	{
		var str=new String(Input);
		//	alert(str.length);
		for(var i=0;i<str.length;i++)
		{
			if(str.charAt(i)<'0'||str.charAt(i)>'9')
			{
				return false;
			}
		}
		return true;
	}

//	函数说明
//	判断输入值是否是浮点型
//	属于公用功能函数

//  作者：李智
//  日期：2001-11-25
//  备注：
	function If_Number(Input)
	{   
		var str=new String(Input);
		
		if(isNaN(str)) return false;	
		
    	return true;
	}

//	函数说明
//	判断输入值是否是整数型
//	属于公用功能函数

//  作者：蒲剑
//  日期：2002-01-04
//  备注：
	function If_Integer(Input)
	{
            if (Input==08) return true;        
            if (Input==09) return true;        
	
		if(isNaN(Input)==false)
		{
			Input_int = parseInt(Input);
			if(Input == Input_int)
			{
				return true;
			}
			else
			{
				return false;
			}
		}
		else
		{
			return false;
		}
	}

//	函数说明
//	判断输入值是否是日期型
//	属于公用功能函数

//  作者：李智
//  日期：2001-11-25
//  备注：

 	function If_Date(Input)
	{

 		var str=new String(trim(Input));
  	    
  	    var DateFormat = /^\d{4}-\d{1,2}-\d{1,2}$/;

	    if (DateFormat.test(str) == false) {
		    return false;
	    }
 		
        if (str.length<8) return false;
        
        //新增校验日期格式功能 
		var ArrayOfSplit=str.split("-");

		if(ArrayOfSplit.length!=3)
		{
			return false;
		}
		
		if(ArrayOfSplit.length==3)
		{
			for(var i=0;i<ArrayOfSplit.length;i++)
			{
				if(!If_Number(ArrayOfSplit[i]))
    			{
				    return false;
				}
			}

			if(ArrayOfSplit[0]>3000||ArrayOfSplit[0]<1900)
			{
				return false;
			}

			if(ArrayOfSplit[1]>12||ArrayOfSplit[1]<1)
			{
				return false;
			}

			if(ArrayOfSplit[2]>31||ArrayOfSplit[2]<1)
			{
				return false;
			}
            
            //新增校验日期 功能
            if ((ArrayOfSplit[1] == 1 || ArrayOfSplit[1] == 3 || ArrayOfSplit[1] == 5 || ArrayOfSplit[1] == 7 || ArrayOfSplit[1] == 8 || ArrayOfSplit[1] == 10 || ArrayOfSplit[1] == 12) && ArrayOfSplit[2] > 31 ) {
		          return false;
	        } 
	        if ((ArrayOfSplit[1] == 4 || ArrayOfSplit[1] == 6 || ArrayOfSplit[1] == 9 || ArrayOfSplit[1] == 11) &&  ArrayOfSplit[2] > 30 ) {
		          return false;
	        } 
	        
	        if (ArrayOfSplit[1] == 2) {
	            if ( (ArrayOfSplit[0] % 4 == 0) && (ArrayOfSplit[0] % 100 != 0) ||(ArrayOfSplit[0] % 400 == 0)){
 		           if ( ArrayOfSplit[2] > 29) {
			           return false;
		           }
		        } else if (ArrayOfSplit[2] > 28) {
			       return false;
		        }
            }
            //      
			return true;
		}
		
	}

	function trim(str)
	{
		var i= str.length;

		while(i>0)
		{
			if(str.charAt(i)== " ")
			{
				str = str.substring(0,i)+str.substring(i+1,str.length)
			}
		    i--;
		}

		if(str.charAt(0) ==" ")
		{
		    str="";
		}

		return str;
	}


	function If_NotNull(Input)
	{
		var str=Input.value;
		str=trim(str);
		if(str.length==0)
		{
			return false;
		}
		return true;
	}

//	函数说明
//	判断字符串是否为空
//	属于公用功能函数

//  作者：蒲剑
//  日期：2001-11-10
//  备注：
	function If_NotNullValue(Value)
	{
		var str = trim(Value);
		if(str.length==0)
		{
			return false;
		}
		return true;
	}

	function trim(str)
	{
		if(str.length == 0)
		{
			str = "";
		}

		if (str.length == 1 && str.charAt(0) == " ")
		{
			str = "";
		}

		var i;
		var first = 0;
		var last = 0;

		first = 0;

		for (i = 0; i < str.length; i++)
		{
			first = i;
			tempChar = str.charAt(i);
			if (tempChar == " ")
			continue;
			else
			break;
		}

		last = str.length - 1;
		for (i = str.length - 1; i >= 0; i--)
		{
			last = i;
			tempChar = str.charAt(i);
			if (tempChar == " ")
			{
				continue;
			}
			else
			{
				break;
			}
		}

		if (last < first)
		{
			return "";
		}
		else
		{
			return str.substr(first, last - first + 1);
		}
	}


//	函数说明 
//	根据输入数值以及数值总长、小数位长判断输入数值是否在范围之内
//	属于公用功能函数

//  作者：蒲剑
//  日期：2001-11-9
//  备注：返回0表示正常，返回1表示值超出范围，返回2表示小数位超长，返回-1表示数值格式出错
function checkFloatValue(value_in, size_in, size_in_d)
{
	/* value_in 输入值 */
    /* size_in 输入值总位长 */
    /* size_in_d 输入值小数位长 */
    if(isNaN(value_in)==true)
	{
		return -1;
	}

    maxvalue = "";
    for(i=0; i<(size_in-size_in_d); i++)
    {
		maxvalue += "9";
	}
	
	if(size_in_d > 0)
	{
		maxvalue += ".";
    	for(i=0; i<size_in_d; i++)
		{
			maxvalue += "9";
		}
	}

    values = value_in.split("."); 
	length_d = 0;
	
	if(values.length > 1)
	{
		length_d = values[1].length;
	}

	if(parseFloat(value_in) > parseFloat(maxvalue))
	{
		return 1;
	}
	else
	{
		if(length_d > size_in_d)
		{
			return 2;
		}
		else
		{
			return 0;
		}
	}

    return -1;
}
 function checkFloatValue1(value_in, size_in, size_in_d)
{
	/* value_in 输入值 */
    /* size_in 输入值整数位长 */
    /* size_in_d 输入值小数位长 */
    if(isNaN(value_in)==true)
	{
		return -1;
	}

    maxvalue = "";
    for(i=0; i<(size_in); i++)
    {
		maxvalue += "9";
	}
	
	if(size_in_d > 0)
	{
		maxvalue += ".";
    	for(i=0; i<size_in_d; i++)
		{
			maxvalue += "9";
		}
	}

    values = value_in.split("."); 
	length_d = 0;
	
	if(values.length > 1)
	{
		length_d = values[1].length;
	}

	if(parseFloat(value_in) > parseFloat(maxvalue))
	{
		return 1;
	}
	else
	{
		if(length_d > size_in_d)
		{
			return 2;
		}
		else
		{
			return 0;
		}
	}

    return -1;
}

//	函数说明
//	根据输入年、月、日、小时、分钟、秒数值，判断该值是否合法
//	属于公用功能函数

//  作者：蒲剑
//  日期：2001-11-10
//  备注：返回0表示正常，
//       返回1表示年份超出范围，返回2表示月份超出范围，返回3表示日期超出范围,
//       返回4表示小时超出范围，返回5表示分钟超出范围，返回6表示秒数超出范围。
function checkDateTimeValue(year_in, month_in, day_in, hour_in, minute_in, second_in)
{
	if((year_in==null) || (year_in == ""))	
	{
		return 1;
	}

	if((month_in==null) || (month_in == ""))	
	{
		return 2;
	}

	if((day_in==null) || (day_in == ""))	
	{
		return 3;
	}

	if((hour_in==null) || (hour_in == ""))	
	{
		return 4;
	}

	if((minute_in==null) || (minute_in == ""))	
	{
		return 5;
	}

	if((second_in==null) || (second_in == ""))	
	{
		return 6;
	}

	if(isNaN(year_in)==true)
	{
		return 1;
	}
	if(isNaN(month_in)==true)
	{
		return 2;
	}
	if(isNaN(day_in)==true)
	{
		return 3;
	}
	if(isNaN(hour_in)==true)
	{
		return 4;
	}
	if(isNaN(minute_in)==true)
	{
		return 5;
	}
	if(isNaN(second_in)==true)
	{
		return 6;
	}

	year = parseInt(year_in);
    month = parseInt(month_in);
    day = parseInt(day_in);
    hour = parseInt(hour_in);
    minute = parseInt(minute_in);
    second = parseInt(second_in);

    if(( year > sys_maxyear ) || (year < sys_minyear))
	{
		return 1;
	}

    if(( month > 12 ) || (month < 1))
	{
		return 2;
	}

	if( (day > checkMaxDay(year, month)) || (day < 1) )
	{
		return 3;
	}

    if( (hour > 24) || (hour < 0))
	{
		return 4;
	}

    if( (minute > 59) || (minute < 0))
	{
		return 5;
	}

    if( (second > 59) || (second < 0))
	{
		return 6;
	}

	return 0;
}

//	函数说明
//	根据输入年、月检查当月最大天数
//	属于公用功能函数

//  作者：蒲剑
//  日期：2001-11-10
//  备注：返回值为最大天数
function checkMaxDay(year, month)
{
    maxday = 1;

    switch(month)
	{
		case 1:
		case 3:
	    case 5:
	    case 7:
	    case 8:
		case 10:
		case 12:
		{
			maxday = 31;
			break;
		}
   
        case 4:
		case 6:
		case 9:
		case 11:
		{
			maxday = 30;
		}

		case 2:
		{
    		if(checkLeapYear(year) == 0)
			{
				maxday = 29;
			}
			else
			{
				maxday = 28;
			}

		}
	}

	return maxday;
}

//	函数说明
//	根据输入年份检查当年是否是闰年
//	属于公用功能函数

//  作者：蒲剑
//  日期：2001-11-10
//  备注：返回值为0表示为闰年
function checkLeapYear(year)
{
	if( ((year % 4 == 0) && (year % 400 != 0)) || (year % 400 == 0))
	{
		return 0;
	}
	else
	{
		return 1;
	}
}

//	函数说明
//	根据日期时间检查函数返回错误状态，显示对应提示信息
//	属于公用功能函数

//  作者：蒲剑
//  日期：2001-11-10
//  备注：
function showStatus(status_in, fieldname)
{
    switch(status_in)
    {
        case 1:
        { 
            alert(fieldname + "年份错误，请检查！"); break;
        }
        case 2:
        { 
            alert(fieldname + "月份错误，请检查！"); break;
        }
        case 3:
        { 
            alert(fieldname + "日期错误，请检查！"); break;
        }
        case 4:
        { 
            alert(fieldname + "小时错误，请检查！"); break;
        }
        case 5:
        { 
            alert(fieldname + "分钟错误，请检查！"); break;
        }
        case 6:
        { 
            alert(fieldname + "秒数错误，请检查！"); break;
        }
    }
}

//	函数说明
//	根据日期时间生成字符串
//	属于公用功能函数

//  作者：蒲剑
//  日期：2001-11-10
//  备注：
function formatDateTime(year, month, day, hour, minute, second)
{
    if(hour.length<2)
    {
		hour = "0" + hour;
	}

    if(minute.length<2)
    {
		minute = "0" + minute;
	}

    if(second.length<2)
    {
		second = "0" + second;
	}

    return year + "-" + month + "-" + day + " " + hour + ":" + minute + ":" + second;
}

function formatDateTime_A(year, month, day, hour, minute, second)
{
    if(hour.length<2)
    {
		hour = "0" + hour;
	}

    if(minute.length<2)
    {
		minute = "0" + minute;
	}

    if(second.length<2)
    {
		second = "0" + second;
	}

    return year + "-" + month + "-" + day + "-" + hour + "-" + minute + "-" + second;
}

function formatDate(year, month, day)
{
    if(month.length<2)
    {
		month = "0" + month;
	}

    if(day.length<2)
    {
		day = "0" + day;
	}

    if(year.length<4)
    {
		year = "20" + year;
	}
    return year + "-" + month + "-" + day;
}


//	函数说明
//	根据日期字符串比较两个日期大小，如果第一个日期大于第二个日期，返回真，否则为假
//	属于公用功能函数

//  作者：张亚军、蒲剑
//  日期：2001-11-10
//  备注：
function compareDate(date1, date2)
{
	var date1_array = new Array(3);
	var date2_array = new Array(3);
    
    yp1 = date1.indexOf("-",0); 
    yp2 = date1.indexOf("-",yp1+1);
    yp3 = date1.indexOf("-",yp2+1);

    year1  = date1.substring(0,yp1);
    month1 = date1.substring(yp1+1,yp2);
    day1   = date1.substring(yp2+1,date1.length);         

    date1  = formatDate(year1, month1, day1)
    yp1    = date2.indexOf("-",0); 
    yp2    = date2.indexOf("-",yp1+1);
    yp3    = date2.indexOf("-",yp2+1);

    year1  = date2.substring(0,yp1);
    month1 = date2.substring(yp1+1,yp2);
    day1   = date2.substring(yp2+1,date2.length);         

    date2  = formatDate(year1, month1, day1)
    
	date1_array[0] = getDateField(date1, F_YEAR);
    date1_array[1] = removeFirstZero(getDateField(date1, F_MONTH));
    date1_array[2] = removeFirstZero(getDateField(date1, F_DATE));

	date2_array[0] = getDateField(date2, F_YEAR);
    date2_array[1] = removeFirstZero(getDateField(date2, F_MONTH));
    date2_array[2] = removeFirstZero(getDateField(date2, F_DATE));

	status = false;

	if(parseInt(date1_array[0]) > parseInt(date2_array[0]))
	{
		return true;
	}
	
	if(parseInt(date1_array[0]) < parseInt(date2_array[0]))
	{
		return false;
	}

	if(parseInt(date1_array[1]) > parseInt(date2_array[1]))
	{
		return true;
	}

	if(parseInt(date1_array[1]) < parseInt(date2_array[1]))
	{
		return false;
	}

	if(parseInt(date1_array[2]) > parseInt(date2_array[2]))
	{
		return true;
	}

	if(parseInt(date1_array[2]) < parseInt(date2_array[2]))
	{
		return false;
	}

	return false;
}


//	函数说明
//	根据日期字符串比较两个时间大小，如果第一个时间大于第二个时间，返回真，否则为假
//	属于公用功能函数

//  作者：张亚军、蒲剑
//  日期：2001-11-10
//  备注：
function compareTime(date1, date2)
{
	var date1_array = new Array(6);
	var date2_array = new Array(6);

	date1_array[0] = getDateField(date1, F_YEAR);
    date1_array[1] = removeFirstZero(getDateField(date1, F_MONTH));
    date1_array[2] = removeFirstZero(getDateField(date1, F_DATE));

    date1_array[3] = removeFirstZero(getDateField(date1, F_HOUR));
    date1_array[4] = removeFirstZero(getDateField(date1, F_MINUTE));
    date1_array[5] = removeFirstZero(getDateField(date1, F_SECOND));

	date2_array[0] = getDateField(date2, F_YEAR);
    date2_array[1] = removeFirstZero(getDateField(date2, F_MONTH));
    date2_array[2] = removeFirstZero(getDateField(date2, F_DATE));

    date2_array[3] = removeFirstZero(getDateField(date1, F_HOUR));
    date2_array[4] = removeFirstZero(getDateField(date1, F_MINUTE));
    date2_array[5] = removeFirstZero(getDateField(date1, F_SECOND));

	status = false;

	if(parseInt(date1_array[0]) > parseInt(date2_array[0]))
	{
		return true;
	}
	
	if(parseInt(date1_array[0]) < parseInt(date2_array[0]))
	{
		return false;
	}

	if(parseInt(date1_array[1]) > parseInt(date2_array[1]))
	{
		return true;
	}

	if(parseInt(date1_array[1]) < parseInt(date2_array[1]))
	{
		return false;
	}

	if(parseInt(date1_array[2]) > parseInt(date2_array[2]))
	{
		return true;
	}

	if(parseInt(date1_array[2]) < parseInt(date2_array[2]))
	{
		return false;
	}

	if(parseInt(date1_array[3]) > parseInt(date2_array[3]))
	{
		return true;
	}
	
	if(parseInt(date1_array[3]) < parseInt(date2_array[3]))
	{
		return false;
	}

	if(parseInt(date1_array[4]) > parseInt(date2_array[4]))
	{
		return true;
	}

	if(parseInt(date1_array[4]) < parseInt(date2_array[4]))
	{
		return false;
	}

	if(parseInt(date1_array[5]) > parseInt(date2_array[5]))
	{
		return true;
	}

	if(parseInt(date1_array[5]) < parseInt(date2_array[5]))
	{
		return false;
	}

	return false;
}


//	函数说明
//	根据日期字符串取年、月、日
//	属于公用功能函数

//  作者：张亚军、蒲剑
//  日期：2001-11-10
//  备注：
function removeFirstZero(value)
{
    if(value.lastIndexOf("0")==0)
	{
	    return value.substring(1, 2);
	}
	return value;
}

function getDateField(value, indexF)
{
	var s = value.split("-");
	return s[indexF];
}

function getYear(value)
{
	var s = value.split("-");
	return s[0];
}

function getMonth(value)
{
	var s = value.split("-");
	return s[1];
}

function getDate(value)
{
	var s = value.split("-");
	return s[2];
}

function getDate(value, i)
{
	var s = value.split("-");
	return s[i];
}


/* 报表使用检查年月 */
function checkdate(date)
{
	if ((date==null)||(date==''))
	{
		alert("请输入输出报表的年度！格式为：9999-99");
		return false;
	}
	else
	{
		var date_array = date.split("-");
		if (isNaN(date_array[0]))
		{
			alert("年份应输入四位数字！");
			return false; 
		}
		else
		{
			if(parseInt(date_array[0])<sys_minyear)
			{
				alert("年份输入应大于"+sys_minyear+"！");
				return false;
			} 

			if(parseInt(date_array[0])>sys_maxyear)
			{
				alert("年份输入应小于"+sys_maxyear+"！");
				return false;
			} 
		}
		
		if (date_array[1]==null)
	    {
			alert("请输入输出报表的年度！格式为：9999-99");
			return false;
		}
		else
		if (isNaN(date_array[1]))
		{
			alert("月份是数字型！");
			return false;
		}
		else
		{ 
			if ((parseInt(removeFirstZero(date_array[1]))<1)||(parseInt(removeFirstZero(date_array[1]))>12))
			{
				alert("月份应属于1~12！");
				return false;
			}
			else
			{
				return true;
			}
		}
	}
}

//
//   公共选择器
//

var  Material; 
var  Orig; 
var  oField='';
var  oField1=''; 
var  oField2=''; 
var  oField3=''; 
var  oField4=''; 
var  oField5=''; 
var  oField6=''; 
var  oField7=''; 
var  oField8=''; 
var  oField9=''; 
var  oField10=''; 
var  oField11=''; 
var  oField12=''; 
var  oField13=''; 
var  oField14=''; 
var  oField15=''; 
var  oField16=''; 
var  oField17=''; 
var  oField18=''; 
var  oField19=''; 
var  oField20=''; 
var  oField21=''; 
var  oField22=''; 
var  oField23=''; 
var  oField24=''; 
var  oField25=''; 
var  oField26='';
var  oField27='';
var  oField28='';
var  oField29='';
var  oField30='';
var  oField31='';
var  oField32='';
var  oField33='';
var  oField34='';
var  oField35='';
var  oField36='';
var  oField37='';
var  oField38='';
var  oField39='';
var  oField40='';

//以下为选择物资设备函数(单选)
//传参方法：
//按顺序为(共12项)：物资ID、物资编号、物资名称、型号、生产厂、图号、计量单位、上级物资编号、上级物资名称,计划价格,上级物资规格型号，上级物资生产厂
//
//不需要的参数用："" 代替,注意传参顺序要一样
//

//自动生成器序号：U001
function OpenMaterialW(oDestination,oDestinationo1,oDestinationo2,oDestinationo3,oDestinationo4,oDestinationo5,oDestinationo6,oDestinationo7,oDestinationo8,oDestinationo9,oDestinationo10,oDestinationo11) {
    oField1 = oDestination;
    oField2 = oDestinationo1;
    oField3 = oDestinationo2;
    oField4 = oDestinationo3;
    oField5 = oDestinationo4;
    oField6 = oDestinationo5;
    oField7 = oDestinationo6;
    oField8 = oDestinationo7;
    oField9 = oDestinationo8;
    oField10 = oDestinationo9;
    oField11 = oDestinationo10;
    oField12 = oDestinationo11;

    Material = window.open("/btcjerpWeb/jsp/co/cho_matnew/Sel_MaterialC.jsp", "Material", "resizable=yes,dependent=yes,scrollbars=yes,left=90,top=45,width=" + screen.width * .83 + ",height=" + screen.height * .85);
    Material.focus();
}

//自动生成器序号：U002

function OpenMaterialM() {
    oField1 = 'MaterialId';
    oField2 = 'MaterialNo';
    oField3 = 'MaterialName';
    oField4 = 'MaterialModel';
    oField5 = 'MaterialFactory';
    oField6 = 'DrawingNo';
    oField7 = 'MaterialUnit';
    oField8 = 'supMaterialNo';
    oField9 = 'superName';
    oField10 = 'currPrice';

    oField11 = 'supermodel';
    oField12 = 'superfactory';

    Material = window.open("/btcjerpWeb/jsp/co/cho_matnew/Sel_MaterialC.jsp", "Material", "resizable=yes,dependent=yes,scrollbars=yes,left=90,top=45,width=" + screen.width * .83 + ",height=" + screen.height * .85);
    Material.focus();
}
//选择物资设备类别
//自动生成器序号：U391
function OpenFitandEquip(strt,servlet) {
    Material = window.open("/btcjerpWeb/Cho_FitandEquip?ACTION=selectwr&materialno="+strt+"&servlet="+servlet, "Material", "resizable=yes,dependent=yes,scrollbars=yes,left=90,top=45,width=" + screen.width * .83 + ",height=" + screen.height * .85);
    Material.focus();
}
function OpenMaterialSort(oDestination,oDestinationo1,oDestinationo2,oDestinationo3,oDestinationo4,oDestinationo5,oDestinationo6,oDestinationo7,oDestinationo8,oDestinationo9,oDestinationo10,oDestinationo11) {
    oField1 = oDestination;
    oField2 = oDestinationo1;
    oField3 = oDestinationo2;
    oField4 = oDestinationo3;
    oField5 = oDestinationo4;
    oField6 = oDestinationo5;
    oField7 = oDestinationo6;
    oField8 = oDestinationo7;
    oField9 = oDestinationo8;
    oField10 = "";
    oField11 = oDestinationo10;
    oField12 = oDestinationo11;

    Material = window.open("/btcjerpWeb/jsp/co/cho_matnew/Sel_MatSort.jsp", "Material", "resizable=yes,dependent=yes,scrollbars=yes,left=90,top=45,width=" + screen.width * .83 + ",height=" + screen.height * .85);
    Material.focus();
}
function OpenMaterialSortmup(oDestination,oDestinationo1,oDestinationo2,oDestinationo3,oDestinationo4,oDestinationo5,oDestinationo6,oDestinationo7,oDestinationo8,oDestinationo9,oDestinationo10,oDestinationo11) {
    oField1 = oDestination;
    oField2 = oDestinationo1;
    oField3 = oDestinationo2;
    oField4 = oDestinationo3;
    oField5 = oDestinationo4;
    oField6 = oDestinationo5;
    oField7 = oDestinationo6;
    oField8 = oDestinationo7;
    oField9 = oDestinationo8;
    oField10 = "";
    oField11 = oDestinationo10;
    oField12 = oDestinationo11;

    Material = window.open("/btcjerpWeb/jsp/co/cho_matnew/Sel_MatSortMup.jsp", "Material", "resizable=yes,dependent=yes,scrollbars=yes,left=90,top=45,width=" + screen.width * .83 + ",height=" + screen.height * .85);
    Material.focus();
}

//可调用 自定义方法  m_click()
//自动生成器序号：U003
function OpenMaterialF(oDestination,oDestinationo1,oDestinationo2,oDestinationo3,oDestinationo4,oDestinationo5,oDestinationo6,oDestinationo7,oDestinationo8,oDestinationo9,oDestinationo10,oDestinationo11) {
    oField1 = oDestination;
    oField2 = oDestinationo1;
    oField3 = oDestinationo2;
    oField4 = oDestinationo3;
    oField5 = oDestinationo4;
    oField6 = oDestinationo5;
    oField7 = oDestinationo6;
    oField8 = oDestinationo7;
    oField9 = oDestinationo8;
    oField10 = oDestinationo9;
    oField11 = oDestinationo10;
    oField12 = oDestinationo11;

    Material = window.open("/btcjerpWeb/jsp/co/cho_matnew/Sel_MaterialC.jsp?mode=2", "Material", "resizable=yes,dependent=yes,scrollbars=yes,left=90,top=45,width=" + screen.width * .83 + ",height=" + screen.height * .85);
    Material.focus();
}

//自动生成器序号：U004
function OpenMaterialFM() {
    oField1 = 'MaterialId';
    oField2 = 'MaterialNo';
    oField3 = 'MaterialName';
    oField4 = 'MaterialModel';
    oField5 = 'MaterialFactory';
    oField6 = 'DrawingNo';
    oField7 = 'MaterialUnit';
    oField8 = 'supMaterialNo';
    oField9 = 'superName';
    oField10 = 'currPrice';

    oField11 = 'supermodel';
    oField12 = 'superfactory';

    Material = window.open("/btcjerpWeb/jsp/co/cho_matnew/Sel_MaterialC.jsp?mode=2", "Material", "resizable=yes,dependent=yes,scrollbars=yes,left=90,top=45,width=" + screen.width * .83 + ",height=" + screen.height * .85);
    Material.focus();
}



//可调用 自定义方法  m_click()
//                  但如果无计划价格，则不返回
//自动生成器序号：U005
 
function OpenMaterialFNo(oDestination,oDestinationo1,oDestinationo2,oDestinationo3,oDestinationo4,oDestinationo5,oDestinationo6,oDestinationo7,oDestinationo8,oDestinationo9,oDestinationo10,oDestinationo11) {
    oField1 = oDestination;
    oField2 = oDestinationo1;
    oField3 = oDestinationo2;
    oField4 = oDestinationo3;
    oField5 = oDestinationo4;
    oField6 = oDestinationo5;
    oField7 = oDestinationo6;
    oField8 = oDestinationo7;
    oField9 = oDestinationo8;
    oField10 = oDestinationo9;
    oField11 = oDestinationo10;
    oField12 = oDestinationo11;

    Material = window.open("/btcjerpWeb/jsp/co/cho_matnew/Sel_MaterialC.jsp?mode=1", "Material", "resizable=yes,dependent=yes,scrollbars=yes,left=90,top=45,width=" + screen.width * .83 + ",height=" + screen.height * .85);
    Material.focus();
}

//自动生成器序号：U006
function OpenMaterialFNoM() {
    oField1 = 'MaterialId';
    oField2 = 'MaterialNo';
    oField3 = 'MaterialName';
    oField4 = 'MaterialModel';
    oField5 = 'MaterialFactory';
    oField6 = 'DrawingNo';
    oField7 = 'MaterialUnit';
    oField8 = 'supMaterialNo';
    oField9 = 'superName';
    oField10 = 'currPrice';

    oField11 = 'supermodel';
    oField12 = 'superfactory';

    Material = window.open("/btcjerpWeb/jsp/co/cho_matnew/Sel_MaterialC.jsp?mode=1", "Material", "resizable=yes,dependent=yes,scrollbars=yes,left=90,top=45,width=" + screen.width * .83 + ",height=" + screen.height * .85);
    Material.focus();
}

//自动生成器序号：U007
function OpenMaterialD(oDestination,oDestinationo1,oDestinationo2,oDestinationo3,oDestinationo4,oDestinationo5,oDestinationo6,oDestinationo7) {
    oField1 = oDestination;
    oField2 = oDestinationo1;
    oField3 = oDestinationo2;
    oField4 = oDestinationo3;
    oField5 = oDestinationo4;
    oField6 = oDestinationo5;
    oField7 = oDestinationo6;
    oField8 = oDestinationo7;
    oField9 = "";
    oField10 = "";
    oField11 = '';
    oField12 = '';

    Material = window.open("/btcjerpWeb/jsp/co/cho_matnew/Sel_MaterialC.jsp", "Material", "resizable=yes,dependent=yes,scrollbars=yes,left=90,top=45,width=" + screen.width * .83 + ",height=" + screen.height * .85);
    Material.focus();
}

//以下为选择物资函数( 仅物资--- 单选)
//传参方法：
//按顺序为(共12项)：物资ID、物资编号、物资名称、型号、生产厂、图号、计量单位、上级物资编号、上级物资名称,计划价格,
//
//不需要的参数用："" 代替,注意传参顺序要一样
//
//自动生成器序号：U008
function OpenMatonlyW(oDestination,oDestinationo1,oDestinationo2,oDestinationo3,oDestinationo4,oDestinationo5,oDestinationo6,oDestinationo7,oDestinationo8,oDestinationo9,oDestinationo10,oDestinationo11) {
    oField1 = oDestination;
    oField2 = oDestinationo1;
    oField3 = oDestinationo2;
    oField4 = oDestinationo3;
    oField5 = oDestinationo4;
    oField6 = oDestinationo5;
    oField7 = oDestinationo6;
    oField8 = oDestinationo7;
    oField9 = oDestinationo8;
    oField10 = oDestinationo9;
    oField11 = oDestinationo10;
    oField12 = oDestinationo11;

    Material = window.open("/btcjerpWeb/jsp/co/cho_matnew/Sel_MaterialC.jsp", "Material", "resizable=yes,dependent=yes,scrollbars=yes,left=90,top=45,width=" + screen.width * .83 + ",height=" + screen.height * .85);
    Material.focus();
}


//自动生成器序号：U009
function OpenMatonlyM() {
    oField1  = 'MaterialId';
    oField2  = 'MaterialNo';
    oField3  = 'MaterialName';
    oField4  = 'MaterialModel';
    oField5  = 'MaterialFactory';
    oField6  = 'DrawingNo';
    oField7  = 'MaterialUnit';
    oField8  = 'supMaterialNo';
    oField9  = 'superName';
    oField10 = 'currPrice';

    oField11 = 'supermodel';
    oField12 = 'superfactory';
    oField13 = 'MATERIALSYSCODE';

    Material = window.open("/btcjerpWeb/jsp/co/cho_matnew/Sel_MaterialC.jsp", "Material", "resizable=yes,dependent=yes,scrollbars=yes,left=90,top=45,width=" + screen.width * .83 + ",height=" + screen.height * .85);
    Material.focus();
}


//自动生成器序号：U010
function OpenMatonlyD(oDestination,oDestinationo1,oDestinationo2,oDestinationo3,oDestinationo4,oDestinationo5,oDestinationo6,oDestinationo7) {

    oField1 = oDestination;
    oField2 = oDestinationo1;
    oField3 = oDestinationo2;
    oField4 = oDestinationo3;
    oField5 = oDestinationo4;
    oField6 = oDestinationo5;
    oField7 = oDestinationo6;
    oField8 = oDestinationo7;
    oField9  = "";
    oField10 = "";
    oField11 = "";
    oField12 = "";

    Material = window.open("/btcjerpWeb/jsp/co/cho_matnew/Sel_MaterialC.jsp", "Material", "resizable=yes,dependent=yes,scrollbars=yes,left=90,top=45,width=" + screen.width * .83 + ",height=" + screen.height * .85);
    Material.focus();
}
//自动生成器序号：U385
//只选择物资二级大类
//id,no,name,model,unit,syscode
function OpenMatType(oDestination,oDestinationo1,oDestinationo2,oDestinationo3,oDestinationo4,oDestinationo5) {
    oField1 = oDestination;
    oField2 = oDestinationo1;
    oField3 = oDestinationo2;
    oField4 = oDestinationo3;
    oField5 = oDestinationo4;
    oField6 = oDestinationo5;

    Material = window.open("/btcjerpWeb/jsp/co/chomatonly/cho_mattype.jsp", "Material", "resizable=yes,dependent=yes,scrollbars=yes,left=90,top=45,width=" + screen.width * .83 + ",height=" + screen.height * .85);
    Material.focus();
}


// END 选择物资设备函数(单选)


//以下为选择物资设备函数(多选)
//
//自动生成器序号：U011
function OpenMaterialT() {
    Material = window.open("/btcjerpWeb/jsp/co/choimaterial/cho_materialM.jsp", "Material", "alwaysRaised,resizable=yes,dependent=yes,scrollbars=yes,left=160,top=100,width=" + screen.width * 0.78 + ",height=" + screen.height * .64);
    Material.focus();
}
// END 选择物资设备函数(多选) 

//以下为选择物资函数( 仅物资 --多选)
//
//选择机构多选 返回机构编号，syscode
//session  p_orga_tj
function OpenOrgaT(oDestination,oDestination1)
{
   oField1 = oDestination;
   oField2 = oDestination1;
   OrigT = window.open("/btcjerpWeb/jsp/co/choiorganew/cho_orga_frm.jsp", "OrigT", "alwaysRaised,resizable=yes,dependent=yes,scrollbars=yes,left=90,top=45,width=" + screen.width * .83 + ",height=" + screen.height * .85);
   OrigT.focus();
}

//


//自动生成器序号：U012
function OpenMatonlyT() {
    Material = window.open("/btcjerpWeb/jsp/co/choimatonly/cho_matonlyM.jsp", "Material", "alwaysRaised,resizable=yes,dependent=yes,scrollbars=yes,left=160,top=100,width=" + screen.width * 0.78 + ",height=" + screen.height * .64);
    Material.focus();
}

// END 选择物资函数(多选) 


//以下为选择组织机构函数(二级单位及其下属 单选)  机构ID、机构简称、机构全称、机构编号、联系电话、地址、内码
function OpenCompOrgiD( oDestination,oDestination1,oDestination2,oDestination3,oDestination4,oDestination5,oDestination6) {
   oField1 = oDestination;
   oField2 = oDestination1;
   oField3 = oDestination2;
   oField4 = oDestination3;
   oField5 = oDestination4;
   oField6 = oDestination5;
   oField7 = oDestination6;   
   Orig = window.open("/btcjerpWeb/jsp/co/choiorga/cho_Comporga_Result.jsp", "Orig", "alwaysRaised,resizable=yes,dependent=yes,scrollbars=yes,left=90,top=45,width=" + screen.width * .83 + ",height=" + screen.height * .85);
   Orig.focus();
}

//传参方法：
//按顺序为：机构ID、机构简称、机构全称、机构编号、联系电话、地址
//
//不需要的参数用："" 代替,注意传参顺序要一样
//

//传入的SESSION参数名为：p_orga_tj
//自动生成器序号：U013
function OpenOrgiD( oDestination,oDestination1,oDestination2,oDestination3,oDestination4,oDestination5) {
   oField1 = oDestination;
   oField2 = oDestination1;
   oField3 = oDestination2;
   oField4 = oDestination3;
   oField5 = oDestination4;
   oField6 = oDestination5;
   oField7 = "";
   oField8  = "";
   oField9  = "";
   oField10 = "";
   Orig = window.open("/btcjerpWeb/jsp/co/choiorga/cho_orga_tvw.jsp", "Orig", "alwaysRaised,resizable=yes,dependent=yes,scrollbars=yes,left=90,top=45,width=" + screen.width * .83 + ",height=" + screen.height * .85);
   Orig.focus();
}

//按顺序为：机构ID、机构简称、机构全称、机构编号、联系电话、地址、单位内码 、 sql条件语句

//传入的最后一个参数为 条件SQL语句
//自动生成器序号：U014
function OpenOrgiDD( oDestination,oDestination1,oDestination2,oDestination3,oDestination4,oDestination5,oDestination6,oDestination7) {
   oField1 = oDestination;
   oField2 = oDestination1;
   oField3 = oDestination2;
   oField4 = oDestination3;
   oField5 = oDestination4;
   oField6 = oDestination5;
   oField7 = oDestination6;
   oField8  = "";
   oField9  = "";
   oField10 = "";
   Orig = window.open("/btcjerpWeb/jsp/co/choiorga/cho_orga_tvw.jsp?nowsql="+oDestination7, "Orig", "alwaysRaised,resizable=yes,dependent=yes,scrollbars=yes,left=90,top=45,width=" + screen.width * .83 + ",height=" + screen.height * .85);
   Orig.focus();
}

//只选择二级单位
//自动生成器序号：U015
function OpenOrgiC( oDestination,oDestination1,oDestination2,oDestination3,oDestination4,oDestination5) {
   oField1 = oDestination;
   oField2 = oDestination1;
   oField3 = oDestination2;
   oField4 = oDestination3;
   oField5 = oDestination4;
   oField6 = oDestination5;
   oField7  = "";
   oField8  = "";
   oField9  = "";
   oField10 = "";
   Orig = window.open("/btcjerpWeb/jsp/co/choiorga/cho_orga_comp.jsp", "Orig", "alwaysRaised,resizable=yes,dependent=yes,scrollbars=yes,left=90,top=45,width=" + screen.width * .83 + ",height=" + screen.height * .85);
   Orig.focus();
}

//只选择本单位及其下级单位
//自动生成器序号：U016
function OpenOrgiS( oDestination,oDestination1,oDestination2,oDestination3,oDestination4,oDestination5) {
   oField1 = oDestination;
   oField2 = oDestination1;
   oField3 = oDestination2;
   oField4 = oDestination3;
   oField5 = oDestination4;
   oField6 = oDestination5;
   oField7  = "";
   oField8  = "";
   oField9  = "";
   oField10 = "";
   Orig = window.open("/btcjerpWeb/jsp/co/choiorga/cho_orga_self.jsp", "Orig", "alwaysRaised,resizable=yes,dependent=yes,scrollbars=yes,left=90,top=45,width=" + screen.width * .83 + ",height=" + screen.height * .85);
   Orig.focus();
}

//传参方法：
//按顺序为：机构ID、机构简称、机构全称、机构编号、联系电话、地址、单位内码
//
//自动生成器序号：U017
function OpenOrgiE( oDestination,oDestination1,oDestination2,oDestination3,oDestination4,oDestination5,oDestination6) {
   oField1  = oDestination;
   oField2  = oDestination1;
   oField3  = oDestination2;
   oField4  = oDestination3;
   oField5  = oDestination4;
   oField6  = oDestination5;
   oField7  = oDestination6;
   oField8  = "";
   oField9  = "";
   oField10 = "";
   Orig = window.open("/btcjerpWeb/jsp/co/choiorga/cho_orga_tvw.jsp", "Orig", "alwaysRaised,resizable=yes,dependent=yes,scrollbars=yes,left=90,top=45,width=" + screen.width * .63 + ",height=" + screen.height * .85);
   Orig.focus();
}


//传参方法：
//按顺序为：机构ID、机构简称、机构全称、机构编号、联系电话、地址、单位内码、对应二级单位ID、对应二级单位编号、对应二级单位简称
//
//自动生成器序号：U018
function OpenOrgiM() {
   oField1  = 'OrgaId';
   oField2  = 'OrgaSName';
   oField3  = 'OrgaName';
   oField4  = 'OrgaNo';
   oField5  = 'OrgaTel';
   oField6  = 'OrgaAddress';
   oField7  = 'OrgaSysCode';
   oField8  = 'BOrgaId';
   oField9  = 'BOrgaNo';
   oField10 = 'BOrgaSName';
   Orig = window.open("/btcjerpWeb/jsp/co/choiorga/cho_orga_tvw.jsp", "Orig", "alwaysRaised,resizable=yes,dependent=yes,scrollbars=yes,left=90,top=45,width=" + screen.width * .83 + ",height=" + screen.height * .85);
   Orig.focus();
}


//自动生成器序号：U019
function OpenOrgiA( oDestination,oDestination1,oDestination2,oDestination3,oDestination4,oDestination5,oDestination6,oDestination7,oDestination8,oDestination9) {
   oField1  = oDestination;
   oField2  = oDestination1;
   oField3  = oDestination2;
   oField4  = oDestination3;
   oField5  = oDestination4;
   oField6  = oDestination5;
   oField7  = oDestination6;
   oField8  = oDestination7;
   oField9  = oDestination8;
   oField10 = oDestination9;
   Orig = window.open("/btcjerpWeb/jsp/co/choiorga/cho_orga_tvw.jsp", "Orig", "alwaysRaised,resizable=yes,dependent=yes,scrollbars=yes,left=90,top=45,width=" + screen.width * .83 + ",height=" + screen.height * .85);
   Orig.focus();
}

// END --机构选择



//以下为选择人员函数(单选)
//传参方法：
//按顺序为(共8项)：人员ID、人员编号、安全编码、所属部门ID、所属部门编号、所属部门名称、人员姓名、人员性别
//
//不需要的参数用："" 代替,注意传参顺序要一样
//


//传入的条件SESSION 命名为: p_person_tj

//自动生成器序号：U020
function OpenPersD( oDestination,oDestination1,oDestination2,oDestination3,oDestination4,oDestination5,oDestination6,oDestination7) {
   oField1 = oDestination;
   oField2 = oDestination1;
   oField3 = oDestination2;
   oField4 = oDestination3;
   oField5 = oDestination4;
   oField6 = oDestination5;
   oField7 = oDestination6;
   oField8 = oDestination7;
   oField9 = "";
   oField10 = "";
   oField11 = "";
   oField12 = "";
   oField13 = "";
   oField14 = "";
   oField15 = "";
   oField16 = "";
   oField17 = "";
   oField18 = "";
   Pers = window.open("/btcjerpWeb/jsp/co/choipernew/Sel_Person.jsp", "Pers", "alwaysRaised,resizable=yes,dependent=yes,scrollbars=yes,left="+(screen.width * .04/2 - 2)+",top="+(screen.height*.14/2 - 2)+",width=" + screen.width * .96 + ",height=" + screen.height * .86);
   Pers.focus();
}

//传入的条件SESSION 命名为: p_person_tjd

//自动生成器序号：U021
function OpenPersDD( oDestination,oDestination1,oDestination2,oDestination3,oDestination4,oDestination5,oDestination6,oDestination7) {
   oField1 = oDestination;
   oField2 = oDestination1;
   oField3 = oDestination2;
   oField4 = oDestination3;
   oField5 = oDestination4;
   oField6 = oDestination5;
   oField7 = oDestination6;
   oField8 = oDestination7;
   oField9 = "";
   oField10 = "";
   oField11 = "";
   oField12 = "";
   oField13 = "";
   oField14 = "";
   oField15 = "";
   oField16 = "";
   oField17 = "";
   oField18 = "";
   Pers = window.open("/btcjerpWeb/jsp/co/choipernew/Sel_PersonD.jsp", "Pers", "alwaysRaised,resizable=yes,dependent=yes,scrollbars=yes,left="+(screen.width * .04/2 - 2)+",top="+(screen.height*.14/2 - 2)+",width=" + screen.width * .96 + ",height=" + screen.height * .86);
   Pers.focus();
}

//按顺序为(共9项)：人员ID、人员编号、安全编码、所属部门ID、所属部门编号、所属部门名称、人员姓名、人员性别、人员单位内码

//传入的条件SESSION 命名为: p_person_tj

//自动生成器序号：U022
function OpenPersC( oDestination,oDestination1,oDestination2,oDestination3,oDestination4,oDestination5,oDestination6,oDestination7,oDestination8) {
   oField1 = oDestination;
   oField2 = oDestination1;
   oField3 = oDestination2;
   oField4 = oDestination3;
   oField5 = oDestination4;
   oField6 = oDestination5;
   oField7 = oDestination6;
   oField8 = oDestination7;
   oField9 = oDestination8;
   oField10 = "";
   oField11 = "";
   oField12 = "";
   oField13 = "";
   oField14 = "";
   oField15 = "";
   oField16 = "";
   oField17 = "";
   oField18 = "";
   Pers = window.open("/btcjerpWeb/jsp/co/choipernew/Sel_Person.jsp", "Pers", "alwaysRaised,resizable=yes,dependent=yes,scrollbars=yes,left=90,top=45,width=" + screen.width * .73 + ",height=" + screen.height * .78);
   Pers.focus();
}
//按顺序为（共17项）：人员ID、人员编号、安全编码、所属部门ID、所属部门编号、所属部门名称、人员姓名、人员性别、人员单位内码、职务、职称、文化程度、报警级别、参加工作时间、出生日期、人员分类、年龄,联系电话

//自动生成器序号：U023
function OpenPersA( oDestination,oDestination1,oDestination2,oDestination3,oDestination4,oDestination5,oDestination6,oDestination7,oDestination8,oDestination9,oDestination10,oDestination11,oDestination12,oDestination13,oDestination14,oDestination15,oDestination16,oDestination17) {
   oField1  = oDestination;
   oField2  = oDestination1;
   oField3  = oDestination2;
   oField4  = oDestination3;
   oField5  = oDestination4;
   oField6  = oDestination5;
   oField7  = oDestination6;
   oField8  = oDestination7;
   oField9  = oDestination8;
   oField10 = oDestination9;
   oField11 = oDestination10;
   oField12 = oDestination11;
   oField13 = oDestination12;
   oField14 = oDestination13;
   oField15 = oDestination14;
   oField16 = oDestination15;
   oField17 = oDestination16;
   oField18 = oDestination17;
   Pers = window.open("/btcjerpWeb/jsp/co/choipernew/Sel_Person.jsp", "Pers", "alwaysRaised,resizable=yes,dependent=yes,scrollbars=yes,left=90,top=45,width=" + screen.width * .73 + ",height=" + screen.height * .78);
   Pers.focus();
}

//自动生成器序号：U024
function OpenPersM() {
   oField1 = 'erpuserid';
   oField2 = 'erpuserno';
   oField3 = 'securitycode';
   oField4 = 'orgaid';
   oField5 = 'organo';
   oField6 = 'orgashortname';
   oField7 = 'erpusername';
   oField8 = 'usersex';
   oField9  = 'usertel';
   oField10 = "";
   oField11 = "";
   oField12 = "";
   oField13 = "";
   oField14 = "";
   oField15 = "";
   oField16 = "";
   oField17 = "";
   oField18 = "";
   Pers = window.open("/btcjerpWeb/jsp/co/choipernew/Sel_Person.jsp", "Pers", "alwaysRaised,resizable=yes,dependent=yes,scrollbars=yes,left=90,top=45,width=" + screen.width * .73 + ",height=" + screen.height * .78);
   Pers.focus();
}
// END 选择人员函数（单选）



//以下为选择工作面/巷道函数(单选)
//传参方法：
//按顺序为：//
//不需要的参数用："" 代替,注意传参顺序要一样
//
//自动生成器序号：U025
function OpenFaceLaneD( oDestination,oDestination1,oDestination2,oDestination3,oDestination4,oDestination5,oDestination6,oDestination7,oDestination8,oDestination9,oDestination10,oDestination11,oDestination12,oDestination13,oDestination14,oDestination15) {

   oField1  = oDestination;
   oField2  = oDestination1;
   oField3  = oDestination2;
   oField4  = oDestination3;
   oField5  = oDestination4;
   oField6  = oDestination5;
   oField7  = oDestination6;
   oField8  = oDestination7;
   oField9  = oDestination8;
   oField10 = oDestination9;
   oField11 = oDestination10;
   oField12 = oDestination11;
   oField13 = oDestination12;
   oField14 = oDestination13;
   oField15 = oDestination14;
   oField16 = oDestination15;

   facelaneway = window.open("/btcjerpWeb/jsp/co/choifacelane/Cho_Face.jsp", "facelaneway", "scrollbars=yes,left=90,top=45,width=" + screen.width * .83 + ",height=" + screen.height * .85);
   facelaneway.focus();
}

//自动生成器序号：U026
function OpenFaceLaneDD( oDestination,oDestination1,oDestination2,oDestination3,oDestination4,oDestination5,oDestination6,oDestination7,oDestination8,oDestination9,oDestination10,oDestination11,oDestination12,oDestination13,oDestination14,oDestination15,oDestination16) {

   oField1  = oDestination;
   oField2  = oDestination1;
   oField3  = oDestination2;
   oField4  = oDestination3;
   oField5  = oDestination4;
   oField6  = oDestination5;
   oField7  = oDestination6;
   oField8  = oDestination7;
   oField9  = oDestination8;
   oField10 = oDestination9;
   oField11 = oDestination10;
   oField12 = oDestination11;
   oField13 = oDestination12;
   oField14 = oDestination13;
   oField15 = oDestination14;
   oField16 = oDestination15;

   facelaneway = window.open("/btcjerpWeb/jsp/co/choifacelane/Cho_Face.jsp?nowsql="+oDestination16, "facelaneway", "scrollbars=yes,left=90,top=45,width=" + screen.width * .83 + ",height=" + screen.height * .85);
   facelaneway.focus();
}

//自动生成器序号：U027
function OpenFaceLaneM() {
   oField1  = "facelanewayid";
   oField2  = "facelanewayno";
   oField3  = "facelanewayname";
   oField4  = "faceorlaneway";
   oField5  = "coalorrock";
   oField6  = "timbering";
   oField7  = "grade";
   oField8  = "lanewayarea";
   oField9  = "lanewaychar";
   oField10 = "excavatemethod";
   oField11 = "grubmethod";
   oField12 = "lanewaymodel";
   oField13 = "wellno";
   oField14 = "wellname";
   oField15 = "organo";
   oField16 = "orgashortname";

   facelaneway = window.open("/btcjerpWeb/jsp/co/choifacelane/Cho_Face.jsp", "facelaneway", "scrollbars=yes,left=90,top=45,width=" + screen.width * .83 + ",height=" + screen.height * .85);
   facelaneway.focus();
}

//以下为选择工程项目函数(单选)
//传参方法：
//按顺序为：工程ID,工程编码，工程名称，工程参数ID
//不需要的参数用："" 代替,注意传参顺序要一样
//
//自动生成器序号：U028
//function OpenProjD( oDestination1,oDestination2,oDestination3,oDestination4) {
  // oField1 = oDestination1;   oField2 = oDestination2;   oField3 = oDestination3;   oField4 = oDestination4;
  // Project = window.open("/btcjerpWeb/jsp/co/choiproject/Cho_Project.jsp", "Project", "scrollbars=yes,left=90,top=45,width=" + screen.width * .73 + ",height=" + screen.height * .78);
//   Project.focus();}

//自动生成器序号：U029
function OpenProjM() {
   oField1 = "projectid";
   oField2 = "projno";
   oField3 = "projname";
   oField4 = "projtypeid";
   Project = window.open("/btcjerpWeb/jsp/co/choiproject/Cho_Project.jsp", "Project", "scrollbars=yes,left=90,top=45,width=" + screen.width * .73 + ",height=" + screen.height * .78);
   Project.focus();
}


//自动生成器序号：U030
function OpenProjDD( oDestination1,oDestination2,oDestination3,oDestination4,oDestination5) {

   oField1 = oDestination1;
   oField2 = oDestination2;
   oField3 = oDestination3;
   oField4 = oDestination4;
   Project = window.open("/btcjerpWeb/jsp/co/choiproject/Cho_Project.jsp?nowsql="+oDestination5, "Project", "scrollbars=yes,left=90,top=45,width=" + screen.width * .73 + ",height=" + screen.height * .78);
   Project.focus();
}


//自动生成器序号：U030
function OpenProjDM( oDestination1,oDestination2,oDestination3,oDestination4,oDestination5,oDestination6,oDestination7,oDestination8,oDestination9) {

   oField1 = oDestination1;
   oField2 = oDestination2;
   oField3 = oDestination3;
   oField4 = oDestination4;
   oField5 = oDestination5;
   oField6 = oDestination6;
   oField7 = oDestination7;
   oField8 = oDestination8;
   oField9 = "";
   
   Project = window.open("/btcjerpWeb/jsp/co/choiproject/Cho_ProjectD.jsp?nowsql="+oDestination9, "Project", "scrollbars=yes,left=90,top=45,width=" + screen.width * .73 + ",height=" + screen.height * .78);
   Project.focus();
}


//以下为选择矿井信息函数(单选)
//传参方法：
//按顺序为：矿井ID,矿井编号,矿井名称，矿井位置，矿井所属部门ID，，矿井所属部门编号，，矿井所属部门名称，
//不需要的参数用："" 代替,注意传参顺序要一样
//
//自动生成器序号：U031
function OpenWellInfoD( oDestination1,oDestination2,oDestination3,oDestination4,oDestination5,oDestination6,oDestination7) {
   oField1  = oDestination1;
   oField2  = oDestination2;
   oField3  = oDestination3;
   oField4  = oDestination4;
   oField5  = oDestination5;
   oField6  = oDestination6;
   oField7  = oDestination7;
    Wellinfo = window.open("/btcjerpWeb/jsp/co/choiwellinfo/Cho_WellInfo.jsp", "Wellinfo", "scrollbars=yes,left=90,top=45,width=" + screen.width * .83 + ",height=" + screen.height * .85);
   Wellinfo.focus();   
}


//自动生成器序号：U032
function OpenWellInfoM() {
   oField1  = "wellid";
   oField2  = "wellno";
   oField3  = "wellname";
   oField4  = "position";
   oField5  = "deptid";
   oField6  = "deptno";
   oField7  = "deptname";
    Wellinfo = window.open("/btcjerpWeb/jsp/co/choiwellinfo/Cho_WellInfo.jsp", "Wellinfo", "scrollbars=yes,left=90,top=45,width=" + screen.width * .83 + ",height=" + screen.height * .85);
   Wellinfo.focus();   
}
//以下为选择银行函数(单选)
//传参方法：
//按顺序为：银行ID、银行简称、银行全称、银行编号、联系电话、地址
//
//不需要的参数用："" 代替,注意传参顺序要一样
//
//自动生成器序号：U033
function OpenBankD( oDestination,oDestination1,oDestination2,oDestination3,oDestination4,oDestination5) {
   oField1 = oDestination;
   oField2 = oDestination1;
   oField3 = oDestination2;
   oField4 = oDestination3;
   oField5 = oDestination4;
   oField6 = oDestination5;
   Bank = window.open("/btcjerpWeb/jsp/co/choibank/cho_banksel.jsp", "Bank", "alwaysRaised,resizable=yes,dependent=yes,scrollbars=yes,left=90,top=45,width=" + screen.width * .83 + ",height=" + screen.height * .85);
   Bank.focus();
}

//自动生成器序号：U034
function OpenBankM() {
   oField1 = 'BankId';
   oField2 = 'BankshortName';
   oField3 = 'BankName';
   oField4 = 'BankNo';
   oField5 = 'BankTel';
   oField6 = 'BankAddress';
   Bank = window.open("/btcjerpWeb/jsp/co/choibank/cho_banksel.jsp", "Bank", "alwaysRaised,resizable=yes,dependent=yes,scrollbars=yes,left=90,top=45,width=" + screen.width * .83 + ",height=" + screen.height * .85);
   Bank.focus();
}
// END --银行选择


//以下为选择工程类型函数(单选)
//传参方法：
//按顺序为：工程类型ID、工程类型编号，工程类型名称、煤岩别、支护形式、巷道断面、巷道性质
//
//不需要的参数用："" 代替,注意传参顺序要一样
//
//自动生成器序号：U035
function OpenProjTypeD( oDestination,oDestination1,oDestination2,oDestination3,oDestination4,oDestination5,oDestination6,oDestination7) {
   oField1 = oDestination;
   oField2 = oDestination1;
   oField3 = oDestination2;
   oField4 = oDestination3;
   oField5 = oDestination4;
   oField6 = oDestination5;
   oField7 = oDestination6;
   oField8 = oDestination7;
   ProjType = window.open("/btcjerpWeb/jsp/co/choiprojecttype/cho_projtype.jsp", "ProjType", "alwaysRaised,resizable=yes,dependent=yes,scrollbars=yes,left=90,top=45,width=" + screen.width * .83 + ",height=" + screen.height * .85);
   ProjType.focus();
}


//自动生成器序号：U036
function OpenProjTypeM() {
   oField1 = 'ProjectTypeid';
   oField2 = 'Projtypeno';
   oField3 = 'ProjTypename';
   oField4 = 'Coalorrock';
   oField5 = 'Timbering';
   oField6 = 'Lanewayarea';
   oField7 = 'Lanewaychar';
   ProjType = window.open("/btcjerpWeb/jsp/co/choiprojecttype/cho_projtype.jsp", "ProjType", "alwaysRaised,resizable=yes,dependent=yes,scrollbars=yes,left=90,top=45,width=" + screen.width * .83 + ",height=" + screen.height * .85);
   ProjType.focus();
}
// END --工程类别选择

// 配件选择    次序  id,no,name,model,unit
//自动生成器序号：U037
function OpenFittingD(oDestination,oDestinationo1,oDestinationo2,oDestinationo3,oDestinationo4) {
    oField1 = oDestination;
    oField2 = oDestinationo1;
    oField3 = oDestinationo2;
    oField4 = oDestinationo3;
    oField5 = oDestinationo4;
    Material = window.open("/btcjerpWeb/jsp/co/choifit/cho_material_result.jsp", "Material", "resizable=yes,dependent=yes,scrollbars=yes,left=90,top=45,width=" + screen.width * .83 + ",height=" + screen.height * .85);
    Material.focus();
}


//end --配件选择

//设备选择 次序：设备ID,设备编码,设备名称,型号图号,规格，计量单位,设备状态,上级设备id，
//                1     2       3         4     5        6        7    8
//              上级设备编码,上级设备名称,资产所属单位ID，资产所属单位名称,是否最终设备,syscode，生产厂名称, 计划价格，上级设备规格
//                9           10         11                12              13         14       15         16         17   
//传入SESSION 名称 p_equip_tj

//自动生成器序号：U070
function OpenEquipNew(oDestination,oDestinationo1,oDestinationo2,oDestinationo3,oDestinationo4,oDestinationo5,oDestinationo6,oDestinationo7,oDestinationo8,oDestinationo9,oDestinationo10,oDestinationo11,oDestinationo12,oDestinationo13,oDestinationo14) {
         
    oField1  = oDestination;
    oField2  = oDestinationo1;
    oField3  = oDestinationo2;
    oField4  = oDestinationo3;
    oField5  = oDestinationo4;
    oField6  = oDestinationo5;
    oField7  = oDestinationo6;
    oField8  = oDestinationo7;
    oField9  = oDestinationo8;
    oField10 = oDestinationo9;
    oField11 = oDestinationo10;
    oField12 = oDestinationo11;
    oField13 = oDestinationo12;
    oField14 = oDestinationo13;
    oField15 = oDestinationo14;
    oField16 = "";
    oField17 = "";
    
    Material = window.open("/btcjerpWeb/jsp/co/choiequinew/cho_equip_result.jsp", "Material", "resizable=yes,dependent=yes,scrollbars=yes,left=10,top=45,width=" + screen.width * .95 + ",height=" + screen.height * .85);
    Material.focus();
} 

function OpenEquipAll(oDestination,oDestinationo1,oDestinationo2,oDestinationo3,oDestinationo4,oDestinationo5,oDestinationo6,oDestinationo7,oDestinationo8,oDestinationo9,oDestinationo10,oDestinationo11,oDestinationo12,oDestinationo13,oDestinationo14,oDestinationo15,oDestinationo16) {
         
    oField1  = oDestination;
    oField2  = oDestinationo1;
    oField3  = oDestinationo2;
    oField4  = oDestinationo3;
    oField5  = oDestinationo4;
    oField6  = oDestinationo5;
    oField7  = oDestinationo6;
    oField8  = oDestinationo7;
    oField9  = oDestinationo8;
    oField10 = oDestinationo9;
    oField11 = oDestinationo10;
    oField12 = oDestinationo11;
    oField13 = oDestinationo12;
    oField14 = oDestinationo13;
    oField15 = oDestinationo14;
    oField16 = oDestinationo15;
    oField17 = oDestinationo16;
    
    Material = window.open("/btcjerpWeb/jsp/co/choiequinew/cho_equip_result.jsp", "Material", "resizable=yes,dependent=yes,scrollbars=yes,left=10,top=45,width=" + screen.width * .95 + ",height=" + screen.height * .85);
    Material.focus();
} 


//设备选择 次序：id,no,name,model,unit,supno,supname
//自动生成器序号：U038
function OpenEquipD(oDestination,oDestinationo1,oDestinationo2,oDestinationo3,oDestinationo4,oDestinationo5,oDestinationo6) {
         
    oField1  = oDestination;
    oField2  = oDestinationo1;
    oField3  = oDestinationo2;
    oField4  = "";
    oField5  = oDestinationo3;
    oField6  = oDestinationo4;
    oField7  = "";
    oField8  = "";
    oField9  = oDestinationo5;
    oField10 = oDestinationo6;
    oField11 = "";
    oField12 = "";
    oField13 = "";
    oField14 = "";
    oField15 = "";
    oField16 = "";
    oField17 = "";
    Material = window.open("/btcjerpWeb/jsp/co/choiequinew/cho_equip_result.jsp", "Material", "resizable=yes,dependent=yes,scrollbars=yes,left=10,top=45,width=" + screen.width * .98 + ",height=" + screen.height * .85);
    Material.focus();
} 


//选择最终设备 次序：           设备ID      设备编号,      设备名称,      规格型号,         标准单位,  ,计划价格,       是否最终设备
function OpenFinalEquip(oDestination,oDestinationo1,oDestinationo2,oDestinationo3,oDestinationo4,oDestinationo5,oDestinationo6) {
         
    oField1 = oDestination;
    oField2 = oDestinationo1;
    oField3 = oDestinationo2;
    oField4 = oDestinationo3;
    oField5 = oDestinationo4;
    oField6 = oDestinationo5;
    oField7 = oDestinationo6;
    oField8 = "";
    oField9 = "";
    oField10 = "";
    Material = window.open("/btcjerpWeb/jsp/co/cho_epfinal/cho_equip_result.jsp", "Material", "resizable=yes,dependent=yes,scrollbars=yes,left=90,top=45,width=" + screen.width * .88 + ",height=" + screen.height * .85);
    Material.focus();
}


//使用的时候必须参考 Cho_SessionEquipForm中的session 的写法，谢谢使用 其中的是否最终设备不返回。所以不能用来选择最终设备。
//选择设备类别 次序：           设备ID      设备编号,      设备名称,      规格型号,         标准单位,  ,计划价格,       是否最终设备
function OpenOptionEquip(oDestination,oDestinationo1,oDestinationo2,oDestinationo3,oDestinationo4,oDestinationo5,oDestinationo6) {
         
    oField1 = oDestination;
    oField2 = oDestinationo1;
    oField3 = oDestinationo2;
    oField4 = oDestinationo3;    
    oField5 = oDestinationo4;
    oField6 = oDestinationo5;
    oField7 = oDestinationo6;
    oField8 = "";
    oField9 = "";
    oField10 = "";
    Material = window.open("/btcjerpWeb/jsp/co/cho_epnew/Sel_Material.jsp", "Material", "resizable=yes,dependent=yes,scrollbars=yes,left=90,top=45,width=" + screen.width * .83 + ",height=" + screen.height * .85);
    Material.focus();
}
//选择设备 次序：设备ID 设备编号,设备名称,规格型号,标准单位,上级编码,上级名称,上级规格型号,设备状态,生产厂家,出厂编号,出厂日期,到货日期,规定使用年限,固定资产号,固定资产原值,固定资产折旧方法,设备档案id,内部编码，所属单位ID,使用单位ID,""
//自动生成器序号：U039
function OpenEquipArchives(oDestination,oDestinationo1,oDestinationo2,oDestinationo3,oDestinationo4,oDestinationo5,oDestinationo6,oDestinationo7,oDestinationo8,oDestinationo9,oDestinationo10,oDestinationo11,oDestinationo12,oDestinationo13,oDestinationo14,oDestinationo15,oDestinationo16,oDestinationo17,oDestinationo18,oDestinationo19,oDestinationo20,oDestinationo21) {
         
    oField1 = oDestination;
    oField2 = oDestinationo1;
    oField3 = oDestinationo2;
    oField4 = oDestinationo3;
    oField5 = oDestinationo4;
    oField6 = oDestinationo5;
    oField7 = oDestinationo6;
    oField8 = oDestinationo7;
    oField9 = oDestinationo8;
    oField10 = oDestinationo9;
    oField11 = oDestinationo10;
    oField12 = oDestinationo11;
    oField13 = oDestinationo12;
    oField14= oDestinationo13;
    oField15 = oDestinationo14;
    oField16 = oDestinationo15;
    oField17 = oDestinationo16;
    oField18 = oDestinationo17;
    oField19 = oDestinationo18;
    oField20 = oDestinationo19;
    oField21 = oDestinationo20;
    oField22 =oDestinationo21;
    Material = window.open("/btcjerpWeb/jsp/co/choiequiarch/Sel_Material.jsp", "Material", "resizable=yes,dependent=yes,scrollbars=yes,left=10,top=15,width=" + screen.width * .96 + ",height=" + screen.height * .88);
    Material.focus();
}
function OpenEquipArchives_1(oDestination,oDestinationo1,oDestinationo2,oDestinationo3,oDestinationo4,oDestinationo5,oDestinationo6,oDestinationo7,oDestinationo8,oDestinationo9,oDestinationo10,oDestinationo11,oDestinationo12,oDestinationo13,oDestinationo14,oDestinationo15,oDestinationo16,oDestinationo17,oDestinationo18,oDestinationo19,oDestinationo20,oDestinationo21) {
         
    oField1 = oDestination;
    oField2 = oDestinationo1;
    oField3 = oDestinationo2;
    oField4 = oDestinationo3;
    oField5 = oDestinationo4;
    oField6 = oDestinationo5;
    oField7 = oDestinationo6;
    oField8 = oDestinationo7;
    oField9 = oDestinationo8;
    oField10 = oDestinationo9;
    oField11 = oDestinationo10;
    oField12 = oDestinationo11;
    oField13 = oDestinationo12;
    oField14= oDestinationo13;
    oField15 = oDestinationo14;
    oField16 = oDestinationo15;
    oField17 = oDestinationo16;
    oField18 = oDestinationo17;
    oField19 = oDestinationo18;
    oField20 = oDestinationo19;
    oField21 = oDestinationo20;
    oField22 =oDestinationo21;
    Material = window.open("/btcjerpWeb/jsp/co/choiequiarchnew/Sel_Material.jsp", "Material", "resizable=yes,dependent=yes,scrollbars=yes,left=90,top=45,width=" + screen.width * .83 + ",height=" + screen.height * .85);
    Material.focus();
}

//设备选择 次序：
//id,no,name,model,unit,supno,supname,factory,supmodel,currentprice
//自动生成器序号：U040
function OpenEquipT(oDestination,oDestinationo1,oDestinationo2,oDestinationo3,oDestinationo4,oDestinationo5,oDestinationo6,oDestinationo7,oDestinationo8,oDestinationo9) {
         
    oField1  = oDestination;
    oField2  = oDestinationo1;
    oField3  = oDestinationo2;
    oField4  = "";
    oField5  = oDestinationo3;
    oField6  = oDestinationo4;
    oField7  = "";
    oField8  = "";
    oField9  = oDestinationo5;
    oField10 = oDestinationo6;
    oField11 = "";
    oField12 = "";
    oField13 = "";
    oField14 = "";
    oField15 = oDestinationo7;
    oField16 = oDestinationo9;
    oField17 = oDestinationo8;
    Material = window.open("/btcjerpWeb/jsp/co/choiequinew/cho_equip_result.jsp", "Material", "resizable=yes,dependent=yes,scrollbars=yes,left=10,top=45,width=" + screen.width * .97 + ",height=" + screen.height * .85);
    Material.focus();

}

//如果没有计划价格，则不返回
//自动生成器序号：U041
function OpenEquipFNo(oDestination,oDestinationo1,oDestinationo2,oDestinationo3,oDestinationo4,oDestinationo5,oDestinationo6,oDestinationo7,oDestinationo8,oDestinationo9) {
         
    oField1  = oDestination;
    oField2  = oDestinationo1;
    oField3  = oDestinationo2;
    oField4  = "";
    oField5  = oDestinationo3;
    oField6  = oDestinationo4;
    oField7  = "";
    oField8  = "";
    oField9  = oDestinationo5;
    oField10 = oDestinationo6;
    oField11 = "";
    oField12 = "";
    oField13 = "";
    oField14 = "";
    oField15 = oDestinationo7;
    oField16 = oDestinationo9;
    oField17 = oDestinationo8;
    Material = window.open("/btcjerpWeb/jsp/co/choiequinew/cho_equip_result.jsp?mode=1", "Material", "resizable=yes,dependent=yes,scrollbars=yes,left=90,top=45,width=" + screen.width * .83 + ",height=" + screen.height * .85);
    Material.focus();
}

//调用 自定义方法  m_click()
//自动生成器序号：U042
function OpenEquipMNo(oDestination,oDestinationo1,oDestinationo2,oDestinationo3,oDestinationo4,oDestinationo5,oDestinationo6,oDestinationo7,oDestinationo8,oDestinationo9) {

    oField1  = oDestination;
    oField2  = oDestinationo1;
    oField3  = oDestinationo2;
    oField4  = "";
    oField5  = oDestinationo3;
    oField6  = oDestinationo4;
    oField7  = "";
    oField8  = "";
    oField9  = oDestinationo5;
    oField10 = oDestinationo6;
    oField11 = "";
    oField12 = "";
    oField13 = "";
    oField14 = "";
    oField15 = oDestinationo7;
    oField16 = oDestinationo9;
    oField17 = oDestinationo8;
    Material = window.open("/btcjerpWeb/jsp/co/choiequinew/cho_equip_result.jsp?mode=2", "Material", "resizable=yes,dependent=yes,scrollbars=yes,left=10,top=45,width=" + screen.width * .95 + ",height=" + screen.height * .85);
    Material.focus();
       
}//end 设备选择


// 库房选择    次序  id,no,name,orgashortname
//自动生成器序号：U043
function OpenDepotD(oDestination,oDestinationo1,oDestinationo2,oDestinationo3) {
    oField1 = oDestination;
    oField2 = oDestinationo1;
    oField3 = oDestinationo2;
    oField4 = oDestinationo3;
    oField5 = '';
    Depot = window.open("/btcjerpWeb/jsp/co/choidepot/Cho_Depot.jsp", "Depot", "resizable=yes,dependent=yes,scrollbars=yes,left=90,top=45,width=" + screen.width * .83 + ",height=" + screen.height * .85);
    Depot.focus();
}
// 库房选择    次序  id,no,name,type ,address
//自动生成器序号：U043
function OpenDepotM(oDestination,oDestinationo1,oDestinationo2,oDestinationo3,oDestinationo4) {
    oField1 = oDestination;
    oField2 = oDestinationo1;
    oField3 = oDestinationo2;
    oField4 = oDestinationo3;
    oField5 = oDestinationo4;
    Depot = window.open("/btcjerpWeb/jsp/co/choidepot/Cho_Depot.jsp", "Depot", "resizable=yes,dependent=yes,scrollbars=yes,left=90,top=45,width=" + screen.width * .83 + ",height=" + screen.height * .85);
    Depot.focus();
}

//end --库房选择

//以下为选择采购计划函数(单选)
//传参方法：
//按顺序为：采购计划ID、采购计划编码、计划年度、计划月度、计划类别
//
//不需要的参数用："" 代替,注意传参顺序要一样
//
//自动生成器序号：U044
function OpenPurcD( oDestination,oDestination1,oDestination2,oDestination3,oDestination4,oDestination5) {
   oField1 = oDestination;
   oField2 = oDestination1;
   oField3 = oDestination2;
   oField4 = oDestination3;
   oField5 = oDestination4;
   oField6 = oDestination5;
   Purc = window.open("/btcjerpWeb/jsp/co/choipurc/cho_seapurc.jsp", "Purc", "alwaysRaised,resizable=yes,dependent=yes,scrollbars=yes,left=90,top=45,width=" + screen.width * .83 + ",height=" + screen.height * .85);
   Purc.focus();
}

//自动生成器序号：U045
function OpenPurcM() {
   oField1 = 'PurcplanId';
   oField2 = 'Purcplanno';
   oField3 = 'Planyear';
   oField4 = 'Planmonth';
   oField5 = 'Plankind';
   Purc = window.open("/btcjerpWeb/jsp/co/choipurc/cho_seapurc.jsp", "Purc", "alwaysRaised,resizable=yes,dependent=yes,scrollbars=yes,left=90,top=45,width=" + screen.width * .83 + ",height=" + screen.height * .85);
   Purc.focus();
}
// END --采购计划选择

//以下为选择出库单函数(单选)
//传参方法：
//按顺序为：出库单ID、出库单编号、库房ID、库房名称、领料日期、领料单位ID、领料单位名称、红蓝标记、制单日期
//
//不需要的参数用："" 代替,注意传参顺序要一样
//
//自动生成器序号：U046
function OpenOutStocBillD( oDestination,oDestination1,oDestination2,oDestination3,oDestination4,oDestination5,oDestination6,oDestination7,oDestination8) {
   oField1 = oDestination;
   oField2 = oDestination1;
   oField3 = oDestination2;
   oField4 = oDestination3;
   oField5 = oDestination4;
   oField6 = oDestination5;
   oField7 = oDestination6;
   oField8 = oDestination7;
   oField9 = oDestination8;
   Purc = window.open("/btcjerpWeb/jsp/co/chooutstockbill/cho_outstoc_result.jsp", "Purc", "alwaysRaised,resizable=yes,dependent=yes,scrollbars=yes,left=90,top=45,width=" + screen.width * .83 + ",height=" + screen.height * .85);
   Purc.focus();
}


//自动生成器序号：U047
function OpenOutStocBillM() {
   oField1 = 'outstockbillid';
   oField2 = 'outstockno';
   oField3 = 'depotid';
   oField4 = 'depotname';
   oField5 = 'receivedate';
   oField6 = 'receiveorgaid';
   oField7 = 'orgashortname';
   oField8 = 'redbluesign';
   oField9 = 'createdate';
   Purc = window.open("/btcjerpWeb/jsp/co/chooutstockbill/cho_outstoc_result.jsp", "Purc", "alwaysRaised,resizable=yes,dependent=yes,scrollbars=yes,left=90,top=45,width=" + screen.width * .83 + ",height=" + screen.height * .85);
   Purc.focus();
}
//U047:改变出库单的显示方式为两帧
function OpenOutStocBillM1() {
   oField1 = 'outstockbillid';
   oField2 = 'outstockno';
   oField3 = 'depotid';
   oField4 = 'depotname';
   oField5 = 'receivedate';
   oField6 = 'receiveorgaid';
   oField7 = 'orgashortname';
   oField8 = 'redbluesign';
   oField9 = 'createdate';
   Purc = window.open("/btcjerpWeb/jsp/co/chooutstockbill/cho_outstoc_frm.jsp", "Purc", "alwaysRaised,resizable=yes,dependent=yes,scrollbars=yes,left=90,top=45,width=" + screen.width * .83 + ",height=" + screen.height * .85);
   Purc.focus();
}
// END --选择出库单

//以下为选择入库单函数(单选)
//传参方法：
//按顺序为：入库单ID、入库单编号、库房ID、库房名称、入库日期、供应单位ID、供应单位名称、红蓝标记、制单日期
//
//不需要的参数用："" 代替,注意传参顺序要一样
//
//自动生成器序号：U048
function OpenInStocBillD( oDestination,oDestination1,oDestination2,oDestination3,oDestination4,oDestination5,oDestination6,oDestination7,oDestination8) {
   oField1 = oDestination;
   oField2 = oDestination1;
   oField3 = oDestination2;
   oField4 = oDestination3;
   oField5 = oDestination4;
   oField6 = oDestination5;
   oField7 = oDestination6;
   oField8 = oDestination7;
   oField9 = oDestination8;
   Purc = window.open("/btcjerpWeb/jsp/co/choiinstockbill/cho_instoc_result.jsp", "Purc", "alwaysRaised,resizable=yes,dependent=yes,scrollbars=yes,left=90,top=45,width=" + screen.width * .83 + ",height=" + screen.height * .85);
   Purc.focus();
}

//自动生成器序号：U049
function OpenInStocBillM() {
   oField1 = 'instockbillid';
   oField2 = 'instockno';
   oField3 = 'depotid';
   oField4 = 'depotname';
   oField5 = 'instockdate';
   oField6 = 'provid';
   oField7 = 'orgashortname';
   oField8 = 'redbluesign';
   oField9 = 'createdate';
   Purc = window.open("/btcjerpWeb/jsp/co/choiinstockbill/cho_instoc_result.jsp", "Purc", "alwaysRaised,resizable=yes,dependent=yes,scrollbars=yes,left=90,top=45,width=" + screen.width * .83 + ",height=" + screen.height * .85);
   Purc.focus();
}
// END --选择入库单

//Add by zhouyaowei 2002-12-19
//	函数说明
//	用于主从表维护功能页面
	function parent_detail_fresh(url)
	{
		window.frames[1].location = url;
	}

function showit(myLable,lmax) {
	nested = document.all[myLable];
	
	id = nested.id;
	
	tmpa = id.charAt(id.length-1)

	for(k=1;k<=20;k++)
	{
		if(k.toString()!=tmpa)
		{
			hObjName = "BlueLable"+k;
			hObj=document.all[hObjName];
            if (hObj){		    
			    hObj.className="lable_up"
		    }
		}
	
	}
    nested.className="lable_down"
}

function showit(myLable) {
	nested = document.all[myLable];
	
	id = nested.id;
	
	tmpa = id.charAt(id.length-1)

	for(k=1;k<=20;k++)
	{
		if(k.toString()!=tmpa)
		{
			hObjName = "BlueLable"+k;
			hObj=document.all[hObjName];
            if (hObj){		    
			    hObj.className="lable_up"
		    }
		}
	
	}
    nested.className="lable_down"
}

function showparentit(myLable,lmax) {
	nested = window.parent.document.all[myLable];
	
	id = nested.id;
	
	tmpa = id.charAt(id.length-1)
	
	for(k=1;k<=20;k++)
	{
		if(k.toString()!=tmpa)
		{
			hObjName = "BlueLable"+k;
			hObj=window.parent.document.all[hObjName];
            if (hObj){		    
  			   hObj.className="lable_up"
		    } 
		}
	
	}
    nested.className="lable_down"
}

function showparentit(myLable) {
	nested = window.parent.document.all[myLable];
	
	id = nested.id;
	
	tmpa = id.charAt(id.length-1)
	
	for(k=1;k<=20;k++)
	{
		if(k.toString()!=tmpa)
		{
			hObjName = "BlueLable"+k;
			hObj=window.parent.document.all[hObjName];
            if (hObj){		    
  			   hObj.className="lable_up"
		    } 
		}
	
	}
    nested.className="lable_down"
}

//选择供应商begin:id,no,name
//自动生成器序号：U050
function OpenProv(oDestination,oDestinationo1,oDestinationo2) {
    oField1 = oDestination;
    oField2 = oDestinationo1;
    oField3 = oDestinationo2;
    oField4 = "";
    oField5 = "";
    prov = window.open("/btcjerpWeb/jsp/co/choiprovider/cho_provider.jsp", "prov", "resizable=yes,dependent=yes,scrollbars=yes,left=90,top=45,width=" + screen.width * .83 + ",height=" + screen.height * .85);
    prov.focus();
}
//选择供应商begin:id,no,name,联系人 地址
function OpenProvM(oDestination,oDestinationo1,oDestinationo2,oDestinationo3,oDestinationo4) {
    oField1 = oDestination;
    oField2 = oDestinationo1;
    oField3 = oDestinationo2;
    oField4 = oDestinationo3;
    oField5 = oDestinationo4;
    prov = window.open("/btcjerpWeb/jsp/co/choiprovider/cho_provider.jsp", "prov", "resizable=yes,dependent=yes,scrollbars=yes,left=90,top=45,width=" + screen.width * .83 + ",height=" + screen.height * .85);
    prov.focus();
}
//选择供应商begin:id,no,name,联系人 地址
function OpenProvandProv(oDestination,oDestinationo1,oDestinationo2,oDestinationo3,oDestinationo4,oDestinationo5,oDestinationo6,oDestinationo7) {
    oField1 = oDestination;
    oField2 = oDestinationo1;
    oField3 = oDestinationo2;
    oField4 = oDestinationo3;
    oField5 = oDestinationo4;
    oField6 = oDestinationo5;
    oField7 = oDestinationo6;
    oField8 = oDestinationo7;
    prov = window.open("/btcjerpWeb/jsp/co/choi_provider/cho_provider.jsp", "prov", "resizable=yes,dependent=yes,scrollbars=yes,left=90,top=45,width=" + screen.width * .83 + ",height=" + screen.height * .85);
    prov.focus();
}
//选择供应商end
//作者：张楠
 function trim_zn(str)
	{
		var i= str.length-1; 

		while(i>=0)
		{
			if(str.charAt(i)== " ")
			{
				str = str.substring(0,i)+str.substring(i+1,str.length)
			}			
		    i--;
		}	
		return str;
     }

//str0,str,posi,posi1: 依次表示：字段汉字名称、字段(表单域.value)、整数长度长度，小数长度
//作者 吕炜 功能：校验进制浮点数的输入合法性 eg. telldot("计划价格","2000.100",10,2)
 function telldot(str0,str,posi,posi1){
 
    var str1=trim_zn(str);
    if(str1.length==0){
    return true;
    }
	if(!If_Number(str1))
	{
	alert(str0+"是数字型！");
	  return false;
	}
      var position=str1.indexOf(".",0);
 if(position<0)
    {
           if(str1.length<=posi)
              return true;
         else
          {
            alert(str0+"数字位数过长！");
            return false;
          }
    }else
    {
	     if(position>posi)
	   {
              alert(str0+"整数位数过长!");
              return false;        
	   }       
        if((str1.length-position-1)>posi1) 
          {
             alert(str0+"小数位数过长!");
           return false;
          }
    }
     return true;
  }
//str0,str,posi,posi1,max,min: 依次表示：字段汉字名称、字段(表单域.value)、整数长度长度，小数长度,最大值，最小值
//作者 吕炜 功能：校验进制浮点数的输入合法性 eg. telldot("计划价格","2000.100",10,2,20,-2)
 function tellnumber(str0,str,posi,posi1,max,min){
 
    var str1=trim_zn(str);
    if(str1.length==0){
    return true;
    }
	if(!If_Number(str1))
	{
	alert(str0+"是数字型！");
	  return false;
	}
      var position=str1.indexOf(".",0);
 if(position<0)
    {
       
           if((str1.length<=posi)&&(parseFloat(str1)>=parseFloat(min))&&(parseFloat(str1)<=parseFloat(max)))
              return true;
         else
          {
            if((parseFloat(str1)<parseFloat(min))||(parseFloat(str1)>parseFloat(max)))
			  {
				alert(str0+"超出范围！");                     
				return false;
			  }
            if(str1.length>posi)
			  {
				alert(str0+"数字位数过长！");
            return false;
			}
          }
    }else
    {
	     if(position>posi)
	   {
              alert(str0+"整数位数过长!");
              return false;        
	   }       
        if((str1.length-position-1)>posi1) 
          {
             alert(str0+"小数位数过长!");
           return false;
          }
    }
   
     if((parseFloat(str1)<parseFloat(min))||(parseFloat(str1)>parseFloat(max)))
     {
     alert(str0+"超出范围！");
            return false;
     }
     return true;    
     
  }
  //正负小数的校验
  //作者：吕炜
 function Is_Number(str1){
  str1=trim_zn(str1);
  if(If_Number(str1)){
  return str1;
  }
 var char1=str1.substring(0,1);
 if((char1=="-"||char1=="+")&&If_Number(str1.substring(1,str1.length))){
    return str1.substring(1,str1.length);
 }
  else if(If_Number(str1.substring(1,str1.length)))
  {
    return str1;
 }else{
   alert("必须输入数字");
   return "";
   }
}
//在下帧删除记录时使用

	function delRecordD(url)
	{
		if(confirm("确定要删除该条记录吗？"))
		{
			window.parent.frames[1].location = url;
		}
	}

//

//以下为选择月物资需求计划函数(单选)
//传参方法：
//按顺序为：月物资需求计划ID、月物资需求计划编码、计划年度、计划月度,物资ID,调拨数量
//
//不需要的参数用："" 代替,注意传参顺序要一样
//
//自动生成器序号：U051
function OpenMonthMrpD( oDestination,oDestination1,oDestination2,oDestination3,oDestination4,oDestination5) {
   oField1 = oDestination;
   oField2 = oDestination1;
   oField3 = oDestination2;
   oField4 = oDestination3;
   oField5 = oDestination4;
   oField6 = oDestination5;   
   MonthMrp = window.open("/btcjerpWeb/jsp/co/choimonthmrp/cho_seamonthmrp.jsp", "MonthMrp", "alwaysRaised,resizable=yes,dependent=yes,scrollbars=yes,left=90,top=45,width=" + screen.width * .83 + ",height=" + screen.height * .85);
   MonthMrp.focus();
}

// END --月物资需求计划
//以下为选择租赁合同函数(单选)
//传参方法：
//按顺序为(14)：合同编号、租赁单位（编号和简称）、出租单位（编号和简称）、合同种类、使用工程（编号和名称）、使用地点、制定人、制定日期、制定部门（编号和简称）  
//
//不需要的参数用："" 代替,注意传参顺序要一样
//
//自动生成器序号：U052
function OpenTenancy( oDestination,oDestination1,oDestination2,oDestination3,oDestination4,oDestination5,oDestination6,oDestination7,oDestination8,oDestination9,oDestination10,oDestination11,oDestination12,oDestination13, oDestination14,oDestination15,oDestination16,oDestination17,oDestination18,oDestination19,oDestination20) {
   oField1 = oDestination;
   oField2 = oDestination1;
   oField3 = oDestination2;
   oField4 = oDestination3;
   oField5 = oDestination4;
   oField6 = oDestination5;   
   oField7 = oDestination6;   
   oField8 = oDestination7;   
   oField9 = oDestination8;   
   oField10 = oDestination9;   
   oField11 = oDestination10;   
   oField12 = oDestination11;   
   oField13 = oDestination12;   
   oField14 = oDestination13;
   
   oField15 = oDestination14;   
   oField16 = oDestination15;   
   oField17 = oDestination16;   
   oField18 = oDestination17;   
   oField19 = oDestination18;
   oField20 = oDestination19;   
   oField21 = oDestination20;
   
      
    MonthMrp = window.open("/btcjerpWeb/jsp/co/choitenancy/cho_tenancy.jsp", "MonthMrp", "alwaysRaised,resizable=yes,dependent=yes,scrollbars=yes,left=90,top=45,width=" + screen.width * .95 + ",height=" + screen.height * .85);
   MonthMrp.focus();
}


// END 

//以下为选择领料单库位明细函数(单选)
//传参方法：
//按顺序为：物资ID、物资编号、物资名称、批次编码,sql语句
//
//不需要的参数用："" 代替,注意传参顺序要一样
//
//自动生成器序号：U051
function OpenGroupNo( oDestination,oDestination1,oDestination2,oDestination3,oDestination4) {
   oField1 = oDestination;
   oField2 = oDestination1;
   oField3 = oDestination2;
   oField4 = oDestination3;
   oField5 = oDestination4;
   MonthMrp = window.open("/btcjerpWeb/jsp/co/choigroupno/cho_groupno.jsp?outbillno="+oField5, "MonthMrp", "alwaysRaised,resizable=yes,dependent=yes,scrollbars=yes,left=90,top=45,width=" + screen.width * .83 + ",height=" + screen.height * .85);
   MonthMrp.focus();
}

// END --领料单库位明细

 //拆分时间
 function datetime_cut(datetime_value,date_field,hour_field,minute_field,second_field){

   if(window.document.forms[0] && window.document.forms[0].elements[date_field]){
      window.document.forms[0].elements[date_field].value=datetime_value.substring(0,10);
   }
   if(window.document.forms[0] && window.document.forms[0].elements[hour_field]){
      window.document.forms[0].elements[hour_field].value=datetime_value.substring(11,13);
   }
   if(window.document.forms[0] && window.document.forms[0].elements[minute_field]){
      window.document.forms[0].elements[minute_field].value=datetime_value.substring(14,16);
   }
   if(window.document.forms[0] && window.document.forms[0].elements[second_field]){
      window.document.forms[0].elements[second_field].value=datetime_value.substring(17,19);
   }

 }

 //时间组合
 //校验时间日期输入框
  function datetime_combine(datetime_field,date_field,hour_field,minute_field,second_field,title){

   var flag_js=1;
   var datenull=0;
   var hournull=0;
   var minutenull=0;
   var secondnull=0;
   var msg="\""+title+"\""+"的";
   
   var date_js=window.document.forms[0].elements[date_field].value;
   var hour_js=window.document.forms[0].elements[hour_field].value;
   var minute_js=window.document.forms[0].elements[minute_field].value;
   var second_js=window.document.forms[0].elements[second_field].value;

   if(date_js==""){
      flag_js=0;
      datenull=1;
   }   
   
   if(flag_js==1){ 
     if(isNaN(hour_js)){
       flag_js=0;
     }
   }
   
   if(flag_js==1){ 
     if((hour_js.indexOf("+")!=-1)||(hour_js.indexOf("-")!=-1)||(hour_js.indexOf(".")!=-1)){
       flag_js=0;
     }    
   }
   if(flag_js==1){ 
      if((parseFloat(hour_js)>23)){
        flag_js=0;
      }   
   }
   
   if(flag_js==1) 
     if((hour_js=="  ")||(hour_js==" ")||(hour_js.length==0)||(hour_js=="0")||(hour_js=="00")||(hour_js==" 0")||(hour_js=="0 ")){
         if(hour_js.indexOf("0")==-1){
            hournull=1;
         }   
         hour_js="00";  
     }else{    
          if((parseFloat(hour_js)<10))
            if((hour_js.substring(0,1)==" ")||(hour_js.substring(0,1)=="0"))
              hour_js="0"+hour_js.substring(1,2);
            else
                hour_js="0"+hour_js.substring(0,1) 
                    
    }
 
     
   if(flag_js==1){ //
   
     if(isNaN(minute_js)){
      flag_js=0;
   }
   
   if(flag_js==1){ 
     if((minute_js.indexOf("+")!=-1)||(minute_js.indexOf("-")!=-1)||(minute_js.indexOf(".")!=-1)){
       flag_js=0;
     }    
   }
   if(flag_js==1){ 
      if((parseFloat(minute_js)>59)){
        flag_js=0;
      }   
   }
   
   if(flag_js==1) 
     if((minute_js=="  ")||(minute_js==" ")||(minute_js.length==0)||(minute_js=="0")||(minute_js=="00")||(minute_js==" 0")||(minute_js=="0 ")){
         if(minute_js.indexOf("0")==-1){
            minutenull=1;
         }    
         minute_js="00";
     }else{    
          if((parseFloat(minute_js)<10))
            if((minute_js.substring(0,1)==" ")||(minute_js.substring(0,1)=="0"))
              minute_js="0"+minute_js.substring(1,2);
            else
                minute_js="0"+minute_js.substring(0,1) 
                    
    }
    
   }// 
   
   if(flag_js==1){ //
   
     if(isNaN(second_js)){
      flag_js=0;
   }
   
   if(flag_js==1){ 
     if((second_js.indexOf("+")!=-1)||(second_js.indexOf("-")!=-1)||(second_js.indexOf(".")!=-1)){
       flag_js=0;
     }    
   }
   if(flag_js==1){ 
      if((parseFloat(second_js)>59)){
        flag_js=0;
      }   
   }
   
   if(flag_js==1) 
     if((second_js=="  ")||(second_js==" ")||(second_js.length==0)||(second_js=="0")||(second_js=="00")||(second_js==" 0")||(second_js=="0 ")){
         if(second_js.indexOf("0")==-1){
            secondnull=1;
         }  
         second_js="00";
     }else{    
          if((parseFloat(second_js)<10))
            if((second_js.substring(0,1)==" ")||(second_js.substring(0,1)=="0"))
              second_js="0"+second_js.substring(1,2);
            else
                second_js="0"+second_js.substring(0,1) 
                    
    }
    
   }// 
   
    if(flag_js==1){ //
      if((hournull==1)||(minutenull==1)||(secondnull==1)){
        if(hournull==1)
          msg=msg+"  \"时\"";
        if(minutenull==1)
          msg=msg+"  \"分\"";  
        if(secondnull==1)
          msg=msg+"  \"秒\"";
        msg=msg+"未输入值，是否取0值？";
        if(confirm(msg)==true){       
           window.document.forms[0].elements[datetime_field].value=date_js+" "+hour_js+":"+minute_js+":"+second_js;
           if(hournull==1)
             window.document.forms[0].elements[hour_field].value="00";
           if(minutenull==1)
             window.document.forms[0].elements[minute_field].value="00";
           if(secondnull==1)
             window.document.forms[0].elements[second_field].value="00";
           return (1)
        }else{
           return (0)
        }
      }else{
        window.document.forms[0].elements[datetime_field].value=date_js+" "+hour_js+":"+minute_js+":"+second_js;
        return(1)
      }     
    }else{
    
     if( datenull==1){
       alert(title+"的日期未输入。");
       return (0)
     }else{
      alert("\""+title+"\""+"不符合正确时间格式。"+"\n"+"\n"+"时：0到23之间的整数"+"\n"+"分：0到59之间的整数"+"\n"+"秒：0到59之间的整数");
      return (0)
     }//       
    }
 } 
//自动生成器序号：U382
//可调用自定义的m_click()方法 且m_click()方法不含alert("dsf") 方法
//选择最终物资 id,编号,名称,规格型号,标准单位,类型,材质,生产厂家,图号,单位重量,ABC分类,内部编码,采购周期,有效期,上级物资编码,上级物资名称,上级物资规格型号,上级物资计量单位,上级生产厂家,计划价格,物资大类编码,物资大类名称,物资大类id
function OpenFinalMat(oDestination,oDestinationo1,oDestinationo2,oDestinationo3,oDestinationo4,oDestinationo5,oDestinationo6,oDestinationo7,oDestinationo8,oDestinationo9,oDestinationo10,oDestinationo11,oDestinationo12,oDestinationo13,oDestinationo14,oDestinationo15,oDestinationo16,oDestinationo17,oDestinationo18,oDestinationo19,oDestinationo20,oDestinationo21,oDestinationo22) {
    oField1 =  oDestination;
    oField2 =  oDestinationo1;
    oField3 =  oDestinationo2;
    oField4 =  oDestinationo3;
    oField5 =  oDestinationo4;
    oField6 =  oDestinationo5;
    oField7 =  oDestinationo6;
    oField8 =  oDestinationo7;
    oField9 =  oDestinationo8;
    oField10 = oDestinationo9;
    oField11 = oDestinationo10;
    oField12 = oDestinationo11;
    oField13 = oDestinationo12;
    oField14 = oDestinationo13;
    oField15 = oDestinationo14;
    oField16 = oDestinationo15;
    oField17 = oDestinationo16;
    oField18 = oDestinationo17;
    oField19 = oDestinationo18;
    oField20 = oDestinationo19;
    oField21 = oDestinationo20;   
    oField22 = oDestinationo21;   
    oField23 = oDestinationo22;   
    Material = window.open("/btcjerpWeb/jsp/co/cho_matnew/Sel_MaterialF.jsp", "Material", "resizable=yes,dependent=yes,scrollbars=yes,left=90,top=45,width=" + screen.width * .83 + ",height=" + screen.height * .85);
    Material.focus();
} 
//自动生成器序号：u383

//使用时必须先压入session p_auth_tj eg: session.setAttribute("p_auth_tj","depotid:3") 或者 session.setAttribute("p_auth_tj","erpuserid:3") 或者 session.setAttribute("p_auth_tj","erpuserid:3,5")含有两个数字值的表示为两个容器的并集
//适合matesortid 或者 库房存储物资 必须含有m_click()方法
//选择最终物资 id,编号,名称,规格型号,标准单位,类型,材质,生产厂家,图号,单位重量,ABC分类,内部编码,采购周期,有效期,上级物资编码,上级物资名称,上级物资规格型号,上级物资计量单位,上级生产厂家,计划价格,物资大类编码,物资大类名称,物资大类id
function OpenOptionMat(oDestination,oDestinationo1,oDestinationo2,oDestinationo3,oDestinationo4,oDestinationo5,oDestinationo6,oDestinationo7,oDestinationo8,oDestinationo9,oDestinationo10,oDestinationo11,oDestinationo12,oDestinationo13,oDestinationo14,oDestinationo15,oDestinationo16,oDestinationo17,oDestinationo18,oDestinationo19,oDestinationo20,oDestinationo21,oDestinationo22) {
    oField1 =  oDestination;
    oField2 =  oDestinationo1;
    oField3 =  oDestinationo2;
    oField4 =  oDestinationo3;
    oField5 =  oDestinationo4;
    oField6 =  oDestinationo5;
    oField7 =  oDestinationo6;
    oField8 =  oDestinationo7;
    oField9 =  oDestinationo8;
    oField10 = oDestinationo9;
    oField11 = oDestinationo10;
    oField12 = oDestinationo11;
    oField13 = oDestinationo12;
    oField14 = oDestinationo13;
    oField15 = oDestinationo14;
    oField16 = oDestinationo15;
    oField17 = oDestinationo16;
    oField18 = oDestinationo17;
    oField19 = oDestinationo18;
    oField20 = oDestinationo19;
    oField21 = oDestinationo20;   
    oField22 = oDestinationo21;   
    oField23 = oDestinationo22;   
    Material = window.open("/btcjerpWeb/jsp/co/cho_matnew/Sel_Material.jsp", "Material", "resizable=yes,dependent=yes,scrollbars=yes,left=90,top=45,width=" + screen.width * .83 + ",height=" + screen.height * .85);
    Material.focus();
} 
//库位选择  depotareaid,depotnomdepotname,depotareano,depotareaname
function OpenDepotArea(oDestination,oDestinationo1,oDestinationo2,oDestinationo3,oDestinationo4) {
    oField1 =  oDestination;
    oField2 =  oDestinationo1;
    oField3 =  oDestinationo2;
    oField4 =  oDestinationo3;
    oField5 =  oDestinationo4; 
    Material = window.open("/btcjerpWeb/jsp/co/choidepotarea/Sel_ChoDptArea_Frm.jsp", "dptarea", "resizable=yes,dependent=yes,scrollbars=yes,left=90,top=45,width=" + screen.width * .83 + ",height=" + screen.height * .85);
    Material.focus();
} 

//开撤除鉴定单
//尚安
//以下为合同条件选择函数(单选)
//传参方法：
//按顺序为(13)：租赁合同明细ID、设备编码、设备名称、规格型号、计量单位、租赁合同编号、租赁单位编号、租赁单位简称、出租单位编号、出租单位简称、使用单位编号、使用单位简称、使用工程编号、使用工程名称
//不需要的参数用："" 代替,注意传参顺序要一样
//
//自动生成器序号：

function OpenTencr(oDestination,oDestination1,oDestination2,oDestination3,oDestination4,oDestination5,oDestination6,oDestination7,oDestination8,oDestination9,oDestination10,oDestination11,oDestination12,oDestination13) {
   oField1 = oDestination;
   oField2 = oDestination1;
   oField3 = oDestination2;
   oField4 = oDestination3;
   oField5 = oDestination4;
   oField6 = oDestination5;   
   oField7 = oDestination6;   
   oField8 = oDestination7;   
   oField9 = oDestination8;   
   oField10 = oDestination9;   
   oField11 = oDestination10;   
   oField12 = oDestination11;   
   oField13 = oDestination12; 
   oField14 = oDestination13;  
   TenCrt = window.open("/btcjerpWeb/jsp/co/choitenacontract/cho_seaContract.jsp", "TenCrt", "alwaysRaised,resizable=yes,dependent=yes,scrollbars=yes,left=90,top=45,width=" + screen.width * .75 + ",height=" + screen.height * .70);
   TenCrt.focus();
}

//  END 撤除鉴定单
//选择维修厂商档案: 维修厂商编码SERVNO、维修厂商简称SERVSNAME、维修厂商全称SERVTNAME、维修厂商IDSERVID
//作者：尚安
function OpenServM(oDestination,oDestinationo1,oDestinationo2,oDestinationo3) {
    oField1 = oDestination;
    oField2 = oDestinationo1;
    oField3 = oDestinationo2;
    oField4 = oDestinationo3;
    
    serv = window.open("/btcjerpWeb/jsp/co/choiservicearchives/cho_ser.jsp", "serv", "resizable=yes,dependent=yes,scrollbars=yes,left=90,top=45,width=" + screen.width * .83 + ",height=" + screen.height * .85);
    serv.focus();
}
//选择设备的子设备或者零部件 ( 单选)
//次序 ：id,no,name,model,unit,type,factory
function OpenFitEquipOf(oDestination,oDestinationo1,oDestinationo2,oDestinationo3,oDestinationo4,oDestinationo5,oDestinationo6) {
    oField1 = oDestination;
    oField2 = oDestinationo1;
    oField3 = oDestinationo2;
    oField4 = oDestinationo3;
    oField5 = oDestinationo4;
    oField6 = oDestinationo5;
    oField7 = oDestinationo6;
    Material = window.open("/btcjerpWeb/Cho_FitAndEquipForm?ACTION=selectwr", "Material", "resizable=yes,dependent=yes,scrollbars=yes,left=90,top=45,width=" + screen.width * .83 + ",height=" + screen.height * .85);    
    Material.focus();
}

//选择工程项目。 次序：projectid,projno,projname,orgashortname,projecttypeid,orgashortname,exeorganame,worksite,projprincipal,secuprincipal,techprincipal,planstartdate,planfinishdate,startdateinfact,finishidateinfact,facelanewayname,planproducecoal, plangrubcapacity,plancapacity,chargeclass,orgaid,exeorgaid,facelanewayid
function OpenProject1(oDestination,oDestinationo1,oDestinationo2,oDestinationo3,oDestinationo4,oDestinationo5,oDestinationo6,oDestinationo7,oDestinationo8,oDestinationo9,oDestinationo10,oDestinationo11,oDestinationo12,oDestinationo13,oDestinationo14,oDestinationo15,oDestinationo16,oDestinationo17,oDestinationo18,oDestinationo19,oDestinationo20,oDestinationo21,oDestinationo22,isall) {
    oField1 = oDestination;
    oField2 = oDestinationo1;
    oField3 = oDestinationo2;
    oField4 = oDestinationo3;
    oField5 = oDestinationo4;
    oField6 = oDestinationo5;
    oField7 = oDestinationo6;
    oField8 = oDestinationo7;
    oField9 = oDestinationo8;
    oField10 = oDestinationo9;
    oField11 = oDestinationo10;
    oField12 = oDestinationo11;
    oField13 = oDestinationo12;
    oField14= oDestinationo13;
    oField15 = oDestinationo14;
    oField16 = oDestinationo15;
    oField17 = oDestinationo16;
    oField18 = oDestinationo17;
    oField19 = oDestinationo18;
    oField20 = oDestinationo19;
    oField21 = oDestinationo20;
    oField22 =oDestinationo21;
    oField23 =oDestinationo22;
    if(isall=="") isall="1";
    Material = window.open("/btcjerpWeb/jsp/co/sel_projectfinal/Sel_Project.jsp?isall="+isall, "Material", "resizable=yes,dependent=yes,scrollbars=yes,left=90,top=45,width=" + screen.width * .83 + ",height=" + screen.height * .85);
    Material.focus();
}



//选择工程项目。 次序：projectid,projno,projname,orgashortname,projecttypeid,orgashortname,exeorganame,worksite,projprincipal,secuprincipal,techprincipal,planstartdate,planfinishdate,startdateinfact,finishidateinfact,facelanewayname,planproducecoal, plangrubcapacity,plancapacity,chargeclass,orgaid,exeorgaid,facelanewayid
function OpenProject2(oDestination,oDestinationo1,oDestinationo2,oDestinationo3,oDestinationo4,oDestinationo5,oDestinationo6,oDestinationo7,oDestinationo8,oDestinationo9,oDestinationo10,oDestinationo11,oDestinationo12,oDestinationo13,oDestinationo14,oDestinationo15,oDestinationo16,oDestinationo17,oDestinationo18,oDestinationo19,oDestinationo20,oDestinationo21,oDestinationo22,isall,syscode,zlorgaid) {
    oField1 = oDestination;
    oField2 = oDestinationo1;
    oField3 = oDestinationo2;
    oField4 = oDestinationo3;
    oField5 = oDestinationo4;
    oField6 = oDestinationo5;
    oField7 = oDestinationo6;
    oField8 = oDestinationo7;
    oField9 = oDestinationo8;
    oField10 = oDestinationo9;
    oField11 = oDestinationo10;
    oField12 = oDestinationo11;
    oField13 = oDestinationo12;
    oField14= oDestinationo13;
    oField15 = oDestinationo14;
    oField16 = oDestinationo15;
    oField17 = oDestinationo16;
    oField18 = oDestinationo17;
    oField19 = oDestinationo18;
    oField20 = oDestinationo19;
    oField21 = oDestinationo20;
    oField22 =oDestinationo21;
    oField23 =oDestinationo22;

   
    if(isall=="") isall="1";
    Material1 = window.open("/btcjerpWeb/jsp/co/cho_proj/cho_proj_result1.jsp?isall="+isall+"&syscode="+syscode+"&zlorgaid="+zlorgaid, "Material1", "resizable=yes,dependent=yes,scrollbars=yes,left=90,top=45,width=" + screen.width * .83 + ",height=" + screen.height * .85);
    Material1.focus();
}


//选择工程项目。 次序：projectid,projno,projname,projecttypeid

function OpenProjD(oDestination,oDestinationo1,oDestinationo2,oDestinationo3) {
    oField1 = oDestination;
    oField2 = oDestinationo1;
    oField3 = oDestinationo2;
    oField4 = oDestinationo3;
    oField5 ="";
    oField6 ="";
    oField7 ="";
    oField8 ="";
    oField9 ="";
    oField10 ="";
    oField11 ="";
    oField12 ="";
    oField13 ="";
    oField14= "";
    oField15 ="";
    oField16 ="";
    oField17 ="";
    oField18 ="";
    oField19 ="";
    oField20 ="";
    oField21 ="";
    oField22 ="";
    oField23 ="";    
    Material = window.open("/btcjerpWeb/jsp/co/sel_projectfinal/Sel_Project.jsp?isall=1", "Material", "resizable=yes,dependent=yes,scrollbars=yes,left=90,top=45,width=" + screen.width * .83 + ",height=" + screen.height * .85);
    Material.focus();
}


//dingjie 2003-4-28
// 电力分类选择    次序  id,no,name
//自动生成器序号：U081
function OpenElecSort(oDestination,oDestinationo1,oDestinationo2) {
    oField1 = oDestination;
    oField2 = oDestinationo1;
    oField3 = oDestinationo2;
    ElecCostItem = window.open("/btcjerpWeb/jsp/co/choielecsort/Cho_elecSort.jsp", "ElecSort", "resizable=yes,dependent=yes,scrollbars=yes,left=120,top=100,width=" + screen.width * .60 + ",height=" + screen.height * .60);
    ElecSort.focus();
} 
//选择设备 次序：               设备ID       设备编号,      设备名称,          规格型号,      标准单位,       使用单位,     使用地点,    上级规格型号,      设备状态,       生产厂家,        出厂编号,      出厂日期,         到货日期,   规定使用年限,       固定资产号,    固定资产原值,固定资产折旧方法,   设备档案id,     内部编码，     所属单位ID,     使用单位ID,       ""
//自动生成器序号：U387
function OpenEquipArchive(oDestination,oDestinationo1,oDestinationo2,oDestinationo3,oDestinationo4,oDestinationo5,oDestinationo6,oDestinationo7,oDestinationo8,oDestinationo9,oDestinationo10,oDestinationo11,oDestinationo12,oDestinationo13,oDestinationo14,oDestinationo15,oDestinationo16,oDestinationo17,oDestinationo18,oDestinationo19,oDestinationo20,oDestinationo21) {
         
    oField1 = oDestination;
    oField2 = oDestinationo1;
    oField3 = oDestinationo2;
    oField4 = oDestinationo3;
    oField5 = oDestinationo4;
    oField6 = oDestinationo5;
    oField7 = oDestinationo6;
    oField8 = oDestinationo7;
    oField9 = oDestinationo8;
    oField10 = oDestinationo9;
    oField11 = oDestinationo10;
    oField12 = oDestinationo11;
    oField13 = oDestinationo12;
    oField14=  oDestinationo13;
    oField15 = oDestinationo14;
    oField16 = oDestinationo15;
    oField17 = oDestinationo16;
    oField18 = oDestinationo17;
    oField19 = oDestinationo18;
    oField20 = oDestinationo19;
    oField21 = oDestinationo20;
    oField22 = oDestinationo21;
    Material = window.open("/btcjerpWeb/jsp/co/choiequiarchs/Sel_Material.jsp", "Material", "resizable=yes,dependent=yes,scrollbars=yes,left=10,top=15,width=" + screen.width * .96 + ",height=" + screen.height * .88);
    Material.focus();
}

//自动生成器序号：U382
//可调用自定义的m_click()方法 且m_click()方法不含alert("dsf") 方法
//选择最终物资 id,编号,名称,规格型号,标准单位,类型,材质,生产厂家,图号,单位重量,ABC分类,内部编码,采购周期,有效期,上级物资编码,上级物资名称,上级物资规格型号,上级物资计量单位,上级生产厂家,计划价格,物资大类编码,物资大类名称,物资大类id
function OpenFinalMatAll(oDestination,oDestinationo1,oDestinationo2,oDestinationo3,oDestinationo4,oDestinationo5,oDestinationo6,oDestinationo7,oDestinationo8,oDestinationo9,oDestinationo10,oDestinationo11,oDestinationo12,oDestinationo13,oDestinationo14,oDestinationo15,oDestinationo16,oDestinationo17,oDestinationo18,oDestinationo19,oDestinationo20,oDestinationo21,oDestinationo22) {
    oField1 =  oDestination;
    oField2 =  oDestinationo1;
    oField3 =  oDestinationo2;
    oField4 =  oDestinationo3;
    oField5 =  oDestinationo4;
    oField6 =  oDestinationo5;
    oField7 =  oDestinationo6;
    oField8 =  oDestinationo7;
    oField9 =  oDestinationo8;
    oField10 = oDestinationo9;
    oField11 = oDestinationo10;
    oField12 = oDestinationo11;
    oField13 = oDestinationo12;
    oField14 = oDestinationo13;
    oField15 = oDestinationo14;
    oField16 = oDestinationo15;
    oField17 = oDestinationo16;
    oField18 = oDestinationo17;
    oField19 = oDestinationo18;
    oField20 = oDestinationo19;
    oField21 = oDestinationo20;   
    oField22 = oDestinationo21;   
    oField23 = oDestinationo22;   
    Material = window.open("/btcjerpWeb/jsp/co/cho_matnew/Sel_MaterialFAll.jsp", "Material", "resizable=yes,dependent=yes,scrollbars=yes,left=90,top=45,width=" + screen.width * .83 + ",height=" + screen.height * .85);
    Material.focus();
} 

//用户分管、库房存储、某个大类下面的物资类别 选择 次序：id,no,name,model,unit,drawingno,factory, type（参数，自行设置） 
//在使用的时候必须 设置 session  参见 openOptionMat 的格式
//自动生成器序号：U038
function Openauthmat(oDestination,oDestinationo1,oDestinationo2,oDestinationo3,oDestinationo4,oDestinationo5,oDestinationo6,oDestinationo7) {
         
    oField1 = oDestination;
    oField2 = oDestinationo1;
    oField3 = oDestinationo2;
    oField4 = oDestinationo3;
    oField5 = oDestinationo4;
    oField6 = oDestinationo5;
    oField7 = oDestinationo6;
    oField8 = oDestinationo7;
    
    Material = window.open("/btcjerpWeb/jsp/co/cho_matnew/Sel_MaterialS.jsp?type="+oDestinationo7, "Material", "resizable=yes,dependent=yes,scrollbars=yes,left=90,top=45,width=" + screen.width * .83 + ",height=" + screen.height * .85);
    Material.focus();
}
//用户分管、库房存储、某个大类下面的设备类别 选择 次序：id,no,name,model,unit,drawingno,factory, type,groupmanage,unifyprince（参数，自行设置） 
//在使用的时候必须 设置 session  参见 openOptionMat 的格式
//自动生成器序号：U038
function Openauthep(oDestination,oDestinationo1,oDestinationo2,oDestinationo3,oDestinationo4,oDestinationo5,oDestinationo6,oDestinationo7,oDestinationo8,oDestinationo9) {
         
    oField1 = oDestination;
    oField2 = oDestinationo1;
    oField3 = oDestinationo2;
    oField4 = oDestinationo3;
    oField5 = oDestinationo4;
    oField6 = oDestinationo5;
    oField7 = oDestinationo6;
    oField8 = oDestinationo7;
    oField9 = oDestinationo8;
	oField10 = oDestinationo9;
    Material = window.open("/btcjerpWeb/jsp/co/cho_epnew/Sel_MaterialS.jsp?type="+oDestinationo9, "Material", "resizable=yes,dependent=yes,scrollbars=yes,left=90,top=45,width=" + screen.width * .83 + ",height=" + screen.height * .85);
    Material.focus();
}

//选择最终物资 id,编号,名称,规格型号,标准单位,类型,材质,生产厂家,图号,单位重量,ABC分类,内部编码,采购周期,有效期,上级物资编码,上级物资名称,上级物资规格型号,上级物资计量单位,上级生产厂家,计划价格,上级物资ID,类别ID(传入参数)
function Openfinalmat2(oDestination,oDestinationo1,oDestinationo2,oDestinationo3,oDestinationo4,oDestinationo5,oDestinationo6,oDestinationo7,oDestinationo8,oDestinationo9,oDestinationo10,oDestinationo11,oDestinationo12,oDestinationo13,oDestinationo14,oDestinationo15,oDestinationo16,oDestinationo17,oDestinationo18,oDestinationo19,oDestinationo20,oDestinationo21) {
    oField1 =  oDestination;
    oField2 =  oDestinationo1;
    oField3 =  oDestinationo2;
    oField4 =  oDestinationo3;
    oField5 =  oDestinationo4;
    oField6 =  oDestinationo5;
    oField7 =  oDestinationo6;
    oField8 =  oDestinationo7;
    oField9 =  oDestinationo8;
    oField10 = oDestinationo9;
    oField11 = oDestinationo10;
    oField12 = oDestinationo11;
    oField13 = oDestinationo12;
    oField14 = oDestinationo13;
    oField15 = oDestinationo14;
    oField16 = oDestinationo15;
    oField17 = oDestinationo16;
    oField18 = oDestinationo17;
    oField19 = oDestinationo18;
    oField20 = oDestinationo19;   
    oField21 = oDestinationo20;   
    Material = window.open("/btcjerpWeb/jsp/co/cho_matnew/Sel_MaterialF2.jsp?matesortid="+oDestinationo21, "Material", "resizable=yes,dependent=yes,scrollbars=yes,left=90,top=45,width=" + screen.width * .83 + ",height=" + screen.height * .85);
    Material.focus();
} 

//选择最终物资 id,编号,名称,规格型号,标准单位,类型,材质,生产厂家,图号,单位重量,ABC分类,内部编码,采购周期,有效期,上级物资编码,上级物资名称,上级物资规格型号,上级物资计量单位,上级生产厂家,计划价格,上级物资ID,类别ID(传入参数)
function Openfinalmat3(oDestination,oDestinationo1,oDestinationo2,oDestinationo3,oDestinationo4,oDestinationo5,oDestinationo6,oDestinationo7,oDestinationo8,oDestinationo9,oDestinationo10,oDestinationo11,oDestinationo12,oDestinationo13,oDestinationo14,oDestinationo15,oDestinationo16,oDestinationo17,oDestinationo18,oDestinationo19,oDestinationo20,oDestinationo21) {
    oField1 =  oDestination;
    oField2 =  oDestinationo1;
    oField3 =  oDestinationo2;
    oField4 =  oDestinationo3;
    oField5 =  oDestinationo4;
    oField6 =  oDestinationo5;
    oField7 =  oDestinationo6;
    oField8 =  oDestinationo7;
    oField9 =  oDestinationo8;
    oField10 = oDestinationo9;
    oField11 = oDestinationo10;
    oField12 = oDestinationo11;
    oField13 = oDestinationo12;
    oField14 = oDestinationo13;
    oField15 = oDestinationo14;
    oField16 = oDestinationo15;
    oField17 = oDestinationo16;
    oField18 = oDestinationo17;
    oField19 = oDestinationo18;
    oField20 = oDestinationo19;   
    oField21 = oDestinationo20;   
    Material = window.open("/btcjerpWeb/jsp/co/cho_matnew/Sel_MaterialF3.jsp?matesortid="+oDestinationo21, "Material", "resizable=yes,dependent=yes,scrollbars=yes,left=90,top=45,width=" + screen.width * .83 + ",height=" + screen.height * .85);
    Material.focus();
} 



//选择配件 
//次序：设备ID 设备编号,设备名称,规格型号,标准单位,
//      上级编码,上级名称,上级规格型号,设备状态,
//      生产厂家,出厂编号,出厂日期,到货日期,规定使用年限,固定资产号,
//      固定资产原值,固定资产折旧方法,设备档案id,内部编码，
//      所属单位ID,使用单位ID,usesite,DRAWINGNO,materialType

//(String) msess.getAttribute("p_SheiBeiAndPeiJian_tj"); //条件（可选）
//(String) msess.getAttribute("SheBeiBianHao"); //设备编号（必须传入）

function OpenPeiJian(oDestination,oDestinationo1,oDestinationo2,oDestinationo3,oDestinationo4,oDestinationo5,oDestinationo6,oDestinationo7,oDestinationo8,oDestinationo9,oDestinationo10,oDestinationo11,oDestinationo12,oDestinationo13,oDestinationo14,oDestinationo15,oDestinationo16,oDestinationo17,oDestinationo18,oDestinationo19,oDestinationo20,oDestinationo21,oDestinationo22,oDestinationo23) {
         
    oField1 = oDestination;
    oField2 = oDestinationo1;
    oField3 = oDestinationo2;
    oField4 = oDestinationo3;
    oField5 = oDestinationo4;
    oField6 = oDestinationo5;
    oField7 = oDestinationo6;
    oField8 = oDestinationo7;
    oField9 = oDestinationo8;
    oField10 = oDestinationo9;
    oField11 = oDestinationo10;
    oField12 = oDestinationo11;
    oField13 = oDestinationo12;
    oField14 = oDestinationo13;
    oField15 = oDestinationo14;
    oField16 = oDestinationo15;
    oField17 = oDestinationo16;
    oField18 = oDestinationo17;
    oField19 = oDestinationo18;
    oField20 = oDestinationo19;
    oField21 = oDestinationo20;
    oField22 = oDestinationo21;
    
    oField23 =oDestinationo22;
    oField24 =oDestinationo23;
     
    Material = window.open("/btcjerpWeb/jsp/co/cho_SheBeiAndPeiJian/Sel_Material.jsp", "Material", "resizable=yes,dependent=yes,scrollbars=yes,left=10,top=15,width=" + screen.width * .96 + ",height=" + screen.height * .88);
    Material.focus();
}





//选择配件
//谭帅
//2003-09-16 
//次序：设备ID 设备编号,设备名称,规格型号,标准单位,
//      上级编码,上级名称,上级规格型号,设备状态,
//      生产厂家,出厂编号,出厂日期,到货日期,规定使用年限,固定资产号,
//      固定资产原值,固定资产折旧方法,设备档案id,内部编码，
//      所属单位ID,使用单位ID,usesite,DRAWINGNO,materialType

//(String) msess.getAttribute("p_SheiBAndPeiJForS_tj"); //条件（可选）
//(String) msess.getAttribute("SheBeiBianHaoForS"); //设备编号（必须传入）

function OpenPeiJianForS(oDestination,oDestinationo1,oDestinationo2,oDestinationo3,oDestinationo4,oDestinationo5,oDestinationo6,oDestinationo7,oDestinationo8,oDestinationo9,oDestinationo10,oDestinationo11,oDestinationo12,oDestinationo13,oDestinationo14,oDestinationo15,oDestinationo16,oDestinationo17,oDestinationo18,oDestinationo19,oDestinationo20,oDestinationo21,oDestinationo22,oDestinationo23) {
         
    oField1 = oDestination;
    oField2 = oDestinationo1;
    oField3 = oDestinationo2;
    oField4 = oDestinationo3;
    oField5 = oDestinationo4;
    oField6 = oDestinationo5;
    oField7 = oDestinationo6;
    oField8 = oDestinationo7;
    oField9 = oDestinationo8;
    oField10 = oDestinationo9;
    oField11 = oDestinationo10;
    oField12 = oDestinationo11;
    oField13 = oDestinationo12;
    oField14 = oDestinationo13;
    oField15 = oDestinationo14;
    oField16 = oDestinationo15;
    oField17 = oDestinationo16;
    oField18 = oDestinationo17;
    oField19 = oDestinationo18;
    oField20 = oDestinationo19;
    oField21 = oDestinationo20;
    oField22 = oDestinationo21;
    
    oField23 =oDestinationo22;
    oField24 =oDestinationo23;
     
    Material = window.open("/btcjerpWeb/jsp/co/cho_SheBeiAndPeiJian/Sel_MaterialForS.jsp", "Material", "resizable=yes,dependent=yes,scrollbars=yes,left=10,top=15,width=" + screen.width * .96 + ",height=" + screen.height * .88);
    Material.focus();
}


//选择配件
//谭帅
//2003-09-16 
//次序：设备ID 设备编号,设备名称,规格型号,标准单位,
//      上级编码,上级名称,上级规格型号,设备状态,
//      生产厂家,出厂编号,出厂日期,到货日期,规定使用年限,固定资产号,
//      固定资产原值,固定资产折旧方法,设备档案id,内部编码，
//      所属单位ID,使用单位ID,usesite,DRAWINGNO,materialType

//(String) msess.getAttribute("p_SheiBAndPeiJForS_tj"); //条件（可选）
//(String) msess.getAttribute("SheBeiBianHaoForS"); //设备编号（必须传入）

function penPeiJianForS(oDestination,oDestinationo1,oDestinationo2,oDestinationo3,oDestinationo4,oDestinationo5,oDestinationo6,oDestinationo7,oDestinationo8,oDestinationo9,oDestinationo10,oDestinationo11,oDestinationo12,oDestinationo13,oDestinationo14,oDestinationo15,oDestinationo16,oDestinationo17,oDestinationo18,oDestinationo19,oDestinationo20,oDestinationo21,oDestinationo22,oDestinationo23) {
         
    oField1 = oDestination;
    oField2 = oDestinationo1;
    oField3 = oDestinationo2;
    oField4 = oDestinationo3;
    oField5 = oDestinationo4;
    oField6 = oDestinationo5;
    oField7 = oDestinationo6;
    oField8 = oDestinationo7;
    oField9 = oDestinationo8;
    oField10 = oDestinationo9;
    oField11 = oDestinationo10;
    oField12 = oDestinationo11;
    oField13 = oDestinationo12;
    oField14 = oDestinationo13;
    oField15 = oDestinationo14;
    oField16 = oDestinationo15;
    oField17 = oDestinationo16;
    oField18 = oDestinationo17;
    oField19 = oDestinationo18;
    oField20 = oDestinationo19;
    oField21 = oDestinationo20;
    oField22 = oDestinationo21;
    
    oField23 =oDestinationo22;
    oField24 =oDestinationo23;
     
    Material = window.open("/btcjerpWeb/jsp/co/cho_SheBeiAndPeiJian/Sel_MaterialForS.jsp", "Material", "resizable=yes,dependent=yes,scrollbars=yes,left=10,top=15,width=" + screen.width * .96 + ",height=" + screen.height * .88);
    Material.focus();
}





//附件上载
// 单据名称、单据主表ID
function FileUpLoad(oDestination,oDestinationo1) {
    normalwin_B("/btcjerpWeb/FileUpLoad?ACTION=obr&keyname="+oDestination+"&keyid="+oDestinationo1, 640,480);
}

//附件查询及下载
// 单据名称、单据主表ID
function FileUpLook(oDestination,oDestinationo1) {
    normalwin_B("/btcjerpWeb/FileUpLoad?ACTION=sea&keyname="+oDestination+"&keyid="+oDestinationo1, 640,480);
}
//选择工程项目。 次序：projectid,projno,projname,orgashortname,projecttypeid,orgashortname,exeorganame,worksite,projprincipal,secuprincipal,techprincipal,planstartdate,planfinishdate,startdateinfact,finishidateinfact,facelanewayname,planproducecoal, plangrubcapacity,plancapacity,chargeclass,orgaid,exeorgaid,facelanewayid
function OpenProject5(oDestination,oDestinationo1,oDestinationo2) {
    oField1 = oDestination;
    oField2 = oDestinationo1;
    oField3 = oDestinationo2;
    oField4 = "";
    oField5 ="";
    oField6 ="";
    oField7 ="";
    oField8 ="";
    oField9 ="";
    oField10 ="";
    oField11 ="";
    oField12 = "";
    oField13 = "";
    oField14= "";
    oField15 = "";
    oField16 = "";
    oField17 = "";
    oField18 = "";
    oField19 = "";
    oField20 = "";
    oField21 = "";
    oField22 ="";
    oField23 ="";  
   
    Material1 = window.open("/btcjerpWeb/jsp/co/sel_project/Sel_Project.jsp", "Material1", "resizable=yes,dependent=yes,scrollbars=yes,left=90,top=45,width=" + screen.width * .83 + ",height=" + screen.height * .85);
    Material1.focus();
}
//new 2003.10.27 传入条件的Session:p_material_tj
//选择物资New1           id,           编号,           名称,         规格型号,      材质,        生产厂家,       物资图号,       计量单位,       物资性质,       内部编码,       上级物资编码,     计划价格,       采购类型，      pinyin ,        是否最终物资 ,  ABC分类,          ""   ,            ""
function OpenMatNew1(oDestination,oDestinationo1,oDestinationo2,oDestinationo3,oDestinationo4,oDestinationo5,oDestinationo6,oDestinationo7,oDestinationo8,oDestinationo9,oDestinationo10,oDestinationo11,oDestinationo12,oDestinationo13,oDestinationo14,oDestinationo15,oDestinationo16,oDestinationo17) {
    oField1 =  oDestination;
    oField2 =  oDestinationo1;
    oField3 =  oDestinationo2;
    oField4 =  oDestinationo3;
    oField5 =  oDestinationo4;
    oField6 =  oDestinationo5;
    oField7 =  oDestinationo6;
    oField8 =  oDestinationo7;
    oField9 =  oDestinationo8;
    oField10 = oDestinationo9;
    oField11 = oDestinationo10;
    oField12 = oDestinationo11;
    oField13 = oDestinationo12;
    oField14 = oDestinationo13;
    oField15 = oDestinationo14;
    oField16 = oDestinationo15;
    oField17 = "";
    oField18 = "";
    Material = window.open("/btcjerpWeb/jsp/co/cho_matnew/Sel_MaterialNew1.jsp", "Material", "resizable=yes,dependent=yes,scrollbars=yes,left=90,top=45,width=" + screen.width * .83 + ",height=" + screen.height * .85);
    Material.focus();
} 
//传入条件的Session:p_material_tj
//    对应参数 ：     materialid、materialno、materialname、     materialmodel、texure、  MaterialFactory、 DrawingNo、    MaterialUnit、   materialtype、materialsyscode、supMaterialNo、unifyprice、       purcSort、     pinyin、         isfinal、       abcclass、     ssuperName、     supermodel、   superfactory、       ''、             ''；
//选择物资New2          id,           编号,           名称,         规格型号,      材质,        生产厂家,       物资图号,       计量单位,       物资性质,       内部编码,       上级物资编码,     计划价格,       采购类型，      pinyin ,        是否最终物资 ,  ABC分类,          ""   ,            ""
function OpenMatNew2(oDestination,oDestinationo1,oDestinationo2,oDestinationo3,oDestinationo4,oDestinationo5,oDestinationo6,oDestinationo7,oDestinationo8,oDestinationo9,oDestinationo10,oDestinationo11,oDestinationo12,oDestinationo13,oDestinationo14,oDestinationo15,oDestinationo16,oDestinationo17,oDestinationo18,oDestinationo19,oDestinationo20) {
    oField1 =  oDestination;
    oField2 =  oDestinationo1;
    oField3 =  oDestinationo2;
    oField4 =  oDestinationo3;
    oField5 =  oDestinationo4;
    oField6 =  oDestinationo5;
    oField7 =  oDestinationo6;
    oField8 =  oDestinationo7;
    oField9 =  oDestinationo8;
    oField10 = oDestinationo9;
    oField11 = oDestinationo10;
    oField12 = oDestinationo11;
    oField13 = oDestinationo12;
    oField14 = oDestinationo13;
    oField15 = oDestinationo14;
    oField16 = oDestinationo15;
    oField17 = oDestinationo16;
    oField18 = oDestinationo17;
    oField19 = oDestinationo18;
    oField20 = "";
    oField21 = "";
    Material = window.open("/btcjerpWeb/jsp/co/cho_matnew/Sel_MaterialNew.jsp", "Material", "resizable=yes,dependent=yes,scrollbars=yes,left=90,top=45,width=" + screen.width * .83 + ",height=" + screen.height * .85);
    Material.focus();
} 
//筛选客户
//选择客户（id,客户编号,客户简称,客户全称，客户级别，客户类别，负载能力，客户类别，法人代表，增值税号)
//作者：刘小文
 function OpenCustomer(oDestination,oDestinationo1,oDestinationo2,oDestinationo3,oDestinationo4,oDestinationo5,oDestinationo6,oDestinationo7,oDestinationo8,oDestinationo9) {
    oField1 =  oDestination;
    oField2 =  oDestinationo1;
    oField3 =  oDestinationo2;
    oField4 =  oDestinationo3;
    oField5 =  oDestinationo4;
    oField6 =  oDestinationo5;
    oField7 =  oDestinationo6;
    oField8 =  oDestinationo7;
    oField9 =  oDestinationo8;
    oField10 = oDestinationo9;
 	
   Customer = window.open("/btcjerpWeb/jsp/co/cho_customer/Sea_customer_Frame.jsp?","Customer","resizable=yes,dependent=yes,scrollbars=yes,left=90,top=45,width=" + screen.width * .83 + ",height=" + screen.height * .85);
   Customer.focus();
} 

//选择最终设备
//materialid,materialno,materialname,materialmodel,materialunit,
//supmaterialno,materialfactory,CURRENTPRICe,EPRECORDID,USESITE,
//EQUIPSTATUS,OUTFACTORYNO,FACTORY,OUTFACTORYDATE,GOODSLANDDATE,
//DEFINEUSEYEAR,ADDMAINTENCOST,ISFORCECHECK,CHECKCYCLE,FIXEDASSETSNO,
//ASSETSORIGVALUE,FIXEDASSETSDEPRMETH,FIXEDASSETSDEPRVALUE,ASSETSTOORGAID,INUSEPROJID,
//INUSEORGAID,INUSEORGANAME,MATERIALID_A,OMATERIALNO,ACCOUNTLOAD,
//DEPREDATE,DEPREUSEMONTH,ORIGDEPREVALUE,RESIDASSETSRATE,
//"",""
//session 名称：p_equip_tj

function OpenEquipment(p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12,p13,p14,p15,p16,p17,p18,p19,p20,p21,p22,p23,p24,p25,p26,p27,p28,p29,p30,p31,p32,p33,p34,r35,r36){
   
    oField1 =  p1;
    oField2 =  p2;
    oField3 =  p3;
    oField4 =  p4;
    oField5 =  p5;
    oField6 =  p6;
    oField7 =  p7;
    oField8 =  p8;
    oField9 =  p9;
    oField10 = p10;
    
    oField11 =  p11;
    oField12 =  p12;
    oField13 =  p13;
    oField14 =  p14;
    oField15 =  p15;
    oField16 =  p16;
    oField17 =  p17;
    oField18 =  p18;
    oField19 =  p19;
    oField20 =  p20;
    
    oField21 =  p21;
    oField22 =  p22;
    oField23 =  p23;
    oField24 =  p24;
    oField25 =  p25;
    oField26 =  p26;
    oField27 =  p27;
    oField28 =  p28;
    oField29 =  p29;
    oField30 =  p30;
    
    oField31 =  p31;
    oField32 =  p32;
    oField33 =  p33;
    oField34 =  p34;
    
    oField35 =  r35;
    oField36 =  r36;
    
    var win = window.open("/btcjerpWeb/jsp/co/choiequip_new/cho_equip_result.jsp","win","resizable=yes,dependent=yes,scrollbars=yes,left=90,top=45,width=" + screen.width * .93 + ",height=" + screen.height * .86);
    win.focus();
    
}

function OpenFiltDemo(oDestination,oDestinationo1) {
         
    oField1 = oDestination;
    oField2 = oDestinationo1;
    var ulr="/btcjerpWeb/Cho_FiltDemoForm?ACTION=sel_enter";

    Material = window.open(ulr, "Material", "resizable=yes,dependent=yes,scrollbars=yes,left=10,top=15,width=" + screen.width * .96 + ",height=" + screen.height * .88);
    Material.focus();
}

//选择伤亡事故: 事故id、事故编号、事故单位ID、事故单位名称、事故时间、事故班次、事故地点类别、事故性质、事故属别
//       CasuAcciID,CasuAcciNo,AcciDeptID,AcciDeptName,AcciTime,AcciShift,AcciSiteClass,AcciKind,AcciType
//注意：筛选页面必须压session值,用法见test.jsp示例
//作者：章雪萍
//2003-11-3
function OpenCasuAcci(oDestinationo1,oDestinationo2,oDestinationo3,oDestinationo4,oDestinationo5,oDestination6,oDestination7,oDestination8,oDestination9)  {
    oField1 = oDestinationo1;
    oField2 = oDestinationo2;
    oField3 = oDestinationo3;
    oField4 = oDestinationo4;
    oField5 = oDestinationo5;
    oField6 = oDestination6;
    oField7 = oDestination7;
    oField8 = oDestination8;
    oField9 = oDestination9;
    CasuAcciID = window.open("/btcjerpWeb/jsp/co/ChoiCasuAcci/Cho_CasuAcci.jsp?", "CasuAcciID", "resizable=yes,dependent=yes,scrollbars=yes,left=90,top=45,width=" + screen.width * .83 + ",height=" + screen.height * .85);
    CasuAcciID.focus();
}

//选择疾病档案: 疾病大类名称,疾病分类id,疾病分类名称,疾病id,疾病编码,疾病名称,是否为职业病,是否为传染性疾病,疾病ICD码,状态

//           diseTypeName,diseSortID,diseSortName,diseaseID,diseaseNo,diseaseName,occuDisease,infeDisease,diseaseIcd,zhuangtai
//session 名称：zhuangtai,当zhuangtai="1",用户有权限新增疾病档案；当zhuangtai="0"，用户无新增权限。
//注意：筛选页面必须压session值,用法见test.jsp示例
//作者：章雪萍
//2003-11-03
function OpenDisease(oDestinationo1,oDestinationo2,oDestinationo3,oDestinationo4,oDestinationo5,oDestination6,oDestination7,oDestination8,oDestination9,oDestination10)  {
    oField1 = oDestinationo1;
    oField2 = oDestinationo2;
    oField3 = oDestinationo3;
    oField4 = oDestinationo4;
    oField5 = oDestinationo5;
    oField6 = oDestination6;
    oField7 = oDestination7;
    oField8 = oDestination8;
    oField9 = oDestination9;
    oField10 = oDestination10;
    diseaseID = window.open("/btcjerpWeb/jsp/co/Cho_Disease/Sel_Disease_Frame.jsp?zhuangtai="+oField10, "diseaseID", "resizable=yes,dependent=yes,scrollbars=yes,left=90,top=45,width=" + screen.width * .83 + ",height=" + screen.height * .85);
    diseaseID.focus();
}

//选择安全工作评估评分项目: 项目id、项目分类、项目编号、项目名称、项目权重
//             safeevalitemID,itemStyle,itemNo,itemName,itemPower
//作者：章雪萍
//2003-11-19
function OpenSafevitm(oDestinationo1,oDestinationo2,oDestinationo3,oDestinationo4,oDestinationo5)  {
    oField1 = oDestinationo1;
    oField2 = oDestinationo2;
    oField3 = oDestinationo3;
    oField4 = oDestinationo4;
	oField5 = oDestinationo5;
   
    safeevalitemID = window.open("/btcjerpWeb/jsp/co/choisafevalitm/Cho_SafEvalItem.jsp?","safeevalitemID", "resizable=yes,dependent=yes,scrollbars=yes,left=90,top=45,width=" + screen.width * .83 + ",height=" + screen.height * .85);
    safeevalitemID.focus();
}


//选择安全工作评估评分项目标准: 项目分类、项目ID、项目编号、项目名称、标准分、项目权重、监查标准
//  字段：               itemStyle,SafeevalitemID,itemNo,itemName,standCent,itemPower，supeStandard
//接收 session 名为 s_safeevalitemdet_filt 的 session 的值(String型) ，作为初始过滤条件
//注意：筛选页面必须压session值,用法见test.jsp示例
//作者：章雪萍
//2003-11-19
function OpenSafdet(oDestinationo1,oDestinationo2,oDestinationo3,oDestinationo4,oDestinationo5,oDestinationo6,oDestinationo7)  {
    oField1 = oDestinationo1;
    oField2 = oDestinationo2;
    oField3 = oDestinationo3;
    oField4 = oDestinationo4;
    oField5 = oDestinationo5;
    oField6 = oDestinationo6;
    oField7 = oDestinationo7;
    SafeevalitemID = window.open("/btcjerpWeb/jsp/co/choisafevitmdet/Cho_SafEvItmDet.jsp?","SafeevalitemID", "resizable=yes,dependent=yes,scrollbars=yes,left=90,top=45,width=" + screen.width * .83 + ",height=" + screen.height * .85);
    SafeevalitemID.focus();
}


//选择质量标准化评分项目: 项目id、项目分类、项目编号、项目名称、检查及评分办法
//             safequalitemid, itemstyle, itemno ,itemname，checkmoth
//作者：章雪萍
//2003-11-19
function OpenSafquaitm(oDestinationo1,oDestinationo2,oDestinationo3,oDestinationo4,oDestinationo5)  {
    oField1 = oDestinationo1;
    oField2 = oDestinationo2;
    oField3 = oDestinationo3;
    oField4 = oDestinationo4;
    oField5 = oDestinationo5;
   
    safequalitemid = window.open("/btcjerpWeb/jsp/co/cho_safequalitm/Cho_SafQuaItm.jsp?","safequalitemid", "resizable=yes,dependent=yes,scrollbars=yes,left=90,top=45,width=" + screen.width * .83 + ",height=" + screen.height * .85);
    safequalitemid.focus();
}


//选择质量标准化评分标准:项目分类、safeQualItemDetID、项目编号、项目名称、检查小项及评分标准
//  字段：             itemstyle,safequalitemdetid,itemno ,itemname, checkmoth
//接收 session 名为 s_safequalitemdet_filt 的 session 的值(String型) ，作为初始过滤条件
//注意：筛选页面必须压session值,用法见test.jsp示例
//作者：章雪萍
//2003-11-19
function OpenSafQudet(oDestinationo1,oDestinationo2,oDestinationo3,oDestinationo4,oDestinationo5)  {
    oField1 = oDestinationo1;
    oField2 = oDestinationo2;
    oField3 = oDestinationo3;
    oField4 = oDestinationo4;
    oField5 = oDestinationo5;
    
    safequalitemdetid = window.open("/btcjerpWeb/jsp/co/cho_safquaitmdet/Cho_SafQuItmDe.jsp?","safequalitemdetid", "resizable=yes,dependent=yes,scrollbars=yes,left=90,top=45,width=" + screen.width * .83 + ",height=" + screen.height * .85);
    safequalitemdetid.focus();
}


//选择安全监控点: 安全监控点ID,安全监控点编号,安全监控点名称,矿井ID矿井名称,巷道/工作面名称ID,
//              巷道/工作面名称,工程项目ID,工程项目名称,监控点位置
//接收 session 名为 s_safepoint_filt 的 session 的值(String型) ，作为初始过滤条件
//注意：筛选页面必须压session值,用法见test.jsp示例
//作者：章雪萍
//2004-1-8
function OpenSafPot(oDestinationo1,oDestinationo2,oDestinationo3,oDestinationo4,oDestinationo5,oDestinationo6,oDestinationo7,oDestinationo8,oDestinationo9,oDestinationo10)  {
    oField1 = oDestinationo1;
    oField2 = oDestinationo2;
    oField3 = oDestinationo3;
    oField4 = oDestinationo4;
    oField5 = oDestinationo5;
    oField6 = oDestinationo6;
    oField7 = oDestinationo7;
    oField8 = oDestinationo8;
    oField9 = oDestinationo9;
    oField10 = oDestinationo10;
    
    checkpointsetid = window.open("/btcjerpWeb/jsp/co/cho_checkpointset/Cho_chepoiset_Frame.jsp?","checkpointsetid", "resizable=yes,dependent=yes,scrollbars=yes,left=90,top=45,width=" + screen.width * .83 + ",height=" + screen.height * .85);
    checkpointsetid.focus();
}


//选择配件/设备/材料
//谭帅
//2003-12-23 
//次序：设备ID 设备编号,设备名称,规格型号,标准单位,
//      上级编码,上级名称,上级规格型号,设备状态,
//      生产厂家,出厂编号,出厂日期,到货日期,规定使用年限,固定资产号,
//      固定资产原值,固定资产折旧方法,设备档案id,内部编码，
//      所属单位ID,使用单位ID,usesite,DRAWINGNO,materialType

//(String) msess.getAttribute("p_SheiBAndPeiJAndCaiL_tj"); //条件（可选）
//(String) msess.getAttribute("SheiBAndPeiJAndCaiLNo"); //设备编号（必须传入）
//(String) msess.getAttribute("LeiSheiBAndPeiJAndCaiLID"); //设备ID（必须传入）

function OpenPeiJSheBCail(oDestination,oDestinationo1,oDestinationo2,oDestinationo3,oDestinationo4,oDestinationo5,oDestinationo6,oDestinationo7,oDestinationo8,oDestinationo9,oDestinationo10,oDestinationo11,oDestinationo12,oDestinationo13,oDestinationo14,oDestinationo15,oDestinationo16,oDestinationo17,oDestinationo18,oDestinationo19,oDestinationo20,oDestinationo21,oDestinationo22,oDestinationo23) {
         
    oField1 = oDestination;
    oField2 = oDestinationo1;
    oField3 = oDestinationo2;
    oField4 = oDestinationo3;
    oField5 = oDestinationo4;
    oField6 = oDestinationo5;
    oField7 = oDestinationo6;
    oField8 = oDestinationo7;
    oField9 = oDestinationo8;
    oField10 = oDestinationo9;
    oField11 = oDestinationo10;
    oField12 = oDestinationo11;
    oField13 = oDestinationo12;
    oField14 = oDestinationo13;
    oField15 = oDestinationo14;
    oField16 = oDestinationo15;
    oField17 = oDestinationo16;
    oField18 = oDestinationo17;
    oField19 = oDestinationo18;
    oField20 = oDestinationo19;
    oField21 = oDestinationo20;
    oField22 = oDestinationo21;
    
    oField23 =oDestinationo22;
    oField24 =oDestinationo23;
     
    Material = window.open("/btcjerpWeb/jsp/co/cho_SheBeiAndPeiJian/Sel_MaterialNew.jsp", "Material", "resizable=yes,dependent=yes,scrollbars=yes,left=10,top=15,width=" + screen.width * .96 + ",height=" + screen.height * .88);
    Material.focus();
}


//选择安全培训计划: 培训计划ID、主办单位ID、主办单位名称、培训年份、计划类别、培训班名称、培训形式、计划开始日期、计划结束日期、期数、培训人数、培训对象、培训地点、人员类别、培训内容、培训级别、培训课时
//字段(17)：        trainplanid, traindeptid, traindeptname, trainplanyear, trainplantype, trainplanname, trainplanmod, planbegindate, planstopdate, termno, trainnumb, trainobject,trainplace, userclass, trainplancont, trainplanlevel, trainplanhour
//接收 session 名为 s_trainplan_filt 的 session 的值(String型) ，作为初始过滤条件
//注意：筛选页面必须压session值,用法见test.jsp示例
//作者：章雪萍
//2003-12-25
function OpenTrainPlan(oDestinationo1,oDestinationo2,oDestinationo3,oDestinationo4,oDestinationo5,oDestinationo6,oDestinationo7,oDestinationo8,oDestinationo9,oDestinationo10,oDestinationo11,oDestinationo12,oDestinationo13,oDestinationo14,oDestinationo15,oDestinationo16,oDestinationo17)  {
    oField1 = oDestinationo1;
    oField2 = oDestinationo2;
    oField3 = oDestinationo3;
    oField4 = oDestinationo4;
    oField5 = oDestinationo5;
    oField6 = oDestinationo6;
    oField7 = oDestinationo7;
    oField8 = oDestinationo8;
    oField9 = oDestinationo9;
    oField10 = oDestinationo10;
    oField11 = oDestinationo11;
    oField12 = oDestinationo12;
    oField13 = oDestinationo13;
    oField14 = oDestinationo14;
    oField15 = oDestinationo15;
    oField16 = oDestinationo16;
    oField17 = oDestinationo17;
    
    
    trainplanid = window.open("/btcjerpWeb/jsp/co/cho_trainplan/Sel_TrainPlan_Frm.jsp?","trainplanid", "resizable=yes,dependent=yes,scrollbars=yes,left=90,top=45,width=" + screen.width * .83 + ",height=" + screen.height * .85);
    trainplanid.focus();
}

//选择安全培训班: 培训班id、培训班期数 、培训班名称 、主办单位ID、主办单位名称 、开始日期 、结束日期 、培训形式、培训类型
//            trainclassid,termno,classname,traindeptid,traindeptname,classbegindate,classstopdate,classstyle,userclass
//接收 session 名为 s_trainclass_filt 的 session 的值(String型) ，作为初始过滤条件
//注意：筛选页面必须压session值,用法见test.jsp示例
//作者：章雪萍
//2003-11-3
function OpenTrainClass(oDestinationo1,oDestinationo2,oDestinationo3,oDestinationo4,oDestinationo5,oDestination6,oDestination7,oDestination8,oDestination9)  {
    oField1 = oDestinationo1;
    oField2 = oDestinationo2;
    oField3 = oDestinationo3;
    oField4 = oDestinationo4;
    oField5 = oDestinationo5;
    oField6 = oDestination6;
    oField7 = oDestination7;
    oField8 = oDestination8;
    oField9 = oDestination9;
    trainclassid = window.open("/btcjerpWeb/jsp/co/cho_trainclass/Cho_TrainClass.jsp?", "trainclassid", "resizable=yes,dependent=yes,scrollbars=yes,left=90,top=45,width=" + screen.width * .83 + ",height=" + screen.height * .85);
    trainclassid.focus();
}

//选择人员入井记录:矿井ID,矿井所属机构ID, 矿井所属机构内码,矿井所属机构名称,矿井编号, 矿井名称, 下井人员类别, 下井人编码,下井人姓名,入井人安全编码,下井人所在部门ID,下井人所在部门名称,下井时间,上井时间
//                wellinfoid, orgaid,  orgasyscode,    orgashortname,  wellno,  wellname,repopersclass,repopersno,repopersname,repoperscode,repopersdeptid,repopersdeptname,downwelltime,upwelltime
//接收 session 名为 s_downwell_filt 的 session 的值(String型) ，作为初始过滤条件
//注意：筛选页面必须压session值,用法见test.jsp示例
//作者：章雪萍
//2004-1-13
function Opendownwellrec(oDestinationo1,oDestinationo2,oDestinationo3,oDestinationo4,oDestinationo5,oDestinationo6,oDestinationo7,oDestinationo8,oDestinationo9,oDestinationo10,oDestinationo11,oDestinationo12,oDestinationo13,oDestinationo14,oDestinationo15)  {
    oField1 = oDestinationo1;
    oField2 = oDestinationo2;
    oField3 = oDestinationo3;
    oField4 = oDestinationo4;
    oField5 = oDestinationo5;
    oField6 = oDestinationo6;
    oField7 = oDestinationo7;
    oField8 = oDestinationo8;
    oField9 = oDestinationo9;
    oField10 = oDestinationo10;
    oField11 = oDestinationo11;
    oField12 = oDestinationo12;
    oField13 = oDestinationo13;
    oField14 = oDestinationo14;
    oField15 = oDestinationo15;
    wellinfoid = window.open("/btcjerpWeb/jsp/co/cho_downwellrec/Cho_DownWellRec.jsp?", "wellinfoid", "resizable=yes,dependent=yes,scrollbars=yes,left=90,top=45,width=" + screen.width * .83 + ",height=" + screen.height * .85);
    wellinfoid.focus();
}

//选择人员三违记录:三违人所属部门ID、三违人所属部门名称、三违人员ID（PeccPersRecID）、三违人员姓名、三违人员编号、违章地点、三违类别、处理结果
//                peccdeptid,       peccdeptname,     peccpersrecid,              peccpersname,peccpersno, peccsite,peccsort,dealresult
//接收 session 名为 s_pecc_filt 的 session 的值(String型) ，作为初始过滤条件
//注意：筛选页面必须压session值,用法见test.jsp示例
//作者：章雪萍
//2004-1-14
function OpenPeccPersRec(oDestinationo1,oDestinationo2,oDestinationo3,oDestinationo4,oDestinationo5,oDestinationo6,oDestinationo7,oDestinationo8)  {
    oField1 = oDestinationo1;
    oField2 = oDestinationo2;
    oField3 = oDestinationo3;
    oField4 = oDestinationo4;
    oField5 = oDestinationo5;
    oField6 = oDestinationo6;
    oField7 = oDestinationo7;
    oField8 = oDestinationo8;
    
    peccdeptid = window.open("/btcjerpWeb/jsp/co/cho_peccpersrec/Cho_PeccPersRec.jsp?", "peccdeptid", "resizable=yes,dependent=yes,scrollbars=yes,left=90,top=45,width=" + screen.width * .83 + ",height=" + screen.height * .85);
    peccdeptid.focus();
}


//选择工作面巷道:矿井ID,矿井所属机构ID, 矿井所属二级单位syscode,工作面ID,工作面编号, 工作面名称, 煤岩别,工作面类型,
//             wellinfoid ,orgaid,  orgasyscode,    facelanewayid,facelanewayno,facelanewayname,coalorrock,faceorlaneway
//接收 session 名为 s_facelaneway_filt 的 session 的值(String型) ，作为初始过滤条件
//注意：筛选页面必须压session值,用法见test.jsp示例
//作者：章雪萍
//2004-1-15
function Openfacelaneway(oDestinationo1,oDestinationo2,oDestinationo3,oDestinationo4,oDestinationo5,oDestinationo6,oDestinationo7,oDestinationo8)  {
    oField1 = oDestinationo1;
    oField2 = oDestinationo2;
    oField3 = oDestinationo3;
    oField4 = oDestinationo4;
    oField5 = oDestinationo5;
    oField6 = oDestinationo6;
    oField7 = oDestinationo7;
    oField8 = oDestinationo8;
    
    facelanewayid = window.open("/btcjerpWeb/jsp/co/cho_facelaneway/Cho_FaceLaneWay.jsp?", "facelanewayid", "resizable=yes,dependent=yes,scrollbars=yes,left=90,top=45,width=" + screen.width * .83 + ",height=" + screen.height * .85);
    facelanewayid.focus();
}

//选择通风测风站:所属矿井名称、所属矿井ID、测风站ID、地点、编号、道数、性质、类别、规格、材质、掏槽情况、构筑日期、拆除日期、施工负责人
//wellname,wellinfoid,windsillrecid,buildplace,serino,pathnum, character ,sorttype, spec ,matequal,clearslot,builddate,remodate,consmanage      
//接收 session 名为 s_windsillrec_filt 的 session 的值(String型) ，作为初始过滤条件
//注意：筛选页面必须压session值,用法见test.jsp示例
//作者：章雪萍
//2004-1-16
function Openwindsillrec(oDestinationo1,oDestinationo2,oDestinationo3,oDestinationo4,oDestinationo5,oDestinationo6,oDestinationo7,oDestinationo8,oDestinationo9,oDestinationo10,oDestinationo11,oDestinationo12,oDestinationo13,oDestinationo14)  {
    oField1 = oDestinationo1;
    oField2 = oDestinationo2;
    oField3 = oDestinationo3;
    oField4 = oDestinationo4;
    oField5 = oDestinationo5;
    oField6 = oDestinationo6;
    oField7 = oDestinationo7;
    oField8 = oDestinationo8;
    oField9 = oDestinationo9;
    oField10 = oDestinationo10;
    oField11 = oDestinationo11;
    oField12 = oDestinationo12;
    oField13 = oDestinationo13;
    oField14 = oDestinationo14;
    windsillrecid = window.open("/btcjerpWeb/jsp/co/cho_windsillrec/Cho_WindSillRec.jsp?", "windsillrecid", "resizable=yes,dependent=yes,scrollbars=yes,left=90,top=45,width=" + screen.width * .83 + ",height=" + screen.height * .85);
    windsillrecid.focus();
}


//选择工程项目:返回工程项目ID、工程项目编码、工程项目名称、工程负责人、安全负责人、技术负责人、计划开工日期、计划竣工日期、工程状态、计划工程量、计划工期（工作日）、计划产煤量、计划掘进进尺（米）、所属工程类别ID、所属工程类别编号、所属工程类别名称、计量单位（工程）、所属工作面巷道ID、所属工作面巷道编号、所属工作面巷道名称
//            projectid,projno,projname,projprincipal,secuprincipal,techprincipal,planstartdate,planfinishdate,projstates,plancapacity ,plantimelimit,planproducecoal,plangrubcapacity,projecttypeid,projecttypeno,projtype,projunit,facelanewayid,facelanewayno,facelanewayname
//接收 session 名为 s_project_filt 的 session 的值(String型) ，作为初始过滤条件
//作者：章雪萍
//2004-3-26
function OpenprojectNew(oDestinationo1,oDestinationo2,oDestinationo3,oDestinationo4,oDestinationo5,oDestinationo6,oDestinationo7,oDestinationo8,oDestinationo9,oDestinationo10,oDestinationo11,oDestinationo12,oDestinationo13,oDestinationo14,oDestinationo15,oDestinationo16,oDestinationo17,oDestinationo18,oDestinationo19,oDestinationo20)  {
    oField1 = oDestinationo1;
    oField2 = oDestinationo2;
    oField3 = oDestinationo3;
    oField4 = oDestinationo4;
    oField5 = oDestinationo5;
    oField6 = oDestinationo6;
    oField7 = oDestinationo7;
    oField8 = oDestinationo8;
    oField9 = oDestinationo9;
    oField10 = oDestinationo10;
    oField11 = oDestinationo11;
    oField12 = oDestinationo12;
    oField13 = oDestinationo13;
    oField14 = oDestinationo14;
    oField15 = oDestinationo15;
    oField16 = oDestinationo16;
    oField17 = oDestinationo17;
    oField18 = oDestinationo18;
    oField19 = oDestinationo19;
    oField20 = oDestinationo20;
    projectid = window.open("/btcjerpWeb/jsp/co/cho_project/Cho_Proj_Frm.jsp?", "projectid", "resizable=yes,dependent=yes,scrollbars=yes,left=45,top=45,width=" + screen.width*0.9  + ",height=" + screen.height );
    projectid.focus();
}

//选择职工安全档案: 职工ID、 职工编号、 姓名、  性别、 所属机构ID、 所属机构名称、 工种职务、 出生日期、 人员类别、 工作状态、 教育程度、  职称、   年龄、 井下工龄、 安全编码、 用工性质、       工龄、 是否统计入井记录、 ORGASYSCODE
//字段(17)：    emprecordid  empno  empname empsex   orgaid     orgashortname  empduty empbirthday emptype   empstitue empdegree emptitle   age    down     safecode workercharacter   job    totaldownwell     orgasyscode
//接收 session 名为 s_emprecord_filt 的 session 的值(String型) ，作为初始过滤条件
//2003-1-11
function OpenEmprecord(oDestinationo1,oDestinationo2,oDestinationo3,oDestinationo4,oDestinationo5,oDestinationo6,oDestinationo7,oDestinationo8,oDestinationo9,oDestinationo10,oDestinationo11,oDestinationo12,oDestinationo13,oDestinationo14,oDestinationo15,oDestinationo16,oDestinationo17,oDestinationo18,oDestinationo19)  {
    oField1 = oDestinationo1;
    oField2 = oDestinationo2;
    oField3 = oDestinationo3;
    oField4 = oDestinationo4;
    oField5 = oDestinationo5;
    oField6 = oDestinationo6;
    oField7 = oDestinationo7;
    oField8 = oDestinationo8;
    oField9 = oDestinationo9;
    oField10 = oDestinationo10;
    oField11 = oDestinationo11;
    oField12 = oDestinationo12;
    oField13 = oDestinationo13;
    oField14 = oDestinationo14;
    oField15 = oDestinationo15;
    oField16 = oDestinationo16;
    oField17 = oDestinationo17;
    oField18 = oDestinationo18;
    oField19 = oDestinationo19;
    
    
    trainplanid = window.open("/btcjerpWeb/jsp/co/cho_emp/Cho_Main_Frm.jsp?","emprecordid", "resizable=yes,dependent=yes,scrollbars=yes,left=90,top=45,width=" + screen.width * .83 + ",height=" + screen.height * .85);
    trainplanid.focus();
}

//字符日期 --> 整数毫秒
function dateTomilliSecond(date){

    var firstline = date.indexOf("-");
    var lastline = date.lastIndexOf("-");
    
    var year = parseInt(date.substr(0,firstline));
	var month = parseInt(date.substr(firstline+1,lastline - firstline - 1));
	var day = parseInt(date.substr(lastline + 1));
   
    var date_value = new Date(year,month,day,0,0,0,0);
    
    return parseInt(date_value.getTime());
	
}

//工程类别筛选
//参数:工程类别ID,工程类别编码,工程类别名称,工程计量单位;
//接收 session 名为 s_projecttype_filt 的 session 的值(String型) ，作为初始过滤条件.   
//作者：刘健
//2004-3-15
function OpenProjectType(oDestinationo1,oDestinationo2,oDestinationo3,oDestinationo4){
    oField1 = oDestinationo1;
    oField2 = oDestinationo2;
    oField3 = oDestinationo3;
    oField4 = oDestinationo4;
    projecttype= window.open("/btcjerpWeb/jsp/mm/commonsel/sel_projecttype/Sel_ProjectType_Frm.jsp", "projecttype", "resizable=yes,dependent=yes,scrollbars=yes,left=90,top=45,width=" + screen.width * .83 + ",height=" + screen.height * .85);
    projecttype.focus();
}

//年度设备购置计划
//作者：mb
//date 2004-06-17
//session名称：pBean2_NDSBGZJH
function openyeppurcplan(yPurcPlanID){
	secucheckstateid = window.open("/btcjerpWeb/jsp/co/sel_yeppurcplan/Sel_fra.jsp?yPurcPlanID="+yPurcPlanID, "secucheckstateid", "resizable=yes,dependent=yes,scrollbars=yes,left=0,top=0,width=" + screen.width * 1 + ",height=" + screen.height * 1);
    secucheckstateid.focus();
}
//设备购置资金计划
//作者：mb
//date 2004-06-17
//session名称：pBean2_SBGZZJJH
function openyfeppurcplan(yPurcFPlanID){
	secucheckstateid = window.open("/btcjerpWeb/jsp/co/sel_yfeppurcplan/Sel_fra.jsp?yPurcFPlanID="+yPurcFPlanID, "secucheckstateid", "resizable=yes,dependent=yes,scrollbars=yes,left=0,top=0,width=" + screen.width * 1 + ",height=" + screen.height * 1);
    secucheckstateid.focus();
}
//月度设备购置计划
//作者：mb
//date 2004-06-17
//session名称：pBean2_YDSBGZJH
function openmeppurcplan(monthEPPurcPlanID){
	secucheckstateid = window.open("/btcjerpWeb/jsp/co/sel_meppurcplan/Sel_fra.jsp?monthEPPurcPlanID="+monthEPPurcPlanID, "secucheckstateid", "resizable=yes,dependent=yes,scrollbars=yes,left=0,top=0,width=" + screen.width * 1 + ",height=" + screen.height * 1);
    secucheckstateid.focus();
}
//年度设备维修计划
//作者：mb
//date 2004-06-17
//session名称：pBean2_NDSBWXJH
function openymendplan(YearEPMainPlanID){
	secucheckstateid = window.open("/btcjerpWeb/jsp/co/sel_ymendplan/Sel_fra.jsp?YearEPMainPlanID="+YearEPMainPlanID, "secucheckstateid", "resizable=yes,dependent=yes,scrollbars=yes,left=0,top=0,width=" + screen.width * 1 + ",height=" + screen.height * 1);
    secucheckstateid.focus();
}
//月度设备维修计划
//作者：mb
//date 2004-06-17
//session名称：pBean2_YDSBWXJH
function openmmendplan(monthEPMainPlanID){
	secucheckstateid = window.open("/btcjerpWeb/jsp/co/sel_mmendplan/Sel_fra.jsp?monthEPMainPlanID="+monthEPMainPlanID, "secucheckstateid", "resizable=yes,dependent=yes,scrollbars=yes,left=0,top=0,width=" + screen.width * 1 + ",height=" + screen.height * 1);
    secucheckstateid.focus();
}

//年度设备使用计划
//作者：牛宏
//date 2004-06-17
//session名称：pBean2_NDSBSYJH
function openyuseplan(YearEPUsePlanID){
	secucheckstateid = window.open("/btcjerpWeb/jsp/co/sel_yuseplan/Sel_fra.jsp?YearEPUsePlanID="+YearEPUsePlanID, "secucheckstateid", "resizable=yes,dependent=yes,scrollbars=yes,left=0,top=0,width=" + screen.width * 1 + ",height=" + screen.height * 1);
    secucheckstateid.focus();
}

//月度设备使用计划
//作者：牛宏
//date 2004-06-17
//session名称：pBean2_YDSBSYJH
function openmuseplan(MonthEPUsePlanID){
	secucheckstateid = window.open("/btcjerpWeb/jsp/co/sel_museplan/Sel_fra.jsp?MonthEPUsePlanID="+MonthEPUsePlanID, "secucheckstateid", "resizable=yes,dependent=yes,scrollbars=yes,left=0,top=0,width=" + screen.width * 1 + ",height=" + screen.height * 1);
    secucheckstateid.focus();
}

//年度设备租赁计划
//作者：牛宏
//date 2004-06-17
//session名称：pBean2_NDSBZLJH
function openytenancyplan(TenancyPlanID){
	secucheckstateid = window.open("/btcjerpWeb/jsp/co/sel_ytenancyplan/Sel_fra.jsp?TenancyPlanID="+TenancyPlanID, "secucheckstateid", "resizable=yes,dependent=yes,scrollbars=yes,left=0,top=0,width=" + screen.width * 1 + ",height=" + screen.height * 1);
    secucheckstateid.focus();
}

//月度设备租赁计划
//作者：牛宏
//date 2004-06-17
//session名称：pBean2_YDSBZLJH
function openmtenancyplan(MTenancyPlanID){
	secucheckstateid = window.open("/btcjerpWeb/jsp/co/sel_mtenancyplan/Sel_fra.jsp?MTenancyPlanID="+MTenancyPlanID, "secucheckstateid", "resizable=yes,dependent=yes,scrollbars=yes,left=0,top=0,width=" + screen.width * 1 + ",height=" + screen.height * 1);
    secucheckstateid.focus();
}

//大中修鉴定报告
//作者：牛宏
//date 2004-06-17
//session名称：pBean2_DZXJDBG
function openmainjudge(EPMainJudgeID){
	secucheckstateid = window.open("/btcjerpWeb/jsp/co/sel_epmainjudge/Sel_fra.jsp?EPMainJudgeID="+EPMainJudgeID, "secucheckstateid", "resizable=yes,dependent=yes,scrollbars=yes,left=0,top=0,width=" + screen.width * 1 + ",height=" + screen.height * 1);
    secucheckstateid.focus();
}

//领用申请单
//作者：牛宏
//date 2004-06-17
//session名称：pBean2_LYSQD
function openequipapp(OutStockBillID){
	secucheckstateid = window.open("/btcjerpWeb/jsp/co/sel_equipapp/Sel_fra.jsp?OutStockBillID="+OutStockBillID, "secucheckstateid", "resizable=yes,dependent=yes,scrollbars=yes,left=0,top=0,width=" + screen.width * 1 + ",height=" + screen.height * 1);
    secucheckstateid.focus();
}

//设备拆套申请单
//作者：牛宏
//date 2004-06-17
//session名称：pBean2_SBCTSQD
function openepdisasembly(EpdisaID){
	secucheckstateid = window.open("/btcjerpWeb/jsp/co/sel_epdisasembly/Sel_fra.jsp?EpdisaID="+EpdisaID, "secucheckstateid", "resizable=yes,dependent=yes,scrollbars=yes,left=0,top=0,width=" + screen.width * 1 + ",height=" + screen.height * 1);
    secucheckstateid.focus();
}

//租赁费用结算单
//作者：牛宏
//date 2004-06-17
//session名称：pBean2_ZLFYJSD
function opentenacost(TenaCostSettleID){
	secucheckstateid = window.open("/btcjerpWeb/jsp/co/sel_tenacost/Sel_fra.jsp?TenaCostSettleID="+TenaCostSettleID, "secucheckstateid", "resizable=yes,dependent=yes,scrollbars=yes,left=0,top=0,width=" + screen.width * 1 + ",height=" + screen.height * 1);
    secucheckstateid.focus();
}

//修理费用结算单
//作者：牛宏
//date 2004-06-17
//session名称：pBean2_XLFYJSD
function opentendcost(EpmainCostSID){
	secucheckstateid = window.open("/btcjerpWeb/jsp/co/sel_tendcost/Sel_fra.jsp?EpmainCostSID="+EpmainCostSID, "secucheckstateid", "resizable=yes,dependent=yes,scrollbars=yes,left=0,top=0,width=" + screen.width * 1 + ",height=" + screen.height * 1);
    secucheckstateid.focus();
}

//出售申请单
//作者：牛宏
//date 2004-06-17
//session名称：pBean2_Order
function openepsale(OrderID){
	secucheckstateid = window.open("/btcjerpWeb/jsp/co/sel_epsale/Sel_fra.jsp?OrderID="+OrderID, "secucheckstateid", "resizable=yes,dependent=yes,scrollbars=yes,left=0,top=0,width=" + screen.width * 1 + ",height=" + screen.height * 1);
    secucheckstateid.focus();
}

//---------------------------------------------------

//双击浏览
function opendbll(billid,lx)
{
if(lx=="zlht")secucheckstateid = window.open("/btcjerpWeb/jsp/co/sel_zlht/Sel_fra.jsp?billid="+billid, "secucheckstateid", "resizable=yes,dependent=yes,scrollbars=yes,left=0,top=0,width=" + screen.width * 1 + ",height=" + screen.height * 1);
if(lx=="zlfyjs")secucheckstateid = window.open("/btcjerpWeb/jsp/co/sel_zlht/Sel_fra.jsp?TENACONTRACTID="+TENACONTRACTID, "secucheckstateid", "resizable=yes,dependent=yes,scrollbars=yes,left=0,top=0,width=" + screen.width * 1 + ",height=" + screen.height * 1);

secucheckstateid.focus();

}

//报废申请单
//作者：sa
//date 2004-05-10
//session名称：pBean2_bfsq
function openbfsq(instockbillid){
	secucheckstateid = window.open("/btcjerpWeb/jsp/co/sel_bfsq/Sel_fra.jsp?instockbillid="+instockbillid, "secucheckstateid", "resizable=yes,dependent=yes,scrollbars=yes,left=0,top=0,width=" + screen.width * 1 + ",height=" + screen.height * 1);
    secucheckstateid.focus();
}

//领料单详细浏览
//作者：chenyz
//date 2004-06-18
function openoutstockbill(outstockbillid){
	secucheckstateid = window.open("/btcjerpWeb/jsp/co/sel_out/Sel_fra.jsp?outstockbillid="+outstockbillid, "secucheckstateid", "resizable=yes,dependent=yes,scrollbars=yes,left=0,top=0,width=" + screen.width * 1 + ",height=" + screen.height * 1);
    secucheckstateid.focus();
}

//维修预算申请单
//作者：mb
//date 2004-06-21
//session名称：pBean2_WXYSSQD
function openepmanbud(epMainBudgetID){
	secucheckstateid = window.open("/btcjerpWeb/jsp/co/sel_epmanbud/Sel_fra.jsp?epMainBudgetID="+epMainBudgetID, "secucheckstateid", "resizable=yes,dependent=yes,scrollbars=yes,left=0,top=0,width=" + screen.width * 1 + ",height=" + screen.height * 1);
    secucheckstateid.focus();
}
//维修合同
//作者：mb
//date 2004-06-21
//session名称：pBean2_WXHT
function openmaincontr(mainContractID){
	secucheckstateid = window.open("/btcjerpWeb/jsp/co/sel_maincontr/Sel_fra.jsp?mainContractID="+mainContractID, "secucheckstateid", "resizable=yes,dependent=yes,scrollbars=yes,left=0,top=0,width=" + screen.width * 1 + ",height=" + screen.height * 1);
    secucheckstateid.focus();
}
//设备调拨单
//作者：mb
//date 2004-06-21
//session名称：pBean2_SBDBD
function openequiallo(mateAllocateID){
	secucheckstateid = window.open("/btcjerpWeb/jsp/co/sel_equiallo/Sel_fra.jsp?mateAllocateID="+mateAllocateID, "secucheckstateid", "resizable=yes,dependent=yes,scrollbars=yes,left=0,top=0,width=" + screen.width * 1 + ",height=" + screen.height * 1);
    secucheckstateid.focus();
}
//设备配件赔偿单
//作者：mb
//date 2004-06-21
//session名称：pBean2_SBPJPCD
function openamend(amendID){
	secucheckstateid = window.open("/btcjerpWeb/jsp/co/sel_amend/Sel_fra.jsp?amendID="+amendID, "secucheckstateid", "resizable=yes,dependent=yes,scrollbars=yes,left=0,top=0,width=" + screen.width * 1 + ",height=" + screen.height * 1);
    secucheckstateid.focus();
}
//罚款单
//作者：mb
//date 2004-06-21
//session名称：pBean2_FKD
function openforfeit(amercementID){
	secucheckstateid = window.open("/btcjerpWeb/jsp/co/sel_forfeit/Sel_fra.jsp?amercementID="+amercementID, "secucheckstateid", "resizable=yes,dependent=yes,scrollbars=yes,left=0,top=0,width=" + screen.width * 1 + ",height=" + screen.height * 1);
    secucheckstateid.focus();
}
//报废申请单
//作者：mb
//date 2004-06-22
//session名称：pBean2_BFSQD
function openBFSQD(ePDiscardApplyID){
	secucheckstateid = window.open("/btcjerpWeb/jsp/co/sel_eqbfsq/Sel_fra.jsp?ePDiscardApplyID="+ePDiscardApplyID, "secucheckstateid", "resizable=yes,dependent=yes,scrollbars=yes,left=0,top=0,width=" + screen.width * 1 + ",height=" + screen.height * 1);
    secucheckstateid.focus();
}
//入库单
//作者：mb
//date 2004-06-22
//session名称：pBean2_SBRKD
function openSBRKD(instockbillid){
	secucheckstateid = window.open("/btcjerpWeb/jsp/co/sel_eqinstockstat/Sel_fra.jsp?instockbillid="+instockbillid, "secucheckstateid", "resizable=yes,dependent=yes,scrollbars=yes,left=0,top=0,width=" + screen.width * 1 + ",height=" + screen.height * 1);
    secucheckstateid.focus();
}
//采购申请单
//作者：mb
//date 2004-06-22
//session名称：pBean2_CGSQD
function openCGSQD(purcrequid){
	secucheckstateid = window.open("/btcjerpWeb/jsp/co/sel_eqpurcrequ/Sel_fra.jsp?purcrequid="+purcrequid, "secucheckstateid", "resizable=yes,dependent=yes,scrollbars=yes,left=0,top=0,width=" + screen.width * 1 + ",height=" + screen.height * 1);
    secucheckstateid.focus();
}
//以下为输入库房编码，自动得到库房ID和库房名称的函数
//传参方法：
// 第一个参数oDestinationvalue为你所输入的库房编码的值 ，oDestination0=depotNo, oDestination1=depotID,oDestination2=depotName

function OpenDepotEditNew(oDestinationvalue,oDestination0,oDestination1,oDestination2) {
   oField  = oDestination0;
   oField1 = oDestination1;
   oField2 = oDestination2;

   TenCrt = window.open("/btcjerpWeb/jsp/co/cho_publicselect/sel_depotinfo.jsp?depotno="+oDestinationvalue, "TenCrt", "alwaysRaised,resizable=yes,dependent=yes,scrollbars=yes,left=300,top=250,width=" + screen.width * .35 + ",height=" + screen.height * .30);
   TenCrt.focus();
}

//以下为输入物资编码，自动得到该物资对应的其他信息的函数
//传参方法：
// 第一个参数oDestinationvalue为你所输入的物资编码的值 ，
//后面的参数依次对应 materialNo, materialID , materialName, materialModel, drawingNo ,materialUnit ,materialFactory ,materialType,unifyprice,最后两个为条件及条件对应的值，
//注意：最后两个字段，其中的tj取值可以为"materialtype","materialID"（对应物资大类）,"materialNo"（对应物资大类）,"materialsyscode"（对应物资大类）。
//                   tjvalue 为对应物资大类相应字段的值， 要是 tj 的取值为"materialID"（对应物资大类）时，该字段取值必须为二级大类的materialID
// 这两个字段是为了维护明细信息时，取主表对应的物资大类下的最终物资。  
//特殊的筛选条件可以压session ： tj_material_edit
function OpenMaterialEditNew(oDestinationvalue,oDestination0,oDestination1,oDestination2,oDestination3,oDestination4,oDestination5,oDestination6,oDestination7,oDestination8,tj,tjvalue) {
   oField  = oDestination0;
   oField1 = oDestination1;
   oField2 = oDestination2;
   oField3 = oDestination3;
   oField4 = oDestination4;
   oField5 = oDestination5;
   oField6 = oDestination6;
   oField7 = oDestination7;
   oField8 = oDestination8;
   
   TenCrt = window.open("/btcjerpWeb/jsp/co/cho_publicselect/sel_materialinfo.jsp?materialno="+oDestinationvalue+"&"+tj+"="+tjvalue, "TenCrt", "alwaysRaised,resizable=yes,dependent=yes,scrollbars=yes,left=300,top=250,width=" + screen.width * .35 + ",height=" + screen.height * .30);
   TenCrt.focus();
}

//add by 适用于计划主表新增物资类别，明细不能再增加别的类别的物资
function OpenMaterialEditNew1(oDestinationvalue,oDestination0,oDestination1,oDestination2,oDestination3,oDestination4,oDestination5,oDestination6,oDestination7,oDestination8,tj,tjvalue) {
   oField  = oDestination0;
   oField1 = oDestination1;
   oField2 = oDestination2;
   oField3 = oDestination3;
   oField4 = oDestination4;
   oField5 = oDestination5;
   oField6 = oDestination6;
   oField7 = oDestination7;
   oField8 = oDestination8;
   
   TenCrt = window.open("/btcjerpWeb/jsp/co/cho_publicselect/sel_materialinfo1.jsp?materialno="+oDestinationvalue+"&tj="+tjvalue, "TenCrt", "alwaysRaised,resizable=yes,dependent=yes,scrollbars=yes,left=300,top=250,width=" + screen.width * .35 + ",height=" + screen.height * .30);
   TenCrt.focus();
}

//add by 

//以下为输入供应商编码，自动得到供应商对应的其他信息的函数
//传参方法：
// 第一个参数oDestinationvalue为你所输入的供应商编码的值 ，oDestination0=provNo, oDestination1=provID,oDestination2=provName

function OpenProvEditNew(oDestinationvalue,oDestination0,oDestination1,oDestination2) {
   oField  = oDestination0;
   oField1 = oDestination1;
   oField2 = oDestination2;

   TenCrt = window.open("/btcjerpWeb/jsp/co/cho_publicselect/sel_provinfo.jsp?provno="+oDestinationvalue, "TenCrt", "alwaysRaised,resizable=yes,dependent=yes,scrollbars=yes,left=300,top=250,width=" + screen.width * .35 + ",height=" + screen.height * .30);
   TenCrt.focus();
}



function UpdProvEditNew(oDestinationvalue,oDestination0,oDestination1,oDestination2) {
   oField  = oDestination0;
   oField1 = oDestination1;
   oField2 = oDestination2;

   TenCrt = window.open("/btcjerpWeb/jsp/co/cho_publicselect/upd_provinfo.jsp?provno="+oDestinationvalue, "TenCrt", "alwaysRaised,resizable=yes,dependent=yes,scrollbars=yes,left=300,top=250,width=" + screen.width * .35 + ",height=" + screen.height * .30);
   TenCrt.focus();
}

//以下为输入组织机构编码，自动得到组织机构对应的其他信息的函数
//传参方法：
// 第一个参数oDestinationvalue为你所输入的组织机构编码的值 ，oDestination0=orgaID, oDestination1=orgaName,oDestination2=orgaNo
//压入的session 名：sel_orga
function OpenOrgaEditNew(oDestinationvalue,oDestination0,oDestination1,oDestination2) {
   oField1  = oDestination0;
   oField2 = oDestination1;
   oField3 = oDestination2;
   TenCrt = window.open("/btcjerpWeb/jsp/co/cho_publicselect/sel_deptinfo.jsp?orgaNo="+oDestinationvalue, "TenCrt", "alwaysRaised,resizable=yes,dependent=yes,scrollbars=yes,left=300,top=250,width=" + screen.width * .35 + ",height=" + screen.height * .30);
   TenCrt.focus();
}

//以下为输入工程项目编码，自动得到工程项目对应的其他信息的函数
//传参方法：
// 第一个参数oDestinationvalue为你所输入的工程项目编码的值 ，oDestination0=projectID, oDestination1=projName,oDestination2=projNo

function OpenProjEditNew(oDestinationvalue,oDestination0,oDestination1,oDestination2) {
   oField1  = oDestination0;
   oField2 = oDestination1;
   oField3 = oDestination2;
   TenCrt = window.open("/btcjerpWeb/jsp/co/cho_publicselect/sel_project.jsp?projNo="+oDestinationvalue, "TenCrt", "alwaysRaised,resizable=yes,dependent=yes,scrollbars=yes,left=300,top=250,width=" + screen.width * .35 + ",height=" + screen.height * .30);
   TenCrt.focus();
}

//以下为输入银行编码，自动得到银行编码对应的其他信息的函数
//传参方法：
// 第一个参数oDestinationvalue为你所输入的银行编码的值 ，oDestination0=bankNo, oDestination1=bankID,oDestination2=bankName

function OpenBankditNew(oDestinationvalue,oDestination0,oDestination1,oDestination2) {
   oField1  = oDestination0;
   oField2 = oDestination1;
   oField3 = oDestination2;
   TenCrt = window.open("/btcjerpWeb/jsp/co/cho_publicselect/sel_bankinfo.jsp?bankno="+oDestinationvalue, "TenCrt", "alwaysRaised,resizable=yes,dependent=yes,scrollbars=yes,left=300,top=250,width=" + screen.width * .35 + ",height=" + screen.height * .30);
   TenCrt.focus();
}
//筛选工种
//传参方法：oDestination0=WorkTypeID,oDestination1=WorkTypeNO,oDestination2=WorkTypeName,
function OpenWorkType(oDestination0,oDestination1,oDestination2) {
   oField1  = oDestination0;
   oField2  = oDestination1;
   oField3  = oDestination2;
   TenCrt   = window.open("/btcjerpWeb/jsp/co/Cho_WorkType/sel_WorkTypeInfo.jsp", "TenCrt", "alwaysRaised,resizable=yes,dependent=yes,scrollbars=yes,left=90,top=45,width=" + screen.width * .85 + ",height=" + screen.height * .85);
   TenCrt.focus();
}
//作者：张楠 去空格
 function trim_zn(str)
	{
		var i= str.length-1; 

		while(i>=0)
		{
			if(str.charAt(i)== " ")
			{
				str = str.substring(0,i)+str.substring(i+1,str.length)
			}			
		    i--;
		}	
		return str;
     }

//在T_Worker 选择人员；公用函数的实现方式 利用所属单位＝当前用户二级单位，条件提供：部门编码、部门名称、人员编号、人员姓名、工种编号、工种名称 条件 筛选，选择。by liuxw
//workerid,organo,orgashortname,workerno,workername,WorkTypeNO,WorkTypeName
function Openwork( oDestination,oDestination1,oDestination2,oDestination3,oDestination4,oDestination5,oDestination6,oDestination7) {
   oField1 = oDestination;
   oField2 = oDestination1;
   oField3 = oDestination2;
   oField4 = oDestination3;
   oField5 = oDestination4;
   oField6 = oDestination5;
   oField7 = oDestination6;   
   oField8 = oDestination7; 
   Worker = window.open("/btcjerpWeb/jsp/co/cho_worker/cho_worker.jsp", "Worker", "alwaysRaised,resizable=yes,dependent=yes,scrollbars=yes,left=90,top=45,width=" + screen.width * .83 + ",height=" + screen.height * .85);
   Worker.focus();
}

//1.	用途：用于单据主表选择 物资类别 用； 输入 2.	输入：2.1	人员ID、物资分类 4.1	物资id、物资编码、物资名称、规格型号、图号、生产厂家；Destinationvalue0=人员ID,Destinationvalue1=物资分类
function OpenMaterialNew(oDestination,oDestination1,oDestination2,oDestination3,oDestination4,oDestination5,Destinationvalue0,Destinationvalue1) {
   oField1 =oDestination;
   oField2 = oDestination1;
   oField3 = oDestination2;
   oField4  = oDestination3
      oField5 = oDestination4;
   oField6 = oDestination5;
  Twomaterial = window.open("/btcjerpWeb/jsp/co/cho_matnew/Obr_Twomaterial.jsp?Orgaid="+Destinationvalue0+"&materialtype="+Destinationvalue1, "Twomaterial", "alwaysRaised,resizable=yes,dependent=yes,scrollbars=yes,left=300,top=250,width=" + screen.width * .650 + ",height=" + screen.height * .750);
   Twomaterial.focus();
}
/* 用途：维护成包物资的公用功能  
  参数1：只能是1,2,3.  
  参数2：判断是否可以新增或修改成包物资，0--可以修改，1-不可修改.
  参数3：如果参数1＝1，为使用计划明细ID;如果参数1＝2，为需求计划明细ID;如果参数1＝3，为物资ID;
*/
function OpenMaterialGroup(inParam1,inParam2,inParam3)
{
  materialGroup = window.open("/btcjerpWeb/jsp/co/Mai_MaterialGroup/Mai_MaterialGroup_Frm.jsp?type="+inParam1+"&type_id="+inParam3+"&edit_flag="+inParam2,"materialGroup","alwaysRaised,resizable=yes,dependent=yes,scrollbars=yes,left=90,top=45,width=" + screen.width * .650 + ",height=" + screen.height * .750);
  materialGroup.focus();
}

