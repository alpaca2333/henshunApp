package cn.hengshun.model.dao;

import cn.hengshun.model.ClerkModel;
import cn.hengshun.model.entity.Clerk;

/**
 * Created by alpaca on 17-6-7.
 */
public interface IClerkDao {
    Clerk findById(Integer id);

    Clerk save(Clerk clerk);
}
