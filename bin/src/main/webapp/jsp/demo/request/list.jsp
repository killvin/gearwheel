<%@ taglib prefix="s" uri="/struts-tags" %>
<%@ taglib prefix="pf" uri="http://www.platform.com/tags" %>

<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<link href="<s:url value="/styles/list-table.css"/>" rel="stylesheet" type="text/css"/>
</head>
	
<title>Smart Tag Example</title>

<body>
	<s:include value="../navigation.jsp"/>

	<div class="globalAction">
		<s:select name="gaction" headerKey="-1" headerValue="Global Actions"
	       	list="#{'---':'---' , 'action0':'action0' , 'action2':'action2'}" required="true"/>
    </div>
    
    <pf:list>	
		<pf:filter>
			<pf:section label="Find this host">
				<pf:element label="Request Name" type="input"/>
				<pf:button label="Find"/>
			</pf:section>
			
			<pf:section label="Filter hosts by" isDefault="true">
				<pf:element label="Request State" type="select" value="Any"/>
				<pf:element label="Request Date"  type="select" value="Any"/>
				<pf:element label="# of Machines" type="input" value="Any"/>
				<pf:button label="Filter"/>
			</pf:section>
		</pf:filter>
	       		
		<pf:table list="requests" action="/request/toList.action" cssClass="tableBasic">
			<pf:column name="id" value="ID"/>
			<pf:column name="date" value="Date" format="MM/dd/yyyy"/>
			<pf:column name="name" value="Request Name" url="/request/toRequest.action"/>
			<pf:column name="user" value="User"/>
			<pf:column name="status" value="Status"/>
			<pf:column name="machines" value="# of Machines"/>
			<pf:column name="desc" value="Description"/>
			
		</pf:table>
	</pf:list>
</body>
</html>