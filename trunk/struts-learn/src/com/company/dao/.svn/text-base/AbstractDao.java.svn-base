package com.company.dao;

import java.util.List;

import net.sf.hibernate.HibernateException;
import net.sf.hibernate.ObjectNotFoundException;
import net.sf.hibernate.Query;
import net.sf.hibernate.Session;
import net.sf.hibernate.Transaction;

import com.company.persist.manager.HibernateSessionFactory;

public class AbstractDao
{
    /**
     * TODO
     * @param c
     * @param id
     * @return
     * @throws HibernateException
     */
    protected Object getEntity(Class c , Integer id) throws HibernateException
    {
        /* a return object */
        Object _object = null;
        /* a Hibernate session */
        Session session = null;
        /* we always need a transaction */
        Transaction tx = null;
        try
        {
            /* get session of the current thread */
            session = HibernateSessionFactory.currentSession();

            tx = session.beginTransaction();
            _object = session.load(c , id);
            tx.commit();
        }
        catch(ObjectNotFoundException e)
        {
            //this is a hibernate bug!
        }
        catch (Exception e)
        {
            tx.rollback();
            throw new HibernateException(e);
        } finally
        {
            if (session != null) session.close();
        }
        return _object;
    }
    
    /**
     * TODO:
     * @param obj
     * @return
     * @throws HibernateException
     */
    protected Integer saveEntity(Object obj) throws HibernateException
    {
        /* a return objce */
        Integer id = null;
        /* a Hibernate session */
        Session session = null;
        /* we always need a transaction */
        Transaction tx = null;
        try
        {
            /* get session of the current thread */
            session = HibernateSessionFactory.currentSession();
            tx = session.beginTransaction();
            
            id = (Integer) session.save(obj);
            
            tx.commit();
        }
        catch (Exception e)
        {
            tx.rollback();
            throw new HibernateException(e);
        } finally
        {
            if (session != null) session.close();
        }
        
        return id;
    }
    /**
     * TODO:
     * @param obj
     * @return
     * @throws HibernateException
     */
    protected void updateEntity(Object obj) throws HibernateException
    {
        /* a return objce */
        Integer id = null;
        /* a Hibernate session */
        Session session = null;
        /* we always need a transaction */
        Transaction tx = null;
        try
        {
            /* get session of the current thread */
            session = HibernateSessionFactory.currentSession();
            tx = session.beginTransaction();
            
            session.update(obj);
            
            tx.commit();
        }
        catch (Exception e)
        {
            tx.rollback();
            throw new HibernateException(e);
        } finally
        {
            if (session != null) session.close();
        }
    }    
    /**
     * TODO
     * @param c
     * @param id
     * @throws HibernateException
     */
    protected void removeEntity(Class c , Integer id) throws HibernateException
    {
        /* a Hibernate session */
        Session session = null;
        /* we always need a transaction */
        Transaction tx = null;

        try
        {
            /* get session of the current thread */
            session = HibernateSessionFactory.currentSession();

            tx = session.beginTransaction();
            Object _obj = session.get(c , id);
            session.delete(_obj);
            tx.commit();
        }
        catch (Exception e)
        {
            tx.rollback();
            throw new HibernateException(e);
        } finally
        {
            if (session != null) session.close();
        }
    }
    
    /**
     * TODO
     * @param hql
     * @return
     * @throws HibernateException
     */
    protected List executeHql(String hql) throws HibernateException
    {
        /* return list objecs */
        List list = null;
        /* a Hibernate session */
        Session session = null;
        /* we always need a transaction */
        Transaction tx = null;
        try
        {
            /* get session of the current thread */
            session = HibernateSessionFactory.currentSession();

            tx = session.beginTransaction();
            Query query = session.createQuery(hql);
            list = query.list();
            tx.commit();
        }
        catch (Exception e)
        {
            tx.rollback();
            throw new HibernateException(e);
        } finally
        { 
            if (session != null) session.close();
        }
        return list;
    }
}
