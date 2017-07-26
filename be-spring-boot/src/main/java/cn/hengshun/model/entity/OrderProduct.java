package cn.hengshun.model.entity;

import javax.persistence.*;

/**
 * 消费记录中，每个订单都会包括多个产品。
 * 这张表是产品和订单的多对多的关系表。
 * Created by alpaca on 17-5-31.
 */
@Entity(name = "order_product")
public class OrderProduct implements Fetchable<Integer> {
    private Integer id;

    private Product product;

    private Integer amount;

    private Float price;

    private Order order;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "productId")
    public Product getProduct() {
        return product;
    }

    public void setProduct(Product product) {
        this.product = product;
    }

    public Integer getAmount() {
        return amount;
    }

    public void setAmount(Integer amount) {
        this.amount = amount;
    }

    public Float getPrice() {
        return price;
    }

    public void setPrice(Float price) {
        this.price = price;
    }

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "orderId")
    public Order getOrder() {
        return order;
    }

    public void setOrder(Order order) {
        this.order = order;
    }
}
