package cn.hengshun.model.repository;

import cn.hengshun.model.entity.Pe;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Created by 11946 on 2017/8/15.
 */
@Repository
public interface PeRepository  extends JpaRepository<Pe, Long>{

    List<Pe> getPesByBabyId(Long babyId);

}
