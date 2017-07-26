package cn.hengshun.model.dao;

import cn.hengshun.model.dao.repos.IBabyRepo;
import cn.hengshun.model.entity.Baby;
import cn.hengshun.model.entity.Baby_;
import javafx.scene.Parent;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;
import java.util.List;

/**
 * Created by alpaca on 17-6-7.
 */
@Repository
@Transactional
public class BabyDao extends CommonDao<Integer, Baby> implements IBabyDao {
    public BabyDao() {
        super(Baby.class);
    }

    @Override
    public List<Baby> findByParent(Parent parent) {
        return babyRepo.findByParent(parent);
    }

    @Autowired
    private IBabyRepo babyRepo;
}
