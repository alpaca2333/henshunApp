package cn.hengshun.model.repository;

import cn.hengshun.model.entity.Customer;
import cn.hengshun.model.entity.FundingMember;
import cn.hengshun.vo.Member;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface FundingMemberRepository  extends JpaRepository<FundingMember,Long> {

    @Query(" select c from Customer c , FundingMember  fm where c.id = fm.memberId and fm.fundingId=?1")
    List<Customer> findMemberByFundingId (Long id);

    List<FundingMember> findFundingMemberById(Long id);

    FundingMember findFundingMemberByMemberIdAndFundingId(Long memberId, Long fundingId);

}
