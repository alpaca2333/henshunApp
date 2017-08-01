package cn.hengshun.vo;

import cn.hengshun.model.entity.User;

public class UserVO {

    private String userName;

    private String name;

    private String type;

    private String phoneNumber;

    public UserVO(String userName, String name, String type, String phoneNumber) {
        this.userName = userName;
        this.name = name;
        this.type = type;
        this.phoneNumber = phoneNumber;
    }

    public UserVO(User user){
        this.userName = user.getUserName();
        this.name = user.getName();
        this.phoneNumber = user.getPhoneNumber();
        this.type = user.getType();
    }

    public UserVO(){

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
}
