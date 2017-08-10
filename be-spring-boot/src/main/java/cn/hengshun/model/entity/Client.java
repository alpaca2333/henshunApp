package cn.hengshun.model.entity;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

/**
 * 客户，门店店主
 * Created by alpaca on 17-5-28.
 */
@Entity(name = "client")
public class Client implements Fetchable<Integer> {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String username;

    private String passwordMd5;

    private String phoneNumber;


    public Client(String username, String passwordMd5, String phoneNumber) {
        super();
        this.username = username;
        this.passwordMd5 = passwordMd5;
        this.phoneNumber = phoneNumber;
    }

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
