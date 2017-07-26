package cn.hengshun.model;

import cn.hengshun.model.dao.ICustomerDao;
import cn.hengshun.model.entity.Baby;
import cn.hengshun.model.entity.Customer;
import cn.hengshun.model.entity.enums.Gender;
import cn.hengshun.model.entity.enums.Vip;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

import java.sql.Timestamp;

/**
 * Created by 11946 on 2017/6/22.
 */
@Component
@Scope("prototype")
public class CustomerModel {

    public boolean addCustomer(String name, Gender gender, Timestamp birthday, String mobile,
                    String email, Vip isVip){
        Customer customer = new Customer();
        customer.setName(name);
        customer.setGender(gender);
        customer.setBirthday(birthday);
        customer.setMobile(mobile);
        customer.setEmail(email);
        customer.setVip(isVip);

        Customer result = customerDao.save(customer);
        if(result==null){
            return false;
        }else{
            return true;
        }
    }

    public boolean addCustomer(Customer customer){
        Customer result = customerDao.save(customer);
        if(result.getId()!=null){
            return true;
        }else{
            return false;
        }
    }




    @Autowired
    private ICustomerDao customerDao;
}
