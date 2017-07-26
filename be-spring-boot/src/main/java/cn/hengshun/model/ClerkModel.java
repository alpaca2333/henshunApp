package cn.hengshun.model;

import cn.hengshun.model.dao.IClerkDao;
import cn.hengshun.model.dao.IClientDao;
import cn.hengshun.model.entity.Clerk;
import cn.hengshun.model.entity.Client;
import cn.hengshun.model.util.ErrorCode;
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

    public int addClerk(String name, String phoneNumber, String password){
        // 重名查询
        List<Clerk> resultList  = clerkDao.getCustomQuery("select c from clerk c where c.name='"+name +"'");
        if(resultList.size()>0){
            //重名
            return ErrorCode.NAME_EXIST;
        }else{
            Clerk clerk = new Clerk();
            clerk.setName(name);
            clerk.setPhoneNumber(phoneNumber);
            clerk.setPassword(password);
            clerkDao.save(clerk);
            return ErrorCode.SUCCESS;
        }

    }


    @Autowired
    private IClerkDao clerkDao;

    @Autowired
    private IClientDao clientDao;
}
