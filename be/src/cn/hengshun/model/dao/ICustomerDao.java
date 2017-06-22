package cn.hengshun.model.dao;

import cn.hengshun.model.entity.Customer;

import java.util.List;

/**
 * Created by 11946 on 2017/6/17.
 */
public interface ICustomerDao {

    List<Customer> findCustomerByClientId(String clientId);

    Customer save(Customer customer);

}
