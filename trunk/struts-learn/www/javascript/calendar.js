var objects = ""
var use_css=false;
var use_layers=false;  
if (document.all)    { use_css    = true; }
if (document.layers) { use_layers = true; }

var CALWINDOW;


function writestyles(doc) {
    var result = "";
    result += "<STYLE>\n";
    result += "TD.cal { font-family:arial; font-size: 8pt; }\n";
    result += "TD.calmonth { font-family:arial; font-size: 8pt; text-align: right;}\n";
    result += "TD.caltoday { font-family:arial; font-size: 8pt; text-align: right; color: white; background-color:#C0C0C0; border-width:1; border-type:solid; border-color:#800000; }\n";
    result += "INPUT.caltoday { font-family:arial; font-size: 8pt; width:47px; height: 20px; }\n";
    result += "A.cal { text-decoration:none; color:#000000; }\n";
    result += "A.calthismonth { text-decoration:none; color:#000000; }\n";
    result += "A.calothermonth { text-decoration:none; color:#808080; }\n";
    result += "</STYLE>\n";
    if (doc != "") {
        doc.write(result);
        }
    else {
        return result;
        }
    }
writestyles(this.document);

function getOffsetLeft (el) {
    var scrollamount = document.body.scrollLeft;
    var ol = el.offsetLeft;
    while ((el = el.offsetParent) != null) { ol += el.offsetLeft; }
    ol = ol - scrollamount;
    return ol;
    }
function getOffsetTop (el) {
    var scrollamount = document.body.scrollTop;
    var ot = el.offsetTop;
    while((el = el.offsetParent) != null) { ot += el.offsetTop; }
    ot = ot - scrollamount;
    return ot;
    }
function showCalendar(divname, anchorname, functionname) {
    
    if (use_css) {
        var x = getOffsetLeft(document.all[anchorname]);
        var y = getOffsetTop(document.all[anchorname]);
        }
    else if (use_layers) {
        var found=0;
        for (var i=0; i<document.anchors.length; i++) {
            if (document.anchors[i].name == anchorname) {
                found=1;
                break;
                }
            }
        if (found == 0) {
            return;
            }
        var x = document.anchors[i].x;
        var y = document.anchors[i].y;
        x=x-window.pageXOffset;
        y=y-window.pageYOffset;
        }
    else {
        return;
        }
    x = x-152;
    y = y; 
    
    if (divname != "") {
        // Position the calendar DIV
        if (use_layers) { var calendardiv = document.layers[divname]; }
        if (use_css)    { var calendardiv = document.all[divname].style; }
        calendardiv.left = x;
        calendardiv.top  = y;
        // Write output to calendar DIV
        if (arguments.length>4) { 
            outputCalendar(divname,functionname,arguments[3],arguments[4]);
            }
        else {
            outputCalendar(divname,functionname);
            }
        // Show the calendar DIV
        calendardiv.visibility = "visible";
        }
    
    else {
        if (use_layers) {
            var windowx = window.screenX;
            var windowy = window.screenY + (window.outerHeight-24-window.innerHeight);
            }
        if (use_css) {
            var windowx = window.screenLeft;
            var windowy = window.screenTop;
            }
        x = x + windowx;
        y = y + windowy;
        if (!CALWINDOW || CALWINDOW.closed) {
            CALWINDOW = window.open("about:blank","calwindow","status,width=150,height=175,screenX="+x+",left="+x+",screenY="+y+",top="+y+",resizable");
            }
        // Write output to popup window
        if (arguments.length>4) { 
            outputCalendar(divname,functionname,arguments[3],arguments[4]);
            }
        else {
            outputCalendar(divname,functionname);
            }
        }
    }
