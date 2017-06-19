package cn.hengshun.controller;

import cn.hengshun.vo.ResultMessage;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;

/**
 * Created by alpaca on 2017/5/9.
 */
@Controller
public class TestController {
    @RequestMapping("/")
    public @ResponseBody String response() {
        return "啦啦啦！";
    }

    @RequestMapping("/console")
    public String consoleView() {
        return "console.html";
    }

    @RequestMapping("/api/customers")
    public @ResponseBody ResultMessage allCustomers(HttpServletRequest request) {
        return new ResultMessage();
    }
}
