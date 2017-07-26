package cn.hengshun.model.util;

/**
 * Created by 11946 on 2017/6/26.
 */
public class ErrorCode {

    public static final int NAME_EXIST = 901; // 数据库中已有相同用户名
    public static final int EMPTY_PARAM = 902; // 参数为空

    public static final int CLIENT_QUERY_NOTUNIQUE = 904; // client 的单一查询结果数不为1；


    public static final int CUSTOMER_QUERY_NOTUNIQUE = 903 ; //customer 的单一查询结果数不为1；


    public static final int SUCCESS = 200;

}
