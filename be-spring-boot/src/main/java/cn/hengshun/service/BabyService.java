package cn.hengshun.service;

import cn.hengshun.model.entity.Baby;

import java.util.List;

/**
 * Created by 11946 on 2017/8/10.
 */
public interface BabyService {

    int addBabyRelation(Long babyId, Long parentId);

    List<cn.hengshun.vo.Baby> getBabyByCustomer(Long customerId);
}
