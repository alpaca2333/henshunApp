package cn.hengshun.service.impl;

import cn.hengshun.model.entity.User;
import cn.hengshun.model.repository.UserRepository;
import cn.hengshun.service.UserService;
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
}
