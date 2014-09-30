/*
 * @copyright 
 * 
 * 
 * 
 * 
 * 
 */
package com.company.service;

import java.util.LinkedList;
import java.util.List;

import net.sf.hibernate.HibernateException;

import org.apache.log4j.Logger;

import com.company.dao.liberary.book.BookDao;
import com.company.dao.liberary.customer.CustomerDao;
import com.company.exception.liberary.book.BookNotExistException;
import com.company.exception.liberary.customer.CustomerNotExistException;
import com.company.vo.Book;
import com.company.vo.Customer;

/**
 * ServiceFacade modify 2005.12.2
 *
 * @date: 2005-12-2
 * @author:Killvin.Liu
 * @email: Killvin@Hotmail.com
 */
public class ServiceFacade
{
    /**
     * Logger for this class
     */
    private static final Logger logger = Logger.getLogger(ServiceFacade.class);

    //Test
    //private static Book[] books = new Book[10];
    private static List bookList = new LinkedList();
    private static List customerList = new LinkedList();
    
    
    /* init dao instances */
    private BookDao bookDao = new BookDao();
    private CustomerDao cDao = new CustomerDao();
    
    public static ServiceFacade getInstance()
    {
        return new ServiceFacade();
    }
    
    
    // ===================== Book Methods ===================== //
    /**
     * 返回所有的书本值对象列表
     * @return
     * @throws HibernateException 
     */
    public List getBookLists() throws HibernateException
    {
        Book[] books = this.getBookArrays();
        for(int i=0;i<books.length;i++)
        {
            bookList.add(books[i]);
        }
        return bookList;
    }
    
    public Book[] getBookArrays() throws HibernateException
    {
        return bookDao.getAllBooks();
    }
    /**
     * 根据书本的id返回书本值对象
     * @param id
     * @return
     * @throws HibernateException 
     */
    public Book getBook(Integer id) throws HibernateException
    {
        return bookDao.getBookByPrimaryKey(id);
    }
    

    
    /**
     * 归还图书
     * @param id
     * @throws HibernateException 
     */
    public void returnBook(Integer bookId) throws HibernateException
    {
          bookDao.returnBook(bookId);
    }
    
    /**
     * 借阅图书
     * @param bookId
     * @param customerId
     * @throws HibernateException 
     * @throws CustomerNotExistException 
     * @throws BookNotExistException 
     */
    public void borrowBook(Integer bookId , Integer customerId) throws HibernateException, BookNotExistException, CustomerNotExistException
    {
        bookDao.borrowBook(bookId , customerId);
    }
    
    /**
     * 删除图书信息
     * @param bookId
     * @throws HibernateException 
     */
    public void deleteBook(Integer bookId) throws HibernateException
    {
        bookDao.removeBookByPrimaryKey(bookId);
    }
    
    /**
     * 新增图书信息
     * @param book
     * @throws HibernateException 
     */
    public void addNewBook(Book book) throws HibernateException
    {
        bookDao.saveBook(book);
    }
    
    /**
     * 修改图书信息
     * @param book
     * @throws HibernateException 
     */
    public void editBook(Book book) throws HibernateException
    {
        bookDao.updteBook(book);
    }
    
    
    // ===================== Customer Methods===================== //
    
    public void addNewCustomer(Customer customer) throws HibernateException
    {
        cDao.saveCustomer(customer);
    }
    
    public void deletCustomer(Integer customerId) throws HibernateException
    {
        cDao.removeCustomerByPrimaryKey(customerId);
    }
    
    public void editCustomer(Customer customer) throws HibernateException
    {
        cDao.updateCustomer(customer);
    }
    
    
    /**
     * 根据用户的ID返回此用户信息
     * @param customerId
     * @return
     * @throws HibernateException 
     */
    public Customer getCustomer(Integer customerId) throws HibernateException
    {
        return cDao.getCustomerByPrimaryKey(customerId);
    }
    /**
     * 返回所有的作者列表
     * @return
     * @throws HibernateException 
     */
    public List getAllCustomersList() throws HibernateException
    {
        Customer[] customers = this.getAllCustomers();
        for(int i=0;i<customers.length;i++)
        {
            customerList.add(customers[i]);
        }
        return customerList;
    }
    
    public Customer[] getAllCustomers() throws HibernateException
    {
        return cDao.getAllCustomers();
    }
    /**
     * TODO:修改一下
     * 根据作者的ID返回作者所写的所有的书
     * @param customerId
     * @return
     * @throws HibernateException 
     */
    public Book[] getCustomerBooks(Integer customerId) throws HibernateException
    {
        Customer customer = this.getCustomer(customerId);
        List _list = customer.getBooks();
        
        return (Book[]) _list.toArray(new Book[0]);
    }
    
    
    
    
    
    
    
    
}

