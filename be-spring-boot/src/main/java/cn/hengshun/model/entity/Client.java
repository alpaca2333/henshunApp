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
    private Integer id;

    private String username;

    private String passwordMd5;

    private String phoneNumber;

    private Set<Customer> customers =  new HashSet<>(); //添加 Client 和 customer 的一对多关系

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

    @OneToMany(targetEntity=Customer.class,cascade= CascadeType.ALL,orphanRemoval=true,fetch= FetchType.EAGER,
    mappedBy = "client")//这里配置关系，并且确定关系维护端和被维护端。mappBy表示关系被维护端，只有关系端有权去更新外键。这里还有注意OneToMany默认的加载方式是赖加载。当看到设置关系中最后一个单词是Many，那么该加载默认为懒加载
    public Set<Customer> getCustomers() {
        return customers;
    }

    public void setCustomers(Set<Customer> customers) {
        this.customers = customers;
    }

    /**
     * 该方法用于向customer 中加 customer项
     * @param customer
     */
    public void addCustomer(Customer customer){
       customer.setClient(this);
       this.customers.add(customer);
    }
}
