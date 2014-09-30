package com.company.common.tools;

import net.sf.hibernate.cfg.Configuration;
import net.sf.hibernate.tool.hbm2ddl.SchemaExport;

public class CreateDBSql
{

    public static void main(String[] args)
    {
        try
        {
            Configuration config = new Configuration();
            SchemaExport schema = new SchemaExport(config.configure());
            
            schema.setOutputFile("schema.txt");
            schema.create(true ,false);
        }
        catch(Exception e )
        {
            e.printStackTrace();
        }
    }
}
