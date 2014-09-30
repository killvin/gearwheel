/*
 * Created on 25.11.2004 by HS
 * 
 */
package com.company.persist.manager;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import com.company.vo.Book;
import com.company.vo.Customer;

import net.sf.hibernate.HibernateException;
import net.sf.hibernate.Query;
import net.sf.hibernate.Session;
import net.sf.hibernate.Transaction;

/**
 * @author HS
 * 
 * 
 */
public class LibraryManager
{

    /**
     * get all books from the database
     * 
     * @return Array of BookValue
     */
    public Book[] getAllBooks()
    {
        /* will hold the books we are going to return later */
        List books = new ArrayList();
        /* a Hibernate session */
        Session session = null;
        /* we always need a transaction */
        Transaction tx = null;
        try
        {
            /* get session of the current thread */
            session = HibernateSessionFactory.currentSession();

            tx = session.beginTransaction();
            Query query = session
                    .createQuery("select b from Book as b order by b.author, b.title");
            for (Iterator iter = query.iterate(); iter.hasNext();)
            {
                books.add((Book) iter.next());
            }
            tx.commit();
        }
        catch (HibernateException e)
        {
            e.printStackTrace();
            // [laliluna] 17.12.2004 it is recommended to roll back the
            // transaction after an error occured
            if (tx != null)
                try
                {
                    tx.rollback();
                }
                catch (HibernateException e1)
                {
                    e1.printStackTrace();
                }
        } finally
        {
            try
            {
                if (session != null)
                    session.close();
            }
            catch (HibernateException e1)
            {
                e1.printStackTrace();
            }

        }
        return (Book[]) books.toArray(new Book[0]);
    }

    /**
     * get book by primary key
     * 
     * @param primaryKey
     * @return a Book or null
     */
    public Book getBookByPrimaryKey(Integer primaryKey)
    {
        /* holds our return value */
        Book book = null;
        /* a Hibernate session */
        Session session = null;
        /* we always need a transaction */
        Transaction tx = null;

        try
        {
            /* get session of the current thread */
            session = HibernateSessionFactory.currentSession();

            tx = session.beginTransaction();
            book = (Book) session.get(Book.class, primaryKey);
            tx.commit();
        }
        catch (HibernateException e)
        {
            e.printStackTrace();
            // [laliluna] 17.12.2004 it is recommended to roll back the
            // transaction after an error occured
            if (tx != null)
                try
                {
                    tx.rollback();

                }
                catch (HibernateException e1)
                {
                    e1.printStackTrace();
                }

        } finally
        {
            try
            {
                if (session != null)
                    session.close();
            }
            catch (HibernateException e1)
            {
                e1.printStackTrace();
            }
        }
        return book;
    }

