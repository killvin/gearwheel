package com.company.persist.manager;

import net.sf.hibernate.HibernateException;
import net.sf.hibernate.Session;
import net.sf.hibernate.cfg.Configuration;

/**
 * Configures and provides access to Hibernate sessions, tied to the current
 * thread of execution. Follows the Thread Local Session pattern, see
 * {@link http://hibernate.org/42.html}.
 */
public class HibernateSessionFactory
{

    /**
     * Location of hibernate.cfg.xml file. NOTICE: Location should be on the
     * classpath as Hibernate uses #resourceAsStream style lookup for its
     * configuration file. That is place the config file in a Java package - the
     * default location is the default Java package.<br>
     * <br>
     * Examples: <br>
     * <code>CONFIG_FILE_LOCATION = "/hibernate.conf.xml". 
     * CONFIG_FILE_LOCATION = "/com/foo/bar/myhiberstuff.conf.xml".</code>
     */
    private static String CONFIG_FILE_LOCATION = "/hibernate.cfg.xml";

    /** Holds a single instance of Session */
    private static final ThreadLocal threadLocal = new ThreadLocal();

    /** The single instance of hibernate configuration */
    private static final Configuration cfg = new Configuration();

    /** The single instance of hibernate SessionFactory */
    private static net.sf.hibernate.SessionFactory sessionFactory;

    /**
     * Returns the ThreadLocal Session instance. Lazy initialize the
     * <code>SessionFactory</code> if needed.
     * 
     * @return Session
     * @throws HibernateException
     */
    public static Session currentSession() throws HibernateException
    {
        Session session = (Session) threadLocal.get();
        /*
         * ���� * [laliluna] 20.12.2004 ���� * we want to use the standard
         * session.close() method and not the closeSession() from this class. ���� *
         * For this we need the following line of code. ����
         */
        if (session != null && !session.isOpen())
            session = null;
        if (session == null)
        {
            if (sessionFactory == null)
            {
                try
                {
                    cfg.configure(CONFIG_FILE_LOCATION);
                    sessionFactory = cfg.buildSessionFactory();
                }
                catch (Exception e)
                {
                    System.err
                            .println("%%%% Error Creating SessionFactory %%%%");
                    e.printStackTrace();
                }
            }
            session = sessionFactory.openSession();
            threadLocal.set(session);
        }

        return session;
    }

    /**
     * Close the single hibernate session instance.
     * 
     * @throws HibernateException
     */
    public static void closeSession() throws HibernateException
    {
        Session session = (Session) threadLocal.get();
        threadLocal.set(null);

        if (session != null)
        {
            session.close();
        }
    }

    /**
     * Default constructor.
     */
    private HibernateSessionFactory()
    {
    }

}