package cn.hengshun.model;

import cn.hengshun.model.dao.IAdminDao;
import cn.hengshun.model.dao.IClerkDao;
import cn.hengshun.model.dao.IClientDao;
import cn.hengshun.model.entity.Admin;
import cn.hengshun.model.entity.Clerk;
import cn.hengshun.model.entity.Client;
import cn.hengshun.util.SpringUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

/**
 * Created by alpaca on 17-6-7.
 */
@Component
@Scope("prototype")
public class AdminModel {

    public static AdminModel getAdmin(Integer id) {
        IAdminDao adminDao = SpringUtil.getBean(IAdminDao.class);
        Admin admin = adminDao.findById(id);
        if (admin == null) return null;
        return SpringUtil.getBean(AdminModel.class, admin);
    }

    public AdminModel(Admin admin) {
        this.admin = admin;
        if (adminDao == null) {
            SpringUtil.autowire(this);
        }
    }

    public ClientModel createClient(Client client) {
        clientDao.save(client);
        ClientModel result = SpringUtil.getBean(ClientModel.class, client);
        return result;
    }

    public ClerkModel createClerk(Clerk clerk) {
        clerkDao.save(clerk);
        ClerkModel result = SpringUtil.getBean(ClerkModel.class, clerk);
        return result;
    }

    public Admin getData() {
        return admin;
    }

    private Admin admin;

    @Autowired
    private IAdminDao adminDao;
    @Autowired
    private IClerkDao clerkDao;
    @Autowired
    private IClientDao clientDao;
}
