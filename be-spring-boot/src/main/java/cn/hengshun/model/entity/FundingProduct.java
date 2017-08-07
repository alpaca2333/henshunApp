package cn.hengshun.model.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class FundingProduct {

    @Id
    @GeneratedValue
    private Long id;

    private Long fundingId;

    private Long productId;

    public FundingProduct(Long fundingId, Long productId) {
        super();
        this.fundingId = fundingId;
        this.productId = productId;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getFundingId() {
        return fundingId;
    }

    public void setFundingId(Long fundingId) {
        this.fundingId = fundingId;
    }

    public Long getProductId() {
        return productId;
    }

    public void setProductId(Long productId) {
        this.productId = productId;
    }
}
