package cn.hengshun.model.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

/**
 * Created by 11946 on 2017/8/10.
 */
@Entity
public class CustomerBaby {

    @Id
    @GeneratedValue
    private Long id;

    private Long babyId;

    private Long customerId;

    public CustomerBaby(Long babyId, Long customerId) {
        super();
        this.babyId = babyId;
        this.customerId = customerId;
    }

    public CustomerBaby(){
        super();
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getBabyId() {
        return babyId;
    }

    public void setBabyId(Long babyId) {
        this.babyId = babyId;
    }

    public Long getCustomerId() {
        return customerId;
    }

    public void setCustomerId(Long customerId) {
        this.customerId = customerId;
    }
}
