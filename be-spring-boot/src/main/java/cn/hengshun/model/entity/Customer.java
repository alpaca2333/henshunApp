package cn.hengshun.model.entity;

import cn.hengshun.model.entity.enums.Gender;
import cn.hengshun.model.entity.enums.Vip;
import cn.hengshun.vo.Customer_bref;
import org.json.JSONObject;

import javax.persistence.*;
import java.sql.Timestamp;
import java.util.HashSet;
import java.util.Set;

/**
 * Created by alpaca on 17-5-27.
 */

@Entity(name = "Customer")
public class Customer {

    @Id
    @GeneratedValue
    private Long id;

    private String name;

    private Gender gender;

    private Timestamp birthday;

    private String mobile;

    private String email;

    private Vip isVip;



    public Customer(Long id, String name, Gender gender, Timestamp birthday, String mobile, String email, Vip isVip) {
        super();
        this.id = id;
        this.name = name;
        this.gender = gender;
        this.birthday = birthday;
        this.mobile = mobile;
        this.email = email;
        this.isVip = isVip;

    }

    public Customer(){

    }

    public Customer(Customer_bref customer_bref){
        if(customer_bref!=null){
            setName(customer_bref.getName());
            setMobile(customer_bref.getPhoneNumber());
            setGender(customer_bref.getGender().equals("male")?Gender.male:Gender.female);
            //setBirthday();
            //todo

        }
    }

    public Customer(JSONObject jsonObject){
        if(jsonObject!= null ){
            setName(jsonObject.optString("name"));
            setMobile(jsonObject.optString("phoneNumber"));
            setGender(jsonObject.optString("gender").equals("男")?Gender.male : Gender.female);
            //todo birthday
        }
    }


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    @Column(columnDefinition = "varchar(32) not null")
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @Column(columnDefinition = "int(11) not null default 0")
    public Gender getGender() {
        return gender;
    }

    public void setGender(Gender gender) {
        this.gender = gender;
    }

    public Timestamp getBirthday() {
        return birthday;
    }

    public void setBirthday(Timestamp birthday) {
        this.birthday = birthday;
    }

    public String getMobile() {
        return mobile;
    }

    public void setMobile(String mobile) {
        this.mobile = mobile;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Vip getVip() {
        return isVip;
    }

    public void setVip(Vip vip) {
        isVip = vip;
    }


}
