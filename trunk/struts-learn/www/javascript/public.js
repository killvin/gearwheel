//�������룬�����ƶ�С��λ��   
  function Round(a_Num , a_Bit) 
  { 
   return( Math.round(a_Num * Math.pow (10 , a_Bit)) / Math.pow(10 , a_Bit)) ; 
  } 
     
 function stopError() {
            return true;
          }

//  window.onerror = stopError;
// document.oncontextmenu=function(){return false};
//ѡ�����ں�����������̩��Ŀ��
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

//���ε����ܵ���ҳ�汻����ˢ�µļ��̲���
// ��ҳ����� <body onkeydown="KeyDown()" 

function KeyDown(){ 
   if ((window.event.altKey)&&((window.event.keyCode==37)|| //���� Alt+ ����� ��
      (window.event.keyCode==39))){ //���� Alt+ ����� ��
      //alert("��׼��ʹ��ALT+�����ǰ���������ҳ��");
      event.returnValue=false;
   }

   if ((event.keyCode==8) || //�����˸�ɾ����
      (event.keyCode==116)|| //���� F5 ˢ�¼�
      (event.keyCode==117)|| //���� F6 ˢ�¼�
      (event.keyCode==118)|| //���� F7 ˢ�¼�
      (event.keyCode==119)|| //���� F8 ˢ�¼�
      (event.keyCode==120)|| //���� F9 ˢ�¼�
      (event.ctrlKey && event.keyCode==82)){ //Ctrl + R
      event.keyCode=0;
      event.returnValue=false;
   }

   if ((event.ctrlKey)&&(event.keyCode==78)) //���� Ctrl+n
      event.returnValue=false;

   if ((event.shiftKey)&&(event.keyCode==121)) //���� shift+F10
      event.returnValue=false;

   if (window.event.srcElement.tagName == "A" && window.event.shiftKey) 
      window.event.returnValue = false; //���� shift ���������¿�һ��ҳ

   if ((window.event.altKey)&&(window.event.keyCode==115)){ //����Alt+F4
      window.showModelessDialog("about:blank","","dialogWidth:1px;dialogheight:1px");
      return false;
   }
}


/*  ȫ�ֹ��ñ��� */
    var sys_maxyear = 2100;
    var sys_minyear = 1900;

	var F_YEAR = 0;
    var F_MONTH = 1;
    var F_DATE = 2;
    var F_HOUR = 3;
    var F_MINUTE = 4;
    var F_SECOND = 5;

/*  ҳ����ʾ������ݹ���  */

//	����˵�� 
//	���ڱ��̬�������ʾ����
//	���ڹ��ù��ܺ���
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

//  ����˵��
//  ��ʼĬ��ѡ����
//  ���ڹ��ù��ܺ���
	function defaultSelect(i)
	{
		eval("sub"+i+".className = 'selectedtr'");
		eval("oldObj=sub"+i);
	}

//  ����˵��
//  ���ڵ���ά������ҳ�����һ��ҳ�������ˢ��
//  ���ڵ����ܺ���
	function detail_fresh(url)
	{
		window.parent.frames[1].location = url;
	}

//  ����˵��
//  ���ڵ���ά������ҳ�����һ��ҳ�������ˢ��
//  ���ڵ����ܺ���
	function detail_fresh_key(url, key)
	{
		if(key!=null)
		{
			window.parent.frames[1].location = url;
		}
	}

//	����˵��
//	�������ӱ�ά������ҳ��
//	�������ӱ��ܺ��� �μ��ͻ�����ά��ģ��
	function parent_detail_fresh(url)
	{
		window.frames[1].location = url;
	}

//  ����˵��
//  ���ڵ���ά������ҳ�������������ύ
//  ���ڵ����ܺ���
	function submit_detial(action)
	{
		document.forms[0].action = action;
		document.forms[0].target = window.parent.frames[0].name;
		document.forms[0].submit();
	}

//	����˵��
//	�ύ��
//	���ڹ��ù��ܺ���

//  ���ߣ��ѽ�
//  ���ڣ�2001-11-25
//  ��ע������1Ϊ�ύURL,����2Ϊ�ύĿ����

	function submit_form(action, target)
	{
		document.forms[0].action = action;
		document.forms[0].target = target;
		document.forms[0].submit();
	}

//	����˵��
//	�ύ��
//	���ڹ��ù��ܺ���

//  ���ߣ��ѽ�
//  ���ڣ�2001-11-25
//  ��ע������1Ϊ�ύĿ����

	function submit_form_no_action(target)
	{
		document.forms[0].target = target;
		document.forms[0].submit();
	}


//  ����˵��
//  ���ڵ���ģ��ļ�¼ɾ������
//  �Լ�����ģ��������¼ɾ������
	function delRecord(url)
	{
		if(confirm("ȷ��Ҫɾ��������¼��"))
		{
			window.parent.frames[0].location = url;
		}
	}
	function delSubRecord(url)
	{
		if(confirm("ȷ��Ҫɾ��������¼��"))
		{
			window.parent.frames[1].location = url;
		}
	}

//  ����˵��
//  ���ڵ���ģ��ļ�¼��ʾ��˹���
    function valRecord(url)
	{
		if(confirm("ȷ��Ҫ���������¼��"))
		{
			window.parent.frames[0].location = url;
		}
	}

//  ����˵��  
//  ������ʾ�û�ָ����ͬ��Ϣ��ȷ����Ϣ��ת��ָ��ҳ��
    function confirmMessage(message, url)
	{
		if(confirm(message))
		{
			window.parent.frames[0].location = url;
		}
	}

//  ����˵��  
//  ������ʾ�û�ָ����ͬ��Ϣ��ȷ����Ϣ��ת��ָ��ҳ��
    function confirmSubMessage(message, url)
	{
		if(confirm(message))
		{
			window.parent.frames[1].location = url;
		}
	}


//	����˵��
//	��������ģ��ӱ��¼��ɾ������
    function delDetail(url)
	{
		if(confirm("ȷ��Ҫɾ��������¼��"))
		{
			window.location = url;
    	}
	}

//  ����˵��
//  ����ҳ��select
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

//	����˵��
//	ѡ�������б��к͸���ֵ��ͬ��ѡ��
//	���ڹ��ù��ܺ���

//  ���ߣ��ѽ�
//  ���ڣ�2001-11-10
//  ��ע������1Ϊ�����б���󣬲�����Ϊ�Ƚ�ֵ
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

//	����˵��
//	ѡ��ѡ���к͸���ֵ��ͬ��ѡ��
//	���ڹ��ù��ܺ���

//  ���ߣ��ѽ�
//  ���ڣ�2001-11-10
//  ��ע������1Ϊ��ѡ����󣬲�����Ϊ�Ƚ�ֵ

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


//	����˵��
//	ѡ���������ֵ���ı���
//	���ڹ��ù��ܺ���

//  ���ߣ��ѽ�
//  ���ڣ�2001-11-10
//  ��ע��
    function choice(form_name,text_name,select_name)
    {
		eval('document.'+form_name.name+'.'+text_name.name+'.value='+'document.'+form_name.name+'.'+select_name.name+'.value')
    }

//	����˵��
//	���ڱȽ��б�ֵ��һ����ֵ
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

// �ͽ����
	function sendRecord(url)
	{
		if(confirm("Ҫ����ü�¼��"))
		{
			window.parent.frames[0].location = url
		}
	}

//	����˵�� 
//	�������޸���ɺ󣬹ر���ʾ���ڣ���ˢ������ҳ��
//	���ڹ��ù��ܺ���
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

//	����˵�� 
//	�������޸���ɺ󣬹ر���ʾ���ڣ���ˢ������ҳ��
//	���ڹ��ù��ܺ���

//  ���ߣ��ѽ�
//  ���ڣ�2001-10-27
//  ��ע���޸�closeWindow������ɾ�����������󡢲��������ҳ���ܽ�������
	function closeWindow_A(url)
	{
		var start="startIndex=";
		var urlstr = new String(url);

        // ȡ��ǰ����ܸ�Ҫ���ҳ���ҳ�����ֵ 
		var current = opener.parent.frames[0].current;
        if( (current == null) || (current == "") )
    	{
			current = 0;
		}

        // �����Դ��λ�ַ�����û�У����������startIndex����
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

//	�������޸���ɺ󣬹ر���ʾ���ڣ���ˢ�´ӱ�ҳ��
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

//	����˵�� 
//	�������޸���ɺ󣬹ر���ʾ���ڣ���ˢ������ҳ��
//	���ڹ��ù��ܺ���

//  ���ߣ��ѽ�
//  ���ڣ�2001-10-27
//  ��ע���޸�closeWindow������ɾ�����������󡢲��������ҳ���ܽ�������
	function closeSubWindow_A(url)
	{
		var start="startIndex=";
		var urlstr = new String(url);

        // ȡ��ǰ����ܸ�Ҫ���ҳ���ҳ�����ֵ 
		var current = opener.parent.frames[1].current;
        if( (current == null) || (current == "") )
    	{
			current = 0;
		}

        // �����Դ��λ�ַ�����û�У����������startIndex����
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

//	����˵�� 
//	�������޸���ɺ󣬹ر���ʾ���ڣ���ˢ������ҳ��
//	���ڹ��ù��ܺ���

//  ���ߣ��ѽ�
//  ���ڣ�2001-10-27
//  ��ע���������Ӵ���Ϊ��֡�ṹ�����Ӵ��ڵ��Ӵ����йرգ���ˢ���Ӵ��ڵĸ����ڵ��Ӵ���
//  ʾ����������ϵͳ���趨��ƿ�Ŀת��ϵͳ
	function closeSubParentWindow_A(url)
	{
		var start="startIndex=";
		var urlstr = new String(url);

        // ȡ��ǰ����ܸ�Ҫ���ҳ���ҳ�����ֵ 
		var current = window.parent.opener.parent.frames[1].current;
        if( (current == null) || (current == "") )
    	{
			current = 0;
		}

        // �����Դ��λ�ַ�����û�У����������startIndex����
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


//  �������ӱ���ά���ӱ�ʱά���Ķ���һ����������Ҫ��ͬ�Ĵ��ڹرպ���
	function detailClose()
	{
    	url = window.opener.location;
	    window.opener.location = url;
		window.close();
	}

//  �Ժ���Ϊ3����λ�����ַ����ĳ���
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

//  ���ͼ����ύ��
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
//  �����ڵ���ʽ�����б����ȷ�Ϻ��ύĿ���������ڣ� �����ѯ�������봰��
	function sel_form_submit()
	{
		window.document.forms[0].target = window.opener.parent.frames[0].name;
        window.document.forms[0].submit();
		window.close();
	}

//  �����ֱ���ύ��
    function form_nocheck_submit()
	{
		window.document.forms[0].submit();
	}

//  �����ֱ���ύ��,�������ڹر�
    function form_cnocheck_submit()
	{
		window.document.forms[0].submit();
		window.close();
	}

//  ��ȡ�������е��ֶ�ֵ�еĿո�
	function trimFormValue()
	{
		for(var i=0;i<window.document.forms[0].elements.length;i++)
		{
			window.document.forms[0].elements[i].value = trim(window.document.forms[0].elements[i].value);
		}
	}
// �ͽ����
	function sendRecord(url)
	{
		if(confirm("Ҫ����ü�¼��"))
		{
			window.parent.frames[0].location = url
		}
	}
	function sendSubRecord(url)
	{
		if(confirm("Ҫ����ü�¼��"))
		{
			window.parent.frames[1].location = url
		}
	}

	function audiRecord(url)
	{
		if(confirm("Ҫȷ�ϸü�¼��"))
		{
			window.parent.frames[0].location = url
		}
	}
	function audiSubRecord(url)
	{
		if(confirm("Ҫȷ�ϸü�¼��"))
		{
			window.parent.frames[1].location = url
		}
	}

//	����˵��
//	���������ַ���ȡ�ꡢ�¡���
//	���ڹ��ù��ܺ���

//  ���ߣ�����
//  �������ڣ�2001-11-10
//  �޸����ڣ�2002-01-04
//  ��ע���ѽ������������������жϣ����ڶ����жϡ�
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
				// �ж��Ƿ�����ֵ����Ϊ��
				if(!If_NotNull(window.document.forms[0].elements[i])&&(fieldnull[k] == "0"))
				{
					alert(fieldtitle[k]+"  ����Ϊ�գ�");
					return false;
				}

                // �ж��Ƿ�����ֵ���ȳ��� 
				if(If_NotNull(window.document.forms[0].elements[i])&&fieldtype[k]=="string"&&getlength(window.document.forms[0].elements[i].value) > fieldlength[k])
				{
					alert(fieldtitle[k]+"  ������(һ������ռ2����ĸλ)");
					return false;
				}

/*              ���ڹ���

                // �ж��Ƿ�����ֵ�������ڹ涨����  
				if(If_NotNull(window.document.forms[0].elements[i])&&fieldtype[k]=="string"&&getlength(window.document.forms[0].elements[i].value) < fieldlength[k]&&fieldconst[k]=="0")
				{
					alert(fieldtitle[k]+"  ���̣�");
					return false;
				}

*/				
				if(If_NotNull(window.document.forms[0].elements[i])&&fieldtype[k] == "date"&&!If_Date(window.document.forms[0].elements[i].value))
				{
					alert(fieldtitle[k]+"  �������ͣ�");
					return false;
				}

				if(If_NotNull(window.document.forms[0].elements[i])&&fieldtype[k] == "number"&&!If_Number(window.document.forms[0].elements[i].value))
				{
					alert(fieldtitle[k]+"  �������ͣ�");
					return false;
				}

				if(If_NotNull(window.document.forms[0].elements[i])&&fieldtype[k] == "integer"&&!If_Integer(window.document.forms[0].elements[i].value))
				{
					alert(fieldtitle[k]+"  �������ͣ�");
					return false;
				}

				if(If_NotNull(window.document.forms[0].elements[i])&&fieldtype[k] == "bool"&&window.document.forms[0].elements[i].value!="Y"&&window.document.forms[0].elements[i].value!="N")
				{
					alert(fieldtitle[k]+"  �ǲ����ͣ�");
					return false;
				}
			}
		}

		return true;
	}


