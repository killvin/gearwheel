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

import com.company.form.CustomerListForm;
import com.company.service.ServiceFacade;

/**
 * MyEclipse Struts Creation date: 07-27-2005
 * 
 * XDoclet definition:
 * 
 * @struts:action path="/custeromList" name="custeromListForm"
 *                input="/jsp/custeromList.jsp" scope="request"
 * @struts:action-forward name="showCustomerList" path="/jsp/customerList.jsp"
 */
public class CustomerListAction extends Action
{
    /**
     * Logger for this class
     */
    private static final Logger logger = Logger
            .getLogger(CustomerListAction.class);

    /**
     * ServiceFacade for this class
     */
    private static ServiceFacade service = ServiceFacade.getInstance();

    /**
     * Method execute
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
        CustomerListForm customerListForm = (CustomerListForm) form;
        
        //Execute service method
        customerListForm.setCustomers(service.getAllCustomers());
        
        logger.debug("// ");
        return mapping.findForward("showCustomerList");
    }

}
