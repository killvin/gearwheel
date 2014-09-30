/*
 * Created on 2003-10-16
 */
package com.company.application.bo;

import com.company.framework.exception.PersistServiceManageException;
import com.company.framework.persist.IPersistService;

/**
 * @author xiongj xiongj@hzjbbis.com.cn
 */
public class User 
{
    private Long _id;

    private String _account;

    private String _password;

    private String _mail;

    private String _name;

    private IPersistService _persist = null;

    public void setPersistService(IPersistService service)
    {
        _persist = service;
    }

    public User()
    {
        // do nothing.
    }

    // public User(User entity) {
    // try {
    // BeanUtils.copyProperties(this, entity);
    // } catch (Exception e) {
    // throw new DTOException(e);
    // }
    // }
    //	
    // public User updateEntity(User entity) {
    // setId(entity.getId());
    // try {
    // BeanUtils.copyProperties(entity, this);
    // } catch (Exception e) {
    // throw new DTOException(e);
    // }
    // return entity;
    // }

    // 用户发布帖子业务！
    public Post publishNewPost(Post _post) throws PersistServiceManageException
    {
        _post.setOwnerId(this.getId());
        
        //发贴的时间应该以发送时刻为主，而不是在持久化的那一刻！
        //也就是说传递的Post对象本身应该就包含也所有的数据！
        //post.setPostTime(Calendar.getInstance());
        return (Post) _persist.saveEntity(_post);

    }

    // public boolean equals(Object obj) {
    // if(obj == null || !(obj instanceof UserDTO)) {
    // return false;
    // }
    // return ((UserDTO)obj).getId().equals(getId());
    // }
    //
    // public String getAccount() {
    // return _account;
    // }

    public String getUserId()
    {
        return getId().toString();
    }

    public Long getId()
    {
        return _id;
    }

    public String getMail()
    {
        return _mail;
    }

    public String getName()
    {
        return _name;
    }

    public String getPassword()
    {
        return _password;
    }

    public void setAccount(String string)
    {
        _account = string;
    }

    public void setId(Long long1)
    {
        _id = long1;
    }

    public void setMail(String string)
    {
        _mail = string;
    }

    public void setName(String string)
    {
        _name = string;
    }

    public void setPassword(String string)
    {
        _password = string;
    }

}
