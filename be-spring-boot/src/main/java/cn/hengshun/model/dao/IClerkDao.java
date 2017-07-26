package cn.hengshun.model.dao;

import cn.hengshun.model.entity.Clerk;

import java.util.List;

/**
 * Created by alpaca on 17-6-7.
 */
public interface IClerkDao {
    Clerk findById(Integer id);

    Clerk save(Clerk clerk);

    public List<Clerk> getCustomQuery(String sql);

}
