package cn.hengshun.model.repository;

import cn.hengshun.model.entity.Payment;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface PaymentRepository extends JpaRepository<Payment, Long>{

    List<Payment> findByCustomerId(Long customerId);


}
