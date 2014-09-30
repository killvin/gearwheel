/*
 * Created on 2003-10-15
 */
package com.company.exception;

/**
 * @author xiongj
 * 	xiongj@hzjbbis.com.cn
 */
public class SessionException extends Exception {

	/**
	 * 
	 */
	public SessionException() {
		super();
		// TODO Auto-generated constructor stub
	}

	/**
	 * @param s
	 */
	public SessionException(String s) {
		super(s);
		// TODO Auto-generated constructor stub
	}
	/**
	 * @param s
	 */
	public SessionException(Throwable t) {
		super(t);
		// TODO Auto-generated constructor stub
	}
	/**
	 * @param s
	 */
	public SessionException(String s, Throwable t) {
		super(s,t);
		// TODO Auto-generated constructor stub
	}
}
