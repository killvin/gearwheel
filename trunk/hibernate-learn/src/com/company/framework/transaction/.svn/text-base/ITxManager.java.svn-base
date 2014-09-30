/*
 * Created on 2003-9-18
 */
package com.company.framework.transaction;

import net.sf.hibernate.HibernateException;

import com.company.framework.exception.SessionException;

/**
 * @author xiongj
 */
public interface ITxManager {
	public void beginTransaction() throws SessionException, HibernateException;
	public void commit() throws SessionException, HibernateException;
	public void rollback() throws SessionException, HibernateException;
	public void releaseResource() throws SessionException;
}
