package cn.hengshun.util;

import net.sf.json.JSONArray;
import net.sf.json.JSONObject;

import java.lang.reflect.Array;

/**
 * Created by alpaca on 16-12-20.
 */
public class JSONUtil {

    public static String json(Object o) {
        JSONObject jsonObject = JSONObject.fromObject(o);
        return jsonObject.toString();
    }

    public static String arrayjson(Object o){
        JSONArray array = JSONArray.fromObject(o);
        //JSONArray.
        return array.toString();

    }
}
