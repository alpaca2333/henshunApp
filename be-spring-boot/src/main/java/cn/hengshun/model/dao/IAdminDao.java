package cn.hengshun.model.dao;


import cn.hengshun.model.entity.Admin;

import java.util.List;

/**
 * Created by alpaca on 17-6-7.
 */
public interface IAdminDao {
    Admin findById(Integer id);

    Admin save(Admin clerk);

    List<Admin> all();
}
