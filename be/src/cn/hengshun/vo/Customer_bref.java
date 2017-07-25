package cn.hengshun.vo;

import cn.hengshun.model.entity.Customer;
import cn.hengshun.model.entity.enums.Gender;

/**
 *
 * customer 的简略信息
 * 作用于/api/my/customers
 *
 * Created by 11946 on 2017/6/27.
 */
public class Customer_bref {

    private String id ;
    private String name;
    private String register;
    private String gender;
    private String phoneNumber;

    public Customer_bref(Customer customer){
         this.gender = customer.getGender()== Gender.male? "male" : "female";
         this.id = customer.getId()+"";
         this.register = customer.getBirthday()+"";
         this.phoneNumber = customer.getMobile();
         this.name = customer.getName();
    }

    public Customer_bref(){}

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getRegister() {
        return register;
    }

    public void setRegister(String register) {
        this.register = register;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }
}
