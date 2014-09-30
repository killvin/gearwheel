//Created by MyEclipse Struts
// XSL source (default): platform:/plugin/com.genuitec.eclipse.cross.easystruts.eclipse_3.8.4/xslt/JavaClass.xsl

package com.company.action;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import net.sf.hibernate.HibernateException;

import org.apache.log4j.Logger;
import org.apache.struts.action.ActionForm;
import org.apache.struts.action.ActionForward;
import org.apache.struts.action.ActionMapping;
import org.apache.struts.actions.DispatchAction;

import com.company.form.BookEditForm;
import com.company.form.BookListForm;
import com.company.form.CustomerEditForm;
import com.company.service.ServiceFacade;
import com.company.vo.Book;
import com.company.vo.Customer;

/**
 * MyEclipse Struts Creation date: 07-27-2005
 * 
 * XDoclet definition:
 * 
 * @struts:action path="/customerEdit" name="customerEditForm"
 *                input="/jsp/customerEdit.jsp" parameter="do" scope="request"
 * @struts:action-forward name="customerList" path="/customerList.do"
 *                        redirect="true"
 * @struts:action-forward name="addCustomer" path="/jsp/editCustomer.jsp"
 * @struts:action-forward name="editCustomer" path="/jsp/editCustomer.jsp"
 */
public class CustomerEditAction extends DispatchAction
{
    /**
     * Logger for this class
     */
    private static final Logger logger = Logger
            .getLogger(CustomerEditAction.class);

    /**
     * ServiceFacade for this class
     */
    private static ServiceFacade service = ServiceFacade.getInstance();

    /**
     * loads customer from the db and forwards to the edit form
     * 
     * @param mapping
     * @param form
     * @param request
     * @param response
     * @return
     * @throws HibernateException 
     */
    public ActionForward prepareEdit(ActionMapping mapping, ActionForm form,
            HttpServletRequest request, HttpServletResponse response) throws HibernateException
    {
        logger.debug("// ------- prepareEdit ------- ");
        CustomerEditForm customerEditForm = (CustomerEditForm) form;
        Integer customerId = customerEditForm.getId();

        // Execute service method
        Customer customer = service.getCustomer(customerId);
        customerEditForm.setCustomer(customer);

        logger.debug("//  ");
        return mapping.findForward("editCustomer");
    }

    /**
     * prepares the add form (actually only forwards to it)
     * 
     * @param mapping
     * @param form
     * @param request
     * @param response
     * @return
     */
    public ActionForward prepareAdd(ActionMapping mapping, ActionForm form,
            HttpServletRequest request, HttpServletResponse response)
    {
        logger.debug("// ------- prepareAdd ------- ");
        
        logger.debug("//  ");
        return mapping.findForward("addCustomer");
    }

    /**
     * saves the customers and forwards to the list
     * 
     * @param mapping
     * @param form
     * @param request
     * @param response
     * @return
     * @throws HibernateException 
     */
    public ActionForward saveCustomer(ActionMapping mapping, ActionForm form,
            HttpServletRequest request, HttpServletResponse response) throws HibernateException
    {
        logger.debug("// ------- saveCustomer ------- ");
        CustomerEditForm customerEditForm = (CustomerEditForm) form;
        Customer customer = customerEditForm.getCustomer();

        // Execute service method
        service.addNewCustomer(customer);

        logger.debug("// ");
        return mapping.findForward("customerList");
    }
    /**
     * saves the customers and forwards to the list
     * 
     * @param mapping
     * @param form
     * @param request
     * @param response
     * @return
     * @throws HibernateException 
     */
    public ActionForward editCustomer(ActionMapping mapping, ActionForm form,
            HttpServletRequest request, HttpServletResponse response) throws HibernateException
    {
        logger.debug("// ------- editCustomer ------- ");
        CustomerEditForm customerEditForm = (CustomerEditForm) form;
        Customer customer = customerEditForm.getCustomer();

        // Execute service method
        service.editCustomer(customer);

        logger.debug("// ");
        return mapping.findForward("customerList");
    }
    /**
     * deletes the customers and forwards to the list
     * 
     * @param mapping
     * @param form
     * @param request
     * @param response
     * @return
     * @throws HibernateException 
     */
    public ActionForward deleteCustomer(ActionMapping mapping, ActionForm form,
            HttpServletRequest request, HttpServletResponse response) throws HibernateException
    {
        logger.debug("// ------- deleteCustomer ------- ");
        CustomerEditForm customerEditForm = (CustomerEditForm) form;
        Integer  customerId = customerEditForm.getId();
        logger.debug(" deletCustomer[" + customerId + "]...");
        
        
        // Execute service method
        service.deletCustomer(customerId);

        logger.debug("// ");
        return mapping.findForward("customerList");
    }
    
    /**
     * show the customer has borrowed books
     * 
     * @param mapping
     * @param form
     * @param request
     * @param response
     * @return
     * @throws HibernateException 
     */
    public ActionForward showBorrowBooks(ActionMapping mapping, ActionForm form,
            HttpServletRequest request, HttpServletResponse response) throws HibernateException
    {
        logger.debug("// ------- showBorrowBooks ------- ");
        CustomerEditForm customerEditForm = (CustomerEditForm) form;
        Integer  customerId = customerEditForm.getId();
        
        // Execute service method
        Book[] books = service.getCustomerBooks(customerId);
        BookListForm bookListForm = new BookListForm();
        bookListForm.setBooks(books);
        
        request.setAttribute("bookListForm" , bookListForm);
        
        logger.debug("// ");
        return mapping.findForward("showBorrowBooks");
    }
}