//	����˵��
//	�ж��ַ��������Ƿ�Ϊ�Ϸ������ַ�
//	���ڹ��ù��ܺ���

//  ���ߣ�����
//  ���ڣ�2001-11-25
//  ��ע��
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

//	����˵��
//	�ж�����ֵ�Ƿ��Ǹ�����
//	���ڹ��ù��ܺ���

//  ���ߣ�����
//  ���ڣ�2001-11-25
//  ��ע��
	function If_Number(Input)
	{   
		var str=new String(Input);
		
		if(isNaN(str)) return false;	
		
    	return true;
	}

//	����˵��
//	�ж�����ֵ�Ƿ���������
//	���ڹ��ù��ܺ���

//  ���ߣ��ѽ�
//  ���ڣ�2002-01-04
//  ��ע��
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

//	����˵��
//	�ж�����ֵ�Ƿ���������
//	���ڹ��ù��ܺ���

//  ���ߣ�����
//  ���ڣ�2001-11-25
//  ��ע��

 	function If_Date(Input)
	{

 		var str=new String(trim(Input));
  	    
  	    var DateFormat = /^\d{4}-\d{1,2}-\d{1,2}$/;

	    if (DateFormat.test(str) == false) {
		    return false;
	    }
 		
        if (str.length<8) return false;
        
        //����У�����ڸ�ʽ���� 
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
            
            //����У������ ����
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

//	����˵��
//	�ж��ַ����Ƿ�Ϊ��
//	���ڹ��ù��ܺ���

//  ���ߣ��ѽ�
//  ���ڣ�2001-11-10
//  ��ע��
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


//	����˵�� 
//	����������ֵ�Լ���ֵ�ܳ���С��λ���ж�������ֵ�Ƿ��ڷ�Χ֮��
//	���ڹ��ù��ܺ���

//  ���ߣ��ѽ�
//  ���ڣ�2001-11-9
//  ��ע������0��ʾ����������1��ʾֵ������Χ������2��ʾС��λ����������-1��ʾ��ֵ��ʽ����
function checkFloatValue(value_in, size_in, size_in_d)
{
	/* value_in ����ֵ */
    /* size_in ����ֵ��λ�� */
    /* size_in_d ����ֵС��λ�� */
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
	/* value_in ����ֵ */
    /* size_in ����ֵ����λ�� */
    /* size_in_d ����ֵС��λ�� */
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

//	����˵��
//	���������ꡢ�¡��ա�Сʱ�����ӡ�����ֵ���жϸ�ֵ�Ƿ�Ϸ�
//	���ڹ��ù��ܺ���

//  ���ߣ��ѽ�
//  ���ڣ�2001-11-10
//  ��ע������0��ʾ������
//       ����1��ʾ��ݳ�����Χ������2��ʾ�·ݳ�����Χ������3��ʾ���ڳ�����Χ,
//       ����4��ʾСʱ������Χ������5��ʾ���ӳ�����Χ������6��ʾ����������Χ��
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

//	����˵��
//	���������ꡢ�¼�鵱���������
//	���ڹ��ù��ܺ���

//  ���ߣ��ѽ�
//  ���ڣ�2001-11-10
//  ��ע������ֵΪ�������
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

//	����˵��
//	����������ݼ�鵱���Ƿ�������
//	���ڹ��ù��ܺ���

//  ���ߣ��ѽ�
//  ���ڣ�2001-11-10
//  ��ע������ֵΪ0��ʾΪ����
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

//	����˵��
//	��������ʱ���麯�����ش���״̬����ʾ��Ӧ��ʾ��Ϣ
//	���ڹ��ù��ܺ���

//  ���ߣ��ѽ�
//  ���ڣ�2001-11-10
//  ��ע��
function showStatus(status_in, fieldname)
{
    switch(status_in)
    {
        case 1:
        { 
            alert(fieldname + "��ݴ������飡"); break;
        }
        case 2:
        { 
            alert(fieldname + "�·ݴ������飡"); break;
        }
        case 3:
        { 
            alert(fieldname + "���ڴ������飡"); break;
        }
        case 4:
        { 
            alert(fieldname + "Сʱ�������飡"); break;
        }
        case 5:
        { 
            alert(fieldname + "���Ӵ������飡"); break;
        }
        case 6:
        { 
            alert(fieldname + "�����������飡"); break;
        }
    }
}

//	����˵��
//	��������ʱ�������ַ���
//	���ڹ��ù��ܺ���

//  ���ߣ��ѽ�
//  ���ڣ�2001-11-10
//  ��ע��
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


//	����˵��
//	���������ַ����Ƚ��������ڴ�С�������һ�����ڴ��ڵڶ������ڣ������棬����Ϊ��
//	���ڹ��ù��ܺ���

//  ���ߣ����Ǿ����ѽ�
//  ���ڣ�2001-11-10
//  ��ע��
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


//	����˵��
//	���������ַ����Ƚ�����ʱ���С�������һ��ʱ����ڵڶ���ʱ�䣬�����棬����Ϊ��
//	���ڹ��ù��ܺ���

//  ���ߣ����Ǿ����ѽ�
//  ���ڣ�2001-11-10
//  ��ע��
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


//	����˵��
//	���������ַ���ȡ�ꡢ�¡���
//	���ڹ��ù��ܺ���

//  ���ߣ����Ǿ����ѽ�
//  ���ڣ�2001-11-10
//  ��ע��
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


/* ����ʹ�ü������ */
function checkdate(date)
{
	if ((date==null)||(date==''))
	{
		alert("����������������ȣ���ʽΪ��9999-99");
		return false;
	}
	else
	{
		var date_array = date.split("-");
		if (isNaN(date_array[0]))
		{
			alert("���Ӧ������λ���֣�");
			return false; 
		}
		else
		{
			if(parseInt(date_array[0])<sys_minyear)
			{
				alert("�������Ӧ����"+sys_minyear+"��");
				return false;
			} 

			if(parseInt(date_array[0])>sys_maxyear)
			{
				alert("�������ӦС��"+sys_maxyear+"��");
				return false;
			} 
		}
		
		if (date_array[1]==null)
	    {
			alert("����������������ȣ���ʽΪ��9999-99");
			return false;
		}
		else
		if (isNaN(date_array[1]))
		{
			alert("�·��������ͣ�");
			return false;
		}
		else
		{ 
			if ((parseInt(removeFirstZero(date_array[1]))<1)||(parseInt(removeFirstZero(date_array[1]))>12))
			{
				alert("�·�Ӧ����1~12��");
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
//   ����ѡ����
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

//����Ϊѡ�������豸����(��ѡ)
//���η�����
//��˳��Ϊ(��12��)������ID�����ʱ�š��������ơ��ͺš���������ͼ�š�������λ���ϼ����ʱ�š��ϼ���������,�ƻ��۸�,�ϼ����ʹ���ͺţ��ϼ�����������
//
//����Ҫ�Ĳ����ã�"" ����,ע�⴫��˳��Ҫһ��
//

//�Զ���������ţ�U001
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

//�Զ���������ţ�U002

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
//ѡ�������豸���
//�Զ���������ţ�U391
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

//�ɵ��� �Զ��巽��  m_click()
//�Զ���������ţ�U003
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

//�Զ���������ţ�U004
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



//�ɵ��� �Զ��巽��  m_click()
//                  ������޼ƻ��۸��򲻷���
//�Զ���������ţ�U005
 
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

//�Զ���������ţ�U006
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

//�Զ���������ţ�U007
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

//����Ϊѡ�����ʺ���( ������--- ��ѡ)
//���η�����
//��˳��Ϊ(��12��)������ID�����ʱ�š��������ơ��ͺš���������ͼ�š�������λ���ϼ����ʱ�š��ϼ���������,�ƻ��۸�,
//
//����Ҫ�Ĳ����ã�"" ����,ע�⴫��˳��Ҫһ��
//
//�Զ���������ţ�U008
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


//�Զ���������ţ�U009
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


//�Զ���������ţ�U010
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
//�Զ���������ţ�U385
//ֻѡ�����ʶ�������
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


// END ѡ�������豸����(��ѡ)


//����Ϊѡ�������豸����(��ѡ)
//
//�Զ���������ţ�U011
function OpenMaterialT() {
    Material = window.open("/btcjerpWeb/jsp/co/choimaterial/cho_materialM.jsp", "Material", "alwaysRaised,resizable=yes,dependent=yes,scrollbars=yes,left=160,top=100,width=" + screen.width * 0.78 + ",height=" + screen.height * .64);
    Material.focus();
}
// END ѡ�������豸����(��ѡ) 

//����Ϊѡ�����ʺ���( ������ --��ѡ)
//
//ѡ�������ѡ ���ػ�����ţ�syscode
//session  p_orga_tj
function OpenOrgaT(oDestination,oDestination1)
{
   oField1 = oDestination;
   oField2 = oDestination1;
   OrigT = window.open("/btcjerpWeb/jsp/co/choiorganew/cho_orga_frm.jsp", "OrigT", "alwaysRaised,resizable=yes,dependent=yes,scrollbars=yes,left=90,top=45,width=" + screen.width * .83 + ",height=" + screen.height * .85);
   OrigT.focus();
}

//


//�Զ���������ţ�U012
function OpenMatonlyT() {
    Material = window.open("/btcjerpWeb/jsp/co/choimatonly/cho_matonlyM.jsp", "Material", "alwaysRaised,resizable=yes,dependent=yes,scrollbars=yes,left=160,top=100,width=" + screen.width * 0.78 + ",height=" + screen.height * .64);
    Material.focus();
}

// END ѡ�����ʺ���(��ѡ) 


//����Ϊѡ����֯��������(������λ�������� ��ѡ)  ����ID��������ơ�����ȫ�ơ�������š���ϵ�绰����ַ������
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

//���η�����
//��˳��Ϊ������ID��������ơ�����ȫ�ơ�������š���ϵ�绰����ַ
//
//����Ҫ�Ĳ����ã�"" ����,ע�⴫��˳��Ҫһ��
//

//�����SESSION������Ϊ��p_orga_tj
//�Զ���������ţ�U013
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

//��˳��Ϊ������ID��������ơ�����ȫ�ơ�������š���ϵ�绰����ַ����λ���� �� sql�������

//��������һ������Ϊ ����SQL���
//�Զ���������ţ�U014
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

//ֻѡ�������λ
//�Զ���������ţ�U015
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

//ֻѡ�񱾵�λ�����¼���λ
//�Զ���������ţ�U016
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

//���η�����
//��˳��Ϊ������ID��������ơ�����ȫ�ơ�������š���ϵ�绰����ַ����λ����
//
//�Զ���������ţ�U017
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


//���η�����
//��˳��Ϊ������ID��������ơ�����ȫ�ơ�������š���ϵ�绰����ַ����λ���롢��Ӧ������λID����Ӧ������λ��š���Ӧ������λ���
//
//�Զ���������ţ�U018
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


//�Զ���������ţ�U019
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

// END --����ѡ��



//����Ϊѡ����Ա����(��ѡ)
//���η�����
//��˳��Ϊ(��8��)����ԱID����Ա��š���ȫ���롢��������ID���������ű�š������������ơ���Ա��������Ա�Ա�
//
//����Ҫ�Ĳ����ã�"" ����,ע�⴫��˳��Ҫһ��
//


//���������SESSION ����Ϊ: p_person_tj

//�Զ���������ţ�U020
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

//���������SESSION ����Ϊ: p_person_tjd

//�Զ���������ţ�U021
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

//��˳��Ϊ(��9��)����ԱID����Ա��š���ȫ���롢��������ID���������ű�š������������ơ���Ա��������Ա�Ա���Ա��λ����

//���������SESSION ����Ϊ: p_person_tj

//�Զ���������ţ�U022
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
//��˳��Ϊ����17�����ԱID����Ա��š���ȫ���롢��������ID���������ű�š������������ơ���Ա��������Ա�Ա���Ա��λ���롢ְ��ְ�ơ��Ļ��̶ȡ��������𡢲μӹ���ʱ�䡢�������ڡ���Ա���ࡢ����,��ϵ�绰

//�Զ���������ţ�U023
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

//�Զ���������ţ�U024
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
// END ѡ����Ա��������ѡ��



//����Ϊѡ������/�������(��ѡ)
//���η�����
//��˳��Ϊ��//
//����Ҫ�Ĳ����ã�"" ����,ע�⴫��˳��Ҫһ��
//
//�Զ���������ţ�U025
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

//�Զ���������ţ�U026
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

//�Զ���������ţ�U027
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

//����Ϊѡ�񹤳���Ŀ����(��ѡ)
//���η�����
//��˳��Ϊ������ID,���̱��룬�������ƣ����̲���ID
//����Ҫ�Ĳ����ã�"" ����,ע�⴫��˳��Ҫһ��
//
//�Զ���������ţ�U028
//function OpenProjD( oDestination1,oDestination2,oDestination3,oDestination4) {
  // oField1 = oDestination1;   oField2 = oDestination2;   oField3 = oDestination3;   oField4 = oDestination4;
  // Project = window.open("/btcjerpWeb/jsp/co/choiproject/Cho_Project.jsp", "Project", "scrollbars=yes,left=90,top=45,width=" + screen.width * .73 + ",height=" + screen.height * .78);
//   Project.focus();}

//�Զ���������ţ�U029
function OpenProjM() {
   oField1 = "projectid";
   oField2 = "projno";
   oField3 = "projname";
   oField4 = "projtypeid";
   Project = window.open("/btcjerpWeb/jsp/co/choiproject/Cho_Project.jsp", "Project", "scrollbars=yes,left=90,top=45,width=" + screen.width * .73 + ",height=" + screen.height * .78);
   Project.focus();
}


//�Զ���������ţ�U030
function OpenProjDD( oDestination1,oDestination2,oDestination3,oDestination4,oDestination5) {

   oField1 = oDestination1;
   oField2 = oDestination2;
   oField3 = oDestination3;
   oField4 = oDestination4;
   Project = window.open("/btcjerpWeb/jsp/co/choiproject/Cho_Project.jsp?nowsql="+oDestination5, "Project", "scrollbars=yes,left=90,top=45,width=" + screen.width * .73 + ",height=" + screen.height * .78);
   Project.focus();
}


//�Զ���������ţ�U030
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


//����Ϊѡ�����Ϣ����(��ѡ)
//���η�����
//��˳��Ϊ����ID,�󾮱��,�����ƣ���λ�ã�����������ID�������������ű�ţ����������������ƣ�
//����Ҫ�Ĳ����ã�"" ����,ע�⴫��˳��Ҫһ��
//
//�Զ���������ţ�U031
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


//�Զ���������ţ�U032
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
//����Ϊѡ�����к���(��ѡ)
//���η�����
//��˳��Ϊ������ID�����м�ơ�����ȫ�ơ����б�š���ϵ�绰����ַ
//
//����Ҫ�Ĳ����ã�"" ����,ע�⴫��˳��Ҫһ��
//
//�Զ���������ţ�U033
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

//�Զ���������ţ�U034
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
// END --����ѡ��


//����Ϊѡ�񹤳����ͺ���(��ѡ)
//���η�����
//��˳��Ϊ����������ID���������ͱ�ţ������������ơ�ú�ұ�֧����ʽ��������桢�������
//
//����Ҫ�Ĳ����ã�"" ����,ע�⴫��˳��Ҫһ��
//
//�Զ���������ţ�U035
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


//�Զ���������ţ�U036
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
// END --�������ѡ��

// ���ѡ��    ����  id,no,name,model,unit
//�Զ���������ţ�U037
function OpenFittingD(oDestination,oDestinationo1,oDestinationo2,oDestinationo3,oDestinationo4) {
    oField1 = oDestination;
    oField2 = oDestinationo1;
    oField3 = oDestinationo2;
    oField4 = oDestinationo3;
    oField5 = oDestinationo4;
    Material = window.open("/btcjerpWeb/jsp/co/choifit/cho_material_result.jsp", "Material", "resizable=yes,dependent=yes,scrollbars=yes,left=90,top=45,width=" + screen.width * .83 + ",height=" + screen.height * .85);
    Material.focus();
}


//end --���ѡ��

//�豸ѡ�� �����豸ID,�豸����,�豸����,�ͺ�ͼ��,��񣬼�����λ,�豸״̬,�ϼ��豸id��
//                1     2       3         4     5        6        7    8
//              �ϼ��豸����,�ϼ��豸����,�ʲ�������λID���ʲ�������λ����,�Ƿ������豸,syscode������������, �ƻ��۸��ϼ��豸���
//                9           10         11                12              13         14       15         16         17   
//����SESSION ���� p_equip_tj

//�Զ���������ţ�U070
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


//�豸ѡ�� ����id,no,name,model,unit,supno,supname
//�Զ���������ţ�U038
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


//ѡ�������豸 ����           �豸ID      �豸���,      �豸����,      ����ͺ�,         ��׼��λ,  ,�ƻ��۸�,       �Ƿ������豸
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


//ʹ�õ�ʱ�����ο� Cho_SessionEquipForm�е�session ��д����ллʹ�� ���е��Ƿ������豸�����ء����Բ�������ѡ�������豸��
//ѡ���豸��� ����           �豸ID      �豸���,      �豸����,      ����ͺ�,         ��׼��λ,  ,�ƻ��۸�,       �Ƿ������豸
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
//ѡ���豸 �����豸ID �豸���,�豸����,����ͺ�,��׼��λ,�ϼ�����,�ϼ�����,�ϼ�����ͺ�,�豸״̬,��������,�������,��������,��������,�涨ʹ������,�̶��ʲ���,�̶��ʲ�ԭֵ,�̶��ʲ��۾ɷ���,�豸����id,�ڲ����룬������λID,ʹ�õ�λID,""
//�Զ���������ţ�U039
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

//�豸ѡ�� ����
//id,no,name,model,unit,supno,supname,factory,supmodel,currentprice
//�Զ���������ţ�U040
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

//���û�мƻ��۸��򲻷���
//�Զ���������ţ�U041
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

//���� �Զ��巽��  m_click()
//�Զ���������ţ�U042
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
       
}//end �豸ѡ��


// �ⷿѡ��    ����  id,no,name,orgashortname
//�Զ���������ţ�U043
function OpenDepotD(oDestination,oDestinationo1,oDestinationo2,oDestinationo3) {
    oField1 = oDestination;
    oField2 = oDestinationo1;
    oField3 = oDestinationo2;
    oField4 = oDestinationo3;
    oField5 = '';
    Depot = window.open("/btcjerpWeb/jsp/co/choidepot/Cho_Depot.jsp", "Depot", "resizable=yes,dependent=yes,scrollbars=yes,left=90,top=45,width=" + screen.width * .83 + ",height=" + screen.height * .85);
    Depot.focus();
}
// �ⷿѡ��    ����  id,no,name,type ,address
//�Զ���������ţ�U043
function OpenDepotM(oDestination,oDestinationo1,oDestinationo2,oDestinationo3,oDestinationo4) {
    oField1 = oDestination;
    oField2 = oDestinationo1;
    oField3 = oDestinationo2;
    oField4 = oDestinationo3;
    oField5 = oDestinationo4;
    Depot = window.open("/btcjerpWeb/jsp/co/choidepot/Cho_Depot.jsp", "Depot", "resizable=yes,dependent=yes,scrollbars=yes,left=90,top=45,width=" + screen.width * .83 + ",height=" + screen.height * .85);
    Depot.focus();
}

//end --�ⷿѡ��

//����Ϊѡ��ɹ��ƻ�����(��ѡ)
//���η�����
//��˳��Ϊ���ɹ��ƻ�ID���ɹ��ƻ����롢�ƻ���ȡ��ƻ��¶ȡ��ƻ����
//
//����Ҫ�Ĳ����ã�"" ����,ע�⴫��˳��Ҫһ��
//
//�Զ���������ţ�U044
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

//�Զ���������ţ�U045
function OpenPurcM() {
   oField1 = 'PurcplanId';
   oField2 = 'Purcplanno';
   oField3 = 'Planyear';
   oField4 = 'Planmonth';
   oField5 = 'Plankind';
   Purc = window.open("/btcjerpWeb/jsp/co/choipurc/cho_seapurc.jsp", "Purc", "alwaysRaised,resizable=yes,dependent=yes,scrollbars=yes,left=90,top=45,width=" + screen.width * .83 + ",height=" + screen.height * .85);
   Purc.focus();
}
// END --�ɹ��ƻ�ѡ��

//����Ϊѡ����ⵥ����(��ѡ)
//���η�����
//��˳��Ϊ�����ⵥID�����ⵥ��š��ⷿID���ⷿ���ơ��������ڡ����ϵ�λID�����ϵ�λ���ơ�������ǡ��Ƶ�����
//
//����Ҫ�Ĳ����ã�"" ����,ע�⴫��˳��Ҫһ��
//
//�Զ���������ţ�U046
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


//�Զ���������ţ�U047
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
//U047:�ı���ⵥ����ʾ��ʽΪ��֡
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
// END --ѡ����ⵥ

//����Ϊѡ����ⵥ����(��ѡ)
//���η�����
//��˳��Ϊ����ⵥID����ⵥ��š��ⷿID���ⷿ���ơ�������ڡ���Ӧ��λID����Ӧ��λ���ơ�������ǡ��Ƶ�����
//
//����Ҫ�Ĳ����ã�"" ����,ע�⴫��˳��Ҫһ��
//
//�Զ���������ţ�U048
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

//�Զ���������ţ�U049
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
// END --ѡ����ⵥ

//Add by zhouyaowei 2002-12-19
//	����˵��
//	�������ӱ�ά������ҳ��
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

//ѡ��Ӧ��begin:id,no,name
//�Զ���������ţ�U050
function OpenProv(oDestination,oDestinationo1,oDestinationo2) {
    oField1 = oDestination;
    oField2 = oDestinationo1;
    oField3 = oDestinationo2;
    oField4 = "";
    oField5 = "";
    prov = window.open("/btcjerpWeb/jsp/co/choiprovider/cho_provider.jsp", "prov", "resizable=yes,dependent=yes,scrollbars=yes,left=90,top=45,width=" + screen.width * .83 + ",height=" + screen.height * .85);
    prov.focus();
}
//ѡ��Ӧ��begin:id,no,name,��ϵ�� ��ַ
function OpenProvM(oDestination,oDestinationo1,oDestinationo2,oDestinationo3,oDestinationo4) {
    oField1 = oDestination;
    oField2 = oDestinationo1;
    oField3 = oDestinationo2;
    oField4 = oDestinationo3;
    oField5 = oDestinationo4;
    prov = window.open("/btcjerpWeb/jsp/co/choiprovider/cho_provider.jsp", "prov", "resizable=yes,dependent=yes,scrollbars=yes,left=90,top=45,width=" + screen.width * .83 + ",height=" + screen.height * .85);
    prov.focus();
}
//ѡ��Ӧ��begin:id,no,name,��ϵ�� ��ַ
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
//ѡ��Ӧ��end
//���ߣ����
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

//str0,str,posi,posi1: ���α�ʾ���ֶκ������ơ��ֶ�(����.value)���������ȳ��ȣ�С������
//���� ��� ���ܣ�У����Ƹ�����������Ϸ��� eg. telldot("�ƻ��۸�","2000.100",10,2)
 function telldot(str0,str,posi,posi1){
 
    var str1=trim_zn(str);
    if(str1.length==0){
    return true;
    }
	if(!If_Number(str1))
	{
	alert(str0+"�������ͣ�");
	  return false;
	}
      var position=str1.indexOf(".",0);
 if(position<0)
    {
           if(str1.length<=posi)
              return true;
         else
          {
            alert(str0+"����λ��������");
            return false;
          }
    }else
    {
	     if(position>posi)
	   {
              alert(str0+"����λ������!");
              return false;        
	   }       
        if((str1.length-position-1)>posi1) 
          {
             alert(str0+"С��λ������!");
           return false;
          }
    }
     return true;
  }
//str0,str,posi,posi1,max,min: ���α�ʾ���ֶκ������ơ��ֶ�(����.value)���������ȳ��ȣ�С������,���ֵ����Сֵ
//���� ��� ���ܣ�У����Ƹ�����������Ϸ��� eg. telldot("�ƻ��۸�","2000.100",10,2,20,-2)
 function tellnumber(str0,str,posi,posi1,max,min){
 
    var str1=trim_zn(str);
    if(str1.length==0){
    return true;
    }
	if(!If_Number(str1))
	{
	alert(str0+"�������ͣ�");
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
				alert(str0+"������Χ��");                     
				return false;
			  }
            if(str1.length>posi)
			  {
				alert(str0+"����λ��������");
            return false;
			}
          }
    }else
    {
	     if(position>posi)
	   {
              alert(str0+"����λ������!");
              return false;        
	   }       
        if((str1.length-position-1)>posi1) 
          {
             alert(str0+"С��λ������!");
           return false;
          }
    }
   
     if((parseFloat(str1)<parseFloat(min))||(parseFloat(str1)>parseFloat(max)))
     {
     alert(str0+"������Χ��");
            return false;
     }
     return true;    
     
  }
  //����С����У��
  //���ߣ����
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
   alert("������������");
   return "";
   }
}
//����֡ɾ����¼ʱʹ��

	function delRecordD(url)
	{
		if(confirm("ȷ��Ҫɾ��������¼��"))
		{
			window.parent.frames[1].location = url;
		}
	}

//

//����Ϊѡ������������ƻ�����(��ѡ)
//���η�����
//��˳��Ϊ������������ƻ�ID������������ƻ����롢�ƻ���ȡ��ƻ��¶�,����ID,��������
//
//����Ҫ�Ĳ����ã�"" ����,ע�⴫��˳��Ҫһ��
//
//�Զ���������ţ�U051
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

// END --����������ƻ�
//����Ϊѡ�����޺�ͬ����(��ѡ)
//���η�����
//��˳��Ϊ(14)����ͬ��š����޵�λ����źͼ�ƣ������ⵥλ����źͼ�ƣ�����ͬ���ࡢʹ�ù��̣���ź����ƣ���ʹ�õص㡢�ƶ��ˡ��ƶ����ڡ��ƶ����ţ���źͼ�ƣ�  
//
//����Ҫ�Ĳ����ã�"" ����,ע�⴫��˳��Ҫһ��
//
//�Զ���������ţ�U052
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

//����Ϊѡ�����ϵ���λ��ϸ����(��ѡ)
//���η�����
//��˳��Ϊ������ID�����ʱ�š��������ơ����α���,sql���
//
//����Ҫ�Ĳ����ã�"" ����,ע�⴫��˳��Ҫһ��
//
//�Զ���������ţ�U051
function OpenGroupNo( oDestination,oDestination1,oDestination2,oDestination3,oDestination4) {
   oField1 = oDestination;
   oField2 = oDestination1;
   oField3 = oDestination2;
   oField4 = oDestination3;
   oField5 = oDestination4;
   MonthMrp = window.open("/btcjerpWeb/jsp/co/choigroupno/cho_groupno.jsp?outbillno="+oField5, "MonthMrp", "alwaysRaised,resizable=yes,dependent=yes,scrollbars=yes,left=90,top=45,width=" + screen.width * .83 + ",height=" + screen.height * .85);
   MonthMrp.focus();
}

// END --���ϵ���λ��ϸ

 //���ʱ��
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

 //ʱ�����
 //У��ʱ�����������
  function datetime_combine(datetime_field,date_field,hour_field,minute_field,second_field,title){

   var flag_js=1;
   var datenull=0;
   var hournull=0;
   var minutenull=0;
   var secondnull=0;
   var msg="\""+title+"\""+"��";
   
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
          msg=msg+"  \"ʱ\"";
        if(minutenull==1)
          msg=msg+"  \"��\"";  
        if(secondnull==1)
          msg=msg+"  \"��\"";
        msg=msg+"δ����ֵ���Ƿ�ȡ0ֵ��";
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
       alert(title+"������δ���롣");
       return (0)
     }else{
      alert("\""+title+"\""+"��������ȷʱ���ʽ��"+"\n"+"\n"+"ʱ��0��23֮�������"+"\n"+"�֣�0��59֮�������"+"\n"+"�룺0��59֮�������");
      return (0)
     }//       
    }
 } 
