package cn.hengshun.model.repository;

import cn.hengshun.model.entity.PaymentProduct;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PaymentProductRepository extends JpaRepository<PaymentProduct, Long> {


}
