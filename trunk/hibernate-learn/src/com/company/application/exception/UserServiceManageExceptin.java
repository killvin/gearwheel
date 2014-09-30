package com.company.application.exception;

import com.company.framework.exception.SystemException;


public class UserServiceManageExceptin extends SystemException
{
    public UserServiceManageExceptin(String s)
    {
        super(s);
    }
    public UserServiceManageExceptin(Throwable t)
    {
        super(t);
    }
    public UserServiceManageExceptin(String s , Throwable t)
    {
        super(s , t);
    }
}
