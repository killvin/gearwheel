package com.company.exception.liberary.book;

import com.company.exception.BusinessException;

public class BookNotExistException  extends BusinessException
{
    public BookNotExistException() 
    {
        super();
    }
    public BookNotExistException(String s) 
    {
        super(s);
        // TODO Auto-generated constructor stub
    }
    public BookNotExistException(String s ,Throwable t) 
    {
        super(s ,t);
        // TODO Auto-generated constructor stub
    }
    public BookNotExistException(Throwable t) 
    {
        super(t);
        // TODO Auto-generated constructor stub
    }
}
