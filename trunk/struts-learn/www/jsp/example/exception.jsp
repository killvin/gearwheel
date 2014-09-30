<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib uri="/tags/struts-bean" prefix="bean" %>
<%@ taglib uri="/tags/struts-html" prefix="html" %>

<html:html locale="true">
<head>
<title><bean:message key="exception.title"/></title>
<html:base/>
</head>
<body bgcolor="white">

<logic:messagesPresent message="false" >
  <html:messages id="msg" message="false">
    <div class="success">
      Exception : <bean:write name="msg"/>
    </div><br/>
  </html:messages>
</logic:messagesPresent>

</body>
</html:html>