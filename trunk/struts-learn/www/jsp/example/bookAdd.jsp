<%@ page language="java"%>
<%@ taglib uri="/tags/struts-bean" prefix="bean"%> 
<%@ taglib uri="/tags/struts-html" prefix="html"%>
<%@ taglib uri="/tags/struts-logic" prefix="logic" %>
 
<html> 
        <head>
                <title>Add a book</title>
        </head>
        
        <html:errors/>
        <body>
        
                <%-- create a html form --%>
                <html:form action="bookAdd">
                        <%-- print out the form data --%>
                        <table border="1">
                                <tbody>
                                <tr>
                                        <td>Author:</td>
                                        <td><html:text property="author" /></td>
                                </tr>
                                <tr>
                                        <td>Title:</td>
                                        <td><html:text property="title" /></td>
                                </tr>
                                <tr>
                                        <td>Available:</td>
                                        <td><html:checkbox property="available" /></td>
                                </tr>
                                </tbody>
                        </table>
                        <%-- set the parameter for the dispatch action --%>
                        <html:hidden property="do" value="saveBook" />  
                        
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