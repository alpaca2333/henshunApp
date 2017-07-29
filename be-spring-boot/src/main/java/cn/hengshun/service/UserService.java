package cn.hengshun.service;

import cn.hengshun.model.entity.User;
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
        public ResultMessage listUser();

        public ResultMessage deleteUser();

        public ResultMessage updateUser(User user);

}
