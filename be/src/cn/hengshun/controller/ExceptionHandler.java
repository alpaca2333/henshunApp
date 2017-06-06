package cn.hengshun.controller;

import org.springframework.web.bind.annotation.ControllerAdvice;

import javax.servlet.http.HttpServletRequest;

/**
 * Created by alpaca on 17-6-3.
 */
@ControllerAdvice
public class ExceptionHandler {
    @org.springframework.web.bind.annotation.ExceptionHandler(Exception.class)
    public String exceptionHandler(HttpServletRequest request, Exception e) {
        return "500.html";
    }
}
