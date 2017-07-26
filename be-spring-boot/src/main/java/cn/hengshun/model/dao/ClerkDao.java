package cn.hengshun.model.dao;

import cn.hengshun.model.entity.Clerk;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

/**
 * Created by alpaca on 17-6-7.
 */
@Repository
@Transactional
public class ClerkDao extends CommonDao<Integer, Clerk> implements IClerkDao {
    public ClerkDao() {
        super(Clerk.class);
    }
}
