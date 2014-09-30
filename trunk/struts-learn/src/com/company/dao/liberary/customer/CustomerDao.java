package com.company.dao.liberary.customer;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import net.sf.hibernate.HibernateException;

import com.company.dao.AbstractDao;
import com.company.vo.Book;
import com.company.vo.Customer;

public class CustomerDao extends AbstractDao
{
    /**
     * returns all customers from the db
     * 
     * @return
     * @throws HibernateException 
     */

    public Customer[] getAllCustomers() throws HibernateException
    {
        /* will hold the books we are going to return later */
        List customers = new ArrayList();
        String hql = "select c from Customer as c order by c.name";
        List list = this.executeHql(hql);
        for (Iterator iter = list.iterator(); iter.hasNext();)
        {
            customers.add((Customer) iter.next());
        }
        return (Customer[]) customers.toArray(new Customer[0]);
    }

    /**
     * gets a customer from the db
     * 
     * @param primaryKey
     * @return the customer class or null, when no customer is found
     * @throws HibernateException 
     */
    public Customer getCustomerByPrimaryKey(Integer customerId) throws HibernateException
    {
        /* holds our return value */
        Customer customer = (Customer) this.getEntity(Customer.class, customerId);
        return customer;
    }

    /**
     * saves the customers to the db
     * 
     * @param customer
     * @throws HibernateException 
     */
    public Integer saveCustomer(Customer customer) throws HibernateException
    {
        return this.saveEntity(customer);
    }
    
    /**
     * update the customers to the db
     * 
     * @param customer
     * @throws HibernateException 
     */
    public void updateCustomer(Customer customer) throws HibernateException
    {
        this.updateEntity(customer);
    }
    /**
     * deletes a customer from the database
     * 
     * @param primaryKey
     * @throws HibernateException 
     */
    public void removeCustomerByPrimaryKey(Integer customerId) throws HibernateException
    {
        this.removeEntity(Customer.class, customerId);
    }
    
}
