package com.company.test.framework.session;

import junit.framework.TestCase;
import net.sf.hibernate.Session;

import org.apache.log4j.Logger;

import com.company.framework.exception.SessionException;
import com.company.framework.session.SessionLocator;

public class SessionLocatorTest extends TestCase
{
    private static Logger _logger = Logger.getLogger(SessionLocatorTest.class);
    
    public SessionLocatorTest(String name)
    {
        super(name);
    }

    protected void setUp() throws Exception
    {
        super.setUp();
    }

    protected void tearDown() throws Exception
    {
        super.tearDown();
    }

    /*
     * Test method for 'com.company.framework.session.SessionLocator.getSession()'
     */
    public void testGetSession()
    {
    		try
            {
                Session _session = SessionLocator.getSession();
                _logger.warn("Get Session :" + _session);
                assertNotNull(_session);
            }
            catch (SessionException e)
            {
            	_logger.debug("Throw Exception !!");
                assertTrue(false);
                e.printStackTrace();
            }
    }

    /*
     * Test method for 'com.company.framework.session.SessionLocator.releaseSession()'
     */
    public void testReleaseSession()
    {

    }

}
