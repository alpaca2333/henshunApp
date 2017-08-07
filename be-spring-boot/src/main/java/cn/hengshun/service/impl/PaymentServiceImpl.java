package cn.hengshun.service.impl;

import cn.hengshun.model.repository.PaymentRepository;
import cn.hengshun.service.PaymentService;
import cn.hengshun.vo.Payment;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.LinkedList;
import java.util.List;

@Service
public class PaymentServiceImpl implements PaymentService {

    @Autowired
    PaymentRepository paymentRepository;

    @Override
    public List<Payment> getPaymentByCustomerId(Long id) {

        List<cn.hengshun.model.entity.Payment> entityList = paymentRepository.findByCustomerId(id);
        List<Payment> voList = new LinkedList<>();
        for(cn.hengshun.model.entity.Payment paymentEntity : entityList){
            Payment payment = new Payment(paymentEntity);
            voList.add(payment);
        }
        return voList;
    }
}
