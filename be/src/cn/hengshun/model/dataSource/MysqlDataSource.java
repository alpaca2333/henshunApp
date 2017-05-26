package cn.hengshun.model.dataSource;

import org.apache.commons.dbcp.BasicDataSource;

import java.sql.Connection;
import java.sql.SQLException;

/**
 * Created by org.alpaca on 2016/12/21.
 */
public class MysqlDataSource extends BasicDataSource {
    @Override
    public Connection getConnection(String user, String pass) throws SQLException {
        return getConnection();
    }
}
