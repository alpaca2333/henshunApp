package cn.hengshun.model.dao;

import cn.hengshun.model.entity.Customer;
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
        List<Customer> resultList = getCustomQuery("");
        return resultList;
    }

}
