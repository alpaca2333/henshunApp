package cn.hengshun.model.repository;

import cn.hengshun.model.entity.Baby;
import cn.hengshun.model.entity.CustomerBaby;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

/**
 * Created by 11946 on 2017/8/10.
 */
public interface CustomerBabyRepository extends JpaRepository<CustomerBaby,Long>{

    @Query(" select b from Baby b , CustomerBaby  cb where b.id=cb.babyId and cb.customerId=?1")
    List<Baby> getBabyByCustomerId(Long customerId);


}
