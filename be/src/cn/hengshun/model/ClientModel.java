package cn.hengshun.model;

import cn.hengshun.model.dao.IClientDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

/**
 * Created by alpaca on 17-6-7.
 */
@Component
@Scope("prototype")
public class ClientModel {
    private Integer id;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    @Autowired
    private IClientDao clientDao;


}
