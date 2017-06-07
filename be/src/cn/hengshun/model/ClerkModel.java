package cn.hengshun.model;

import cn.hengshun.model.entity.Fetchable;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

/**
 * Created by alpaca on 17-6-7.
 */
@Component
@Scope("prototype")
public class ClerkModel {
    private Integer id;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }
}
