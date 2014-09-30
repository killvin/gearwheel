/*
 * 创建日期 2005-9-22
 *
 * 更改所生成文件模板为
 * 窗口 > 首选项 > Java > 代码生成 > 代码和注释
 */
package com.company.tag.data.inf;

import java.util.List;

public interface ITagDataInfo
{
	
	//获取指定行的记录数组
	public List[] getLineList(int lineNum);
	
	//获取指定行index到index+size行的记录数组
	public List[] getLineList(int index ,int size);
	
	//获取指定的行,以及制定的列之内的行级数据
	public List[] getList(int lineSize ,int columnSize);
	
	//获取记录总数
	public int getRecordCount();
}
