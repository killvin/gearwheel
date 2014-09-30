package com.company.test.dao.liberary.customer;

import net.sf.hibernate.HibernateException;

import org.apache.log4j.Logger;

import com.company.dao.liberary.book.BookDao;
import com.company.dao.liberary.customer.CustomerDao;
import com.company.vo.Book;
import com.company.vo.Customer;

import junit.framework.TestCase;

public class CustomerDaoTest extends TestCase
{
    /**
     * Logger for this class
     */
    private static final Logger logger = Logger
            .getLogger(CustomerDaoTest.class);

    private BookDao dao = new BookDao();

    private CustomerDao cdao = new CustomerDao();

    private Book book = new Book();

    private Customer customer = new Customer();

    protected void setUp() throws Exception
    {
        super.setUp();
        
        /* init customer data */
        customer.setAge(new Integer(100));
        customer.setLastname("LastName");
        customer.setName("Name");
        
        /* init book data */
        book.setAuthor("testAuthor");
        book.setAvailable(new Boolean("true"));
        book.setCustomer(null);
        book.setTitle("testTitle");
    }

    protected void tearDown() throws Exception
    {
        super.tearDown();
    }

    /*
     * Test method for
     * 'com.company.dao.liberary.customer.CustomerDao.getAllCustomers()'
     */
    public void testGetAllCustomers()
    {
        
        try
        {
            cdao.saveCustomer(customer);
            
            Customer[] getCs = cdao.getAllCustomers();
            if(getCs.length <=0)
            {
                assertTrue(false);
            }
        }
        catch (HibernateException e)
        {
            assertTrue(false);
        }
        
    }

    /*
     * Test method for
     * 'com.company.dao.liberary.customer.CustomerDao.getCustomerByPrimaryKey(Integer)'
     */
    public void testGetCustomerByPrimaryKey()
    {
        try
        {
            Integer id = cdao.saveCustomer(customer);
            
            Customer getC = cdao.getCustomerByPrimaryKey(id);
            if(!getC.equals(customer))
            {
                assertTrue(false);
            }
        }
        catch (HibernateException e)
        {
            assertTrue(false);
        }
    }

}
