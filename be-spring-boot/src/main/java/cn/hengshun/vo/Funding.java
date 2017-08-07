package cn.hengshun.vo;

import cn.hengshun.model.entity.Customer;

import java.util.List;

public class Funding {

    private Long id;
    private String name;
    private String description;
    private double price;
    private int targetNum;
    private int currentNum;
    private List<Member> members;
    private List<Product> products;

    public Funding(Long id, String name, String description, double price, int targetNum, int currentNum) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
        this.targetNum = targetNum;
        this.currentNum = currentNum;
    }

    public Funding(Long id, String name, String description, double price, int targetNum, int currentNum, List<Customer> customers, List<Product> products) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
        this.targetNum = targetNum;
        this.currentNum = currentNum;
    }

    public Funding(){

    }

    public Funding(cn.hengshun.model.entity.Funding fundingEntity){
        this.id = fundingEntity.getId();
        this.name = fundingEntity.getName();
        this.description = fundingEntity.getDescription();
        this.targetNum = fundingEntity.getTargetNum();
        this.currentNum = fundingEntity.getCurrentNum();
        this.price = fundingEntity.getPrice();
    }


    public List<Member> getMembers() {
        return members;
    }

    public void setMembers(List<Member> members) {
        this.members = members;
    }

    public List<Product> getProducts() {
        return products;
    }

    public void setProducts(List<Product> products) {
        this.products = products;
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

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public int getTargetNum() {
        return targetNum;
    }

    public void setTargetNum(int targetNum) {
        this.targetNum = targetNum;
    }

    public int getCurrentNum() {
        return currentNum;
    }

    public void setCurrentNum(int currentNum) {
        this.currentNum = currentNum;
    }
}
