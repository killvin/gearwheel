package com.company.test.dao.liberary.book;

import junit.framework.TestCase;
import net.sf.hibernate.HibernateException;

import org.apache.log4j.Logger;

import com.company.dao.liberary.book.BookDao;
import com.company.dao.liberary.customer.CustomerDao;
import com.company.vo.Book;
import com.company.vo.Customer;

public class BookDaoTest extends TestCase
{
    /**
     * Logger for this class
     */
    private static final Logger logger = Logger.getLogger(BookDaoTest.class);

    private BookDao dao  = new BookDao();
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
     * Test method for 'com.company.dao.liberary.book.BookDao.getAllBooks()'
     */
    public void testGetAllBooks()
    {
        
        try
        {
            dao.saveBook(book);
            
            Book[] books = dao.getAllBooks();
            if(books.length <= 0 )
            {
                logger.debug("books.length <= 0 ....!!");
                assertTrue(false);
            }else
            {
                logger.debug("books.length >0 ....!!");
            }
        }
        catch (Exception e)
        {
            assertTrue(false);
        }
        
    }

    /*
     * Test method for 'com.company.dao.liberary.book.BookDao.getBookByPrimaryKey(Integer)'
     */
    public void testGetBookByPrimaryKey()
    {
        try
        {
            dao.saveBook(book);
            
            Book _getBook = dao.getBookByPrimaryKey(book.getId());
            if( !_getBook.equals(book))
            {
                assertTrue(false);
            }else
            {
                logger.debug("_getBook == _b ");
            }
        }
        catch (Exception e)
        {
            assertTrue(false);
        }
    }

    /*
     * Test method for 'com.company.dao.liberary.book.BookDao.borrowBook(Integer, Integer)'
     */
    public void testBorrowBook()
    {
        try
        {
            cdao.saveCustomer(customer);
            dao.saveBook(book);
 
            //Test......
            dao.borrowBook(book.getId() , customer.getId());
            
            Book getBook = dao.getBookByPrimaryKey(book.getId());
            if(getBook != null)
            {
                Customer getC = getBook.getCustomer();
                if(getC != null)
                {   
                    if(getC.getId().intValue() != customer.getId().intValue())
                    {
                        assertTrue(false);
                    }
                }else
                {
                    assertTrue(false);
                }
            }else
            {
                assertTrue(false);
            }
        }
        catch (Exception e)
        {
            assertTrue(false);
        }
    }

    /*
     * Test method for 'com.company.dao.liberary.book.BookDao.returnBook(Integer)'
     */
    public void testReturnBook()
    {
            try
            {
                cdao.saveCustomer(customer);
                //you must first borrow the book
                book.setCustomer(customer);
                dao.saveBook(book);
                
                //Test.....
                dao.returnBook(book.getId());
                Book getBook = dao.getBookByPrimaryKey(book.getId());
                if(getBook == null)
                {
                    assertTrue(false);
                }else
                {
                    Customer getC = getBook.getCustomer();
                    if(getC != null)
                    {
                        assertTrue(false);
                    }
                }
            }
            catch (HibernateException e)
            {
                assertTrue(false);
            }

        
    }
}
