package cn.hengshun.model;

import cn.hengshun.model.dao.IBabyDao;
import cn.hengshun.model.dao.ICustomerDao;
import cn.hengshun.model.entity.Baby;
import cn.hengshun.model.entity.Customer;
import cn.hengshun.model.entity.enums.Gender;
import cn.hengshun.model.util.ErrorCode;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

import java.sql.Timestamp;

/**
 * Created by 11946 on 2017/6/27.
 */
@Component
@Scope("prototype")
public class BabyModel {
    private Integer id;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    /**
     * 添加一个新的 baby
     */

    public int addBaby(String name, Timestamp birthday, Gender gender, int parentid){

        Customer customer = customerDao.findById(parentid);

        Baby baby = new Baby();
        baby.setName(name);
        baby.setBirthday(birthday);
        baby.setGender(gender);
        babyDao.save(baby);

        customerDao.addRelation(customer, baby);

        return ErrorCode.SUCCESS;

    }

    @Autowired
    private IBabyDao babyDao;

    @Autowired
    private ICustomerDao customerDao;


}
