package cn.hengshun.controller;


import cn.hengshun.model.BabyModel;
import cn.hengshun.model.ClerkModel;
import cn.hengshun.model.ClientModel;
import cn.hengshun.model.CustomerModel;
import cn.hengshun.model.entity.enums.Gender;
import cn.hengshun.model.entity.enums.Vip;
import org.springframework.beans.factory.annotation.Autowired;

import cn.hengshun.vo.ResultMessage;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;


import java.sql.Timestamp;

import javax.servlet.http.HttpServletRequest;


/**
 * Created by alpaca on 2017/5/9.
 */
@Controller
@RequestMapping("/test")
public class TestController {
    @RequestMapping("/")
    public @ResponseBody String response() {
        return "login.html";
    }


    /**
     * 需要定义一下birthay 的格式
     * @param name
     * @param gender
     * @param birthday
     * @param mobile
     * @param email
     * @param isVip
     * @return
     */
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

    @RequestMapping("/relation/add")
    public @ResponseBody String addRelation(@RequestParam(value="customerName") String customerId,
                                            @RequestParam(value="clientName") String clientId){

        int resultCode = clientModel.addRelation(customerId, clientId);
        return resultCode+"";
    }

    @RequestMapping("/client/add")
    public @ResponseBody String addClient(@RequestParam(value="username") String username,
                                          @RequestParam(value="password") String password,
                                          @RequestParam(value="phoneNumber") String phoneNumber){
        int result = clientModel.addClient(username,password,phoneNumber);
        return result + "";
    }


    /**
     * need test
     * @param name
     * @param phoneNumber
     * @param password
     * @return
     */
    @RequestMapping("/clerk/add")
    public @ResponseBody String addClerk(@RequestParam(value="name") String name,
                                         @RequestParam(value="phoneNumber") String phoneNumber,
                                         @RequestParam(value="password") String password){
        int resultCode = clerkModel.addClerk(name, phoneNumber, password);
        return resultCode+"";
    }

    @RequestMapping("/baby/add")
    public @ResponseBody String addBabay(@RequestParam(value="name") String name,
                                         @RequestParam(value="gender") String gender,
                                         @RequestParam(value="birthday") String birthday,
                                         @RequestParam(value="parentid") String parentId){
        Gender localGender = gender.equals("male")?Gender.male:Gender.female;
        Timestamp localTimeStamp = Timestamp.valueOf(birthday);
        Integer localParentId = Integer.parseInt(parentId);
        int resultCode = babyModel.addBaby(name, localTimeStamp,localGender,localParentId);
        return resultCode+"";


    }

    @Autowired
    private BabyModel babyModel;

    @Autowired
    private CustomerModel customerModel;

    @Autowired
    private ClientModel clientModel;

    @Autowired
    private ClerkModel clerkModel;

    @RequestMapping("/console")
    public String consoleView() {
        return "console.html";
    }

    @RequestMapping("/api/customers")
    public @ResponseBody ResultMessage allCustomers(HttpServletRequest request) {
        return new ResultMessage();
    }

}
