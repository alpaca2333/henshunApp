package cn.hengshun.model.dao;

import cn.hengshun.model.entity.Baby;
import cn.hengshun.model.entity.Baby_;
import javafx.scene.Parent;

import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;
import java.util.List;

/**
 * Created by alpaca on 17-6-7.
 */
public class BabyDao extends CommonDao<Integer, Baby> implements IBabyDao {
    public BabyDao() {
        super(Baby.class);
    }

    @Override
    public List<Baby> findByParent(Parent parent) {
        CriteriaBuilder cb = em.getCriteriaBuilder();
        CriteriaQuery<Baby> query = cb.createQuery(Baby.class);
        Root<Baby> baby = query.from(Baby.class);
        Predicate condition = cb.equal(baby.get(Baby_.parent), parent);
        query.where(condition);
        return em.createQuery(query).getResultList();
    }
}
