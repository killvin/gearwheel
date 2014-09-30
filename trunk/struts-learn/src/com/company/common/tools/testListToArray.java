package com.company.common.tools;

import org.apache.log4j.Logger;

import java.util.LinkedList;
import java.util.List;

import com.company.vo.Book;

public class testListToArray
{
    /**
     * Logger for this class
     */
    private static final Logger logger = Logger
            .getLogger(testListToArray.class);

    public static void main(String[] args)
    {
        List list = new LinkedList();
        for(int i=0;i<10;i++)
        {
            Book book = new Book();
            book.setId(new Integer(i));
            
            list.add(book);
        }
        
        //Test.....
        Object[] objs = list.toArray();
        logger.debug("Object[].class = " + objs.getClass());
        

        
        Object[] objs_other = list.toArray(new Book[200]);
        logger.debug("Object_other[].class = " + objs_other);

        Book[] books = (Book[])objs_other;
        logger.debug("books[].class = " + books);
        logger.debug("books[].class = " + books.length);
    }
}
