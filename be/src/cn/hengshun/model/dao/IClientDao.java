package cn.hengshun.model.dao;

import cn.hengshun.model.entity.Client;
import cn.hengshun.model.entity.Customer;

import java.util.List;

/**
 * Created by alpaca on 17-6-7.
 */
public interface IClientDao {
    Client findById(Integer id);

    Client save(Client clerk);

    List<Client> all();

    void addRelation(Client client, List<Customer> customers);
}
