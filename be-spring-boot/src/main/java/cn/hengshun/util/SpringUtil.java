package cn.hengshun.util;

import org.springframework.beans.BeansException;
import org.springframework.context.ApplicationContext;
import org.springframework.context.ApplicationContextAware;
import org.springframework.stereotype.Component;

/**
 * Created by alpaca on 16-12-20.
 */
@Component
public class SpringUtil implements ApplicationContextAware {

    public static void autowire(Object bean) {
        context.getAutowireCapableBeanFactory().autowireBean(bean);
    }

    public static <T> T getBean(Class<T> bean) {
        return context.getBean(bean);
    }

    public static Object getBean(String bean) {
        return context.getBean(bean);
    }

    public static <T> T getBean(Class<T> bean, Object... params) {
        return context.getBean(bean, params);
    }

    public static ApplicationContext getContext() {
        return context;
    }

    private static void setContext(ApplicationContext context) {
        SpringUtil.context = context;
    }

    @Override
    public void setApplicationContext(ApplicationContext applicationContext) throws BeansException {
        setContext(applicationContext);
    }

    private static ApplicationContext context;
}
