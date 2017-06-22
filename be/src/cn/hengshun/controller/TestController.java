package cn.hengshun.controller;

import cn.hengshun.model.CustomerModel;
import cn.hengshun.model.entity.enums.Gender;
import cn.hengshun.model.entity.enums.Vip;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import java.sql.Timestamp;

/**
 * Created by alpaca on 2017/5/9.
 */
@Controller
public class TestController {
    @RequestMapping("/")
    public @ResponseBody String response() {
        return "login.html";
    }

    @RequestMapping("/addCustomer")
    public @ResponseBody String addCustomer(@RequestParam(value="name") String name,
                                            @RequestParam(value="gender") String gender,
                                            @RequestParam(value="birthday") String birthday,
                                            @RequestParam(value="mobile") String mobile,
                                            @RequestParam(value="email") String email,
                                            @RequestParam(value="isVip") String isVip){
        Gender localGender = gender.equals("male")? Gender.male : Gender.female;
        Timestamp lcoalBirthday = Timestamp.valueOf("2017-06-22 23:42:48");
        Vip vip = isVip.equals("vip")?Vip.vip_1 : Vip.normal;
        customerModel.addCustomer(name,localGender,lcoalBirthday,mobile,email,vip);

        return "add successful";
    }

    @Autowired
    private CustomerModel customerModel;
}
