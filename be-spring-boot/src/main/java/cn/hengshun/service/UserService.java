package cn.hengshun.service;

import cn.hengshun.model.entity.Customer;
import cn.hengshun.model.entity.User;
import cn.hengshun.vo.Customer_bref;
import cn.hengshun.vo.ResultMessage;
import cn.hengshun.vo.UserVO;


public interface UserService {

        /**
         * 添加User
         * @param user
         * @return
         */
        public ResultMessage addUser(UserVO user);

        /**
         * 获取UserList
         * @return
         */
        ResultMessage listUser();

        ResultMessage deleteUser();

        ResultMessage updateUser(User user);

        boolean login(String username, String psw);

        ResultMessage addCustomer(Customer customer);

        ResultMessage updateCustomer(Customer customer);

        ResultMessage deleteCustomer(Customer customer);

        Customer queryCustomer(Long id);



}
