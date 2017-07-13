package cn.hengshun.model.dao;

import cn.hengshun.model.entity.Client;
import cn.hengshun.model.entity.Customer;

import java.util.List;
import java.util.Set;

/**
 * Created by alpaca on 17-6-7.
 */
public interface IClientDao {
    Client findById(Integer id);

    Client save(Client clerk);

    List<Client> all();

    List<Client> getCustomQuery(String hql);

    void addRelation(Client client, Customer customer);

    Set<Customer> getCustomerList(String clientId);
}