function showCalendarTop(divname, anchorname, functionname) {
    
    if (use_css) {
        var x = getOffsetLeft(document.all[anchorname]);
        var y = getOffsetTop(document.all[anchorname]);
        }
    else if (use_layers) {
        var found=0;
        for (var i=0; i<document.anchors.length; i++) {
            if (document.anchors[i].name == anchorname) {
                found=1;
                break;
                }
            }
        if (found == 0) {
            return;
            }
        var x = document.anchors[i].x;
        var y = document.anchors[i].y;
        x=x-window.pageXOffset;
        y=y-window.pageYOffset;
        }
    else {
        return;
        }
    x = x-182;
    y = y; 
    
    if (divname != "") {
        // Position the calendar DIV
        if (use_layers) { var calendardiv = document.layers[divname]; }
        if (use_css)    { var calendardiv = document.all[divname].style; }
        calendardiv.left = x;
        calendardiv.top  = y;
        // Write output to calendar DIV
        if (arguments.length>4) { 
            outputCalendar(divname,functionname,arguments[3],arguments[4]);
            }
        else {
            outputCalendar(divname,functionname);
            }
        // Show the calendar DIV
        calendardiv.visibility = "visible";
        }
    
    else {
        if (use_layers) {
            var windowx = window.screenX;
            var windowy = window.screenY + (window.outerHeight-24-window.innerHeight);
            }
        if (use_css) {
            var windowx = window.screenLeft;
            var windowy = window.screenTop;
            }
        x = x + windowx;
        y = y + windowy;
        if (!CALWINDOW || CALWINDOW.closed) {
            CALWINDOW = window.open("about:blank","calwindow","status,width=150,height=175,screenX="+x+",left="+x+",screenY="+y+",top="+y+",resizable");
            }
        // Write output to popup window
        if (arguments.length>4) { 
            outputCalendar(divname,functionname,arguments[3],arguments[4]);
            }
        else {
            outputCalendar(divname,functionname);
            }
        }
    }

function hideCalendar(divname) {
    if (divname != "") {
        if (use_layers) { var calendardiv = document.layers[divname]; }
        if (use_css)    { var calendardiv = document.all[divname].style; }
        calendardiv.visibility = "hidden";
        }
    else {
        if (CALWINDOW && !CALWINDOW.closed) {
            CALWINDOW.close();
            }
        }
    }
    
