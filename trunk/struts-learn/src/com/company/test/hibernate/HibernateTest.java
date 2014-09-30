package com.company.test.hibernate;

import junit.framework.TestCase;
import net.sf.hibernate.HibernateException;
import net.sf.hibernate.Session;
import net.sf.hibernate.SessionFactory;
import net.sf.hibernate.cfg.Configuration;

import org.apache.log4j.Logger;

import com.company.dao.liberary.customer.CustomerDao;
import com.company.persist.manager.HibernateSessionFactory;
import com.company.vo.Book;
import com.company.vo.Customer;

public class HibernateTest extends TestCase
{
    /**
     * Logger for this class
     */
    private static final Logger logger = Logger.getLogger(HibernateTest.class);

    private Session session = null;
    
    /**
     * you can init hibernate properties in program
     * @throws HibernateException 
     *
     */
    private void initInProgram() throws HibernateException
    {

        Configuration config = new Configuration().
        setProperty("hibernate.dialect", "net.sf.hibernate.dialect.HSQLDialect").
        setProperty("hibernate.connection.driver_class", "org.hsqldb.jdbcDriver").
        setProperty("hibernate.connection.url", "jdbc:hsqldb:mem:baseball").
        setProperty("hibernate.connection.username", "sa").
        setProperty("hibernate.connection.password", "").
        setProperty("hibernate.connection.pool_size", "1").
        setProperty("hibernate.connection.autocommit", "true").
        setProperty("hibernate.cache.provider_class", "net.sf.hibernate.cache.HashtableCacheProvider").
        setProperty("hibernate.hbm2ddl.auto", "create-drop").
        setProperty("hibernate.show_sql", "true").

        addClass(Book.class).
        addClass(Customer.class);

        
        SessionFactory factory = config.buildSessionFactory();
        session  = factory.openSession();
    }
    
    /**
     * other you can init hibernate properties in config.xml
     * @throws HibernateException
     */
    private void initInConfigfile() throws HibernateException
    {
        session = HibernateSessionFactory.currentSession();
    }
    
    
    /**
     * 
     *
     */
    public void testHibernateInit()
    {
        try
        {
            //this.initInProgram();
            //logger.debug("open session in memorry......" + session);
            
            this.initInConfigfile();
            logger.debug("open other session in db file......" + session);
            
            Customer c = new Customer();
            c.setAge(new Integer(100));
            c.setLastname("LastName");
            c.setName("Name");
            
            CustomerDao cdao = new CustomerDao();
            cdao.saveCustomer(c);
            
            logger.debug("Customer id = " + c.getId());
        }catch(Exception e)
        {
            e.printStackTrace();
        }
    }

}
