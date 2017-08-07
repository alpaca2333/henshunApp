package cn.hengshun.service;

import cn.hengshun.vo.Payment;

import java.util.List;

public interface PaymentService {

    List<Payment> getPaymentByCustomerId(Long id);
}