function outputCalendar(divname, functionname) {
    var now = new Date();
    if (arguments.length > 2) { var month = arguments[2]; }
        else { var month = now.getMonth()+1; }
    if (arguments.length > 3) { var year = arguments[3]; }
        else { var year = now.getFullYear(); }
    var monthnames = new Array('一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月');
    var daysinmonth= new Array(0,31,28,31,30,31,30,31,31,30,31,30,31);

    if ( ( (year%4 == 0)&&(year%100 != 0) ) || (year%400 == 0) ) { // leap year
        daysinmonth[2] = 29;
        }
    var current_month = new Date(year,month-1,1);
    
    var display_year = year;
    var display_month = month;
    var display_date = 1;

    var offset = 0;
    var weekday= current_month.getDay();
    if (weekday > 0) {
        display_month--;
        if (display_month < 1) { display_month = 12; display_year--; }
        display_date = daysinmonth[display_month]-weekday+1;
        }
    var next_month = month+1;
    var next_month_year = year;
    if (next_month > 12) { next_month=1; next_month_year++; }
    var last_month = month-1;
    var last_month_year = year;
    if (last_month < 1) { last_month=12; last_month_year--; }
    
    var date_class;
    var result = "";
    if (divname == "" ) {
        var windowref = "window.opener.";
        }
    else {
        var windowref = "";
        }
    if (divname == "") {
        result += "<HTML><HEAD>"+writestyles('')+"<BODY MARGINWIDTH=0 MARGINHEIGHT=0 TOPMARGIN=0 RIGHTMARGIN=0 LEFTMARGIN=0>";
        }
    result += '<FORM>';
    if (divname != "") {
        result += '<TABLE WIDTH=144 BORDER=1 BORDERWIDTH=1 BORDERCOLOR="#808080" CELLSPACING=0 CELLPADDING=1>';
        result += '<TR><TD ALIGN=CENTER>';
        result += '<CENTER>';
        result += '<TABLE WIDTH=144 BORDER=0 BORDERWIDTH=0 CELLSPACING=0 CELLPADDING=0>';
        }
    else {
        result += '<CENTER><TABLE WIDTH=100% BORDER=0 BORDERWIDTH=0 CELLSPACING=0 CELLPADDING=0>';
        }
    result += '<TR BGCOLOR="#ff3366">';
    result += '    <TD CLASS="cal" WIDTH=22 ALIGN=CENTER VALIGN=MIDDLE><B><A CLASS="cal" HREF="javascript:'+windowref+'outputCalendar(\''+divname+'\',\''+functionname+'\','+last_month+','+last_month_year+')">&lt;&lt;</A></B></TD>';
    result += '    <TD CLASS="cal" WIDTH=100 ALIGN=CENTER>'+monthnames[month-1]+' '+year+'</TD>';
    result += '    <TD CLASS="cal" WIDTH=22 ALIGN=CENTER VALIGN=MIDDLE><B><A CLASS="cal" HREF="javascript:'+windowref+'outputCalendar(\''+divname+'\',\''+functionname+'\','+next_month+','+next_month_year+')">&gt;&gt;</A></B></TD>';
    result += '</TR>';
    result += '</TABLE>';
    result += '<TABLE WIDTH=120 BORDER=0 CELLSPACING=1 CELLPADDING=0 ALIGN=CENTER>';
    result += '<TR>';
    result += '    <TD CLASS="cal" ALIGN=RIGHT WIDTH=14%>日</TD>';
    result += '    <TD CLASS="cal" ALIGN=RIGHT WIDTH=14%>一</TD>';
    result += '    <TD CLASS="cal" ALIGN=RIGHT WIDTH=14%>二</TD>';
    result += '    <TD CLASS="cal" ALIGN=RIGHT WIDTH=14%>三</TD>';
    result += '    <TD CLASS="cal" ALIGN=RIGHT WIDTH=14%>四</TD>';
    result += '    <TD CLASS="cal" ALIGN=RIGHT WIDTH=14%>五</TD>';
    result += '    <TD CLASS="cal" ALIGN=RIGHT WIDTH=14%>六</TD>';
    result += '</TR>';
    result += '<TR><TD COLSPAN=7 ALIGN=CENTER></TD></TR>';
    for (var row=1; row<=6; row++) {
        result += '<TR>';
        for (var col=1; col<=7; col++) {
            if (display_month == month) {
                date_class = "calthismonth";
                }
            else {
                date_class = "calothermonth";
                }
            if ((display_month == now.getMonth()+1) && (display_date==now.getDate()) && (display_year==now.getFullYear())) {
                td_class="caltoday";
                }
            else {
                td_class="calmonth";
                }
            result += '    <TD CLASS="'+td_class+'"><A HREF="javascript:'+windowref+functionname+'('+display_year+','+display_month+','+display_date+');'+windowref+'hideCalendar(\''+divname+'\');" CLASS="'+date_class+'">'+display_date+'</A></TD>';
            display_date++;
            if (display_date > daysinmonth[display_month]) {
                display_date=1;
                display_month++;
                }
            if (display_month > 12) {
                display_month=1;
                display_year++;
                }
            }
        result += '</TR>';
        }
    result += '<TR><TD COLSPAN=7 ALIGN=CENTER></TD></TR>';
    result += '<TR>';
    result += '    <TD COLSPAN=7 ALIGN=CENTER>';
    result += '        <INPUT CLASS="caltoday" TYPE="button" VALUE="今日" onClick="'+windowref+functionname+'(\''+now.getFullYear()+'\',\''+(now.getMonth()+1)+'\',\''+now.getDate()+'\');'+windowref+'hideCalendar(\''+divname+'\');">';
    result += '        <INPUT CLASS="calclear" TYPE="button" VALUE="清除" onClick="'+windowref+functionname+'(\''+'   '+'\',\''+'  '+'\',\''+'  '+'\');'+windowref+'hideCalendar(\''+divname+'\');">';
    result += '        <BR>';
    result += '    </TD>';
    result += '</TR>';
    result += '</TABLE>';
    result += '</CENTER>';
    result += '</TD></TR>';
    result += '</TABLE>';
    result += '</FORM>';
    if (divname == "") {
        result += "</BODY></HTML>";
        }

    if (divname != "") {    
        if (use_css) {
            document.all[divname].innerHTML = result;
            }
        if (use_layers) {
            var thedoc = document.layers[divname].document;
            thedoc.open;
            thedoc.write(result);
            thedoc.close();
            }
        }
    else {
        CALWINDOW.document.open();
        CALWINDOW.document.write(result);
        CALWINDOW.document.close();
        }
    }



  function showdate(year, month, date)
  {
        if((month < 10) && (month >0))
        {
            month = "0" + month;
        }
        if (month =="  "){
           eval("document.forms[0]." + dateObjects + ".value = '" + year + " " + month + " " + date + "'");
        }
        else
        {
           eval("document.forms[0]." + dateObjects + ".value = '" + year + "-" + month + "-" + date + "'");
        }
        hideCalendar('calendar');
  }
    
  function clicklink(showposition, objects)
  {
          dateObjects = objects;
          showCalendar('calendar', showposition, 'showdate');
  }

