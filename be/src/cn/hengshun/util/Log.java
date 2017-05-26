package cn.hengshun.util;

import static org.fusesource.jansi.Ansi.Color.*;
import static org.fusesource.jansi.Ansi.ansi;

/**
 * Created by alpaca on 16-11-10.
 */
public class Log {
    public static void linfo(Object s) {
        if (s == null) s = "null";
        System.out.println( ansi().fg(BLUE).a(s.toString()).reset() );
    }

    public static void lwarn(Object s) {
        if (s == null) s = "null";
        System.out.println( ansi().fg(YELLOW).a(s.toString()).reset() );
    }

    public static void lout(Object s) {
        if (s == null) s = "null";
        System.out.println(s);
    }

    public static void lerr(Object s) {
        if (s == null) s = "null";
        System.out.println( ansi().fg(RED).a(s.toString()).reset() );
    }

    public static void lcls() {
        System.out.print( ansi().eraseScreen() );
    }

    public static void lcll() {
        System.out.print( ansi().eraseLine() );
    }
}
