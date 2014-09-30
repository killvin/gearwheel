
/*
 * CopyRight 
 * 
 * .....
 * Company comments......
 * .....
 * 
 */
package com.company.framework.persist;

/**
 * IPersistService产生于HibernatePersistService的抽象
 * 从而为系统提供了"可插拔的持久层"设计
 * 
 * @author Killvin@Hotmail.com
 * @version 1.0
 * 
 */
import java.util.List;
import com.company.framework.exception.EntityNotFoundException;
import com.company.framework.exception.PersistServiceManageException;

public interface IPersistService
{

    /**
     *  Save Entity
     */
    public abstract Object saveEntity(Object obj)
            throws PersistServiceManageException;

    /**
     * Load Entity by id
     */
    public abstract Object loadEntityById(Class c, Long id)
            throws EntityNotFoundException, PersistServiceManageException;

    /**
     * Update Entity
     */
    public abstract Object updateEntity(Object _obj)
            throws EntityNotFoundException, PersistServiceManageException;

    /**
     * Remove Entity
     */
    public abstract void removeEntity(Class clazz, Long id)
            throws EntityNotFoundException, PersistServiceManageException;

    public abstract void removeEntity(Object entity)
            throws EntityNotFoundException, PersistServiceManageException;

    /**
     * execute hql
     * 对于复杂的查询，提供了执行hql语句的能力，hql语句的介绍请参照Hibernate文档
     * @throws PersistServiceManageException 
     */
    public abstract List executeQuery(String _s)
            throws PersistServiceManageException;

}