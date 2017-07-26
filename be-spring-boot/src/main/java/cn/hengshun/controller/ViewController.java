package cn.hengshun.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import java.sql.SQLException;

/**
 * Created by alpaca on 17-6-3.
 */
@Controller
public class ViewController {
    @RequestMapping("/login")
    public String loginView() throws SQLException {
        return "login.html";
    }

    @RequestMapping("/admin")
    public String adminView() throws SQLException {
        return "admin.html";
    }

    @RequestMapping("/console")
    public String consoleView() throws SQLException{
        return "console.html";
    }




}
