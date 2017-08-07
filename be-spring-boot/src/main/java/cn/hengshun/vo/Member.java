package cn.hengshun.vo;

import cn.hengshun.model.entity.Customer;

public class Member {

    private Long id;

    private String name;

    private String phoneNumber;

    private int amount;

    public Member(Long id, String name, String phoneNumber, int amount) {
        this.id = id;
        this.name = name;
        this.phoneNumber = phoneNumber;
        this.amount = amount;
    }

    public Member(){

    }

    public Member(Customer customer){
        this.id = customer.getId();
        this.name = customer.getName();
        this.phoneNumber = customer.getMobile();
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public int getAmount() {
        return amount;
    }

    public void setAmount(int amount) {
        this.amount = amount;
    }
}