//�Զ���������ţ�U382
//�ɵ����Զ����m_click()���� ��m_click()��������alert("dsf") ����
//ѡ���������� id,���,����,����ͺ�,��׼��λ,����,����,��������,ͼ��,��λ����,ABC����,�ڲ�����,�ɹ�����,��Ч��,�ϼ����ʱ���,�ϼ���������,�ϼ����ʹ���ͺ�,�ϼ����ʼ�����λ,�ϼ���������,�ƻ��۸�,���ʴ������,���ʴ�������,���ʴ���id
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
//�Զ���������ţ�u383

//ʹ��ʱ������ѹ��session p_auth_tj eg: session.setAttribute("p_auth_tj","depotid:3") ���� session.setAttribute("p_auth_tj","erpuserid:3") ���� session.setAttribute("p_auth_tj","erpuserid:3,5")������������ֵ�ı�ʾΪ���������Ĳ���
//�ʺ�matesortid ���� �ⷿ�洢���� ���뺬��m_click()����
//ѡ���������� id,���,����,����ͺ�,��׼��λ,����,����,��������,ͼ��,��λ����,ABC����,�ڲ�����,�ɹ�����,��Ч��,�ϼ����ʱ���,�ϼ���������,�ϼ����ʹ���ͺ�,�ϼ����ʼ�����λ,�ϼ���������,�ƻ��۸�,���ʴ������,���ʴ�������,���ʴ���id
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
//��λѡ��  depotareaid,depotnomdepotname,depotareano,depotareaname
function OpenDepotArea(oDestination,oDestinationo1,oDestinationo2,oDestinationo3,oDestinationo4) {
    oField1 =  oDestination;
    oField2 =  oDestinationo1;
    oField3 =  oDestinationo2;
    oField4 =  oDestinationo3;
    oField5 =  oDestinationo4; 
    Material = window.open("/btcjerpWeb/jsp/co/choidepotarea/Sel_ChoDptArea_Frm.jsp", "dptarea", "resizable=yes,dependent=yes,scrollbars=yes,left=90,top=45,width=" + screen.width * .83 + ",height=" + screen.height * .85);
    Material.focus();
} 

