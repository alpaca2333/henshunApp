package cn.hengshun.util;

import net.sf.json.JSONObject;

/**
 * Created by alpaca on 16-12-20.
 */
public class JSONUtil {

    public static String json(Object o) {
        JSONObject jsonObject = JSONObject.fromObject(o);
        return jsonObject.toString();
    }
}
