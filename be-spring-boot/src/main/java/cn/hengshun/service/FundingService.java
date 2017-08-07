package cn.hengshun.service;

import cn.hengshun.vo.Funding;

import java.util.List;

public interface FundingService {

    /**
     * 获取众筹的详细信息
     * @param id
     * @return
     */
    Funding getSpecificFunding(Long id);

    /**
     * 获取所有的众筹信息
     * @return
     */
    List<Funding> getAllFundings();


}
