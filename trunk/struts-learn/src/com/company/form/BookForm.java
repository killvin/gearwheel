/*
 * Created Wed Jul 27 12:01:58 CEST 2005 by MyEclipse Hibernate Tool.
 */
package com.company.form;

import java.io.Serializable;

import org.apache.struts.action.ActionForm;

import com.company.vo.Customer;

/**
 * A class that represents a row in the 'book' table. This class may be
 * customized as it is never re-generated after being created.
 */
public class BookForm extends ActionForm
{
    /**
     * The cached hash code value for this instance. Settting to 0 triggers
     * re-calculation.
     */
    private int hashValue = 0;

    /** The composite primary key value. */
    private java.lang.Integer id;

    /** The value of the customer association. */
    private Customer customer;

    /** The value of the simple title property. */
    private java.lang.String title;

    /** The value of the simple author property. */
    private java.lang.String author;

    /** The value of the simple available property. */
    private java.lang.Boolean available;

    public java.lang.String getAuthor()
    {
        return author;
    }

    public void setAuthor(java.lang.String author)
    {
        this.author = author;
    }

    public java.lang.Boolean getAvailable()
    {
        return available;
    }

    public void setAvailable(java.lang.Boolean available)
    {
        this.available = available;
    }

    public Customer getCustomer()
    {
        return customer;
    }

    public void setCustomer(Customer customer)
    {
        this.customer = customer;
    }

    public int getHashValue()
    {
        return hashValue;
    }

    public void setHashValue(int hashValue)
    {
        this.hashValue = hashValue;
    }

    public java.lang.Integer getId()
    {
        return id;
    }

    public void setId(java.lang.Integer id)
    {
        this.id = id;
    }

    public java.lang.String getTitle()
    {
        return title;
    }

    public void setTitle(java.lang.String title)
    {
        this.title = title;
    }
}
