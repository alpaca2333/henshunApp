package cn.hengshun.service.impl;

import cn.hengshun.model.entity.Customer;
import cn.hengshun.model.entity.User;
import cn.hengshun.model.repository.CustomerRepository;
import cn.hengshun.model.repository.UserRepository;
import cn.hengshun.service.UserService;
import cn.hengshun.vo.Customer_bref;
import cn.hengshun.vo.ResultMessage;
import cn.hengshun.vo.UserVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.LinkedList;
import java.util.List;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    UserRepository userRepository;

    @Autowired
    CustomerRepository customerRepository;

    @Override
    public ResultMessage addUser(UserVO user) {
        User userEntity = new User(user);
        User newUser = userRepository.save(userEntity);
        ResultMessage resultMessage;
        if(newUser.getId()!=null){
            //添加成功
            resultMessage = new ResultMessage(newUser);
        }else{
            //添加失败
            resultMessage = new ResultMessage(100,"添加失败");
        }

        return resultMessage;

    }

    @Override
    public ResultMessage listUser() {
        List<User> userList = userRepository.findAll();
        List<UserVO> voList = new LinkedList<>();
        for(User user : userList){
            UserVO vo = new UserVO(user);
            voList.add(vo);
        }
        ResultMessage resultMessage = new ResultMessage(voList);
        return resultMessage;
    }

    @Override
    public ResultMessage deleteUser() {
        return null;
    }

    @Override
    public ResultMessage updateUser(User user) {
        return null;
    }

    @Override
    public boolean login(String username, String psw) {

        User userEntity =  userRepository.findByUserName(username);
        if(userEntity.equals(psw)){
            return true;
        }
        return false;
    }

    /**
     * 添加Customer
     * @param customer
     * @return
     */
    @Override
    public ResultMessage addCustomer(Customer customer) {
        Customer result = customerRepository.save(customer);
        return new ResultMessage(result);
    }

    /**
     * 更新customer 信息
     * @param customer
     * @return
     */
    @Override
    public ResultMessage updateCustomer(Customer customer) {
        Customer result = null ;
        if(customer.getId()!=null) {
            result = customerRepository.save(customer);
        }else{
            System.out.println("update but id is null");
        }
        return new ResultMessage(result);
    }

    @Override
    public ResultMessage deleteCustomer(Customer customer) {
        customerRepository.delete(customer);
        return new ResultMessage(null);
    }

    @Override
    public Customer queryCustomer(Long id) {
        Customer customer = customerRepository.findOne(id);
        return customer;
    }
}
