package cn.hengshun.controller.interceptor;

import cn.hengshun.util.Log;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.handler.HandlerInterceptorAdapter;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.ArrayList;
import java.util.List;

/**
 * urlPatterns为需要检查的url正则表达式列表。
 * excludedPatterns为需要排除的url正则表达式。
 * urlPatterns与excludedPatterns都为空时检查所有url。
 * 当一者为空时另一个生效。当两者都不为空时，urlPatterns生效。
 *
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
        //Log.i("Intercepted: [" + request.getRequestURI() + "]");
        if (urlPatterns == null || urlPatterns.isEmpty()) {
            for (String pattern: excludePatterns) {
                if (request.getRequestURI().matches(pattern)) {
                    return true;
                }
            }
            Log.i("authenticating...");
            return handle(request, response, handler);
        } else {
            for (String pattern: urlPatterns) {
                if (request.getRequestURI().matches(pattern)) {
                    Log.i("authenticating...");
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