//������������
//�а�
//����Ϊ��ͬ����ѡ����(��ѡ)
//���η�����
//��˳��Ϊ(13)�����޺�ͬ��ϸID���豸���롢�豸���ơ�����ͺš�������λ�����޺�ͬ��š����޵�λ��š����޵�λ��ơ����ⵥλ��š����ⵥλ��ơ�ʹ�õ�λ��š�ʹ�õ�λ��ơ�ʹ�ù��̱�š�ʹ�ù�������
//����Ҫ�Ĳ����ã�"" ����,ע�⴫��˳��Ҫһ��
//
//�Զ���������ţ�

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

//  END ����������
//ѡ��ά�޳��̵���: ά�޳��̱���SERVNO��ά�޳��̼��SERVSNAME��ά�޳���ȫ��SERVTNAME��ά�޳���IDSERVID
//���ߣ��а�
function OpenServM(oDestination,oDestinationo1,oDestinationo2,oDestinationo3) {
    oField1 = oDestination;
    oField2 = oDestinationo1;
    oField3 = oDestinationo2;
    oField4 = oDestinationo3;
    
    serv = window.open("/btcjerpWeb/jsp/co/choiservicearchives/cho_ser.jsp", "serv", "resizable=yes,dependent=yes,scrollbars=yes,left=90,top=45,width=" + screen.width * .83 + ",height=" + screen.height * .85);
    serv.focus();
}
//ѡ���豸�����豸�����㲿�� ( ��ѡ)
//���� ��id,no,name,model,unit,type,factory
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

