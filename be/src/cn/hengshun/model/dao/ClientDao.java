package cn.hengshun.model.dao;

import cn.hengshun.model.ClientModel;
import cn.hengshun.model.entity.Client;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

/**
 * Created by alpaca on 17-6-7.
 */
@Repository
@Transactional
public class ClientDao extends CommonDao<Integer, Client> implements IClientDao {
    public ClientDao() {
        super(Client.class);
    }
}
