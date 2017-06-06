package cn.hengshun.model.entity;

import javax.persistence.*;
/**
 * Created by alpaca on 17-5-28.
 */
@Entity(name = "client")
public class Client implements Fetchable<Integer> {
    private Integer id;

    private String username;

    private String passwordMd5;

    private String phoneNumber;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPasswordMd5() {
        return passwordMd5;
    }

    public void setPasswordMd5(String passwordMd5) {
        this.passwordMd5 = passwordMd5;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }
}