package cn.hengshun.model.dao;

import cn.hengshun.model.entity.Baby;
import javafx.scene.Parent;

import java.util.List;

/**
 * Created by alpaca on 17-6-7.
 */
public interface IBabyDao {
    Baby findById(Integer id);

    List<Baby> findByParent(Parent parent);

    Baby save(Baby baby);
}
