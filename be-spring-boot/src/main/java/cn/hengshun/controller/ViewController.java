package cn.hengshun.controller;

import cn.hengshun.service.UserService;
import cn.hengshun.vo.ResultMessage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.sql.SQLException;

/**
 * Created by alpaca on 17-6-3.
 */
@Controller
public class  ViewController {

    @RequestMapping("/login")
    public String loginView() {
        return "login.html";
    }

    @RequestMapping("/console/admin")
    public String adminView() {
        return "console-admin.html";
    }

    @RequestMapping("/console")
    public String consoleView() {
        return "console.html";
    }

    @RequestMapping("/test")
    public @ResponseBody ResultMessage test() {
        return new ResultMessage();
    }
}
