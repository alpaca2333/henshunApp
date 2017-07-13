package cn.hengshun.model.dao;

import cn.hengshun.model.ClientModel;
import cn.hengshun.model.entity.Client;
import cn.hengshun.model.entity.Customer;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

/**
 * Created by alpaca on 17-6-7.
 */
@Repository
@Transactional
public class ClientDao extends CommonDao<Integer, Client> implements IClientDao {
    public ClientDao() {
        super(Client.class);
    }

    @Override
    public void addRelation(Client client, Customer customer) {
        client.addCustomer(customer);
        em.merge(client);
        em.merge(customer);
    }

    @Override
    public Set<Customer> getCustomerList(String clientId) {
        int id = Integer.parseInt(clientId);
       Client client = findById(id);
       Set<Customer> result = client.getCustomers();
       return result;
    }
}
