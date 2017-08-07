package cn.hengshun.model.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.util.Date;

/**
 * 消费行为和具体的商品间的关联表
 */
@Entity
public class PaymentProduct {

    @Id
    @GeneratedValue
    private Long id;

    private Long paymentId;

    private Long productId;

    public PaymentProduct(Long paymentId, Long productId) {
        super();
        this.paymentId = paymentId;
        this.productId = productId;
    }

    public PaymentProduct(){
        super();
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getPaymentId() {
        return paymentId;
    }

    public void setPaymentId(Long paymentId) {
        this.paymentId = paymentId;
    }

    public Long getProductId() {
        return productId;
    }

    public void setProductId(Long productId) {
        this.productId = productId;
    }
}
