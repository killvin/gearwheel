/*
 * Created on 2003-10-27
 *
 * To change the template for this generated file go to
 * Window>Preferences>Java>Code Generation>Code and Comments
 */
package com.company.application.bo;

import java.io.Serializable;
import java.util.Calendar;

/**
 * @author gigix
 *	xiongjie@csdn.net
 */
public class Post implements Serializable {
	private Long _id;
	private Long _ownerId;

	private String _title;
	private String _link;
	private String _description;
	
	private Calendar _postTime;
	private Calendar _updateTime; 

	public Post() {
		// do nothing.
	}
	
//	public Post(Post entity) {
//		try {
//			BeanUtils.copyProperties(this, entity);
//		} catch (Exception e) {
//			throw new DTOException(e);
//		}
//		_ownerId = entity.getOwner().getId();
//	}
//	
//	public Post toEntity(Post entity) {
//		setId(entity.getId());
//		try {
//			BeanUtils.copyProperties(entity, this);
//		} catch (Exception e) {
//			throw new DTOException(e);
//		}
//		return entity;
//	}
//	
//	public boolean equals(Object obj) {
//		if(obj == null || !(obj instanceof PostDTO)) {
//			return false;
//		}
//		return ((PostDTO)obj).getId().equals(getId());
//	}

	public String getDescription() {
		return _description;
	}

	public Long getId() {
		return _id;
	}

	public String getPostId() {
		return getId().toString();
	}

	public String getLink() {
		return _link;
	}

	public Long getOwnerId() {
		return _ownerId;
	}

	public String getTitle() {
		return _title;
	}

	public void setDescription(String string) {
		_description = string;
	}

	public void setId(Long long1) {
		_id = long1;
	}

	public void setLink(String string) {
		_link = string;
	}

	public void setOwnerId(Long long1) {
		_ownerId = long1;
	}

	public void setTitle(String string) {
		_title = string;
	}
	public Calendar getPostTime() {
		return _postTime;
	}

	public Calendar getUpdateTime() {
		return _updateTime;
	}

	public void setPostTime(Calendar calendar) {
		_postTime = calendar;
	}

	public void setUpdateTime(Calendar calendar) {
		_updateTime = calendar;
	}

//	public String getPostTimeInString() {
//		return StringUtil.convertDateToString(_postTime);
//	}
//	
//	public String getUpdateTimeInString() {
//		return StringUtil.convertDateToString(_updateTime);
//	}
}
