package cn.hengshun.model.dao;

import cn.hengshun.model.entity.Baby;
import cn.hengshun.model.entity.Customer;

import java.util.List;

/**
 * Created by 11946 on 2017/6/17.
 */
public interface ICustomerDao {

    List<Customer> findCustomerByClientId(String clientId);

    Customer save(Customer customer);

    List<Customer> getCustomQuery(String hql);

    Customer findById(Integer id);

    /**
     * 添加baby 与 parent 之间的关系
     * @param parent
     * @param baby
     * @return
     */
    public int addRelation(Customer parent, Baby baby);

}
