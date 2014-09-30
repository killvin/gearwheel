/*
 * CopyRight 
 * 
 * .....
 * Company comments......
 * .....
 * 
 */

package com.company.framework.persist;

import java.util.List;

import net.sf.hibernate.HibernateException;
import net.sf.hibernate.ObjectNotFoundException;
import net.sf.hibernate.Query;
import net.sf.hibernate.Session;

import com.company.framework.exception.EntityNotFoundException;
import com.company.framework.exception.PersistServiceManageException;
import com.company.framework.session.SessionLocator;

/**
 * HibernatePersistService的产生于DAO这样的反模式是有很大的关系的
 * 提供统一的持久层设计，这样业务对象根本不需要关心底层的持久化结构， 仅仅指需要获取到HibernatePersistService这样的对象即可。
 * 而HibernatePersistService根据给定的对象类型执行相应的持久化操作。
 * 
 * @author Killvin@Hotmail.com
 * @version 1.0
 * 
 * TODO: 抽象出持久化接口IPersistService
 */

public class HibernatePersistService implements IPersistService
{
    /* (non-Javadoc)
     * @see com.company.framework.persist.IPersistService#saveEntity(java.lang.Object)
     */
    public Object saveEntity(Object obj) throws PersistServiceManageException
    {
        try
        {
            currentSession().save(obj);
        }
        catch (Exception e)
        {
            e.printStackTrace();
            throw new PersistServiceManageException(e);
        }
        return obj;
    }

    /* (non-Javadoc)
     * @see com.company.framework.persist.IPersistService#loadEntityById(java.lang.Class, java.lang.Long)
     */
    public Object loadEntityById(Class c, Long id)
            throws EntityNotFoundException, PersistServiceManageException
    {
        try
        {
            return currentSession().load(c, id);
        }
        catch (ObjectNotFoundException e)
        {
            // 框架:业务级异常
            throw new EntityNotFoundException(e);
        }
        catch (Exception e)
        {
            // 框架：系统级异常
            throw new PersistServiceManageException(e);
        }
    }

    /* (non-Javadoc)
     * @see com.company.framework.persist.IPersistService#updateEntity(java.lang.Object)
     */
    public Object updateEntity(Object _obj) throws EntityNotFoundException,
            PersistServiceManageException
    {
        try
        {
            currentSession().update(_obj);
        }
        catch (ObjectNotFoundException e)
        {
            // 框架:业务级异常
            throw new EntityNotFoundException(e);
        }
        catch (Exception e)
        {
            // 框架：系统级异常
            throw new PersistServiceManageException(e);
        }
        return _obj;
    }

    /* (non-Javadoc)
     * @see com.company.framework.persist.IPersistService#removeEntity(java.lang.Class, java.lang.Long)
     */
    public void removeEntity(Class clazz, Long id)
            throws EntityNotFoundException , PersistServiceManageException
    {
        try
        {
            Session session = currentSession();
            Object obj = session.load(clazz, id);
            session.delete(obj);
        }
        catch (ObjectNotFoundException e)
        {
            // 框架:业务级异常
            throw new EntityNotFoundException(e);
        }
        catch (Exception e)
        {
            // 框架：系统级异常
            e.printStackTrace();
            throw new PersistServiceManageException(e);
        }
    }

    /* (non-Javadoc)
     * @see com.company.framework.persist.IPersistService#removeEntity(java.lang.Object)
     */
    public void removeEntity(Object entity)
            throws EntityNotFoundException , PersistServiceManageException
    {
        try
        {
            currentSession().delete(entity);
        }
        catch (ObjectNotFoundException e)
        {
            // 框架:业务级异常
            throw new EntityNotFoundException(e);
        }
        catch (Exception e)
        {
            // 框架：系统级异常
            e.printStackTrace();
            throw new PersistServiceManageException(e);
        }
    }

    /*
     * TODO:
     * public void removeAllEntities(Class clazz) throws
     * PersistServiceManageException { try { currentSession().delete("FROM " +
     * clazz.getName()); } catch (Exception e) { throw new
     * PersistServiceManageException(e); } }
     */

    
    /* (non-Javadoc)
     * @see com.company.framework.persist.IPersistService#executeQuery(java.lang.String)
     */
    public List executeQuery(String _s) throws PersistServiceManageException
    {
        
        try
        {
            Query _query = currentSession().createQuery(_s);
            return _query.list();
        }
        catch (Exception e)
        {
            throw new PersistServiceManageException(e);
        }
    }
//    /**
//     * (UIO)提供符合条件的查询集。
//     * 
//     * @param query
//     *            查询条件， 条件中的且用'&'(转换为" AND entity.")或用'|'((转换为" OR entity."))，
//     *            因此条件'&'与'|'后必需紧跟实例中属性名而不能有空格。
//     * @throws PersistServiceManageException
//     */
//    public List find(String query, Class c)
//            throws PersistServiceManageException
//    {
//        StringBuffer hql = new StringBuffer("FROM entity in class "
//                + c.getName());
//        // StringBuffer hql = new StringBuffer("FROM " + entityType.getName() +
//        // " as entity");
//        String conditions = "";
//        if (query != null)
//        {
//            if ((query.indexOf('=') > 0))
//            {
//                if ((query.indexOf('&') != 1))
//                    conditions = " &" + query;
//            } else
//                conditions = " " + query;
//            if ((conditions.indexOf('&') > 0) || (conditions.indexOf('|') > 0))
//            {
//                conditions = " WHERE (entity.id is not null) " + conditions;
//                conditions = replaceTags(conditions, "&", " AND entity.");
//                conditions = replaceTags(conditions, "|", " OR entity.");
//            }
//        } else
//            conditions = " order by entity.id";
//        hql.append(conditions);
//
//        List entities = null;
//        try
//        {
//            Query querys = currentSession().createQuery(hql.toString());
//            entities = querys.list();
//        }
//        catch (Exception e)
//        {
//            throw new PersistServiceManageException("Error in query :\n" + hql,
//                    e);
//        }
//        return entities;
//    }

//    /*
//     * (non-Javadoc)
//     * 
//     * @see groller.framework.dao.IDAO#remove(java.lang.String, java.lang.Class)
//     */
//    public void remove(String condition, Class entityType)
//            throws PersistServiceManageException
//    {
//        String hql = populateHQL(condition, entityType);
//        try
//        {
//            currentSession().delete(hql);
//        }
//        catch (HibernateException e)
//        {
//            throw new PersistServiceManageException("Error in delet :\n" + hql,
//                    e);
//        }
//    }

    protected Session currentSession() throws HibernateException
    {
        try
        {
            return SessionLocator.getSession();
        }
        catch (Exception e)
        {
            throw new HibernateException(e);
        }
    }

//    private String populateHQL(String condition, Class entityType)
//    {
//        // String[] exps = condition.split("&");
//        String[] exps = StringUtil.split(condition, "&");
//        String hql = "FROM " + entityType.getName() + " entity WHERE ";
//        for (int i = 0; i < exps.length; i++)
//        {
//            hql += ("(entity." + exps[i] + ") AND ");
//        }
//        hql += "(entity.id is not null)";
//        return hql;
//    }
//
//    private String replaceTags(String source, String tag, String replacement)
//    {
//        // change the method to fit jdk1.3
//        return StringUtil.replace(source, tag, replacement);
//        // return source.replaceAll(tag, replacement);
//    }

}
