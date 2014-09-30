/*
 * Created on 2003-10-28
 *
 * To change the template for this generated file go to
 * Window>Preferences>Java>Code Generation>Code and Comments
 */
package com.company.application.service;

import com.company.application.bo.Post;
import com.company.application.bo.User;
import com.company.application.exception.UserNotExistException;
import com.company.application.exception.UserServiceManageExceptin;
import com.company.framework.exception.EntityNotFoundException;
import com.company.framework.persist.IPersistService;

/**
 * 编写一个使用PersistService的例子，从而体验真正的透明持久化设计 而不是盲目的运用DAO模式！
 */
public class UserService
{
    /*
     * private PostDAO _postDao; private UserDAO _userDao; private ReplyDAO
     * _replyDao;
     * 
     * public void setPostDao(PostDAO dao) { _postDao = dao; }
     * 
     * public void setUserDao(UserDAO dao) { _userDao = dao; }
     * 
     * public void setReplyDao(ReplyDAO dao) { _replyDao = dao; }
     */

    private IPersistService _persist = null;

    public void setPersistService(IPersistService service)
    {
        _persist = service;
    }

    /*
     * (non-Javadoc)
     * 
     * @see groller.application.service.PostService#publishNewPost(groller.application.dto.PostDTO)
     * 
     * public PostDTO publishNewPost(Long userId, PostDTO dto) { User owner =
     * _userDao.load(userId); Post entity = _postDao.create(owner); entity =
     * dto.toEntity(entity); entity.setPostTime(Calendar.getInstance());
     * _postDao.update(entity); return new PostDTO(entity); }
     */
    /**
     * 看我们如何简化设计
     */

    public Post publishNewPost(Long _userId, Post _post)
            throws UserNotExistException, UserServiceManageExceptin
    {
        try
        {
            User _user = (User) _persist.loadEntityById(User.class, _userId);
            return _user.publishNewPost(_post);
        }
        catch (EntityNotFoundException e)
        {
            //框架:业务异常 -->> 应用:业务异常
            throw new UserNotExistException(e);
        }
        catch (Exception e)
        {
            //应用:系统异常
            throw new UserServiceManageExceptin(e);
        }

    }

    // /*
    // * 由于对帖子的修改属于帖子管理对象的责任，因而此时的操作环境
    // * 不在业务对象本身而在业务管理对象上!
    // */
    // public Post modifyPost(Post _newPost) throws PostNotExistException ,
    // UserServiceManageExceptin
    // {
    // try
    // {
    // Post _oldPost = _persist.load(_newPost.getId());
    // //将_newPost的数据考入到_oldPost中
    // BeanUtils.copyProperties(_oldPost, _newPost);
    // return (Post)_persist.update(_oldPost);
    // }
    // catch(EntityNotFoundException e)
    // {
    // throw new PostNotExistException(e);
    // }
    // catch(Exception e)
    // {
    // throw new UserServiceManageExceptin(e);
    // }
    //		
    // }
    //	
    //
    // /*
    // * 删除帖子属于帖子管理对象的责任
    // */
    // public void removePostById(Long postId) throws PostNotExistException ,
    // UserServiceManageExceptin
    // {
    // try
    // {
    // Post post = _persist.load(postId);
    // _persist.remove(entity);
    // }
    // catch(EntityNotFoundException e)
    // {
    // throw new PostNotExistException(e);
    // }
    // catch(Exception e)
    // {
    // throw new UserServiceManageExceptin(e);
    // }
    // }
    //
    //
    // /*
    // * 获取用户发布的所有的帖子属于用户的责任！
    // */
    // public Set getAllPostsOfUser(Long userId) throws
    // UserNotExistException,UserServiceManageExceptin
    // {
    // try
    // {
    // User _user = _persist.load(userId);
    // return _user.getAllPosts();
    // }
    // catch(EntityNotFoundException e)
    // {
    // throw new UserNotExistException(e);
    // }
    // catch(Exception e)
    // {
    // throw new UserServiceManageExceptin(e);
    // }
    //		
    // }
    //
    // //寻找所有标题相同的帖子属于帖子管理对象的责任
    // public List findPostsByTitle(String title) throws
    // UserServiceManageExceptin
    // {
    // try
    // {
    // //描写hql语句
    // String hql = "";
    // List _list = _persist.find(hql);
    // return _list;
    //			
    // /*
    // Post[] entities = _postDao.findByTitle(title);
    // PostDTO[] result = new PostDTO[entities.length];
    // for(int i = 0; i < result.length; i++) {
    // result[i] = new PostDTO(entities[i]);
    // }
    // return result;
    // */
    // }
    // catch(Exception e)
    // {
    // throw new UserServiceManageExceptin(e);
    // }
    //			
    // }
    //
    // /* (non-Javadoc)
    // * @see
    // groller.application.service.PostService#publishNewReply(java.lang.Long,
    // groller.application.dto.ReplyDTO)
    // */
    // public ReplyDTO publishNewReply(Long postId, ReplyDTO dto) {
    // Post owner = _postDao.load(postId);
    // Reply entity = _replyDao.create(owner);
    // entity = dto.toEntity(entity);
    // entity.setPostTime(Calendar.getInstance());
    // return new ReplyDTO(_replyDao.update(entity));
    // }
    //
    // /* (non-Javadoc)
    // * @see
    // groller.application.service.PostService#getAllRepliesOfPost(java.lang.Long)
    // */
    // public ReplyDTO[] getAllRepliesOfPost(Long postId) {
    // Post owner = _postDao.load(postId);
    // Set replies = owner.getReplies();
    //		
    // List temp = new ArrayList(replies);
    // Collections.sort(temp, new IdComparator());
    //		
    // ReplyDTO[] result = new ReplyDTO[replies.size()];
    // int i = 0;
    // for(Iterator it = temp.iterator(); it.hasNext(); i++) {
    // Reply entity = (Reply) it.next();
    // result[i] = new ReplyDTO(entity);
    // }
    //		
    // return result;
    // }
    //
    // /* (non-Javadoc)
    // * @see
    // groller.application.service.PostService#loadPostById(java.lang.Long)
    // */
    // public PostDTO loadPostById(Long id) {
    // Post entity = _postDao.load(id);
    // return new PostDTO(entity);
    // }

}
