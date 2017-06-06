package cn.hengshun.controller.interceptor;

import cn.hengshun.util.Log;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.handler.HandlerInterceptorAdapter;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.ArrayList;
import java.util.List;

/**
 * Created by alpaca on 17-6-3.
 */
@Component
public class AuthFilter extends HandlerInterceptorAdapter {

    // check through the urlPatterns list if it is not empty
    private List<String> urlPatterns;
    // check through the excludePatterns if urlPatterns is empty
    private List<String> excludePatterns = new ArrayList<>();

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
        Log.i("intercepted.");
        Log.i(request.getRequestURI());
        if (urlPatterns == null || urlPatterns.isEmpty()) {
            for (String pattern: excludePatterns) {
                if (request.getRequestURL().toString().matches(pattern)) {
                    return true;
                }
            }
            return handle(request, response, handler);
        } else {
            for (String pattern: urlPatterns) {
                if (request.getRequestURL().toString().matches(pattern)) {
                    return handle(request, response, handler);
                }
            }
            return true;
        }

    }

    private boolean handle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
        if (request.getSession().getAttribute("userId") != null) {
            response.sendRedirect("/login");
            return false;
        }
        return true;
    }

    public List<String> getUrlPatterns() {
        return urlPatterns;
    }

    public void setUrlPatterns(List<String> urlPatterns) {
        this.urlPatterns = urlPatterns;
    }

    public List<String> getExcludePatterns() {
        return excludePatterns;
    }

    public void setExcludePatterns(List<String> excludePatterns) {
        this.excludePatterns = excludePatterns;
    }
}