//ѡ�񹤳���Ŀ�� ����projectid,projno,projname,orgashortname,projecttypeid,orgashortname,exeorganame,worksite,projprincipal,secuprincipal,techprincipal,planstartdate,planfinishdate,startdateinfact,finishidateinfact,facelanewayname,planproducecoal, plangrubcapacity,plancapacity,chargeclass,orgaid,exeorgaid,facelanewayid
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



//ѡ�񹤳���Ŀ�� ����projectid,projno,projname,orgashortname,projecttypeid,orgashortname,exeorganame,worksite,projprincipal,secuprincipal,techprincipal,planstartdate,planfinishdate,startdateinfact,finishidateinfact,facelanewayname,planproducecoal, plangrubcapacity,plancapacity,chargeclass,orgaid,exeorgaid,facelanewayid
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


//ѡ�񹤳���Ŀ�� ����projectid,projno,projname,projecttypeid

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
// ��������ѡ��    ����  id,no,name
//�Զ���������ţ�U081
function OpenElecSort(oDestination,oDestinationo1,oDestinationo2) {
    oField1 = oDestination;
    oField2 = oDestinationo1;
    oField3 = oDestinationo2;
    ElecCostItem = window.open("/btcjerpWeb/jsp/co/choielecsort/Cho_elecSort.jsp", "ElecSort", "resizable=yes,dependent=yes,scrollbars=yes,left=120,top=100,width=" + screen.width * .60 + ",height=" + screen.height * .60);
    ElecSort.focus();
} 
//ѡ���豸 ����               �豸ID       �豸���,      �豸����,          ����ͺ�,      ��׼��λ,       ʹ�õ�λ,     ʹ�õص�,    �ϼ�����ͺ�,      �豸״̬,       ��������,        �������,      ��������,         ��������,   �涨ʹ������,       �̶��ʲ���,    �̶��ʲ�ԭֵ,�̶��ʲ��۾ɷ���,   �豸����id,     �ڲ����룬     ������λID,     ʹ�õ�λID,       ""
//�Զ���������ţ�U387
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

//�Զ���������ţ�U382
//�ɵ����Զ����m_click()���� ��m_click()��������alert("dsf") ����
//ѡ���������� id,���,����,����ͺ�,��׼��λ,����,����,��������,ͼ��,��λ����,ABC����,�ڲ�����,�ɹ�����,��Ч��,�ϼ����ʱ���,�ϼ���������,�ϼ����ʹ���ͺ�,�ϼ����ʼ�����λ,�ϼ���������,�ƻ��۸�,���ʴ������,���ʴ�������,���ʴ���id
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

//�û��ֹܡ��ⷿ�洢��ĳ������������������ ѡ�� ����id,no,name,model,unit,drawingno,factory, type���������������ã� 
//��ʹ�õ�ʱ����� ���� session  �μ� openOptionMat �ĸ�ʽ
//�Զ���������ţ�U038
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
//�û��ֹܡ��ⷿ�洢��ĳ������������豸��� ѡ�� ����id,no,name,model,unit,drawingno,factory, type,groupmanage,unifyprince���������������ã� 
//��ʹ�õ�ʱ����� ���� session  �μ� openOptionMat �ĸ�ʽ
//�Զ���������ţ�U038
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

//ѡ���������� id,���,����,����ͺ�,��׼��λ,����,����,��������,ͼ��,��λ����,ABC����,�ڲ�����,�ɹ�����,��Ч��,�ϼ����ʱ���,�ϼ���������,�ϼ����ʹ���ͺ�,�ϼ����ʼ�����λ,�ϼ���������,�ƻ��۸�,�ϼ�����ID,���ID(�������)
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

//ѡ���������� id,���,����,����ͺ�,��׼��λ,����,����,��������,ͼ��,��λ����,ABC����,�ڲ�����,�ɹ�����,��Ч��,�ϼ����ʱ���,�ϼ���������,�ϼ����ʹ���ͺ�,�ϼ����ʼ�����λ,�ϼ���������,�ƻ��۸�,�ϼ�����ID,���ID(�������)
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



//ѡ����� 
//�����豸ID �豸���,�豸����,����ͺ�,��׼��λ,
//      �ϼ�����,�ϼ�����,�ϼ�����ͺ�,�豸״̬,
//      ��������,�������,��������,��������,�涨ʹ������,�̶��ʲ���,
//      �̶��ʲ�ԭֵ,�̶��ʲ��۾ɷ���,�豸����id,�ڲ����룬
//      ������λID,ʹ�õ�λID,usesite,DRAWINGNO,materialType

//(String) msess.getAttribute("p_SheiBeiAndPeiJian_tj"); //��������ѡ��
//(String) msess.getAttribute("SheBeiBianHao"); //�豸��ţ����봫�룩

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





//ѡ�����
//̷˧
//2003-09-16 
//�����豸ID �豸���,�豸����,����ͺ�,��׼��λ,
//      �ϼ�����,�ϼ�����,�ϼ�����ͺ�,�豸״̬,
//      ��������,�������,��������,��������,�涨ʹ������,�̶��ʲ���,
//      �̶��ʲ�ԭֵ,�̶��ʲ��۾ɷ���,�豸����id,�ڲ����룬
//      ������λID,ʹ�õ�λID,usesite,DRAWINGNO,materialType

//(String) msess.getAttribute("p_SheiBAndPeiJForS_tj"); //��������ѡ��
//(String) msess.getAttribute("SheBeiBianHaoForS"); //�豸��ţ����봫�룩

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


//ѡ�����
//̷˧
//2003-09-16 
//�����豸ID �豸���,�豸����,����ͺ�,��׼��λ,
//      �ϼ�����,�ϼ�����,�ϼ�����ͺ�,�豸״̬,
//      ��������,�������,��������,��������,�涨ʹ������,�̶��ʲ���,
//      �̶��ʲ�ԭֵ,�̶��ʲ��۾ɷ���,�豸����id,�ڲ����룬
//      ������λID,ʹ�õ�λID,usesite,DRAWINGNO,materialType

//(String) msess.getAttribute("p_SheiBAndPeiJForS_tj"); //��������ѡ��
//(String) msess.getAttribute("SheBeiBianHaoForS"); //�豸��ţ����봫�룩

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





//��������
// �������ơ���������ID
function FileUpLoad(oDestination,oDestinationo1) {
    normalwin_B("/btcjerpWeb/FileUpLoad?ACTION=obr&keyname="+oDestination+"&keyid="+oDestinationo1, 640,480);
}

//������ѯ������
// �������ơ���������ID
function FileUpLook(oDestination,oDestinationo1) {
    normalwin_B("/btcjerpWeb/FileUpLoad?ACTION=sea&keyname="+oDestination+"&keyid="+oDestinationo1, 640,480);
}
//ѡ�񹤳���Ŀ�� ����projectid,projno,projname,orgashortname,projecttypeid,orgashortname,exeorganame,worksite,projprincipal,secuprincipal,techprincipal,planstartdate,planfinishdate,startdateinfact,finishidateinfact,facelanewayname,planproducecoal, plangrubcapacity,plancapacity,chargeclass,orgaid,exeorgaid,facelanewayid
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
//new 2003.10.27 ����������Session:p_material_tj
//ѡ������New1           id,           ���,           ����,         ����ͺ�,      ����,        ��������,       ����ͼ��,       ������λ,       ��������,       �ڲ�����,       �ϼ����ʱ���,     �ƻ��۸�,       �ɹ����ͣ�      pinyin ,        �Ƿ��������� ,  ABC����,          ""   ,            ""
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
//����������Session:p_material_tj
//    ��Ӧ���� ��     materialid��materialno��materialname��     materialmodel��texure��  MaterialFactory�� DrawingNo��    MaterialUnit��   materialtype��materialsyscode��supMaterialNo��unifyprice��       purcSort��     pinyin��         isfinal��       abcclass��     ssuperName��     supermodel��   superfactory��       ''��             ''��
//ѡ������New2          id,           ���,           ����,         ����ͺ�,      ����,        ��������,       ����ͼ��,       ������λ,       ��������,       �ڲ�����,       �ϼ����ʱ���,     �ƻ��۸�,       �ɹ����ͣ�      pinyin ,        �Ƿ��������� ,  ABC����,          ""   ,            ""
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
//ɸѡ�ͻ�
//ѡ��ͻ���id,�ͻ����,�ͻ����,�ͻ�ȫ�ƣ��ͻ����𣬿ͻ���𣬸����������ͻ���𣬷��˴�����ֵ˰��)
//���ߣ���С��
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

//ѡ�������豸
//materialid,materialno,materialname,materialmodel,materialunit,
//supmaterialno,materialfactory,CURRENTPRICe,EPRECORDID,USESITE,
//EQUIPSTATUS,OUTFACTORYNO,FACTORY,OUTFACTORYDATE,GOODSLANDDATE,
//DEFINEUSEYEAR,ADDMAINTENCOST,ISFORCECHECK,CHECKCYCLE,FIXEDASSETSNO,
//ASSETSORIGVALUE,FIXEDASSETSDEPRMETH,FIXEDASSETSDEPRVALUE,ASSETSTOORGAID,INUSEPROJID,
//INUSEORGAID,INUSEORGANAME,MATERIALID_A,OMATERIALNO,ACCOUNTLOAD,
//DEPREDATE,DEPREUSEMONTH,ORIGDEPREVALUE,RESIDASSETSRATE,
//"",""
//session ���ƣ�p_equip_tj

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

