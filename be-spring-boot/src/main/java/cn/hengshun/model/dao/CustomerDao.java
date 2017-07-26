package cn.hengshun.model.dao;

import cn.hengshun.model.entity.Baby;
import cn.hengshun.model.entity.Customer;
import cn.hengshun.model.util.ErrorCode;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

/**
 * Created by 11946 on 2017/6/17.
 */
@Repository
@Transactional
public class CustomerDao extends CommonDao<Integer, Customer> implements ICustomerDao {

    CustomerDao() {
        super(Customer.class);
    }

    @Override
    public List<Customer> findCustomerByClientId(String clientId) {
        int id = Integer.parseInt(clientId);
        List<Customer> resultList = getCustomQuery("select c from customer c where c.client.id="+ id);
        return resultList;
    }

    public int addRelation(Customer parent, Baby baby){
        parent.addBaby(baby);
        em.merge(parent);
        em.merge(baby);
        return ErrorCode.SUCCESS;

    }

}
