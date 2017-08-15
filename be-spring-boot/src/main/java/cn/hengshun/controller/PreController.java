package cn.hengshun.controller;

import cn.hengshun.model.entity.Customer;
import cn.hengshun.service.BabyService;
import cn.hengshun.service.FundingService;
import cn.hengshun.service.UserService;
import cn.hengshun.vo.Baby;
import cn.hengshun.vo.Customer_bref;
import cn.hengshun.vo.Funding;
import cn.hengshun.vo.ResultMessage;
import org.json.JSONException;
import org.json.JSONObject;
import org.json.JSONString;
import org.springframework.beans.factory.annotation.Autowired;
;
import org.springframework.web.bind.annotation.*;

import java.util.List;


/**
 * api接口的测试版本
 * Created by 11946 on 2017/6/27.
 */
@RestController
@RequestMapping("/pre/api")
public class PreController {


    @Autowired
    private FundingService fundingService;

    @Autowired
    private UserService userService;

    @Autowired
    private BabyService babyService;


    @RequestMapping(value="/customer", method=RequestMethod.POST)
    public ResultMessage createCustomer(@RequestBody String jsonStr) throws JSONException {
        JSONObject jsonObject = new JSONObject(jsonStr);
        Customer customer = new Customer(jsonObject);
        ResultMessage result = userService.addCustomer(customer);
        return result;
    }

    @RequestMapping(value="/customer", method=RequestMethod.PUT)
    public ResultMessage updateCustomer(@RequestBody String jsonStr) throws JSONException{
        JSONObject jsonObject = new JSONObject(jsonStr);
        Customer customer = new Customer(jsonObject);
        customer.setId(jsonObject.optLong("id"));
        ResultMessage resultMessage = userService.updateCustomer(customer);
        return resultMessage;
    }

    @RequestMapping(value="/customer", method=RequestMethod.DELETE)
    public ResultMessage deleteCustomer(@RequestParam String id){
        Long queryId = Long.parseLong(id);
        Customer customer = userService.queryCustomer(queryId);
        userService.deleteCustomer(customer);
        return new ResultMessage(null);
    }

    @RequestMapping(value="/customer/{id}/babies ", method=RequestMethod.GET)
    public ResultMessage getBabiesofCustomer(@PathVariable String id){
        long queryId  = Long.parseLong(id);
        List<Baby> babies = babyService.getBabyByCustomer(queryId);
        return new ResultMessage(babies);
    }

    /**
     * 根据当前登录的门店店主（通过session判断），返回自己所有的顾客列表。
     * @return
     */
    @RequestMapping("/my/customers")
    @ResponseBody
    public  ResultMessage myCustomers(@RequestParam(value="clientid") String clientId){
//        Set<Customer> customersList = clientModel.queryCustomerByClientId(clientId);
//        Set<Customer_bref> customer_brefs = new HashSet<>();
//        for(Customer customer : customersList){
//            Customer_bref customer_bref = new Customer_bref(customer);
//            customer_brefs.add(customer_bref);
//        }
//        ResultMessage resultMessage  = new ResultMessage(customer_brefs);
//        return resultMessage;

        return  null;
    }


    /**
     * 根据id 获取顾客的详细信息
     * @param id
     * @return
     */
    @RequestMapping("/api/customer")
    @ResponseBody
    public ResultMessage customerInfo(@RequestParam(value="id") String id){
        return null;

    }

    @RequestMapping(value = "/api/user", method= RequestMethod.POST)
    public ResultMessage addUser(@RequestBody String jsonStr){
        try {
            JSONObject jsonObject = new JSONObject(jsonStr);
        } catch (JSONException e) {
            e.printStackTrace();
        }

        return null;
    }

    @RequestMapping(value="/api/funding", method=RequestMethod.GET)
    public ResultMessage getFunding(@RequestParam String id){
        Long querryId = Long.parseLong(id);
        Funding funding = fundingService.getSpecificFunding(querryId);
        ResultMessage resultMessage = new ResultMessage(funding);
        return resultMessage;
    }
}
