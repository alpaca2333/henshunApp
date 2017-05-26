package cn.hengshun.util;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;

/**
 * Created by alpaca on 16-11-12.
 */
public class TimeUtil {

    private static SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd hh:mm:ss");

    public static Calendar parseTime(String time) throws ParseException {
        Date tmp  = null;
        tmp = formatter.parse(time);
        Calendar result = Calendar.getInstance();
        result.setTime(tmp);
        return result;
    }

    public static Calendar parseDate(String time) throws ParseException {
        SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd");
        Date tmp;
        tmp = formatter.parse(time);
        Calendar result = Calendar.getInstance();
        result.setTime(tmp);
        return result;
    }

    public static String getFullTimeString(Calendar time) {
        return formatter.format(time);
    }

    public static String getShortTimeString(Calendar time) {
        SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd");
        return formatter.format(time.getTime());
    }

    public static String getShortTimeString(Date time) {
        SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd");
        return formatter.format(time);
    }
}
