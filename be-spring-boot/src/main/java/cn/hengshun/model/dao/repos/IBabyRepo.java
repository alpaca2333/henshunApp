package cn.hengshun.model.dao.repos;

import cn.hengshun.model.entity.Baby;
import javafx.scene.Parent;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.support.SimpleJpaRepository;

import java.util.List;

/**
 * Created by alpaca on 17-7-26.
 */
public interface IBabyRepo extends JpaRepository<Baby, Integer> {

    @Query("select b from baby b where b.parent = ?1")
    List<Baby> findByParent(Parent parent);
}
