/*
 * Created on 2003-9-30
 *
 * To change the template for this generated file go to
 * Window>Preferences>Java>Code Generation>Code and Comments
 */
package com.company.framework.session;

import java.net.URL;

import net.sf.hibernate.HibernateException;
import net.sf.hibernate.MappingException;
import net.sf.hibernate.Session;
import net.sf.hibernate.SessionFactory;
import net.sf.hibernate.cfg.Configuration;

import org.apache.log4j.Logger;

import com.company.framework.common.IClassAction;
import com.company.framework.exception.SessionException;

/**
 * @author gigix xiongjie@csdn.net
 */
public class HibernateSessionAdapter
{
    private static SessionFactory _factory;

    private static final ThreadLocal _session = new ThreadLocal();

    private static String _packageNames;

    private static final Logger _log = Logger
            .getLogger(HibernateSessionAdapter.class);

    public void setPackageNames(String names)
    {
        _packageNames = names;
    }

    public synchronized void close() throws SessionException
    {
        Session s = (Session) _session.get();
        _session.set(null);
        if (s != null)
            try
            {
                s.close();
            }
            catch (HibernateException e)
            {
                _log.fatal("CANNOT CLOSE HIBERNATE SESSION! ERROR MESSAGE : ",
                        e);
                throw new SessionException("Error in close session : ", e);
            }
        _log.info("Hibernate Session Closed : " + s);
    }

    public synchronized boolean closed() throws SessionException
    {
        _log.info("Current Hibernate Session : " + _session.get());
        return (_session.get() == null);
    }

    public synchronized Session getSession() throws SessionException
    {
        Session s = (Session) _session.get();
        if (s == null)
        {
            try
            {
                s = initSession();
            }
            catch (HibernateException e)
            {
                throw new SessionException("Error in initialize session", e);
            }
            _session.set(s);
        }
        return s;
    }

    private Session initSession() throws HibernateException
    {
        if (_factory == null)
        {
            buildSessionFactory();
        }
        Session s = _factory.openSession();

        _log.info("Hibernate Session Opened : " + s);
        return s;
    }

    private void buildSessionFactory() throws HibernateException
    {
        Configuration cfg = new Configuration();
//        StoreClassAction action = new StoreClassAction();
//        action._cfg = cfg;
//
//        StringTokenizer st = new StringTokenizer(_packageNames);
//        while (st.hasMoreTokens())
//        {
//            String packageName = st.nextToken();
//            PackageUtil.processClassesInPackage(packageName, action);
//        }
//
//        cfg = action._cfg;
        try
		{
        	//URL _url = new URL("hibernate.properties");
        	//Configuration _c = cfg.configure(_url);
        	_factory = cfg.buildSessionFactory();
        	//_log.debug("Configure:" + _c);
        	
        	//_factory = cfg.configure(_url).buildSessionFactory();
        	_log.debug("Get Session Fatory : " + _factory);
		}
        catch(Exception e)
		{
        	_log.debug("buildSessionFactory()...throw Exception!!");
		}
    }

    private class StoreClassAction implements IClassAction
    {
        Configuration _cfg;

        public void execute(Class clazz)
        {
            try
            {
                _cfg.addClass(clazz);
            }
            catch (MappingException e)
            {
                _log.info("cannot store class " + clazz.getName());
            }
        }
    }
}
