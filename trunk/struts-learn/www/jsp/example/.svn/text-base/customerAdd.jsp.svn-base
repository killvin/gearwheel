<%@ page language="java"%>
<%@ taglib uri="/tags/struts-bean" prefix="bean"%> 
<%@ taglib uri="/tags/struts-html" prefix="html"%>
<%@ taglib uri="/tags/struts-logic" prefix="logic" %>
 
<html> 
	<head>
		<title>JSP for customerEditForm form</title>
	</head>
	<body>
		<html:errors/>
                <%-- create a html form --%>
                <html:form action="/customerAdd">
                        <%-- print out the form data --%>
                        <table border="1">
                                <tbody>
                                <tr>
                                        <td>Name:</td>
                                        <td><html:text property="name" /></td>
                                </tr>
                                <tr>
                                        <td>Last name:</td>
                                        <td><html:text property="lastname" /></td>
                                </tr>
                                <tr>
                                        <td>Age:</td>
                                        <td><html:text property="age" /></td>
                                </tr>
                                </tbody>
                        </table>
                        <%-- set the parameter for the dispatch action --%>
                        <html:hidden property="do" value="saveCustomer" />  
                        
                        <br>
                        <%-- submit and back button --%>
                        <html:button property="back" 
                                                 onclick="history.back();">
                                                 Back
                        </html:button>
                        &nbsp;
                        <html:submit>Save</html:submit>
                </html:form>		
		
		
	</body>
</html>