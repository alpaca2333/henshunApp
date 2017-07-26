package cn.hengshun.model.dao;

import cn.hengshun.model.entity.Fetchable;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import java.lang.reflect.Field;
import java.sql.Timestamp;
import java.util.Calendar;
import java.util.List;

/**
 * Created by alpaca on 17-2-14.
 */

@Transactional
public class CommonDao<KeyType, EntityType extends Fetchable<KeyType>>{

    CommonDao(Class<EntityType> entityType) {
        this.entityType = entityType;
    }

    public EntityType findById(KeyType id) {
        return em.find(entityType, id);
    }

    public EntityType save(EntityType o) {
        em.persist(o);
        return o;
    }

    public List<EntityType> all() {
        CriteriaBuilder criteriaBuilder = em.getCriteriaBuilder();
        CriteriaQuery<EntityType> query = criteriaBuilder.createQuery(entityType);
        query.select(query.from(entityType));
        return em.createQuery(query).getResultList();
    }

    public List<EntityType> getCustomQuery(String sql) {
        TypedQuery<EntityType> query = em.createQuery(sql, entityType);
        return query.getResultList();
    }

    public boolean customerCreate(String sql){
        em.createNativeQuery(sql);
        return true;
    }

    public boolean touch(EntityType entity) {
        try {
            Field field = entityType.getDeclaredField("modifiedAt");
            field.set(entity, Timestamp.from(Calendar.getInstance().toInstant()));
            em.merge(entity);
        } catch (NoSuchFieldException | IllegalAccessException e) {
            return false;
        }
        return true;
    }

    public void saveAll(List<EntityType> entitys) {
        for (EntityType entity: entitys) {
            em.persist(entity);
        }
    }

    public void refresh(EntityType entity) {
        em.refresh(entity);
    }


    private Class<EntityType> entityType;

    @PersistenceContext(name = "alpacaJPA")
    protected EntityManager em;
}
