/*  全局共用变量 */
    var sys_maxyear = 2100;
    var sys_minyear = 1900;

	var F_YEAR = 0;
    var F_MONTH = 1;
    var F_DATE = 2;
    var F_HOUR = 3;
    var F_MINUTE = 4;
    var F_SECOND = 5;

    var oField,dateWin

//  关闭鼠标右键
    document.oncontextmenu=function(){return false}; 

//  让弹出窗口总是在最上面:   
//  <body onblur="this.focus();"> 

//  ENTER键可以让光标移到下一个输入框   
//  <input onkeydown="if(event.keyCode==13)event.keyCode=9">     

//--------------------------------------------------------------------------------------

//  四舍五入，保留制定小数位数   
    function Round(a_Num , a_Bit) { 
       return( Math.round(a_Num * Math.pow (10 , a_Bit)) / Math.pow(10 , a_Bit)) ; 
    }      


//  关闭页面报错信息 
//  加入<body>区域中
//  window.onerror = stopError;

    function stopError() {
      return true;
    }

//  处理光标停留位置
//  <input type=text name=text1 value="123" onfocus="stopcur()">     

    function stopcur()   {   
      var e = event.srcElement;   
      var r =e.createTextRange();   
      r.moveStart('character',e.value.length);   
      r.collapse(true);   
      r.select();   
    } 

//  选择日期函数
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
    function getDateNoNew(field){
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
		 dateWin=open("/btcjerpWeb/jsp/co/message/datenew.jsp", "", "left="+xPos+",top="+yPos+",width=250,height=200")
	  }else{
		 dateWin.moveTo(xPos,yPos)
	  }
	  dateWin.focus()
    }

//  检查输入的是否为数字
    function CheckNumber(){
      if (event.keyCode <46 || event.keyCode >57) event.returnValue = false;
    }

