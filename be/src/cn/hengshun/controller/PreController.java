package cn.hengshun.controller;

import cn.hengshun.model.ClientModel;
import cn.hengshun.model.CustomerModel;
import cn.hengshun.model.entity.Customer;
import cn.hengshun.model.entity.enums.Gender;
import cn.hengshun.util.JSONUtil;
import cn.hengshun.util.ResponseMessage;
import cn.hengshun.vo.Customer_bref;
import cn.hengshun.vo.ResultMessage;
import com.sun.corba.se.impl.protocol.giopmsgheaders.RequestMessage;
import org.json.JSONArray;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

/**
 * api接口的测试版本
 * Created by 11946 on 2017/6/27.
 */
@Controller
@RequestMapping("/pre/api")
public class PreController {

    @Autowired
    private ClientModel clientModel;

    @Autowired
    private CustomerModel customerModel;

    /**
     * 根据当前登录的门店店主（通过session判断），返回自己所有的顾客列表。
     * @return
     */
    @RequestMapping("/my/customers")
    @ResponseBody
    public  ResultMessage myCustomers(@RequestParam(value="clientid") String clientId){
        Set<Customer> customersList = clientModel.queryCustomerByClientId(clientId);
        Set<Customer_bref> customer_brefs = new HashSet<>();
        for(Customer customer : customersList){
            Customer_bref customer_bref = new Customer_bref(customer);
            customer_brefs.add(customer_bref);
        }
        ResultMessage resultMessage  = new ResultMessage(customer_brefs);
        return resultMessage;
    }


    /**
     * 根据id 获取顾客的详细信息
     * @param id
     * @return
     */
    @RequestMapping(value = "/api/customer", method = RequestMethod.GET)
    @ResponseBody
    public ResultMessage customerInfo(@RequestParam(value="id") String id){
        return null;

    }

    @RequestMapping(value = "/api/customer", method= RequestMethod.POST)
    @ResponseBody
    public ResultMessage createCustomer(Customer_bref customer_bref){
        Customer customer = new Customer();
        //todo id? 系统自动分配还是?  register 字段？
        customer.setName(customer_bref.getName());
        customer.setGender(customer_bref.getGender().equals("male")? Gender.male:Gender.female);
        customer.setMobile(customer_bref.getPhoneNumber());

        boolean result = customerModel.addCustomer(customer);
        if(result){
            //添加成功
        }else{
            //添加失败
        }

        return null;


    }
}
