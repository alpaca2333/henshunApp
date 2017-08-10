package cn.hengshun.service.impl;

import cn.hengshun.model.entity.CustomerBaby;
import cn.hengshun.model.repository.CustomerBabyRepository;
import cn.hengshun.model.util.ErrorCode;
import cn.hengshun.service.BabyService;
import cn.hengshun.util.Constants;
import org.springframework.beans.factory.annotation.Autowired;

/**
 * Created by 11946 on 2017/8/10.
 */
public class BabyServiceImpl implements BabyService {

    @Autowired
    CustomerBabyRepository customerBabyRepository;

    @Override
    public int addBabyRelation(Long babyId, Long parentId) {
        CustomerBaby customerBaby = new CustomerBaby();
        customerBaby.setBabyId(babyId);
        customerBaby.setCustomerId(parentId);
        customerBabyRepository.save(customerBaby);
        return ErrorCode.SUCCESS;
    }
}
