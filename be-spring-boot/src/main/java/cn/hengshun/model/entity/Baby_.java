package cn.hengshun.model.entity;

import javafx.scene.Parent;

import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;

/**
 * Created by alpaca on 17-6-7.
 */
@StaticMetamodel(Baby.class)
public class Baby_ {
    public static SingularAttribute<Baby, Parent> parent;
}
