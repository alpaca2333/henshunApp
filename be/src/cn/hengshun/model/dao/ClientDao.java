package cn.hengshun.model.dao;

import cn.hengshun.model.ClientModel;
import cn.hengshun.model.entity.Client;
import cn.hengshun.model.entity.Customer;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

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
    public void addRelation(Client client, List<Customer> customers) {
        for (Customer customer : customers){
            client.addCustomer(customer);
        }

        save(client);
    }
}
