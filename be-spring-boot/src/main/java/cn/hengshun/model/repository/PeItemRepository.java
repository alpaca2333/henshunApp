package cn.hengshun.model.repository;

import cn.hengshun.model.entity.PeItem;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

/**
 * Created by 11946 on 2017/8/15.
 */
public interface PeItemRepository extends JpaRepository<PeItem,Long> {

    List<PeItem> getPeItemsByPeid(Long babyId);
}