    /**
     * sets the book as borrowed to the user specified in the database
     * 
     * @param primaryKey
     * @param userPrimaryKey
     */
    public void borrowBook(Integer primaryKey, Integer customerPrimaryKey)
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
            Book book = (Book) session.get(Book.class, primaryKey);
            Customer customer = (Customer) session.get(Customer.class,
                    customerPrimaryKey);
            if (book != null && customer != null)
                book.setCustomer(customer);
            tx.commit();
        }
        catch (HibernateException e)
        {
            e.printStackTrace();
            // [laliluna] 17.12.2004 it is recommended to roll back the
            // transaction after an error occured
            if (tx != null)
                try
                {
                    tx.rollback();
                }
                catch (HibernateException e1)
                {
                    e1.printStackTrace();
                }

        } finally
        {
            try
            {
                if (session != null)
                    session.close();
            }
            catch (HibernateException e1)
            {
                e1.printStackTrace();
            }
        }
    }

    /**
     * customer returns a book, relation in the db between customer and book is
     * deleted
     * 
     * @param primaryKey
     */
    public void returnBook(Integer primaryKey)
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
            Book book = (Book) session.get(Book.class, primaryKey);

            if (book != null) // session.get returns null when no entry is
                                // found
                book.setCustomer(null);
            tx.commit();
        }
        catch (HibernateException e)
        {
            e.printStackTrace();
            // [laliluna] 17.12.2004 it is recommended to roll back the
            // transaction after an error occured
            if (tx != null)
                try
                {
                    tx.rollback();
                }
                catch (HibernateException e1)
                {
                    e1.printStackTrace();
                }

        } finally
        {
            try
            {
                if (session != null)
                    session.close();
            }
            catch (HibernateException e1)
            {
                e1.printStackTrace();
            }
        }
    }

    /**
     * updates/creates a book
     * 
     * @param bookValue
     */
    public void saveBook(Book bookValue)
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
            Book book;
            if (bookValue.getId() != null && bookValue.getId().intValue() != 0)
            { // [laliluna] 04.12.2004 load book from DB
                book = (Book) session.get(Book.class, bookValue.getId());
                if (book != null)
                {
                    book.setAuthor(bookValue.getAuthor());
                    book.setTitle(bookValue.getTitle());
                    book.setAvailable(bookValue.getAvailable());
                    session.update(book);
                }
            } else
            // [laliluna] 04.12.2004 create new book
            {
                book = new Book();
                book.setAuthor(bookValue.getAuthor());
                book.setTitle(bookValue.getTitle());
                book.setAvailable(bookValue.getAvailable());
                session.save(book);
            }
            tx.commit();
        }
        catch (HibernateException e)
        {
            e.printStackTrace();
            // [laliluna] 17.12.2004 it is recommended to roll back the
            // transaction after an error occured
            if (tx != null)
                try
                {
                    tx.rollback();
                }
                catch (HibernateException e1)
                {
                    e1.printStackTrace();
                }

        } finally
        {
            try
            {
                if (session != null)
                    session.close();
            }
            catch (HibernateException e1)
            {
                e1.printStackTrace();
            }
        }
    }

    /**
     * deletes a book
     * 
     * @param primaryKey
     */
    public void removeBookByPrimaryKey(Integer primaryKey)
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
            Book book = (Book) session.get(Book.class, primaryKey);
            if (book != null)
                session.delete(book);
            tx.commit();
        }
        catch (HibernateException e)
        {
            e.printStackTrace();
            // [laliluna] 17.12.2004 it is recommended to roll back the
            // transaction after an error occured
            if (tx != null)
                try
                {
                    tx.rollback();
                }
                catch (HibernateException e1)
                {
                    e1.printStackTrace();
                }
        } finally
        {
            try
            {
                if (session != null)
                    session.close();
            }
            catch (HibernateException e1)
            {
                e1.printStackTrace();
            }
        }
    }

    /**
     * returns all customers from the db
     * 
     * @return
     */

    public Customer[] getAllCustomers()
    {
        /* will hold the books we are going to return later */
        List customers = new ArrayList();
        /* a Hibernate session */
        Session session = null;
        /* we always need a transaction */
        Transaction tx = null;

        try
        {
            /* get session of the current thread */
            session = HibernateSessionFactory.currentSession();

            tx = session.beginTransaction();
            Query query = session
                    .createQuery("select c from Customer as c order by c.name");
            for (Iterator iter = query.iterate(); iter.hasNext();)
            {
                customers.add((Customer) iter.next());
            }
            tx.commit();
        }
        catch (HibernateException e)
        {
            e.printStackTrace();
            // [laliluna] 17.12.2004 it is recommended to roll back the
            // transaction after an error occured
            if (tx != null)
                try
                {
                    tx.rollback();
                }
                catch (HibernateException e1)
                {
                    e1.printStackTrace();
                }
        } finally
        {
            try
            {
                if (session != null)
                    session.close();
            }
            catch (HibernateException e1)
            {
                e1.printStackTrace();
            }
        }
        return (Customer[]) customers.toArray(new Customer[0]);
    }

    /**
     * gets a customer from the db
     * 
     * @param primaryKey
     * @return the customer class or null, when no customer is found
     */
    public Customer getCustomerByPrimaryKey(Integer primaryKey)
    {
        /* holds our return value */
        Customer customer = null;
        /* a Hibernate session */
        Session session = null;
        /* we always need a transaction */
        Transaction tx = null;

        try
        {
            /* get session of the current thread */
            session = HibernateSessionFactory.currentSession();

            tx = session.beginTransaction();
            customer = (Customer) session.get(Customer.class, primaryKey);
            tx.commit();
        }
        catch (HibernateException e)
        {
            e.printStackTrace();
            // [laliluna] 17.12.2004 it is recommended to roll back the
            // transaction after an error occured
            if (tx != null)
                try
                {
                    tx.rollback();
                }
                catch (HibernateException e1)
                {
                    e1.printStackTrace();
                }
        } finally
        {
            try
            {
                if (session != null)
                    session.close();
            }
            catch (HibernateException e1)
            {
                e1.printStackTrace();
            }
        }
        return customer;
    }

    /**
     * saves the customers to the db
     * 
     * @param customer
     */
    public void saveCustomer(Customer customer)
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
            if (customer.getId() == null || customer.getId().intValue() == 0) // [laliluna]
                                                                                // 06.12.2004
                                                                                // create
                                                                                // customer
                session.save(customer);
            else
            {
                Customer toBeUpdated = (Customer) session.get(Customer.class,
                        customer.getId());
                toBeUpdated.setAge(customer.getAge());
                toBeUpdated.setLastname(customer.getLastname());
                toBeUpdated.setName(customer.getName());
                session.update(toBeUpdated);
            }
            tx.commit();
        }
        catch (HibernateException e)
        {
            e.printStackTrace();
            // [laliluna] 17.12.2004 it is recommended to roll back the
            // transaction after an error occured
            if (tx != null)
                try
                {
                    tx.rollback();
                }
                catch (HibernateException e1)
                {
                    e1.printStackTrace();
                }

        } finally
        {
            try
            {
                if (session != null)
                    session.close();
            }
            catch (HibernateException e1)
            {
                e1.printStackTrace();
            }
        }
    }

    /**
     * deletes a customer from the database
     * 
     * @param primaryKey
     */
    public void removeCustomerByPrimaryKey(Integer primaryKey)
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
            Customer customer = (Customer) session.get(Customer.class,
                    primaryKey);
            if (customer != null)
                session.delete(customer);
            tx.commit();
        }
        catch (HibernateException e)
        {
            e.printStackTrace();
            // [laliluna] 17.12.2004 it is recommended to roll back the
            // transaction after an error occured
            if (tx != null)
                try
                {
                    tx.rollback();
                }
                catch (HibernateException e1)
                {
                    e1.printStackTrace();
                }
        } finally
        {
            try
            {
                if (session != null)
                    session.close();
            }
            catch (HibernateException e1)
            {
                e1.printStackTrace();
            }
        }
    }

}