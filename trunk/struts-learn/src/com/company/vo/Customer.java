/*
 * Created Wed Jul 27 12:01:58 CEST 2005 by MyEclipse Hibernate Tool.
 */
package com.company.vo;

import java.io.Serializable;
import java.util.List;

/**
 * A class that represents a row in the 'customer' table. This class may be
 * customized as it is never re-generated after being created.
 */
public class Customer extends AbstractCustomer implements Serializable
{
    private List books;

    public List getBooks()
    {
        return books;
    }

    public void setBooks(List books)
    {
        this.books = books;
    }

    /**
     * Simple constructor of Customer instances.
     */
    public Customer()
    {
    }

    /**
     * Constructor of Customer instances given a simple primary key.
     * 
     * @param id
     */
    public Customer(java.lang.Integer id)
    {
        super(id);
    }

    /* Add customized code below */

}
