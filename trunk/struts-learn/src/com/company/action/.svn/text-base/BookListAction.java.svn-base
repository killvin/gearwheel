//Created by MyEclipse Struts
// XSL source (default): platform:/plugin/com.genuitec.eclipse.cross.easystruts.eclipse_3.8.4/xslt/JavaClass.xsl

package com.company.action;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import net.sf.hibernate.HibernateException;

import org.apache.log4j.Logger;
import org.apache.struts.action.Action;
import org.apache.struts.action.ActionForm;
import org.apache.struts.action.ActionForward;
import org.apache.struts.action.ActionMapping;

import com.company.form.BookListForm;
import com.company.service.ServiceFacade;
import com.company.vo.Book;

/**
 * MyEclipse Struts Creation date: 07-27-2005
 * 
 * XDoclet definition:
 * 
 * @struts:action path="/bookList" name="bookListForm" input="/jsp/bookList.jsp"
 *                scope="request" validate="true"
 * @struts:action-forward name="showList" path="/jsp/bookList.jsp"
 */
public class BookListAction extends Action
{
    /**
     * Logger for this class
     */
    private static final Logger logger = Logger.getLogger(BookListAction.class);
    
    /**
     * ServiceFacade for this class
     */
    private static ServiceFacade service = ServiceFacade.getInstance();

    /**
     * Method loads book from DB
     * 
     * @param mapping
     * @param form
     * @param request
     * @param response
     * @return ActionForward
     * @throws HibernateException 
     */
    public ActionForward execute(ActionMapping mapping, ActionForm form,
            HttpServletRequest request, HttpServletResponse response) throws HibernateException
    {
        logger.debug("// ------- execute ------- ");

        BookListForm bookListForm = (BookListForm)form;
            
        //Execute service getBookList() method,
        //And the mothod return some vo list.
        
//        //Test exception 
//        throw new HibernateException("");
        
        
        Book[] books = service.getBookArrays();
        bookListForm.setBooks(books);   
        logger.debug("bookListForm = " + bookListForm);
        logger.debug("bookListForm.getBooks() =" + bookListForm.getBooks().length);


        
        logger.debug("// ");
        //Redirect to the page
        return mapping.findForward("showList");

    }

}
