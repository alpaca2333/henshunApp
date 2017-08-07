package cn.hengshun.model.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.util.Date;

/**
 * 消费信息表
 */
@Entity
public class Payment {

    @Id
    @GeneratedValue
    private Long id;

    private Long customerId;

    private Date time;

    private double sum;

    public Payment(Date time, double sum, Long customerId) {
        super();
        this.time = time;
        this.sum = sum;
        this.customerId = customerId;
    }

    public Payment(){
        super();
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Date getTime() {
        return time;
    }

    public void setTime(Date time) {
        this.time = time;
    }

    public double getSum() {
        return sum;
    }

    public void setSum(double sum) {
        this.sum = sum;
    }

    public Long getCustomerId() {
        return customerId;
    }

    public void setCustomerId(Long customerId) {
        this.customerId = customerId;
    }
}
