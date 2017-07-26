package cn.hengshun.model;

import cn.hengshun.model.dao.IClientDao;
import cn.hengshun.model.dao.ICustomerDao;
import cn.hengshun.model.entity.Client;
import cn.hengshun.model.entity.Customer;
import cn.hengshun.model.util.ErrorCode;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Set;

/**
 * Created by alpaca on 17-6-7.
 */
@Component
@Scope("prototype")
public class ClientModel {
    private Integer id;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    /**
     * 注册或者添加一个新的client
     * @param name
     * @param password
     * @param phoneNumber
     * @return
     */
    public int addClient(String name, String password, String phoneNumber){
        //重名检查
        List<Client> resultSet = clientDao.getCustomQuery("select c from client c where c.username='"+ name +"'");
        if(resultSet.size()>0){
            return ErrorCode.NAME_EXIST;
        }else{
            //通过重名检查
            Client client = new Client();
            client.setUsername(name);
            client.setPasswordMd5(password);
            client.setPhoneNumber(phoneNumber);
            clientDao.save(client);
            return ErrorCode.SUCCESS;
        }

    }

    /**
     * 添加client 与 customer 之间的关联关系
     * @param clientName
     * @param customerName
     * @return
     */
    public int addRelation(String clientName, String customerName){
        List<Customer> customers = customerDao.getCustomQuery("select c from customer c where c.name='"+customerName+"'");
        if(customers.size()!=1){
            return ErrorCode.CUSTOMER_QUERY_NOTUNIQUE;
        }
        List<Client> clients = clientDao.getCustomQuery("select c from client c where c.username='"+clientName+"'");
        if(clients.size()!=1){
            return ErrorCode.CLIENT_QUERY_NOTUNIQUE;
        }

        Customer customer = customers.get(0);
        Client client = clients.get(0);
       clientDao.addRelation(client, customer);

        return ErrorCode.SUCCESS;
    }

    public Set<Customer> queryCustomerByClientId(String clientId){
        return clientDao.getCustomerList(clientId);
    }


    @Autowired
    private IClientDao clientDao;

    @Autowired
    private ICustomerDao customerDao;


}
