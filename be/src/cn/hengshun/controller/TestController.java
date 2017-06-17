package cn.hengshun.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

/**
 * Created by alpaca on 2017/5/9.
 */
@Controller
public class TestController {
    @RequestMapping("/")
    public @ResponseBody String response() {
        return "login.html";
    }
}
