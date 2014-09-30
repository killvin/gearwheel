package com.company.service;

import org.apache.log4j.Logger;

import java.util.Iterator;
import java.util.LinkedList;
import java.util.List;

import com.company.vo.Book;
import com.company.vo.Customer;

public class _ServiceFacade
{
    /**
     * Logger for this class
     */
    private static final Logger logger = Logger.getLogger(_ServiceFacade.class);

    //Test
    //private static Book[] books = new Book[10];
    private static List bookList = new LinkedList();
    private static List customerList = new LinkedList();
    
    static
    {
        //init book list
        for(int i=0 ; i< 10 ;i++)
        {
            Book _book = new Book();
            _book.setId(new Integer(i));
            _book.setTitle("Title[" + i + "]");
            _book.setAuthor("Author[" + i + "]");
            _book.setAvailable(new Boolean("true"));
            
            bookList.add(_book);
        }
        
        //init customer list
        for(int i=0 ; i< 10 ;i++)
        {
            Customer _c = new Customer();
            _c.setId(new Integer(i));
            _c.setAge(new Integer(i));
            _c.setLastname("LastName[" + i + "]");
            _c.setName("Name[" + i + "]");
            
            customerList.add(_c);
        }    

    }
    
    public static _ServiceFacade getInstance()
    {
        return new _ServiceFacade();
    }
    
    /**
     * 返回所有的书本值对象列表
     * @return
     */
    public List getBookLists()
    {
        return bookList;
    }
    
    public Book[] getBookArrays()
    {
        Object[] _objs = bookList.toArray();
        logger.debug("Object[] class" + _objs[1]);
        
        Book[] books = new Book[bookList.size()];
        for(int i=0;i< bookList.size();i++)
        {
            books[i] =(Book)_objs[i];
        }
        return books;
    }
    /**
     * 根据书本的id返回书本值对象
     * @param id
     * @return
     */
    public Book getBook(Integer id)
    {
        Book book = null;
        Iterator iter = bookList.iterator();
        while(iter.hasNext())
        {
            Book _b = (Book)iter.next();
            if(_b.getId().intValue() == id.intValue())
            {
                book = _b;
                break;
            }
        }
        return book;
    }
    
    /**
     * 根据用户的ID返回此用户信息
     * @param customerId
     * @return
     */
    public Customer getCustomer(Integer customerId)
    {
        Customer customer = null;
        Iterator iter = customerList.iterator();
        while(iter.hasNext())
        {
            Customer _c = (Customer)iter.next();
            logger.debug("_c.getId().intValue() = " + _c.getId().intValue());
            logger.debug("customerId.intValue() = " + customerId.intValue());
            
            if(_c.getId().intValue() == customerId.intValue())
            {
                customer = _c;
                break;
            }
        }
        return customer;
    }
    /**
     * 返回所有的作者列表
     * @return
     */
    public List getAllCustomersList()
    {
        return customerList;
    }
    
    public Customer[] getAllCustomers()
    {
        Object[] _objs = customerList.toArray();
        logger.debug("Object[] class" + _objs[1]);
        
        Customer[] customers = new Customer[customerList.size()];
        for(int i=0;i< customerList.size();i++)
        {
            customers[i] =(Customer)_objs[i];
        }
        return customers;
    }
    /**
     * TODO:修改一下
     * 根据作者的ID返回作者所写的所有的书
     * @param customerId
     * @return
     */
    public Book[] getCustomerBooks(Integer customerId)
    {
        int id = customerId.intValue();
        Book[] books = new Book[10];
        for(int i=0;i<books.length;i++)
        {
            books[i] = new Book();
            books[i].setId(new Integer(i));
            books[i].setTitle("Customer[" + id +"].Title[" + i + "]");
            books[i].setAuthor("Customer[" + id +"].Author[" + i + "]");
            books[i].setAvailable(new Boolean("true"));
            books[i].setCustomer(new Customer(customerId));
        }
        return books;
    }
    
    /**
     * 归还图书
     * @param id
     */
    public void returnBook(Integer bookId)
    {
          Book book = this.getBook(bookId);
          Customer customer = book.getCustomer();
          
          //摘除这样的多对多关系
          if(customer != null)
          {
              List _list = customer.getBooks();
              _list.remove(book);
              
              book.setCustomer(null);
          }else
          {
              //throw exception!!
          }
    }
    
    /**
     * 借阅图书
     * @param bookId
     * @param customerId
     */
    public void borrowBook(Integer bookId , Integer customerId)
    {
           Book book = this.getBook(bookId);
           Customer customer = this.getCustomer(customerId);
           
           //记载借阅信息
           book.setCustomer(customer);
           List _customerBooks = new LinkedList();
           _customerBooks.add(book);
           customer.setBooks(_customerBooks);
           
    }
    
    /**
     * 删除图书信息
     * @param bookId
     */
    public void deleteBook(Integer bookId)
    {
        Book book  = this.getBook(bookId);
        if(book != null)
        {
            //如果这本书目前出于借阅状态，就不可删除
            Customer customer = book.getCustomer();
            if(customer != null)
            {
                //throw book is now borrowed exception!!
            }else
            {
                bookList.remove(book);
            }
        }else
        {
            //throw book not exist exception!!
        }
    }
    
    /**
     * 新增图书信息
     * @param book
     */
    public void addNewBook(Book book)
    {
        Integer bookId = new Integer(bookList.size()+1);
        book.setId(bookId);
        bookList.add(book);
    }
    
    /**
     * 修改图书信息
     * @param book
     */
    public void editBook(Book book)
    {
        Integer id = book.getId();
        if(id != null)
        {
            Book oldBook = this.getBook(id);
            
            oldBook.setAuthor(book.getAuthor());
            oldBook.setAvailable(book.getAvailable());
            oldBook.setCustomer(book.getCustomer());
            oldBook.setId(book.getId());
            oldBook.setTitle(book.getTitle());
            
        }else
        {
            //throw book is not exist exception!!
        }
        
    }
    
    
    // --------------- Customer -----------------------
    
    public void addNewCustomer(Customer customer)
    {
         Integer customerId = new Integer(customerList.size()+1);
         customer.setId(customerId);
         customerList.add(customer);
    }
    
    public void deletCustomer(Integer customerId)
    {
        Customer _c = this.getCustomer(customerId);
        if(_c != null)
        {
            customerList.remove(_c);
        }else
        {
            //throw customer is not exist exception!!
        }
    }
    
    public void editCustomer(Customer customer)
    {
        Integer id = customer.getId();
        if( id != null)
        {
            Customer _oldCustomer = this.getCustomer(id);
            
            _oldCustomer.setAge(customer.getAge());
            _oldCustomer.setBooks(customer.getBooks());
            _oldCustomer.setId(customer.getId());
            _oldCustomer.setLastname(customer.getLastname());
            _oldCustomer.setName(customer.getName());
        }else
        {
            //throw customer is not exist exception!!
        }
    }
    
    
    
    
    
    
    
    
    
    
    
}

