//Created by MyEclipse Struts
//XSL source (default): platform:/plugin/com.genuitec.eclipse.cross.easystruts.eclipse_3.8.4/xslt/JavaClass.xsl

package com.company.form;

import org.apache.log4j.Logger;

import javax.servlet.http.HttpServletRequest;

import org.apache.struts.action.ActionErrors;
import org.apache.struts.action.ActionMapping;
import org.apache.struts.validator.ValidatorForm;

import com.company.vo.Book;
import com.company.vo.Customer;

/**
 * MyEclipse Struts Creation date: 07-27-2005
 * 
 * XDoclet definition:
 * 
 * @struts:form name="bookEditForm"
 */
public class BookEditForm extends ValidatorForm  {
    /**
     * Logger for this class
     */
    private static final Logger logger = Logger.getLogger(BookEditForm.class);

    // --------------------------------------------------------- Instance
    // Variables
    private Integer customerId;

    private Book book;

    public String getAuthor()
    {
        // TODO Auto-generated method stub
        return book.getAuthor();
    }

    public Boolean getAvailable()
    {
        // TODO Auto-generated method stub
        return book.getAvailable();
    }

    public Customer getCustomer()
    {
        // TODO Auto-generated method stub
        return book.getCustomer();
    }

    public Integer getId()
    {
        // TODO Auto-generated method stub
        return book.getId();
    }

    public String getTitle()
    {
        // TODO Auto-generated method stub
        return book.getTitle();
    }

    public void setAuthor(String author)
    {
        // TODO Auto-generated method stub
        book.setAuthor(author);
    }

    public void setAvailable(Boolean available)
    {
        // TODO Auto-generated method stub
        book.setAvailable(available);
    }

    public void setCustomer(Customer customer)
    {
        // TODO Auto-generated method stub
        book.setCustomer(customer);
    }

    public void setId(Integer id)
    {
        // TODO Auto-generated method stub
        book.setId(id);
    }

    public void setTitle(String title)
    {
        // TODO Auto-generated method stub
        book.setTitle(title);
    }

    // --------------------------------------------------------- Methods
    public Integer getCustomerId()
    {
        return customerId;
    }

    public void setCustomerId(Integer customerId)
    {
        this.customerId = customerId;
    }

    public Book getBook()
    {
        return book;
    }

    public void setBook(Book book)
    {
        this.book = book;
    }

    public void reset(ActionMapping arg0, HttpServletRequest arg1)
    {
        book = new Book();
    }

    /**
     * Validate the properties that have been set from this HTTP request,
     * and return an <code>ActionErrors</code> object that encapsulates any
     * validation errors that have been found.  If no errors are found, return
     * <code>null</code> or an <code>ActionErrors</code> object with no
     * recorded error messages.
     *
     * @param mapping The mapping used to select this instance
     * @param request The servlet request we are processing
     */
    public ActionErrors validate(ActionMapping mapping,
                                 HttpServletRequest request) 
    {
        logger.debug("ValidateForm.....");
        // Perform validator framework validations
        ActionErrors errors = super.validate(mapping, request);
        
        logger.debug("ValidateForm.....errors = " + errors);
        // Only need crossfield validations here

        return errors;
    }
}
