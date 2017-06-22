package cn.hengshun.controller;

import cn.hengshun.model.ClientModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.http.HttpServletRequest;
import java.sql.SQLException;
import java.util.List;

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
