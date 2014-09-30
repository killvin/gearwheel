/*
 * Created on 2003-9-18
 */
package com.company.framework.transaction;

import org.apache.log4j.Logger;

/**
 * @author xiongj
 */
public class MockTxManager implements ITxManager {
	private Logger _log = Logger.getLogger(MockTxManager.class);

	/* (non-Javadoc)
	 * @see gigix.transaction.TxManager#beginTransaction()
	 */
	public void beginTransaction() {
		_log.info("Transaction Begined");
	}

	/* (non-Javadoc)
	 * @see gigix.transaction.TxManager#commit()
	 */
	public void commit() {
		_log.info("Transaction Commited");
	}

	/* (non-Javadoc)
	 * @see gigix.transaction.TxManager#rollback()
	 */
	public void rollback() {
		_log.info("Transaction Rolled Back");
	}

	/* (non-Javadoc)
	 * @see groller.framework.transaction.ITxManager#releaseResource()
	 */
	public void releaseResource() {
		_log.info("All Resource Released");
	}

}
