package cn.hengshun.model.dao;

import cn.hengshun.model.entity.Client;

import java.util.List;

/**
 * Created by alpaca on 17-6-7.
 */
public interface IClientDao {
    Client findById(Integer id);

    Client save(Client clerk);

    List<Client> all();
}
