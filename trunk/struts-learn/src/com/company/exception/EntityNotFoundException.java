package com.company.exception;

public class EntityNotFoundException extends SystemException 
{
	
	public EntityNotFoundException(String s) 
	{
		super(s);
		// TODO Auto-generated constructor stub
	}
	public EntityNotFoundException(String s ,Throwable t) 
	{
		super(s ,t);
		// TODO Auto-generated constructor stub
	}
	public EntityNotFoundException(Throwable t) 
	{
		super(t);
		// TODO Auto-generated constructor stub
	}
}
