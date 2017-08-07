package cn.hengshun.vo;

import java.util.Date;
import java.util.List;

public class Payment {

    private Long id;

    private Date time;

    private double sum;

    private List<Product> products;

    public Payment(Long id, Date time, double sum, List<Product> products) {
        this.id = id;
        this.time = time;
        this.sum = sum;
        this.products = products;
    }

    public Payment(cn.hengshun.model.entity.Payment paymentEntity){
        this.id = paymentEntity.getId();
        this.time = paymentEntity.getTime();
        this.sum = paymentEntity.getSum();
    }

    public Payment(){

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

    public List<Product> getProducts() {
        return products;
    }

    public void setProducts(List<Product> products) {
        this.products = products;
    }
}
