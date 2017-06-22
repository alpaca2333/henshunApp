package cn.hengshun.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

/**
 * Created by 11946 on 2017/6/17.
 */

@Controller
@RequestMapping("/api")
public class ApiController {

    /**
     *
     * @return
     */
    @RequestMapping("/my/customers")
    public @ResponseBody String  myCustomers(){
        return "";
    }

    @RequestMapping("/customers")
    public @ResponseBody String customers(@RequestParam(value="id")String id ){
        return "";
    }

    @RequestMapping("/createtable")
    public @ResponseBody String createTable(@RequestParam(value="id") String id){
        return "";
    }


    @RequestMapping("/addCustomerToClient")
    public @ResponseBody String addCustomerClient(@RequestParam(value="id") String id){
        return "";
    }






}
