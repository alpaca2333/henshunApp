package cn.hengshun.util;

import org.fusesource.jansi.Ansi;

import static org.fusesource.jansi.Ansi.Color.*;
import static org.fusesource.jansi.Ansi.ansi;

/**
 * Created by alpaca on 16-11-10.
 */
public class Log {
    public static void i(Object s) {
        print(BLUE, s);
    }

    public static void w(Object s) {
        print(YELLOW, s);
    }

    public static void o(Object s) {
        if (s == null) s = "null";
        System.out.println(s);
    }

    public static void e(Object s) {
        print(RED, s);
    }

    private static void print(Ansi.Color color, Object s) {
        if (s == null) s = "null";
        System.out.println( ansi().fg(color).a(s.toString()).reset() );
    }

    public static void cls() {
        System.out.print( ansi().eraseScreen() );
    }

    public static void cll() {
        System.out.print( ansi().eraseLine() );
    }
}
