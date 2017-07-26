package cn.hengshun.util;

import java.util.List;

/**
 * Created by 11946 on 2017/6/17.
 */
public class ResponseMessage {

    private String error;
    private String message;
    private List data;

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

    public void setData(List data) {
        this.data = data;
    }
}
