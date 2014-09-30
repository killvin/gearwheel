package com.company.exception;

public class SystemException extends Exception
{
	public SystemException(String s)
	{
		super(s);
	}
	public SystemException(String s ,Throwable t)
	{
		super(s ,t);
	}
	public SystemException(Throwable t)
	{
		super(t);
	}
}
