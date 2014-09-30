package com.company.framework.exception;

public class SystemException extends Exception
{
	public SystemException(String s)
	{
		super(s);
	}
	public SystemException(Throwable t)
	{
		super(t);
	}
	public SystemException(String s , Throwable t)
	{
		super(s , t);
	}
}
