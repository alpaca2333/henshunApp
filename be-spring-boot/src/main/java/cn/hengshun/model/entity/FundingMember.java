package cn.hengshun.model.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class FundingMember {

    @Id
    @GeneratedValue
    private Long id;

    private Long fundingId;

    private Long memberId;

    private int amount;

    public FundingMember(Long fundingId, Long memberId, int amount) {
        super();
        this.fundingId = fundingId;
        this.memberId = memberId;
        this.amount = amount;
    }

    public FundingMember(){

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

    public Long getMemberId() {
        return memberId;
    }

    public void setMemberId(Long memberId) {
        this.memberId = memberId;
    }

    public int getAmount() {
        return amount;
    }

    public void setAmount(int amount) {
        this.amount = amount;
    }
}
