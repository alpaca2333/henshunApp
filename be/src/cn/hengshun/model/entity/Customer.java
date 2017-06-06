package cn.hengshun.model.entity;

import cn.hengshun.model.entity.enums.Gender;

import javax.persistence.*;
import java.sql.Timestamp;

/**
 * Created by alpaca on 17-5-27.
 */

@Entity(name = "customer")
public class Customer implements Fetchable<Integer> {
    private Integer id;

    private String name;

    private Gender gender;

    private Timestamp birthday;

    private String mobile;

    private String email;

    private Boolean isVip;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
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

    public Boolean getVip() {
        return isVip;
    }

    public void setVip(Boolean vip) {
        isVip = vip;
    }

}
