package cn.hengshun.vo;

import cn.hengshun.model.entity.Baby;
import cn.hengshun.model.entity.enums.Gender;

import java.sql.Time;
import java.sql.Timestamp;
import java.util.Set;

/**
 * Customer 的个人详细信息
 * 作用于 /api/customer{id}
 * Created by 11946 on 2017/6/29.
 */
public class Customer_detail {

    private int id;
    private String name;
    private Timestamp register;
    private Gender gender;
    private String phoneNumber;
    private Set<Baby_bref> babies;


    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Timestamp getRegister() {
        return register;
    }

    public void setRegister(Timestamp register) {
        this.register = register;
    }

    public Gender getGender() {
        return gender;
    }

    public void setGender(Gender gender) {
        this.gender = gender;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public Set<Baby_bref> getBabies() {
        return babies;
    }

    public void setBabies(Set<Baby_bref> babies) {
        this.babies = babies;
    }
}
