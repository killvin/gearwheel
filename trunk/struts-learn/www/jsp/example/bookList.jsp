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
		<td>Borrow by</td>
		<td>&nbsp;</td>
		<td>&nbsp;</td>
		<td>&nbsp;</td>
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
		<td>
			<%-- check if a customer borrowed a book, 
				 when its true display his name 
				 otherwise display nothing --%>
			<logic:notEmpty name="book" property="customer">
				<bean:write name="book" property="customer.name" />, 
				<bean:write name="book" property="customer.lastname" />
			</logic:notEmpty>
			<logic:empty name="book" property="customer">
				-
			</logic:empty>
		</td>
		<%-- borrow, edit and delete link for each book --%>
		<td>
			<%-- check if a user borrowed a book, 
				 when its true display the return link
				 otherwise display the borrow link --%>
			<logic:notEmpty name="book" property="customer">
				<html:link action="bookBorrow.do?do=returnBook" 
							   paramName="book" 
							   paramProperty="id" 
							   paramId="id">Return book</html:link>	
			</logic:notEmpty>
			<logic:empty name="book" property="customer">
				<html:link action="bookBorrow.do?do=borrowBook" 
							   paramName="book" 
							   paramProperty="id" 
							   paramId="id">Borrow book</html:link>
			</logic:empty>
		</td>
		<td><html:link action="forwardEdit.do?do=forwardEditBook" 
					   paramName="book" 
					   paramProperty="id" 
					   paramId="id">Edit</html:link>
		</td>
		<td>
		
		<%-- check if a book has borrowed by a customer, 
			 when the book has returned display the delete link
			 otherwise did't display the link --%>
		<logic:notEmpty name="book" property="customer">
		-
		</logic:notEmpty>
		<logic:empty name="book" property="customer">
					<html:link action="forwardEdit.do?do=deleteBook" 
					   paramName="book" 
					   paramProperty="id" 
					   paramId="id">Delete</html:link>
		</logic:empty>
			
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
	<%-- add and back to menu button --%>
	<html:button property="add" 
				 onclick="location.href='forwardAdd.do'">Add a new book
	</html:button>
	&nbsp;
	<html:button property="back" 
				 onclick="location.href='default.do'">Back to menu
	</html:button>
	</body>
</html>
