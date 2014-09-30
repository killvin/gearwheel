package com.company.dao.liberary.book;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import net.sf.hibernate.HibernateException;
import net.sf.hibernate.Session;
import net.sf.hibernate.Transaction;

import org.apache.log4j.Logger;

import com.company.dao.AbstractDao;
import com.company.exception.liberary.book.BookNotExistException;
import com.company.exception.liberary.customer.CustomerNotExistException;
import com.company.persist.manager.HibernateSessionFactory;
import com.company.vo.Book;
import com.company.vo.Customer;

public class BookDao extends AbstractDao
{
    /**
     * Logger for this class
     */
    private static final Logger logger = Logger.getLogger(BookDao.class);
    

    /**
     * get all books from the database
     * 
     * @return Array of BookValue
     * @throws HibernateException 
     */
    public Book[] getAllBooks() throws HibernateException
    {
        /* will hold the books we are going to return later */
        List books = new ArrayList();
        
        String hql = "select b from Book as b order by b.author, b.title";
        List list = this.executeHql(hql);
        for (Iterator iter = list.iterator(); iter.hasNext();)
        {
            books.add((Book) iter.next());
        }
        
        return (Book[]) books.toArray(new Book[0]);
    }
    /**
     * get book by primary key
     * 
     * @param primaryKey
     * @return a Book or null
     * @throws HibernateException 
     */
    public Book getBookByPrimaryKey(Integer bookId) throws HibernateException
    {
        return (Book) this.getEntity(Book.class,bookId);
    }

    /**
     * sets the book as borrowed to the user specified in the database
     * 
     * @param primaryKey
     * @param userPrimaryKey
     * @throws HibernateException 
     * @throws BookNotExistException 
     * @throws CustomerNotExistException 
     */
    public void borrowBook(Integer bookId , Integer customerId) 
    throws HibernateException, BookNotExistException, CustomerNotExistException
    {
        /* a Hibernate session */
        Session session = null;
        /* we always need a transaction */
        Transaction tx = null;

        try
        {
            /* get session of the current thread */
            session = HibernateSessionFactory.currentSession();

            tx = session.beginTransaction();
            Book book = (Book) session.get(Book.class, bookId);
            Customer customer = (Customer) session.get(Customer.class,
                    customerId);
            if (book != null && customer != null)
            {
                book.setCustomer(customer);
            }else
            {
                if(book == null)    throw new BookNotExistException();
                if(customer == null)    throw new CustomerNotExistException();
            }
            tx.commit();
        }
        catch(BookNotExistException e)
        {
            throw e;
        }
        catch(CustomerNotExistException e)
        {
            throw e;
        }
        catch (Exception e)
        {
            tx.rollback();
            throw new HibernateException(e);
        } finally
        {
         if (session != null) session.close();
        }
    }


    /**
     * customer returns a book, relation in the db between customer and book is
     * deleted
     * 
     * @param primaryKey
     * @throws HibernateException 
     */
    public void returnBook(Integer bookId) throws HibernateException
    {
        /* a Hibernate session */
        Session session = null;
        /* we always need a transaction */
        Transaction tx = null;
        try
        {
            /* get session of the current thread */
            session = HibernateSessionFactory.currentSession();

            tx = session.beginTransaction();
            Book book = (Book) session.get(Book.class, bookId);

            if (book != null)   // session.get returns null when no entry is
                                // found
            book.setCustomer(null);
            tx.commit();
        }
        catch (Exception e)
        {
            tx.rollback();
            throw new HibernateException(e);
        } finally
        {
            if (session != null) session.close();
        }
    }


    
    /**
     * updates/creates a book
     * 
     * @param bookValue
     * @throws HibernateException 
     */
    public Book saveBook(Book book) throws HibernateException
    {
        Integer id = this.saveEntity(book);
        book.setId(id);
        return book;
    }

    /**
     * updates/creates a book
     * 
     * @param bookValue
     * @throws HibernateException 
     */
    public void updteBook(Book book) throws HibernateException
    {
        this.updateEntity(book);
    }
    /**
     * deletes a book
     * 
     * @param primaryKey
     * @throws HibernateException 
     */
    public void removeBookByPrimaryKey(Integer bookId) throws HibernateException
    {
        this.removeEntity(Book.class , bookId);
    }

}
