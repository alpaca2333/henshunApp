package cn.hengshun.model.dataSource;

import org.apache.commons.dbcp.BasicDataSource;

import java.sql.Connection;
import java.sql.SQLException;

/**
 * Mysql 数据源
 * Created by org.alpaca on 2016/12/21.
 */
public class MysqlDataSource extends BasicDataSource {

    /**
     * 默认数据源总是会调用这个方法。然而这个方法是没有被实现的。
     */
    @Override
    public Connection getConnection(String user, String pass) throws SQLException {
        return getConnection();
    }
}