//ѡ�������¹�: �¹�id���¹ʱ�š��¹ʵ�λID���¹ʵ�λ���ơ��¹�ʱ�䡢�¹ʰ�Ρ��¹ʵص�����¹����ʡ��¹�����
//       CasuAcciID,CasuAcciNo,AcciDeptID,AcciDeptName,AcciTime,AcciShift,AcciSiteClass,AcciKind,AcciType
//ע�⣺ɸѡҳ�����ѹsessionֵ,�÷���test.jspʾ��
//���ߣ���ѩƼ
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

//ѡ�񼲲�����: ������������,��������id,������������,����id,��������,��������,�Ƿ�Ϊְҵ��,�Ƿ�Ϊ��Ⱦ�Լ���,����ICD��,״̬

//           diseTypeName,diseSortID,diseSortName,diseaseID,diseaseNo,diseaseName,occuDisease,infeDisease,diseaseIcd,zhuangtai
//session ���ƣ�zhuangtai,��zhuangtai="1",�û���Ȩ������������������zhuangtai="0"���û�������Ȩ�ޡ�
//ע�⣺ɸѡҳ�����ѹsessionֵ,�÷���test.jspʾ��
//���ߣ���ѩƼ
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

//ѡ��ȫ��������������Ŀ: ��Ŀid����Ŀ���ࡢ��Ŀ��š���Ŀ���ơ���ĿȨ��
//             safeevalitemID,itemStyle,itemNo,itemName,itemPower
//���ߣ���ѩƼ
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


//ѡ��ȫ��������������Ŀ��׼: ��Ŀ���ࡢ��ĿID����Ŀ��š���Ŀ���ơ���׼�֡���ĿȨ�ء�����׼
//  �ֶΣ�               itemStyle,SafeevalitemID,itemNo,itemName,standCent,itemPower��supeStandard
//���� session ��Ϊ s_safeevalitemdet_filt �� session ��ֵ(String��) ����Ϊ��ʼ��������
//ע�⣺ɸѡҳ�����ѹsessionֵ,�÷���test.jspʾ��
//���ߣ���ѩƼ
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


//ѡ��������׼��������Ŀ: ��Ŀid����Ŀ���ࡢ��Ŀ��š���Ŀ���ơ���鼰���ְ취
//             safequalitemid, itemstyle, itemno ,itemname��checkmoth
//���ߣ���ѩƼ
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


//ѡ��������׼�����ֱ�׼:��Ŀ���ࡢsafeQualItemDetID����Ŀ��š���Ŀ���ơ����С����ֱ�׼
//  �ֶΣ�             itemstyle,safequalitemdetid,itemno ,itemname, checkmoth
//���� session ��Ϊ s_safequalitemdet_filt �� session ��ֵ(String��) ����Ϊ��ʼ��������
//ע�⣺ɸѡҳ�����ѹsessionֵ,�÷���test.jspʾ��
//���ߣ���ѩƼ
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


//ѡ��ȫ��ص�: ��ȫ��ص�ID,��ȫ��ص���,��ȫ��ص�����,��ID������,���/����������ID,
//              ���/����������,������ĿID,������Ŀ����,��ص�λ��
//���� session ��Ϊ s_safepoint_filt �� session ��ֵ(String��) ����Ϊ��ʼ��������
//ע�⣺ɸѡҳ�����ѹsessionֵ,�÷���test.jspʾ��
//���ߣ���ѩƼ
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


//ѡ�����/�豸/����
//̷˧
//2003-12-23 
//�����豸ID �豸���,�豸����,����ͺ�,��׼��λ,
//      �ϼ�����,�ϼ�����,�ϼ�����ͺ�,�豸״̬,
//      ��������,�������,��������,��������,�涨ʹ������,�̶��ʲ���,
//      �̶��ʲ�ԭֵ,�̶��ʲ��۾ɷ���,�豸����id,�ڲ����룬
//      ������λID,ʹ�õ�λID,usesite,DRAWINGNO,materialType

//(String) msess.getAttribute("p_SheiBAndPeiJAndCaiL_tj"); //��������ѡ��
//(String) msess.getAttribute("SheiBAndPeiJAndCaiLNo"); //�豸��ţ����봫�룩
//(String) msess.getAttribute("LeiSheiBAndPeiJAndCaiLID"); //�豸ID�����봫�룩

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


//ѡ��ȫ��ѵ�ƻ�: ��ѵ�ƻ�ID�����쵥λID�����쵥λ���ơ���ѵ��ݡ��ƻ������ѵ�����ơ���ѵ��ʽ���ƻ���ʼ���ڡ��ƻ��������ڡ���������ѵ��������ѵ������ѵ�ص㡢��Ա�����ѵ���ݡ���ѵ������ѵ��ʱ
//�ֶ�(17)��        trainplanid, traindeptid, traindeptname, trainplanyear, trainplantype, trainplanname, trainplanmod, planbegindate, planstopdate, termno, trainnumb, trainobject,trainplace, userclass, trainplancont, trainplanlevel, trainplanhour
//���� session ��Ϊ s_trainplan_filt �� session ��ֵ(String��) ����Ϊ��ʼ��������
//ע�⣺ɸѡҳ�����ѹsessionֵ,�÷���test.jspʾ��
//���ߣ���ѩƼ
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

//ѡ��ȫ��ѵ��: ��ѵ��id����ѵ������ ����ѵ������ �����쵥λID�����쵥λ���� ����ʼ���� ���������� ����ѵ��ʽ����ѵ����
//            trainclassid,termno,classname,traindeptid,traindeptname,classbegindate,classstopdate,classstyle,userclass
//���� session ��Ϊ s_trainclass_filt �� session ��ֵ(String��) ����Ϊ��ʼ��������
//ע�⣺ɸѡҳ�����ѹsessionֵ,�÷���test.jspʾ��
//���ߣ���ѩƼ
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

//ѡ����Ա�뾮��¼:��ID,����������ID, ��������������,��������������,�󾮱��, ������, �¾���Ա���, �¾��˱���,�¾�������,�뾮�˰�ȫ����,�¾������ڲ���ID,�¾������ڲ�������,�¾�ʱ��,�Ͼ�ʱ��
//                wellinfoid, orgaid,  orgasyscode,    orgashortname,  wellno,  wellname,repopersclass,repopersno,repopersname,repoperscode,repopersdeptid,repopersdeptname,downwelltime,upwelltime
//���� session ��Ϊ s_downwell_filt �� session ��ֵ(String��) ����Ϊ��ʼ��������
//ע�⣺ɸѡҳ�����ѹsessionֵ,�÷���test.jspʾ��
//���ߣ���ѩƼ
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

//ѡ����Ա��Υ��¼:��Υ����������ID����Υ�������������ơ���Υ��ԱID��PeccPersRecID������Υ��Ա��������Υ��Ա��š�Υ�µص㡢��Υ��𡢴�����
//                peccdeptid,       peccdeptname,     peccpersrecid,              peccpersname,peccpersno, peccsite,peccsort,dealresult
//���� session ��Ϊ s_pecc_filt �� session ��ֵ(String��) ����Ϊ��ʼ��������
//ע�⣺ɸѡҳ�����ѹsessionֵ,�÷���test.jspʾ��
//���ߣ���ѩƼ
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


//ѡ���������:��ID,����������ID, ������������λsyscode,������ID,��������, ����������, ú�ұ�,����������,
//             wellinfoid ,orgaid,  orgasyscode,    facelanewayid,facelanewayno,facelanewayname,coalorrock,faceorlaneway
//���� session ��Ϊ s_facelaneway_filt �� session ��ֵ(String��) ����Ϊ��ʼ��������
//ע�⣺ɸѡҳ�����ѹsessionֵ,�÷���test.jspʾ��
//���ߣ���ѩƼ
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

//ѡ��ͨ����վ:���������ơ�������ID�����վID���ص㡢��š����������ʡ���𡢹�񡢲��ʡ��Ͳ�������������ڡ�������ڡ�ʩ��������
//wellname,wellinfoid,windsillrecid,buildplace,serino,pathnum, character ,sorttype, spec ,matequal,clearslot,builddate,remodate,consmanage      
//���� session ��Ϊ s_windsillrec_filt �� session ��ֵ(String��) ����Ϊ��ʼ��������
//ע�⣺ɸѡҳ�����ѹsessionֵ,�÷���test.jspʾ��
//���ߣ���ѩƼ
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


//ѡ�񹤳���Ŀ:���ع�����ĿID��������Ŀ���롢������Ŀ���ơ����̸����ˡ���ȫ�����ˡ����������ˡ��ƻ��������ڡ��ƻ��������ڡ�����״̬���ƻ����������ƻ����ڣ������գ����ƻ���ú�����ƻ�������ߣ��ף��������������ID��������������š���������������ơ�������λ�����̣����������������ID�����������������š������������������
//            projectid,projno,projname,projprincipal,secuprincipal,techprincipal,planstartdate,planfinishdate,projstates,plancapacity ,plantimelimit,planproducecoal,plangrubcapacity,projecttypeid,projecttypeno,projtype,projunit,facelanewayid,facelanewayno,facelanewayname
//���� session ��Ϊ s_project_filt �� session ��ֵ(String��) ����Ϊ��ʼ��������
//���ߣ���ѩƼ
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

//ѡ��ְ����ȫ����: ְ��ID�� ְ����š� ������  �Ա� ��������ID�� �����������ơ� ����ְ�� �������ڡ� ��Ա��� ����״̬�� �����̶ȡ�  ְ�ơ�   ���䡢 ���¹��䡢 ��ȫ���롢 �ù����ʡ�       ���䡢 �Ƿ�ͳ���뾮��¼�� ORGASYSCODE
//�ֶ�(17)��    emprecordid  empno  empname empsex   orgaid     orgashortname  empduty empbirthday emptype   empstitue empdegree emptitle   age    down     safecode workercharacter   job    totaldownwell     orgasyscode
//���� session ��Ϊ s_emprecord_filt �� session ��ֵ(String��) ����Ϊ��ʼ��������
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

//�ַ����� --> ��������
function dateTomilliSecond(date){

    var firstline = date.indexOf("-");
    var lastline = date.lastIndexOf("-");
    
    var year = parseInt(date.substr(0,firstline));
	var month = parseInt(date.substr(firstline+1,lastline - firstline - 1));
	var day = parseInt(date.substr(lastline + 1));
   
    var date_value = new Date(year,month,day,0,0,0,0);
    
    return parseInt(date_value.getTime());
	
}

