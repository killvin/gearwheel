/*
 * �������� 2005-9-22
 *
 * �����������ļ�ģ��Ϊ
 * ���� > ��ѡ�� > Java > �������� > �����ע��
 */
package com.company.tag.data.inf;

import java.util.List;

public interface ITagDataInfo
{
	
	//��ȡָ���еļ�¼����
	public List[] getLineList(int lineNum);
	
	//��ȡָ����index��index+size�еļ�¼����
	public List[] getLineList(int index ,int size);
	
	//��ȡָ������,�Լ��ƶ�����֮�ڵ��м�����
	public List[] getList(int lineSize ,int columnSize);
	
	//��ȡ��¼����
	public int getRecordCount();
}
