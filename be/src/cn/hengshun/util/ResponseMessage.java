package cn.hengshun.util;

import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

/**
 * Created by 11946 on 2017/6/17.
 */
@Component
@Scope("prototype")
public class ResponseMessage {

    private String error;
    private String message;
    private Object data;

    public String getError() {
        return error;
    }

    public void setError(String error) {
        this.error = error;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public Object getData() {
        return data;
    }

    public void setData(Object data) {
        this.data = data;
    }
}