//�������ɸѡ
//����:�������ID,����������,�����������,���̼�����λ;
//���� session ��Ϊ s_projecttype_filt �� session ��ֵ(String��) ����Ϊ��ʼ��������.   
//���ߣ�����
//2004-3-15
function OpenProjectType(oDestinationo1,oDestinationo2,oDestinationo3,oDestinationo4){
    oField1 = oDestinationo1;
    oField2 = oDestinationo2;
    oField3 = oDestinationo3;
    oField4 = oDestinationo4;
    projecttype= window.open("/btcjerpWeb/jsp/mm/commonsel/sel_projecttype/Sel_ProjectType_Frm.jsp", "projecttype", "resizable=yes,dependent=yes,scrollbars=yes,left=90,top=45,width=" + screen.width * .83 + ",height=" + screen.height * .85);
    projecttype.focus();
}

//����豸���üƻ�
//���ߣ�mb
//date 2004-06-17
//session���ƣ�pBean2_NDSBGZJH
function openyeppurcplan(yPurcPlanID){
	secucheckstateid = window.open("/btcjerpWeb/jsp/co/sel_yeppurcplan/Sel_fra.jsp?yPurcPlanID="+yPurcPlanID, "secucheckstateid", "resizable=yes,dependent=yes,scrollbars=yes,left=0,top=0,width=" + screen.width * 1 + ",height=" + screen.height * 1);
    secucheckstateid.focus();
}
//�豸�����ʽ�ƻ�
//���ߣ�mb
//date 2004-06-17
//session���ƣ�pBean2_SBGZZJJH
function openyfeppurcplan(yPurcFPlanID){
	secucheckstateid = window.open("/btcjerpWeb/jsp/co/sel_yfeppurcplan/Sel_fra.jsp?yPurcFPlanID="+yPurcFPlanID, "secucheckstateid", "resizable=yes,dependent=yes,scrollbars=yes,left=0,top=0,width=" + screen.width * 1 + ",height=" + screen.height * 1);
    secucheckstateid.focus();
}
//�¶��豸���üƻ�
//���ߣ�mb
//date 2004-06-17
//session���ƣ�pBean2_YDSBGZJH
function openmeppurcplan(monthEPPurcPlanID){
	secucheckstateid = window.open("/btcjerpWeb/jsp/co/sel_meppurcplan/Sel_fra.jsp?monthEPPurcPlanID="+monthEPPurcPlanID, "secucheckstateid", "resizable=yes,dependent=yes,scrollbars=yes,left=0,top=0,width=" + screen.width * 1 + ",height=" + screen.height * 1);
    secucheckstateid.focus();
}
//����豸ά�޼ƻ�
//���ߣ�mb
//date 2004-06-17
//session���ƣ�pBean2_NDSBWXJH
function openymendplan(YearEPMainPlanID){
	secucheckstateid = window.open("/btcjerpWeb/jsp/co/sel_ymendplan/Sel_fra.jsp?YearEPMainPlanID="+YearEPMainPlanID, "secucheckstateid", "resizable=yes,dependent=yes,scrollbars=yes,left=0,top=0,width=" + screen.width * 1 + ",height=" + screen.height * 1);
    secucheckstateid.focus();
}
//�¶��豸ά�޼ƻ�
//���ߣ�mb
//date 2004-06-17
//session���ƣ�pBean2_YDSBWXJH
function openmmendplan(monthEPMainPlanID){
	secucheckstateid = window.open("/btcjerpWeb/jsp/co/sel_mmendplan/Sel_fra.jsp?monthEPMainPlanID="+monthEPMainPlanID, "secucheckstateid", "resizable=yes,dependent=yes,scrollbars=yes,left=0,top=0,width=" + screen.width * 1 + ",height=" + screen.height * 1);
    secucheckstateid.focus();
}

//����豸ʹ�üƻ�
//���ߣ�ţ��
//date 2004-06-17
//session���ƣ�pBean2_NDSBSYJH
function openyuseplan(YearEPUsePlanID){
	secucheckstateid = window.open("/btcjerpWeb/jsp/co/sel_yuseplan/Sel_fra.jsp?YearEPUsePlanID="+YearEPUsePlanID, "secucheckstateid", "resizable=yes,dependent=yes,scrollbars=yes,left=0,top=0,width=" + screen.width * 1 + ",height=" + screen.height * 1);
    secucheckstateid.focus();
}

//�¶��豸ʹ�üƻ�
//���ߣ�ţ��
//date 2004-06-17
//session���ƣ�pBean2_YDSBSYJH
function openmuseplan(MonthEPUsePlanID){
	secucheckstateid = window.open("/btcjerpWeb/jsp/co/sel_museplan/Sel_fra.jsp?MonthEPUsePlanID="+MonthEPUsePlanID, "secucheckstateid", "resizable=yes,dependent=yes,scrollbars=yes,left=0,top=0,width=" + screen.width * 1 + ",height=" + screen.height * 1);
    secucheckstateid.focus();
}

//����豸���޼ƻ�
//���ߣ�ţ��
//date 2004-06-17
//session���ƣ�pBean2_NDSBZLJH
function openytenancyplan(TenancyPlanID){
	secucheckstateid = window.open("/btcjerpWeb/jsp/co/sel_ytenancyplan/Sel_fra.jsp?TenancyPlanID="+TenancyPlanID, "secucheckstateid", "resizable=yes,dependent=yes,scrollbars=yes,left=0,top=0,width=" + screen.width * 1 + ",height=" + screen.height * 1);
    secucheckstateid.focus();
}

//�¶��豸���޼ƻ�
//���ߣ�ţ��
//date 2004-06-17
//session���ƣ�pBean2_YDSBZLJH
function openmtenancyplan(MTenancyPlanID){
	secucheckstateid = window.open("/btcjerpWeb/jsp/co/sel_mtenancyplan/Sel_fra.jsp?MTenancyPlanID="+MTenancyPlanID, "secucheckstateid", "resizable=yes,dependent=yes,scrollbars=yes,left=0,top=0,width=" + screen.width * 1 + ",height=" + screen.height * 1);
    secucheckstateid.focus();
}

//�����޼�������
//���ߣ�ţ��
//date 2004-06-17
//session���ƣ�pBean2_DZXJDBG
function openmainjudge(EPMainJudgeID){
	secucheckstateid = window.open("/btcjerpWeb/jsp/co/sel_epmainjudge/Sel_fra.jsp?EPMainJudgeID="+EPMainJudgeID, "secucheckstateid", "resizable=yes,dependent=yes,scrollbars=yes,left=0,top=0,width=" + screen.width * 1 + ",height=" + screen.height * 1);
    secucheckstateid.focus();
}

//�������뵥
//���ߣ�ţ��
//date 2004-06-17
//session���ƣ�pBean2_LYSQD
function openequipapp(OutStockBillID){
	secucheckstateid = window.open("/btcjerpWeb/jsp/co/sel_equipapp/Sel_fra.jsp?OutStockBillID="+OutStockBillID, "secucheckstateid", "resizable=yes,dependent=yes,scrollbars=yes,left=0,top=0,width=" + screen.width * 1 + ",height=" + screen.height * 1);
    secucheckstateid.focus();
}

//�豸�������뵥
//���ߣ�ţ��
//date 2004-06-17
//session���ƣ�pBean2_SBCTSQD
function openepdisasembly(EpdisaID){
	secucheckstateid = window.open("/btcjerpWeb/jsp/co/sel_epdisasembly/Sel_fra.jsp?EpdisaID="+EpdisaID, "secucheckstateid", "resizable=yes,dependent=yes,scrollbars=yes,left=0,top=0,width=" + screen.width * 1 + ",height=" + screen.height * 1);
    secucheckstateid.focus();
}

//���޷��ý��㵥
//���ߣ�ţ��
//date 2004-06-17
//session���ƣ�pBean2_ZLFYJSD
function opentenacost(TenaCostSettleID){
	secucheckstateid = window.open("/btcjerpWeb/jsp/co/sel_tenacost/Sel_fra.jsp?TenaCostSettleID="+TenaCostSettleID, "secucheckstateid", "resizable=yes,dependent=yes,scrollbars=yes,left=0,top=0,width=" + screen.width * 1 + ",height=" + screen.height * 1);
    secucheckstateid.focus();
}

//������ý��㵥
//���ߣ�ţ��
//date 2004-06-17
//session���ƣ�pBean2_XLFYJSD
function opentendcost(EpmainCostSID){
	secucheckstateid = window.open("/btcjerpWeb/jsp/co/sel_tendcost/Sel_fra.jsp?EpmainCostSID="+EpmainCostSID, "secucheckstateid", "resizable=yes,dependent=yes,scrollbars=yes,left=0,top=0,width=" + screen.width * 1 + ",height=" + screen.height * 1);
    secucheckstateid.focus();
}

//�������뵥
//���ߣ�ţ��
//date 2004-06-17
//session���ƣ�pBean2_Order
function openepsale(OrderID){
	secucheckstateid = window.open("/btcjerpWeb/jsp/co/sel_epsale/Sel_fra.jsp?OrderID="+OrderID, "secucheckstateid", "resizable=yes,dependent=yes,scrollbars=yes,left=0,top=0,width=" + screen.width * 1 + ",height=" + screen.height * 1);
    secucheckstateid.focus();
}

//---------------------------------------------------

//˫�����
function opendbll(billid,lx)
{
if(lx=="zlht")secucheckstateid = window.open("/btcjerpWeb/jsp/co/sel_zlht/Sel_fra.jsp?billid="+billid, "secucheckstateid", "resizable=yes,dependent=yes,scrollbars=yes,left=0,top=0,width=" + screen.width * 1 + ",height=" + screen.height * 1);
if(lx=="zlfyjs")secucheckstateid = window.open("/btcjerpWeb/jsp/co/sel_zlht/Sel_fra.jsp?TENACONTRACTID="+TENACONTRACTID, "secucheckstateid", "resizable=yes,dependent=yes,scrollbars=yes,left=0,top=0,width=" + screen.width * 1 + ",height=" + screen.height * 1);

secucheckstateid.focus();

}

//�������뵥
//���ߣ�sa
//date 2004-05-10
//session���ƣ�pBean2_bfsq
function openbfsq(instockbillid){
	secucheckstateid = window.open("/btcjerpWeb/jsp/co/sel_bfsq/Sel_fra.jsp?instockbillid="+instockbillid, "secucheckstateid", "resizable=yes,dependent=yes,scrollbars=yes,left=0,top=0,width=" + screen.width * 1 + ",height=" + screen.height * 1);
    secucheckstateid.focus();
}

//���ϵ���ϸ���
//���ߣ�chenyz
//date 2004-06-18
function openoutstockbill(outstockbillid){
	secucheckstateid = window.open("/btcjerpWeb/jsp/co/sel_out/Sel_fra.jsp?outstockbillid="+outstockbillid, "secucheckstateid", "resizable=yes,dependent=yes,scrollbars=yes,left=0,top=0,width=" + screen.width * 1 + ",height=" + screen.height * 1);
    secucheckstateid.focus();
}

