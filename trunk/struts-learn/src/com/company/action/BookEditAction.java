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

import com.company.exception.liberary.book.BookNotExistException;
import com.company.exception.liberary.customer.CustomerNotExistException;
import com.company.form.BookEditForm;
import com.company.service.ServiceFacade;
import com.company.vo.Book;
import com.company.vo.Customer;

/**
 * MyEclipse Struts Creation date: 07-27-2005
 * 
 * XDoclet definition:
 * 
 * @struts:action path="/bookEdit" name="bookEditForm" input="/jsp/bookEdit.jsp"
 *                parameter="do" scope="request" validate="true"
 * @struts:action-forward name="showBorrow" path="/jsp/borrowBook.jsp"
 * @struts:action-forward name="showEdit" path="/jsp/bookEdit.jsp"
 * @struts:action-forward name="showList" path="/bookList.do" redirect="true"
 * @struts:action-forward name="showAdd" path="/jsp/bookAdd.jsp"
 */
public class BookEditAction extends DispatchAction
{
    /**
     * Logger for this class
     */
    private static final Logger logger = Logger.getLogger(BookEditAction.class);
    /**
     * ServiceFacade for this class
     */
    private static ServiceFacade service = ServiceFacade.getInstance();
    
    
    /**
     * loads the book specified by the id from the database and forwards to the
     * edit form
     * 
     * @param mapping
     * @param form
     * @param request
     * @param response
     * @return ActionForward
     * @throws HibernateException 
     */
    public ActionForward forwardEditBook(ActionMapping mapping, ActionForm form,
            HttpServletRequest request, HttpServletResponse response) throws HibernateException
    {
        
        logger.debug("// ------- forwardEditBook ------- ");
        BookEditForm bookEditForm = (BookEditForm) form;
        Integer id = bookEditForm.getId();
        
        //Execute service method
        Book book  = service.getBook(id);
        bookEditForm.setBook(book);
        
        logger.debug("// ");
        return mapping.findForward("showEdit");
    }

    /**
     * loads the book specified by the id from the database and forwards to the
     * edit form
     * 
     * @param mapping
     * @param form
     * @param request
     * @param response
     * @return ActionForward
     * @throws HibernateException 
     */
    public ActionForward editBook(ActionMapping mapping, ActionForm form,
            HttpServletRequest request, HttpServletResponse response) throws HibernateException
    {
        logger.debug("// ------- editBook ------- ");
        BookEditForm bookEditForm = (BookEditForm) form;
        Book book  = bookEditForm.getBook();

        //Execute service method
        service.editBook(book);
        
        logger.debug("// ");
        return mapping.findForward("showList");
    }

    /**
     * loads a book from the db and forwards to the borrow book form
     * 
     * @param mapping
     * @param form
     * @param request
     * @param response
     * @return ActionForward
     * @throws HibernateException 
     */
    public ActionForward borrowBook(ActionMapping mapping, ActionForm form,
            HttpServletRequest request, HttpServletResponse response) throws HibernateException
    {
        logger.debug("// ------- borrowBook ------- ");

        Customer[] customers = service.getAllCustomers();
        request.setAttribute("customers", customers);

        logger.debug("// ");
        return mapping.findForward("showBorrow");
    }

    /**
     * return a book from a customer
     * 
     * @param mapping
     * @param form
     * @param request
     * @param response
     * @return ActionForward
     * @throws HibernateException 
     */
    public ActionForward returnBook(ActionMapping mapping, ActionForm form,
            HttpServletRequest request, HttpServletResponse response) throws HibernateException
    {
        logger.debug("// ------- returnBook ------- ");

        BookEditForm bookEditForm = (BookEditForm) form;
        
        //get id of the book from request
        Integer id = bookEditForm.getId();
        logger.debug("return book id = " + id.intValue());

        //Execute service method
        service.returnBook(id);
        
        logger.debug("// ");
        return mapping.findForward("showList");
    }

    /**
     * deletes a book from the database
     * 
     * @param mapping
     * @param form
     * @param request
     * @param response
     * @return ActionForward
     * @throws HibernateException 
     */
    public ActionForward deleteBook(ActionMapping mapping, ActionForm form,
            HttpServletRequest request, HttpServletResponse response) throws HibernateException
    {
        logger.debug("// ------- deleteBook -------");

        BookEditForm bookEditForm = (BookEditForm) form;

        //get id of the book from request
        Integer bookId = bookEditForm.getId();
        
        //Execute service method
        service.deleteBook(bookId);

        logger.debug("// ");
        return mapping.findForward("showList");
    }

    /**
     * forwards to the add book form
     * 
     * @param mapping
     * @param form
     * @param request
     * @param response
     * @return ActionForward
     */
    public ActionForward addBook(ActionMapping mapping, ActionForm form,
            HttpServletRequest request, HttpServletResponse response)
    {
        logger.debug("// ------- addBook ------- ");

        
        logger.debug("// ");
        return mapping.findForward("showAdd");

    }

    /**
     * saves the borrow assigned in the form in the database
     * 
     * @param mapping
     * @param form
     * @param request
     * @param response
     * @return ActionForward
     * @throws HibernateException 
     * @throws CustomerNotExistException 
     * @throws BookNotExistException 
     */
    public ActionForward saveBorrow(ActionMapping mapping, ActionForm form,
            HttpServletRequest request, HttpServletResponse response) 
    throws Exception
    {
        logger.debug("// ------- saveBorrow -------");
        BookEditForm bookEditForm = (BookEditForm) form;
        
        //Execute service method
        service.borrowBook(bookEditForm.getId(),bookEditForm.getCustomerId());
        
        //Test
        //throw new CustomerNotExistException();
        
        logger.debug("// ");
        return mapping.findForward("showList");
    }

    /**
     * updates or creates the book in the database
     * 
     * @param mapping
     * @param form
     * @param request
     * @param response
     * @return ActionForward
     * @throws HibernateException 
     */
    public ActionForward saveBook(ActionMapping mapping, ActionForm form,
            HttpServletRequest request, HttpServletResponse response) throws HibernateException
    {
        logger.debug("// ------- save book ------- ");
        BookEditForm bookEditForm = (BookEditForm) form;

        Book book = bookEditForm.getBook();
        
        //Execute service method
        service.addNewBook(book);
        
        logger.debug("// ");
        return mapping.findForward("showList");
    }

}
