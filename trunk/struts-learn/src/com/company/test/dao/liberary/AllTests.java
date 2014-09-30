package com.company.test.dao.liberary;

import junit.framework.Test;
import junit.framework.TestSuite;

import com.company.test.dao.liberary.book.BookDaoTest;
import com.company.test.dao.liberary.customer.CustomerDaoTest;

public class AllTests
{

    public static Test suite()
    {
        TestSuite suite = new TestSuite(
                "Test for com.company.test.dao.liberary");
        // $JUnit-BEGIN$
        suite.addTestSuite(BookDaoTest.class);
        suite.addTestSuite(CustomerDaoTest.class);
        // $JUnit-END$
        return suite;
    }

}
