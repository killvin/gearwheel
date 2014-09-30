package com.company.common.action;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.log4j.Logger;
import org.apache.struts.action.Action;
import org.apache.struts.action.ActionErrors;
import org.apache.struts.action.ActionForm;
import org.apache.struts.action.ActionForward;
import org.apache.struts.action.ActionMapping;

import com.company.action.BookListAction;

public abstract class AbstractAction extends Action
{
    /**
     * Logger for this class
     */
    private static final Logger logger = Logger.getLogger(BookListAction.class);

    /**
     * Method loads book from DB
     * 
     * @param mapping
     * @param form
     * @param request
     * @param response
     * @return ActionForward
     */
    public ActionForward execute(ActionMapping mapping, ActionForm form,
            HttpServletRequest request, HttpServletResponse response)
    {
        ActionErrors errors = new ActionErrors();
        ActionForward forward = mapping.findForward("errorPage");
        try
        {
            forward = this.doAction(mapping,form,request,response);
        }
        catch(Exception e)
        {
        }

        return forward;
    }

    public abstract ActionForward doAction(ActionMapping mapping, ActionForm form,
    HttpServletRequest request, HttpServletResponse response);
    
}
