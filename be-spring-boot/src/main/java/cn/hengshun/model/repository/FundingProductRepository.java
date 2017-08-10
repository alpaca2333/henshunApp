package cn.hengshun.model.repository;

import cn.hengshun.model.entity.FundingProduct;
import cn.hengshun.model.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface FundingProductRepository extends JpaRepository<FundingProduct, Long> {

    @Query("select p from Product p , FundingProduct fp where p.id = fp.productId and fp.fundingId=?1")
    List<Product> findFundingByFundingId(Long id);
}
