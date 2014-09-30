/*
 * Created on 2003-9-30
 *
 * To change the template for this generated file go to
 * Window>Preferences>Java>Code Generation>Code and Comments
 */
package com.company.framework.transaction;

import net.sf.hibernate.HibernateException;
import net.sf.hibernate.Session;
import net.sf.hibernate.Transaction;

import org.apache.log4j.Logger;

import com.company.framework.exception.SessionException;
import com.company.framework.session.HibernateSessionAdapter;

/**
 * @author Administrator
 *
 * To change the template for this generated type comment go to
 * Window>Preferences>Java>Code Generation>Code and Comments
 */
public class HibernateTxManager implements ITxManager {
	private Logger _log = Logger.getLogger(getClass());
	
	private HibernateSessionAdapter _session;
	private ThreadLocal _transaction = new ThreadLocal();
	private ThreadLocal _refCount = new ThreadLocal();
	
	public void setSession(HibernateSessionAdapter session) throws HibernateException {
		_session = session;
	}

	public void beginTransaction() throws HibernateException, SessionException {
		if(getRefCount() == 0) {
			actualBeginTransaction();
		}
		setRefCount(getRefCount() + 1);
	}

	public void commit() throws HibernateException, SessionException {
		setRefCount(getRefCount() - 1);
		if(getRefCount() == 0) {
			actualCommit();
		}
	}

	public void rollback() throws HibernateException, SessionException {
		setRefCount(getRefCount() - 1);
		if(getRefCount() == 0) {
			actualRollback();
		} 
	}

	public void releaseResource() throws SessionException {
		if(getRefCount() == 0) {
			_session.close();
		} 
	}

	private void actualBeginTransaction() throws HibernateException, SessionException {
		_log.info("Executing HibernateTxManager.beginTransaction()");
		try {
			setTransaction(getSession().beginTransaction());
		} catch (HibernateException e) {
			throw new HibernateException(e);
		}
		_log.info("Transaction Begined");
	}

	private void actualCommit() throws HibernateException, SessionException {
		_log.info("Executing HibernateTxManager.commit()");
		try {
			getTransaction().commit();
			setTransaction(null);
		} catch (HibernateException e) {
			throw new HibernateException(e);
		} finally {
			_session.close();
		}
		_log.info("Transaction Commited");
	}

	private void actualRollback() throws HibernateException, SessionException {
		_log.info("Executing HibernateTxManager.rollback()");
		try {
			getTransaction().rollback();
			setTransaction(null);
		} catch (HibernateException e) {
			throw new HibernateException(e);
		} finally {
			_session.close();
		}
		_log.info("Transaction Rolled Back");
	}

	private Session getSession() throws SessionException {
		return _session.getSession();
	}

	private int getRefCount() {
		if(_refCount.get() == null) {
			_refCount.set(new Integer(0));
		}
		return ((Integer) _refCount.get()).intValue();
	}
	
	private void setRefCount(int count) {
		_refCount.set(new Integer(count));
	}

	private Transaction getTransaction() {
		return (Transaction) _transaction.get();
	}

	private void setTransaction(Transaction transaction) {
		_transaction.set(transaction);
	}
}
