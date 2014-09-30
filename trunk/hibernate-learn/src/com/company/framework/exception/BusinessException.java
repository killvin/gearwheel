package com.company.framework.exception;

public class BusinessException extends Exception
{
    public BusinessException(String s)
    {
        super(s);
    }
    public BusinessException(Throwable t)
    {
        super(t);
    }
    public BusinessException(String s , Throwable t)
    {
        super(s , t);
    }
}
