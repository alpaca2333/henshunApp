package cn.hengshun.service.impl;

import cn.hengshun.model.entity.Customer;
import cn.hengshun.model.entity.FundingMember;
import cn.hengshun.model.entity.Product;
import cn.hengshun.model.repository.FundingMemberRepository;
import cn.hengshun.model.repository.FundingProductRepository;
import cn.hengshun.model.repository.FundingRepository;
import cn.hengshun.service.FundingService;
import cn.hengshun.vo.Funding;
import cn.hengshun.vo.Member;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.LinkedList;
import java.util.List;

@Service
public class FundingServiceImpl implements FundingService {

    @Autowired
    FundingRepository fundingRepository;

    @Autowired
    FundingMemberRepository fundingMemberRepository;

    @Autowired
    FundingProductRepository fundingProductRepository;

    @Override
    public Funding getSpecificFunding(Long id) {

        cn.hengshun.model.entity.Funding fundingEntity = fundingRepository.findOne(id);
        List<Customer> customerList = fundingMemberRepository.customerQuery(id);
        List<Product> productList = fundingProductRepository.findFundingByFundingId(id);


        List<Member> members = new LinkedList<>();
        for(Customer customerEntity : customerList){
            Member member = new Member(customerEntity);
            FundingMember fundingMember = fundingMemberRepository.findFundingMemberByMemberIdAndFundingId(member.getId(),id);
            member.setAmount(fundingMember.getAmount());
            members.add(member);
        }

        List<cn.hengshun.vo.Product> products = new LinkedList<>();
        for(Product productEntity : productList){
            cn.hengshun.vo.Product productVO = new cn.hengshun.vo.Product(productEntity);
            products.add(productVO);
        }

        Funding funding = new Funding(fundingEntity);
        funding.setProducts(products);
        funding.setMembers(members);



        return funding;
    }

    @Override
    public List<Funding> getAllFundings() {

        List<cn.hengshun.model.entity.Funding> entityList = fundingRepository.findAll();
        List<Funding> voList = new LinkedList<>();
        for(cn.hengshun.model.entity.Funding entity : entityList){
            Funding vo = new Funding(entity);
            voList.add(vo);
        }
        return voList;
    }
}
