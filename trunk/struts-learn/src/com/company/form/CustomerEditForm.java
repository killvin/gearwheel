//Created by MyEclipse Struts
// XSL source (default): platform:/plugin/com.genuitec.eclipse.cross.easystruts.eclipse_3.8.4/xslt/JavaClass.xsl

package com.company.form;

import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.apache.log4j.Logger;
import org.apache.struts.action.ActionErrors;
import org.apache.struts.action.ActionMapping;
import org.apache.struts.validator.ValidatorForm;

import com.company.vo.Customer;

/**
 * MyEclipse Struts Creation date: 07-27-2005
 * 
 * XDoclet definition:
 * 
 * @struts:form name="customerEditForm"
 */
public class CustomerEditForm extends ValidatorForm
{
    /**
     * Logger for this class
     */
    private static final Logger logger = Logger
            .getLogger(CustomerEditForm.class);

    // --------------------------------------------------------- Instance
    // Variables
    private Customer customer;

    // --------------------------------------------------------- Methods

    public Customer getCustomer()
    {
        return customer;
    }

    public void setCustomer(Customer customer)
    {
        this.customer = customer;
    }

    public boolean equals(Object rhs)
    {
        // TODO Auto-generated method stub
        return customer.equals(rhs);
    }

    public Integer getAge()
    {
        // TODO Auto-generated method stub
        return customer.getAge();
    }

    public Integer getId()
    {
        // TODO Auto-generated method stub
        return customer.getId();
    }

    public String getLastname()
    {
        // TODO Auto-generated method stub
        return customer.getLastname();
    }

    public String getName()
    {
        // TODO Auto-generated method stub
        return customer.getName();
    }

    public int hashCode()
    {
        // TODO Auto-generated method stub
        return customer.hashCode();
    }

    public void setAge(Integer age)
    {
        // TODO Auto-generated method stub
        customer.setAge(age);
    }

    public void setId(Integer id)
    {
        // TODO Auto-generated method stub
        customer.setId(id);
    }

    public void setLastname(String lastname)
    {
        // TODO Auto-generated method stub
        customer.setLastname(lastname);
    }

    public void setName(String name)
    {
        // TODO Auto-generated method stub
        customer.setName(name);
    }

    public List getBooks()
    {
        // TODO Auto-generated method stub
        return customer.getBooks();
    }

    public void setBooks(List books)
    {
        // TODO Auto-generated method stub
        customer.setBooks(books);
    }

    public String toString()
    {
        // TODO Auto-generated method stub
        return customer.toString();
    }

    /**
     * Method reset
     * 
     * @param mapping
     * @param request
     */
    public void reset(ActionMapping mapping, HttpServletRequest request)
    {

        customer = new Customer();
    }

    /**
     * Validate the properties that have been set from this HTTP request, and
     * return an <code>ActionErrors</code> object that encapsulates any
     * validation errors that have been found. If no errors are found, return
     * <code>null</code> or an <code>ActionErrors</code> object with no
     * recorded error messages.
     * 
     * @param mapping
     *            The mapping used to select this instance
     * @param request
     *            The servlet request we are processing
     */
    public ActionErrors validate(ActionMapping mapping,
            HttpServletRequest request)
    {
        logger.debug("validate.....");
        // Perform validator framework validations
        ActionErrors errors = super.validate(mapping, request);

        // Only need crossfield validations here

        return errors;
    }
}
