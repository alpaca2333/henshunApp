package cn.hengshun.model.entity;

import cn.hengshun.util.Constants;
import cn.hengshun.vo.UserVO;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class User {

    @Id
    @GeneratedValue
    private Long id;

    private String userName;

    private String name;

    private String type;

    private String phoneNumber;

    private String password;

    public User(String userName, String name, String type, String phoneNumber, String password) {
        super();
        this.userName = userName;
        this.name = name;
        this.type = type;
        this.phoneNumber = phoneNumber;
        this.password = password;
    }

    public User(UserVO userVO){
        this.userName = userVO.getUserName();
        this.name = userVO.getName();
        this.type = userVO.getType();
        this.password = Constants.PSW;
        this.phoneNumber = userVO.getPhoneNumber();
    }

    public User(){
        super();
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
