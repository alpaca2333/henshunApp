package cn.hengshun.model.dao;

import cn.hengshun.model.entity.Admin;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

/**
 * Created by alpaca on 17-6-7.
 */
@Repository
@Transactional
public class AdminDao extends CommonDao<Integer, Admin> implements IAdminDao {
    public AdminDao() {
        super(Admin.class);
    }
}
