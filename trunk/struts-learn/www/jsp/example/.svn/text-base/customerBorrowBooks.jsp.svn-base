<%@ page language="java"%>
<%@ taglib uri="/tags/struts-bean" prefix="bean"%> 
<%@ taglib uri="/tags/struts-html" prefix="html"%>
<%@ taglib uri="/tags/struts-logic" prefix="logic" %>

<html> 
	<head>
		<title>Show book list</title>
	</head>
	<body>

	<table border="1">
	<tbody>
	<%-- set the header --%>
	<tr>
		<td>Author1</td>
		<td>Book name</td>
		<td>Available</td>
	</tr>
	<%-- start with an iterate over the collection books --%>
	<logic:iterate name="bookListForm" property="books" id="book">
	<tr>
		<%-- book informations --%>
		<td><bean:write name="book" property="author" /></td>
		<td><bean:write name="book" property="title" /></td>
		<td><html:checkbox disabled="true" 
						   name="book" 
						   property="available"/>
		</td>

	</tr>
	</logic:iterate> 
	<%-- end interate --%>
	
	<%-- if books cannot be found display a text --%>
	<logic:notPresent name="book">
		<tr>
			<td colspan="5">No books found.</td>
		</tr>
	</logic:notPresent>	
	
	</tbody>
	</table>
	
	<br>
    <%-- submit and back button --%>
    <html:button property="back" 
                             onclick="history.back();">
                             Back
    </html:button>
	</body>
</html>
