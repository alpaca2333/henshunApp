package cn.hengshun.vo;

/**
 * product Entity 中缺一个 price 模块
 */
public class Product {

    private Long id;
    private String name;
    private double price;

    public Product(Long id, String name, double price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }

    public Product(cn.hengshun.model.entity.Product productEntity){
        this.id = productEntity.getId();
        this.name = productEntity.getName();
        //todo price
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

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }
}