//  屏蔽掉可能导致页面被重新刷新的键盘操作
//  在页面加上 <body onkeydown="KeyDown()" 

    function KeyDown(){ 
      if ((window.event.altKey)&&((window.event.keyCode==37)|| //屏蔽 Alt+ 方向键 ←
         (window.event.keyCode==39))){ //屏蔽 Alt+ 方向键 →
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


//	页面显示光标内容功能
//	用于表格动态光标行显示功能
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

//  初始默认选择行
	function defaultSelect(i)
	{
		eval("sub"+i+".className = 'selectedtr'");
		eval("oldObj=sub"+i);
	}

//  用于单表维护功能页面浏览一条页面的内容刷新
//  属于单表功能函数
	function detail_fresh(url)
	{
		window.parent.frames[1].location = url;
	}

//  用于单表维护功能页面浏览一条页面的内容刷新
//  属于单表功能函数
	function detail_fresh_key(url, key)
	{
		if(key!=null)
		{
			window.parent.frames[1].location = url;
		}
	}

//	用于主从表维护功能页面
//	属于主从表功能函数 参见客户资料维护模版
	function parent_detail_fresh(url)
	{
		window.frames[1].location = url;
	}

//  用于单表维护功能页面各类操作内容提交
//  属于单表功能函数
	function submit_detial(action)
	{
		document.forms[0].action = action;
		document.forms[0].target = window.parent.frames[0].name;
		document.forms[0].submit();
	}

//	提交表单
//  备注：参数1为提交URL,参数2为提交目标框架

	function submit_form(action, target)
	{
		document.forms[0].action = action;
		document.forms[0].target = target;
		document.forms[0].submit();
	}

//	提交表单
//  备注：参数1为提交目标框架

	function submit_form_no_action(target)
	{
		document.forms[0].target = target;
		document.forms[0].submit();
	}


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

//  用于单表模版的记录提示审核功能
    function valRecord(url)
	{
		if(confirm("确定要送审该条记录吗？"))
		{
			window.parent.frames[0].location = url;
		}
	}

//  用于提示用户指定不同信息，确认信息后转向指定页面
    function confirmMessage(message, url)
	{
		if(confirm(message))
		{
			window.parent.frames[0].location = url;
		}
	}

//  用于提示用户指定不同信息，确认信息后转向指定页面
    function confirmSubMessage(message, url)
	{
		if(confirm(message))
		{
			window.parent.frames[1].location = url;
		}
	}


//	用于主从模版从表纪录的删除功能
    function delDetail(url)
	{
		if(confirm("确定要删除该条记录吗？"))
		{
			window.location = url;
    	}
	}

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

//	选择下拉列表中和给定值相同的选项
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

//	选择单选框中和给定值相同的选项
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


//	选择下拉框的值给文本框

    function choice(form_name,text_name,select_name)
    {
		eval('document.'+form_name.name+'.'+text_name.name+'.value='+'document.'+form_name.name+'.'+select_name.name+'.value')
    }

//	用于比较列表值和一个定值
	function openURL(url, name, toolbar, scrollbars, location, left, top, width, height)
	{
		var subWindow = window.open(url, name, "toolbar = " + toolbar + ", scrollbars =  " + scrollbars + ", location =0,resizable =1, left = " + left + ", top = " +  top +", width = " + width + ", height = " + height);
		subWindow.focus();
	}

	function openURL_A(url, name, toolbar, scrollbars, location, resizable, left, top, width, height)
	{
		height=width*0.75;
		var subWindow = window.open(url, name, "toolbar = " + toolbar + ", scrollbars =  " + scrollbars + ", location =0, resizable = 1, left = " + left + ", top = " +  top +", width = " + width + ", height = " + height);
		subWindow.focus();
	}	

    function normalwin_B(page,twidth,thigh)
	{  thigh=twidth*0.75;
		openURL_A(page, "normalwin", 0, 1, 0, 1, (screen.width-twidth)/2-1, (screen.height-thigh)/2-15, twidth, thigh);
	}
	function normalwin_Q(page,twidth,thigh)
	{  thigh=twidth*0.75;
		openURL_A(page, "normalwin1", 0, 1, 0, 1, (screen.width-twidth)/2-1, (screen.height-thigh)/2-15, twidth, thigh);
	}
	function normalwin_F(page,twidth)
	{  thigh=twidth*0.75;
		openURL_A(page, "normalwin", 0, 1, 0, 1, (screen.width-twidth)/2-1, (screen.height-thigh)/2-15, twidth, thigh);
	}
	function smallwin(page)
	{
		openURL(page,"_blank",0,1,1, 200, 100, 400, 300);
	}

	function normalwin(page)
	{
		openURL(page,"_blank",0,1,1, 160, 100, 520, 390);
	}

	function tinywin(page)
	{
		openURL(page,"_blank",0,1,1, 100, 100, 600, 450);
	}

	function bigwin(page)
	{
		openURL(page,"_blank",0,1,1,(screen.width-740)/2-1, (screen.height-560)/2-15, 740, 560);
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

//  送交审核
	function sendRecord(url)
	{
		if(confirm("要送审该记录吗？"))
		{
			window.parent.frames[0].location = url
		}
	}

//	新增或修改完成后，关闭提示窗口，并刷新主表页面
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

//	新增或修改完成后，关闭提示窗口，并刷新主表页面
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

//	新增或修改完成后，关闭提示窗口，并刷新主表页面
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

//	新增或修改完成后，关闭提示窗口，并刷新主表页面
//  备注：适用于子窗口为多帧结构，在子窗口的子窗口中关闭，并刷新子窗口的父窗口的子窗口

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

//	根据日期字符串取年、月、日

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


//	判断字符串内容是否都为合法数字字符

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

//	判断输入值是否是浮点型

	function If_Number(Input)
	{   
		var str=new String(Input);
		
		if(isNaN(str)) return false;	
		
    	return true;
	}

//	判断输入值是否是整数型

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

//	判断输入值是否是日期型

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

//	判断字符串是否为空

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


//	根据输入数值以及数值总长、小数位长判断输入数值是否在范围之内
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

//	根据输入年、月、日、小时、分钟、秒数值，判断该值是否合法
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

//	根据输入年、月检查当月最大天数
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

//	根据输入年份检查当年是否是闰年
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

//	根据日期时间检查函数返回错误状态，显示对应提示信息

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

//	根据日期时间生成字符串

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


//	根据日期字符串比较两个日期大小，如果第一个日期大于第二个日期，返回真，否则为假

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

//	根据日期字符串比较两个时间大小，如果第一个时间大于第二个时间，返回真，否则为假

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


//	根据日期字符串取年、月、日

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


// 报表使用检查年月 

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

//	用于主从表维护功能页面
	function parent_detail_fresh(url)
	{
		window.frames[1].location = url;
	}


//用于多页签页面的页签变色控制
 
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

//截取字符串空格
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

function trim_zn1(str)
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

//校验进制浮点数的输入合法性 
//str0,str,posi,posi1: 依次表示：字段汉字名称、字段(表单域.value)、整数长度长度，小数长度
//eg. telldot("计划价格","2000.100",10,2)

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
//eg. telldot("计划价格","2000.100",10,2,20,-2)
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
 
    //可以为空
 function datetime_combine(datetime_field,date_field,hour_field,minute_field,second_field,title,isnull_sign){

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
   var isnull=isnull_sign;
     
   if((isnull=="1"))
   {
     if(trim_zn1(date_js)==""){  ////////////////////////////
       if(trim_zn1(hour_js)==""){
         if(trim_zn1(minute_js)==""){
           if(trim_zn1(second_js)==""){
           
             window.document.forms[0].elements[datetime_field].value=""; 
             return (1)
           
           }   
         }       
       }       
     }
   }
   
   if(If_Date(date_js)==false)
   {
    alert("日期输入不正确！")
    return (0)
   }
   
   if(trim_zn1(date_js)==""){
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
       //alert(window.document.forms[0].elements[datetime_field].value);
        return(1)
      }     
    }else{
     if( datenull==1){
       alert(title+"的日期未输入。");
       return (0)
     }else{
      alert("\""+title+"\""+"不符合正确时间格式。"+"\n"+"\n"+"时：0到23之间的整数"+"\n"+"分：0到59之间的整数"+"\n"+"秒：0到59之间的整数");
      return (0)
     }      
    }//
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

// 附件上载
// 单据名称、单据主表ID
function FileUpLoad(oDestination,oDestinationo1) {
    normalwin_Q("/btcjerpWeb/FileUpLoad?ACTION=obr&keyname="+oDestination+"&keyid="+oDestinationo1, 640,480);
}
// 附件查询及下载
// 单据名称、单据主表ID
function FileUpLook(oDestination,oDestinationo1) {
    normalwin_Q("/btcjerpWeb/FileUpLoad?ACTION=sea&keyname="+oDestination+"&keyid="+oDestinationo1, 640,480);
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

//按顺序为：机构ID、机构简称、机构全称、机构编号、联系电话、地址
//传入的SESSION参数名为：p_orga_tj
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
   Orig = window.open("/btcjerpWeb/jsp/co/choiorga/cho_orga_tvw.jsp", "Orig", "alwaysRaised,resizable=yes,dependent=yes,scrollbars=yes,left=90,top=45,width=" + screen.width * .83 + ",height=" + screen.height * .85);
   Orig.focus();
}


//传参方法：
//按顺序为：机构ID、机构简称、机构全称、机构编号、联系电话、地址、单位内码、对应二级单位ID、对应二级单位编号、对应二级单位简称
//
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


//选择人员函数(单选)

//按顺序为(共8项)：人员ID、人员编号、安全编码、所属部门ID、所属部门编号、所属部门名称、人员姓名、人员性别
//传入的条件SESSION 命名为: p_person_tj
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

// 选择工作面/巷道函数(单选)
// 不需要的参数用："" 代替,注意传参顺序要一样
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
function OpenProjM() {
   oField1 = "projectid";
   oField2 = "projno";
   oField3 = "projname";
   oField4 = "projtypeid";
   Project = window.open("/btcjerpWeb/jsp/co/choiproject/Cho_Project.jsp", "Project", "scrollbars=yes,left=90,top=45,width=" + screen.width * .73 + ",height=" + screen.height * .78);
   Project.focus();
}


function OpenProjDD( oDestination1,oDestination2,oDestination3,oDestination4,oDestination5) {

   oField1 = oDestination1;
   oField2 = oDestination2;
   oField3 = oDestination3;
   oField4 = oDestination4;
   Project = window.open("/btcjerpWeb/jsp/co/choiproject/Cho_Project.jsp?nowsql="+oDestination5, "Project", "scrollbars=yes,left=90,top=45,width=" + screen.width * .73 + ",height=" + screen.height * .78);
   Project.focus();
}


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

// 选择矿井信息函数(单选)
// 按顺序为：矿井ID,矿井编号,矿井名称，矿井位置，矿井所属部门ID，，矿井所属部门编号，，矿井所属部门名称，

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


// 选择工程类型函数(单选)
// 传参方法：
// 按顺序为：工程类型ID、工程类型编号，工程类型名称、煤岩别、支护形式、巷道断面、巷道性质
//
// 不需要的参数用："" 代替,注意传参顺序要一样
//
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

//  选择工程项目
//  次序：projectid,projno,projname,orgashortname,projecttypeid,orgashortname,exeorganame,worksite,projprincipal,secuprincipal,techprincipal,planstartdate,planfinishdate,startdateinfact,finishidateinfact,facelanewayname,planproducecoal, plangrubcapacity,plancapacity,chargeclass,orgaid,exeorgaid,facelanewayid
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


//  选择工程项目。 
//  次序：projectid,projno,projname,orgashortname,projecttypeid,orgashortname,exeorganame,worksite,projprincipal,secuprincipal,techprincipal,planstartdate,planfinishdate,startdateinfact,finishidateinfact,facelanewayname,planproducecoal, plangrubcapacity,plancapacity,chargeclass,orgaid,exeorgaid,facelanewayid
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
function OpenSafquaitm(oDestinationo1,oDestinationo2,oDestinationo3,oDestinationo4,oDestinationo5)  {
    oField1 = oDestinationo1;
    oField2 = oDestinationo2;
    oField3 = oDestinationo3;
    oField4 = oDestinationo4;
    oField5 = oDestinationo5;
   
    safequalitemid = window.open("/btcjerpWeb/jsp/co/cho_safequalitm/Cho_SafQuaItm.jsp?","safequalitemid", "resizable=yes,dependent=yes,scrollbars=yes,left=90,top=45,width=" + screen.width * .83 + ",height=" + screen.height * .85);
    safequalitemid.focus();
}


//选择质量标准化评分标准:项目分类、safeQualItemDetID、项目编号、项目名称、标准分\ 权重\ 检查小项及评分标准
//  字段：             itemstyle,safequalitemdetid,itemno ,itemname, standcent,power,checkmoth
//接收 session 名为 s_safequalitemdet_filt 的 session 的值(String型) ，作为初始过滤条件
//注意：筛选页面必须压session值,用法见test.jsp示例
function OpenSafQudet(oDestinationo1,oDestinationo2,oDestinationo3,oDestinationo4,oDestinationo5,oDestinationo6,oDestinationo7)  {
    oField1 = oDestinationo1;
    oField2 = oDestinationo2;
    oField3 = oDestinationo3;
    oField4 = oDestinationo4;
    oField5 = oDestinationo5;
    oField6 = oDestinationo6;
    oField7 = oDestinationo7;
    
    safequalitemdetid = window.open("/btcjerpWeb/jsp/co/cho_safquaitmdet/Cho_SafQuItmDe.jsp?","safequalitemdetid", "resizable=yes,dependent=yes,scrollbars=yes,left=90,top=45,width=" + screen.width * .83 + ",height=" + screen.height * .85);
    safequalitemdetid.focus();
}


//选择安全监控点: 安全监控点ID,安全监控点编号,安全监控点名称,矿井ID，矿井名称,巷道/工作面ID,
//              巷道/工作面名称,工程项目ID,工程项目名称,监控点位置
//接收 session 名为 s_safepoint_filt 的 session 的值(String型) ，作为初始过滤条件
//注意：筛选页面必须压session值,用法见test.jsp示例
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
//选择安全监控点: 安全监控点ID,安全监控点编号,安全监控点名称,矿井ID，矿井名称,巷道/工作面ID,
//              巷道/工作面名称,工程项目ID,工程项目名称,监控点位置,传人参数－－所属矿井ID

function OpenSafPotNew(oDestinationo1,oDestinationo2,oDestinationo3,oDestinationo4,oDestinationo5,oDestinationo6,oDestinationo7,oDestinationo8,oDestinationo9,oDestinationo10,oDestinationo11)  {
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
    
    checkpointsetid = window.open("/btcjerpWeb/jsp/co/cho_checkpointset/Cho_chepoiset_Frame.jsp?wellinfoid="+oDestinationo11,"checkpointsetid", "resizable=yes,dependent=yes,scrollbars=yes,left=90,top=45,width=" + screen.width * .83 + ",height=" + screen.height * .85);
    checkpointsetid.focus();
}


//选择安全培训计划: 培训计划ID、主办单位ID、主办单位名称、培训年份、计划类别、培训班名称、培训形式、计划开始日期、计划结束日期、期数、培训人数、培训对象、培训地点、人员类别、培训内容、培训级别、培训课时,计划编号
//字段(18)：        trainplanid, traindeptid, traindeptname, trainplanyear, trainplantype, trainplanname, trainplanmod, planbegindate, planstopdate, termno, trainnumb, trainobject,trainplace, userclass, trainplancont, trainplanlevel, trainplanhour,trainplanno
//接收 session 名为 s_trainplan_filt 的 session 的值(String型) ，作为初始过滤条件
//注意：筛选页面必须压session值,用法见/btcjerpWeb/jsp/co/cho_trainplan/test.jsp示例
function OpenTrainPlan(oDestinationo1,oDestinationo2,oDestinationo3,oDestinationo4,oDestinationo5,oDestinationo6,oDestinationo7,oDestinationo8,oDestinationo9,oDestinationo10,oDestinationo11,oDestinationo12,oDestinationo13,oDestinationo14,oDestinationo15,oDestinationo16,oDestinationo17,oDestinationo18)  {
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
    
    
    trainplanid = window.open("/btcjerpWeb/jsp/co/cho_trainplan/Cho_Trainplan_Frm.jsp?","trainplanid", "resizable=yes,dependent=yes,scrollbars=yes,left=90,top=45,width=" + screen.width * .83 + ",height=" + screen.height * .85);
    trainplanid.focus();
}

//选择安全培训班: 培训班id、培训班期数 、培训班名称 、主办单位ID、主办单位名称 、开始日期 、结束日期 、培训形式、培训类型
//            trainclassid,termno,classname,traindeptid,traindeptname,classbegindate,classstopdate,classstyle,userclass
//接收 session 名为 s_trainclass_filt 的 session 的值(String型) ，作为初始过滤条件
//注意：筛选页面必须压session值,用法见/btcjerpWeb/jsp/co/cho_trainclass/test.jsp示例
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
//注意：筛选页面必须压session值,用法见/btcjerpWeb/jsp/co/cho_downwellrec/test.jsp示例
function Opendownwellrec(oDestinationo1,oDestinationo2,oDestinationo3,oDestinationo4,oDestinationo5,oDestinationo6,oDestinationo7,oDestinationo8,oDestinationo9,oDestinationo10,oDestinationo11,oDestinationo12,oDestinationo13,oDestinationo14)  {
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
    wellinfoid = window.open("/btcjerpWeb/jsp/co/cho_downwellrec/Cho_DownWellRec.jsp?", "wellinfoid", "resizable=yes,dependent=yes,scrollbars=yes,left=90,top=45,width=" + screen.width * .83 + ",height=" + screen.height * .85);
    wellinfoid.focus();
}

//与Opendownwellrec()相似，添加返回字段：是否统计入井记录--totaldownwell,downwellrecordid
//选择人员入井记录:矿井ID,矿井所属机构ID, 矿井所属机构内码,矿井所属机构名称,矿井编号, 矿井名称, 下井人员类别, 下井人编码,下井人姓名,入井人安全编码,下井人所在部门ID,下井人所在部门名称,下井时间,上井时间,是否统计入井记录,downwellrecordid
//                wellinfoid, orgaid,  orgasyscode,    orgashortname,  wellno,  wellname,repopersclass,repopersno,repopersname,repoperscode,repopersdeptid,repopersdeptname,downwelltime,upwelltime,totaldownwell,downwellrecordid
//接收 session 名为 s_downwell_filt 的 session 的值(String型) ，作为初始过滤条件
//注意：筛选页面必须压session值,用法见/btcjerpWeb/jsp/co/cho_downwellrec/testadd.jsp示例
function OpendownwellrecAdd(oDestinationo1,oDestinationo2,oDestinationo3,oDestinationo4,oDestinationo5,oDestinationo6,oDestinationo7,oDestinationo8,oDestinationo9,oDestinationo10,oDestinationo11,oDestinationo12,oDestinationo13,oDestinationo14,oDestinationo15,oDestinationo16)  {
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
    wellinfoid = window.open("/btcjerpWeb/jsp/co/cho_downwellrec/Cho_DownWellRecAdd.jsp", "wellinfoid", "resizable=yes,dependent=yes,scrollbars=yes,left=90,top=45,width=" + screen.width * .83 + ",height=" + screen.height * .85);
    wellinfoid.focus();
}
//与Opendownwellrec()相似，添加返回字段：是否统计入井记录--totaldownwell,downwellrecordid
//选择人员入井记录:矿井ID,矿井所属机构ID, 矿井所属机构内码,矿井所属机构名称,矿井编号, 矿井名称, 下井人员类别, 下井人编码,下井人姓名,入井人安全编码,下井人所在部门ID,下井人所在部门名称,下井时间,上井时间,是否统计入井记录,downwellrecordid,入井人id,wellinfo,downwelldate
//                wellinfoid, orgaid,  orgasyscode,    orgashortname,  wellno,  wellname,repopersclass,repopersno,repopersname,repoperscode,repopersdeptid,repopersdeptname,downwelltime,upwelltime,totaldownwell,downwellrecordid,downwellpersonid,wellinfo,downwelldate
//接收 session 名为 s_downwell_filt 的 session 的值(String型) ，作为初始过滤条件
//注意：筛选页面必须压session值,用法见/btcjerpWeb/jsp/co/cho_downwellrec/testadd.jsp示例
function OpendownwellrecAddNew(oDestinationo1,oDestinationo2,oDestinationo3,oDestinationo4,oDestinationo5,oDestinationo6,oDestinationo7,oDestinationo8,oDestinationo9,oDestinationo10,oDestinationo11,oDestinationo12,oDestinationo13,oDestinationo14,oDestinationo15,oDestinationo16,oDestinationo17,oDestinationo18,oDestinationo19)  {
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
    wellinfoid = window.open("/btcjerpWeb/jsp/co/cho_downwellrec/Cho_DownWellRecAdd.jsp?wellinfoid="+oDestinationo18+"&downdate="+oDestinationo19, "wellinfoid", "resizable=yes,dependent=yes,scrollbars=yes,left=90,top=45,width=" + screen.width * .83 + ",height=" + screen.height * .85);
    wellinfoid.focus();
}

//选择人员三违记录1:三违人所属部门ID、三违人所属部门名称、三违人员ID（PeccPersRecID）、三违人员姓名、三违人员编号、违章地点、三违类别、处理结果
//                peccdeptid,       peccdeptname,     peccpersrecid,              peccpersname,peccpersno, peccsite,peccsort,dealresult
//接收 session 名为 s_pecc_filt 的 session 的值(String型) ，作为初始过滤条件
//注意：筛选页面必须压session值,用法见/btcjerpWeb/jsp/co/cho_peccpersrec/test.jsp示例
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
//选择人员三违记录2:三违人所属部门ID、三违人所属部门名称、三违人员ID（PeccPersRecID）、三违人员姓名、三违人员编号、违章地点、三违类别、处理结果,违章时间
//                peccdeptid,       peccdeptname,     peccpersrecid,              peccpersname,peccpersno, peccsite,peccsort,dealresult,pecctime
//接收 session 名为 s_pecc_filt 的 session 的值(String型) ，作为初始过滤条件
//注意：筛选页面必须压session值,用法见/btcjerpWeb/jsp/co/cho_peccpersrec/test.jsp示例
function OpenPeccPersRecA(oDestinationo1,oDestinationo2,oDestinationo3,oDestinationo4,oDestinationo5,oDestinationo6,oDestinationo7,oDestinationo8,oDestinationo9)  {
    oField1 = oDestinationo1;
    oField2 = oDestinationo2;
    oField3 = oDestinationo3;
    oField4 = oDestinationo4;
    oField5 = oDestinationo5;
    oField6 = oDestinationo6;
    oField7 = oDestinationo7;
    oField8 = oDestinationo8;
    oField9 = oDestinationo9;
    
    peccdeptid = window.open("/btcjerpWeb/jsp/co/cho_peccpersrec/Cho_PeccPersRecA.jsp?", "peccdeptid", "resizable=yes,dependent=yes,scrollbars=yes,left=90,top=45,width=" + screen.width * .83 + ",height=" + screen.height * .85);
    peccdeptid.focus();
}


//选择工作面巷道:矿井ID,矿井所属机构ID, 矿井所属二级单位syscode,工作面ID,工作面编号, 工作面名称, 煤岩别,工作面类型,矿井名称
//             wellinfoid ,orgaid,  orgasyscode,    facelanewayid,facelanewayno,facelanewayname,coalorrock,faceorlaneway,wellname
//接收 session 名为 s_facelaneway_filt 的 session 的值(String型) ，作为初始过滤条件
//注意：筛选页面必须压session值,用法见/btcjerpWeb/jsp/co/cho_facelaneway/test.jsp示例
function Openfacelaneway(oDestinationo1,oDestinationo2,oDestinationo3,oDestinationo4,oDestinationo5,oDestinationo6,oDestinationo7,oDestinationo8,oDestinationo9)  {
    oField1 = oDestinationo1;
    oField2 = oDestinationo2;
    oField3 = oDestinationo3;
    oField4 = oDestinationo4;
    oField5 = oDestinationo5;
    oField6 = oDestinationo6;
    oField7 = oDestinationo7;
    oField8 = oDestinationo8;
    oField9 = oDestinationo9;
    
    facelanewayid = window.open("/btcjerpWeb/jsp/co/cho_facelaneway/Cho_FaceLaneWay.jsp?", "facelanewayid", "resizable=yes,dependent=yes,scrollbars=yes,left=90,top=45,width=" + screen.width * .83 + ",height=" + screen.height * .85);
    facelanewayid.focus();
}

//选择通风测风站:所属矿井名称、所属矿井ID、测风站ID、地点、编号、道数、性质、类别、规格、材质、掏槽情况、构筑日期、拆除日期、施工负责人
//wellname,wellinfoid,windsillrecid,buildplace,serino,pathnum, character ,sorttype, spec ,matequal,clearslot,builddate,remodate,consmanage      
//接收 session 名为 s_windsillrec_filt 的 session 的值(String型) ，作为初始过滤条件
//注意：筛选页面必须压session值,用法见/btcjerpWeb/jsp/co/cho_windsillrec/test.jsp示例
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



//选择安全培训计划: 培训计划ID、主办单位ID、主办单位名称、培训年份、计划类别、培训班名称、培训形式、计划开始日期、计划结束日期、期数、培训人数、培训对象、培训地点、培训内容、培训级别、培训课时
//trainplanid,traindeptid,traindeptname,trainplanyear,trainplanstyle,trainplanname,trainplanmod,planbegindate,planstopdate,termno
//trainnumb,trainobject,trainplace,trainplancont,trainplanlevel,trainplanhour
//接收 session 名为 s_trainplan_filt 的 session 的值(String型) ，作为初始过滤条件      
//注意：筛选页面必须压session值,用法见test.jsp示例
function OpenTrainplan(oDestinationo1,oDestinationo2,oDestinationo3,oDestinationo4,oDestinationo5,oDestinationo6,oDestinationo7,oDestinationo8,oDestinationo9,oDestinationo10,oDestinationo11,oDestinationo12,oDestinationo13,oDestinationo14,oDestinationo15,oDestinationo16){
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
    trainplanid = window.open("/btcjerpWeb/jsp/co/cho_trainplan/Cho_Trainplan_Frm.jsp", "trainplanid", "resizable=yes,dependent=yes,scrollbars=yes,left=90,top=45,width=" + screen.width * .83 + ",height=" + screen.height * .85);
    trainplanid.focus();
}

//选择工程项目:返回工程项目ID、工程项目编码、工程项目名称、工程负责人、安全负责人、技术负责人、计划开工日期、计划竣工日期、工程状态、计划工程量、计划工期（工作日）、计划产煤量、计划掘进进尺（米）、所属工程类别ID、所属工程类别编号、所属工程类别名称、计量单位（工程）、所属工作面巷道ID、所属工作面巷道编号、所属工作面巷道名称
//            projectid,projno,projname,projprincipal,secuprincipal,techprincipal,planstartdate,planfinishdate,projstates,plancapacity ,plantimelimit,planproducecoal,plangrubcapacity,projecttypeid,projecttypeno,projtype,projunit,facelanewayid,facelanewayno,facelanewayname
//接收 session 名为 s_project_filt 的 session 的值(String型) ，作为初始过滤条件
//注意：筛选页面必须压session值,用法见test.jsp示例
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
    projectid = window.open("/btcjerpWeb/jsp/co/cho_project/Cho_Proj_Frm.jsp?", "projectid", "resizable=yes,dependent=yes,scrollbars=yes,left=90,top=45,width=" + screen.width  + ",height=" + screen.height );
    projectid.focus();
}




//选择职工安全档案: 职工ID、 职工编号、 姓名、  性别、 所属机构ID、 所属机构名称、 工种职务、 出生日期、 人员类别、 工作状态、 教育程度、  职称、   年龄、 井下工龄、 安全编码、 用工性质、       工龄、 是否统计入井记录、 ORGASYSCODE
//字段(17)：    emprecordid  empno  empname empsex   orgaid     orgashortname  empduty empbirthday emptype   empstitue empdegree emptitle   age    down     safecode workercharacter   job    totaldownwell     orgasyscode
//接收 session 名为 s_emprecord_filt 的 session 的值(String型) ，作为初始过滤条件
//必须压session 
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


//查询工作面巷道，无返回值
//使用时必须设置 session，s_faceorga_filt（工作面巷道所属矿井的所属二级单位ORGASYSCODE） 、s_facetype_filt（工作面巷道类型）、s_facecount_filt （统计日期）
function Openfacelanew() {

	facelanewayid = window.open("/btcjerpWeb/jsp/si/safebase/cho_facelanew/Cho_FaceLane_Frm.jsp", "facelanewayid", "resizable=yes,dependent=yes,scrollbars=yes,left=90,top=45,width=" + screen.width * .83 + ",height=" + screen.height * .85);
    facelanewayid.focus();
}
//工程类别筛选
//参数:工程类别ID,工程类别编码,工程类别名称,工程计量单位;
//接收 session 名为 s_projecttype_filt 的 session 的值(String型) ，作为初始过滤条件.   
function OpenProjectType(oDestinationo1,oDestinationo2,oDestinationo3,oDestinationo4){
    oField1 = oDestinationo1;
    oField2 = oDestinationo2;
    oField3 = oDestinationo3;
    oField4 = oDestinationo4;
    projecttype= window.open("/btcjerpWeb/jsp/mm/commonsel/sel_projecttype/Sel_ProjectType_Frm.jsp", "projecttype", "resizable=yes,dependent=yes,scrollbars=yes,left=90,top=45,width=" + screen.width * .83 + ",height=" + screen.height * .85);
    projecttype.focus();
}
//选择隐患联系单记录
//参数: 隐患联系单ID、隐患联系单编号、下达日期、整改单位ID、整改单位名称
//接收 session 名为  s_supeposi _filt  的 session 的值(String型) ，作为初始过滤条件.   
function OpenSecuSupePosi(oDestinationo1,oDestinationo2,oDestinationo3,oDestinationo4,oDestinationo5){
    
    oField1 = oDestinationo1;
    oField2 = oDestinationo2;
    oField3 = oDestinationo3;
    oField4 = oDestinationo4;
	oField5 = oDestinationo5;

    secusupeposi= window.open("/btcjerpWeb/jsp/co/cho_secusupeposi/Mai_SecuSupePosi_Frm.jsp", "secusupeposi", "resizable=yes,dependent=yes,scrollbars=yes,left=90,top=45,width=" + screen.width * .83 + ",height=" + screen.height * .85);
    secusupeposi.focus();
}
//选择隐患联系单记录2
//参数: 隐患联系单ID、隐患联系单编号、下达日期、整改单位ID、整改单位名称
//接收 session 名为  s_supeposi _filt  的 session 的值(String型) ，作为初始过滤条件.   
function OpenSecuSupePosi2(oDestinationo1,oDestinationo2,oDestinationo3,oDestinationo4,oDestinationo5){ 
    trouorgaid=window.document.forms[0].trouorgaid.value;
    oField1 = oDestinationo1;
    oField2 = oDestinationo2;
    oField3 = oDestinationo3;
    oField4 = oDestinationo4;
	oField5 = oDestinationo5;
    secusupeposi= window.open("/btcjerpWeb/jsp/co/cho_secusupeposi/Mai_SecuSupePosi_Frm.jsp?orgaid="+trouorgaid, "secusupeposi", "resizable=yes,dependent=yes,scrollbars=yes,left=90,top=45,width=" + screen.width * .83 + ",height=" + screen.height * .85);
    secusupeposi.focus();
}
//选择用户个人存储信息
//参数:返回的字符串;
//接收 session 名为 s_saferectype_filt 的 session 的值(String型) ，作为初始过滤条件. （必输项）eg:mess.setAttribute("s_saferectype_filt","1"); 
//接收 session 名为 s_saferecid_filt 的 session 的值(String型) ，作为初始过滤条件.   （必输项）eg:mess.setAttribute("s_saferecid_filt","2"); 
function OpenSafePubMess(oDestinationo1){
    oField1 = oDestinationo1;
    safepubmess= window.open("/btcjerpWeb/cho_safepubmess?ACTION=sel", "safepubmess", "resizable=yes,dependent=yes,scrollbars=yes,left=90,top=45,width=" + screen.width * .83 + ",height=" + screen.height * .85);
    safepubmess.focus();
}

//安全隐患详细浏览
function ObkSecuTrouble(secutroubleid){
    url="/btcjerpWeb/jsp/co/Obk_SecuTrouble/Obk_SecuTrouble.jsp?secutroubleid="+secutroubleid
    normalwin_Q(url,700,300)
}
//显示安全隐患审阅意见
function Show_ShenYue(secutroubleid){
    url="/btcjerpWeb/jsp/co/Show_ShenYue/Mai_ShowSecuInfo_Frm.jsp?secutroubleid="+secutroubleid
    normalwin_Q(url,700,300)
}

//显示三违记录详细信息
function Obk_Pecc(peccpersrecid){
    url="/btcjerpWeb/jsp/co/Obk_Pecc/Obk_Pecc.jsp?peccpersrecid="+peccpersrecid
    normalwin_Q(url,700,300)
}

//显示伤亡事故详细信息
function Obk_CasuAcci(casuacciid){
    url="/btcjerpWeb/jsp/co/obk_casuacci/Obk_CasuAcci.jsp?casuacciid="+casuacciid
    normalwin_Q(url,700,300)
}

//显示伤亡人员列表信息
function Obr_EmpDise(casuacciid){
    url="/btcjerpWeb/jsp/co/obr_empdise/Obr_EmpDise.jsp?casuacciid="+casuacciid
    normalwin_Q(url,700,300)
}

//显示非伤亡事故详细信息
function Obk_CasuLessAcci(casulessacciid){
    url="/btcjerpWeb/jsp/co/obk_casuacciless/Obk_CasuAcciLess.jsp?casuaccilessid="+casulessacciid
    normalwin_Q(url,700,300)
}
//显示安全培训班记录信息
function Show_TrainClass(trainclassid){
    url="/btcjerpWeb/jsp/co/bo/sel_sitrainclass/Sel_SiTrainClass_Frm.jsp?trainclassid="+trainclassid;        
    normalwin_Q(url,700,300)
}
//显示挂摘牌信息
function Show_StopworkBrand(stopworkbrandid){
    url="/btcjerpWeb/Sel_ObkStopworkBrandForm?stopworkbrandid="+stopworkbrandid;        
    normalwin_Q(url,700,300)
}


 