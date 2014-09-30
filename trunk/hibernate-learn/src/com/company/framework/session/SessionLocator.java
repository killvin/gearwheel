/*
 * Created on 2003-10-16
 */
package com.company.framework.session;

import net.sf.hibernate.Session;

import org.apache.log4j.Logger;

import com.company.framework.exception.SessionException;

/**
 * @author xiongj xiongj@hzjbbis.com.cn
 */
public class SessionLocator
{
    private static final Logger _log = Logger.getLogger(SessionLocator.class);

//    private static HibernateSessionAdapter _adapter = (HibernateSessionAdapter) BeanFactoryWrapper
//            .getBean("application", "sessionAdapter");
    
    private static HibernateSessionAdapter _adapter = new HibernateSessionAdapter();
    
    public static Session getSession() throws SessionException
    {
        return _adapter.getSession();
    }

    public static void releaseSession() throws SessionException
    {
        _adapter.close();
    }
}