//ά��Ԥ�����뵥
//���ߣ�mb
//date 2004-06-21
//session���ƣ�pBean2_WXYSSQD
function openepmanbud(epMainBudgetID){
	secucheckstateid = window.open("/btcjerpWeb/jsp/co/sel_epmanbud/Sel_fra.jsp?epMainBudgetID="+epMainBudgetID, "secucheckstateid", "resizable=yes,dependent=yes,scrollbars=yes,left=0,top=0,width=" + screen.width * 1 + ",height=" + screen.height * 1);
    secucheckstateid.focus();
}
//ά�޺�ͬ
//���ߣ�mb
//date 2004-06-21
//session���ƣ�pBean2_WXHT
function openmaincontr(mainContractID){
	secucheckstateid = window.open("/btcjerpWeb/jsp/co/sel_maincontr/Sel_fra.jsp?mainContractID="+mainContractID, "secucheckstateid", "resizable=yes,dependent=yes,scrollbars=yes,left=0,top=0,width=" + screen.width * 1 + ",height=" + screen.height * 1);
    secucheckstateid.focus();
}
//�豸������
//���ߣ�mb
//date 2004-06-21
//session���ƣ�pBean2_SBDBD
function openequiallo(mateAllocateID){
	secucheckstateid = window.open("/btcjerpWeb/jsp/co/sel_equiallo/Sel_fra.jsp?mateAllocateID="+mateAllocateID, "secucheckstateid", "resizable=yes,dependent=yes,scrollbars=yes,left=0,top=0,width=" + screen.width * 1 + ",height=" + screen.height * 1);
    secucheckstateid.focus();
}
//�豸����⳥��
//���ߣ�mb
//date 2004-06-21
//session���ƣ�pBean2_SBPJPCD
function openamend(amendID){
	secucheckstateid = window.open("/btcjerpWeb/jsp/co/sel_amend/Sel_fra.jsp?amendID="+amendID, "secucheckstateid", "resizable=yes,dependent=yes,scrollbars=yes,left=0,top=0,width=" + screen.width * 1 + ",height=" + screen.height * 1);
    secucheckstateid.focus();
}
//���
//���ߣ�mb
//date 2004-06-21
//session���ƣ�pBean2_FKD
function openforfeit(amercementID){
	secucheckstateid = window.open("/btcjerpWeb/jsp/co/sel_forfeit/Sel_fra.jsp?amercementID="+amercementID, "secucheckstateid", "resizable=yes,dependent=yes,scrollbars=yes,left=0,top=0,width=" + screen.width * 1 + ",height=" + screen.height * 1);
    secucheckstateid.focus();
}
//�������뵥
//���ߣ�mb
//date 2004-06-22
//session���ƣ�pBean2_BFSQD
function openBFSQD(ePDiscardApplyID){
	secucheckstateid = window.open("/btcjerpWeb/jsp/co/sel_eqbfsq/Sel_fra.jsp?ePDiscardApplyID="+ePDiscardApplyID, "secucheckstateid", "resizable=yes,dependent=yes,scrollbars=yes,left=0,top=0,width=" + screen.width * 1 + ",height=" + screen.height * 1);
    secucheckstateid.focus();
}
//��ⵥ
//���ߣ�mb
//date 2004-06-22
//session���ƣ�pBean2_SBRKD
function openSBRKD(instockbillid){
	secucheckstateid = window.open("/btcjerpWeb/jsp/co/sel_eqinstockstat/Sel_fra.jsp?instockbillid="+instockbillid, "secucheckstateid", "resizable=yes,dependent=yes,scrollbars=yes,left=0,top=0,width=" + screen.width * 1 + ",height=" + screen.height * 1);
    secucheckstateid.focus();
}
//�ɹ����뵥
//���ߣ�mb
//date 2004-06-22
//session���ƣ�pBean2_CGSQD
function openCGSQD(purcrequid){
	secucheckstateid = window.open("/btcjerpWeb/jsp/co/sel_eqpurcrequ/Sel_fra.jsp?purcrequid="+purcrequid, "secucheckstateid", "resizable=yes,dependent=yes,scrollbars=yes,left=0,top=0,width=" + screen.width * 1 + ",height=" + screen.height * 1);
    secucheckstateid.focus();
}
//����Ϊ����ⷿ���룬�Զ��õ��ⷿID�Ϳⷿ���Ƶĺ���
//���η�����
// ��һ������oDestinationvalueΪ��������Ŀⷿ�����ֵ ��oDestination0=depotNo, oDestination1=depotID,oDestination2=depotName

function OpenDepotEditNew(oDestinationvalue,oDestination0,oDestination1,oDestination2) {
   oField  = oDestination0;
   oField1 = oDestination1;
   oField2 = oDestination2;

   TenCrt = window.open("/btcjerpWeb/jsp/co/cho_publicselect/sel_depotinfo.jsp?depotno="+oDestinationvalue, "TenCrt", "alwaysRaised,resizable=yes,dependent=yes,scrollbars=yes,left=300,top=250,width=" + screen.width * .35 + ",height=" + screen.height * .30);
   TenCrt.focus();
}

//����Ϊ�������ʱ��룬�Զ��õ������ʶ�Ӧ��������Ϣ�ĺ���
//���η�����
// ��һ������oDestinationvalueΪ������������ʱ����ֵ ��
//����Ĳ������ζ�Ӧ materialNo, materialID , materialName, materialModel, drawingNo ,materialUnit ,materialFactory ,materialType,unifyprice,�������Ϊ������������Ӧ��ֵ��
//ע�⣺��������ֶΣ����е�tjȡֵ����Ϊ"materialtype","materialID"����Ӧ���ʴ��ࣩ,"materialNo"����Ӧ���ʴ��ࣩ,"materialsyscode"����Ӧ���ʴ��ࣩ��
//                   tjvalue Ϊ��Ӧ���ʴ�����Ӧ�ֶε�ֵ�� Ҫ�� tj ��ȡֵΪ"materialID"����Ӧ���ʴ��ࣩʱ�����ֶ�ȡֵ����Ϊ���������materialID
// �������ֶ���Ϊ��ά����ϸ��Ϣʱ��ȡ�����Ӧ�����ʴ����µ��������ʡ�  
//�����ɸѡ��������ѹsession �� tj_material_edit
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

//add by �����ڼƻ������������������ϸ���������ӱ����������
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

//����Ϊ���빩Ӧ�̱��룬�Զ��õ���Ӧ�̶�Ӧ��������Ϣ�ĺ���
//���η�����
// ��һ������oDestinationvalueΪ��������Ĺ�Ӧ�̱����ֵ ��oDestination0=provNo, oDestination1=provID,oDestination2=provName

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

//����Ϊ������֯�������룬�Զ��õ���֯������Ӧ��������Ϣ�ĺ���
//���η�����
// ��һ������oDestinationvalueΪ�����������֯���������ֵ ��oDestination0=orgaID, oDestination1=orgaName,oDestination2=orgaNo
//ѹ���session ����sel_orga
function OpenOrgaEditNew(oDestinationvalue,oDestination0,oDestination1,oDestination2) {
   oField1  = oDestination0;
   oField2 = oDestination1;
   oField3 = oDestination2;
   TenCrt = window.open("/btcjerpWeb/jsp/co/cho_publicselect/sel_deptinfo.jsp?orgaNo="+oDestinationvalue, "TenCrt", "alwaysRaised,resizable=yes,dependent=yes,scrollbars=yes,left=300,top=250,width=" + screen.width * .35 + ",height=" + screen.height * .30);
   TenCrt.focus();
}

//����Ϊ���빤����Ŀ���룬�Զ��õ�������Ŀ��Ӧ��������Ϣ�ĺ���
//���η�����
// ��һ������oDestinationvalueΪ��������Ĺ�����Ŀ�����ֵ ��oDestination0=projectID, oDestination1=projName,oDestination2=projNo

function OpenProjEditNew(oDestinationvalue,oDestination0,oDestination1,oDestination2) {
   oField1  = oDestination0;
   oField2 = oDestination1;
   oField3 = oDestination2;
   TenCrt = window.open("/btcjerpWeb/jsp/co/cho_publicselect/sel_project.jsp?projNo="+oDestinationvalue, "TenCrt", "alwaysRaised,resizable=yes,dependent=yes,scrollbars=yes,left=300,top=250,width=" + screen.width * .35 + ",height=" + screen.height * .30);
   TenCrt.focus();
}

//����Ϊ�������б��룬�Զ��õ����б����Ӧ��������Ϣ�ĺ���
//���η�����
// ��һ������oDestinationvalueΪ������������б����ֵ ��oDestination0=bankNo, oDestination1=bankID,oDestination2=bankName

function OpenBankditNew(oDestinationvalue,oDestination0,oDestination1,oDestination2) {
   oField1  = oDestination0;
   oField2 = oDestination1;
   oField3 = oDestination2;
   TenCrt = window.open("/btcjerpWeb/jsp/co/cho_publicselect/sel_bankinfo.jsp?bankno="+oDestinationvalue, "TenCrt", "alwaysRaised,resizable=yes,dependent=yes,scrollbars=yes,left=300,top=250,width=" + screen.width * .35 + ",height=" + screen.height * .30);
   TenCrt.focus();
}
//ɸѡ����
//���η�����oDestination0=WorkTypeID,oDestination1=WorkTypeNO,oDestination2=WorkTypeName,
function OpenWorkType(oDestination0,oDestination1,oDestination2) {
   oField1  = oDestination0;
   oField2  = oDestination1;
   oField3  = oDestination2;
   TenCrt   = window.open("/btcjerpWeb/jsp/co/Cho_WorkType/sel_WorkTypeInfo.jsp", "TenCrt", "alwaysRaised,resizable=yes,dependent=yes,scrollbars=yes,left=90,top=45,width=" + screen.width * .85 + ",height=" + screen.height * .85);
   TenCrt.focus();
}
//���ߣ���� ȥ�ո�
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

//��T_Worker ѡ����Ա�����ú�����ʵ�ַ�ʽ ����������λ����ǰ�û�������λ�������ṩ�����ű��롢�������ơ���Ա��š���Ա���������ֱ�š��������� ���� ɸѡ��ѡ��by liuxw
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

//1.	��;�����ڵ�������ѡ�� ������� �ã� ���� 2.	���룺2.1	��ԱID�����ʷ��� 4.1	����id�����ʱ��롢�������ơ�����ͺš�ͼ�š��������ң�Destinationvalue0=��ԱID,Destinationvalue1=���ʷ���
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
/* ��;��ά���ɰ����ʵĹ��ù���  
  ����1��ֻ����1,2,3.  
  ����2���ж��Ƿ�����������޸ĳɰ����ʣ�0--�����޸ģ�1-�����޸�.
  ����3���������1��1��Ϊʹ�üƻ���ϸID;�������1��2��Ϊ����ƻ���ϸID;�������1��3��Ϊ����ID;
*/
function OpenMaterialGroup(inParam1,inParam2,inParam3)
{
  materialGroup = window.open("/btcjerpWeb/jsp/co/Mai_MaterialGroup/Mai_MaterialGroup_Frm.jsp?type="+inParam1+"&type_id="+inParam3+"&edit_flag="+inParam2,"materialGroup","alwaysRaised,resizable=yes,dependent=yes,scrollbars=yes,left=90,top=45,width=" + screen.width * .650 + ",height=" + screen.height * .750);
  materialGroup.focus();
}

