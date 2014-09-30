<%@ page language="java"%>
<%@ taglib uri="/tags/struts-bean" prefix="bean"%> 
<%@ taglib uri="/tags/struts-html" prefix="html"%>
<%@ taglib uri="/tags/struts-logic" prefix="logic" %>
<html> 
        <head>
                <title>JSP for customerListForm form</title>
        </head>
        <body>
                        <table border="1">
        <tbody>
        <%-- set the header --%>
        <logic:present name="customerListForm" property="customers">
        
         <tr>
                <td>Name</td>
                <td>Last name</td>
                <td>Age</td>
				<td>&nbsp;</td>
				<td>&nbsp;</td>
				<td>&nbsp;</td>
         </tr>
         <%-- start with an iterate over the collection books --%>
         <logic:iterate name="customerListForm" property="customers" id="customer">
         <tr>
                 <%-- book informations --%>
                 <td><bean:write name="customer" property="name" /></td>
                 <td><bean:write name="customer" property="lastname" /></td>
                 <td><bean:write name="customer" property="age" /></td>
                <%-- edit and delete link for each customer --%> 
                <td><html:link action="forwardCustomerEdit.do?do=prepareEdit" 
                                           paramName="customer" 
                                           paramProperty="id" 
                                           paramId="id">Edit</html:link>
                </td>
                <td><html:link action="forwardCustomerEdit.do?do=deleteCustomer" 
                                           paramName="customer" 
                                           paramProperty="id" 
                                           paramId="id">Delete</html:link>
                </td>
                
                <!-- add browser book link to see how many the customer has brrowsed -->
                <td><html:link action="forwardCustomerEdit.do?do=showBorrowBooks" 
                                           paramName="customer" 
                                           paramProperty="id" 
                                           paramId="id">BorrowBooks</html:link>
                </td>
         </tr>
         </logic:iterate> 
         <%-- end interate --%>
  </logic:present>      
        <%-- if customers cannot be found display a text --%>
        <logic:notPresent name="customerListForm" property="customers">
                <tr>
                        <td colspan="5">No customers found.</td>
                </tr>
        </logic:notPresent>     
        
        </tbody>
        </table>
        
        <br>
        <%-- add and back to menu button --%>
        <html:button property="add" 
                                 onclick="location.href='forwardCustomerAdd.do'">Add a new customer
        </html:button>
        &nbsp;
        <html:button property="back" 
                                 onclick="location.href='default.do'">Back to menu
        </html:button>
        </body>
</html>