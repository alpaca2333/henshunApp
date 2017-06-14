package cn.hengshun.model;

import cn.hengshun.model.dao.IClientDao;
import cn.hengshun.model.entity.Client;
import cn.hengshun.model.entity.Fetchable;
import cn.hengshun.util.SpringUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

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

    public List<ClientModel> getAllClients() {
        // 考虑到服务器只是双核的，就不用Stream了
        List<ClientModel> result = new ArrayList<>();
        for (Client client: clientDao.all()) {
            result.add(SpringUtil.getBean(ClientModel.class, client));
        }
        return result;
    }

    @Autowired
    private IClientDao clientDao;
}
