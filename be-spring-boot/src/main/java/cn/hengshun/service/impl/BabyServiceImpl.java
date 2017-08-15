package cn.hengshun.service.impl;

import cn.hengshun.model.entity.CustomerBaby;
import cn.hengshun.model.entity.Pe;
import cn.hengshun.model.entity.PeItem;
import cn.hengshun.model.repository.CustomerBabyRepository;
import cn.hengshun.model.repository.PeItemRepository;
import cn.hengshun.model.repository.PeRepository;
import cn.hengshun.model.util.ErrorCode;
import cn.hengshun.service.BabyService;
import cn.hengshun.util.Constants;
import cn.hengshun.vo.Baby;
import cn.hengshun.vo.Pe_Item;
import cn.hengshun.vo.Pe_detail;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.xml.ws.ServiceMode;
import java.util.HashSet;
import java.util.LinkedList;
import java.util.List;
import java.util.Set;

/**
 * Created by 11946 on 2017/8/10.
 */

@Service
public class BabyServiceImpl implements BabyService {

    @Autowired
    CustomerBabyRepository customerBabyRepository;

    @Autowired
    PeRepository peRepository;

    @Autowired
    PeItemRepository peItemRepository;
    @Override
    public int addBabyRelation(Long babyId, Long parentId) {
        CustomerBaby customerBaby = new CustomerBaby();
        customerBaby.setBabyId(babyId);
        customerBaby.setCustomerId(parentId);
        customerBabyRepository.save(customerBaby);
        return ErrorCode.SUCCESS;
    }

    @Override
    public List<Baby> getBabyByCustomer(Long customerId) {

        List<cn.hengshun.model.entity.Baby> babyentities = customerBabyRepository.getBabyByCustomerId(customerId);
        List<Baby> babyVos = new LinkedList<>();
        for(cn.hengshun.model.entity.Baby babyentity : babyentities){
            Baby babyoVo = new Baby(babyentity);
            List<Pe> pes = peRepository.getPesByBabyId(babyentity.getId());
            //todo 取时间最新的一条pe
            Pe pe = pes.get(0);

            List<PeItem> items = peItemRepository.getPeItemsByPeid(pe.getId());
            Set<Pe_Item> pe_items = new HashSet<>();
            Pe_detail pe_detail = new Pe_detail();
            pe_detail.setId(pe.getId());
            pe_detail.setTime(pe.getTime());
            for(PeItem item : items){
                Pe_Item voitem = new Pe_Item();
                voitem.setTitle(item.getTitle());
                voitem.setContent(item.getContent());
                pe_items.add(voitem);
            }
            pe_detail.setItems(pe_items);
            babyoVo.setPe_detail(pe_detail);
            babyVos.add(babyoVo);
        }

        return babyVos;
    }
}
