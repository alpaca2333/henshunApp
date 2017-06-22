package cn.hengshun.model;

import cn.hengshun.model.entity.Admin;
import cn.hengshun.model.entity.Clerk;
import cn.hengshun.model.entity.Client;
import cn.hengshun.util.SpringUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;
import org.springframework.web.context.request.NativeWebRequest;
import org.springframework.web.context.request.RequestAttributes;
import org.springframework.web.context.request.RequestContextHolder;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

/**
 * Created by alpaca on 17-6-7.
 */
@Component
@Scope("prototype")
public class Session {

<<<<<<< HEAD

    public Session() {
        RequestAttributes attribs = RequestContextHolder.getRequestAttributes();
        if (attribs instanceof NativeWebRequest) {
            HttpServletRequest request = (HttpServletRequest) ((NativeWebRequest) attribs).getNativeRequest();
            this.session = request.getSession(true);
        }

=======
    public Session(HttpServletRequest request) {
        this.session = request.getSession(true);
>>>>>>> 2c355e1a616eadc3204c685aedc4630bd040004b
    }

    public void loginAs(ClerkModel clerk) {
        logout();
        session.setAttribute("clerk", clerk);
    }

    public void loginAs(ClientModel client) {
        logout();
        session.setAttribute("client", client);
    }

    public void loginAs(AdminModel admin) {
        logout();
        session.setAttribute("admin", admin);
    }

    public Object getCurrentUser() {
        Clerk clerk = (Clerk) session.getAttribute("clerk");
        Client client = (Client) session.getAttribute("client");
        Admin admin = (Admin) session.getAttribute("admin");
        if (clerk != null) return SpringUtil.getBean(ClerkModel.class, clerk);
        if (client != null) return SpringUtil.getBean(ClientModel.class, client);
        if (admin != null) return SpringUtil.getBean(AdminModel.class, admin);
        return null;
    }

    public void logout() {
        session.removeAttribute("clerk");
        session.removeAttribute("client");
    }

    private HttpSession session;
}
