package cn.hengshun.model.repository;

import cn.hengshun.model.entity.Customer;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Created by 11946 on 2017/8/10.
 */
public interface CustomerRepository extends JpaRepository<Customer, Long> {


}
